import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {HistoryComponent} from "./history/history.component";
import {EducationComponent} from "./education/education.component";
import {ExperienceComponent} from "./experience/experience.component";
import {ProjectsComponent} from "./projects/projects.component";

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  {path: 'intro', component: IntroComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'projects', component: ProjectsComponent}
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
