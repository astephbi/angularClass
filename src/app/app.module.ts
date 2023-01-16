import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-core/common/header/header.component';
import { FooterComponent } from './app-core/common/footer/footer.component';
import { ProductDetailComponent } from './app-core/common/product-detail/product-detail.component';
import { CheckoutComponent } from './app-core/common/checkout/checkout.component';
import { ProductListComponent } from './app-core/common/product-list/product-list.component';
import { CartComponent } from './app-core/common/cart/cart.component';
import { RegistrationComponent } from './app-core/common/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    CheckoutComponent,
    ProductListComponent,
    CartComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
