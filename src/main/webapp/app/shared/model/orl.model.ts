export interface IOrl {
  //nez
  nezBouche?: boolean;
  ecoulementNasalTranslucide?: boolean;
  ecoulementNasalePurulent?: boolean;
  saignementNez?: boolean;
  secheresseNasale?: boolean;
  troubleOdorat?: boolean;
  plaieNasale?: boolean;
  rhyniteAllergique?: boolean;
  rhyniteNonAllergique?: boolean;
  pesanteurFaciale?: boolean;
  douleurOsFace?: boolean;
  sinusiteChronique?: boolean;

  //oreille
  hyperacousie?: boolean;
  hypoacousie?: boolean;
  acouphene?: boolean;
  bourdonnement?: boolean;
  saignementOreille?: boolean;
  ecoulementOreille?: boolean;
  otite?: boolean;
  vertigeVrai?: boolean;
  sensationVertige?: boolean;

  //gorge
  mauxGorge?: boolean;
  gorgeQuiGratte?: boolean;
  gorgeIrritee?: boolean;
  douleurAigueGorge?: boolean;
  deglutitionDouloureuse?: boolean;
  troubleGout?: boolean;
  raclementGorge?: boolean;
  ecoulementArriereGorge?: boolean;
  dysphonie?: boolean;
  aphonie?: boolean;
  enrouement?: boolean;
  angine?: boolean;
  pharyngite?: boolean;
  laryngite?: boolean;
  tracheite?: boolean;
  adenopathie?: boolean;

  idUtilisateur?: number;
}

export class Orl implements IOrl {
  constructor(
    public nezBouche?: boolean,
    public ecoulementNasalTranslucide?: boolean,
    public ecoulementNasalePurulent?: boolean,
    public saignementNez?: boolean,
    public secheresseNasale?: boolean,
    public troubleOdorat?: boolean,
    public plaieNasale?: boolean,
    public rhyniteAllergique?: boolean,
    public rhyniteNonAllergique?: boolean,
    public pesanteurFaciale?: boolean,
    public douleurOsFace?: boolean,
    public sinusiteChronique?: boolean,
    public hyperacousie?: boolean,
    public hypoacousie?: boolean,
    public acouphene?: boolean,
    public bourdonnement?: boolean,
    public saignementOreille?: boolean,
    public ecoulementOreille?: boolean,
    public otite?: boolean,
    public vertigeVrai?: boolean,
    public sensationVertige?: boolean,
    public mauxGorge?: boolean,
    public gorgeQuiGratte?: boolean,
    public gorgeIrritee?: boolean,
    public douleurAigueGorge?: boolean,
    public deglutitionDouloureuse?: boolean,
    public troubleGout?: boolean,
    public raclementGorge?: boolean,
    public ecoulementArriereGorge?: boolean,
    public dysphonie?: boolean,
    public aphonie?: boolean,
    public enrouement?: boolean,
    public angine?: boolean,
    public pharyngite?: boolean,
    public laryngite?: boolean,
    public tracheite?: boolean,
    public adenopathie?: boolean,
    public commentaire?: string,
    public idUtilisateur?: number
  ) {}
}
