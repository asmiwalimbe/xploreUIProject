import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  getCustomerById(customerId: string): any {
     return this.http.get<any[]>(`https://localhost:44360/api/Customer/GetCustomer/${customerId}`); // Make the HTTP GET request
  }
  constructor(private http: HttpClient) { }

  public getAllCustomers():Observable<any[]>  {
    return this.http.get<any[]>("https://localhost:44360/api/Customer/GetAllCustomers"); // Make the HTTP GET request
  }

  public updateCustomer(customer: any): Observable<any> {
    return this.http.put<any>(`https://localhost:44360/api/Customer/Update`, customer);
  }

  public addCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`https://localhost:44360/api/Customer/Add`, customer);
  }

  public deleteCustomer(id: any): Observable<any> {
    return this.http.delete<any[]>(`https://localhost:44360/api/Customer/Delete/${id}`); // Make the HTTP GET request
  }
}
