import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ConsultantModule } from './consultant/consultant.module';
import { CompetenceModule } from './competence/competence.module';
import { HttpClientModule } from '@angular/common/http';
import { NiveauModule } from './niveau/niveau.module';
import { TypeCompetenceModule } from './type-competence/type-competence.module';
import { ConsultantCompetenceModule } from './consultant-competence/consultant-competence.module';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOption } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ConsultantModule,
    CompetenceModule,
    HttpClientModule,
    NiveauModule,
    TypeCompetenceModule,
    ConsultantCompetenceModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
