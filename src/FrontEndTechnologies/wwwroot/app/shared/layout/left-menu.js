﻿import {bindable, inject} from 'aurelia-framework';

//@bindable('proprouter')
@bindable({name:'proprouter', defaultValue:{}})
//@inject(Element)
export class LeftMenu {
    //@bindable proprouter = null;

    constructor(element){
        //element.style.fontSize = '16px';
    }
}