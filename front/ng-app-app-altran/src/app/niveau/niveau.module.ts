import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiveauRoutingModule } from './niveau-routing.module';
import { NiveauCardComponent } from './components/niveau-card/niveau-card.component';
import { NiveauListComponent } from './components/niveau-list/niveau-list.component';
import { NiveauFormComponent } from './components/niveau-form/niveau-form.component';
import { NiveauDashboardComponent } from './components/niveau-dashboard/niveau-dashboard.component';


@NgModule({
  declarations: [NiveauCardComponent, NiveauListComponent, NiveauFormComponent, NiveauDashboardComponent],
  imports: [
    CommonModule,
    NiveauRoutingModule
  ]
})
export class NiveauModule { }
