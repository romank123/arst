document.addEventListener("DOMContentLoaded", (function () {
}));
let setCheck, myRadios = document.getElementsByName("tabs2");
for (let t = 0; t < myRadios.length; t++) myRadios[t].onclick = t => {
    setCheck !== t.target ? setCheck = t.target : (t.target.checked = !1, setCheck = null)
};
document.querySelector(".burger").addEventListener("click", (function () {
    document.querySelector(".burger span").classList.toggle("active"), document.querySelector(".menu_mob").classList.toggle("animate")
}));
let total = {
    a: 0, b: 0, date_first: 0, date_last: 0, rezhim: [{}], dopItems: {}, selected: [{}], getTarif: function () {
        for (let t in total.selected) getTarif = parseInt(total.selected[t]);
        let t = 0;
        for (let e in total.dopItems) t += parseInt(total.dopItems[e]);
        let e = document.getElementById("custom-input-number");
        if (e) {
            total.count = e.value, 1 == document.getElementById("custom-input-number").value ? (btnIncr = document.getElementById("decrement"), btnIncr.setAttribute("disabled", !0)) : btnIncr.removeAttribute("disabled")
        }
        let n = total.count, a = moment(total.date_first, "DD.MM.YYYY"),
            s = moment(total.date_last, "DD.MM.YYYY").add(1, "days").diff(a, "days");
        if (document.getElementById("daysOf")) {
            let e = s;
            e %= 10, document.getElementById("daysOf").innerText = 1 == e ? "день" : 2 == e || 3 == e || 4 == e ? "дня" : "дней";
            let a = s;
            a %= 10, 1 == a ? document.getElementById("daysOf").innerText = "день" : document.getElementById("daysOf1").innerText = 2 == a || 3 == a || 4 == a ? "дня" : "дней";
            let i = 0;
            for (let t in total.rezhim) i = parseInt(total.rezhim[t]);
            ColHours = i, totalCost = (getTarif + t) * i * n * s, totalCostWo = parseFloat(totalCost / 1.2).toFixed(0);
            let o = totalCostWo;
            o %= 10, ndsCost = parseFloat(getTarif + t - parseFloat((getTarif + t) / 1.2).toFixed(2)).toFixed(2);
            let l = ndsCost;
            l %= 10, 0 == l && (ndsCost = parseFloat(getTarif + t - parseFloat((getTarif + t) / 1.2).toFixed(2)).toFixed(0));
            let r = 10 * Math.ceil(parseFloat((getTarif + t) / 1.2).toFixed(0) / 10);
            totalCostWo = r * i * n * s, document.getElementById("tarif").innerHTML = Intl.NumberFormat("ru-RU").format(getTarif + t), document.getElementById("tarifWo").innerHTML = Intl.NumberFormat("ru-RU").format(r), document.getElementById("nds").innerHTML = ndsCost, document.getElementById("hours").innerHTML = ColHours / 10 * s, document.getElementById("hoursS").innerHTML = ColHours * s, document.getElementById("hours_1").innerHTML = ColHours * s, document.getElementById("hours1").innerHTML = ColHours / 10 * s, document.getElementById("days").innerHTML = s, document.getElementById("days1").innerHTML = s, document.getElementById("totalCost").innerHTML = Intl.NumberFormat("ru-RU").format(totalCost) + " руб", document.getElementById("totalCostWo").innerHTML = Intl.NumberFormat("ru-RU").format(totalCostWo) + " руб"
        }
    }
}, activeBtn = document.querySelectorAll("#massa .activated")[0];

function start() {
    let t = document.querySelectorAll("#massa .activated")[0];
    t && t.click();
    let e = document.querySelectorAll("#rezhim .activated")[0];
    e && e.click()
}

activeBtn && (activeBtn.classList.add("not-shadow-mass-button"), loadparams(activeBtn.getAttribute("data-id")).then(start));
let activeBtn1 = document.querySelectorAll("#massa button");

