import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { BuccodentaireComponent } from 'app/entities/symptomes/buccodentaire/buccodentaire.component';

@Injectable({ providedIn: 'root' })
export class BuccoDentaireRoute {}

export const buccodentaireRoute: Routes = [
  {
    path: '',
    component: BuccodentaireComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.buccodentaire'
    },
    canActivate: [UserRouteAccessService]
  }
];
