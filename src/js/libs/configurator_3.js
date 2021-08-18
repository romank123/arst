// поиск внутри всего документа
    let activeBtn = document.querySelectorAll('.activated');

//активные кнопки режим и масса
    activeBtn.forEach((elem) => {
        setTimeout(click, 100);

        function click() {
            elem.click();
        }
    })



//обработка кнопок из запроса ajax
function getClassBtn(){
    let allBtnClass = document.querySelectorAll('.-mt-48 button');

    allBtnClass.forEach((elem)=>{
        elem.addEventListener('click',()=>{

            let selected = elem.parentNode;
            console.log("selected",selected)

            if (selected.classList.contains('selected-1')) {

                    if (elem.classList.contains('activated')) {
                        if (elem.hasAttribute('data-button')) {
                            let elemName = elem.innerHTML;
                            total.selected[elemName] = elem.getAttribute('data-button');
                            console.log("total",total)
                        } else {

                        }
                    } else {
                        let elemName = elem.innerHTML;
                        delete total.selected[elemName];
                        console.log("total",total)
                    }

            } else {

                elem.classList.toggle('activated')
                elem.classList.toggle('not-shadow-mass-button')
                if (elem.classList.contains('activated')) {
                    if (elem.hasAttribute('data-value')) {
                        let elemName = elem.innerHTML;
                        total.dopItems[elemName] = elem.getAttribute('data-value');
                    } else {
                    }
                } else {
                    let elemName = elem.innerHTML;
                    delete total.dopItems[elemName];
                }
                total.getTarif();
                console.log("total",total)


            }




        })
    })

    }
//end getClassBtn()


//Total object

let total = {a:0, b:0, rezhim:{}, dopItems: {}, selected:{}, getTarif:function(){

}}

