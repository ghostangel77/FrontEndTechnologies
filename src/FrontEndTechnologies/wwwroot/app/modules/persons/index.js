import {inject} from 'aurelia-framework';
import {SvcPersons} from './svcPersons';
import {RouterService} from '/app/shared/routerService';

@inject(SvcPersons, RouterService)
export class Index{
    constructor(service, router){
        this.service = service;
        this.router = router;
        this.service.getPersonsList()
            .then(persons => this.persons = persons)
            .catch(error => this.persons = []);
    }

    editPerson(id){
        this.router.navigateToRoute('editPerson', {id: id});
    }
}