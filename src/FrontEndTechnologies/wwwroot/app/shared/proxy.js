﻿import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Proxy{
    constructor(client){
        this.client = client;
        this.client.configure(config => {
            config
              .withBaseUrl('/api/')
              .withDefaults({
                  headers: {
                      'Accept': 'application/json'
                  }
              })
            .withInterceptor({
                request(request) {
                    console.info(`Requesting ${request.method} ${request.url}`);
                    return request;
                },
                response(response) {
                    console.info(`Received ${response.status} ${response.url}`, response);
                    if(!response.ok)
                        console.error('Response Error: ', response);
                    return response;
                }
            });
        });
    }

    get(url){
        return this.client.fetch(url, {method: "get"})
             .then(response => {
                 if(!response.ok) 
                     throw response.statusText;
                 return response.json();
             });
    }

    post(url, data){
        let options = {method: "post"};
        if(data)
            options.body = json(data);
        return this.client.fetch(url, options)
            .then(response => {
                if(!response.ok) 
                    throw response.statusText;
                return response.bodyUsed ? response.json() : response;
            });
    }
}