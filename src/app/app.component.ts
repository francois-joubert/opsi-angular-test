import { Component } from '@angular/core';
import { differenceInMinutes, formatISO } from 'date-fns';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent
{
  public startTime: Date;
  public q = 1;
  public timeLeft = 10;

  public ngOnInit()
  {
    let t = localStorage.getItem("t");
    if (t)
    {
      //debugger;
      this.startTime = new Date(t);
      this.q = +localStorage.getItem("q")!;
    }

    this.updateTimeLeft();
    setInterval(() => this.updateTimeLeft(), 10000);
  }

  public onStartClick()
  {
    this.startTime = new Date();
    localStorage.setItem("t", formatISO(this.startTime));
    localStorage.setItem("q", '1');
  }

  public onNavClick(dir: number)
  {
    this.q += dir;
    localStorage.setItem("q", this.q.toString());
    this.updateTimeLeft();
  }

  private updateTimeLeft()
  {
    if (!this.startTime) { return; }
    this.timeLeft = (this.q * 10) + (this.q == 4 ? 20 : 0) - differenceInMinutes(new Date(), this.startTime);
  }
}
