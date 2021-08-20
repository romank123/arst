//Total object
let total = {a:0, b:0, date_first:0, date_last:0, rezhim:[{}], dopItems: {}, selected:[{}],  getTarif:function(){

//Получаем значение тарифа
        for (let key in total.selected) {
            getTarif = parseInt(total.selected[key]);
        }

//Получаем значение доп оборудования
        let getDopItems = 0;
        for (let key in total.dopItems) {
            getDopItems += parseInt(total.dopItems[key]);
        }
//Колличество техники
        //значение колличества техники
        let countTech = document.getElementById('custom-input-number').value;
        total.count = countTech;

        //Проверка кол-ва техники на < 1
        let  countTech2 = document.getElementById('custom-input-number').value;
        console.log("countTech2countTech2",countTech2)
        if (countTech2 == 1) {
            btnIncr =  document.getElementById('decrement');
            btnIncr.setAttribute('disabled', true);
        } else {
            btnIncr.removeAttribute('disabled');
        }

        let count = total.count;

        //расчет даты
            console.log("start getDatre");
            let a = moment(total.date_first,"DD.MM.YYYY");
            console.log("a",a);
            let b = moment(total.date_last,"DD.MM.YYYY").add(1,"days");
            //кол-во дней
            let days = b.diff(a, 'days');
            console.log("кол-во дней",days)

        //определить последнюю цифру в кол-ве дней
            let daysOf = days;
            daysOf = daysOf % 10;
            if (daysOf == 1) {
                document.getElementById("daysOf").innerText = 'день';
            } else {
                if ((daysOf == 2) || (daysOf == 3) || (daysOf == 4)) {
                document.getElementById("daysOf").innerText = 'дня';
            } else {
                    document.getElementById("daysOf").innerText = 'дней';
                }

            }
        let daysOf1 = days;
        daysOf1 = daysOf1 % 10;
        if (daysOf1 == 1) {
            document.getElementById("daysOf").innerText = 'день';
        } else {
            if ((daysOf1 == 2) || (daysOf1 == 3) || (daysOf1 == 4)) {
                document.getElementById("daysOf1").innerText = 'дня';
            } else {
                document.getElementById("daysOf1").innerText = 'дней';
            }

        }
            console.log("daysOf",daysOf)
        //Получаем значение режима (одна смена, две смены)
        let getRezhim = 0;
        for (let key in total.rezhim) {
            getRezhim = parseInt(total.rezhim[key]);
        }
        //кол-во часов
            ColHours = getRezhim;
            console.log("ColHours",ColHours)
        //Общая формула

        totalCost = ((getTarif + getDopItems)  * getRezhim*count)*days;

        //Проверка округления итого без НДС до целого
        totalCostWo = parseFloat(totalCost/1.2).toFixed(0);
        let totalCostWo1 = totalCostWo
        totalCostWo1 = totalCostWo1 % 10;
        if (totalCostWo1 !== 0) {

            totalCostWo = (parseFloat((parseFloat(totalCost/1.2).toFixed(0))/10).toFixed(0))*10;

           // totalCostWo = parseFloat(totalCost/1.2).toFixed(0);
        }

        //Проверка округления до целого цены без НДС
        ndsCost = parseFloat((getTarif+getDopItems) - (parseFloat((getTarif+getDopItems)/1.2).toFixed(2))).toFixed(2);


        console.log("ndsCost",ndsCost)
        let ndsCost1 = ndsCost
        ndsCost1 = ndsCost1 % 10;
        if (ndsCost1 == 0) {
            ndsCost = parseFloat((getTarif+getDopItems) - (parseFloat((getTarif+getDopItems)/1.2).toFixed(2))).toFixed(0);
        }

        document.getElementById("tarif").innerHTML = getTarif+getDopItems;
        document.getElementById("tarifWo").innerHTML = parseFloat((getTarif+getDopItems)/1.2).toFixed(2);
        document.getElementById("nds").innerHTML = ndsCost;
        document.getElementById("hours").innerHTML = ColHours;
        document.getElementById("hours1").innerHTML = ColHours;
        document.getElementById("days").innerHTML = days;
        document.getElementById("days1").innerHTML = days;
        document.getElementById("totalCost").innerHTML = totalCost + " руб";
        document.getElementById("totalCostWo").innerHTML = totalCostWo + " руб";
    }
}



//нажимаем на кнопки режим и масса (делаем по умолчанию)
let activeBtn = document.querySelectorAll('.activated');
if (activeBtn) {
    activeBtn.forEach((elem) => {
        setTimeout(click, 300, elem);

        function click(elem) {
            elem.click();
            getClassBtn();
        }
    })
}

