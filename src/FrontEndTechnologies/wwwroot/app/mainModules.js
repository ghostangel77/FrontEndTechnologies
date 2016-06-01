export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('app/shared/global');

    aurelia.start().then(a => a.setRoot('app/modules/appModules', document.body));
}