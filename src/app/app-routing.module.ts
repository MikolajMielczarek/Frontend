import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './admin/create-customer/create-customer.component';
import { CustomerDetailsComponent } from './admin/customer-details/customer-details.component';
import { UpdateCustomerComponent } from './admin/update-customer/update-customer.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../config/auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationsComponent } from './destinations/destinations.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path:'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children:[{path:"customers", component:CustomerListComponent},{path:"add",component:CreateCustomerComponent}]
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'destinations',
    component: DestinationsComponent, 
  },
  {
    path: 'contact',
    component: ContactComponent,
  }, 
  {
    path: 'customers',
    component: CustomerListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'add',
   component: CreateCustomerComponent,
  },
  {
    path: 'update/:id',
    component: UpdateCustomerComponent,
  },
  {
    path: 'details/:id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
