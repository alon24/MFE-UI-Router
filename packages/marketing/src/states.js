import React from 'react';
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const landing = {
    name: 'landing',
    url: '/',
    component: Landing
};

const prices =  {
    name: "pricing",
    url: '/pricing',
    component: Pricing
}

const states = [landing, prices];
export default states;