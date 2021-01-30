export const splashScreen = () => {

    const $body = $('body');

    function onReady(callback) {
        let intervalId = window.setInterval(function() {
            if (document.getElementsByTagName('body')[0] !== undefined) {
                window.clearInterval(intervalId);
                callback();
            }
        }, 500);
    }

    onReady(() => {
        $body.removeClass('loading');
        $('.loading-splashscreen').css('display', 'none');
    });
}