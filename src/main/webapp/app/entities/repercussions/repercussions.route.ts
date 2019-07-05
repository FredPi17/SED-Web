import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { RepercussionsComponent } from 'app/entities/repercussions/repercussions.component';

@Injectable({ providedIn: 'root' })
export class RepercussionsRoute {}

export const repercussionsRoute: Routes = [
  {
    path: '',
    component: RepercussionsComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.gererMonSED.repercussions'
    },
    canActivate: [UserRouteAccessService]
  }
];
