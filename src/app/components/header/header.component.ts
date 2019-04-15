import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "nike-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public menuItems: string[] = ["Men", "Women", "Boys", "Girls", "Customize", "Collections"];

  public counter: number = 0;

  public toggleCart(): void {
    this.dataService.toggleCart.next();
  }

  ngOnInit() {
    this.dataService.itemsInCart.subscribe((itemsInCart: number) => {
      this.counter = itemsInCart;
    });
  }
}
