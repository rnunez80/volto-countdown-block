import {CountdownView, CountdownEdit} from './';
import clockSVG from '@plone/volto/icons/clock.svg';
import './theme/main.less';

const applyConfig = (config) => {
  config.blocks.blocksConfig.countdown = {
    id: 'countdown',
    title: 'Countdown',
    icon: clockSVG,
    group: 'common',
    view: CountdownView,
    edit: CountdownEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  return config;
};

export default applyConfig;

