import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SedSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SedSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SedSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SedSharedModule {
  static forRoot() {
    return {
      ngModule: SedSharedModule
    };
  }
}
