 function toggleW(){



    let btnNds = document.getElementById('woNds');
if (btnNds) {
    btnNds.addEventListener('click', function toggle() {

        let id = "block";

        var e = document.getElementById(id);
        var dh = gh(id);
        var elems = e.getElementsByTagName('*');

        if (e.style.display == "none") {
            for (var i = 0; i < elems.length; i++) {
                vhe(elems[i], "hidden");
            }

            e.style.height = "1px";
            e.style.display = "flex";
            e.style.paddingTop = "1.25rem";
            e.style.justifyContent = "flex-between";
            for (var i = 0; i <= 105; i += 5) {
                (function () {
                        var pos = i;
                        setTimeout(function () {
                            e.style.height = (pos / 100) * dh + 1 + "px";
                        }, pos * 2);

                    }
                )();

            }
            setTimeout(function () {
                for (var i = 0; i < elems.length; i++) {
                    elems[i].style.visibility = "visible";
                }
            }, 200);
            return true;
        } else {
            var lh = dh - 1 + "px";

            for (var i = 0; i < elems.length; i++) {
                vhe(elems[i], "hidden");
            }

            for (var i = 100; i >= 0; i -= 5) {
                (function () {
                        var pos = i;
                        setTimeout(function () {
                            e.style.height = (pos / 100) * dh + "px";
                            if (pos <= 0) {
                                e.style.display = "none";
                                e.style.height = lh;
                            }
                        }, 200 - (pos * 2));
                    }
                )();
            }
            return true;
        }
        return false;


    });

    function vhe(obj, vh) {
        obj.style.visibility = vh;
    }

    function gh(id) {
        var e = document.getElementById(id);
        if (e.style.display == "none") {
            e.style.visibility = "hidden";
            e.style.display = "block";
            dh = e.clientHeight;
            dh = e.clientHeight || e.offsetHeight + 5; // Высота
            e.style.display = "none";
            e.style.visibility = "visible";
        } else {
            dh = e.clientHeight || e.offsetHeight + 5; // Высота
        }
        return dh;
    }
}
}

 toggleW();







