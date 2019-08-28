import { SellComponent } from "./sell/sell.component";
import { BuyComponent } from "./buy/buy.component";
import { ChangeComponent } from "./change/change.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "price",
    pathMatch: "full"
  },
  {
    path: "price",
    component: ChangeComponent
  },
  {
    path: "buy",
    component: BuyComponent
  },
  {
    path: "sell",
    component: SellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
