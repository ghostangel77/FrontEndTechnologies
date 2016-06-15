import {inject} from 'aurelia-framework';
import {SvcPersons} from './svcPersons';
import {RouterService} from '/app/shared/routerService';

@inject(SvcPersons, RouterService)
export class personForm{
    constructor(service, router){
        this.service = service;
        this.router = router;
        this.person = {};
        this.isEdit = false;
        this.title = '';
    }

    activate(params){
        this.service.getPersonById(params.id)
            .then(person => {
                this.person = person;
            })
            .catch(error => console.error('Error:', error));
        this.isEdit = params.isEdit;
        this.title = this.isEdit ? "Edit Person" : "Add Person";
    }

    save(){
        this.service.save(this.isEdit, this.person)
        .then(() => {
            console.info('The Person was saved successfully');
            this.router.navigateToRoute('persons');
        })
        .catch(error => console.error('Error:', error));
    }
}