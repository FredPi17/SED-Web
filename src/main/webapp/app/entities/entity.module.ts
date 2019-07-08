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
      },
      {
        path: 'symptomes',
        loadChildren: './symptomes/symptomes.module#SymptomesModule'
      },
      {
        path: 'symptomes/digestive',
        loadChildren: './symptomes/digestive/digestive.module#DigestiveModule'
      },
      {
        path: 'symptomes/cardio-vasculaire',
        loadChildren: './symptomes/cardiovasculaire/cardiovasculaire.module#CardiovasculaireModule'
      },
      {
        path: 'symptomes/respiratoire',
        loadChildren: './symptomes/respiratoire/respiratoire.module#RespiratoireModule'
      },
      {
        path: 'symptomes/orl',
        loadChildren: './symptomes/orl/orl.module#OrlModule'
      },
      {
        path: 'symptomes/bucco-dentaire',
        loadChildren: './symptomes/buccodentaire/buccodentaire.module#BuccodentaireModule'
      },
      {
        path: 'symptomes/urinaire',
        loadChildren: './symptomes/urinaire/urinaire.module#UrinaireModule'
      },
      {
        path: 'symptomes/gynecologique',
        loadChildren: './symptomes/gynecologique/gynecologique.module#GynecologiqueModule'
      },
      {
        path: 'symptomes/musculaire',
        loadChildren: './symptomes/musculaire/musculaire.module#MusculaireModule'
      },
      {
        path: 'symptomes/articulation',
        loadChildren: './symptomes/articulation/articulation.module#ArticulationModule'
      },
      {
        path: 'symptomes/neurologique',
        loadChildren: './symptomes/neurologique/neurologique.module#NeurologiqueModule'
      },
      {
        path: 'symptomes/cognitive',
        loadChildren: './symptomes/cognitive/cognitive.module#CognitiveModule'
      },
      {
        path: 'symptomes/sommeil',
        loadChildren: './symptomes/sommeil/sommeil.module#SommeilModule'
      },
      {
        path: 'symptomes/cutanee',
        loadChildren: './symptomes/cutanee/cutanee.module#CutaneeModule'
      },
      {
        path: 'symptomes/ophtalmo',
        loadChildren: './symptomes/ophtalmo/ophtalmo.module#OphtalmoModule'
      },
      {
        path: 'symptomes/psychologique',
        loadChildren: './symptomes/psychologique/psychologique.module#PsychologiqueModule'
      },
      {
        path: 'traitement',
        loadChildren: './traitement/traitement.module#TraitementModule'
      },
      {
        path: 'rendez-vous',
        loadChildren: './rdv/rdv.module#RdvModule'
      },
      {
        path: 'repercussions',
        loadChildren: './repercussions/repercussions.module#RepercussionsModule'
      },
      {
        path: 'therapeutique',
        loadChildren: './therapeutique/therapeutique.module#TherapeutiqueModule'
      },
      {
        path: 'alertes',
        loadChildren: './alertes/alertes.module#AlertesModule'
      },
      {
        path: 'presentation',
        loadChildren: './presentation/presentation.module#PresentationModule'
      },
      {
        path: 'articles',
        loadChildren: './articles/articles.module#ArticlesModule'
      },
      {
        path: 'faq',
        loadChildren: './faq/faq.module#FaqModule'
      }
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SedEntityModule {}
