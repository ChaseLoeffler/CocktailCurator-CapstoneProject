using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public CommentsController(ApplicationDbContext context)
        {
            _context = context;
        }


        // POST api/<CommentsController>
        [HttpPost, Authorize]
        public IActionResult Post([FromBody] Comment comment)
        {
            try
            {
                string userId = User.FindFirstValue("Id");

                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized();
                }
                comment.UserId = userId;
                _context.Comments.Add(comment);
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _context.SaveChanges();
                return StatusCode(201, comment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // PUT api/<CommentsController>/5
        [HttpPut("{id}"), Authorize]
        public IActionResult Put(int id, [FromBody] Comment data)
        {
            try
            {
                Comment comment = _context.Comments.Include(c => c.User).FirstOrDefault(c => c.Id == id);

                if (comment == null)
                {
                    return NotFound();
                }

                var userId = User.FindFirstValue("id");
                if (string.IsNullOrEmpty(userId) || comment.UserId != userId)
                {
                    return Unauthorized();
                }

                comment.UserId = userId;
                comment.User = _context.Users.Find(userId);
                comment.Rating = data.Rating;
                comment.Text = data.Text;
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _context.SaveChanges();
                return StatusCode(201, comment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // DELETE api/<CommentsController>/5
        [HttpDelete("{id}"), Authorize]
        public IActionResult Delete(int id)
        {
            try
            {
                Comment comment = _context.Comments.FirstOrDefault(c => c.Id == id);
                if (comment == null)
                {
                    return NotFound();
                }

                var userId = User.FindFirstValue("id");
                if (string.IsNullOrEmpty(userId) || comment.UserId != userId)
                {
                    return Unauthorized();
                }

                _context.Comments.Remove(comment);
                _context.SaveChanges();
                return StatusCode(404);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
