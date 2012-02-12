function externallinks() {
    if(!document.getElementsByTagName)
        return;
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++) {
        var link = links[i];
<<<<<<< HEAD
        if(link.getAttribute("href"))
=======
        if(link.getAttribute("href") && link.getAttribute("rel") == "external")
>>>>>>> experiment
            link.target = "_blank";
    }
}

window.onload = function() {
    externallinks();
}