function getClassBtn(t = !1) {
    document.querySelectorAll(".-mt-48 button").forEach(t => {
        t.addEventListener("click", () => {
            if (t.parentNode.classList.contains("selected-1")) {
                if (t.classList.contains("activated")) {
                    let t = document.querySelectorAll("#massa button");
                    for (let e = 0; e < t.length; e++) if (t[e].classList.contains("activated")) {
                        if (t[e].hasAttribute("data-button")) {
                            let n = t[e].innerHTML;
                            total.selected[n] = t[e].getAttribute("data-button")
                        }
                    } else {
                        let n = t[e].innerHTML;
                        delete total.selected[n]
                    }
                    let e = document.querySelectorAll(".rezhim button");
                    for (i = 0; i < e.length; i++) if (e[i].classList.contains("activated")) {
                        if (e[i].hasAttribute("data-button")) {
                            let t = e[i].innerHTML;
                            total.rezhim[t] = e[i].getAttribute("data-button")
                        }
                    } else {
                        let t = e[i].innerHTML;
                        delete total.rezhim[t]
                    }
                    total.getTarif()
                }
            } else {
                if (t.hasAttribute("data-action")) ; else {
                    if (t.parentNode.parentNode.parentNode.querySelectorAll(".selected-2 button").forEach(t => {
                        t.addEventListener("click", () => {
                            let e = t.parentNode.querySelectorAll("button");
                            for (let t = 0; t < e.length; t++) e[t].classList.remove("activated", "not-shadow-mass-button");
                            t.classList.add("activated", "not-shadow-mass-button")
                        })
                    }), t.classList.toggle("activated"), t.classList.toggle("not-shadow-mass-button"), t.classList.contains("activated")) {
                        if (t.hasAttribute("data-value")) {
                            let e = t.innerHTML;
                            total.dopItems[e] = t.getAttribute("data-value")
                        }
                    } else {
                        let e = t.innerHTML;
                        delete total.dopItems[e]
                    }
                }
                total.getTarif()
            }
        })
    })
}

activeBtn1.forEach(t => {
    t.addEventListener("click", () => {
        loadparams(t.getAttribute("data-id")), console.log("getAttribute", t.getAttribute("data-id"))
    })
});
let dp1, dp2, date_1, m = {dateFirst: 0, dateLast: 0};

function fun1() {
    let t = document.getElementById("myinput");
    if (t) {
        let n = document.querySelector(".bubble"), a = t.min, s = t.max, i = t.value;

        function e(t, e) {
            const n = t.value, a = t.min ? t.min : 0, s = t.max ? t.max : 100, i = Number(100 * (n - a) / (s - a));
            e.innerHTML = n, e.style.left = `calc(${i}% + (${12 - .19 * i}px))`
        }

        t.style.background = `linear-gradient(to right, #999999 0%, #999999 ${(i - a) / (s - a) * 100}%, #f5f5f5 ${(i - a) / (s - a) * 100}%, #f5f5f5 100%)`, t.oninput = function () {
            this.style.background = `linear-gradient(to right, #999999 0%, #999999 ${(this.value - this.min) / (this.max - this.min) * 100}%, #f5f5f5 ${(this.value - this.min) / (this.max - this.min) * 100}%, #f5f5f5 100%)`
        }, t.addEventListener("input", () => {
            e(t, n)
        }), e(t, n)
    }
}

async function loadparams(t) {
    let e = await fetch("/catalog/detail/get.php?ID=" + t, {method: "GET"});
    if (e.ok) {
        let t = await e.json();
        console.log("result", t), document.getElementsByClassName("load")[0].innerHTML = "";
        for (let e of t) if ("params_select" === e.IBLOCK_CODE) {
            "no" == e.PROPERTIES.mass.VALUE_XML_ID ? (console.log("contain no"), console.log(e.PROPERTIES.mass)) : (console.log(e.PROPERTIES.mass), console.log("contain yes value"));
            let t = `<div class="dop-items ${"no" == e.PROPERTIES.mass.VALUE_XML_ID ? "selected-2" : ""} flex flex-col p-7 md:p-0 w-full"><span class="font-MontserratMedium text-base my-5 md:mt-10 mt-5">${e.PROPERTIES.title.VALUE}</span><div class="grid grid-cols-1 md:grid-cols-2 gap-5 ${"no" == e.PROPERTIES.mass.VALUE_XML_ID ? "selected-2" : ""}">`;
            for (let n = 0; n < e.PROPERTIES.params.VALUE.length; n++) t += `<button class="font-MontserratRegular text-brownish-grey push-button" data-value="${e.PROPERTIES.price.VALUE[n]}">${e.PROPERTIES.params.VALUE[n]}</button>`;
            t += "</div></div>", document.getElementsByClassName("load")[0].insertAdjacentHTML("beforeend", t)
        } else if ("params_input" === e.IBLOCK_CODE) {
            let t = `<div class="value flex flex-col p-7 md:p-0 w-full"><span class="font-MontserratMedium text-base my-5 md:mt-10 mt-5">${e.PROPERTIES.title.VALUE}</span><div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5"><input type="text"\n                                   class="col-span-2 rounded-xl px-4 py-3 focus:outline-none bg-grey w-full"\n                                   placeholder="Введите параметр"/>\n                            <div class="flex lg:flex-col flex-wrap  lg:justify-center items-center w-full font-MontserratRegular text-sm text-brownish-grey">\n                                ${e.PREVIEW_TEXT}\n                            </div>\n                        </div>\n                    </div>`;
            document.getElementsByClassName("load")[0].insertAdjacentHTML("beforeend", t)
        } else if ("params_range" === e.IBLOCK_CODE) {
            let t = `\n<div class="flex param-range flex-col px-7 md:px-0 lg:px-0">\n\n\n\n                        <span class="font-MontserratMedium text-base my-5 mt-10">${e.PROPERTIES.title.VALUE}</span>\n                        \n                        <div class="wrapper__range my-5">\n                        <input\n                          id="myinput"\n                          class="myinput"\n                          type="range"\n                          step="${e.PROPERTIES.step.VALUE}"\n                          min="${e.PROPERTIES.min.VALUE}"\n                          value="${parseInt(e.PROPERTIES.min.VALUE) + parseInt(e.PROPERTIES.step.VALUE)}"\n                          max="${e.PROPERTIES.max.VALUE}"\n                        />\n                        <output class="bubble"></output>\n                        <div class="range__value">\n                          <span id="valueMin">от ${e.PROPERTIES.min.VALUE}м</span>\n                          <span id="valueMax">до ${e.PROPERTIES.max.VALUE}м</span>\n                        </div>\n                      </div>     \n                        \n                    </div>\n`;
            document.getElementsByClassName("load")[0].insertAdjacentHTML("beforeend", t)
        }
    }
    getClassBtn(!0), setTimeout(fun1(), 200)
}

