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

        //Gets a JSON list of all the cars stored on the database via api call
        public List<Car> GetCars()
        {
            return _context.Car.ToList();
        }

        //Adds a car to the database and saves the changes.
        public void AddCar(Car car)
        {
            _context.Add(car).State = EntityState.Added;
            _context.SaveChanges();
        }
    }
}
