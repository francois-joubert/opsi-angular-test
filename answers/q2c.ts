import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { NumberService } from "../../services/number.service";

@Component({
  selector: "app-numbers",
  templateUrl: "./numbers.component.html",
  styleUrls: ["./numbers.component.css"]
})
export class NumbersComponent {
  public number$: Observable<number>;

  constructor(private _numberService: NumberService) {
    this.number$ = _numberService.getCurrentNumber();
  }

  public onAddClick() {
    this._numberService.generateNewNumber();
  }
}
