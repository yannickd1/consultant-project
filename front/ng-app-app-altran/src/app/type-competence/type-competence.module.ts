import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeCompetenceRoutingModule } from './type-competence-routing.module';
import { TypeCompetenceCardComponent } from './components/type-competence-card/type-competence-card.component';
import { TypeCompetenceListComponent } from './components/type-competence-list/type-competence-list.component';
import { TypeCompetenceFormComponent } from './components/type-competence-form/type-competence-form.component';
import { TypeCompetenceDashboardComponent } from './components/type-competence-dashboard/type-competence-dashboard.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TypeCompetenceCardComponent, TypeCompetenceListComponent, TypeCompetenceFormComponent, TypeCompetenceDashboardComponent],
  imports: [
    CommonModule,
    TypeCompetenceRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [

  ]
})
export class TypeCompetenceModule { }
