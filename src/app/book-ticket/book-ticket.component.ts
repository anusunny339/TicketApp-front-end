import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieModel } from '../movelist/movie.model';
import { Router } from '@angular/router';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  movies:MovieModel;
  
  selectedMovie=<any>[]
  seats;           // user entered seats number
  updatedSeats;
  amount;   //calculate amount
  time="";          //user selected time 
  userBooking=<any>[] // to store details of  user booked movie(time and seats)
  constructor(private movieService:MovieService,private router:Router,private userService:UserService) { }
  moviedata=new MovieModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
  
  
  ngOnInit(): void {
    //this.movies=JSON.parse(JSON.stringify(this.movieService.view))
    this.movies=JSON.parse(localStorage.getItem('viewMovie'))
  }

  amountCal(){
    console.log("amount "+this.seats)
    if(this.seats>0 &&this.seats!=""){
      this.amount=(this.movies.price)*(this.seats);
    }
    else{
         this.amount="";
    }
   
    
    console.log("l"+this.amount)
    console.log(" seats"+this.movies)

  }

  payNow(){

    if(this.time=="")
    {
      alert("please choose time")
    }
   
   
    //console.log(localStorage.getItem('userId'))
     
         if(this.movies.time1==this.time)
         {
              if(this.movies.seats1>0 && this.movies.seats1>=this.seats && this.seats!=0)
              {
                      // this.movies.seats1=(this.movies.seats1)-(this.seats)
                     // this.movieService.updateSeats(this.movies);
                 this.movieService.newSeats=(this.movies.seats1)-(this.seats);
                 this.updatedSeats=(this.movies.seats1)-(this.seats);
                 //localStorage.setItem('updatedSeats',(this.updatedSeats))

                 this.userBooking=
                  {
                    movieName:this.movies.name,
                    time:this.movies.time1,
                    seats:this.seats,
                    amount:this.amount,
                    imgUrl:this.movies.imgUrl
                  }
                 this.userService.bookingData=this.userBooking;
               //  localStorage.setItem('booking',(this.userBooking))
                 this.router.navigate(['/payment'])
              }
           else if(this.movies.seats1<this.seats)
           {
             alert("only "+this.movies.seats1+" seats left!")
           }
           else if(this.movies.seats1==0){
            alert("no seat left!please choose other show time")
           }
           else{
          alert("please enter no of seats you want ")
            }
   
        }

     if(this.movies.time2==this.time)
     {
        if(this.movies.seats2>0 && this.movies.seats2>=this.seats && this.seats!=0)
         {
              // this.movies.seats1=(this.movies.seats1)-(this.seats)
             // this.movieService.updateSeats(this.movies);
         this.movieService.newSeats=(this.movies.seats2)-(this.seats);
         //localStorage.setItem('updatedSeats',(this.updatedSeats))
         this.userBooking=
          {
            movieName:this.movies.name,
            time:this.movies.time2,
            seats:this.seats,
            amount:this.amount,
            imgUrl:this.movies.imgUrl
          }
         this.userService.bookingData=this.userBooking;
        // localStorage.setItem('booking',(this.userBooking))
         this.router.navigate(['/payment'])
        }
        else if(this.movies.seats2<this.seats)
           {
             alert("only "+this.movies.seats2+" seats left!")
           }
           else if(this.movies.seats2==0){
            alert("no seat left!please choose other show time")
           }
           else{
          alert("please enter no of seats you want ")
            }

      }


   if(this.movies.time3==this.time){

    if(this.movies.seats3>0 && this.movies.seats3>=this.seats && this.seats!=0)
    {
         // this.movies.seats1=(this.movies.seats1)-(this.seats)
        // this.movieService.updateSeats(this.movies);
    this.movieService.newSeats=(this.movies.seats3)-(this.seats);
    //localStorage.setItem('updatedSeats',(this.updatedSeats))
    this.userBooking=
     {
       movieName:this.movies.name,
       time:this.movies.time3,
       seats:this.seats,
       amount:this.amount,
       imgUrl:this.movies.imgUrl
     }
    this.userService.bookingData=this.userBooking;
   // localStorage.setItem('booking',(this.userBooking))
    this.router.navigate(['/payment'])
   }
   else if(this.movies.seats3<this.seats)
      {
        alert("only "+this.movies.seats3+" seats left!")
      }
      else if(this.movies.seats3==0){
        alert("no seat left!please choose other show time")
       }
       else{
      alert("please enter no of seats you want ")
        }
    
   }
   if(this.movies.time4==this.time){
    if(this.movies.seats4>0 && this.movies.seats4>=this.seats && this.seats!=0)
    {
         // this.movies.seats1=(this.movies.seats1)-(this.seats)
        // this.movieService.updateSeats(this.movies);
    this.movieService.newSeats=(this.movies.seats4)-(this.seats);
  //  localStorage.setItem('updatedSeats',(this.updatedSeats))
    this.userBooking=
     {
       movieName:this.movies.name,
       time:this.movies.time4,
       seats:this.seats,
       amount:this.amount,
       imgUrl:this.movies.imgUrl
     }
    this.userService.bookingData=this.userBooking;
   // localStorage.setItem('booking',(this.userBooking))
    this.router.navigate(['/payment'])
   }
   else if(this.movies.seats4<this.seats)
      {
        alert("only "+this.movies.seats4+" seats left!")
      }
      else if(this.movies.seats1==0){
        alert("no seat left!please choose other show time")
       }
       else{
      alert("please enter no of seats you want ")
        }
   }
   

  
    
  }
}
