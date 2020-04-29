import { Consultant } from 'src/app/consultant/models/consultant';
import { Niveau } from 'src/app/niveau/models/niveau';
import { Competence } from 'src/app/competence/models/competence';

export class ConsultantCompetence {
    public constructor(
        public id: number,
        public consultant: Consultant,
        public competence: Competence,
        public niveau: Niveau
    ) { }

}
