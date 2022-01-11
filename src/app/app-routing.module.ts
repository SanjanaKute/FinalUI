import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { SecurityComponent } from './security/security.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminauthGuard } from './admin-services/adminauth.guard';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteRegistrationComponent } from './delete-registration/delete-registration.component';
import { DeleteTrainComponent } from './delete-train/delete-train.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchTrainComponent } from './search-train/search-train.component';
//import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { TicketreservationComponent } from './ticketreservation/ticketreservation.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path: 'traindetails', component: SearchTrainComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent ,pathMatch:'full'},
  {path: 'book', component: BookComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'register', component: UserRegistrationComponent},
  {path: 'delete', component: DeleteRegistrationComponent},
  {path: 'adminsignup',component: AdminSignupComponent},
  {path: 'adminreg', component: AdminRegistrationComponent},
  {path: 'admindash',component:AdminDashboardComponent, canActivate:[AdminauthGuard]},
  {path: 'reservedTicket', component:TicketreservationComponent},
  {path: 'admindash/addTrain', component:SecurityComponent},
  {path: 'admindash/deleteTrain',component:DeleteTrainComponent},
  {path: 'dashboard/home',component:HomeComponent},
  {path: 'dashboard/aboutus', component: AboutUsComponent},
  {path: 'thankyou', component: ThankyouComponent},
  {path: 'thankyou/home', component: HomeComponent},
  {path: '',redirectTo:'home', pathMatch:'full'},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
