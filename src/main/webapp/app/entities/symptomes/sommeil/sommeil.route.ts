import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { SommeilComponent } from 'app/entities/symptomes/sommeil/sommeil.component';

@Injectable({ providedIn: 'root' })
export class SommeilRoute {}

export const sommeilRoute: Routes = [
  {
    path: '',
    component: SommeilComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.sommeil'
    },
    canActivate: [UserRouteAccessService]
  }
];
