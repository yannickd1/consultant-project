import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { Consultant } from '../models/consultant';
import { ConsultantCompetence } from 'src/app/consultant-competence/models/consultant-competence';



@Injectable({
    providedIn: 'root'
})
export class ConsultantService {

    constructor(private http: HttpClient) { }

    /*récupération de tou sles consultants*/
    getConsultants(): Observable<Consultant[]> {
        return this.http.get<Consultant[]>(`${environment.apiBaseUrl}/consultant`);
    }

    /*récupération d'un consultant par son id*/
    getConsultantById(id: number): Observable<Consultant> {
        return this.http.get<Consultant>(`${environment.apiBaseUrl}/consultant/${id}`);
    }

    /*envoi d'un consultant */
    postConsultant(consultant: Consultant) {
        return this.http.post<Consultant[]>(environment.apiBaseUrl + '/consultant', consultant);
    }

    /*modification d'un consultant*/
    putConsultant(consultant: Consultant) {
        return this.http.put<Consultant[]>(environment.apiBaseUrl + '/consultant', consultant);
    }

    /*suppression d'unb consultant*/
    deleteConsultant(id: number) {
        return this.http.delete<Consultant>(`${environment.apiBaseUrl}/consultant/${id}`);
    }






}