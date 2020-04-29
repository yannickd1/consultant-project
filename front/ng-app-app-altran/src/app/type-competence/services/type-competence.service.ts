import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeCompetence } from '../models/type-competence';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeCompetenceService {

  constructor(private http: HttpClient) { }

  /*récupération des types de compétence*/
  getTypeCompetence(): Observable<TypeCompetence[]> {
    return this.http.get<TypeCompetence[]>(`${environment.apiBaseUrl}/typecompetence`);
  }

  /*envoi d'un type de compétence*/
  postTypeCompetence(typeCompetence: TypeCompetence) {
    return this.http.post<TypeCompetence[]>(environment.apiBaseUrl + '/typecompetence', typeCompetence);
  }

  /*suppression d'un type de compétence*/
  deleteType(id: number) {
    return this.http.delete<TypeCompetence>(`${environment.apiBaseUrl}/typecompetence/${id}`);
  }

}
