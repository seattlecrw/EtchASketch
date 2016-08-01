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
});