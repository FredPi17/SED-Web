import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedSharedModule } from 'app/shared';

import { AntecedentsComponent } from 'app/entities/antecedents/antecedents.component';
import { RouterModule } from '@angular/router';
import { antecedentsRoute } from 'app/entities/antecedents/antecedents.route';

const ENTITY_STATES = [...antecedentsRoute];

@NgModule({
  declarations: [AntecedentsComponent],
  entryComponents: [AntecedentsComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AntecedentsModule {}
