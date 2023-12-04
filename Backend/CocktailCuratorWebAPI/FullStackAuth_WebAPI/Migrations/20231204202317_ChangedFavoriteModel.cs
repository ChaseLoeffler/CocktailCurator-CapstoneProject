using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class ChangedFavoriteModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "179e74c8-bd6f-42a3-890d-92362d8a718f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b3c65ec0-ac8f-4a2f-8916-537a482f8936");

            migrationBuilder.AddColumn<string>(
                name: "Ingredients",
                table: "Favorites",
                type: "longtext",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1847fffe-4286-41ce-856a-a4cfacd0bcf8", null, "User", "USER" },
                    { "7bf90491-b0dc-4c6b-a375-33adfd24023a", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1847fffe-4286-41ce-856a-a4cfacd0bcf8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7bf90491-b0dc-4c6b-a375-33adfd24023a");

            migrationBuilder.DropColumn(
                name: "Ingredients",
                table: "Favorites");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "179e74c8-bd6f-42a3-890d-92362d8a718f", null, "Admin", "ADMIN" },
                    { "b3c65ec0-ac8f-4a2f-8916-537a482f8936", null, "User", "USER" }
                });
        }
    }
}
