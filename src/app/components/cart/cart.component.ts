import { Component, OnInit, HostBinding } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { trigger, transition, style, animate } from "@angular/animations";
import { Product } from "src/app/models/product.model";
import { CartItem } from "src/app/models/cart-item.model";

@Component({
  selector: "nike-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.sass"],
  animations: [
    trigger("dim", [
      transition("void => *", [
        style({
          opacity: 0
        }),
        animate(
          "250ms 0ms ease-in-out",
          style({
            opacity: 1
          })
        )
      ]),
      transition("* => void", [
        style({
          opacity: 1
        }),
        animate(
          "250ms 0ms ease-in-out",
          style({
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class CartComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public items: CartItem[] = [];
  @HostBinding("class.open") public open: boolean = false;

  private addToItemList(product: Product): void {
    const id: string = `${product.id}-${product.selectedSize}-${product.selectedColor.id}`;
    let found: CartItem = null;

    this.items.forEach((item: CartItem) => {
      if (item.id === id) {
        found = item;
      }
    });

    if (found) {
      found.quantity++;
      found.totalPrice = found.quantity * found.price;
      return;
    } else {
      const cartItem: CartItem = {
        id: id,
        product: product,
        quantity: 1,
        price: product.salePrice ? product.salePrice : product.normalPrice,
        totalPrice: product.salePrice ? product.salePrice : product.normalPrice
      };
      this.items.push(cartItem);
      this.dataService.itemsInCart.next(this.items.length);
    }
  }

  public onRemoveItem(id: string): void {
    this.items.forEach((item: CartItem, index: number) => {
      if (item.id === id) {
        this.items.splice(index, 1);
        this.calcTotal();
        this.dataService.itemsInCart.next(this.items.length);
        return;
      }
    });
  }

  public emptyCart(): void {
    this.items = [];
    this.dataService.itemsInCart.next(this.items.length);
  }

  public total: number;

  public calcTotal(): void {
    this.total = this.items.reduce((total, item) => {
      return (total += item.totalPrice);
    }, 0);
  }

  ngOnInit() {
    this.dataService.toggleCart.subscribe(() => {
      if (!this.open) this.dataService.closeToast.next();
      this.open ? (this.open = false) : (this.open = true);
    });

    this.dataService.addToCart.subscribe((product: Product) => {
      this.addToItemList(product);
      this.calcTotal();
    });

    this.dataService.calcTotal.subscribe(() => {
      this.calcTotal();
    });
  }
}
