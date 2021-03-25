import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { CutaneeComponent } from 'app/entities/symptomes/cutanee/cutanee.component';

@Injectable({ providedIn: 'root' })
export class CutaneeRoute {}

export const cutaneeRoute: Routes = [
  {
    path: '',
    component: CutaneeComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.cognitive'
    },
    canActivate: [UserRouteAccessService]
  }
];
