import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { FicheUrgenceComponent } from './fiche-urgence.component';

@Injectable({ providedIn: 'root' })
export class FicheUrgenceRoute {}

export const ficheUrgenceRoute: Routes = [
  {
    path: '',
    component: FicheUrgenceComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.dossierMedical.ficheUrgence'
    },
    canActivate: [UserRouteAccessService]
  }
];
