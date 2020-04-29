import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultantCompetence } from '../models/consultant-competence';
import { environment } from 'src/environments/environment';
import { Consultant } from 'src/app/consultant/models/consultant';
import { Competence } from 'src/app/competence/models/competence';
import { Niveau } from 'src/app/niveau/models/niveau';

@Injectable({
  providedIn: 'root'
})
export class ConsultantCompetenceService {

  constructor(private http: HttpClient) { }


  getConsultantCompetences(): Observable<ConsultantCompetence[]> {
    return this.http.get<ConsultantCompetence[]>(`${environment.apiBaseUrl}/consultant-competence`);
  }

  getConsultantCompetencesByConsultantId(id: number): Observable<ConsultantCompetence[]> {
    return this.http.get<ConsultantCompetence[]>(`${environment.apiBaseUrl}/consultant-competence?idConsultant=${id}`);
  }

  getConsultant(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(`${environment.apiBaseUrl}/consultant`);
  }

  getCompetence(): Observable<Competence[]> {
    return this.http.get<Competence[]>(`${environment.apiBaseUrl}/competence`);
  }

  getNiveau(): Observable<Niveau[]> {
    return this.http.get<Niveau[]>(`${environment.apiBaseUrl}/niveau`);
  }

  postConsultantCompetence(consultantCompetence: ConsultantCompetence) {
    return this.http.post<Consultant[]>(environment.apiBaseUrl + '/consultant-competence', consultantCompetence);
  }

  deleteConsultantCompetence(id: number) {
    return this.http.delete<ConsultantCompetence>(`${environment.apiBaseUrl}/consultant-competence/${id}`);
  }

  getNbConsultantByCompetenceId(id: number): Observable<number> {
    return this.http.get<number>(`${environment.apiBaseUrl}/consultant-competence/nbConsultant/${id}`)
  }

  getNbConsultant(id: number): Observable<number> {
    return this.http.get<number>(`${environment.apiBaseUrl}/consultant/nbConsultant`);
  }

  /*récupération des consultants par un idCompétence et un idNiveau */
  getTeamSkills(idCompetence: number, idNiveau: number): Observable<ConsultantCompetence[]> {
    return this.http.get<ConsultantCompetence[]>(`${environment.apiBaseUrl}/consultant-competence/skills?idCompetence=${idCompetence}&idNiveau=${idNiveau}`);
  }


}
