import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrinaireComponent } from 'app/entities/symptomes/urinaire/urinaire.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { urinaireRoute } from 'app/entities/symptomes/urinaire/urinaire.route';

const ENTITY_STATES = [...urinaireRoute];

@NgModule({
  declarations: [UrinaireComponent],
  entryComponents: [UrinaireComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class UrinaireModule {}
