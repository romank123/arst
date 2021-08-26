let select = document.getElementsByTagName('select')[0];

if (select) {
    loadparams1(select.value).then(r => {

        //проверка кол-ва кнопок (если 1 кнопка - скрыть)
        let activeBtn1 = document.querySelectorAll('.load-mass button');
        console.log("activeBtn1",activeBtn1)
        if (activeBtn1.length == 1) {
            activeBtn1[0].style.visibility = ('hidden');
            activeBtn1[0].style.marginTop = '-67px';
        }
        //! проверка кол-ва кнопок (если 1 кнопка - скрыть)

        let activeBtn = document.querySelectorAll('.load-mass button')[0];
        console.log("activeBtn")
        console.log(activeBtn)
        if (activeBtn) {
            activeBtn.click();
        }
    });
    select.addEventListener('change', getSelect);
}

function getSelect() {

    let selectVal = document.querySelectorAll('select')[0].value;
    loadparams1(selectVal).then(r => {

        //проверка кол-ва кнопок (если 1 кнопка - скрыть)
        let activeBtn1 = document.querySelectorAll('.load-mass button');
        console.log("activeBtn1",activeBtn1)
        if (activeBtn1.length == 1) {
            activeBtn1[0].style.visibility = ('hidden');
            activeBtn1[0].style.marginTop = '-67px';
        }
        //! проверка кол-ва кнопок (если 1 кнопка - скрыть)

        let activeBtn = document.querySelectorAll('.load-mass button')[0];
        if (activeBtn) {
            activeBtn.click();
        }
    });
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
        btnId.forEach((elem) => {
            elem.addEventListener('click', () => {

                if (elem.classList.contains('activated')) {

                } else {

                    let elemParent = elem.parentNode.querySelectorAll('button');
                    elemParent.forEach((elem) => {
                        elem.classList.remove('activated', 'not-shadow-mass-button');
                    })

                    elem.classList.add('activated', 'not-shadow-mass-button')

                }

                let btnId = elem.getAttribute('button-id');

                loadparams(btnId);

                setTimeout(function () {
                    let btnAjax = document.querySelectorAll('.load button');

                    btnAjax.forEach((elem) => {

                        elem.addEventListener('click', () => {

                            let el = elem.parentNode.parentNode.querySelectorAll('*');

                            console.log("el+++++",el[1]);

                            if (el[1].classList.contains('selected-2')) {
                                elem.classList.add('activated','not-shadow-mass-button');

                                let elemSel2 = elem.parentNode.parentNode.parentNode.querySelectorAll('.selected-2 button');

                                console.log("elemSel2",elemSel2)

                                elemSel2.forEach((elem) => {

                                    elem.addEventListener('click', () => {

                                        let elemB = elem.parentNode.querySelectorAll('button');

                                        for (let i=0; i < elemB.length; i++) {

                                            elemB[i].classList.remove('activated','not-shadow-mass-button')
                                        }

                                        elem.classList.add('activated','not-shadow-mass-button');

                                    })

                                });

                                console.log("contains sel-2")

                            } else {

                                if (elem.parentNode.parentNode.parentNode.querySelectorAll('.selected-2')) {

                                    if (elem.classList.contains('activated')) {

                                        elem.classList.remove('activated', 'not-shadow-mass-button')

                                    } else {

                                        elem.classList.add('activated', 'not-shadow-mass-button')

                                    }

                                    //getAllParam();
                                }
                            }
                        })

                    })

                }, 500)

            })
        });


    } //response ok
}

//сбор данных формы сотрудничества
let getName = {select: 0, mass:'', value:'нет данных', aboutWork:'описание: не указано', adres: 'адрес: не указан', r:'', param: {item: 0}, ndsName:'', innerPrice:'',nameT:'', massa:''};

let btnZakaz = document.getElementsByClassName('btn-zakaz')[0];

function getValue(){

    let r = "";

    let items = document.getElementsByClassName('load')[0].children;

    for (let item of items) {
        if (item.classList.contains('value')) {
            r += item.getElementsByTagName('span')[0].innerText +
                ': ' +
                item.getElementsByTagName('input')[0].value +
                '\n ';
        } else if (item.classList.contains('dop-items')) {
            let result = "";
            for (let i of item.getElementsByClassName('activated')) {
                result += i.innerText + ', ';
            }

            r += item.getElementsByTagName('span')[0].innerText +
                ': ' +
                result +
                '\n ';
        } else if (item.classList.contains('param-range')) {
            r += item.getElementsByTagName('span')[0].innerText +
                ': ' +
                item.getElementsByTagName('input')[0].value +
                '\n ';
        }
    }

    getName.r = r;

}

if  (btnZakaz) {

    btnZakaz.addEventListener('click', function () {


        function getAllParam() {

            getName.mass = document
                .getElementsByClassName('load-mass')[0]
                .getElementsByClassName('activated')[0].innerText;

            let select = document.getElementsByTagName('select')[0];

            let selectText = select.options[select.selectedIndex].text;

            getName.select = selectText;

            let textArea = document.getElementById('formArea');

            textArea.value = getName.select + '\n' +
                getName.mass + '\n' +
                getName.r + '\n' +
                getName.aboutWork + '\n' +
                getName.adres
        }

        function getAboutWork() {
            let aboutWork = document.getElementById('aboutWork');

            let aboutWorkText = document.getElementById('aboutWork').value;

            getName.aboutWork = aboutWorkText;

        }

        function getAdress() {

            let adres = document.getElementById('adress').value;

            getName.adres = adres;

        }

        getValue();
        getAboutWork();
        getAdress();
        getAllParam();
    })
}

//!сбор данных формы сотрудничества

let btnZakazMain = document.getElementsByClassName('btn-zakaz-main')[0];

if (btnZakazMain){

btnZakazMain.addEventListener('click', function () {

//сбор данных итоговая стоимость
    let tab = document.querySelectorAll('.tabs > .active')[0].innerHTML
    getName.ndsName = tabs;

    let sectionTabs = document.querySelectorAll('.section-tabs.active')[0].getElementsByTagName('div')[2].innerText

    getName.innerPrice = sectionTabs;

    //сбор данных с формы заказа

    let nameT = document
        .getElementsByClassName('zakaz')[0]
        .getElementsByTagName('img')[0]
        .getAttribute('title')

    getName.namet = nameT

    let cardBtn = document.querySelectorAll('.w-full.-mt-48')[0].children

    let r = "";

    for (let item of cardBtn) {
        if (item.classList.contains('mass') || item.classList.contains('rezhim')) {

             r += item.getElementsByTagName('span')[0].innerText +
                 ': ' +
                 item.getElementsByClassName('activated')[0].innerText +
                 '\n ';

        } else if (item.classList.contains('load')) {

            getValue();

            r += getName.r;

        } else if (item.classList.contains('set-date')) {

            r += item.getElementsByTagName('span')[0].innerText +
                ': '
            r += item.getElementsByTagName('input')[0].value +
                '-'
            r += item.getElementsByTagName('input')[1].value + '\n '

        } else if (item.classList.contains('counter') || item.classList.contains('adres')) {
            r += item.getElementsByTagName('span')[0].innerText +
                ': '
            r += item.getElementsByTagName('input')[0].value + '\n '

        } else {
            r += item.getElementsByTagName('span')[0].innerText +
                ': '
            r += item.getElementsByTagName('textarea')[0].value + '\n '
        }
    }

    let textArea = document.getElementById('form-config-text-area');

    textArea.value = r + '\n ' + getName.innerPrice;


})
}

// document.getElementById('form-config').onsubmit = function (e){
//     e.preventDefault()
// }









