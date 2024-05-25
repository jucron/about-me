import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {IntroComponent} from "./intro/intro.component";
import {HistoryComponent} from "./history/history.component";

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  {path: 'intro', component: IntroComponent},
  {path: 'history', component: HistoryComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
