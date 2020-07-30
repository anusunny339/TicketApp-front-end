import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovelistComponent } from './movelist/movelist.component';
import { HomeComponent } from './home/home.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { ViewComponent } from './view/view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TicketGuard } from './ticket.guard';
import { PaymentComponent } from './payment/payment.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { CategoryComponent } from './category/category.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movies',component:MovelistComponent},
  {path:'add',component:NewMovieComponent},
  {path:'view',component:ViewComponent},
  {path:"adminView",component:AdminViewComponent},
  {path:"edit",component:EditMovieComponent},
  {path:"bookTicket",component:BookTicketComponent,canActivate:[TicketGuard]},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"payment",component:PaymentComponent,canActivate:[TicketGuard]},
  {path:"bookings",component:BookingDetailsComponent},
  {path:"allbookings",component:UserBookingsComponent},
  {path:"category/:id",component:CategoryComponent},
  {path:"contactUs",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
