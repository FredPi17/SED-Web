export interface IRespiratoire {
  essouflementEffort?: boolean;
  essouflementRepos?: boolean;
  sensationBlocageDiaphragmatique?: boolean;
  bradyapnee?: boolean;
  tachyapnee?: boolean;
  respirationSifflante?: boolean;
  criseRespiratoireAngoissante?: boolean;
  sensationOppressionThoracique?: boolean;
  encombrementBronchique?: boolean;
  expectorationSanglante?: boolean;
  blocageRespiratoire?: boolean;
  criseAsthme?: boolean;
  touxSeche?: boolean;
  touxGrasse?: boolean;
  dysphonie?: boolean;
  aphonie?: boolean;
  douleurRespiratoire?: boolean;
  infectionVoieAerienneSuperieur?: boolean;
  bronchite?: boolean;
  pneumopathie?: boolean;
  saturationOxygene?: number;
  idUtilisateur?: number;
}

export class Respiratoire implements IRespiratoire {
  constructor(
    public essouflementEffort?: boolean,
    public essouflementRepos?: boolean,
    public sensationBlocageDiaphragmatique?: boolean,
    public bradyapnee?: boolean,
    public tachyapnee?: boolean,
    public respirationSifflante?: boolean,
    public criseRespiratoireAngoissante?: boolean,
    public sensationOppressionThoracique?: boolean,
    public encombrementBronchique?: boolean,
    public expectorationSanglante?: boolean,
    public blocageRespiratoire?: boolean,
    public criseAsthme?: boolean,
    public touxSeche?: boolean,
    public touxGrasse?: boolean,
    public dysphonie?: boolean,
    public aphonie?: boolean,
    public douleurRespiratoire?: boolean,
    public infectionVoieAerienneSuperieur?: boolean,
    public bronchite?: boolean,
    public pneumopathie?: boolean,
    public saturationOxygene?: number,
    public commentaire?: string,
    public idUtilisateur?: number
  ) {}
}
