import React, {useEffect} from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import {UIRouter, UIView} from "@uirouter/react";

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ router }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
          <UIRouter router={router}  >
              <UIView />
          </UIRouter>
      </StylesProvider>
    </div>
  );
};
