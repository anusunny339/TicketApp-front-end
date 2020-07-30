import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  user=new UserModel(null,null,null,null,null,null);
 
  ngOnInit(): void {
  }

  Register(){
    
    this.userService.RegisterUser(this.user);
    console.log("called")
    alert("successfully Added!")
    this.router.navigate(['/'])
  }

}
