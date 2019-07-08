import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeurologiqueComponent } from 'app/entities/symptomes/neurologique/neurologique.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { neurologiqueRoute } from 'app/entities/symptomes/neurologique/neurologique.route';

const ENTITY_STATES = [...neurologiqueRoute];

@NgModule({
  declarations: [NeurologiqueComponent],
  entryComponents: [NeurologiqueComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class NeurologiqueModule {}
