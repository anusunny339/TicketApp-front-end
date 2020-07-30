import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email;
password;
adminUser='admin@gmail.com';
adminPassword="admin";
bookings=<any>[]

  constructor(private userService:UserService,private router:Router,private movieService:MovieService) { }

  ngOnInit(): void {
  }

  login(){
    
    /*this.userService.loginUser(this.email,this.password).subscribe(res=>{
      localStorage.setItem('token',res['token'])

      this.router.navigate(['/'])
    },
    
   err=>{
     alert("user doesn't exist!! Register first")
    this.router.navigate(['/register'])
  
  })*/

    //console.log(this.email)
    this.userService.checkAdmin().subscribe(res=>{
      console.log(res)
    })
   
   if(this.email==this.adminUser && this.password==this.adminPassword){
     this.movieService.isVisible=false;
     console.log(this.movieService.isVisible);
     localStorage.setItem('admin','admin');
     this.router.navigate(['/'])
   }
   
  else{
    this.userService.loginUser(this.email,this.password).subscribe(res=>{
      //console.log(res['id'])
      this.userService.userId=res['id'];
      //console.log(this.userService.userId)
      localStorage.setItem('token',res['token'])
      localStorage.setItem('userId',res['id'])
     
      /*this.userService.bookings().subscribe(res=>{
      console.log(res)
      localStorage.setItem('data',JSON.stringify(res['user']))
      this.bookings=JSON.parse(localStorage.getItem('data'))
      console.log("bookings"+this.bookings.name)
      })*/
      this.router.navigate(['/'])
    },
    
   err=>{
     alert("user doesn't exist!! Register first")
    this.router.navigate(['/register'])
  
  })
  }

    
 }


}
