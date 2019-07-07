import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { ArticlesComponent } from 'app/entities/articles/articles.component';

@Injectable({ providedIn: 'root' })
export class ArticlesRoute {}

export const articlesRoute: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'global.menu.InfosSed.articles'
    },
    canActivate: [UserRouteAccessService]
  }
];
