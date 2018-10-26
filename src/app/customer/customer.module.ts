import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/components/panel/panel';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';

import { SharedModule } from '../shared/shared.module';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    PanelModule,
    InputTextModule,
    InputMaskModule,
    SelectButtonModule,

    SharedModule
  ],
  declarations: [CustomerRegistrationComponent],
  exports: [
    CustomerRegistrationComponent
  ]
})
export class CustomerModule { }
