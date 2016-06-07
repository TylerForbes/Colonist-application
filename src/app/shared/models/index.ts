export interface IAliens {
  type: string,
  submitted_by: string,
  id: number,
  description: string
}

export interface IOccupation {
  name: string,
  id: string,
  description: string
}

export class Encounter{
  constructor(
    public atype: string,
    public date: string,
    public action: string,
    public colonist_id: string
  ){}
}

export class Colonist {
  constructor(
    public name: string,
    public age: number,
    public job_id: string,
    public id?: string
  ){}
}
