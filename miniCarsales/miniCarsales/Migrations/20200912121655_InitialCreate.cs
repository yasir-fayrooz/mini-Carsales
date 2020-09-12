using Microsoft.EntityFrameworkCore.Migrations;

namespace miniCarsales.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Car",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Make = table.Column<string>(maxLength: 30, nullable: false),
                    Model = table.Column<string>(maxLength: 30, nullable: false),
                    VehicleType = table.Column<int>(nullable: false),
                    Engine = table.Column<string>(maxLength: 50, nullable: false),
                    Doors = table.Column<int>(nullable: false),
                    Wheels = table.Column<int>(nullable: false),
                    BodyType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Car");
        }
    }
}
