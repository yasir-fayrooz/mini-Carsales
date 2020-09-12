import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
//These booleans check if you have selected a valid selection (only car is valid for now)
  private validSelection: boolean = false;
  private otherSelected: boolean = false;


  //This function helps disable or enable the create listing button in the html page based on selection
  public OnOptionSelected(selectedValue: string): void {
    if (selectedValue == 'Other') {
      this.validSelection = false;
      this.otherSelected = true;
    }
    else {
      this.otherSelected = false;
    }

    if (selectedValue == 'Car') {
      this.validSelection = true;
    }
  }
}
