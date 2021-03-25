import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { orlRoute } from 'app/entities/symptomes/orl/orl.route';
import { OrlComponent } from 'app/entities/symptomes/orl/orl.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';

const ENTITY_STATES = [...orlRoute];

@NgModule({
  declarations: [OrlComponent],
  entryComponents: [OrlComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class OrlModule {}
