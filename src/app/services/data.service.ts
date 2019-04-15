import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  addToCart = new Subject<any>();
  toggleCart = new Subject();
  calcTotal = new Subject();
  itemsInCart = new Subject<number>();
  closeToast = new Subject<void>();

  public getProducts(): Observable<Object> {
    return this.http.get("assets/products.json");
  }
}
