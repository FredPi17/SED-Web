import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'antecedents',
        loadChildren: './antecedents/antecedents.module#AntecedentsModule'
      },
      {
        path: 'traitements-en-cours',
        loadChildren: './traitements-en-cours/traitement-en-cours.module#TraitementEnCoursModule'
      },
      {
        path: 'fiche-urgence',
        loadChildren: './fiche-urgence/fiche-urgence.module#FicheUrgenceModule'
      },
      {
        path: 'suivi',
        loadChildren: './suivi/suivi.module#SuiviModule'
      },
      {
        path: 'dmp',
        loadChildren: './dmp/dmp.module#DmpModule'
      }
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SedEntityModule {}
