import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { CurrentOrderComponent } from './order/current-order/current-order.component';
import { CompletedOrderComponent } from './order/completed-order/completed-order.component';
import { CanceledOrderComponent } from './order/canceled-order/canceled-order.component';
import { OrderService } from './order.service';
import { RatingComponent } from './rating/rating.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ProfileComponent,
    ProductComponent,
    ProductDetailsComponent,
    OrderComponent,
    CurrentOrderComponent,
    CompletedOrderComponent,
    CanceledOrderComponent,
    RatingComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    SimpleNotificationsModule.forRoot()
    
  ],
  providers: [UserService, ProductService, OrderService, CartService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent]
})
export class AppModule { }
