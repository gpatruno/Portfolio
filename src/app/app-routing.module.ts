import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { CompetenceComponent } from './competence/competence.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { path: "", redirectTo: "formation", pathMatch: "full" },
  { path: "formation", component: FormationComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "competence", component: CompetenceComponent },
  { path: "aboutme", component: AboutmeComponent },
  { path: '**', redirectTo: 'formation' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
