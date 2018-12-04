class Grid{
  constructor(cols, rows, coordinates){
    this.cols = cols;
    this.rows = rows;
    this.coordinates = coordinates;
    this.grid = [];

  
    for(let i = 0; i < this.rows; i++){
      let newRow = [];
      for(let j = 0; j < this.cols; j++){
        let found = this.coordinates.find(coordinate =>{
          return coordinate.y === i && coordinate.x === j;
        });
        if (found){
          newRow.push(1);
        }
        else{
          newRow.push(0);
        }
      }
      this.grid.push(newRow);
    }
  }
  showGrid(){
    console.log(this.grid);
  }
  findLargest(){
    let largest = 0;
    let checked = [];
    this.grid.forEach((row, i) =>{
      let index = row.lastIndexOf(1);
      checked.push({ x: index , y: i });
    });
    let trackerV = [];
    let trackerH = [];
    checked.forEach((coordinate, i) =>{
      let newLargestV = checked.filter(coor => coordinate.x <= coor.x);
      let verticalLength = newLargestV.length;
      trackerV.push(newLargestV);
      if(trackerV[i-1]){
        if(trackerV[i-1].length >= trackerV[i].length){
          verticalLength = verticalLength * 2;
        } else if(trackerV[i-1].length <= trackerV[i].length){
          verticalLength = trackerV[i-1].length * 2;
        }
      }
      let newLargestH = coordinate.x + 1;
      let horizontalLength = newLargestH;
      trackerH.push(newLargestH);
      if(trackerH[i-1]){
        if(trackerH[i-1] >= trackerH[i]){
          horizontalLength = horizontalLength * 2;
        } else if(trackerH[i-1] <= trackerH[i] && trackerH[i-1] * 2 > horizontalLength){
          horizontalLength = trackerH[i-1] * 2;
        }
      }
      if(verticalLength > largest){
        largest = verticalLength;
      }
      if(newLargestH.length > largest){
        largest = newLargestH.length;
      }
    });
    return largest;
  }
}



let grid = new Grid(5, 6, 
  [{x: 0, y: 0},
    {x: 0, y: 1},
    {x: 0, y: 2},
    {x: 1, y: 1},
    {x: 0, y: 3},
    {x: 0, y: 4},
    {x: 1, y: 3},
    {x: 2, y: 3},
    {x: 3, y: 3},
    {x: 2, y: 4},
    {x: 1, y: 4},
    {x: 0, y: 5},
  ]
);

grid.showGrid();

grid.findLargest();