document.addEventListener("DOMContentLoaded", function(event) {

    window.addEventListener(`resize`, event => {

        if (screen.width < 414) {
            var view = document.getElementById('view');
            view.setAttribute('content', 'width=320');

        } else {

            var view = document.getElementById('view');
            view.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
});

//
// document.addEventListener("DOMContentLoaded", function(event)
// {
//     window.onresize = function() {
//         resize_info();
//     };
// });
//
// function resize_info()
// {
//     // resize data
// }


