import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { TherapeutiqueComponent } from 'app/entities/therapeutique/therapeutique.component';

@Injectable({ providedIn: 'root' })
export class TherapeutiqueRoute {}

export const therapeutiqueRoute: Routes = [
  {
    path: '',
    component: TherapeutiqueComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.gererMonSED.therapeutique'
    },
    canActivate: [UserRouteAccessService]
  }
];
