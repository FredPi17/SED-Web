import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { DigestiveComponent } from './digestive.component';

@Injectable({ providedIn: 'root' })
export class DigestiveRoute {}

export const digestiveRoute: Routes = [
  {
    path: '',
    component: DigestiveComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.digestive'
    },
    canActivate: [UserRouteAccessService]
  }
];
