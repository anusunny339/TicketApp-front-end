import { Component, OnInit } from '@angular/core';
import { MovieModel } from './movie.model';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movelist',
  templateUrl: './movelist.component.html',
  styleUrls: ['./movelist.component.css']
})
export class MovelistComponent implements OnInit {

  movies:MovieModel[];
  viewMovie=<any>[]
  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit(): void {

    this.movieService.getMovies().subscribe((data)=>{
      this.movies=JSON.parse(JSON.stringify(data))
    })
  }

  view(id){
    this.movieService.mid=id;
 
    this.router.navigate(['view'])
    console.log("movie view")
    console.log(this.movies)
   this.viewMovie=this.movies.find(x => x._id === id); 
   console.log(this.viewMovie)
   this.movieService.view=this.viewMovie;
  // localStorage.setItem('movie',this.viewMovie)
  localStorage.setItem('viewMovie',JSON.stringify(this.viewMovie))
 // this.bookings=JSON.parse(localStorage.getItem('data'))
  }

}
