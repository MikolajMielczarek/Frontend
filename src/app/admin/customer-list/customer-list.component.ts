import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService,  public router: Router) {
  }

  private loadList = () => {
    this.customerService.getCustomersList().subscribe((customers) => {
      console.log('got list of customers', customers);
      this.customers = customers;
    });
  };


  ngOnInit(): void {
    this.loadList();
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(
      (data) => {
        console.log(data);
        this.loadList();
      },
      (error) => console.log(error)
    );
  }


  customerDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCustomer(id: number){
    this.router.navigate(['update', id]);
  }
}
