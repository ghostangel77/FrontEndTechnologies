export class Greeter{
    greet(id, msg){
        let element = document.getElementById(id);
        element.innerText = msg;
    }

    static greetStatic(id, msg="Default Message"){
        let element = document.getElementById(id);
        element.innerText = msg;
    }
}