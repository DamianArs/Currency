import { HttpService } from "./../http.service";
import { Formularz } from "./../form";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buy",
  templateUrl: "./buy.component.html",
  styleUrls: ["./buy.component.css"]
})
export class BuyComponent implements OnInit {
  kurs: number;
  sum: number;
  currency = ["CHF", "CZK", "EUR", "GBP", "HUN", "USD"];
  message = new Formularz();
  constructor(private http: HttpService) {}

  ngOnInit() {}
  onSubmit() {
    if (this.message.currency == "CHF") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[5].bid * this.message.howMany;
        this.kurs = data[0].rates[5].bid;
      });
    } else if (this.message.currency == "CZK") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[8].bid * this.message.howMany;
        this.kurs = data[0].rates[8].bid;
      });
    } else if (this.message.currency == "EUR") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[3].bid * this.message.howMany;
        this.kurs = data[0].rates[3].bid;
      });
    } else if (this.message.currency == "GBP") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[6].bid * this.message.howMany;
        this.kurs = data[0].rates[6].bid;
      });
    } else if (this.message.currency == "HUN") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[4].bid * this.message.howMany;
        this.kurs = data[0].rates[4].bid;
      });
    } else if (this.message.currency == "USD") {
      this.http.getCurrencyAskBid().subscribe(data => {
        this.sum = data[0].rates[0].bid * this.message.howMany;
        this.kurs = data[0].rates[0].bid;
      });
    }
  }
}
