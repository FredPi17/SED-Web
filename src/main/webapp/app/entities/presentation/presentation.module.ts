import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from 'app/entities/presentation/presentation.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { presentationRoute } from 'app/entities/presentation/presentation.route';

const ENTITY_STATES = [...presentationRoute];

@NgModule({
  declarations: [PresentationComponent],
  entryComponents: [PresentationComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class PresentationModule {}
