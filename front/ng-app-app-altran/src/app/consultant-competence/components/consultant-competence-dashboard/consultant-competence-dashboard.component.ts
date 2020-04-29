import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ConsultantCompetence } from '../../models/consultant-competence';
import { ConsultantCompetenceService } from '../../services/consultant-competence.service';
import { ConsultantCompetenceCardComponent } from '../consultant-competence-card/consultant-competence-card.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Competence } from 'src/app/competence/models/competence';
import { CompetenceService } from 'src/app/competence/services/competence-service';
import { Niveau } from 'src/app/niveau/models/niveau';

@Component({
  selector: 'app-consultant-competence-dashboard',
  templateUrl: './consultant-competence-dashboard.component.html',
  styleUrls: ['./consultant-competence-dashboard.component.css']
})
export class ConsultantCompetenceDashboardComponent implements OnInit {

  consultantCompetences: ConsultantCompetence[];
  consultantCompetence: ConsultantCompetence;
  competence: Competence[];
  niveau: Niveau[];

  @ViewChildren(ConsultantCompetenceCardComponent)
  ConsultantCompetencesQuery: QueryList<ConsultantCompetenceCardComponent>;


  constructor(private ConsultantCompetenceService: ConsultantCompetenceService) { }

  consultantCompetenceForm: FormGroup;
  formGroup: FormGroup[] = [];

  ngOnInit() {

    /* this.loadConsultantCompetences(); */
    this.loadCompetences();
    this.loadNiveau();
    const idNiveau = 4;
    const idCompetence = 3;

    this.loadTeamSkills(idCompetence, idNiveau);
    this.initForm();


  }

  initForm() {

    this.consultantCompetenceForm = new FormGroup({

      competence: new FormGroup({
        id: new FormControl('', [Validators.required])
      }),
      niveau: new FormGroup({
        id: new FormControl('', [Validators.required])
      })
    });

  }


  loadConsultantCompetences() {
    this.ConsultantCompetenceService.getConsultantCompetences()
      .subscribe({
        next: res => {
          this.consultantCompetences = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }


  loadTeamSkills(idCompetence: number, idNiveau: number) {
    this.ConsultantCompetenceService.getTeamSkills(idCompetence, idNiveau)
      .subscribe({
        next: res => {
          this.consultantCompetences = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')

      });
  }

  loadCompetences() {
    this.ConsultantCompetenceService.getCompetence()
      .subscribe({
        next: res => {
          this.competence = res;
          console.log(res);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }
  loadNiveau() {
    this.ConsultantCompetenceService.getNiveau()
      .subscribe({
        next: res => {
          this.niveau = res;
          console.log(res);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }



}
