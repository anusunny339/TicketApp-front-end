import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieModel } from '../movelist/movie.model';
import {Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
id;
movies:MovieModel[];
viewMovie=<any>[]
  constructor(private route:ActivatedRoute,private movieService:MovieService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieService.categorize(this.id).subscribe((data)=>{
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
