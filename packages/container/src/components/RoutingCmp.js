import React from 'react';
import { UIRouter} from "@uirouter/react";

export const RoutingCmp = ({router, children}) =>{

    return (
        <UIRouter router={router}  >
            {children}
        </UIRouter>
    )
}