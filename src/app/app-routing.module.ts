import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';


const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/:id/edit', component: CustomerDetailsComponent },
  { path: 'customers/new', component: CustomerDetailsComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
