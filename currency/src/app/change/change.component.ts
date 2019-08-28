import { HttpService } from "./../http.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-change",
  templateUrl: "./change.component.html",
  styleUrls: ["./change.component.css"]
})
export class ChangeComponent implements OnInit {
  money = [];
  moneyYesterday = [];
  date = new Date();
  constructor(private moneyService: HttpService) {}

  ngOnInit() {
    this.show();
    this.showOld();
  }
  show() {
    this.moneyService.getCurrency().subscribe(data => {
      this.money = [];
      this.money.push(data);
      console.log(data);
    });
  }
  showOld() {
    this.moneyService.getCurrencyOld().subscribe(data => {
      this.moneyYesterday = [];
      this.moneyYesterday.push(data);
    });
  }
}
