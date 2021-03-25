import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuccodentaireComponent } from 'app/entities/symptomes/buccodentaire/buccodentaire.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { buccodentaireRoute } from 'app/entities/symptomes/buccodentaire/buccodentaire.route';

const ENTITY_STATES = [...buccodentaireRoute];

@NgModule({
  declarations: [BuccodentaireComponent],
  entryComponents: [BuccodentaireComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class BuccodentaireModule {}
