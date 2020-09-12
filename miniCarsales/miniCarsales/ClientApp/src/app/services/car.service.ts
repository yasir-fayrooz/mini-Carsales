import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VehicleType, BodyType } from "../addCar/addcar.component";
import { Observable } from "rxjs";

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
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getCars(): Observable<CarData[]> {
    return this._http.get<CarData[]>(this.myAppUrl + "api/Car/GetCars/");
  }

  addCar(car) {
    return this._http.post(this.myAppUrl + "api/Car/AddCar/", car);
  }
}
