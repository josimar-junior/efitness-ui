import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerRegistrationComponent } from "./customer-registration/customer-registration.component";

const routes: Routes = [
    { path: 'customers', component: CustomerRegistrationComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CustomerRoutingModule {

}