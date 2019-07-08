import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusculaireComponent } from 'app/entities/symptomes/musculaire/musculaire.component';
import { musculaireRoute } from 'app/entities/symptomes/musculaire/musculaire.route';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';

const ENTITY_STATES = [...musculaireRoute];

@NgModule({
  declarations: [MusculaireComponent],
  entryComponents: [MusculaireComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class MusculaireModule {}
