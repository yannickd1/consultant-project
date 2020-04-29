import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TypeCompetence } from '../../models/type-competence';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypeCompetenceService } from '../../services/type-competence.service';

@Component({
  selector: 'app-type-competence-form',
  templateUrl: './type-competence-form.component.html',
  styleUrls: ['./type-competence-form.component.css']
})
export class TypeCompetenceFormComponent implements OnInit {

  @Output()
  submitTypeCompetence = new EventEmitter<TypeCompetence>();

  typeCompetenceForm: FormGroup;
  formGroup: FormGroup[] = [];

  constructor(private typeCompetenceService: TypeCompetenceService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.typeCompetenceForm = new FormGroup({
      id: new FormControl(''),
      libelle: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
  }

  saveTypeCompetence() {

    const typeCompetence: TypeCompetence = this.typeCompetenceForm.value;

    this.typeCompetenceService.postTypeCompetence(typeCompetence).subscribe(
      typeCompetenceForm => {
        console.log('res', typeCompetenceForm);
        this.submitTypeCompetence.emit(typeCompetence);
      }
    );
    this.typeCompetenceForm.reset();
    window.location.reload();
  }
}
