import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { GynecologiqueComponent } from 'app/entities/symptomes/gynecologique/gynecologique.component';

@Injectable({ providedIn: 'root' })
export class GynecologiqueRoute {}

export const gynecologiqueRoute: Routes = [
  {
    path: '',
    component: GynecologiqueComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.gynecologique'
    },
    canActivate: [UserRouteAccessService]
  }
];
