import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import {useCurrentStateAndParams, useRouter} from "@uirouter/react";
// import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const {state, params} = useCurrentStateAndParams();
  const router = useRouter();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: state.url,
      onNavigate: ({ pathname: nextPathname }) => {
        const pathname = router.urlService.path();

        if (pathname !== nextPathname) {
          router.urlService.url(nextPathname)
          // history.push("ilan");
        }
      },
    });

    router.transitionService.onSuccess({}, (transition)=> {
      console.log(transition)
      onParentNavigate({pathname:transition.to().url})
    });
    // history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
