import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieModel } from '../movelist/movie.model'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  movies:MovieModel;
  finalAmount;    //total amount of tickets
  constructor(private movieService:MovieService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    //this.movies=JSON.parse(JSON.stringify(this.movieService.view))
    this.movies=JSON.parse(localStorage.getItem('viewMovie'))
    this.finalAmount=this.userService.bookingData.amount;
   // this.finalAmount=localStorage.getItem('booking.amount');
    
  }

  pay()

  {
   
    if(this.userService.bookingData.time==this.movies.time1){
      this.movies.seats1=this.movieService.newSeats;
      
    }
    if(this.userService.bookingData.time==this.movies.time2){
     
      this.movies.seats2=this.movieService.newSeats;
    }
    if(this.userService.bookingData.time==this.movies.time3){
      this.movies.seats3=this.movieService.newSeats;
      
    }
    if(this.userService.bookingData.time==this.movies.time4){
      this.movies.seats4=this.movieService.newSeats;
     
    }
   // this.movies.seats1=this.movieService.newSeats;
     this.movieService.updateSeats(this.movies);
     
      this.userService.addBookingData()
      alert("payment successfull!!")
      this.router.navigate(['/movies'])
    //console.log("y"+this.movies.name)
    //console.log(this.movieService.newSeats)
    //console.log("userId"+this.userService.userId)
    //console.log("booking data"+this.userService.bookingData.time)
  }
}
