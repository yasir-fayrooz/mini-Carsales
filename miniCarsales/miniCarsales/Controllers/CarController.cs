using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using miniCarsales.DataManager;
using miniCarsales.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace miniCarsales.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarController : Controller
    {
        private readonly CarManager _repo = new CarManager();

        //get a list of the db of cars retuned in json format?
        [HttpGet("GetCars")]
        public List<Car> GetCars()
        {
            return _repo.GetCars();
        }

        //add a car to the db
        [HttpPost("AddCar")]
        public void AddCarToDB([FromBody] Car car)
        {
            _repo.AddCar(car);
        }
    }
}
