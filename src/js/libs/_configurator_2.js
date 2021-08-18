//Массивы с параметрами заявки на отправку
let zakazSend = {
    par: 0, value: 0, dataB: 0, hours: 0, hoursDays: 8, count: 1, rezhim: 0, wideTr:0, dopItems: {}, getTarif: function () {

        let a = moment(zakazSend.date_first, "DD.MM.YYYY");


        let b = moment(zakazSend.date_last, "DD.MM.YYYY").add(1, "day");

        let days = b.diff(a, 'days');

        console.log("days",days)

        if ((days == 0) || (isNaN(days)) || (days < 0)) {
        days = 1;
         }


        let key = 0;

        for (let item in zakazSend.dopItems) {

            key += parseInt(zakazSend.dopItems[item])

            console.log("key",key);

        }

        console.log(zakazSend.hours)

        let getTarif = parseInt(zakazSend.dataB);

        let hours = zakazSend.hours * zakazSend.rezhim;

        let hoursDays = hours * days * zakazSend.count;

        zakazSend.hoursDays = hoursDays;

        console.log(zakazSend.hoursDays);

        let totalCost = (getTarif+ key) * zakazSend.count * hours ;

        document.getElementById("tarif").innerHTML = getTarif;
        document.getElementById("hours").innerHTML = hoursDays;
        document.getElementById("totalCost").innerHTML = totalCost + " р";
        paramSend();

    }
};

//функция выгрузки параматрево заявки
function paramSend() {

    console.log("paramSend() run...")

    let zakaz = document.getElementById('zakazSend');

    //размер объекта zakazSend
    //let count = 0;
    //for (let key in zakazSend) {
    //    count++
    // }
    //let zakazSendL = count;

    //zakazSend.getTarif();

    zakaz.innerHTML = ``;

   // for (let i = 0; i < zakazSendL; i++) {
        zakaz.innerHTML += `<div>${zakazSend.par}</div>`;
        zakaz.innerHTML += `<div>${zakazSend.value}</div>`;
        zakaz.innerHTML += `<div><span>тариф: </span>${zakazSend.dataB}</div>`;
        zakaz.innerHTML += `<div><span>кол-во техн: </span>${zakazSend.count}</div>`;
        zakaz.innerHTML += `<div><span>кол-во часов: </span>${zakazSend.hoursDays}</div>`;
   // }

}

//Загрузка dom
document.addEventListener('DOMContentLoaded', function () {
    zakazSend.hours = 1;
    massaActive();
    getCount();
});


//Загрузка load
function getLoad() {
    getRezhim();
    fun1();
    wideTrack();
    getDate_first();
    getDate_second();
    //console.log("getLoaded")
}

//Функция активация массы
function massaActive() {

    let massa = document.getElementById('massa');
    let child = massa.querySelector('button');
    let childs = massa.querySelectorAll('button');

    sleep(100).then(() => {
        child.click();
    });

    childs.forEach((childs) => {
        if (childs.classList.contains("activated")) {
            //console.log(childs)
        }
    })

    clickActiveMass();

}

function clickActiveMass() {

    let massa = document.getElementById('massa');
    let childs = massa.querySelectorAll('button');

    childs.forEach((elem) => {
        elem.addEventListener('click', () => {

            zakazSend.value = elem.innerText;
            if (elem.hasAttribute('data-button')) {
                zakazSend.dataB = elem.getAttribute('data-button');
                //console.log(zakazSend.dataB)
            }
            //console.log(elem)
            zakazSend.par = elem.parentNode.parentNode.getElementsByTagName('span')[0].innerText;
            paramSend();

        })
    })


}

//Функция задержки на выполнение пересчета тарифа
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//функция расчета объема ковша
function getValue() {

    document.getElementById('value').addEventListener('input', function () {

        let value = this.value;
        value = value.replace(',', '.');
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
                        if (activeButtonAttr == 1500) {
                            let maxDepth = document.getElementById('maxDepth');
                            maxDepth.innerHTML = 'до 5м';
                            getWidth.max = 8;
                            console.log("getWidth.max", getWidth.max)
                            //console.log(parM(max))
                        } else {
                            let maxDepth = document.getElementById('maxDepth');
                            maxDepth.innerHTML = 'до 8м';
                            getWidth.max = 8;
                        }
                        total.massa = Number.parseFloat(activeButtonAttr);
                        total.getTarif();
                    }
                }
            });
        }
    }
}

//Функция активация режима
function getRezhim() {
    //Определяем активный аттрибут нажатой кнопки в разделе масса
    let rezhim = document.getElementById('rezhim');
    //console.log("выбранный тег", rezhim);
    let child = rezhim.querySelectorAll('button');
    //console.log("вложенные теги", child);

    sleep(100).then(() => {
        child[0].click();
    });

    for (let i = 0; i < child.length; i++) {
        child[i].addEventListener('click', selectValueRezhim);

        function selectValueRezhim() {
            sleep(100).then(() => {
                for (let i = 0; i < child.length; i++) {
                    if (child[i].classList.contains('activated')) {
                        //console.log("активный тег", child[i]);
                        let activeButtonAttr = child[i].getAttribute('data-button');
                        //console.log("аттрибут selectValueRezhim", activeButtonAttr);
                        zakazSend.rezhim = Number.parseFloat(activeButtonAttr);

                        //console.log("zakazSend.rezhim", zakazSend.rezhim);
                        zakazSend.getTarif();
                    }
                }
            });
        }
    }

}

