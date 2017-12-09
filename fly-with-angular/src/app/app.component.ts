import { Component } from '@angular/core';
import { Trip } from './model/trip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'app';

   //trip_name = 'xyz';

//  trip_price = '1000/-';

  //trip_duration = '50';



  trip: Trip = {
    name: 'Super  Flights to Mars',
    price: 1300,
    duration: '5 earth years',
    description: 'Race through the Solar System to reach the Red planet.This flight will take 11 Earth Years for each side of the journey.',
    url: 'https://download.pearltrees.com/s/pic/or/-115106467'
  };









}
