import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { COMPONENTS } from "./components";
import { SERVICES } from "./services";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, COMPONENTS],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule {}
