using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarsales.Models
{
    public abstract class Vehicle
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public VehicleType VehicleType { get; set; }
    }
}
