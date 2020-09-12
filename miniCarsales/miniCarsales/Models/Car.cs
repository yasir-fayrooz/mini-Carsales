using System.ComponentModel.DataAnnotations;

namespace miniCarsales.Models
{
    public class Car : Vehicle
    {

        [Required]
        [StringLength(50)]
        public string Engine { get; set; }
        
        [Required]
        [Range(1, 20)]
        public int Doors { get; set; }
        [Required]
        [Range(4, 20)]
        public int Wheels { get; set; }
        [Required]
        public BodyType BodyType { get; set; }



    }
}
