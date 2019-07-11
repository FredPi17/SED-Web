import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_API_URL_MYSQL } from 'app/app.constants';
import { Observable } from 'rxjs';
import { BuccodentaireModel } from 'app/shared/model/buccodentaire.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BuccodentaireService {
  public resourceUrl = SERVER_API_URL_MYSQL + '/api/ManifestationBuccoDent';

  constructor(protected http: HttpClient) {}

  getData(): Observable<BuccodentaireModel> {
    return this.http.get<BuccodentaireModel>(`${this.resourceUrl}`);
  }

  getTheLatestData(id: number): Observable<BuccodentaireModel> {
    return this.http.get<BuccodentaireModel>(`${this.resourceUrl}/${id}`);
  }

  postData(buccodentaire: BuccodentaireModel): Observable<BuccodentaireModel> {
    return this.http.post<BuccodentaireModel>(`${this.resourceUrl}`, buccodentaire);
  }

  putData(buccodentaire: BuccodentaireModel, id: number): Observable<any> {
    return this.http.put<BuccodentaireModel>(`${this.resourceUrl}/${id}`, buccodentaire);
  }
}
