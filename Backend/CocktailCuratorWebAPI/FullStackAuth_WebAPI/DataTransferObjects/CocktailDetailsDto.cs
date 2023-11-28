namespace FullStackAuth_WebAPI.DataTransferObjects
{
    public class CocktailDetailsDto
    {
        public virtual ICollection<CommentWithUserDTO> Comments { get; set; }
        public double AverageRating { get; set; }
        public bool CocktailFavorited { get; set; }
    }
}
