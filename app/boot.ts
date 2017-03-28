/* Import the Bootstrap Dependency from Angular Core [for browser device app] */
import {bootstrap}  from 'angular2/platform/browser'

/* Import the created RootComponent [actual application] Dependency from App.component file */
import {AppComponent } from './app.component';

import {bind} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router';
/* Bootstrap the root component without any module dependencies */
bootstrap(AppComponent, [ROUTER_BINDINGS, bind(APP_BASE_HREF).toValue(location.pathname)]);// setting MainComponent as start component


