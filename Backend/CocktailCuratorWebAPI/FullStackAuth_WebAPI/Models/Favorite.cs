﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace FullStackAuth_WebAPI.Models
{
    public class Favorite
    {
        [Key]
        public int id { get; set; }
        public string CocktailId { get; set; }
        public string Title { get; set; }
        public string ThumbnailUrl { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
