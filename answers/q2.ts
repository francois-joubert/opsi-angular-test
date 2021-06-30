import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { RandomNumberService } from "../services/random-number.service";

@Component({
  selector: "app-numbers",
  templateUrl: "./numbers.component.html"
})
export class NumbersComponent
{
  public number$: Observable<number>;

  constructor(private _numberService: RandomNumberService)
  {
    this.number$ = _numberService.getCurrentNumber();
  }

  public onAddClick()
  {
    this._numberService.generateNewNumber();
  }
}

