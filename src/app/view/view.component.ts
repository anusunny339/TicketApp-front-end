import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieModel } from '../movelist/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id=this.movieService.mid;
  mId:number
  
  movies:MovieModel;
  selectedMovie=<any>[]
  constructor(private movieService:MovieService,private router:Router) { }
   //moviedatas= new MovieModel(null,null,null,null,null,null,null,null,null,null,null,null,null)
  ngOnInit(): void {

    //this.movies=JSON.parse(JSON.stringify(this.movieService.view))
     this.movies=JSON.parse(localStorage.getItem('viewMovie'))
   
  console.log("l"+this.movies.name)
  }

  bookTicket(id){
    console.log(id)
   this.router.navigate(['/bookTicket'])
  }
}