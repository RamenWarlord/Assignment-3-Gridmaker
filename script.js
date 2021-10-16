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
    numCols++;
    row.appendChild(col); //if there is no existing row, append one with one col
    grid.appendChild(row);
  } else {
    console.log(prevRow.cells.length);
    for (let i = 0; i < prevRow.cells.length; i++) {
      //otherwise append a row after appending the same # col as prev row
      row.appendChild(col);
      col = document.createElement("td"); //create new node after appending prev
    }
    grid.appendChild(row);
  }
}
//Add a column
function addC() {
  numCols++;
  const rowList = document.querySelectorAll("tr");
  console.log(rowList);
  let col = document.createElement("td"); //create a col
  if (rowList.length === 0) {
    numRows++;
    let row = document.createElement("tr"); //create a row
    row.appendChild(col); //if there is no existing row, append one with one col
    grid.appendChild(row);
  } else {
    rowList.forEach(function (row) {
      row.appendChild(col);
      col = document.createElement("td");
    });
  }
}

//Remove a row
function removeR() {
  if (numRows > 0) {
    numRows--;
    let lastRow = document.getElementById("grid").lastElementChild;
    lastRow.remove();
  }
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
