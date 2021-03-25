import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { ophtalmoRoute } from './ophtalmo.route';
import { OphtalmoComponent } from './ophtalmo.component';

const ENTITY_STATES = [...ophtalmoRoute];

@NgModule({
  declarations: [OphtalmoComponent],
  entryComponents: [OphtalmoComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class OphtalmoModule {}
