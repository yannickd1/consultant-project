import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultantDashboardComponent } from './consultant/components/consultant-dashboard/consultant-dashboard.component';
import { ConsultantCardComponent } from './consultant/components/consultant-card/consultant-card.component';
import { ConsultantDetailComponent } from './consultant/components/consultant-detail/consultant-detail.component';
import { ConsultantCompetenceDashboardComponent } from './consultant-competence/components/consultant-competence-dashboard/consultant-competence-dashboard.component';
import { CompetenceDashboardComponent } from './competence/components/competence-dashboard/competence-dashboard.component';
import { CompetenceFormComponent } from './competence/components/competence-form/competence-form.component';
import { ConsultantFormComponent } from './consultant/components/consultant-form/consultant-form.component';
import { TypeCompetenceListComponent } from './type-competence/components/type-competence-list/type-competence-list.component';
import { ConsultantCompetenceFormComponent } from './consultant-competence/components/consultant-competence-form/consultant-competence-form.component';
import { TypeCompetenceFormComponent } from './type-competence/components/type-competence-form/type-competence-form.component';


const routes: Routes = [
  { path: '', component: ConsultantDashboardComponent },
  { path: 'consultant', component: ConsultantCardComponent },
  { path: 'fiche/:id', component: ConsultantDetailComponent },
  { path: 'competence', component: ConsultantCompetenceDashboardComponent },
  { path: 'liste-competence', component: CompetenceDashboardComponent },
  { path: 'competence-form', component: CompetenceFormComponent },
  { path: 'consultant-form', component: ConsultantFormComponent },
  { path: 'tcl', component: TypeCompetenceListComponent },
  /*  { path: 'addtype', component: TypeCompetenceFormComponent }, */
  { path: 'addcc', component: ConsultantCompetenceFormComponent },
  { path: 'team-skills', component: ConsultantCompetenceDashboardComponent },
  { path: 'addType', component: TypeCompetenceFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
