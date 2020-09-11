using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace carsales.Models
{
    public class Car : Vehicle
    {
        public Car(string Make, string Model)
        {
            this.Id = Id;
            this.Make = Make;
            this.Model = Model;
            this.VehicleType = VehicleType.Car;
        }

        public string Engine { get; set; }
        public int Doors { get; set; }
        public int Wheels { get; set; }
        public BodyType BodyType { get; set; }



    }
}
