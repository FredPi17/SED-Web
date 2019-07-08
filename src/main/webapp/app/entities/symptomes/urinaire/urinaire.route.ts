import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { UrinaireComponent } from './urinaire.component';

@Injectable({ providedIn: 'root' })
export class UrinaireRoute {}

export const urinaireRoute: Routes = [
  {
    path: '',
    component: UrinaireComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.urinaire'
    },
    canActivate: [UserRouteAccessService]
  }
];
