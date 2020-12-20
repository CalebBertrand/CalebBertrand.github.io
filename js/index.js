import {onScreen} from './utils/onScreen';
import {setupStackTags} from './stack';

export { main };

const main = function() {

    setupStackTags();

    /** Popups **/

    $('.popup').each((i, elm) => {
        onScreen(elm, (e) => {
            $(e).addClass('bottom-right').fadeIn();
        });
    })

    $('.stack-item').each((index, elm) => {
        let speed = 500 + index * 50;
        onScreen(elm, (e, i) => {
            $(e)
                .css('visibility', 'visible')
                .hide()
                .fadeIn(speed);
        });
    })

    /** Typing Animations via t.js */

    $(".typed").each((i, elm) => $(elm).t());

    $('#intro').css('visibility', 'visible').t(`Hi, I'm Caleb <br>
                   I Build <span class="contrast"><del>Websites<ins>1</ins></del> <del>Dynamic Websites<ins>1</ins></del> <del>Web Apps<ins>2</ins></del> <del>....<ins>1</ins></del> <del>Techy Magic For Your Business<ins>5</ins></del> </span>`, {
        speed: 65,
        repeat: true,
        blink: false,
        mistype: 18
    });
}