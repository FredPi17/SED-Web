export interface IAntecedents {
  id?: number;
}

export class Antecedents implements IAntecedents {
  constructor(public id?: number) {}
}
