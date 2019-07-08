import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { OphtalmoComponent } from './ophtalmo.component';

@Injectable({ providedIn: 'root' })
export class OphtalmoRoute {}

export const ophtalmoRoute: Routes = [
  {
    path: '',
    component: OphtalmoComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.cognitive'
    },
    canActivate: [UserRouteAccessService]
  }
];
