import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_API_URL_MYSQL } from 'app/app.constants';
import { Observable } from 'rxjs';
import { DigestiveModel } from 'app/shared/model/digestive.model';

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

  getData(): Observable<DigestiveModel> {
    return this.http.get<DigestiveModel>(`${this.resourceUrl}`);
  }

  getTheLatestData(id: number): Observable<DigestiveModel> {
    return this.http.get<DigestiveModel>(`${this.resourceUrl}/${id}`);
  }

  postData(digestive: DigestiveModel): Observable<DigestiveModel> {
    return this.http.post<DigestiveModel>(`${this.resourceUrl}`, digestive);
  }

  putData(digestive: DigestiveModel, id: number): Observable<any> {
    return this.http.put<DigestiveModel>(`${this.resourceUrl}/${id}`, digestive);
  }
}
