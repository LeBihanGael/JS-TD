var div1 = document.getElementById("div1");
div1.className = "styleclass";
div1.addEventListener("click", ChangeStyle);

function ChangeStyle(event) {
    event.target.className = "newstyleclass";
}

var div2 = document.getElementById("div2");
div2.className = "classVisi";
div2.addEventListener("mouseover", ChangeVisibility);

function ChangeVisibility(event) {
    event.target.style.visibility = "hidden";
}
