import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { RespiratoireComponent } from './respiratoire.component';

@Injectable({ providedIn: 'root' })
export class RespiratoireRoute {}

export const respiratoireRoute: Routes = [
  {
    path: '',
    component: RespiratoireComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.respiratoire'
    },
    canActivate: [UserRouteAccessService]
  }
];
