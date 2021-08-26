
let modal = document.getElementById("myModal");

let btn = document.getElementsByClassName("myBtn-open");

//let close = document.getElementsByClassName("close-btn")[0];

for (let item of btn){

    item.onclick = () => {
        modal.style.display = "block";
    }
}

let close = document.querySelectorAll(".close-btn");
close.forEach((elem) => {
    elem.addEventListener('click', () => {

    modal.style.display = "none";

    let modal1 = document.getElementById('success');
    if (modal1){
        modal1.style.display = "none";
    }

});
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {

        let modal = document.getElementById("myModal");
        modal.style.display = "none";

    }

    });

window.onclick = function(event) {

    if (event.target === modal) {
        modal.style.display = "none";
    }
}