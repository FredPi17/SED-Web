import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { CognitiveComponent } from 'app/entities/symptomes/cognitive/cognitive.component';

@Injectable({ providedIn: 'root' })
export class CognitiveRoute {}

export const cognitiveRoute: Routes = [
  {
    path: '',
    component: CognitiveComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.symptomes.cognitive'
    },
    canActivate: [UserRouteAccessService]
  }
];
