import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulationComponent } from 'app/entities/symptomes/articulation/articulation.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { articulationRoute } from 'app/entities/symptomes/articulation/articulation.route';

const ENTITY_STATES = [...articulationRoute];

@NgModule({
  declarations: [ArticulationComponent],
  entryComponents: [ArticulationComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class ArticulationModule {}