//функция получения параметра трака
function wideTrack() {
    //Определяем активный аттрибут нажатой кнопки в разделе параметра широкий трак
    let dop_items = document.querySelectorAll('.dop-items button');

    dop_items.forEach((elem)=>{
        elem.addEventListener('click',()=>{

                elem.classList.toggle('activated')
                elem.classList.toggle('not-shadow-mass-button')

            if (elem.classList.contains('activated')) {

                if (elem.hasAttribute('data-value')) {

                   let elemName = elem.innerHTML;

                    zakazSend.dopItems[elemName] = elem.getAttribute('data-value');

                    console.log("zakazSend",zakazSend)
                    console.log("zakazSend.dopItems.val",zakazSend.dopItems.val)

                    //zakazSend.elemName = elem.getAttribute('data-value');
                } else {



                }



            } else {
                let elemName = elem.innerHTML;
                delete zakazSend.dopItems[elemName];


            }


            zakazSend.getTarif();
        })

    })




    function selectWideTrack() {

        console.log("btn",btn)

        //btn[0].classList.add('activated');



    }








    // function selectWideTrack() {
    //     if (wide.classList.contains('activated')) {
    //
    //         let activeButtonAttr = wide.getAttribute('data-button');
    //         console.log("аттрибут wide", activeButtonAttr);
    //         total.wide = Number.parseFloat(activeButtonAttr);
    //         total.getTarif();
    //
    //     } else {
    //         total.wide = 0;
    //         total.getTarif();
    //     }
    // }
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
                let activeButtonAttr = {0: 0};
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

//функция получения параметров даты
function getDate_first() {

    let input = document.getElementById("datepicker");
    zakazSend.date_first = input.value;
    console.log(input.value);

    input.addEventListener('click', function () {

        let first_date = document.getElementById("calendar_first");
        zakazSend.date_first = first_date;
        zakazSend.getTarif();
        first_date.addEventListener('click', function () {
            sleep(200).then(() => {
                let input = document.getElementById("datepicker").value;
                //let dateEntered = new Date(input);
                //console.log(input);
                zakazSend.date_first = input;

                zakazSend.getTarif();
                //console.log(dateEntered);
            });
        });
    });
}

//функция получения параметров даты 2
function getDate_second() {

    let input_2 = document.getElementById("datepicker_2");
    zakazSend.date_last = input_2.value;

    input_2.addEventListener('click', function () {

        let second_date = document.getElementById("calendar_second");
        second_date.addEventListener('click', function () {
            sleep(200).then(() => {
                let input = document.getElementById("datepicker_2").value;
                //let dateEntered = new Date(input);
                //console.log("second", input);
                zakazSend.date_last = input;
                zakazSend.getTarif();
                //console.log(dateEntered);
            });
        });
    });
}

//функция получения параметров кол-во техники
function getCount() {

    let count = document.getElementById('custom-input-number').value;
    zakazSend.count = count;
    zakazSend.getTarif();

    document.getElementById('increment').addEventListener('click', function () {

        let count = document.getElementById('custom-input-number').value;
        countNum = Number.parseFloat(count);
        zakazSend.count = countNum;
        zakazSend.getTarif();
        paramSend();

    })

    document.getElementById('decrement').addEventListener('click', function () {

        let count = document.getElementById('custom-input-number').value;
        countNum = Number.parseFloat(count);
        zakazSend.count = countNum;
        zakazSend.getTarif();
        paramSend();

    })
    paramSend();
}


function fun1() {
    let rng = document.getElementById('r1'); //rng - это Input
    let div = document.getElementById('test'); // div - блок test
    let max_rng = rng.getAttribute('max');
    let min_rng = rng.getAttribute('min');
    let step_rng = rng.getAttribute('step');
    let valueObj = document.getElementsByClassName('value_obj');

    valueObj[0].innerHTML = rng.value+'м';

    console.log("rng.value++",rng.value)

    let divide = 100/(max_rng-min_rng);

    if (rng.value !== undefined) {

            if (rng.value == min_rng) {
                console.log("start value min")
                div.style.width = 0+'%';
            }

            if (rng.value == max_rng) {
                 console.log("start value max")
                 div.style.width = 98+'%';
            }

            if ((rng.value !== max_rng) && (rng.value !== min_rng)) {

               let minRng = min_rng;
               let dividePlus = 0;

                for (i = 0; i <= (max_rng-min_rng); i++, dividePlus = dividePlus + 19.5) {

                    let range = minRng++

                    let obj = {i, dividePlus, range}

                    if (obj.range == rng.value) {

                        div.style.width = obj.dividePlus+'%';

                        console.log("obj.dividePlus",obj.dividePlus)
                    }

                    console.log(obj)
                }
            }
        }
}