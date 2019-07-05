import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL_MYSQL } from 'app/app.constants';
import { IAntecedents } from 'app/shared/model/antecedents.model';

@Injectable({
  providedIn: 'root'
})
export class AntecedentsService {
  public resourceUrl = SERVER_API_URL_MYSQL + 'api/antecedents';

  constructor(protected http: HttpClient) {}

  find(id: number): Observable<any> {
    return this.http.get<IAntecedents>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
