class Elevator{
  constructor(startingFloor){
    this.floor = startingFloor;
    this.commandsUp = [];
    this.commandsDown = [];
    this.direction;
  }
  callElevator(floor, direction, floorArray){
    if(direction === 'DOWN'){
      this.commandsDown.push({fl: floor, dir: direction});
      this.commandsDown = sortCommands(this.commandsDown, direction);
    } else{
      this.commandsUp.push({fl: floor, dir: direction});
      this.commandsUp = sortCommands(this.commandsUp, direction);
    }
    if(floorArray){
      this.passengersInput(floorArray, direction);
    }
  }
  passengersInput(floorArray, direction){
    floorArray.forEach(floor => this.callElevator(floor, direction));
  }
  handleCommand(){
    if(this.commandsDown.length === 0 && this.commandsUp.length === 0){
      return 'No commands to handle.';
    }
    let result;
    if(!this.direction){
      let downClose = 0;
      let upClose = 0;
      if(this.commandsDown.length > 0){
        downClose = Math.abs(this.commandsDown[0].fl-this.floor);
      }
      if(this.commandsUp.length > 0){
        upClose = Math.abs(this.commandsUp[0].fl-this.floor);
      }
      console.log(downClose, upClose);
      if(downClose >= upClose){
        this.direction = 'UP';
      } 
      else{
        this.direction = 'DOWN';
      }
    } else if(this.direction === 'UP' && this.floor < 4 && this.commandsUp.length !== 0){
      result = handleCommandList(this.commandsUp, this.direction, this.floor);
      this.commandsUp = result.updatedCommands;
    } else {
      this.direction = 'DOWN';
      result = handleCommandList(this.commandsDown, this.direction, this.floor);
      this.commandsDown = result.updatedCommands;
    }
    if(result){
      this.floor = result.newFloor;
    }
  }
}

const handleCommandList = (commands, direction, floor) =>{
  if(direction === 'UP'){
    console.log(`Going up to floor ${commands[0].fl}.`);
    while(floor < commands[0].fl){
      floor++;
    }
  }
  else{
    console.log(`Going down to floor ${commands[0].fl}.`);
    while(floor > commands[0].fl){
      floor--;
    }
  }
  commands.shift();
  return {updatedCommands: commands, newFloor: floor};
}

const sortCommands = (commands, direction) => {
  if(direction === 'UP'){
    commands = commands.sort();
  } else{
    commands = commands.sort().reverse();
  }
  return commands;
}

let ourEle = new Elevator(2);
ourEle.handleCommand();
ourEle.callElevator(1, 'UP', [3,4]);
ourEle.callElevator(3, 'DOWN', [2]);
ourEle.callElevator(2, 'UP', [3]);
ourEle.callElevator(4, 'DOWN', [1]);
ourEle.handleCommand();
while(ourEle.commandsUp.length > 0 || ourEle.commandsDown.length > 0){
  ourEle.handleCommand();
}