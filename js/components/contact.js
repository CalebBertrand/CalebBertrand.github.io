import {onScreen} from '../utils/onScreen';

export const setupContact = function() {
    let contact = $('#contact'), width = contact.width(), windowWidth = $(window).width();
    contact.mousemove(function(event) {
        if (windowWidth > 640) {
            contact.css('background-image', `linear-gradient(${event.pageX / width * 180}deg, #9328c1, #fd4d4f)`);
        }
    })
}