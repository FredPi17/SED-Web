import { Component, OnInit } from '@angular/core';
import { JhiLanguageHelper } from 'app/core';

@Component({
  selector: 'jhi-symptomes',
  templateUrl: './symptomes.component.html',
  styleUrls: ['./symptomes.component.scss']
})
export class SymptomesComponent implements OnInit {
  languages: any[];

  constructor(private languageHelper: JhiLanguageHelper) {}

  ngOnInit() {
    this.languageHelper.getAll().then(languages => {
      this.languages = languages;
    });
  }
}
