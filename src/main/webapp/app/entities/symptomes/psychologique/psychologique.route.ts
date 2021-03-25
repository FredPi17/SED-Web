import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { PsychologiqueComponent } from './psychologique.component';

@Injectable({ providedIn: 'root' })
export class PsychologiqueRoute {}

export const psychologiqueRoute: Routes = [
  {
    path: '',
    component: PsychologiqueComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.psychologique'
    },
    canActivate: [UserRouteAccessService]
  }
];
