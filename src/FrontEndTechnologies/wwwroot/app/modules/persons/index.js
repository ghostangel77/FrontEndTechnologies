import {inject} from 'aurelia-framework';
import {SvcPersons} from './svcPersons';

@inject(SvcPersons)
export class Index{
    constructor(service){
        this.service = service;
        this.persons = this.service.getPersonsList();
    }
}