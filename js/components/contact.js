import {onScreen} from '../utils/onScreen';

export const setupContact = function() {
    let contact = $('#contact');
    let width = contact.width();

    contact.mousemove(function(event) {
        contact.css('background-image', `linear-gradient(${event.pageX / width * 180}deg, #9328c1, #fd4d4f)`);
    })
}