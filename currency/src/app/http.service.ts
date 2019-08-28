import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  data = new Date();
  constructor(private http: HttpClient) {}
  getCurrency(): Observable<number> {
    return this.http.get<number>(
      "http://api.nbp.pl/api/exchangerates/tables/a/today"
    );
  }
  getCurrencyOld(): Observable<number> {
    return this.http.get<number>(
      "http://api.nbp.pl/api/exchangerates/tables/a/last/2"
    );
  }
  getCurrencyAskBid(): Observable<number> {
    return this.http.get<number>(
      "http://api.nbp.pl/api/exchangerates/tables/c/today"
    );
  }
}
