import { Component, DoCheck, OnInit } from '@angular/core';
import { MusculaireService } from 'app/entities/symptomes/musculaire/musculaire.service';
import { MusculaireModel } from 'app/shared/model/musculaire.model';
import { NgForm } from '@angular/forms';
import { Account, AccountService } from 'app/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'jhi-musculaire',
  templateUrl: './musculaire.component.html',
  styleUrls: ['./musculaire.component.scss'],
  providers: [DatePipe]
})
export class MusculaireComponent implements OnInit {
  musculaire: MusculaireModel;
  old?: MusculaireModel;
  account: Account;
  oldForm: boolean;
  myDate = new Date();
  id: number;

  constructor(private datePipe: DatePipe, private accountService: AccountService, protected musculaireService: MusculaireService) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.getLastetForm();
  }

  getLastetForm() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
      this.musculaireService
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

  compareDates(callback: MusculaireModel) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    console.log('date du jour: ' + this.myDate + '\n date bdd: ' + callback.dateDuJour);
    callback.dateDuJour.includes(this.myDate) ? (this.oldForm = true) : (this.oldForm = false);
    if (this.oldForm) {
      this.old = callback;
    }
  }

  onSubmit(form: NgForm) {
    this.musculaire = new MusculaireModel(
      form.value.myalgieDiffuse,
      form.value.fatigueMusculaire,
      form.value.crampe,
      form.value.faiblesseMusculaire,
      form.value.spasmeMusculaire,
      form.value.contracture,
      form.value.courbature,
      form.value.dystonie,
      form.value.hypertonie,
      form.value.hypotonie,
      form.value.fasciculation,
      form.value.commentaire,
      this.account.id
    );

    console.log(this.musculaire);

    if (this.oldForm) {
      this.musculaireService.putData(this.musculaire, this.id).subscribe(
        callback => {
          console.log(callback);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.musculaireService.postData(this.musculaire).subscribe(
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
