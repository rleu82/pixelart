// Once document is loaded
$(document).ready(function(){
	makeGrid();
	let mouseDown = false;
	$('#gridSize').submit(function(event) {
	let mouseDown = false;
	newGrid();
	makeGrid();
	event.preventDefault();
	});

});


// Resets grid by removing all rows(tr) and colums(td) from
// pixelCanvas. Children elements removed.
function newGrid(){
	$('pixelCanvas').children().remove();
}


/* Creates new grid from values inputed by adding tr and td,
then adding the html into pixelCanvas table */
function makeGrid() {
    const numColumns = $('#inputWeight').val();
	const numRows = $('#inputHeight').val();
	let columnsRowsTable = '';
	
	for (x = 1; x <= numColumns; x++) {
		columnsRowsTable += '<tr>';

		for (y = 1; y <= numRows; y++) {
			columnsRowsTable += '<td>&nbsp;</td>';
		}
		columnsRowsTable += '</tr>';	
	}

	$('#pixelCanvas').html(columnsRowsTable);
};

// Confirm mouseDown = true
$('#pixelCanvas').delegate('td', 'mousedown', function() {
	mouseDown = true;
});

// Confirm mouseDown = false
$('#pixelCanvas').delegate('td', 'mouseup', function() {
	mouseDown = false;
});

// Click to paint / Shift click to erase
$('#pixelCanvas').delegate('td', 'click', function(e) {
	if (e.shiftKey) {
		$(this).css('background', 'none'); // current td 
	} else {
	const colorSelected = $('#colorPicker').val(); // chosen color
	$(this).css('background-color', colorSelected); // current td
	};
});

// If mouseDown = true, paint td cells by moving mouse / hold shift to erase
$('#pixelCanvas').delegate('td', 'mouseenter', function(e) {
	if (mouseDown) { // if mouseDown = true
		if (e.shiftKey) {
			$(this).css('background', 'none'); // current td 
		} else {
		const colorSelected = $('#colorPicker').val(); // chosen color
		$(this).css('background-color', colorSelected); // current td
		};
	};
});
/*
$('#pixelHtml').val('<table style="border-collapse: collapse; margin: 0 auto;' + $(pixelCanvas).html() + '</table>'
); */