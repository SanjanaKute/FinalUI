import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FilterPipeModule} from 'ngx-filter-pipe'
import { SearchTrainComponent } from './search-train/search-train.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SecurityComponent } from './security/security.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { BookComponent } from './book/book.component';
import { PaymentComponent } from './payment/payment.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DeleteRegistrationComponent } from './delete-registration/delete-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TicketreservationComponent } from './ticketreservation/ticketreservation.component';
import { AdminloginService } from './admin-services/adminlogin.service';
import { DeleteTrainComponent } from './delete-train/delete-train.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchTrainComponent,
    SecurityComponent,
    HomeComponent,
    AboutUsComponent,
    SignupComponent,
    DashboardComponent,
    CarouselSlideComponent,
    BookComponent,
    PaymentComponent,
    UserRegistrationComponent,
    DeleteRegistrationComponent,
    AdminRegistrationComponent,
    AdminSignupComponent,
    AdminDashboardComponent,
    TicketreservationComponent,
    DeleteTrainComponent,
    ThankyouComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CarouselModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    FilterPipeModule,
    
   
  ],
  providers: [ LoginService,AdminloginService, AuthGuard, [{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
