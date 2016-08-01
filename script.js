$(document).ready(function() {
	// declare initial number of squares per side
	var num_squares = 16;

	// add squares to board
	var render = function(num_squares) {
		// square the number of squares for total number
		var tot_squares = num_squares * num_squares;
		for (var i = 0; i < tot_squares; i++) {
			$('#board').append('<div class="box"></div>');
		}
		$('.box').width((550 / num_squares) - 2);
		$('.box').height((550 / num_squares) - 2);
	}
	render(num_squares);

	// Create random color generator
	var random_color_generate = function() {
		var max_hex = parseInt('FFFFFF', 16);
		var random_choice = Math.floor(Math.random() * max_hex);
		var hexString = random_choice.toString(16);
		return '#' + hexString;
	};

	// Create hover effect to change box colors
	$('.box').hover(function() {
		var new_color = random_color_generate();
		$(this).css('background-color', new_color);
		$(this).css('border', '1px solid #FFFFFF')
    }, function() {
    	$(this).css('border', '1px solid #000000')
    });
});