import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespiratoireComponent } from 'app/entities/symptomes/respiratoire/respiratoire.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { respiratoireRoute } from 'app/entities/symptomes/respiratoire/respiratoire.route';

const ENTITY_STATES = [...respiratoireRoute];

@NgModule({
  declarations: [RespiratoireComponent],
  entryComponents: [RespiratoireComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class RespiratoireModule {}
