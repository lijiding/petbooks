/* 搜索框搜索图标显隐控制 */
$('.serach-input').focusout(function() {
	$(this).val() === ''?
	$(this).next('span').show()
	: $(this).next('span').hide();
});