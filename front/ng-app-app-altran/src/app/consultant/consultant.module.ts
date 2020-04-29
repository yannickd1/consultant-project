import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantRoutingModule } from './consultant-routing.module';
import { ConsultantCardComponent } from './components/consultant-card/consultant-card.component';
import { ConsultantListComponent } from './components/consultant-list/consultant-list.component';
import { ConsultantFormComponent } from './components/consultant-form/consultant-form.component';
import { ConsultantDashboardComponent } from './components/consultant-dashboard/consultant-dashboard.component';
import { MaterialModule } from '../material.module';
import { ConsultantDetailComponent } from './components/consultant-detail/consultant-detail.component';
import { ConsultantCompetenceModule } from '../consultant-competence/consultant-competence.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConsultantCompetenceFormComponent } from '../consultant-competence/components/consultant-competence-form/consultant-competence-form.component';



@NgModule({
  declarations: [ConsultantCardComponent, ConsultantListComponent, ConsultantFormComponent, ConsultantDashboardComponent, ConsultantDetailComponent],
  imports: [
    MaterialModule,
    CommonModule,
    ConsultantRoutingModule,
    ConsultantCompetenceModule,
    ReactiveFormsModule,
    FormsModule,
    ConsultantCompetenceModule,


  ]
})
export class ConsultantModule { }
