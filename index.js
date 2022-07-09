// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
import React from "react";
import ReactDom  from "react";
const navBar=(
    <nav>
        <h1>Hello I Am Jay Shah</h1>
        <ul>
            <li>Hello</li>
            <li>I</li>
            <li>Am</li>
            <li>Jay</li>
            <li>Shah</li>
        </ul>
    </nav>
);

ReactDOM.render(navBar,document.getElementById("root"));