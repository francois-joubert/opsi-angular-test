import { Injectable } from "@angular/core";
import { Observable, Subject, of } from "rxjs";

@Injectable()
export class NumberService {
  private _numberSubject: Subject<number>;

  constructor() {
    this._numberSubject = new Subject();
  }

  public getCurrentNumber(): Observable<number> {
    return this._numberSubject.asObservable();
  }

  public generateNewNumber() {
    this._numberSubject.next(Math.floor(Math.random() * 1000));
  }
}
