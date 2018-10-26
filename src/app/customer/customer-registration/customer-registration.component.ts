import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  status = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ];

  selectedStatus = true;

  constructor() { }

  ngOnInit() {
  }

}
