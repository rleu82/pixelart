// Once document is loaded
$(document).ready(function(){
	newGrid();
	makeGrid();
	let mouseDown = false;
	event.preventDefault();
});


$('#gridSize').submit(function(event) {
	var yourChoice;
	var resetOrNot = confirm("Creating grid will delete your work. Continue?");
	if (resetOrNot == true) {
		let mouseDown = false;
		newGrid();
		makeGrid();
		event.preventDefault();
	} else {
		yourChoice = "You pressed Cancel!";
		event.preventDefault();
	}
});

$("#clearArt").click(function() {
	var yourChoice;
	var resetOrNot = confirm("Are you sure you want to clear the Canvas?");
	if (resetOrNot == true) {
    	$('td').css('background-color', '#b0c3d2');
	} else {
		yourChoice = "You pressed Cancel!";
	}
});

// Resets grid by removing all rows(tr) and colums(td) from
// pixelCanvas. Children elements removed.
function newGrid(){
	$('#pixelCanvas').children().remove();
}

/* Creates new grid from values inputed by adding tr and td,
then adding the html into pixelCanvas table */
function makeGrid() {
    let numColumns = $('#inputHeight').val();
	let numRows = $('#inputWidth').val();
	let columnsRowsTable = '<tbody>';
	
	for (x = 1; x <= numColumns; x++) {
		columnsRowsTable += '<tr>';

		for (y = 1; y <= numRows; y++) {
			columnsRowsTable += '<td>&nbsp;</td>';
		}
		columnsRowsTable += '</tr></tbody>';	
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
	let colorSelected = $('#colorPicker').val(); // chosen color
	if (e.shiftKey) {
		$(this).css('background', 'none'); // current td 
	} else { // chosen color
		$(this).css('background-color', colorSelected); // current td
	};
});

// If mouseDown = true, paint td cells by moving mouse / hold shift to erase
$('#pixelCanvas').delegate('td', 'mouseenter', function(e) {
	let colorSelected = $('#colorPicker').val(); // chosen color
	if (mouseDown) { // if mouseDown = true
		if (e.shiftKey) {
			$(this).css('background', 'none'); // current td 
		} else {
			$(this).css('background-color', colorSelected); // current td
		};
	};
});


// initialize Huebee
$('.color-input').each( function( i, elem ) {
	var hueb = new Huebee( elem, {
	  // options
	});
  });


  