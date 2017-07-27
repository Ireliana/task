$(function () {
    $('#dowebok').fullpage({
        sectionsColor: ['#0da5d6','#2ab561','#de8910','#16ba9d','#0da5d6'],
        afterLoad: function (link,index) {
            $('.section').removeClass('current');
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
            },100)
            
        }
    });
})