import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviComponent } from 'app/entities/suivi/suivi.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { suiviRoute } from 'app/entities/suivi/suivi.route';

const ENTITY_STATES = [...suiviRoute];

@NgModule({
  declarations: [SuiviComponent],
  entryComponents: [SuiviComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class SuiviModule {}
