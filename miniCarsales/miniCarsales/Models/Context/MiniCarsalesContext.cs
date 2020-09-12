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

        public DbSet<Car> Car { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=master;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }
    }
}
