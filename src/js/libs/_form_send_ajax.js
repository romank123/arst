
async function sendMessg (e){

    e.preventDefault();

    let formnew = new FormData(e.target);

    formnew.append(e.target.getElementsByTagName('button')[0].name, 1);

    let response = await fetch('#', {
        method: 'POST',
        body: formnew,
    });

    if (response.ok) {

        e.target.reset();

        let modal = document.getElementById('myModal');
        modal.style.display = "none";
        let modal1 = document.getElementById('success');
        modal1.style.display = "block";

        let close = document.getElementsByClassName("close-btn")[0];
        close.onclick = function() {
            modal.style.display = "none";
            modal1.style.display = "none";
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {

                let modal1 = document.getElementById("success");
                modal1.style.display = "none";

            }

        });

        window.onclick = function(event) {

            let modal1 = document.getElementById('success');

            if (event.target !== modal1) {
                modal1.style.display = "none";
            }

        }

    } else{
        alert("ошибка отпраки данных")
    }
}

let form0 = document.getElementById('form')
if (form0){
    form0.onsubmit = sendMessg;
}

let form1 = document.getElementById('form-1')
if (form1){
    form1.onsubmit = sendMessg;
}

let form2 = document.getElementById('form-2')
if (form2){
    form2.onsubmit = sendMessg;
}

let form3 = document.getElementById('form-3')
if (form3){
    form3.onsubmit = sendMessg;
}

