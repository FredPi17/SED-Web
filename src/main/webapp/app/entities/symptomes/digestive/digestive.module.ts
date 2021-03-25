import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigestiveComponent } from 'app/entities/symptomes/digestive/digestive.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { digestiveRoute } from './digestive.route';

const ENTITY_STATES = [...digestiveRoute];

@NgModule({
  declarations: [DigestiveComponent],
  entryComponents: [DigestiveComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class DigestiveModule {}
