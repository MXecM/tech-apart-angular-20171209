import { Component, OnInit } from '@angular/core';
import { Trip } from './model/trip';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listUi: boolean;

  tripForm: FormGroup;

  constructor(private fb: FormBuilder ) {}
  trips: Trip[] = [{
    name: 'Super  Flights to Mars',
    price: 1300,
    duration: '5 earth years',
    description: 'Race through the Solar System to reach the Red planet.This flight will take 11 Earth Years for each side of the journey.',
    url: 'https://download.pearltrees.com/s/pic/or/-115106467'
  },
  {
    name: 'Super  Flights to jupiter',
    price: 1300,
    duration: '5 earth years',
    description: 'Race through the Solar System to reach the Red planet.This flight will take 11 Earth Years for each side of the journey.',
    url: 'https://download.pearltrees.com/s/pic/or/-115106467'
  }];

  public ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.tripForm = this.fb.group({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    duration: new FormControl ('', Validators.required),
    description: new FormControl ('', Validators.required),
    url: new FormControl ('', Validators.required),
    // tslint:disable-next-line:semicolon
    })
  }

  toggleDisplayMode() {
    if (this.listUi === true) {
      this.listUi = false;
    } else {
      this.listUi = true;
    }
  }

  formSubmitted() {
    const newTrip = {
      name: this.tripForm.controls.name.value,
      price: this.tripForm.controls.price.value,
      duration: this.tripForm.controls.duration.value,
      description: this.tripForm.controls.description.value,
      url: this.tripForm.controls.url.value,
    };
    this.trips.push(newTrip);
    console.log('dfc', this.trips);
    this.listUi = true;
  }

  // title = 'app';

   // trip_name = 'xyz';

//  trip_price = '1000/-';

  // trip_duration = '50';

}
