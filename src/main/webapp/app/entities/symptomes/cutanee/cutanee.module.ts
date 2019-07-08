import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutaneeComponent } from 'app/entities/symptomes/cutanee/cutanee.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { cutaneeRoute } from 'app/entities/symptomes/cutanee/cutanee.route';

const ENTITY_STATES = [...cutaneeRoute];

@NgModule({
  declarations: [CutaneeComponent],
  entryComponents: [CutaneeComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class CutaneeModule {}
