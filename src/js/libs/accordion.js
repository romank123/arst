let myRadios = document.getElementsByName('tabs2');

let setCheck;

for(let x = 0; x < myRadios.length; x++){

    myRadios[x].onclick = (el) => {
        if(setCheck !== el.target){
            setCheck = el.target;
        }else{
            el.target.checked = false;
            setCheck = null;
        }
    };
}


