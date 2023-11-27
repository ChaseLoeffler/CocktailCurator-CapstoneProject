using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FullStackAuth_WebAPI.Models
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        public string CocktailId { get; set; }
        public string Text { get; set; }
        public double Rating { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
