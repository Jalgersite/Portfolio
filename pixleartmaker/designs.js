// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    $("#pixelCanvas").empty();
    // Your code goes here!
    console.log("Grid made"); 
    var height = $("#inputHeight").val();
    var width = $("#inputWeight").val();

    for (var i = 0; i < height; i++){
        var tr = document.createElement("tr");
        for (var c = 0; c < width; c++){
            var td =document.createElement("td");
            tr.append(td);

            td.addEventListener("click", function(){
                this.style.backgroundColor = $("#colorPicker").val();
            });
        }
        $("#pixelCanvas").append(tr);
    }
}
