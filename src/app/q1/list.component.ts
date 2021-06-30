import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { words, getStream } from "../q-data/list";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html"
})
export class ListComponent
{
  public items: string[];
  public items$: Observable<string[]>;

  constructor()
  {
    this.items = words;
    this.items$ = getStream();
  }
}
