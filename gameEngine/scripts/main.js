//init game.


/* --------------------------------------------------------------------------------------
 * This section handles the movement of the player.
 * atm its bound to WASD and arrow keys.
 * will also be able to handle mouse dragging in the future.
 * --------------------------------------------------------------------------------------
 * */
function myKeyPress(e) {
    var keynum;

    if (window.event) { // IE
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera
        keynum = e.which;
    }
    switch (keynum) {
        case 37:
            console.log("left!");
            break;
        case 38:
            console.log("up!");
            break;
        case 39:
            console.log("right!");
            break;
        case 40:
            console.log("down!");
            break;

        case 119:
            console.log('W');
            break;
        case 100:
            console.log('D');
            break;
        case 97:
            console.log('A');
            break;
        case 115:
            console.log('S');
            break;
        default:
            //do nothing
            console.log(keynum);
            break;

    }


}

/* --------------------------------------------------------------------------------------
 * This Section handles the Game Object, a constructor for constructing game objects such as a players and enemies
 * not only limited to NPCs and players, can also be
 * --------------------------------------------------------------------------------------
 * */
function gameObject(name) {
    //Name of the Object, must be Unique!
    this.name = name;
    //the type of the GameObject. gameObjects can be everything from player to
    this.type = "player";

    this.skin = {
        model: 'modelurl',
        texture: 'url',
        offset: [5, 5, 5] //[x,y,z]
    }

    this.renderSkin = function () {
        var target = document.createElement('DIV');
        var skin = document.createElement('IMG');
        target.setAttribute('id', this.name);
        target.style.position = 'absolute';
        target.appendChild(skin);
        skin.setAttribute('src', this.skin.texture);
        console.log("test");
        eval(hasProperty("isGameEngine")).playField.appendChild(target);
    }
    this.position = {
        x: 50,
        y: 40,
        z: 0
    }
}

/* --------------------------------------------------------------------------------------
 * This Section handles the GameEngine
 * --------------------------------------------------------------------------------------
 * */
function Game(idName) {
    document.body.style.overflow = 'hidden';
    this.isGameEngine = true;
    this.playField = document.getElementById(idName);
    this.gameName = "gameName";
    //player is a part of the Game object.


    this.custom = function (arguments) {
        console.log("this.prototype." + arguments);
        //this object function adds new objects to Game, for instance Character creation.
        for (var i = 0; i < arguments; i++) {

        }

    }
    this.render = function (args) {
        for (var i = 0; i < args.length; i++) {
            this.playField.innerHTML += args[i];
            this.playField.innerHTML += "<br>";
        }
    }

    this.Display = function () {

    }
}

/*
 function MasterLoop() {
 for (var b in window) {
 if (window.hasOwnProperty(b)) {//Will always be true.
 if (eval(b + ".isGameEngine")) {
 console.log(b);
 }

 }
 }
 }
 */
/*
 *Checks for Objects with a property set, example of this can be gameEngine, Player, Enemy etc.
 **/
function hasProperty(a) {
    for (var b in window) {
        if (window.hasOwnProperty(b)) {//Will always be true.
            if (eval(b + "." + a)) {
                return b;
            }

        }
    }
}
function getGame() {
    for (var b in window) {
        if (window.hasOwnProperty(b)) {//Will always be true.
            if (eval(b + "." + "isGameEngine")) {
                return b;
            }

        }
    }
}



