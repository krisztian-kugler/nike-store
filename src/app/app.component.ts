import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";
import { Product } from "./models/product.model";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
  animations: [
    trigger("toast", [
      transition("void => *", [
        style({
          transform: "translate(-50%, 30px)",
          opacity: 0
        }),
        animate(
          "250ms 0ms ease-out",
          style({
            transform: "translate(-50%, 0)",
            opacity: 1
          })
        )
      ]),
      transition("* => void", [
        style({
          opacity: 1
        }),
        animate(
          "250ms 0ms ease-out",
          style({
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  private timeOut;

  public toast = {
    show: false,
    message: ""
  };

  public activateToast(product: Product): void {
    this.toast.message = `${product.name} (Size: ${product.selectedSize}${product.colors.length > 1 ? ", Color: " + product.selectedColor.name : ""})`;
    this.toast.show = true;
    this.timeOut = setTimeout(() => {
      this.toast.show = false;
    }, 4000);
  }

  public closeToast(): void {
    clearTimeout(this.timeOut);
    this.toast.show = false;
  }

  ngOnInit() {
    this.dataService.addToCart.subscribe((product: Product) => {
      clearTimeout(this.timeOut);
      this.activateToast(product);
    });

    this.dataService.closeToast.subscribe(() => {
      this.closeToast();
    });
  }
}
