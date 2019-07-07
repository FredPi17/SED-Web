import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from 'app/entities/articles/articles.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { articlesRoute } from 'app/entities/articles/articles.route';

const ENTITY_STATES = [...articlesRoute];

@NgModule({
  declarations: [ArticlesComponent],
  entryComponents: [ArticlesComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class ArticlesModule {}
