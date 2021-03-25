import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { MusculaireComponent } from './musculaire.component';

@Injectable({ providedIn: 'root' })
export class MusculaireRoute {}

export const musculaireRoute: Routes = [
  {
    path: '',
    component: MusculaireComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.musculaire'
    },
    canActivate: [UserRouteAccessService]
  }
];
