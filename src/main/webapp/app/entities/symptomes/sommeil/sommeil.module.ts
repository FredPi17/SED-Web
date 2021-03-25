import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SommeilComponent } from 'app/entities/symptomes/sommeil/sommeil.component';
import { sommeilRoute } from 'app/entities/symptomes/sommeil/sommeil.route';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';

const ENTITY_STATES = [...sommeilRoute];

@NgModule({
  declarations: [SommeilComponent],
  entryComponents: [SommeilComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class SommeilModule {}
