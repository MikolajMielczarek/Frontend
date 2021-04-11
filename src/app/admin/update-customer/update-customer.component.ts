import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {


  id: number;
  customer: Customer;

  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = new Customer();

    this.id = this.route.snapshot.params['id'];
    
    this.customerService.getCustomer(this.id)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    this.gotoList();
  }

  onSubmit() {
    this.updateCustomer();    
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