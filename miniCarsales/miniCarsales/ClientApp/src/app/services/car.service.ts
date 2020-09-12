import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VehicleType, BodyType } from "../addCar/addcar.component";
import { Observable } from "rxjs";


//The Cars data as an object serialised from c# to Typescript
export interface CarData {
  Make: string;
  Model: string;
  VehicleType: VehicleType;
  Engine: string;
  Doors: number;
  Wheels: number;
  BodyType: BodyType;
}

@Injectable()
export class CarService {
  myAppUrl: string = ""; //Store the url of the host in a string

  constructor(private _http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  //Gets the cars and returns it as an array of CarData objects
  getCars(): Observable<CarData[]> {
    return this._http.get<CarData[]>(this.myAppUrl + "api/Car/GetCars/");
  }

  //Adds a car to the database via http POST using an API
  addCar(car) {
    return this._http.post(this.myAppUrl + "api/Car/AddCar/", car);
  }
}
