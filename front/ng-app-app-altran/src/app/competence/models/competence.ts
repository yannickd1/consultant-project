import { TypeCompetence } from 'src/app/type-competence/models/type-competence';

export class Competence {

    constructor(
        public id: number,
        public nom: string,
        public description: string,
        public typeCompetence: TypeCompetence
    ) { }
}
