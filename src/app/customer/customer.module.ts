import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/components/panel/panel';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { ButtonModule } from 'primeng/components/button/button';

import { SharedModule } from '../shared/shared.module';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    PanelModule,
    InputTextModule,
    InputMaskModule,
    SelectButtonModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,

    SharedModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerRegistrationComponent],
  exports: [
    CustomerRegistrationComponent
  ]
})
export class CustomerModule { }
