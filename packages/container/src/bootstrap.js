import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {pushStateLocationPlugin, hashLocationPlugin, servicesPlugin, UIRouterReact, UrlService} from "@uirouter/react";

let router;

const initRouter = () => {
    router = new UIRouterReact();
    router.plugin(servicesPlugin);
    router.plugin(pushStateLocationPlugin);
    return router;
}
initRouter();
ReactDOM.render(<App router={router}/>, document.querySelector('#root'));
