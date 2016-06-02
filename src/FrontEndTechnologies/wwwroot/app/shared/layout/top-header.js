﻿import {bindable, inject} from 'aurelia-framework';

//@bindable('proprouter')
@bindable({name:'company', defaultValue:''})
export class TopHeader {
    constructor(){
        //this.company2 = 'My Company';
        console.info('constructor', arguments);
    }


    companyChanged(){
        console.info('changed', arguments);
    }



    //*** At this point in time, the view has also been created and both the view-model and the view are 
    //*** connected to their controller. The created callback will recieve the instance of the "owningView". 
    //*** This is the view that the component is declared inside of. If the component itself has a view, 
    //*** this will be passed second.
    created(/*owningView: View, myView: View*/){
        console.info('created', arguments);
    }

    //*** Databinding is then activated on the view and view-model. If the view-model has a bind callback, it will be 
    //*** invoked at this time. 
    //*** The "binding context" to which the component is being bound will be passed first. 
    //*** An "override context" will be passed second. The override context contains information used to traverse the 
    //*** parent hierarchy and can also be used to add any contextual properties that the component wants to add.
    bind(/*bindingContext: Object, overrideContext: Object*/){
        console.info('bind', arguments);
    }


    //*** The component is attached to the DOM (in document).
    attached(){
        console.info('attached', arguments);
    }


    //*** At some point in the future, the component may be removed from the DOM. If/When this happens, 
    //*** and if the view-model has a detached callback, this is when it will be invoked.
    detached(){
        console.info('detached', arguments);
    }


    //*** After a component is detached, it's usually unbound. 
    unbind(){
        console.info('unbind', arguments);
    }
}