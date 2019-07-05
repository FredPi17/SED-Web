import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { TraitementsEnCoursComponent } from 'app/entities/traitements-en-cours/traitements-en-cours.component';
import { traitementsEnCoursRoute } from 'app/entities/traitements-en-cours/traitement-en-cours.route';

const ENTITY_STATES = [...traitementsEnCoursRoute];

@NgModule({
  declarations: [TraitementsEnCoursComponent],
  entryComponents: [TraitementsEnCoursComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TraitementEnCoursModule {}
