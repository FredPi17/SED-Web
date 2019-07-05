import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { RdvComponent } from 'app/entities/rdv/rdv.component';

@Injectable({ providedIn: 'root' })
export class RdvRoute {}

export const rdvRoute: Routes = [
  {
    path: '',
    component: RdvComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.gererMonSED.rdv'
    },
    canActivate: [UserRouteAccessService]
  }
];
