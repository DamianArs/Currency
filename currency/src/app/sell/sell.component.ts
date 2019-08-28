import { Formularz } from "./../form";
import { HttpService } from "./../http.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sell",
  templateUrl: "./sell.component.html",
  styleUrls: ["./sell.component.css"]
})
export class SellComponent implements OnInit {
  kurs: number;
  sum: number;
  currency = ["CHF", "CZK", "EUR", "GBP", "HUN", "USD"];
  message = new Formularz();
  constructor(private http: HttpService) {}

  ngOnInit() {}
  onSubmit() {
    if (this.message.currency == "CHF") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[5].ask * this.message.howMany;
        this.kurs = data[0].rates[5].ask;
      });
    } else if (this.message.currency == "CZK") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[8].ask * this.message.howMany;
        this.kurs = data[0].rates[8].ask;
      });
    } else if (this.message.currency == "EUR") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[3].ask * this.message.howMany;
        this.kurs = data[0].rates[3].ask;
      });
    } else if (this.message.currency == "GBP") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[6].ask * this.message.howMany;
        this.kurs = data[0].rates[6].ask;
      });
    } else if (this.message.currency == "HUN") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[4].ask * this.message.howMany;
        this.kurs = data[0].rates[4].ask;
      });
    } else if (this.message.currency == "USD") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[0].ask * this.message.howMany;
        this.kurs = data[0].rates[0].ask;
      });
    }
  }
}
