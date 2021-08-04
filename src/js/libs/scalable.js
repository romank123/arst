window.onload = function() {

    window.addEventListener(`resize`, event => {

        if (screen.width < 414) {
            var view = document.getElementById('view');
            view.setAttribute('content', 'width=320');

        } else {

            var view = document.getElementById('view');
            view.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
};


