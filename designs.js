// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function newGrid(){
	$('pixelCanvas')
}
function makeGrid(numColumns, numRows) {
    const columnsRowsTable = '';
    const numColumns = $('#inputWeight').val();
    const numRows = $('#inputHeight').val();
    for (x = 1; x <= numColumns; x++) {
		columnsRowsTable += '<tr>';
		for (y = 1; y <= numRows; y++) {
			columnsRowsTable += '<td>&nbsp;</td>';
		}
		columnsRowsTable += '</tr>';	
	}
    //$('columnsRowsTable').appendTo('#pixelCanvas');
console.log(columnsRowsTable);
};