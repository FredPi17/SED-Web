import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_API_URL_MYSQL } from 'app/app.constants';
import { Observable } from 'rxjs';
import { MusculaireModel } from 'app/shared/model/musculaire.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MusculaireService {
  public resourceUrl = SERVER_API_URL_MYSQL + '/api/manifestationMusculaire';

  constructor(protected http: HttpClient) {}

  getData(): Observable<MusculaireModel> {
    return this.http.get<MusculaireModel>(`${this.resourceUrl}`);
  }

  getTheLatestData(id: number): Observable<MusculaireModel> {
    return this.http.get<MusculaireModel>(`${this.resourceUrl}/${id}`);
  }

  postData(musculaire: MusculaireModel): Observable<MusculaireModel> {
    return this.http.post<MusculaireModel>(`${this.resourceUrl}`, musculaire);
  }

  putData(musculaire: MusculaireModel, id: number): Observable<any> {
    return this.http.put<MusculaireModel>(`${this.resourceUrl}/${id}`, musculaire);
  }
}
