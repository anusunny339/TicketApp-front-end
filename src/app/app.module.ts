import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MovelistComponent } from './movelist/movelist.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovelistComponent,
    NewMovieComponent,
    ViewComponent,
    AdminViewComponent,
    EditMovieComponent,
    BookTicketComponent,
    RegisterComponent,
    LoginComponent,
    PaymentComponent,
    BookingDetailsComponent,
    UserBookingsComponent,
    CategoryComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TicketGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
