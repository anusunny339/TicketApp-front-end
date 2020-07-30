import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieModel } from '../movelist/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  title:String="Edit Product"
  id=this.movieService.mid;
  pId:number
  
  movies:MovieModel;
  constructor(private movieService:MovieService,private router:Router) { }
  moviedata=new MovieModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
  
  ngOnInit(): void {

   // this.movies=JSON.parse(JSON.stringify(this.movieService.view))
    this.movies=JSON.parse(localStorage.getItem('editMovie'))
    this.moviedata=this.movies;
  //console.log("l"+this.movies.name)
  }

  update(){
   // console.log(this.moviedata)
    this.movieService.updateMovie(this.moviedata);
    console.log("called")
    alert("successfully updated")
    this.router.navigate(['/adminView'])
    //this.router.navigate(['/'])
  }

}
