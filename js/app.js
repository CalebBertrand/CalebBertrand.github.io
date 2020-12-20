import { main } from './index.js';

import '../sass/index.scss';

window.$ = $;
window.jQuery = jQuery;

$(function() {
    main();
});