//обработка кнопок из запроса ajax
function getClassBtn(isLoad = false){

    let allBtnClass = document.querySelectorAll('.-mt-48 button');

    allBtnClass.forEach((elem)=>{
        elem.addEventListener('click',()=>{

            let selected = elem.parentNode;

            if (selected.classList.contains('selected-1')) {

                    if (elem.classList.contains('activated')) {

                        let btnActiveMassa = document.querySelectorAll('#massa button')
                        console.log("#massa button")
                        for (i=0; i<btnActiveMassa.length;i++) {
                            if (btnActiveMassa[i].classList.contains('activated')) {
                                if (!isLoad) {
                                    loadparams( btnActiveMassa[i].getAttribute('data-id'))
                                }
                                if (btnActiveMassa[i].hasAttribute('data-button')) {
                                             let elemName = btnActiveMassa[i].innerHTML;
                                             total.selected[elemName] = btnActiveMassa[i].getAttribute('data-button');

                                             console.log("total-111",total)
                                         } else {  }
                            } else {
                                let elemName = btnActiveMassa[i].innerHTML;
                                delete total.selected[elemName];
                                //console.log("total-222",total)
                            }
                        }

                        let btnActiveRezhim = document.querySelectorAll('.rezhim button')
                        for (i=0; i<btnActiveRezhim.length;i++) {
                            if (btnActiveRezhim[i].classList.contains('activated')) {
                                if (btnActiveRezhim[i].hasAttribute('data-button')) {
                                    let elemName = btnActiveRezhim[i].innerHTML;
                                    total.rezhim[elemName] = btnActiveRezhim[i].getAttribute('data-button');
                                    //console.log("total-111",total)
                                } else {  }
                            } else {
                                let elemName = btnActiveRezhim[i].innerHTML;
                                delete total.rezhim[elemName];
                                //console.log("total-222",total)
                            }
                        }
                        total.getTarif();
                    }

            } else {

                if (elem.hasAttribute('data-action')){

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
                }

                total.getTarif();
                console.log("total",total)
            }
        })
    })

    }

//функция получения параметров даты
//Объявить пикер1
if (document.getElementById('datepicker')) {
    let datepicker = new Datepicker('#datepicker', {
        // min today
        min: (function () {
            let date = new Date();
            let today = date.setDate(date.getDate() - 1);
            return today;
        })(),
        openOn: "today",
        weekStart: 0,
        onChange: function (date) {
            let NowMoment = moment(date);
            total.date_first = NowMoment.format('DD.MM.YYYY');
            total.date_last = moment(total.date_first, "DD.MM.YYYY").add(1, "month").format('DD.MM.YYYY');

            setTimeout(function (date) {
                eDisplayMoment = document.getElementById('datepicker_2');
                eDisplayMoment.value = total.date_last;
            },)

            total.getTarif()

        },
        onInit: function () {
            let date = new Date();
            let NowMoment = moment(date);
            let today = NowMoment.format('DD.MM.YYYY');
            eDisplayMoment = document.getElementById('datepicker');
            eDisplayMoment.value = today;
            console.log("init")
        },
    });

//Объявить пикер2
    let datepicker_2 = new Datepicker('#datepicker_2', {
        // min +30d
        min: (function () {
            var date = new Date();
            date.setDate(date.getDate());
            let today = date.setDate(date.getDate() + 30);
            console.log(Date(today));
            return date;
        })(),
        onInit: function () {
            let today = total.date_first;
            eDisplayMoment = document.getElementById('datepicker_2');
            eDisplayMoment.value = moment(today, "DD.MM.YYYY").add(1, "month").format('DD.MM.YYYY');
            total.date_last = eDisplayMoment.value;
        },
        onChange: function (date) {
            total.date_last = date;
            total.getTarif()
        },

    })
}

//проверка нажатой кнопки массы от 5т до 9т для range slider
// let btnMassa = document.querySelectorAll('#massa .push-button')
// let rng = document.getElementById('r1');
//
// if ((btnMassa) && (rng)) {
//
//     btnMassa.forEach((elem) => {
//
//         elem.addEventListener('click', () => {
//
//             if (elem.hasAttribute('data-id')) {
//
//                 let rangeSlider = document.getElementById('r1');
//                 rangeSlider.setAttribute('max', 5);
//
//                 let rangeValueMax = document.getElementById('rangeValueMax');
//                 rangeValueMax.innerText = 'до 5м'
//                 fun1()
//
//
//             } else {
//                 let rangeSlider = document.getElementById('r1');
//                 rangeSlider.setAttribute('max', 8);
//
//                 let rangeValueMax = document.getElementById('rangeValueMax');
//                 rangeValueMax.innerText = 'до 8м'
//                 fun1()
//             }
//
//
//         })
//     })
// }

//range slider
function fun1() {
    let rng = document.getElementById('r1'); //rng - это Input
    if (rng) {
        let div = document.getElementById('test'); // div - блок test
        let max_rng = rng.getAttribute('max');
        let min_rng = rng.getAttribute('min');
        let step_rng = rng.getAttribute('step');
        let valueObj = document.getElementsByClassName('value_obj');

        valueObj[0].innerHTML = rng.value + 'м';

        console.log("rng.value++", rng.value)

        let divide = 100 / (max_rng - min_rng);

        if (rng.value !== undefined) {

            if (rng.value == min_rng) {
                console.log("start value min")
                div.style.width = 0 + '%';
            }

            if (rng.value == max_rng) {
                console.log("start value max")
                div.style.width = 97 + '%';
            }

            if ((rng.value !== max_rng) && (rng.value !== min_rng)) {

                let minRng = min_rng;
                let dividePlus = 0;

                for (i = 0; i <= (max_rng - min_rng); i++, dividePlus = dividePlus + (divide-0.5)) {

                    let range = minRng++

                    let obj = {i, dividePlus, range}

                    if (obj.range == rng.value) {

                        div.style.width = obj.dividePlus + '%';

                        console.log("obj.dividePlus", obj.dividePlus)
                    }

                    console.log(obj)
                }
            }
        }
    }
}
//fun1();


