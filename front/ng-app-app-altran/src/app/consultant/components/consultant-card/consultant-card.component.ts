import { Component, OnInit, Input } from '@angular/core';
import { Consultant } from '../../models/consultant'
import { ConsultantService } from '../../services/consultant-service';


@Component({
  selector: 'app-consultant-card',
  templateUrl: './consultant-card.component.html',
  styleUrls: ['./consultant-card.component.css']
})
export class ConsultantCardComponent implements OnInit {

  @Input()
  consultant: Consultant
  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {

  }

  /*suppression du consultant par son id*/
  deleteConsultant(id: number) {
    this.consultantService.deleteConsultant(id)
      .subscribe({
        next: res => {
          this.consultant = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });

    window.location.reload();

  }


}
