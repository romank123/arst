//Загрузка dom
document.addEventListener('DOMContentLoaded', function () {
        getMassa();
        massaActive();
        RezhimActive();
        getValue();
        wideTrack();
        getDopEq();
        getRezhim();
        getDate_first();
        getDate_second();
        getCount();
        total.getTarif();
    },
    false);

//Функция активация массы
function massaActive() {

    document.querySelector('.push-button.activated').click();
    getWidth.max = 5;
    console.log("99999999999",getWidth.max);
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

                            console.log("getWidth.max",getWidth.max)
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
                        //console.log("аттрибут selectValueRezhim", activeButtonAttr);
                        total.rezhim = Number.parseFloat(activeButtonAttr);

                        console.log("total.rezhim",total.rezhim);

                        if (total.rezhim == 16) {
                            total.hours = 2;
                        } else {
                            total.hours = 1;
                        }
                        total.getTarif();
                    }
                }
            });
        }
    }
}

//функция получения параметров даты
function getDate_first() {

    let input = document.getElementById("datepicker");
    total.date_first = input.value;
    console.log(input.value);

    input.addEventListener('click', function () {

        let first_date = document.getElementById("calendar_first");
        total.date_first = first_date;
        total.getTarif();
        first_date.addEventListener('click', function () {
            sleep(200).then(() => {
                let input = document.getElementById("datepicker").value;
                //let dateEntered = new Date(input);
                //console.log(input);
                total.date_first = input;

                total.getTarif();
                //console.log(dateEntered);
            });
        });
    });
}

//функция получения параметров даты 2
function getDate_second() {

    let input_2 = document.getElementById("datepicker_2");
    total.date_last = input_2.value;

    input_2.addEventListener('click', function () {

        let second_date = document.getElementById("calendar_second");
        second_date.addEventListener('click', function () {
            sleep(200).then(() => {
                let input = document.getElementById("datepicker_2").value;
                //let dateEntered = new Date(input);
                //console.log("second", input);
                total.date_last = input;
                total.getTarif();
                //console.log(dateEntered);
            });
        });
    });
}

//функция получения параметров кол-во техники
function getCount(){

    let count =  document.getElementById('custom-input-number').value;
    console.log("count-",count)

    document.getElementById('increment').addEventListener('click', function () {

        let count = document.getElementById('custom-input-number').value;
        countNum = Number.parseFloat(count);
        total.count = countNum;
        total.getTarif();

    })

    document.getElementById('decrement').addEventListener('click', function () {

        let count = document.getElementById('custom-input-number').value;
        countNum = Number.parseFloat(count);
        total.count = countNum;
        total.getTarif();

    })

    console.log(count)


}


let getWidth = {max:8
}

let total = {
    massa: 0,
    value: 0,
    wide: 0,
    dopEquip: 0,
    rezhim: 8,
    date_first: 0,
    date_last: 0,
    summ_day: 0,
    days: 1,
    hours: 1,
    count: 1,
    getTarif: function () {

        let a = moment(total.date_first,"DD.MM.YYYY");
        let b = moment(total.date_last,"DD.MM.YYYY").add(1,"day");

        let days = b.diff(a, 'days');

       // if (days == 1) {


       // }

        //if (days > 2) {
        //    days = days+1;
        //}

        if ((days==0) || (isNaN(days)) || (days<0)) {
            days = 1;
        }

        let getTarif = (total.massa + total.value + total.wide + total.dopEquip)
        let hours = 8 * total.hours;
        let hoursDays = hours * days
        let totalCost = getTarif * total.rezhim * days * total.count;

        console.log("first date", total.date_first)
        console.log("last date", total.date_last)



        console.log("a", a)


        console.log("days",days)
        console.log("hours",total.hours)

        document.getElementById("tarif").innerHTML = getTarif;
        document.getElementById("hours").innerHTML = hoursDays;
        document.getElementById("totalCost").innerHTML = totalCost + " р";
    }
}