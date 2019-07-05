import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DMPComponent } from 'app/entities/dmp/dmp.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { dmpRoute } from 'app/entities/dmp/dmp.route';

const ENTITY_STATES = [...dmpRoute];

@NgModule({
  declarations: [DMPComponent],
  entryComponents: [DMPComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class DmpModule {}
