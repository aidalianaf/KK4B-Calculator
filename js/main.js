function insert(num) {
	$('.calculator-display').val($('.calculator-display').val() + num);
}
function eql() {
	$('.calculator-display').val(eval($('.calculator-display').val()));
}
function c() {
	$('.calculator-display').val('');
}
function del() {
	value = $('.calculator-display').val();
	$('.calculator-display').val(value.substring(0, value.length -1));
}