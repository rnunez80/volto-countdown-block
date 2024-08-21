import React, { Suspense } from 'react';
import clockSVG from '@plone/volto/icons/clock.svg';

// Use React.lazy to dynamically import the components
const View = React.lazy(() => import('./View'));
const Edit = React.lazy(() => import('./Edit'));

const applyConfig = (config) => {
  config.blocks.blocksConfig.countdown = {
    id: 'countdown',
    title: 'Countdown',
    icon: clockSVG,
    group: 'common',
    view: (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <View {...props} />
      </Suspense>
    ),
    edit: (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Edit {...props} />
      </Suspense>
    ),
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  return config;
};

export default applyConfig;
