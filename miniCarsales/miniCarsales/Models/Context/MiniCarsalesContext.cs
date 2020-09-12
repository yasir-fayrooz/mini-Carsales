using Microsoft.EntityFrameworkCore;

namespace miniCarsales.Models.Context
{
    public class MiniCarsalesContext : DbContext
    {
        public MiniCarsalesContext()
        {
        }
        public MiniCarsalesContext(DbContextOptions<MiniCarsalesContext> options)
            : base(options)
        {
        }

        //The Car Table
        public DbSet<Car> Car { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //This should be in appsettings.json for security purposes i guess?
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=master;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }
    }
}
