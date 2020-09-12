import { Component, Inject } from '@angular/core';
import { CarService, CarData } from '../services/car.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
      this.carsData = result;
    }, error => console.error(error));
  }

  public onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
