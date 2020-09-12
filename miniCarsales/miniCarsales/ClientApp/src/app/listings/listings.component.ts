import { Component, Inject } from '@angular/core';
import { CarService, CarData } from '../services/car.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VehicleType, BodyType } from '../addCar/addcar.component';

@Component({
  selector: 'listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.css']
})

export class Listings {
  private carsData: CarData[];
  pageOfItems: Array<any>;

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private carService: CarService,
    private _router: Router, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    carService.getCars().subscribe(result => {
      this.carsData = result; //store the response in the carsData instance as it loads in
    }, error => console.error(error));
  }

  public onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  //Method returns the vehicles type as a string based from the enum input
  //Im sure there's a better way of doing this though.
  public getVehicleType(vehicleType: VehicleType): string {
    if (vehicleType == VehicleType.Car) {
      return "Car";
    }
    else if (vehicleType == VehicleType.Boat) {
      return "Boat";
    }
    else if (vehicleType == VehicleType.Caravan) {
      return "Caravan";
    }
    else {
      return "Unknown";
    }
  }

  //Returns the picture of the Body Type based on its enum value
  public getMedia(bodyType: BodyType) {
    if (bodyType == BodyType.Convertible)
      return "carsales_images/convertible.jpg";
    else if (bodyType == BodyType.Coupe) {
      return "carsales_images/coupe.jpg";
    }
    else if (bodyType == BodyType.Hatchback) {
      return "carsales_images/hatchback.jpg";
    }
    else if (bodyType == BodyType.Sedan) {
      return "carsales_images/sedan.jpg";
    }
    else if (bodyType == BodyType.SUV) {
      return "carsales_images/suv.jpg";
    }
    else if (bodyType == BodyType.Ute) {
      return "carsales_images/ute.jpg";
    }
    else if (bodyType == BodyType.Van) {
      return "carsales_images/van.jpg";
    }
    else if (bodyType == BodyType.Wagon) {
      return "carsales_images/wagon.jpg";
    }
    else {
      return "";
    }
  }

}
