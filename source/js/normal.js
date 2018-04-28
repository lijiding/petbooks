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