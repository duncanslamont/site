

function setUpPage(){
    var intro = document.getElementById("intro");
    var main = document.getElementById("main");
    var w = window.innerWidth;
    var x = ((w/2) - 306).toString() + "px";
    var y = ((w/2) - 400).toString() + "px";
    
    main.style.paddingLeft=y;
    main.style.paddingRight = y;

    lista.style.paddingLeft=y;
    lista.style.paddingRight = y;
    
    intro.style.paddingLeft = x;
    intro.style.paddingRight = x;
    
}

function clickCreative(){
    lista.innerHTML = ""
    github.innerHTML = ""
    email.innerHTML = ""
    main.innerHTML = "Hi, I'm Duncan, and this is my site. In my free time I write, and occasionally make music. I write comedy short stories, if you're interested you can email me (links tab). Here is a link to hear some of my music: "
    var a = document.createElement('a');  
    var link = document.createTextNode("SoundCloud"); 
    a.appendChild(link);  
    a.title = "SoundCloud";  
    a.href = "https://soundcloud.com/duncan-l";  
    document.getElementById("main").appendChild(a);
    
    var p = document.createElement('p');             
    var stuff = document.createTextNode("It's mostly all cringe though, I wouldn't bother.");
    p.appendChild(stuff);                  
    document.getElementById("main").appendChild(p);

}
function clickProjects(){
    lista.innerHTML = ""
    github.innerHTML = ""
    email.innerHTML = ""
    main.innerHTML = "Some recent projects I've made are(all on my github): "
    var node = document.createElement("LI");
    var textnode = document.createTextNode("K Means Clustering project for textual data, which had a 98% accuracy in my tests.");
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);

    var node1 = document.createElement("LI");
    var textnod1e = document.createTextNode("K Nearest Neighbors for textual data, which had a 98% accuracy in my tests.");
    node1.appendChild(textnod1e);
    document.getElementById("lista").appendChild(node1);

    var node2 = document.createElement("LI");
    var textnode2 = document.createTextNode("A sudoku solver, which attempts to solve the puzzle the way a human would instead of brute forcing it.");
    node2.appendChild(textnode2);
    document.getElementById("lista").appendChild(node2);

}
function clickLinks(){
    lista.innerHTML = ""
    github.innerHTML = ""
    email.innerHTML = ""
    main.innerHTML = ""
    var a = document.createElement('a');  
    var link = document.createTextNode("Github"); 
    a.appendChild(link);  
    a.title = "GitHub";  
    a.href = "https://github.com/duncanslamont";  
    document.getElementById("github").appendChild(a);

    var a1 = document.createElement('a');  
    var link1 = document.createTextNode("Email"); 
    a1.appendChild(link1);  
    a1.title = "GitHub";  
    a1.href = "duncanl1000@gmail.com";  
    document.getElementById("email").appendChild(a1);
    

}





window.onload = function(){
    setUpPage();

};