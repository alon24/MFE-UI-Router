import React, {lazy} from 'react';
import {UISref} from "@uirouter/react";

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
// const AuthLazy = lazy(() => import('./components/AuthApp'));
// const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const Test = ()=><h1>Home</h1>
export const createStates = ( isSignedIn, setIsSignedIn)=> {
    return [
        {
            name: "home",
            url: '/',
            component:  ()=> <MarketingLazy onSignIn={() => setIsSignedIn(true)} />
        },
        {
            name: "ilan",
            url: '/ilan',
            component:  ()=> <h1>Ilan</h1>
        },
    ]
}