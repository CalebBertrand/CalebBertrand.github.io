import { main } from './index';

import '../sass/index.scss';

import { Core, Sticky, SmoothScroll, Triggers, MediaQuery, Tooltip } from 'foundation-sites/js/foundation.js';

SmoothScroll.defaults.animationDuration = 800;
SmoothScroll.defaults.animationEasing = 'swing';

window.$ = $;
window.jQuery = jQuery;

$(function() {
    $(document).foundation();
    main();
});