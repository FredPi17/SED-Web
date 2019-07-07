import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { FaqComponent } from 'app/entities/faq/faq.component';

@Injectable({ providedIn: 'root' })
export class FaqRoute {}

export const faqRoute: Routes = [
  {
    path: '',
    component: FaqComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.faq'
    },
    canActivate: [UserRouteAccessService]
  }
];
