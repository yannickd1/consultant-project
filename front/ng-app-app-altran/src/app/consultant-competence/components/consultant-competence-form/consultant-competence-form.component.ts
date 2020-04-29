import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConsultantCompetence } from '../../models/consultant-competence';
import { Consultant } from 'src/app/consultant/models/consultant';
import { Competence } from 'src/app/competence/models/competence';
import { Niveau } from 'src/app/niveau/models/niveau';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsultantCompetenceService } from '../../services/consultant-competence.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultant-competence-form',
  templateUrl: './consultant-competence-form.component.html',
  styleUrls: ['./consultant-competence-form.component.css']
})
export class ConsultantCompetenceFormComponent implements OnInit {

  @Output()
  competence: Competence[];
  consultant: Consultant[];
  niveau: Niveau[];
  submitConsultantCompetence = new EventEmitter<ConsultantCompetence>();

  consultantCompetenceForm: FormGroup;
  formGroup: FormGroup[] = [];

  constructor(private route: ActivatedRoute, private consultantCompetenceService: ConsultantCompetenceService) { }

  ngOnInit() {
    this.initForm();
    this.loadCompetences();
    this.loadConsultant();
    this.loadNiveau();
  }

  initForm() {

    const idDev: number = this.route.snapshot.params.id;

    this.consultantCompetenceForm = new FormGroup({
      id: new FormControl(''),
      consultant: new FormGroup({
        id: new FormControl(idDev)
      }),
      competence: new FormGroup({
        id: new FormControl('', [Validators.required])
      }),
      niveau: new FormGroup({
        id: new FormControl('', [Validators.required])
      })
    });
  }

  loadCompetences() {
    this.consultantCompetenceService.getCompetence()
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
    this.consultantCompetenceService.getNiveau()
      .subscribe({
        next: res => {
          this.niveau = res;
          console.log(res);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  loadConsultant() {
    this.consultantCompetenceService.getConsultant()
      .subscribe({
        next: res => {
          this.consultant = res;
          console.log(res);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }



  saveConsultantCompetence() {

    const consultantCompetence: ConsultantCompetence = this.consultantCompetenceForm.value;
    console.log('------consultantCompetence', consultantCompetence);
    this.submitConsultantCompetence.emit(consultantCompetence);

    this.consultantCompetenceService.postConsultantCompetence(consultantCompetence).subscribe(
      consultantCompetenceForm => {
        console.log('res', consultantCompetenceForm);
        this.submitConsultantCompetence.emit(consultantCompetence);
      }
    );
    this.consultantCompetenceForm.reset();
    window.location.reload();
  }


  /* saveConsultantCompetence() {

    const consultantCompetence: ConsultantCompetence = this.consultantCompetenceForm.value;

    this.consultantCompetenceService.postConsultantCompetence(consultantCompetence).subscribe(
      consultantCompetenceForm => {
        console.log('res', consultantCompetenceForm);
        this.submitConsultantCompetence.emit(consultantCompetence);
      }
    );
    this.consultantCompetenceForm.reset();
    window.location.reload();
  } */


}





