//табы с ндс без ндс
const tabs = document.getElementsByClassName('tab');
const sections = document.getElementsByClassName('section-tabs');

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));

function tabClick(event) {
    const tabId = event.target.dataset.id;

    [...tabs].forEach((tab, i) => {
        tab.classList.remove('active');
        sections[i].classList.remove('active');
    })

    tabs[tabId - 1].classList.add('active');
    sections[tabId - 1].classList.add('active');
}
let tbtext = document.getElementsByClassName('tablebodytext')[0];
tbtext.style.display = 'none';

//маска ввода телефона
[].forEach.call( document.querySelectorAll('input[name="tel"]'), function() {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    document.querySelectorAll('input[name="tel"]').addEventListener("input", mask, false);
});
//# sourceMappingURL=../sourcemaps/main.min.js.map


