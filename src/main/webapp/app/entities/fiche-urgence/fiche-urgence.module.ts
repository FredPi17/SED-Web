import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FicheUrgenceComponent } from 'app/entities/fiche-urgence/fiche-urgence.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { ficheUrgenceRoute } from 'app/entities/fiche-urgence/fiche-urgence.route';

const ENTITY_STATES = [...ficheUrgenceRoute];

@NgModule({
  declarations: [FicheUrgenceComponent],
  entryComponents: [FicheUrgenceComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class FicheUrgenceModule {}
