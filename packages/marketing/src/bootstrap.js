import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouterReact, UrlService, memoryLocationPlugin, pushStateLocationPlugin, servicesPlugin} from "@uirouter/react";

import states from './states';
import App from './App';

export let router;
export let locationService;

const initRouter = () => {
  router = new UIRouterReact();
  router.plugin(servicesPlugin);
  locationService = new UrlService(router);
  return router;
}

const registerStates = (router, stateList) => {
  stateList.map(state=> {
    router.stateRegistry.register(state);
  })
}

// Mount function to start up the app
const mount = (el, { onNavigate, useBrowserHistory, initialPath }) => {
  initRouter();
  registerStates(router, states);
  //when used with container useMemory, else use browserHistory
  if (useBrowserHistory) {
    router.plugin(pushStateLocationPlugin);
  } else {
    router.plugin(memoryLocationPlugin);
    locationService.url(initialPath)
  }

  if (onNavigate) {
    router.transitionService.onFinish({}, (transition)=> {
      onNavigate({pathname:transition.to().url})
    });
    // history.listen(onNavigate);
  }

  ReactDOM.render(<App router={router}/>, el);

  return {
    onParentNavigate(props) {
      console.log("marketing parent called", props)
      const {pathname: nextPathname} = props;
      const pathname = router.urlService.path();
      if (pathname !== nextPathname) {
        locationService.url(nextPathname);
        //state sync
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, { useBrowserHistory: true });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
