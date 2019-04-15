import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "nike-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.sass"]
})
export class ProductListComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public products: Product[];

  ngOnInit() {
    this.dataService.getProducts().subscribe((products: Product[]) => {
      console.log(products);
      this.products = products;
      this.products.forEach((product: Product) => {
        product.selectedSize = product.sizes[0];
        product.selectedColor = product.colors[0];
      });
    });
  }
}
