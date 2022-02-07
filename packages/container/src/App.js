import React, { lazy, Suspense, useState, useEffect } from 'react';
import {UIView,  UIRouter} from "@uirouter/react";
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
// import { createBrowserHistory } from 'history';
import {createStates} from './states'

import Progress from './components/Progress';
import Header from './components/Header';
import {RoutingCmp} from "./components/RoutingCmp";

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const registerStates = (router, stateList) => {
  stateList.map(state=> {
    router.stateRegistry.register(state);
  })
}
export default ({router}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(()=>{
    registerStates(router, createStates(isSignedIn, setIsSignedIn));
    router.stateService.go("home")
  },[])

  // useEffect(() => {
  //   if (isSignedIn) {
  //     history.push('/dashboard');
  //   }
  // }, [isSignedIn]);

  return (
      <>
        <UIRouter router={router}>
          <StylesProvider generateClassName={generateClassName}>
            <div>
              <Header
                  onSignOut={() => setIsSignedIn(false)}
                  isSignedIn={isSignedIn}
              />
              <Suspense fallback={<h1>Loading...</h1>}>
                <UIView />
              </Suspense>
            </div>
          </StylesProvider>
        </UIRouter>
      </>
  );
};
