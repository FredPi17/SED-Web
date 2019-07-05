import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepercussionsComponent } from 'app/entities/repercussions/repercussions.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { repercussionsRoute } from 'app/entities/repercussions/repercussions.route';

const ENTITY_STATES = [...repercussionsRoute];

@NgModule({
  declarations: [RepercussionsComponent],
  entryComponents: [RepercussionsComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class RepercussionsModule {}
