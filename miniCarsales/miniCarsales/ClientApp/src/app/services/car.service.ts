import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CarService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getCars() {
    return this._http.get(this.myAppUrl + "api/Car/GetCars/");
  }

  addCar(car) {
    return this._http.post(this.myAppUrl + "api/Car/AddCar/", car);
  }
}
