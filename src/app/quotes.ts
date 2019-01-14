export class Quote {
  splice(index: any, arg1: number): any {
    throw new Error("Method not implemented.");
  }
    
    showDescription = false;
    
    constructor(
    public id: number,
    public quote: string,
    public author: string,
    public submitter: string,
    public dateComplete: Date) {

    }
    
}