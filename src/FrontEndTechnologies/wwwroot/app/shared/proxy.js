import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Proxy{
    constructor(client){
        this.client = client;
        this.client.configure(config => {
            console.info(arguments)
            config
              .withBaseUrl('/api/')
              .withDefaults({
                  headers: {
                      'Accept': 'application/json'
                  }
              });
        });
    }

    get(url){
        return this.client.fetch(url, {method: "get"})
            .then(response => response.json());
    }

}