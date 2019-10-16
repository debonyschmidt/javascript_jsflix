const glide = document.querySelector(".glide");
const config = {
    type: "carousel",
    perView: 4,
    gap:100,
    
}

new Glide(glide, config).mount();

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var ul = document.getElementById('slide');
    ul.onclick = function(event) {
var target = getEventTarget(event);
    console.log(target.innerText);
};
