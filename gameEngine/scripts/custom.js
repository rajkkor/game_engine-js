var g = new Game("Game");
g.gameName = "Vincents Spel Motor";
g.player.prototype.mana = 42;

g.add("<h1>" + g.gameName + "</h1>",
    g.player.name,
    g.player.health
);

console.log(g.player.mana);