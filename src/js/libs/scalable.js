document.addEventListener("DOMContentLoaded", function(){

    resize_viewport ();

    function resize_viewport (){

        let view = document.getElementById('view');

        if (screen.width < 414) {

            view.setAttribute('content', 'width=320');

        } else {

            view.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }

    }

    window.addEventListener(`resize`, () => {

        resize_viewport ();


    });
});



