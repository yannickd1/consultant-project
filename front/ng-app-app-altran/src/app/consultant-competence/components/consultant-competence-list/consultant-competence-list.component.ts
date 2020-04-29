import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ConsultantCompetenceCardComponent } from '../consultant-competence-card/consultant-competence-card.component';
import { ConsultantCompetence } from '../../models/consultant-competence';
import { ActivatedRoute } from '@angular/router';
import { ConsultantCompetenceService } from '../../services/consultant-competence.service';

@Component({
  selector: 'app-consultant-competence-list',
  templateUrl: './consultant-competence-list.component.html',
  styleUrls: ['./consultant-competence-list.component.css']
})
export class ConsultantCompetenceListComponent implements OnInit {

  consultantCompetences: ConsultantCompetence[];
  router: any;
  @ViewChildren(ConsultantCompetenceCardComponent)
  ConsultantCompetencesQuery: QueryList<ConsultantCompetenceCardComponent>;
  constructor(private route: ActivatedRoute, private ConsultantCompetenceService: ConsultantCompetenceService) { }

  ngOnInit() {
    /* this.loadCompetences();  */
    const id: number = this.route.snapshot.params.id;
    this.loadConsultantCompetencesByConsultantId(id)

    /* this.loadConsultantCompetences() */
  }

  /*  loadConsultantCompetences() {
     this.ConsultantCompetenceService.getCompetences()
       .subscribe({
         next: res => {
           this.consultantCompetences = res;
           console.log(res)
         },
         error: e => console.log(e),
         complete: () => console.log('Complete')
       });
   } */


  loadConsultantCompetencesByConsultantId(id: number) {
    this.ConsultantCompetenceService.getConsultantCompetencesByConsultantId(id)
      .subscribe({
        next: res => {
          this.consultantCompetences = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

}
