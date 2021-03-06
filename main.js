!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var a = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var a in e)
                    n.d(
                        r,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 0));
})([
    function (e, t, n) {
        "use strict";
        n.r(t);
        const r = document.querySelector(".control"),
            a = document.getElementById("cityInput"),
            o = document.getElementById("warn"),
            i = document.querySelector(".icon"),
            c = document.querySelector(".weather-status"),
            s = document.querySelector(".main-temp"),
            u = document.querySelectorAll(".location>span"),
            l = document.querySelectorAll(".more-info > p"),
            m = document.getElementById("weather-forecast"),
            d = document.querySelector(".date"),
            p = document.getElementById("switchF"),
            f = document.getElementById("degrees");
        var y = (e, t = null) => {
            document.createElement("li").classList.add("city"),
                (u[0].innerHTML = e.name),
                (u[1].innerHTML = e.country),
                (d.innerHTML = new Date()),
                (s.innerHTML = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(e.temp)}??C`),
                (i.src = `https://openweathermap.org/img/wn/${e.icon}@3x.png`),
                (c.innerHTML = e.description);
            let n = !1;
            (l[0].innerHTML = `\n  <span class='b-feel'>Feels Like</span>\n  ${Math.round(e.feelsLike)}??C\n  `),
                (l[1].innerHTML = `\n  <i class='fa fa-temperature-high'></i>\n  <span class='b-feel'>Max temp</span>${Math.round(e.tempMax)}??C, <i class='fa fa-temperature-low'></i>\n  <span class='b-feel'>Min temp</span>${Math.round(
                    e.tempMin
                )}??C\n  `),
                (f.style.display = "block"),
                f.addEventListener("click", () => {
                    ((e, r, a) => {
                        const o = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(a)}??C`,
                            i = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(t)}??F`;
                        n ? ((r.innerHTML = o), (e.innerHTML = "Switch to ??F"), (n = !1)) : ((r.innerHTML = i), (e.innerHTML = "Switch to ??C"), (n = !0));
                    })(f, p, e.temp);
                }),
                (m.className = "show");
        };
        var h = (e) => {
            const { description: t, icon: n, main: r } = e.weather[0],
                { temp: a } = e.main,
                [o, i] = [e.name, e.sys.country],
                { dateTime: c } = Date(e.dt);
            return { description: t, icon: n, main: r, temp: a, name: o, country: i, tempMax: e.main.temp_max, tempMin: e.main.temp_min, feelsLike: e.main.feels_like, dateTime: c };
        };
        r.addEventListener("submit", (e) => {
            e.preventDefault();
            const t = a.value,
                n = async (e, t) => (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=034b1e6439b4af8304cfb5a8734b6e14&units=${t}`)).json();
            Promise.all([n(t, "metric"), n(t, "imperial")])
                .then(([e, t]) => {
                    y(h(e), h(t).temp);
                })
                .catch(() => {
                    o.textContent = "I Couldn't fetch weather for this city ????.";
                }),
                (o.textContent = ""),
                r.reset(),
                a.focus(),
                ((e) => {
                    const t = document.createElement("script");
                    // (t.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=abc&tags=${e}`),
                        document.head.appendChild(t),
                        (window.abc = function (e) {
                            const t = document.querySelector("body");
                            (t.style.background = `url('${e.items[2].media.m}') no-repeat`), (t.style.backgroundSize = "cover");
                        });
                })(t);
        });
    },
]);
