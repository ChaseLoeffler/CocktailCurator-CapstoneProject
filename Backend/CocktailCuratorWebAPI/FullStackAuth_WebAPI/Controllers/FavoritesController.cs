﻿using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FavoritesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/<FavoritesController>
        [HttpGet, Authorize]
        public IActionResult GetUsersFavorites()
        {
            try
            {
                string userId = User.FindFirstValue("id");

                var favorites = _context.Favorites.Where(f => f.UserId.Equals(userId));

                return StatusCode(200, favorites);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // GET: api/Favorites/WithIngredients
        [HttpGet("WithIngredients"),Authorize]
        public IActionResult GetFavoritesWithIngredients()
        {
            try
            {
                string userId = User.FindFirstValue("id");

                var favorites = _context.Favorites.Where(f => f.UserId.Equals(userId));

                return StatusCode(200, favorites);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // POST api/<FavoritesController>
        [HttpPost, Authorize]
        public IActionResult Post([FromBody] Favorite favorite)
        {
            try
            {
                string userId = User.FindFirstValue("id");

                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized();
                }

                favorite.UserId = userId;

                _context.Favorites.Add(favorite);
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _context.SaveChanges();
                return StatusCode(201, favorite);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // DELETE api/<FavoritesController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Favorite favorite = _context.Favorites.FirstOrDefault(c =>c.Id == id);
                if (favorite == null)
                {
                    return NotFound();
                }

                var userId = User.FindFirstValue("id");
                if(string.IsNullOrEmpty(userId) || favorite.UserId != userId)
                {
                    return Unauthorized();
                }

                _context.Favorites.Remove(favorite);
                _context.SaveChanges();
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
