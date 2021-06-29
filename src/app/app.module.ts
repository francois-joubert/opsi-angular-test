import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ListComponent } from "./q1/components/list.component";
import { NumbersComponent } from "./q2/components/numbers.component";
import { PalindromeComponent } from "./q3/components/palindrome.component";
import { NumberSearchComponent } from "./q4/components/number-search.component";

import { RandomNumberService } from "./q2/services/random-number.service";
import { PalindromeService } from "./q3/services/palindrome.service";
import { NumberSearchService } from "./q4/services/number-search.service";

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule
  ],
  declarations: [
    AppComponent, 
    ListComponent, 
    NumbersComponent, 
    PalindromeComponent, 
    NumberSearchComponent
  ],
  providers: [
    RandomNumberService, 
    PalindromeService, 
    NumberSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
