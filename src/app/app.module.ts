import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { CustomerModule } from './customer/customer.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { SecurityModule } from './security/security.module';

import { GrowlModule } from 'primeng/components/growl/growl';
import { MessageService } from 'primeng/components/common/api';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    BrowserAnimationsModule,

    CoreModule,
    CustomerModule,
    ProductModule,
    SecurityModule,
    AppRoutingModule,

    GrowlModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
