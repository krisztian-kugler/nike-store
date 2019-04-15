import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "nike-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.sass"]
})
export class ToastComponent implements OnInit {
  constructor(private dataService: DataService) {}

  @Input() message: string;

  onClose(): void {
    this.dataService.closeToast.next();
  }

  ngOnInit() {}
}
