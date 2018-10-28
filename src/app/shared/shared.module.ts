import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredFieldsComponent } from './required-fields/required-fields.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RequiredFieldsComponent
  ],
  exports: [
    RequiredFieldsComponent
  ]
})
export class SharedModule { }
