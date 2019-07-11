export interface IBuccodentaire {
  douleurDentaire?: boolean;
  douleurGingivale?: boolean;
  saignementgingival?: boolean;
  hypersensibiliteDentaire?: boolean;
  colletDentaireDouleur?: boolean;
  bruxisme?: boolean;
  gingivite?: boolean;
  anesthesiePasEfficace?: boolean;
  alterationGencive?: boolean;
  dechaussementDentaire?: boolean;
  secheresseBuccale?: boolean;
  hypersialorhee?: boolean;
  boutonFievre?: boolean;
  mauvaiseHaleine?: boolean;
  aphte?: boolean;
  abces?: boolean;
  parodontite?: boolean;
  emailErode?: boolean;
  carie?: boolean;
  commentaire?: string;
  idUtilisateur?: number;
}

export class BuccodentaireModel implements IBuccodentaire {
  constructor(
    public douleurDentaire?: boolean,
    public douleurGingivale?: boolean,
    public saignementgingival?: boolean,
    public hypersensibiliteDentaire?: boolean,
    public colletDentaireDouleur?: boolean,
    public bruxisme?: boolean,
    public gingivite?: boolean,
    public anesthesiePasEfficace?: boolean,
    public alterationGencive?: boolean,
    public dechaussementDentaire?: boolean,
    public secheresseBuccale?: boolean,
    public hypersialorhee?: boolean,
    public boutonFievre?: boolean,
    public mauvaiseHaleine?: boolean,
    public aphte?: boolean,
    public abces?: boolean,
    public parodontite?: boolean,
    public emailErode?: boolean,
    public carie?: boolean,
    public commentaire?: string,
    public idUtilisateur?: number
  ) {}
}
