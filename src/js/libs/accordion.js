let myRadios = document.getElementsByName('tabs2');
let setCheck;
let x = 0;
for(x = 0; x < myRadios.length; x++){
    myRadios[x].onclick = function(){
        if(setCheck != this){
            setCheck = this;
        }else{
            this.checked = false;
            setCheck = null;
        }
    };
}


