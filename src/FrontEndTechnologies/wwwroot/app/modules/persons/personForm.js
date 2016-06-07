import {inject} from 'aurelia-framework';
import {SvcPersons} from './svcPersons';

@inject(SvcPersons)
export class personForm{
    constructor(service){
        this.service = service;
        this.person = {};
        this.isEdit = false;
        this.title = '';
    }

    activate(params){
        this.person  =  this.service.getPersonById(params.id);
        this.isEdit = params.isEdit;
        this.title = this.isEdit ? "Edit Person" : "Add Person";
    }

    save(){
        if(this.isEdit){

        }else {

        }
    }
}