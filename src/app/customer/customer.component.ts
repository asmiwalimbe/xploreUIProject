import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../Services/customer-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public customerService:CustomerServiceService, private router: Router) { }
  public Customers: any[] = [];
  isEdit:boolean = false;
  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer(){
    this.customerService.getAllCustomers().subscribe((data:any) => {
      this.Customers = data;
    });
  }

  editCustomer(data : any){
    this.isEdit = true;
    this.router.navigate(['/customers', data.id, 'edit']);

  }

  addCustomer(){
    this.router.navigate(['/customers', 'new']);
  }

  deleteCustomer(customerid : string){
    this.customerService.deleteCustomer(customerid).subscribe((data:any) => {
      this.getAllCustomer();
    });
  }
}
