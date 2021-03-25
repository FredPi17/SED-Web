import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { OrlComponent } from 'app/entities/symptomes/orl/orl.component';

@Injectable({ providedIn: 'root' })
export class OrlRoute {}

export const orlRoute: Routes = [
  {
    path: '',
    component: OrlComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.orl'
    },
    canActivate: [UserRouteAccessService]
  }
];
