import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../movelist/movie.model';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //isVisible = true;
  movies:MovieModel[];
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data)=>{
      this.movies=JSON.parse(JSON.stringify(data))
    })
  }

}
