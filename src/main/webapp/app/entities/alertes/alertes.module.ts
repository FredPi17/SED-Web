import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertesComponent } from 'app/entities/alertes/alertes.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { alertesRoute } from 'app/entities/alertes/alertes.route';

const ENTITY_STATES = [...alertesRoute];

@NgModule({
  declarations: [AlertesComponent],
  entryComponents: [AlertesComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class AlertesModule {}
