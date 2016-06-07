export class AppModules {
    configureRouter(config, router){
        config.title = 'Aurelia - My SPA';
        config.map([
            { route: '', name: 'home', moduleId: './index', nav: true, title:'Modules', icon: "fa fa-home" },
            { route: 'persons', name: 'persons', moduleId: './persons/index', nav: true, title:'Persons', icon: "fa fa-table", topNav: 1 },
            { route: 'addPerson', name: 'addPerson', moduleId: './persons/create', nav: true, title:'Add Person', icon: "fa fa-plus",subNav: 1  },
            { route: 'editPerson/:id', name: 'editPerson', moduleId: './persons/edit', nav: false }
        ]);

        this.router = router;
    }
}