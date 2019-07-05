import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { TraitementComponent } from 'app/entities/traitement/traitement.component';

@Injectable({ providedIn: 'root' })
export class TraitementRoute {}

export const traitementRoute: Routes = [
  {
    path: '',
    component: TraitementComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.gererMonSED.traitement'
    },
    canActivate: [UserRouteAccessService]
  }
];
