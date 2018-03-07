// Once document is loaded makeGrid function activates
// and listens for new submits
$(document).ready(function(){
	$('#gridSize').submit(function(evt) {
	newGrid();
	makeGrid();
	evt.preventDefault();
	});
	
});

// Resets grid by removing all rows(tr) and colums(td) from
// pixelCanvas. Children elements removed.
function newGrid(){
	$('pixelCanvas').children().remove();
}

/* Creates new grid from values inputed by adding tr and td
then adding the html into pixelCanvas table */
function makeGrid() {
    var columnsRowsTable = '';
    var numColumns = $('#inputWeight').val();
    var numRows = $('#inputHeight').val();
    for (x = 1; x <= numColumns; x++) {
		columnsRowsTable += '<tr>';
		for (y = 1; y <= numRows; y++) {
			columnsRowsTable += '<td>&nbsp;</td>';
		}
		columnsRowsTable += '</tr>';	
	}
	$('#pixelCanvas').html(columnsRowsTable);
};
