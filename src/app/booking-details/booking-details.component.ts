import { Component, OnInit } from '@angular/core';
import { BookingModel } from './booking.model';

import { UserService } from '../user.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
bookings=<any>[];
CurrentDate = new Date();
bookingmodel:BookingModel[];
movie;
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.bookings().subscribe(res=>{
      console.log(res)
      localStorage.setItem('data',JSON.stringify(res['user']))
      this.bookings=JSON.parse(localStorage.getItem('data'))
     // console.log("bookings"+this.bookings.name)
      })
    this.bookingmodel=JSON.parse(localStorage.getItem('data'))
  }

 

}
