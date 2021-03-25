import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { PresentationComponent } from 'app/entities/presentation/presentation.component';

@Injectable({ providedIn: 'root' })
export class PresentationRoute {}

export const presentationRoute: Routes = [
  {
    path: '',
    component: PresentationComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.InfosSed.presentation'
    },
    canActivate: [UserRouteAccessService]
  }
];
