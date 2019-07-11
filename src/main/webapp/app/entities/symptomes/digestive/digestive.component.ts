import { Component, DoCheck, OnInit } from '@angular/core';
import { DigestivesService } from 'app/entities/symptomes/digestive/digestives.service';
import { DigestiveModel } from 'app/shared/model/digestive.model';
import { NgForm } from '@angular/forms';
import { Account, AccountService } from 'app/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'jhi-digestive',
  templateUrl: './digestive.component.html',
  styleUrls: ['./digestive.component.scss'],
  providers: [DatePipe]
})
export class DigestiveComponent implements OnInit {
  digestive: Digestive;
  old?: Digestive = new Digestive();
  account: Account;
  oldForm: boolean;
  myDate = new Date().toString();
  id: number;

  constructor(private datePipe: DatePipe, private accountService: AccountService, protected digestiveService: DigestivesService) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.getLastetForm();
  }

  getLastetForm() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
      this.digestiveService
        .getTheLatestData(this.account.id)
        .toPromise()
        .then(
          callback => {
            this.compareDates(callback);
            // @ts-ignore
            this.id = callback.id;
          },
          error => {
            console.log(error);
          }
        );
    });
  }

  compareDates(callback: DigestiveModel) {
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
    this.digestive = new DigestiveModel(
      form.value.absenceSatiete,
      form.value.aerophagie,
      form.value.amaigrissement,
      form.value.ballonements,
      form.value.brulureEstomac,
      form.value.commentaire,
      form.value.constipation,
      form.value.crampeIntestinale,
      form.value.criseHemorroide,
      form.value.douleurAbdominale,
      form.value.douleurEpigastrique,
      form.value.douleurVesiculaire,
      form.value.dysphagie,
      form.value.eructation,
      form.value.estomacGonfle,
      form.value.fausseRoute,
      form.value.gastroParesie,
      form.value.gaz,
      form.value.hypoglycemieReactionnelle,
      this.account.id,
      form.value.imperiositeFecale,
      form.value.impossibiliteAlimenter,
      form.value.indigestion,
      form.value.mauvaiseHaleine,
      form.value.nausees,
      form.value.perteAppetit,
      form.value.pesanteurGastrique,
      form.value.prisePoids,
      form.value.regurgitation,
      form.value.rgo,
      form.value.saignementDigestifBas,
      form.value.saignementDigestifHaut,
      form.value.satietePrecoce,
      form.value.selleLiquide,
      form.value.sensationBrulureOesophage,
      form.value.sensationFaimDouloureuse,
      form.value.soifPermanente,
      form.value.spasmeIntestinaux,
      form.value.vomissements
    );

    console.log(this.digestive);

    if (this.oldForm) {
      this.digestiveService.putData(this.digestive, this.id).subscribe(
        callback => {
          console.log(callback);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.digestiveService.postData(this.digestive).subscribe(
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
