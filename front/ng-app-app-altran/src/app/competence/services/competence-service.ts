import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competence } from '../models/competence';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { TypeCompetence } from 'src/app/type-competence/models/type-competence';

@Injectable({
    providedIn: 'root'
})
export class CompetenceService {

    constructor(private http: HttpClient) { }

    /*récupération de toutes les compétences*/
    getCompetences(): Observable<Competence[]> {
        return this.http.get<Competence[]>(`${environment.apiBaseUrl}/competence`);
    }

    /*envoi d'une compétence*/
    postCompetence(competence: Competence) {
        return this.http.post<Competence[]>(environment.apiBaseUrl + '/competence', competence);
    }

    /*récupération du type de compétence*/
    getTypeCompetence(): Observable<TypeCompetence[]> {
        return this.http.get<TypeCompetence[]>(`${environment.apiBaseUrl}/typecompetence`);
    }
    /*suppression d'une compétence*/
    deleteCompetence(id: number) {
        return this.http.delete<Competence>(`${environment.apiBaseUrl}/competence/${id}`);
    }
}
