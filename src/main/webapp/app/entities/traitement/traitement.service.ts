import { Injectable } from '@angular/core';
import { TraitementModel } from 'app/shared/model/traitement.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL_MYSQL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
  public resourceUrl = SERVER_API_URL_MYSQL + '/api/traitements';

  constructor(protected http: HttpClient) {}

  postData(traitement: TraitementModel): Observable<TraitementModel> {
    return this.http.post<TraitementModel>(`${this.resourceUrl}`, traitement);
  }

  getData(): Observable<Array<TraitementModel>> {
    return this.http.get<Array<TraitementModel>>(`${this.resourceUrl}`);
  }

  setInactive(id: number): Observable<any> {
    return this.http.put(`${this.resourceUrl}/inactive/${id}`, { isActive: false });
  }
}
