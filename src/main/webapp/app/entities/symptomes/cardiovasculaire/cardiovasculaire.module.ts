import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardiovasculaireComponent } from './cardiovasculaire.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { cardiovasculaireRoute } from './cardiovasculaire.route';

const ENTITY_STATES = [...cardiovasculaireRoute];

@NgModule({
  declarations: [CardiovasculaireComponent],
  entryComponents: [CardiovasculaireComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class CardiovasculaireModule {}
