import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../../Services/customer-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerServiceService) { }


  isEdit: boolean = false;
  customer: any = {
    id: '',
    firstname_ascii: '',
    lastname: '',
    email: '',
    phone_Number : '',
    country_code:'',
    gender:'',
    balance:'',
    salutation:'',
    initials:'',
    firstName:'',
    firstname_country_rank:'',
    firstname_country_frequency:'',
    lastname_ascii:'',
    lastname_country_rank:'',
    lastname_country_frequency:'',
    password:'',
    country_name:'',
    primary_language_code:'',
    primary_language:'',
    currency:'',
    partitionKey:'',
    rowKey:'',
    timestamp:''

  };

  ngOnInit( ): void {
    this.route.paramMap.subscribe((params:any) => {
      const idParam = params.get('id');
      if (idParam === 'new' || idParam === null) {
        this.isEdit = false;
      } else {
        this.isEdit = true;
        const id = idParam;
        this.customerService.getCustomerById(id).subscribe((data:any) => {
          this.customer = data;
        });
      }
    });
  }


  saveCustomer() {
    if (this.isEdit) {
      this.customerService.updateCustomer(this.customer).subscribe((data:any) => {
        // Handle update success
        this.router.navigate(['/customers']);
      });
    } else {
      this.customerService.addCustomer(this.customer).subscribe((data:any) => {
        // Handle add new customer success
        this.router.navigate(['/customers']);
      });
    }
  }

  cancelEdit(){
    this.customer = {};
    this.router.navigate(['/customers']);
  }
}
