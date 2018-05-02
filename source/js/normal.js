/* 搜索框搜索图标显隐控制 */
$('.serach-input').focusout(function() {
	$(this).val() === ''?
	$(this).next('span').show()
	: $(this).next('span').hide();
});

// 顶部地址选择
$('.place-select').on('click',function (e) {
	var _this = $(this);
	_this.toggleClass('selecting');
	e.stopPropagation()
})
$('.location-all').on('click',function (e) {
	e.stopPropagation()
})
$('.location-all').on('click','span',function () {
	console.log('you are clicked city text!!!')
})
$('.cancle-change-city').on('click',function () {
	$('.place-select').toggleClass('selecting');
})
$('body').on('click',function (argument) {
	$('.place-select').removeClass('selecting');
})

/**
 * [usrLogin 用户登录 注册功能切换]
 * @return {[type]} [null]
 */
function usrLogin() {
    var login = $('.usr-login'),
        tabs = login.find('.tab'),
        panels = login.find('.panel'),
        cn = 'active';
    tabs.each(function(i, el) {
        $(el).bind('click', function() {
            tabs.removeClass(cn)
            $(this).addClass(cn)
            panels.hide()
            panels.eq(i).show()
        })
    })
}
usrLogin()
/**
 * [toggleSigninWay 切换登录类型]
 * @return {[type]} [ null]
 */
function toggleSigninWay() {
    $('.normal,.phone-sigin').on('click',function () {
        $('.change-sigin-way').toggleClass('phone');
        $('.sigin-info').toggleClass('phone');
    })
}
toggleSigninWay()

// login popup
function loginPopup(html) {
    var mask = "<div class='login-popup-mask'></div>",
        content = html,
        popup = "<div class='login-popup-fun'>"+mask+"<div class='login-popup'><div class='login-pannel usr-login'>"+content+"</div></div></div>";
        console.log(popup)
        console.log(html)
    $('body').append(popup);
    $('.login-popup-mask').on('click',function () {
        $('.login-popup-fun').remove()
    })

    // init login
    usrLogin()
    toggleSigninWay()
}



















