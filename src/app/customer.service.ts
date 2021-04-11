import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  public getCustomersList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`/customers`);
  }

  public getCustomer(id: number): Observable<any> {
    return this.http.get(`/customers/${id}`);
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`/customers`, customer);
  }

  public updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`/customers/${id}`, value);
  }

  public deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`/customers/${id}`, { responseType: 'text' });
  }
}
