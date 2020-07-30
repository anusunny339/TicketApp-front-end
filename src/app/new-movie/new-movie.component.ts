import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { MovieModel } from '../movelist/movie.model'

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router) { }
  movies=new MovieModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
  ngOnInit(): void {
  }

  Addmovie(){
    
    this.movieService.newMovie(this.movies);
    console.log("called")
    alert("successfully Added!")
    this.router.navigate(['/'])
  }

}
