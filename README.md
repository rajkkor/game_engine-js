# game_engine-js
simple game engine written in javascript for web games.

<h2>Table of contents</h2>
<ul>
  <li>
    what is this project?
  </li>
  <li>
    <a href ="#first_setup">First Setup</a>
  </li>
  <li>
  Players
    <ul>
    <li>
    add properties
    </li>
    <li>
    add skin
    </li>
    <li>
    render player
    </li>
    <li>
    setting up player with controls.
    </li>
    <li>
    Enemy Handling
    </li>
    </ul>
  </li>
</ul>

<hr>

<a name ="first_setup">
<h3>first Setup</h3>
<p>
I've attached some startup files. index.html is the main one you need to worry about, I encourage you to use a seperate script file for easy management. 
</p>
to first setup your game:
<ol>
<li>
<code>var g = new Game("idOfPlayfield")</code> 
<p>
You need to tell the object what the name of your game field is. you refer to it via a id attached to the element. </p>
</li>
<li>
<code>g.gameName = "myGamesName"</code> <p>
There are many core methods to customize your game(will be covered in the future) but you can also create your own methods ofc. </p>
</li>
</ol>
