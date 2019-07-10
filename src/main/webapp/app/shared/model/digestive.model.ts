export interface IDigestive {
  dysphagie?: boolean;
  fausseRoute?: boolean;
  rgo?: boolean;
  regurgitation?: boolean;
  sensationBrulureOesophage?: boolean;
  mauvaiseHaleine?: boolean;
  eructation?: boolean;
  nausees?: boolean;
  vomissements?: boolean;
  pesanteurGastrique?: boolean;
  indigestion?: boolean;
  gastroParesie?: boolean;
  brulureEstomac?: boolean;
  ballonements?: boolean;
  aerophagie?: boolean;
  douleurAbdominale?: boolean;
  douleurEpigastrique?: boolean;
  crampeIntestinale?: boolean;
  estomacGonfle?: boolean;
  satietePrecoce?: boolean;
  perteAppetit?: boolean;
  soifPermanente?: boolean;
  impossibiliteAlimenter?: boolean;
  absenceSatiete?: boolean;
  sensationFaimDouloureuse?: boolean;
  hypoglycemieReactionnelle?: boolean;
  gaz?: boolean;
  constipation?: boolean;
  selleLiquide?: boolean;
  spasmeIntestinaux?: boolean;
  douleurVesiculaire?: boolean;
  imperiositeFecale?: boolean;
  amaigrissement?: boolean;
  prisePoids?: boolean;
  saignementDigestifHaut?: boolean;
  saignementDigestifBas?: boolean;
  criseHemorroide?: boolean;
  commentaire?: string;
  idUtilisateur?: number;
}

export class DigestiveModel implements IDigestive {
  constructor(
    public absenceSatiete?: boolean,
    public aerophagie?: boolean,
    public amaigrissement?: boolean,
    public ballonements?: boolean,
    public brulureEstomac?: boolean,
    public commentaire?: string,
    public constipation?: boolean,
    public crampeIntestinale?: boolean,
    public criseHemorroide?: boolean,
    public douleurAbdominale?: boolean,
    public douleurEpigastrique?: boolean,
    public douleurVesiculaire?: boolean,
    public dysphagie?: boolean,
    public eructation?: boolean,
    public estomacGonfle?: boolean,
    public fausseRoute?: boolean,
    public gastroParesie?: boolean,
    public gaz?: boolean,
    public hypoglycemieReactionnelle?: boolean,
    public idUtilisateur?: number,
    public imperiositeFecale?: boolean,
    public impossibiliteAlimenter?: boolean,
    public indigestion?: boolean,
    public mauvaiseHaleine?: boolean,
    public nausees?: boolean,
    public perteAppetit?: boolean,
    public pesanteurGastrique?: boolean,
    public prisePoids?: boolean,
    public regurgitation?: boolean,
    public rgo?: boolean,
    public saignementDigestifBas?: boolean,
    public saignementDigestifHaut?: boolean,
    public satietePrecoce?: boolean,
    public selleLiquide?: boolean,
    public sensationBrulureOesophage?: boolean,
    public sensationFaimDouloureuse?: boolean,
    public soifPermanente?: boolean,
    public spasmeIntestinaux?: boolean,
    public vomissements?: boolean
  ) {}
}
