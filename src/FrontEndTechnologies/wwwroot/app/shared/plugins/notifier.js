this.Notifier = (function () {
    'use strict';

    return {
        info: info,
        success: success,
        error: error,
        log: log
    };

    function info(msg) {
        console.info(msg);
    }

    function success(msg) {
        console.info(msg);
    }

    function error(msg) {
        console.error(msg);
    }

    function log(msg) {
        console.log(msg);
    }

})();