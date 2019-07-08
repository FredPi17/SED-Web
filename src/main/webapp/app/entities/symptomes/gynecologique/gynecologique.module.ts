import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GynecologiqueComponent } from 'app/entities/symptomes/gynecologique/gynecologique.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { gynecologiqueRoute } from 'app/entities/symptomes/gynecologique/gynecologique.route';

const ENTITY_STATES = [...gynecologiqueRoute];

@NgModule({
  declarations: [GynecologiqueComponent],
  entryComponents: [GynecologiqueComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class GynecologiqueModule {}
