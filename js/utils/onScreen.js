// doOnEnteringScreen = function(elm) {}
export const onScreen = function(elm, doOnEnteringScreen) {
    const scrollHandler = function() {
        let currentElmHeight,
            bottomOfScreen = $(window).scrollTop() + $(window).height();
            if (typeof elm === 'object') {
                currentElmHeight = $(elm).offset().top;
            } else if (typeof elm === 'number') {
                currentElmHeight = elm;
            } else {
                return; // Skips this iteration
            }
            if (currentElmHeight < bottomOfScreen) {
                removeScrollHandler();
                doOnEnteringScreen(elm);
            }
    }

    const removeScrollHandler = function() {
        $(window).off('scroll', scrollHandler);
    }

    $(window).scroll(scrollHandler);
}