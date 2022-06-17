export class Account {

    public id: number;
    public name: string; 
    public status: string;


    constructor(name: string, status: string, id?: number){
        this.id = id ?? 0;
        this.name = name;
        this.status = status;
    }

    
}