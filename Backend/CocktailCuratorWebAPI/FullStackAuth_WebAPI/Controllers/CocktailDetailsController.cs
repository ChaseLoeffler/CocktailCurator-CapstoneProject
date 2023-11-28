using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.DataTransferObjects;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CocktailDetailsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CocktailDetailsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET api/<CocktialDetailsController>/5
        [HttpGet("{id}"), Authorize]
        public IActionResult Get(string id)
        {
            try
            {
                string userId = User.FindFirstValue("id");
                var favorites = _context.Favorites.Where(f => f.UserId.Equals(userId)).Where(f => f.BookId.Equals(id));
                bool favorited;
                if (favorites.FirstOrDefault() != null)
                {
                    favorited = true;
                }
                else
                {
                    favorited = false;
                }
                var cocktail = new CocktailDetailsDto
                {
                    Comments = _context.Comments.Where(c => c.CocktailId.Equals(id)).Select(c=>new CommentWithUserDTO
                    {
                        Id = c.Id,
                        CocktailId = c.CocktailId,
                        Text = c.Text,
                        Rating = c.Rating,
                        User = new UserForDisplayDto
                        {
                            Id = c.User.Id,
                            FirstName = c.User.FirstName,
                            LastName = c.User.LastName,
                            UserName = c.User.UserName
                        }
                    }).ToList(),
                    AverageRating = Math.Round(_context.Comments.Select(c=>c.Rating).ToArray().Average(),1),
                    CocktailFavorited = favorited
                };

                return StatusCode(200, cocktail);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
