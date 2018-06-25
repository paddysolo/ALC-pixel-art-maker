// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    
            var height,width,maketheGrid,table; //variable declaration
            height = $('#inputHeight').val(); //variable assignment
            width = $('#inputWeight').val();
            var tableRow = ""; //table row variable...this holds the row element of the table
    
            for(var row = 1 ; row <= height ; row++){
                
                    var tableColumn = "";  //table column variable...this holds the table data element of the table
                            for(var column = 1 ; column <= width ; column++){
                                
                                tableColumn += "<td></td>"; 
                            }
                                
                    tableRow = "<tr>"+ tableColumn +"</tr>"; //this build the row of the table
                    $('#pixelCanvas').append(tableRow); //this add the table row element to the table element,hence creating a table with tr element
            }
}


$(function(){

        $('[type=submit]').on('click',function(evt){
            evt.preventDefault();//prevent the default behaviour of the submit button

            if('#pixelCanvas'){
                $('#pixelCanvas').empty();// clears the table on every click of the submit button
            }
        
        makeGrid();/*calls the makeGrid function on each click of the button and builds the grid*/});

        $('table').on('click','td',function(){
            var selectedColor;
            selectedColor = $('#colorPicker').val();
            $(this).css('backgroundColor',selectedColor);});
});

