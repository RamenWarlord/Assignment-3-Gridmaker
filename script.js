let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
  numRows++; //increment row count var
  let grid = document.getElementById("grid"); //get grid
  let prevRow = grid.lastElementChild; //get the last row of the grid
  let row = document.createElement("tr"); //create a row
  let col = document.createElement("td"); //create a col
  if (prevRow == null) {
    row.appendChild(col); //if there is no existing row, append one with one col
    grid.appendChild(row);
  } else {
    for (let i = 0; i < prevRow.cells.length; i++) {
      //otherwise append a row after appending the same # col as prev row
      row.appendChild(col);
    }
    grid.appendChild(row);
  }
}
//Add a column
function addC() {
  alert("Clicked Add Col");
}

//Remove a row
function removeR() {
  alert("Clicked Remove Row");
}
//Remove a column
function removeC() {
  alert("Clicked Remove Col");
}
//sets global var for selected color
function selected() {
  colorSelected = document.getElementById("selectedID").value;
  console.log(colorSelected);
}

function fill() {
  alert("Clicked Fill All");
}

function clearAll() {
  alert("Clicked Clear All");
}

function fillU() {
  alert("Clicked Fill All Uncolored");
}
