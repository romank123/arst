//Загрузка dom
document.addEventListener('DOMContentLoaded', function () {
        // massaActive();
    },
    false);

//Функция активация массы
// function massaActive() {
//     document.querySelector('.push-button.activated').click();
// }

//Функция задержки на выполнение пересчета тарифа
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//Функция вывода тарифа в стоимости
// function refactorPrice() {
//
//     console.log("Значение activeButtonAttr", activeButtonAttr)
//     var min = 1500;
//
//     summTarif = Math.round(min * activeButtonAttr);
//
//     console.log("summTarif", summTarif)
//
//     document.getElementById("tarif").innerHTML = summTarif;
//
// }

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

                    }
                }
            });
        }
    }
}

//getMassa();

//функция взять значение объема ковша
// function getValueDef() {
//     document.getElementById('value');
//     let value = this.value;
//     valueNum = Number.parseFloat(value);
//     if ((valueNum >= 0.15) && (valueNum <= 1)) {
//         koefVal = 0;
//     } else {
//         if ((valueNum > 1) && (valueNum <= 2)) {
//             koefVal = 100;
//         } else {
//             if ((valueNum > 2) && (valueNum <= 3)) {
//                 koefVal = 100;
//             } else {
//                 if ((valueNum > 3) && (valueNum <= 4)) {
//                     koefVal = 100;
//                 }
//             }
//         }
//     }
// }

//функция расчета объема ковша
function getValue() {

    document.getElementById('value').addEventListener('input', function () {

        let value = this.value;
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

        console.log("объем ковша", valueNum)
        console.log("коэффициент koefVal", koefVal)
        refactorPrice(koefVal);

    })

}

//getValue();


// при вызове на место формального параметра func будет
// подставлен фактический аргумент-функция sun
//end определяем активный аттрибут нажатой кнопки в разделе масса
/////////////
function refactorPrice(activeButtonAttr, koefVal) {

    console.log("refactorPrice_ab", activeButtonAttr);
    console.log("refactorPrice_k", koefVal);

};


//console.log(selectValueMassa());
/////////////



