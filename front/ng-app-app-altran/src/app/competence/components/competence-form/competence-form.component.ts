import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Competence } from '../../models/competence';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompetenceService } from '../../services/competence-service';
import { TypeCompetence } from '../../../type-competence/models/type-competence'

@Component({
  selector: 'app-competence-form',
  templateUrl: './competence-form.component.html',
  styleUrls: ['./competence-form.component.css']
})
export class CompetenceFormComponent implements OnInit {

  @Output()
  submitCompetence = new EventEmitter<Competence>();
  typeCompetence: TypeCompetence[];


  competenceForm: FormGroup;
  formGroup: FormGroup[] = [];

  constructor(private competenceService: CompetenceService) { }

  ngOnInit() {
    this.initForm();
    this.loadTypeCompetences();

  }

  initForm() {

    this.competenceForm = new FormGroup({
      /* id: new FormControl(''), */
      nom: new FormControl('', [Validators.required, Validators.minLength(1)]),
      description: new FormControl('', [Validators.required]),
      typeCompetence: new FormGroup({
        id: new FormControl('', [Validators.required])
      })

    });
  }

  /* chargement du type de compétences*/
  loadTypeCompetences() {
    this.competenceService.getTypeCompetence()
      .subscribe({
        next: res => {
          this.typeCompetence = res;
          console.log(res);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });

  }


  /*sauvegarde du de la compétence*/
  saveCompetence() {

    const competence: Competence = this.competenceForm.value;
    console.log('------competence', competence);
    this.submitCompetence.emit(competence);

    this.competenceService.postCompetence(competence).subscribe(
      competenceForm => {
        console.log('res', competenceForm);
        this.submitCompetence.emit(competence);
      }
    );
    this.competenceForm.reset();
    window.location.reload();
  }

}
