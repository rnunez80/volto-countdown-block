import loadable from '@loadable/component';
import clockSVG from '@plone/volto/icons/clock.svg';

// Use loadable to dynamically import the components
const View = loadable(() => import('./View'), {
  fallback: <div style={{ minHeight: '150px' }}>Loading...</div>,
});
const Edit = loadable(() => import('./Edit'), {
  fallback: <div style={{ minHeight: '150px' }}>Loading...</div>,
});

const applyConfig = (config) => {
  config.blocks.blocksConfig.countdown = {
    id: 'countdown',
    title: 'Countdown',
    icon: clockSVG,
    group: 'common',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };

  return config;
};

export default applyConfig;