function resize_height() {
    let t = 527, e = 0, n = document.getElementsByClassName("column");
    for (let e = 0; e <= n.length - 1; e++) n[e].offsetHeight > t && (t = n[e].offsetHeight);
    n.length > 0 && (e = n[0].offsetWidth);
    for (let a = 0; a <= n.length - 1; a++) n[a].style.height = t + "px", a >= n.length - 2 && (n[a].style.width = e + "px", n[a].classList.remove("flex-grow"))
}

dp2 = new Datepicker("#datepicker_2", {
    min: function () {
        var t = new Date;
        return t.setDate(t.getDate() + 28), t
    }(), fromValue: function () {
        var t = new Date;
        return t.setDate(t.getDate() + 29)
    }, onRender: function () {
        this.min = date_1, this.minDate = date_1, this._opts.min = date_1, this._opts.minDate = date_1
    }, onChange: function (t) {
        total.date_last = t, total.getTarif()
    }
}), dp1 = new Datepicker("#datepicker", {
    min: function () {
        var t = new Date;
        return t.setDate(t.getDate() - 1), t
    }(), fromValue: function () {
        var t = new Date;
        return t.setDate(t.getDate())
    }, onInit: function () {
        m.dateFirst = new Date;
        let t = new Date(m.dateFirst);
        return t.setDate(t.getDate() + 29), m.dateFirst
    }, onChange: function (t) {
        m.dateFirst = t;
        let e = new Date(m.dateFirst);
        e.setDate(e.getDate() + 29), date_1 = e, dp2.render(), dp2.getDate() <= e && (dp2.setDate(e), total.date_last = date_1), total.date_first = m.dateFirst, total.getTarif()
    }
}), window.onload = function () {
    setTimeout(resize_height, 500)
}, window.addEventListener("resize", (function () {
    let t = document.getElementsByClassName("column");
    for (let e of t) e.style.height = "";
    setTimeout(resize_height, 500)
}));
let modal = document.getElementById("myModal"), btn = document.getElementsByClassName("myBtn-open"),
    close = document.getElementsByClassName("close-btn")[0];
for (let t of btn) t.onclick = () => {
    modal.style.display = "block"
};

function toggleW() {
    let t = document.getElementById("woNds");
    if (t) {
        function e(t, e) {
            t.style.visibility = e
        }

        function n(t) {
            var e = document.getElementById(t);
            return "none" == e.style.display ? (e.style.visibility = "hidden", e.style.display = "block", dh = e.clientHeight, dh = e.clientHeight || e.offsetHeight + 5, e.style.display = "none", e.style.visibility = "visible") : dh = e.clientHeight || e.offsetHeight + 5, dh
        }

        t.addEventListener("click", (function () {
            var t = document.getElementById("block"), a = n("block"), s = t.getElementsByTagName("*");
            if ("none" == t.style.display) {
                for (var i = 0; i < s.length; i++) e(s[i], "hidden");
                t.style.height = "1px", t.style.display = "flex", t.style.paddingTop = "1.25rem", t.style.justifyContent = "flex-between";
                for (i = 0; i <= 105; i += 5) !function () {
                    var e = i;
                    setTimeout((function () {
                        t.style.height = e / 100 * a + 1 + "px"
                    }), 2 * e)
                }();
                return setTimeout((function () {
                    for (var t = 0; t < s.length; t++) s[t].style.visibility = "visible"
                }), 200), !0
            }
            var o = a - 1 + "px";
            for (i = 0; i < s.length; i++) e(s[i], "hidden");
            for (i = 100; i >= 0; i -= 5) !function () {
                var e = i;
                setTimeout((function () {
                    t.style.height = e / 100 * a + "px", e <= 0 && (t.style.display = "none", t.style.height = o)
                }), 200 - 2 * e)
            }();
            return !0
        }))
    }
}

