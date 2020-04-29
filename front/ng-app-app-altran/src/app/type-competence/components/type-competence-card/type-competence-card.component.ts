import { Component, OnInit, Input } from '@angular/core';
import { TypeCompetence } from '../../models/type-competence';
import { TypeCompetenceService } from '../../services/type-competence.service';

@Component({
  selector: 'app-type-competence-card',
  templateUrl: './type-competence-card.component.html',
  styleUrls: ['./type-competence-card.component.css']
})
export class TypeCompetenceCardComponent implements OnInit {

  @Input()
  typeCompetence: TypeCompetence
  constructor(private typeCompetenceService: TypeCompetenceService) { }

  ngOnInit() {

  }




  /*suppression d'un type-competence par son id*/
  deleteType(id: number) {
    this.typeCompetenceService.deleteType(id)
      .subscribe({
        next: res => {
          this.typeCompetence = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });

    window.location.reload();

  }
}
