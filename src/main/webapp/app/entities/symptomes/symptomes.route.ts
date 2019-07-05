import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { SymptomesComponent } from 'app/entities/symptomes/symptomes.component';

@Injectable({ providedIn: 'root' })
export class SymptomesRoute {}

export const symptomesRoute: Routes = [
  {
    path: '',
    component: SymptomesComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.dossierMedical.symptomes'
    },
    canActivate: [UserRouteAccessService]
  }
];
