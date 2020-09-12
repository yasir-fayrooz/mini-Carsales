import { Component, Inject } from '@angular/core';
import { CarService } from '../services/car.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.css']
})

export class Listings {
  public carForm: FormGroup;

  private listOfCars: [];

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private carService: CarService,
    private _router: Router, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

  }

}
