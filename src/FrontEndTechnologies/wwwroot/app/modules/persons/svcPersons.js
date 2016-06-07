export class SvcPersons{
    constructor(){
    }

    getPersonsList(){
       return [
            {id:1, firstName:"Diego", lastName:"Torres", phone:"234-234-234"},
            {id:2, firstName:"Juan", lastName:"Perez", phone:"123-456-789"}
        ];
    }

    getPersonById(id){
        return _.findWhere(this.getPersonsList(),{id:Number(id)});
    }
}