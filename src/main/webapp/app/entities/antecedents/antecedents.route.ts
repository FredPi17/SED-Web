import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { AntecedentsComponent } from './antecedents.component';

@Injectable({ providedIn: 'root' })
export class AntecedentsRoute {}

export const antecedentsRoute: Routes = [
  {
    path: '',
    component: AntecedentsComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.dossierMedical.antecedents'
    },
    canActivate: [UserRouteAccessService]
  }
];
