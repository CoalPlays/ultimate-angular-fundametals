import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// containers
import { PassengerDashboardComponent } from "./container/passenger-dashboard/passenger-dashboard.component";

//compontens
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerFormComponenent } from "./components/passenger-form/passenger-form.componenent";
//service
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { HttpModule } from "@angular/http";
import { PassengerViewerComponent } from "./container/passenger-viewer/passenger-viewer.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "passengers",
    children: [
      {
        path: "",
        component: PassengerDashboardComponent,
      },
      { path: ":id", component: PassengerViewerComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponenent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [PassengerViewerComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
