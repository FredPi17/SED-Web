import { Component, OnInit } from '@angular/core';
import { DigestivesService } from 'app/entities/symptomes/digestive/digestives.service';
import { Digestive } from 'app/shared/model/digestive';
import { NgForm } from '@angular/forms';
import { Account, AccountService } from 'app/core';

@Component({
  selector: 'jhi-digestive',
  templateUrl: './digestive.component.html',
  styleUrls: ['./digestive.component.scss']
})
export class DigestiveComponent implements OnInit {
  digestive: Digestive;
  account: Account;

  constructor(private accountService: AccountService, protected digestiveService: DigestivesService) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
  }

  onSubmit(form: NgForm) {
    this.digestive = new Digestive(
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
