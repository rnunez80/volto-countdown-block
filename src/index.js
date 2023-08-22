import clockSVG from '@plone/volto/icons/clock.svg';
import View from './View';
import Edit from './Edit';


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
