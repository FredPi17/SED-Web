import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvComponent } from 'app/entities/rdv/rdv.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { rdvRoute } from 'app/entities/rdv/rdv.route';

const ENTITY_STATES = [...rdvRoute];

@NgModule({
  declarations: [RdvComponent],
  entryComponents: [RdvComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class RdvModule {}
