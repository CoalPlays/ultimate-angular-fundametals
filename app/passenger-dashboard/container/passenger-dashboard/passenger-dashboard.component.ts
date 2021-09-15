import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count></passenger-count>
      <passenger-detail></passenger-detail>
      <h3>Airline Passangers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <div class="date">
            Check in date:
            {{
              passenger.checkInDate
                ? (passenger.checkInDate | date: "yMMMMd" | uppercase)
                : "Not checked in"
            }}
          </div>
          <div>Children: {{ passenger.children?.length || 0 }}</div>
        </li>
      </ul>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: "stephen",
        checkedIn: true,
        checkInDate: 1631522818,
        children: null,
      },
      {
        id: 2,
        fullname: "raquel",
        checkedIn: true,
        checkInDate: 1631522818,
        children: [{ name: "Paul", age: 17 }],
      },
      {
        id: 3,
        fullname: "gabriel",
        checkedIn: false,
        children: null,
      },
      {
        id: 4,
        fullname: "elias",
        checkedIn: false,
        children: null,
      },
      {
        id: 5,
        fullname: "max",
        checkedIn: true,
        checkInDate: 1631522818,
        children: [
          { name: "Blue", age: 2 },
          { name: "Alexander von Grossmund", age: 4 },
        ],
      },
    ];
  }
}
