import { Component, OnInit } from '@angular/core';
import { Account, AccountService } from 'app/core';
import { DatePipe } from '@angular/common';
import { OrlService } from 'app/entities/symptomes/orl/orl.service';
import { CardioVasculaire } from 'app/shared/model/cardiovasculaire.model';
import { NgForm } from '@angular/forms';
import { Orl } from 'app/shared/model/orl.model';

@Component({
  selector: 'jhi-orl',
  templateUrl: './orl.component.html',
  styleUrls: ['./orl.component.scss']
})
export class OrlComponent implements OnInit {
  orl: Orl;
  old?: Orl = new Orl();
  account: Account;
  oldForm: boolean;
  myDate: string = new Date().toString();
  id: number;

  constructor(private datePipe: DatePipe, private accountService: AccountService, protected orlService: OrlService) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.getLastetForm();
  }

  getLastetForm() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
      this.orlService
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
    this.orl = new Orl(
      form.value.essouflementEffort,
      form.value.essouflementRepos,
      form.value.sensationBlocageDiaphragmatique,
      form.value.bradyapnee,
      form.value.tachyapnee,
      form.value.respirationSifflante,
      form.value.criseRespiratoireAngoissante,
      form.value.sensationOppressionThoracique,
      form.value.encombrementBronchique,
      form.value.expectorationSanglante,
      form.value.blocageRespiratoire,
      form.value.criseAsthme,
      form.value.touxSeche,
      form.value.touxGrasse,
      form.value.dysphonie,
      form.value.aphonie,
      form.value.douleurRespiratoire,
      form.value.infectionVoieAerienneSuperieur,
      form.value.bronchite,
      form.value.pneumopathie,
      form.value.saturationOxygene,
      form.value.commentaire,
      this.account.id
    );
    console.log(this.respiratoire);

    if (this.oldForm) {
      this.orlService.putData(this.orl, this.id).subscribe(
        callback => {
          console.log(callback);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.orlService.postData(this.orl).subscribe(
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
