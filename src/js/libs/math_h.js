function resize_height() {
    let max_col_height = 527; // максимальная высота, первоначально 0
    let max_col_width = 0;
    let columns = document.getElementsByClassName("column"); // получаем массив колонок (всех элементов класса column)


    for (let i = 0; i <= columns.length - 1; i++) {

        if (columns[i].offsetHeight > max_col_height) {

            max_col_height = columns[i].offsetHeight;
        }
    }

    if (columns.length > 0) {

        max_col_width = columns[0].offsetWidth;

    }

    for (let i = 0; i <= columns.length - 1; i++) {
        columns[i].style.height = max_col_height + "px"; // устанавливаем высоту каждой колонки равной максимальной

        if (i >= columns.length - 2) {
            columns[i].style.width = max_col_width + "px";
            columns[i].classList.remove('flex-grow');
        }

    }
}


window.onload = function() {

   setTimeout(resize_height, 500)

}

window.addEventListener("resize", function() {

    let columns = document.getElementsByClassName("column");
    for (let column of columns) {
        column.style.height =  "";
    }

    setTimeout(resize_height,500)

});




// var max_col_height = 0; // максимальная высота, первоначально 0
// var columns = document.getElementsByClassName("column"); // получаем массив колонок (всех элементов класса column)
// for (var i = columns.length - 1; i >= 0; i--) { // прокручиваем каждую колонку в цикле
//     if( columns[i].offsetHeight > max_col_height ) {
//         max_col_height = columns[i].offsetHeight; // устанавливаем новое значение максимальной высоты
//     }
// }
// for (var i = columns.length - 1; i >= 0; i--) {
//     columns[i].style.height = max_col_height; // устанавливаем высоту каждой колонки равной максимальной
// }