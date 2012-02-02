function externallinks() {
    if(!document.getElementsByTagName)
        return;
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++) {
        var link = links[i];
        if(anchor.getAttribute("href") && anchor.getAttribute("rel") == "external")
            link.target = "_blank";
    }
}

window.onload = function() {
    externallinks();
}