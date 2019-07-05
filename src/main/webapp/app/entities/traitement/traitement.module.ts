import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraitementComponent } from 'app/entities/traitement/traitement.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { traitementRoute } from 'app/entities/traitement/traitement.route';

const ENTITY_STATES = [...traitementRoute];

@NgModule({
  declarations: [TraitementComponent],
  entryComponents: [TraitementComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class TraitementModule {}
