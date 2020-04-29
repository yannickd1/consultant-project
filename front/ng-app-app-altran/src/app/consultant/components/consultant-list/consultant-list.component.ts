import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Consultant } from '../../models/consultant';
import { ConsultantService } from '../../services/consultant-service';
import { ConsultantCardComponent } from '../consultant-card/consultant-card.component';
import { ConsultantCompetence } from 'src/app/consultant-competence/models/consultant-competence';

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.css']
})
export class ConsultantListComponent implements OnInit {

  consultants: Consultant[];
  consultantCompetences: ConsultantCompetence[];
  @ViewChildren(ConsultantCardComponent)
  ConsultantsQuery: QueryList<ConsultantCardComponent>;
  componentDisplayed = false;
  constructor(private ConsultantService: ConsultantService) { }

  ngOnInit() {

    /* const idCompetence = 2;
    const idNiveau = 1 */
    this.loadConsultants();
    /* this.loadTeamSkills(idCompetence, idNiveau) */


    /* console.log(this.loadTeamSkills(idCompetence, idNiveau)); */
  }

  /*chargement de tous les consultants*/
  loadConsultants() {
    this.ConsultantService.getConsultants()
      .subscribe({
        next: res => {
          this.consultants = res;
          console.log(res);
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  /*   loadTeamSkills(idCompetence: number, idNiveau: number) {
      this.ConsultantService.getTeamSkills(idCompetence, idNiveau)
        .subscribe({
          next: res => {
            this.consultantCompetences = res;
            console.log('----loadskils---', res);
          },
          error: e => console.log(e),
          complete: () => console.log('Complete')
        });
    }
   */

  /*afficher le formualaire d'ajout d'un consultant*/
  displayComponent(event): void {
    this.componentDisplayed = true;
  }


}
