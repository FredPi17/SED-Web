import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { TraitementsEnCoursComponent } from './traitements-en-cours.component';

@Injectable({ providedIn: 'root' })
export class TraitementEnCoursRoute {}

export const traitementsEnCoursRoute: Routes = [
  {
    path: '',
    component: TraitementsEnCoursComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.dossierMedical.traitementsEnCours'
    },
    canActivate: [UserRouteAccessService]
  }
];
