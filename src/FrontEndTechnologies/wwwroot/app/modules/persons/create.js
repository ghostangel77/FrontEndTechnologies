export class Create{
    constructor(){
        this.id = null;
    }

    activate(params){
        this.id = params.id;
    }
}