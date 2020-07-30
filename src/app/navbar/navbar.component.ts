import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isVisible;
  constructor(public movieService:MovieService,private router:Router) { }
  

  ngOnInit(): void {
    //this.isVisible=this.movieService.isVisible;
  }
  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    this.router.navigate(['/'])
  }

  logoutAdmin(){
    localStorage.removeItem('admin')
    this.router.navigate(['/'])
  }

}
