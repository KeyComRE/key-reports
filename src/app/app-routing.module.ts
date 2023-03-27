import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportCardComponent } from './report-card/report-card.component';
const routes: Routes = [
  { path: 'report', component: ReportCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
