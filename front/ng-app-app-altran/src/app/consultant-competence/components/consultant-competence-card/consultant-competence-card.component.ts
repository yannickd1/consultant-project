import { Component, OnInit, Input } from '@angular/core';
import { ConsultantCompetence } from '../../models/consultant-competence';
import { ConsultantCompetenceService } from '../../services/consultant-competence.service';

@Component({
  selector: 'app-consultant-competence-card',
  templateUrl: './consultant-competence-card.component.html',
  styleUrls: ['./consultant-competence-card.component.css']
})
export class ConsultantCompetenceCardComponent implements OnInit {
  @Input()
  consultantCompetence: ConsultantCompetence;
  constructor(private consultantCompetenceService: ConsultantCompetenceService) { }

  ngOnInit() {
  }

  deleteConsultantCompetence(id: number) {
    this.consultantCompetenceService.deleteConsultantCompetence(id)
      .subscribe({
        next: res => {
          this.consultantCompetence = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });

    window.location.reload();

  }

}



