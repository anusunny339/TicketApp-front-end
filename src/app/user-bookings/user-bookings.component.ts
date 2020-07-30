import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BookingModel } from '../booking-details/booking.model';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {
bookings=<any>[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.allBookings().subscribe(res=>{
      console.log(res)
      localStorage.setItem('bookings',JSON.stringify(res['bookings']))
      this.bookings=JSON.parse(localStorage.getItem('bookings'))
     // console.log("bookings"+this.bookings.name)
      })
    this.bookings=JSON.parse(localStorage.getItem('bookings'))
  }

}
