import { Injectable } from '@angular/core';
import { SERVER_API_URL_MYSQL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respiratoire } from 'app/shared/model/respiratoire.model';

@Injectable({
  providedIn: 'root'
})
export class OrlService {
  public resourceUrl = SERVER_API_URL_MYSQL + '/api/manifestationRespi';

  constructor(protected http: HttpClient) {}

  getTheLatestData(id: number): Observable<Respiratoire> {
    return this.http.get<Respiratoire>(`${this.resourceUrl}/${id}`);
  }

  postData(respiratoire: Respiratoire): Observable<Respiratoire> {
    return this.http.post<Respiratoire>(`${this.resourceUrl}`, respiratoire);
  }

  putData(respiratoire: Respiratoire, id: number): Observable<Respiratoire> {
    return this.http.put<Respiratoire>(`${this.resourceUrl}/${id}`, respiratoire);
  }
}
