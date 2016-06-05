﻿export class SpacerValueConverter {
    toView(value, spaces, character){
        character = character || ' ';
        let cad = '';
        for (var i = 0; i < spaces; i++) {
            cad+=character;
        }

        return value.split('').join(cad);
    }
}