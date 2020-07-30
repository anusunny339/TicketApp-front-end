import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { MovieModel }  from '../movelist/movie.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

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
  }

  delete(id){
   
    this.movieService.deleteMovie(id).subscribe(data=>{
      console.log(data);
    
  })
  alert("successfully deleted")
      this.router.navigate(['/adminView'])
    // window.location.reload();
    location.reload()
   }

   edit(id){
    this.movieService.mid=id;
 
    this.router.navigate(['edit'])
   // console.log("movie list edit")
    //console.log(this.movies)
   this.viewMovie=this.movies.find(x => x._id === id); 
  // console.log(this.viewMovie)
  // this.movieService.view=this.viewMovie;
   localStorage.setItem('editMovie',JSON.stringify(this.viewMovie))
   
  }

}
