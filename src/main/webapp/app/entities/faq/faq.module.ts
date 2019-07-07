import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from 'app/entities/faq/faq.component';
import { SedSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { faqRoute } from 'app/entities/faq/faq.route';

const ENTITY_STATES = [...faqRoute];

@NgModule({
  declarations: [FaqComponent],
  entryComponents: [FaqComponent],

  imports: [CommonModule, SedSharedModule, RouterModule.forChild(ENTITY_STATES)]
})
export class FaqModule {}
