import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TherapeutiqueComponent } from 'app/entities/therapeutique/therapeutique.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { therapeutiqueRoute } from 'app/entities/therapeutique/therapeutique.route';

const ENTITY_STATES = [...therapeutiqueRoute];

@NgModule({
  declarations: [TherapeutiqueComponent],
  entryComponents: [TherapeutiqueComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class TherapeutiqueModule {}
