import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  mid=""  //movie id 
  view=<any>[]    //contains selected movie data
  Bookticket=<any>[]
  isVisible=true;
  newSeats:number;    //to store no of seats left
  bookingData;    // to store details of user booked movie (time and no seats, amount)
  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get('http://localhost:3000/movies')
  }

  newMovie(movies){
    return this.http.post('http://localhost:3000/addMovie',{'movie':movies})
    .subscribe(data=>{
      console.log(data)
    })
  }

  deleteMovie(id){
    return this.http.post("http://localhost:3000/delete",{"mid":id})

  }

  updateMovie(data){
    console.log("inside service")
    return this.http.post("http://localhost:3000/update",{"movie":data,"mid":this.mid})
    .subscribe(data=>{
      console.log(data)
    })
    }
  
    updateSeats(data){
      console.log("inside service")
      return this.http.post("http://localhost:3000/updateSeats",{"movie":data,"mid":this.mid})
      .subscribe(data=>{
        console.log(data)
      })
      }

   

      loggedIn(){
        return !!localStorage.getItem('token')
      }

      adminCheck(){
        return !!localStorage.getItem('admin')
      }

      categorize(id){
        return this.http.post("http://localhost:3000/categorize",{"id":id})
        
      }
}

