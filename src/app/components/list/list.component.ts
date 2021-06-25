import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { words, getStream } from "../../data/list";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
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
