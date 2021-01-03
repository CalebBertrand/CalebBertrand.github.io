export const setupNavBar = function() {

    let menuItems = $('.menu').children(),
        currentIndexSelected = 0,
        menuTargetOffsets = [];

    menuItems.each((i, e) => {
        menuTargetOffsets.push($(`#${$(e).attr('id').split('-')[0]}`).offset().top);
    })

    console.log(menuItems, menuTargetOffsets)

    $(window).scroll(function() {
        let windowScroll = $(window).scrollTop();

        menuItems.each((i, e) => {
            if (windowScroll >= menuTargetOffsets[i] && i !== currentIndexSelected) {
                $(e).addClass('active');
                $('.menu').children(`:not(#${$(e).attr('id')})`).removeClass('active');
                currentIndexSelected = i;
            }
        })
    })
}