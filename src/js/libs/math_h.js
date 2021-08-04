function resize_height() {
    let max_col_height = 0; // максимальная высота, первоначально 0
    let max_col_width = 0;
    let columns = document.getElementsByClassName("column"); // получаем массив колонок (всех элементов класса column)

    console.log(max_col_height);
    console.log(columns);
    console.log(columns.length);

    for (let i = 0; i <= columns.length - 1; i++) { // прокручиваем каждую колонку в цикле

        console.log('i', i);

        if (columns[i].offsetHeight > max_col_height) {


            console.log('i++', i);
            max_col_height = columns[i].offsetHeight; // устанавливаем новое значение максимальной высоты
            console.log('max_col_height', max_col_height);

        }
    }
    max_col_width = columns[columns.length - 2].offsetWidth;
    for (let i = 0; i <= columns.length - 1; i++) {
        columns[i].style.height = max_col_height + "px"; // устанавливаем высоту каждой колонки равной максимальной

        if (i == columns.length - 1) {
            columns[i].style.width = max_col_width + "px";
            columns[i].classList.remove('flex-grow');
        }

    }
}

document.addEventListener("DOMContentLoaded", function() {

   setTimeout(resize_height, 100)

});

window.addEventListener("resize", function() {

    let columns = document.getElementsByClassName("column");
    for (let column of columns) {
        column.style.height =  "";
    }

    setTimeout(resize_height,100)

});









// document.addEventListener("DOMContentLoaded", function (event) {
//
//     resize_height();
//
// });

//
// window.addEventListener(`resize`, event => {
//
//     resize_height();
//
//
// });
//
// function resize_height() {
//     var max_col_height = 0; // максимальная высота, первоначально 0
//     var max_col_width = 0;
//     var columns = document.getElementsByClassName("column"); // получаем массив колонок (всех элементов класса column)
//
//     console.log(max_col_height);
//     console.log(columns);
//     console.log(columns.length);
//
//     for (var i = 0; i <= columns.length - 1; i++) { // прокручиваем каждую колонку в цикле
//
//         console.log('i', i);
//
//         if (columns[i].offsetHeight > max_col_height) {
//
//
//             console.log('i++', i);
//             max_col_height = columns[i].offsetHeight; // устанавливаем новое значение максимальной высоты
//             console.log('max_col_height', max_col_height);
//             max_col_width = columns[i].offsetWidth;
//
//         }
//     }
//     for (var i = 0; i <= columns.length - 1; i++) {
//         columns[i].style.height = max_col_height + "px"; // устанавливаем высоту каждой колонки равной максимальной
//
//         if (i == columns.length - 1) {
//             columns[i].style.width = max_col_width + "px";
//             columns[i].classList.remove('flex-grow');
//         }
//
//     }
//
//
//
// };

