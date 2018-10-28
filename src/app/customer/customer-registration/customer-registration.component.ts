import { Component, OnInit } from '@angular/core';
import { LocaleCalendar } from 'src/app/model/LocaleCalendar';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  name: string;

  status = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false }
  ];

  states = [
    { label: 'CE', value: 'CE' },
    { label: 'SP', value: 'SP' },
    { label: 'RJ', value: 'RJ' }
  ];

  selectedStatus = true;

  locale = new LocaleCalendar();

  constructor() { }

  ngOnInit() {
    
  }

}
