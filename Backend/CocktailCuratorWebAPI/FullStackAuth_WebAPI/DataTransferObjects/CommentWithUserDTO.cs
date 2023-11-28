namespace FullStackAuth_WebAPI.DataTransferObjects
{
    public class CommentWithUserDTO
    {
        public int Id { get; set; }
        public string CocktailId { get; set; }
        public string Text { get; set; }
        public double Rating { get; set; }
        public UserForDisplayDto User { get; set; }
    }
}
