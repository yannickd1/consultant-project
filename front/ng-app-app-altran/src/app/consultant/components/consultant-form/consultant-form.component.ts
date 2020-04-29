import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Consultant } from '../../models/consultant';
import { ConsultantService } from '../../services/consultant-service';



export function forbiddenNameValidator(forbiddenWord: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return (control.value == forbiddenWord) ? { 'forbiddenName': { value: control.value } } : null
  }
}

@Component({
  selector: 'app-consultant-form',
  templateUrl: './consultant-form.component.html',
  styleUrls: ['./consultant-form.component.css']
})
export class ConsultantFormComponent implements OnInit {

  @Output()
  submitConsultant = new EventEmitter<Consultant>();

  consultantForm: FormGroup;
  formGroup: FormGroup[] = [];

  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {
    this.initForm();
  }

  /*formulaire d'ajout d'un consultant*/
  initForm() {
    this.consultantForm = new FormGroup({
      id: new FormControl(''),
      nom: new FormControl('', [Validators.required, Validators.minLength(1)]),
      prenom: new FormControl('', [Validators.required])
    });
  }

  /*sauvegarde d'un consutlant*/
  saveConsultant() {

    const consultant: Consultant = this.consultantForm.value;
    /* this.submitConsultant.emit(consultant); */
    this.consultantService.postConsultant(consultant).subscribe(
      consultantForm => {
        console.log('res', consultantForm);
        this.submitConsultant.emit(consultant);
      }
    );
    this.consultantForm.reset();
    window.location.reload();
  }

}
