
let modal = document.getElementById("myModal");


let btn = document.getElementsByClassName("myBtn-open");


let close = document.getElementsByClassName("close-btn")[0];


for (let item of btn){

    item.onclick = () => {
        modal.style.display = "block";
    }
}



close.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {

    if (event.target === modal) {
        modal.style.display = "none";
    }
}