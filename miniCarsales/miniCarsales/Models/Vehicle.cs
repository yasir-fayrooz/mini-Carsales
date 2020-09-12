using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace miniCarsales.Models
{
    public abstract class Vehicle
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(30)]
        public string Make { get; set; }
        [Required]
        [StringLength(30)]
        public string Model { get; set; }
        [Required]
        public VehicleType VehicleType { get; set; }
    }
}
