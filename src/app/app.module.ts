import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from 'src/app/admin/create-customer/create-customer.component';
import { CustomerDetailsComponent } from 'src/app/admin/customer-details/customer-details.component';
import { CustomerListComponent } from 'src/app/admin/customer-list/customer-list.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateCustomerComponent } from 'src/app/admin/update-customer/update-customer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { AuthInterceptorService } from '../config/auth-interceptor.service';
import { ApiInterceptor } from '../config/api-interceptor.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    AdminComponent,
    UpdateCustomerComponent,
    LoginComponent,
    HomepageComponent,
    AboutUsComponent,
    ContactComponent,
    DestinationsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
