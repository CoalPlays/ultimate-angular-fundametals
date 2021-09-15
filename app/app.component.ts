import { Component } from "@angular/core";
import { timestamp } from "rxjs/operator/timestamp";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: ` <div class="app">
    <passenger-dashboard></passenger-dashboard>
  </div>`,
})
export class AppComponent {}
