//Total object
let total = {a:0, b:0, date_first:0, date_last:0, rezhim:[{}], dopItems: {}, selected:[{}], getTarif:function(){

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

        document.getElementById('increment').addEventListener('click', function () {
            let countTech = document.getElementById('custom-input-number').value;
            countNum = Number.parseFloat(countTech);
            total.count = countNum;

        })

        document.getElementById('decrement').addEventListener('click', function () {
            let countTech = document.getElementById('custom-input-number').value;
            countNum = Number.parseFloat(countTech);
            total.count = countNum;
        })
        let count = total.count;

        //расчет даты
            console.log("start getDatre");
            let a = moment(total.date_first,"DD.MM.YYYY");
            console.log("a",a);
            let b = moment(total.date_last,"DD.MM.YYYY");
            //кол-во дней
            let days = b.diff(a, 'days');
            console.log("кол-во дней",days)

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

        document.getElementById("tarif").innerHTML = getTarif+getDopItems;
        document.getElementById("hours").innerHTML = ColHours;
        document.getElementById("days").innerHTML = days;
        document.getElementById("totalCost").innerHTML = totalCost + " р";
    }
}

//нажимаем на кнопки режим и масса (делаем по умолчанию)
let activeBtn = document.querySelectorAll('.activated');
activeBtn.forEach((elem) => {
        setTimeout(click, 300);

        function click() {
            elem.click();
        }
    })

//обновить период аренды
push2();

//обработка кнопок из запроса ajax
function getClassBtn(){

    let allBtnClass = document.querySelectorAll('.-mt-48 button');

    allBtnClass.forEach((elem)=>{
        elem.addEventListener('click',()=>{

            let selected = elem.parentNode;

            if (selected.classList.contains('selected-1')) {

                    if (elem.classList.contains('activated')) {

                        let btnActiveMassa = document.querySelectorAll('#massa button')
                        for (i=0; i<btnActiveMassa.length;i++) {
                            if (btnActiveMassa[i].classList.contains('activated')) {
                                if (btnActiveMassa[i].hasAttribute('data-button')) {
                                             let elemName = btnActiveMassa[i].innerHTML;
                                             total.selected[elemName] = btnActiveMassa[i].getAttribute('data-button');
                                             //console.log("total-111",total)
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

//функция получения параметров даты
//Объявить пикер1
let datepicker = new Datepicker('#datepicker',{
    // min today
    min: (function(){
        var date = new Date();
        date.setDate(date.getDate());
        let today = date.setDate(date.getDate()-1);
        console.log(Date(today));
        return date;
    })(),
    openOn: "today",
    weekStart: 0,
    onChange: function (date){
        console.log("date+++",date)
    }
});

//Объявить пикер2
let datepicker2 = new Datepicker('#datepicker_2',{
    // min +30d
    min: (function(){
        var date = new Date();
        date.setDate(date.getDate());
        let today = date.setDate(date.getDate()+30);
        console.log(Date(today));
        return date;
    })(),

});

let NowMoment = moment();
let eDisplayMoment = document.getElementById('datepicker');
eDisplayMoment.value = NowMoment.format('DD.MM.YYYY');

total.date_first = eDisplayMoment.value;
console.log("total.date_first",total.date_first)

document.getElementById('datepicker').addEventListener('click', function () {
         let eDisplayMomentStart = document.getElementById('datepicker').value;
         let eDisplayMoment = document.getElementById('datepicker_2');
         eDisplayMoment.value = moment(eDisplayMomentStart,"DD.MM.YYYY").add(1,"month").format('DD.MM.YYYY');
        total.date_last = eDisplayMoment.value;

 });
document.getElementById('datepicker').addEventListener('focusout', function () {
    push2()
});

//дата для второго поля
document.getElementById('datepicker_2').addEventListener('click', function () {
    let eDisplayMomentEnd = document.getElementById('datepicker_2').value;
        total.date_last = moment(eDisplayMomentEnd,"DD.MM.YYYY").format('DD.MM.YYYY');
    //push1()
        console.log(" total.date_last", total.date_last)
});
document.getElementById('datepicker_2').addEventListener('focusout', function () {
    push1()
});

function push1(){
    setTimeout(function push(){
        let eDisplayMomentStartPush = document.getElementById('datepicker_2');
        eDisplayMomentStartPush.click();
        total.date_last = eDisplayMomentStartPush.value;
        total.getTarif();
    } , 100)

}



function push2(){
    setTimeout(function push(){
        let eDisplayMomentStartPush = document.getElementById('datepicker');
        eDisplayMomentStartPush.click();
        total.date_first = eDisplayMomentStartPush.value;

        total.getTarif();


    } , 100)

}