function decrement(t) {
    const e = t.target.parentNode.parentElement.querySelector('button[data-action="decrement"]').nextElementSibling;
    let n = Number(e.value);
    n--, e.value = n, n < 0 && (e.value = 0)
}

function increment(t) {
    const e = t.target.parentNode.parentElement.querySelector('button[data-action="decrement"]').nextElementSibling;
    let n = Number(e.value);
    n++, e.value = n
}

close.onclick = function () {
    modal.style.display = "none"
}, document.addEventListener("keydown", (function (t) {
    if ("Escape" === t.key) {
        document.getElementById("myModal").style.display = "none"
    }
})), window.onclick = function (t) {
    t.target === modal && (modal.style.display = "none")
}, document.addEventListener("DOMContentLoaded", (function () {
    function t() {
        let t = document.getElementById("view");
        screen.width < 414 ? t.setAttribute("content", "width=414, user-scalable=no") : t.setAttribute("content", "width=device-width, initial-scale=1.0, user-scalable=no")
    }

    t(), window.addEventListener("resize", () => {
        t()
    })
})), toggleW();
const decrementButtons = document.querySelectorAll('button[data-action="decrement"]'),
    incrementButtons = document.querySelectorAll('button[data-action="increment"]');
decrementButtons.forEach(t => {
    t.addEventListener("click", decrement)
}), incrementButtons.forEach(t => {
    t.addEventListener("click", increment)
});
const MONTH_NAMES = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    MONTH_SHORT_NAMES = ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Август", "Сент", "Октябрь", "Ноябрь", "Декабрь"],
    DAYS = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

function app() {
    return {
        showDatepicker: !1,
        datepickerValue: "",
        selectedDate: new Date,
        dateFormat: "DD-MM-YYYY",
        month: "",
        year: "",
        no_of_days: [],
        blankdays: [],
        initDate() {
            let t;
            t = this.selectedDate ? new Date(Date.parse(this.selectedDate)) : new Date, this.month = t.getMonth(), this.year = t.getFullYear(), this.datepickerValue = this.formatDateForDisplay(t)
        },
        formatDateForDisplay(t) {
            let e = DAYS[t.getDay()], n = ("0" + t.getDate()).slice(-2), a = MONTH_NAMES[t.getMonth()],
                s = MONTH_SHORT_NAMES[t.getMonth()], i = ("0" + (parseInt(t.getMonth()) + 1)).slice(-2),
                o = t.getFullYear();
            return "DD-MM-YYYY" === this.dateFormat ? `${n}.${i}.${o}` : "YYYY-MM-DD" === this.dateFormat ? `${o}-${i}-${n}` : "D d M, Y" === this.dateFormat ? `${e} ${n} ${s} ${o}` : `${e} ${n} ${a} ${o}`
        },
        isSelectedDate(t) {
            const e = new Date(this.year, this.month, t);
            return this.datepickerValue === this.formatDateForDisplay(e)
        },
        isToday(t) {
            const e = new Date, n = new Date(this.year, this.month, t);
            return e.toDateString() === n.toDateString()
        },
        getDateValue(t) {
            let e = new Date(this.year, this.month, t);
            this.datepickerValue = this.formatDateForDisplay(e), this.isSelectedDate(t), this.showDatepicker = !1
        },
        getNoOfDays() {
            let t = new Date(this.year, this.month + 1, 0).getDate(), e = new Date(this.year, this.month).getDay(),
                n = [];
            for (let t = 1; t <= e; t++) n.push(t);
            let a = [];
            for (let e = 1; e <= t; e++) a.push(e);
            this.blankdays = n, this.no_of_days = a
        }
    }
}

function range() {
    return {
        minprice: 3, maxprice: 5, min: 3, max: getWidth.max, minthumb: 3, maxthumb: 8, mintrigger() {
            this.minprice = 3, this.minthumb = 0
        }, maxtrigger() {
            this.maxprice = Math.max(this.maxprice, this.minprice), this.maxthumb = 100 - (this.maxprice - this.min) / (this.max - this.min) * 100
        }
    }
}

function functionName(t) {
    let e = t.getElementsByClassName("push-button");
    for (let t of e) t.classList.contains("activated") && (t.classList.remove("activated"), t.classList.remove("not-shadow-mass-button"))
}

function push_btn(t) {
    t.currentTarget.parentNode.parentElement.classList.contains("selected-1") && functionName(t.currentTarget.parentNode.parentElement), this.classList.toggle("activated"), this.classList.toggle("not-shadow-mass-button")
}

let btns = document.querySelectorAll(".push-button");
btns.forEach((function (t) {
    str = 0, t.addEventListener("click", push_btn)
}));