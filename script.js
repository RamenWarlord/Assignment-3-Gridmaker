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
  col.onclick = function () {
    this.style.backgroundColor = colorSelected;
  };
  console.log(col);
  if (prevRow == null) {
    numCols++;
    row.appendChild(col); //if there is no existing row, append one with one col
    grid.appendChild(row);
  } else {
    var documentFragment = document.createDocumentFragment();
    documentFragment.appendChild(row);
    for (let i = 0; i < prevRow.cells.length; i++) {
      //otherwise append a row after appending the same # col as prev row
      row.appendChild(col);
      col = document.createElement("td"); //create new node after appending prev
      col.onclick = function () {
        this.style.backgroundColor = colorSelected;
      };
    }
    grid.appendChild(documentFragment);
  }
}
//Add a column
function addC() {
  numCols++;
  const rowList = document.querySelectorAll("tr");
  let col = document.createElement("td"); //create a col
  col.onclick = function () {
    this.style.backgroundColor = colorSelected;
  };
  if (rowList.length === 0) {
    numRows++;
    let row = document.createElement("tr"); //create a row
    row.appendChild(col); //if there is no existing row, append one with one col
    grid.appendChild(row);
  } else {
    rowList.forEach(function (row) {
      row.appendChild(col);
      col = document.createElement("td");
      col.onclick = function () {
        this.style.backgroundColor = colorSelected;
      };
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
  if (numCols > 0) {
    numCols--;
    const rowList = document.querySelectorAll("tr");
    for (let i = 0; i < rowList.length; i++) {
      let row = rowList[i];
      let col = row.lastElementChild;
      col.remove();
      if (row.cells.length === 0) row.remove();
    }
  }
}
//sets global var for selected color
function selected() {
  colorSelected = document.getElementById("selectedID").value;
  console.log(colorSelected);
}

function fill() {
  const boxes = document.querySelectorAll("td");
  boxes.forEach(function (box) {
    box.style.backgroundColor = colorSelected;
  });
}

function clearAll() {
  const boxes = document.querySelectorAll("td");
  boxes.forEach(function (box) {
    box.style.backgroundColor = "white";
  });
}

function fillU() {
  const boxes = document.querySelectorAll("td");
  boxes.forEach(function (box) {
    if (box.style.backgroundColor == "white" || box.style.backgroundColor == "")
      box.style.backgroundColor = colorSelected;
  });
}
