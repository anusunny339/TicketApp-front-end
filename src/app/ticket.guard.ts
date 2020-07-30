import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { MovieService } from './movie.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketGuard implements CanActivate {
  constructor(private movieService:MovieService,private router:Router){

  }
  canActivate():boolean{
    if(this.movieService.loggedIn()){
      console.log(true)
      return true;
    }
    else{
      this.router.navigate(['/login'])
        return false

    }
  }
  
}
