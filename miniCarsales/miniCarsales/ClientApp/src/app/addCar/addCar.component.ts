import { Component, Inject } from '@angular/core';
import { CarService } from '../services/car.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-car',
  templateUrl: './addCar.component.html',
  styleUrls: ['./addCar.css']
})

export class AddCar {
  public carForm: FormGroup;

  private makeModels: string[];

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private carService: CarService,
    private _router: Router, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.carForm = this._fb.group({
      Make: ["", [Validators.required]],
      Model: ["", [Validators.required]],
      VehicleType: [VehicleType.Car],
      Engine: ["", [Validators.required]],
      Doors: [0, [Validators.required]],
      Wheels: [0, [Validators.required]],
      BodyType: ["", [Validators.required]],
    });
  }

  public SelectMake(selectedValue: string): void {
    this.carForm.reset();
    this.carForm.patchValue({ 'VehicleType': VehicleType.Car });
    this.carForm.patchValue({ 'Make': selectedValue });
    this.PopulateModels();
  }

  public SelectModel(selectedValue: string): void {
    this.carForm.patchValue({ 'Model': selectedValue });
  }

  public SelectEngine(selectedValue: string): void {
    this.carForm.patchValue({ 'Engine': selectedValue });
  }

  public ValidateDoors(selectedValue: number, doorError: any): void {
    if (selectedValue > 0 && selectedValue <= 20) {
      doorError.innerHTML = "";
      this.carForm.patchValue({ 'Doors': Number(selectedValue) });
    }
    else {
      this.carForm.patchValue({ 'Doors': null });
      this.carForm.patchValue({ 'BodyType': null });
      doorError.innerHTML = "Doors must be greater than 0 and less than 20!";
    }
  }

  public ValidateWheels(selectedValue: number, wheelError: any): void {
    if (selectedValue >= 4 && selectedValue <= 20) {
      wheelError.innerHTML = "";
      this.carForm.patchValue({ 'Wheels': Number(selectedValue) });
    }
    else {
      this.carForm.patchValue({ 'Wheels': null });
      this.carForm.patchValue({ 'BodyType': null });
      wheelError.innerHTML = "Wheels must be between 4 and 20 inclusive!";
    }
  }

  public SelectBodyType(selectedValue: string): void {
    this.carForm.patchValue({ 'BodyType': Number(selectedValue) });
  }

  public AddToDatabase(): void {
    this.carService.addCar(this.carForm.value).subscribe((data) => {
      this._router.navigate(["/Listings"]);
    }, error => console.log(error));

  }

  private PopulateModels(): void {
    if (this.carForm.value['Make'] == 'Toyota') {
      this.PopulateToyota();
    }
    else if (this.carForm.value['Make'] == 'Volkswagen') {
      this.PopulateVolkswagen();
    }
    else if (this.carForm.value['Make'] == 'Mazda') {
      this.PopulateMazda();
    }
    else if (this.carForm.value['Make'] == 'Audi') {
      this.PopulateAudi();
    }
    else if (this.carForm.value['Make'] == 'BMW') {
      this.PopulateBMW();
    }
  }

  private PopulateToyota(): void {
    this.makeModels = []
    this.makeModels.push('Corolla')
    this.makeModels.push('Yaris')
    this.makeModels.push('RAV4')
    this.makeModels.push('CH-R')
    this.makeModels.push('86')
  }

  private PopulateVolkswagen(): void {
    this.makeModels = []
    this.makeModels.push('Golf')
    this.makeModels.push('Polo')
    this.makeModels.push('Passat')
    this.makeModels.push('Tiguan')
    this.makeModels.push('Transporter')
  }

  private PopulateMazda(): void {
    this.makeModels = []
    this.makeModels.push('2')
    this.makeModels.push('3')
    this.makeModels.push('6')
    this.makeModels.push('Rx-8')
    this.makeModels.push('CX-5')
  }

  private PopulateAudi(): void {
    this.makeModels = []
    this.makeModels.push('A1')
    this.makeModels.push('A3')
    this.makeModels.push('A4')
    this.makeModels.push('S1')
    this.makeModels.push('R8')
  }

  private PopulateBMW(): void {
    this.makeModels = []
    this.makeModels.push('X5')
    this.makeModels.push('1 Series')
    this.makeModels.push('Z4')
    this.makeModels.push('M Series')
    this.makeModels.push('5 Series')
  }

  public get getBodyType(): typeof BodyType {
    return BodyType;
  }
}

export enum VehicleType {
  Car = 1,
  Boat = 2,
  Caravan = 3,
}
export enum BodyType {
  Hatchback = 1,
  Sedan = 2,
  SUV = 3,
  Ute = 4,
  Coupe = 5,
  Convertible = 6,
  Wagon = 7,
  Van = 8,
}
