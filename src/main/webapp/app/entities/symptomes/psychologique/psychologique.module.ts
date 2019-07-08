import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsychologiqueComponent } from './psychologique.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { psychologiqueRoute } from './psychologique.route';

const ENTITY_STATES = [...psychologiqueRoute];

@NgModule({
  declarations: [PsychologiqueComponent],
  entryComponents: [PsychologiqueComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class PsychologiqueModule {}
