import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductCardComponent } from "./components/product-list/product-card/product-card.component";
import { CartComponent } from "./components/cart/cart.component";
import { DataService } from "./services/data.service";
import { ToastComponent } from "./components/toast/toast.component";
import { CartItemComponent } from "./components/cart/cart-item/cart-item.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductListComponent, ProductCardComponent, CartComponent, ToastComponent, CartItemComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
