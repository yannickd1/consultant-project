import { Component, OnInit, Input } from '@angular/core';
import { Competence } from '../../models/competence';
import { CompetenceService } from '../../services/competence-service';


@Component({
  selector: 'app-competence-card',
  templateUrl: './competence-card.component.html',
  styleUrls: ['./competence-card.component.css']
})
export class CompetenceCardComponent implements OnInit {


  @Input()
  competence: Competence;

  constructor(private competenceService: CompetenceService) { }


  ngOnInit() {

  }

  /*suppression d'une compétence*/
  deleteCompetence(id: number) {
    this.competenceService.deleteCompetence(id)
      .subscribe({
        next: res => {
          this.competence = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });

    window.location.reload();

  }


}
