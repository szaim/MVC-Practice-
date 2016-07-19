
$(document).ready(function() {
	
for (var i = 1; i <= 100; i++) {

	if (i % 3 == 0 & i % 5 != 0 ) {

		$('.div').append("Fizz" + '<br>');

	} else if (i % 5 == 0 & i % 3 != 0 ) {

		$('.div').append("Bizz"+'<br>');

	} else if (i % 3 == 0 & i % 5 == 0 ) {

		$('.div').append("FizzBizz" + '<br>');

	} else ($('.div').append(i + '<br>'));
};

})