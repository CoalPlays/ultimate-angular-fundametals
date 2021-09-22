import { Component } from "@angular/core";
import { timestamp } from "rxjs/operator/timestamp";

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: ` <div class="app">
    <nav class="nav">
      <a
        *ngFor="let item of nav"
        [routerLink]="item.link"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: item.exact }"
        >{{ item.name }}</a
      >
      <a routerLink="/oops" routerLinkActive="active">404</a>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: "/",
      name: "home",
      exact: true,
    },
    {
      link: "/oops",
      name: "oops",
      exact: false,
    },
  ];
}
