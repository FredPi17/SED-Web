import { Component, OnInit } from '@angular/core';
import { Account, AccountService } from 'app/core';
import { Respiratoire } from 'app/shared/model/respiratoire.model';
import { DatePipe } from '@angular/common';
import { RespiratoireService } from 'app/entities/symptomes/respiratoire/respiratoire.service';
import { CardioVasculaire } from 'app/shared/model/cardiovasculaire.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'jhi-respiratoire',
  templateUrl: './respiratoire.component.html',
  styleUrls: ['./respiratoire.component.scss']
})
export class RespiratoireComponent implements OnInit {
  respiratoire: Respiratoire;
  old?: Respiratoire = new Respiratoire();
  account: Account;
  oldForm: boolean;
  myDate: string = new Date().toString();
  id: number;

  constructor(private datePipe: DatePipe, private accountService: AccountService, protected respiratoireService: RespiratoireService) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.getLastetForm();
  }

  getLastetForm() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
      this.respiratoireService
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
    this.respiratoire = new Respiratoire(
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
      this.respiratoireService.putData(this.respiratoire, this.id).subscribe(
        callback => {
          console.log(callback);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.respiratoireService.postData(this.respiratoire).subscribe(
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
