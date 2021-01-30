import { main } from './index';
import {splashScreen} from './utils/splashscreen';

window.$ = $;
window.jQuery = jQuery;

splashScreen();

import '../sass/index.scss';

import { Core, Sticky, SmoothScroll, Triggers, MediaQuery, Tooltip } from 'foundation-sites/js/foundation.js';

SmoothScroll.defaults.animationDuration = 800;
SmoothScroll.defaults.animationEasing = 'swing';

$(function() {
    $(document).foundation();
    main();
});