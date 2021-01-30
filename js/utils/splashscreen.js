export const splashScreen = () => {

    const $body = $('body');

    console.log($body)

    $(document).ajaxStop(() => {
        $body.removeClass("loading");
        $('.loading-splashscreen').hide();
    });
}