import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent
{
  public q = 1;

  public ngOnInit()
  {
    let q = localStorage.getItem("q");
    if (!q)
    {
      localStorage.setItem("q", "99");
      q = "99";
    }

    this.q = +q;
  }

  public onClick(dir: number)
  {
    if (!dir)
    {
      this.q = 1;
    }
    else
    {
      this.q += dir;
    }
    localStorage.setItem("q", this.q.toString());
  }
}
