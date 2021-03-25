import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymptomesComponent } from 'app/entities/symptomes/symptomes.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { symptomesRoute } from 'app/entities/symptomes/symptomes.route';

const ENTITY_STATES = [...symptomesRoute];

@NgModule({
  declarations: [SymptomesComponent],
  entryComponents: [SymptomesComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class SymptomesModule {}
