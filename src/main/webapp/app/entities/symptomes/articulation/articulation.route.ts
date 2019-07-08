import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { ArticulationComponent } from 'app/entities/symptomes/articulation/articulation.component';

@Injectable({ providedIn: 'root' })
export class ArticulationRoute {}

export const articulationRoute: Routes = [
  {
    path: '',
    component: ArticulationComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.articulation'
    },
    canActivate: [UserRouteAccessService]
  }
];
