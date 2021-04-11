import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

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
    this.success();
  }
  
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  success() {
    this.router.navigate(['/success']);
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
