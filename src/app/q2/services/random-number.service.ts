import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class RandomNumberService
{
  private _subject: Subject<number>;

  constructor()
  {
    this._subject = new Subject();
  }

  public getCurrentNumber(): Observable<number>
  {
    return this._subject.asObservable();
  }

  public generateNewNumber()
  {
    this._subject.next(Math.floor(Math.random() * 1000));
  }
}
