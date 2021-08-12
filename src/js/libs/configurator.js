//Загрузка dom
document.addEventListener('DOMContentLoaded', function () {
        getMassa();
        massaActive();
        RezhimActive();
        getValue();
        wideTrack();
        getDopEq();
        getRezhim();
        total.getTarif();
    },
    false);

//Функция активация массы
function massaActive() {

    document.querySelector('.push-button.activated').click();
}

//Функция активация режима
function RezhimActive() {

    document.querySelectorAll('.push-button.activated')[1].click();
}

//Функция задержки на выполнение пересчета тарифа
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//функция расчета объема ковша
function getValue() {

    document.getElementById('value').addEventListener('input', function () {

        let value = this.value;
        let koefVal = 0;
        let valueNum = 0;
        valueNum = Number.parseFloat(value);
        if ((valueNum >= 0.15) && (valueNum <= 1)) {
            koefVal = 0;
        } else {
            if ((valueNum > 1) && (valueNum <= 2)) {
                koefVal = 100;
            } else {
                if ((valueNum > 2) && (valueNum <= 3)) {
                    koefVal = 100;
                } else {
                    if ((valueNum > 3) && (valueNum <= 4))
                        koefVal = 100;
                }
            }
        }
        total.value = Number.parseFloat(koefVal);
        total.getTarif();

    })

}

//функция получения значения массы
function getMassa() {
    //Определяем активный аттрибут нажатой кнопки в разделе масса
    let massa = document.getElementById('massa');
    //console.log("выбранный тег", massa);
    let child = massa.querySelectorAll('button');
    //console.log("вложенные теги", child);
    for (let i = 0; i < child.length; i++) {
        child[i].addEventListener('click', selectValueMassa);

        function selectValueMassa() {
            sleep(100).then(() => {
                for (let i = 0; i < child.length; i++) {
                    if (child[i].classList.contains('activated')) {
                        //console.log("активный тег", child[i]);
                        let activeButtonAttr = child[i].getAttribute('data-button');
                        console.log("аттрибут selectValueMassa", activeButtonAttr);
                        total.massa = Number.parseFloat(activeButtonAttr);
                        total.getTarif();
                    }
                }
            });
        }
    }
}

//функция получения параметра трака
function wideTrack() {
    //Определяем активный аттрибут нажатой кнопки в разделе параметра широкий трак
    let wide = document.getElementById('track');
    wide.addEventListener('click', selectWideTrack);

    function selectWideTrack() {
        if (wide.classList.contains('activated')) {

            let activeButtonAttr = wide.getAttribute('data-button');
            console.log("аттрибут wide", activeButtonAttr);
            total.wide = Number.parseFloat(activeButtonAttr);
            total.getTarif();

        } else {
            total.wide = 0;
            total.getTarif();
        }
    }
}

//функция получения параметров доп. оборудования
function getDopEq() {
    //Определяем активный аттрибут нажатой кнопки в разделе доп. оборуд
    let equip = document.getElementById('dopEquip');
    //console.log("выбранный тег", dopEquip);
    let child = equip.querySelectorAll('button');
    //console.log("вложенные теги", child);
    for (let i = 0; i < child.length; i++) {
        child[i].addEventListener('click', selectDopEquip);

        function selectDopEquip() {
            sleep(100).then(() => {
                let activeButtonAttr = {0:0};
                console.log(activeButtonAttr)
                for (let i = 0; i < child.length; i++) {
                    if (child[i].classList.contains('activated')) {
                        activeButtonAttr[i] = child[i].getAttribute('data-button');
                    } else {
                        total.dopEquip[i] = 0;
                        total.getTarif();
                    }
                }
                let summed = 0;
                for (let key in activeButtonAttr) {
                    summed += Number.parseFloat(activeButtonAttr[key]);
                    total.dopEquip = summed;
                    total.getTarif();
                }
            });
        }
    }
}

//функция получения параметров режима работы
function getRezhim() {
    //Определяем активный аттрибут нажатой кнопки в разделе масса
    let rezhim = document.getElementById('rezhim');
    //console.log("выбранный тег", rezhim);
    let child = rezhim.querySelectorAll('button');
    //console.log("вложенные теги", child);
    for (let i = 0; i < child.length; i++) {
        child[i].addEventListener('click', selectValueRezhim);

        function selectValueRezhim() {
            sleep(100).then(() => {
                for (let i = 0; i < child.length; i++) {
                    if (child[i].classList.contains('activated')) {
                        //console.log("активный тег", child[i]);
                        let activeButtonAttr = child[i].getAttribute('data-button');
                        console.log("аттрибут selectValueRezhim", activeButtonAttr);
                        total.rezhim = Number.parseFloat(activeButtonAttr);
                        total.getTarif();
                    }
                }
            });
        }
    }
}



let total = {
    massa: 0,
    value: 0,
    wide: 0,
    dopEquip: 0,
    rezhim: 8,
    getTarif: function () {

        let getTarif = (total.massa + total.value + total.wide + total.dopEquip)
        let totalCost = getTarif*total.rezhim;

        document.getElementById("tarif").innerHTML = getTarif;
        document.getElementById("totalCost").innerHTML = totalCost+" р";
    }
}


// function a(){
//     var result = 10;
//     total.a = result;
// }

//
// function b(){
//     var result = 20;
//     total.b = result;
// }
//
//
//
// var total = {
//     a: 0,
//     b: 0,
//     getTotal: function(){
//         console.log(total.a + total.b);
//     }
// }
//
//
//
// a();
// b();
// total.getTotal();


