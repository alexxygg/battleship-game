var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
}
};


var ship1 =  { locations: ["06", "16", "26"], hits:["", "", ""]};
var ship2 =  { locations: ["24", "34", "44"], hits:["", "", ""]};
var ship3 =  { locations: ["10", "11", "12"], hits:["", "", ""] };

var ships = [
 { locations: ["06", "16", "26"], hits:["", "", ""]},
 { locations: ["24", "34", "44"], hits:["", "", ""]},
 { locations: ["10", "11", "12"], hits:["", "", ""] }];

 var model = {
    boardSize: 7,
    numShips : 3,
    shipsSunk: 0,
    shipLenght: 3,
ships:  [{ locations: ["06", "16", "26"], hits:["", "", ""]},   
         { locations: ["24", "34", "44"], hits:["", "", ""]},
         { locations: ["10", "11", "12"], hits:["", "", ""] }],
 
fire: function(guess){

    for (var i = 0; i < this.numShips; i++){
        var ship = this.ships[i];
        var locations = ship.locations;
        var index = locations.indexOf(guess);
        if (index >= 0) {
            ships.hits[index] = "hit";
            view.displayHit(guess);
            view.displayMessage("HIT");
            if (this.isSunk(ship)) {
                view.displayMessage("You sank my battleship!");
                this.shipsSunk++;
            }
            return true;
        }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed.");
    return false;
},
isSunk: function(ship){
    for(var i = 0; i < this.shipLenght; i++){
        if(ship.hits[i] !== "hit"){
            return false;
        }
    }
    return true;
}
};

isSunk: function


 

view.displayMessage("haHaa");