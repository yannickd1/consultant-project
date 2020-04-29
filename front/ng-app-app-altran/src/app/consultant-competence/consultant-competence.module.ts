import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantCompetenceRoutingModule } from './consultant-competence-routing.module';
import { ConsultantCompetenceCardComponent } from './components/consultant-competence-card/consultant-competence-card.component';
import { ConsultantCompetenceListComponent } from './components/consultant-competence-list/consultant-competence-list.component';
import { ConsultantCompetenceFormComponent } from './components/consultant-competence-form/consultant-competence-form.component';
import { ConsultantCompetenceDashboardComponent } from './components/consultant-competence-dashboard/consultant-competence-dashboard.component';
import { MaterialModule } from '../material.module';
import { MatListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsultantCompetenceCardComponent,
    ConsultantCompetenceListComponent,
    ConsultantCompetenceFormComponent,
    ConsultantCompetenceDashboardComponent],
  imports: [
    CommonModule,
    ConsultantCompetenceRoutingModule,
    MaterialModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ConsultantCompetenceListComponent,
    ConsultantCompetenceFormComponent
  ]
})
export class ConsultantCompetenceModule { }
