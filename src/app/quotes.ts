export class Quote {
    
    showDescription = false;
    
    constructor(
    public id: number,
    public quote: string,
    public author: string,
    public submitter: string,
    public dateComplete: Date) {

    }
    
}