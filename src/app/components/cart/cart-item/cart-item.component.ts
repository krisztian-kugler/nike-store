import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CartItem } from "src/app/models/cart-item.model";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "nike-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.sass"]
})
export class CartItemComponent implements OnInit {
  constructor(private dataService: DataService) {}

  @Input() cartItem: CartItem;

  @Output() removeItem = new EventEmitter<string>();

  public decrease(): void {
    if (this.cartItem.quantity === 1) {
      return;
    } else {
      this.cartItem.quantity--;
      this.cartItem.totalPrice = this.cartItem.quantity * this.cartItem.price;
      this.dataService.calcTotal.next();
    }
  }

  public increase(): void {
    this.cartItem.quantity++;
    this.cartItem.totalPrice = this.cartItem.quantity * this.cartItem.price;
    this.dataService.calcTotal.next();
  }

  public remove() {
    this.removeItem.emit(this.cartItem.id);
  }

  ngOnInit() {}
}
