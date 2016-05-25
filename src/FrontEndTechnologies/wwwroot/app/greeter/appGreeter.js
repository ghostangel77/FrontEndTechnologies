export class AppGreeter {
    configureRouter(config, router){
        config.title = 'Aurelia - Hello World!!!';
        config.map([
          { route: ['','greeter'], name: 'greeter',      moduleId: './helloWorld/index',      nav: true, title:'Greeter' }
        ]);

        this.router = router;
    }
}