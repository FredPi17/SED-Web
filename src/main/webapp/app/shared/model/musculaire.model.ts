export interface IMusculaire {
  myalgieDiffuse?: boolean;
  fatigueMusculaire?: boolean;
  crampe?: boolean;
  faiblesseMusculaire?: boolean;
  spasmeMusculaire?: boolean;
  contracture?: boolean;
  courbature?: boolean;
  dystonie?: boolean;
  hypertonie?: boolean;
  hypotonie?: boolean;
  fasciculation?: boolean;
  commentaire?: string;
  idUtilisateur?: number;
}

export class MusculaireModel implements IMusculaire {
  constructor(
    public myalgieDiffuse?: boolean,
    public fatigueMusculaire?: boolean,
    public crampe?: boolean,
    public faiblesseMusculaire?: boolean,
    public spasmeMusculaire?: boolean,
    public contracture?: boolean,
    public courbature?: boolean,
    public dystonie?: boolean,
    public hypertonie?: boolean,
    public hypotonie?: boolean,
    public fasciculation?: boolean,
    public commentaire?: string,
    public idUtilisateur?: number
  ) {}
}
