	export function configure(aurelia) {
	    aurelia.globalResources([
			'app/shared/layout/top-header',
			'app/shared/layout/left-menu',
			'app/shared/filters/registeredTradeMark',
            'app/shared/filters/spacer',
	    ]);
	}