import 'slick-carousel/slick/slick.js';

import {onScreen} from './utils/onScreen';

import {setupNavBar} from './components/navbar';
import {setupStackTags} from './components/stack';
import {setupPortfolio} from './components/portfolio';
import {setupContact} from './components/contact';

export { main };

const main = function() {

    setupNavBar();

    setupStackTags();

    setupPortfolio();

    setupContact();

    /** Popups **/

    $('.popup').each((i, elm) => {
        onScreen(elm, (e) => {
            $(e).addClass('bottom-right').fadeIn();
        });
    })

    $('.stack-item').each((index, elm) => {
        let speed = 500 + index * 50;
        onScreen(elm, (e) => {
            $(e)
                .css('visibility', 'visible')
                .hide()
                .fadeIn(speed);
        });
    })

    /** Typing Animations via t.js */

    $(".typed").each((i, elm) => {
        onScreen(elm, (e) => {
            $(e).t({
                blink: 500
            })
        });
    });

    $('#intro').css('visibility', 'visible').t(`Hi, I'm Caleb <br>
                   I Build <span class="contrast"><del>Websites<ins>1</ins></del> <del>Dynamic Websites<ins>1</ins></del> <del>Web Apps<ins>2</ins></del> <del>....<ins>1</ins></del> <del>Techy Magic For Your Business<ins>5</ins></del> </span>`, {
        speed: 65,
        repeat: true,
        blink: 500,
        mistype: 18
    });
}