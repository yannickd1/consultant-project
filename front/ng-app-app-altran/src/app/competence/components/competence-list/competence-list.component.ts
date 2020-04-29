import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Competence } from '../../models/competence';
import { CompetenceCardComponent } from '../competence-card/competence-card.component';
import { CompetenceService } from '../../services/competence-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competence-list',
  templateUrl: './competence-list.component.html',
  styleUrls: ['./competence-list.component.css']
})
export class CompetenceListComponent implements OnInit {

  competences: Competence[];
  router: any;
  @ViewChildren(CompetenceCardComponent)
  CompetencesQuery: QueryList<CompetenceCardComponent>;
  constructor(private route: ActivatedRoute, private CompetenceService: CompetenceService) { }

  ngOnInit() {
    this.loadCompetences();
    /* const id: number = this.route.snapshot.params.id;
    this.loadCompetencesByConsultantId(id) */
  }


  /* loadCompetencesByConsultantId(id: number) {
    this.CompetenceService.getCompetencesByConsultantId(id)
      .subscribe({
        next: res => {
          this.competences = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }
 */

  /*chargment de toutes les compétences*/
  loadCompetences() {
    this.CompetenceService.getCompetences()
      .subscribe({
        next: res => {
          this.competences = res;
          console.log(res);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

}
