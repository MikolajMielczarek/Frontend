import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/Customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService,
    private router: Router) { }


  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }

  places = [
    { name: "Brazil"},
    { name: "Hymalaya"},
    { name: "Mexico"},
    { name: "Switzerland"},
    { name: "Russia"},
    { name: "USA"}
  ];

  persons = [
    { name: "1-2 person/s"},
    { name: "3-5 persons"},
    { name: "6-10 persons"},
    { name: "11-20 persons"},
    { name: "MORE"}
  ];
  selectedValue = null;

}