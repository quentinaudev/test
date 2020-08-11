import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardCheckoutComponent } from './card-checkout/card-checkout.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SelectPspComponent } from './select-psp/select-psp.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
//  { path: '', redirectTo: "/selectPsp",  pathMatch: 'full'},
 { path: 'selectPsp/:oid', component: SelectPspComponent},
//  { path: 'selectPsp', component: SelectPspComponent},
// { path: 'cardCheckout', component: CardCheckoutComponent },
// { path: 'checkout/:id', component: CheckoutComponent },
// { path: 'error', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    ,  { useHash: true,  enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents  = [SelectPspComponent, CardCheckoutComponent, CheckoutComponent, ErrorPageComponent]
