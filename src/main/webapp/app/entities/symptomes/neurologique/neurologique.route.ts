import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { NeurologiqueComponent } from './neurologique.component';

@Injectable({ providedIn: 'root' })
export class NeurologiqueRoute {}

export const neurologiqueRoute: Routes = [
  {
    path: '',
    component: NeurologiqueComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.neurologique'
    },
    canActivate: [UserRouteAccessService]
  }
];
