import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductRegistrationComponent } from "./product-registration/product-registration.component";

const routes: Routes = [
    { path: 'products', component: ProductRegistrationComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule {

}