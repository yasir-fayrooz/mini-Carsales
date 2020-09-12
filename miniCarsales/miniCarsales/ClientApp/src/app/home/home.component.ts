import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  private validSelection: boolean = false;
  private otherSelected: boolean = false;

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
