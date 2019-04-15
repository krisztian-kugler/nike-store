import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { DataService } from "src/app/services/data.service";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "nike-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.sass"],
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
export class ProductCardComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public showSizes: boolean = false;
  public showColors: boolean = false;

  @Input() product: Product;

  public selectColor(color): void {
    this.product.image = color.image;
    this.product.selectedColor = color;
    this.showColors = false;
  }

  public selectSize(size: number): void {
    this.product.selectedSize = size;
    this.showSizes = false;
  }

  public addToCart(): void {
    this.dataService.addToCart.next(this.deepClone(this.product));
  }

  private deepClone(obj) {
    const objStr = JSON.stringify(obj);
    return JSON.parse(objStr);
  }

  ngOnInit() {}
}
