export interface ICardioVasculaire {
  tachycardie?: boolean;
  tachycardieNb?: number;
  bradycardie?: boolean;
  bradycardieNb?: number;
  hypertension?: boolean;
  hypertensionNb?: number;
  hypotension?: boolean;
  hypotensionNb?: number;
  tachycardiePosturale?: boolean;
  tachycardiePosturaleNb?: number;
  palpitation?: boolean;
  arythmie?: boolean;
  marbrures?: boolean;
  extremiteFroideEtPale?: boolean;
  malaise?: boolean;
  varice?: boolean;
  syncope?: boolean;
  doigtEnfle?: boolean;
  phlebite?: boolean;
  gonflementJambeChevillePieds?: boolean;
  syndromeReynaud?: boolean;
  essouflement?: boolean;
  douleurThoracique?: boolean;
  evanouissement?: boolean;
  systole?: number;
  diastole?: number;
  pouls?: number;
  idUtilisateur?: number;
}

export class CardioVasculaire implements ICardioVasculaire {
  constructor(
    public tachycardie?: boolean,
    public tachycardieNb?: number,
    public bradycardie?: boolean,
    public bradycardieNb?: number,
    public hypertension?: boolean,
    public hypertensionNb?: number,
    public hypotension?: boolean,
    public hypotensionNb?: number,
    public tachycardiePosturale?: boolean,
    public tachycardiePosturaleNb?: number,
    public palpitation?: boolean,
    public arythmie?: boolean,
    public marbrures?: boolean,
    public extremiteFroideEtPale?: boolean,
    public malaise?: boolean,
    public varice?: boolean,
    public syncope?: boolean,
    public doigtEnfle?: boolean,
    public phlebite?: boolean,
    public gonflementJambeChevillePieds?: boolean,
    public syndromeReynaud?: boolean,
    public essouflement?: boolean,
    public douleurThoracique?: boolean,
    public evanouissement?: boolean,
    public systole?: number,
    public diastole?: number,
    public pouls?: number,
    public commentaire?: string,
    public idUtilisateur?: number
  ) {}
}
