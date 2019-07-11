import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL_MYSQL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';
import { CardioVasculaire } from 'app/shared/model/cardiovasculaire.model';

@Injectable({
  providedIn: 'root'
})
export class CardiovasculaireService {
  public resourceUrl = SERVER_API_URL_MYSQL + '/api/manifestationCardio';

  constructor(protected http: HttpClient) {}

  getTheLatestData(id: number): Observable<CardioVasculaire> {
    return this.http.get<CardioVasculaire>(`${this.resourceUrl}/${id}`);
  }

  postData(cardioVasculaire: CardioVasculaire): Observable<CardioVasculaire> {
    return this.http.post<CardioVasculaire>(`${this.resourceUrl}`, cardioVasculaire);
  }

  putData(cardioVasculaire: CardioVasculaire, id: number): Observable<CardioVasculaire> {
    return this.http.put<CardioVasculaire>(`${this.resourceUrl}/${id}`, cardioVasculaire);
  }
}
