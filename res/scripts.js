let root = document.documentElement;

function setcolor_1() {
    var bgdiv = document.getElementById('bgimg');
	var bgdiv2 = document.getElementById('bgimg2');
    root.style.setProperty(' --body_bgcolor', '#2980B9');
    root.style.setProperty('--link', '#d3d3d3');
    root.style.setProperty('--alink', '#2980B9');
    root.style.setProperty('--flink', '#2980B9');
    root.style.setProperty('--hlink', '#2980B9');
    root.style.setProperty('--vlink', '#d3d3d3');
    root.style.setProperty('--dlink_bg', '#2980B9');
    root.style.setProperty('--dlink_abg', '#fd1340');
    root.style.setProperty('--dlink_fbg', '#fd1340');
    root.style.setProperty('--dlink_hbg', '#fd1340');
    root.style.setProperty('--dlink_vbg', '#2980B9');
    root.style.setProperty('--contentcolor', '#2980B9');
    root.style.setProperty('--bgfiltercolor', 'rgba(126, 126, 126, 0)');
	root.style.setProperty('--bgcolor1', '#f1f1f1');
	root.style.setProperty('--bgcolor2', '#dddddd');
	root.style.setProperty('--body_textcolor', 'black');	
    bgdiv.style.backgroundImage = "url(../graphics/bg.jpg)";
}

function setcolor_2() {
    var bgdiv = document.getElementById('bgimg');
    root.style.setProperty(' --body_bgcolor', '#19a2ff');
    root.style.setProperty('--link', '#d3d3d3');
    root.style.setProperty('--alink', '#19a2ff');
    root.style.setProperty('--flink', '#19a2ff');
    root.style.setProperty('--hlink', '#19a2ff');
    root.style.setProperty('--vlink', '#d3d3d3');
    root.style.setProperty('--dlink_bg', '#19a2ff');
    root.style.setProperty('--dlink_abg', '#2980B9');
    root.style.setProperty('--dlink_fbg', '#2980B9');
    root.style.setProperty('--dlink_hbg', '#2980B9');
    root.style.setProperty('--dlink_vbg', '#19a2ff');
    root.style.setProperty('--contentcolor', '#19a2ff');
    root.style.setProperty('--bgfiltercolor', 'rgba(126, 126, 126, 0)');
	root.style.setProperty('--bgcolor1', '#333333');
	root.style.setProperty('--bgcolor2', '#1c1c1c');
	root.style.setProperty('--body_textcolor', 'white');
    bgdiv.style.backgroundImage = 'url(../graphics/bg2.jpg)';
}

function dropDown() {
    document.getElementById("Dropdown").classList.toggle("show");
    document.getElementById("MenuButton").classList.toggle("rotateIt");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropimg = document.getElementById("MenuButton");
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

document.addEventListener("DOMContentLoaded", preload("../graphics/bg.jpg", "../graphics/bg2.jpg"));

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var upButton = document.getElementById("upButton");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        upButton.style.display = "block";
        var opac = ((Math.max(document.body.scrollTop, document.documentElement.scrollTop) - 200) / 400);
        if (opac < 1) {
            upButton.style.opacity = opac;
        } else {
            upButton.style.opacity = 1;
        }
    } else {
        upButton.style.display = "none";
    }

    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    var footer = document.getElementById("footer");

    if ((Math.max(document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight - 120) > (height - 260)) {
        upButton.style.top = height - 260 + "px";
        upButton.style.bottom = null;
        upButton.style.position = "absolute";
    } else {

        upButton.style.top = null;
        upButton.style.bottom = "120px";
        upButton.style.position = "fixed"
    }

    console.log((parseInt(footer.height) + 120) + "px")
}
