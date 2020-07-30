import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
userId;            //login user id
bookingData;    // to store details of user booked movie (time and no seats, amount)
  constructor(private http:HttpClient) { }

  RegisterUser(data){
    return this.http.post("http://localhost:3000/register",{"user":data})
    .subscribe(data=>{
      console.log(data)
    })
  }

  loginUser(email,password){
    return this.http.post("http://localhost:3000/login",{"email":email,"password":password})
  }

  addBookingData(){
    return this.http.post("http://localhost:3000/addbooking",{"userId":localStorage.getItem('userId'),"data":this.bookingData})
    .subscribe(data=>{
      console.log(data)
    })
  }

  bookings(){
    return this.http.post("http://localhost:3000/bookings",{"userId":localStorage.getItem('userId')})
  }

  allBookings(){
    return this.http.get("http://localhost:3000/allbookings")
  }

  checkAdmin(){
    return this.http.get("http://localhost:3000/valueSet")
  }

}
