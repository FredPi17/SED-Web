import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { DMPComponent } from 'app/entities/dmp/dmp.component';

@Injectable({ providedIn: 'root' })
export class DmpRoute {}

export const dmpRoute: Routes = [
  {
    path: '',
    component: DMPComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.dossierMedical.dmp'
    },
    canActivate: [UserRouteAccessService]
  }
];
