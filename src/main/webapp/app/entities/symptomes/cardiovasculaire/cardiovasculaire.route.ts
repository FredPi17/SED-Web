import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { CardiovasculaireComponent } from './cardiovasculaire.component';

@Injectable({ providedIn: 'root' })
export class CardiovasculaireRoute {}

export const cardiovasculaireRoute: Routes = [
  {
    path: '',
    component: CardiovasculaireComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.cardiovasculaire'
    },
    canActivate: [UserRouteAccessService]
  }
];
