import { Component, Input, OnInit } from '@angular/core';
import { Account, AccountService } from 'app/core';
import { DatePipe } from '@angular/common';
import { CardiovasculaireService } from './cardiovasculaire.service';
import { CardioVasculaire } from 'app/shared/model/cardiovasculaire.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'jhi-cardiovasculaire',
  templateUrl: './cardiovasculaire.component.html',
  styleUrls: ['./cardiovasculaire.component.scss']
})
export class CardiovasculaireComponent implements OnInit {
  cardioVasculaire: CardioVasculaire;
  old?: CardioVasculaire = new CardioVasculaire();
  account: Account;
  oldForm: boolean;
  myDate: string = new Date().toString();
  id: number;

  constructor(
    private datePipe: DatePipe,
    private accountService: AccountService,
    protected cardiovasculaireService: CardiovasculaireService
  ) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.getLastetForm();
  }

  getLastetForm() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
      this.cardiovasculaireService
        .getTheLatestData(this.account.id)
        .toPromise()
        .then(
          callback => {
            if (callback !== null) {
              this.compareDates(callback);
              // @ts-ignore
              this.id = callback.id;
            }
          },
          error => {
            console.log(error);
          }
        );
    });
  }

  compareDates(callback: CardioVasculaire) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    // @ts-ignore
    console.log('date du jour: ' + this.myDate + '\n date bdd: ' + callback.dateDuJour);
    // @ts-ignore
    callback.dateDuJour.includes(this.myDate) ? (this.oldForm = true) : (this.oldForm = false);
    if (this.oldForm) {
      this.old = callback;
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.cardioVasculaire = new CardioVasculaire(
      form.value.tachycardie,
      form.value.tachycardieNb,
      form.value.bradycardie,
      form.value.bradycardieNb,
      form.value.hypertension,
      form.value.hypertensionNb,
      form.value.hypotension,
      form.value.hypotensionNb,
      form.value.tachycardiePosturale,
      form.value.tachycardiePosturaleNb,
      form.value.palpitation,
      form.value.arythmie,
      form.value.marbrures,
      form.value.extremiteFroideEtPale,
      form.value.malaise,
      form.value.varice,
      form.value.syncope,
      form.value.doigtEnfle,
      form.value.phlebite,
      form.value.gonflementJambeChevillePieds,
      form.value.syndromeReynaud,
      form.value.essouflement,
      form.value.douleurThoracique,
      form.value.evanouissement,
      form.value.systole,
      form.value.diastole,
      form.value.pouls,
      form.value.commentaire,
      this.account.id
    );

    console.log(this.cardioVasculaire);

    if (this.oldForm) {
      this.cardiovasculaireService.putData(this.cardioVasculaire, this.id).subscribe(
        callback => {
          console.log(callback);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.cardiovasculaireService.postData(this.cardioVasculaire).subscribe(
        callback => {
          console.log(callback);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
