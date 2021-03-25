import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TraitementModel } from 'app/shared/model/traitement.model';
import { Account, AccountService } from 'app/core';
import { TraitementService } from 'app/entities/traitement/traitement.service';

@Component({
  selector: 'jhi-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.scss']
})
export class TraitementComponent implements OnInit {
  traitement: TraitementModel;
  account: Account;
  listOfTraitements: Array<TraitementModel>;

  constructor(private accountService: AccountService, protected traitementService: TraitementService) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.traitementService.getData().subscribe(
      callback => {
        this.listOfTraitements = callback;
        console.log(this.listOfTraitements);
      },
      err => {
        console.log(err);
      }
    );
  }

  deactivate(id: number) {
    this.traitementService.setInactive(id).subscribe(
      callback => {
        console.log(callback);
      },
      err => {
        console.log(err);
      }
    );
    this.reload();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    // @ts-ignore
    this.traitement = new TraitementModel(
      form.value.nom,
      form.value.posologie,
      form.value.dosage,
      form.value.dateDebut,
      form.value.dateDeFin,
      this.account.id
    );
    console.log(this.traitement);

    this.traitementService.postData(this.traitement).subscribe(
      callback => {
        console.log(callback);
      },
      error => {
        console.log(error);
      }
    );
    this.reload();
  }

  reload() {
    window.location.reload();
  }
}
