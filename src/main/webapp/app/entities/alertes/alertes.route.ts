import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { AlertesComponent } from 'app/entities/alertes/alertes.component';

@Injectable({ providedIn: 'root' })
export class AlertesRoute {}

export const alertesRoute: Routes = [
  {
    path: '',
    component: AlertesComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.alertes'
    },
    canActivate: [UserRouteAccessService]
  }
];
