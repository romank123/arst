let select = document.getElementsByTagName('select')[0];

if (select) {
    loadparams1(select.value);
    select.addEventListener('change', getSelect);
}
function getSelect(){
    let selectVal = document.querySelectorAll('select')[0].value;
    loadparams1(selectVal);
}

async function loadparams1(id) {

    let response = await fetch(`/partners/get_weight.php?ID=${id}`, {
        method: 'GET',
    });
    if (response.ok) {
        let result = await response.json();
        console.log("result", result);
        document.getElementsByClassName('load-mass')[0].innerHTML = '';
        for (let item of result) {
            if (item.IBLOCK_CODE === 'types') {
                let res = `<button button-id="${item.ID}" class="push-button">${item.NAME}</button>`
                document.getElementsByClassName('load-mass')[0].insertAdjacentHTML('beforeend', res);
            }
        }

        let btnId = document.querySelectorAll('.load-mass .push-button');
        btnId.forEach((elem)=> {
            elem.addEventListener('click', () => {

                if (elem.classList.contains('activated')){

                } else {

                    let elemParent = elem.parentNode.querySelectorAll('button');
                    elemParent.forEach((elem)=>{
                        elem.classList.remove('activated','not-shadow-mass-button');
                    })

                    elem.classList.add('activated','not-shadow-mass-button')

                }

                let btnId = elem.getAttribute('button-id');

                loadparams(btnId);

                setTimeout(function (){
                    let btnAjax = document.querySelectorAll('.load button');

                    btnAjax.forEach((elem)=>{

                        elem.addEventListener('click',()=>{

                            if (elem.classList.contains('activated')){

                                elem.classList.remove('activated','not-shadow-mass-button')

                            } else {

                                elem.classList.add('activated','not-shadow-mass-button')

                            }

                            getAllParam();

                        })

                    })

                },500)



                function getAllParam(){

                    let allBtnActive = document.querySelectorAll('.activated');

                    let getName = {};

                    for (i=0; i<allBtnActive.length;i++) {

                        getName[i] = allBtnActive[i].innerHTML;

                        console.log( getName[i]);


                    }

                    console.log("allBtnActive",allBtnActive);
                }

                getAllParam();
            })
        });









    } //response ok
}

