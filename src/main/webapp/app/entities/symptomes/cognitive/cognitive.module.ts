import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CognitiveComponent } from 'app/entities/symptomes/cognitive/cognitive.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { cognitiveRoute } from 'app/entities/symptomes/cognitive/cognitive.route';

const ENTITY_STATES = [...cognitiveRoute];

@NgModule({
  declarations: [CognitiveComponent],
  entryComponents: [CognitiveComponent],
  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class CognitiveModule {}
