import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenceRoutingModule } from './competence-routing.module';
import { CompetenceCardComponent } from './components/competence-card/competence-card.component';
import { CompetenceListComponent } from './components/competence-list/competence-list.component';
import { CompetenceFormComponent } from './components/competence-form/competence-form.component';
import { CompetenceDashboardComponent } from './components/competence-dashboard/competence-dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { TypeCompetenceFormComponent } from '../type-competence/components/type-competence-form/type-competence-form.component';



@NgModule({
  declarations: [CompetenceCardComponent, CompetenceListComponent, CompetenceFormComponent, CompetenceDashboardComponent],
  imports: [
    CommonModule,
    CompetenceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,


  ],
  exports: [
    CompetenceListComponent,

  ]
})
export class CompetenceModule { }
