import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { SuiviComponent } from 'app/entities/suivi/suivi.component';

@Injectable({ providedIn: 'root' })
export class SuiviRoute {}

export const suiviRoute: Routes = [
  {
    path: '',
    component: SuiviComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.dossierMedical.suivi'
    },
    canActivate: [UserRouteAccessService]
  }
];
