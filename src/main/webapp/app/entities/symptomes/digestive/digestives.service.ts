import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_API_URL_MYSQL } from 'app/app.constants';
import { Observable } from 'rxjs';
import { Digestive } from 'app/shared/model/digestive';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DigestivesService {
  public resourceUrl = SERVER_API_URL_MYSQL + '/api/manifestationDigestive';

  constructor(protected http: HttpClient) {}

  getData(): Observable<Digestive> {
    return this.http.get<Digestive>(`${this.resourceUrl}`);
  }

  getTheLatestData(id: number): Observable<Digestive> {
    return this.http.get<Digestive>(`${this.resourceUrl}/${id}`);
  }

  postData(digestive: Digestive): Observable<any> {
    return this.http.post<Digestive>(`${this.resourceUrl}`, digestive);
  }

  putData(digestive: Digestive, id: number): Observable<any> {
    return this.http.put<Digestive>(`${this.resourceUrl}/${id}`, digestive);
  }
}
