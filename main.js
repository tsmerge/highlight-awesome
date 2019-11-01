let h3 = document.createElement('h3');
h3.innerHTML = "It brings you efficiency, really!<br>Believe me, try it for a month, you will love it, you can't live without it.";

let div1 = document.createElement('div');
div1.classList.add('body');
div1.append(h3);

// Append After, Via https://stackoverflow.com/a/32135318
let navbar = document.getElementById('navbar');
navbar.parentNode.insertBefore(div1, navbar.nextSibling);
