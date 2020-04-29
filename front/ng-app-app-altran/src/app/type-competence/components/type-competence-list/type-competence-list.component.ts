import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { TypeCompetenceService } from '../../services/type-competence.service';
import { TypeCompetence } from '../../models/type-competence';
import { TypeCompetenceCardComponent } from '../type-competence-card/type-competence-card.component';

@Component({
  selector: 'app-type-competence-list',
  templateUrl: './type-competence-list.component.html',
  styleUrls: ['./type-competence-list.component.css']
})
export class TypeCompetenceListComponent implements OnInit {

  typeCompetences: TypeCompetence[];
  @ViewChildren(TypeCompetenceCardComponent)
  TypeCompetencesQuery: QueryList<TypeCompetenceCardComponent>;
  componentDisplayed = false;

  constructor(private typeCompetenceService: TypeCompetenceService) { }

  ngOnInit() {
    this.loadTypeCompetences()
  }

  /*chargement de tous les types de compétences*/
  loadTypeCompetences() {
    this.typeCompetenceService.getTypeCompetence()
      .subscribe({
        next: res => {
          this.typeCompetences = res;
          console.log(res);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });

  }

}
