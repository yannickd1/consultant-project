import { Component, OnInit } from '@angular/core';
import { Consultant } from '../../models/consultant';
import { ConsultantService } from '../../services/consultant-service';
import { ActivatedRoute } from '@angular/router';
import { Competence } from 'src/app/competence/models/competence';


@Component({
  selector: 'app-consultant-detail',
  templateUrl: './consultant-detail.component.html',
  styleUrls: ['./consultant-detail.component.css']
})
export class ConsultantDetailComponent implements OnInit {

  consultant: Consultant;
  competence: Competence;
  router: any;


  constructor(private route: ActivatedRoute, private ConsultantService: ConsultantService) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.loadConsultantDetails(id);
  }

  /*chargement d'un consultant par son id*/
  loadConsultantDetails(id: number) {
    this.ConsultantService.getConsultantById(id)
      .subscribe({
        next: res => {
          this.consultant = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

}
