import {inject} from 'aurelia-framework';
import {Proxy} from '/app/shared/proxy';

@inject(Proxy)
export class SvcPersons{
    constructor(proxy){
        this.proxy = proxy;
    }

    getPersonsList(){
        return this.proxy.get('persons');
    }

    getPersonById(id){
        return this.proxy.get('persons/'+id);
    }

    save(isEdit, data){
        let url = 'persons/' + (isEdit ? 'Edit' : 'Add');
        return this.proxy.post(url, data);
    }
}