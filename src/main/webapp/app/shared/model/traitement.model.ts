export interface ITraitement {
  nom?: string;
  posologie?: string;
  dosage?: string;
  dateDebut?: string;
  dateDeFin?: string;
  idUtilisateur?: number;
}

export class TraitementModel implements ITraitement {
  constructor(
    public nom?: string,
    public posologie?: string,
    public dosage?: string,
    public dateDebut?: string,
    public dateDeFin?: string,
    public idUtilisateur?: number
  ) {}
}
