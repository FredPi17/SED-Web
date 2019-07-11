import { Component, DoCheck, OnInit } from '@angular/core';
import { BuccodentaireService } from 'app/entities/symptomes/buccodentaire/buccodentaire.service';
import { BuccodentaireModel } from 'app/shared/model/buccodentaire.model';
import { NgForm } from '@angular/forms';
import { Account, AccountService } from 'app/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'jhi-buccodentaire',
  templateUrl: './buccodentaire.component.html',
  styleUrls: ['./buccodentaire.component.scss'],
  providers: [DatePipe]
})
export class BuccodentaireComponent implements OnInit {
  buccodentaire: BuccodentaireModel;
  old?: BuccodentaireModel;
  account: Account;
  oldForm: boolean;
  myDate = new Date();
  id: number;

  constructor(private datePipe: DatePipe, private accountService: AccountService, protected buccodentaireService: BuccodentaireService) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.getLastetForm();
  }

  getLastetForm() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
      this.buccodentaireService
        .getTheLatestData(this.account.id)
        .toPromise()
        .then(
          callback => {
            this.compareDates(callback);
            this.id = callback.id;
          },
          error => {
            console.log(error);
          }
        );
    });
  }

  compareDates(callback: BuccodentaireModel) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    console.log('date du jour: ' + this.myDate + '\n date bdd: ' + callback.dateDuJour);
    callback.dateDuJour.includes(this.myDate) ? (this.oldForm = true) : (this.oldForm = false);
    if (this.oldForm) {
      this.old = callback;
    }
  }

  onSubmit(form: NgForm) {
    this.buccodentaire = new BuccodentaireModel(
      form.value.douleurDentaire,
      form.value.douleurGingivale,
      form.value.saignementgingival,
      form.value.hypersensibiliteDentaire,
      form.value.colletDentaireDouleur,
      form.value.commentaire,
      form.value.bruxisme,
      form.value.gingivite,
      form.value.anesthesiePasEfficace,
      form.value.alterationGencive,
      form.value.dechaussementDentaire,
      form.value.secheresseBuccale,
      form.value.hypersialorhee,
      form.value.boutonFievre,
      form.value.mauvaiseHaleine,
      form.value.aphte,
      form.value.abces,
      form.value.parodontite,
      form.value.emailErode,
      this.account.id,
      form.value.carie
    );

    console.log(this.buccodentaire);

    if (this.oldForm) {
      this.buccodentaireService.putData(this.buccodentaire, this.id).subscribe(
        callback => {
          console.log(callback);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.buccodentaireService.postData(this.buccodentaire).subscribe(
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
