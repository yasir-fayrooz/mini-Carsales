using Microsoft.EntityFrameworkCore;
using miniCarsales.Models;
using miniCarsales.Models.Context;
using System.Collections.Generic;
using System.Linq;
namespace miniCarsales.DataManager
{
    public class CarManager
    {
        private readonly MiniCarsalesContext _context = new MiniCarsalesContext();

        public List<Car> GetCars()
        {
            return _context.Car.ToList();
        }

        public void AddCar(Car car)
        {
            _context.Add(car).State = EntityState.Added;
            _context.SaveChanges();
        }
    }
}
