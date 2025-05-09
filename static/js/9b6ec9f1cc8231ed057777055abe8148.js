/*!
 * Waves v0.7.5
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2016 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
!function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], (function() {
        return e.apply(t)
    }
    )) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
}("object" == typeof global ? global : this, (function() {
    "use strict";
    function t(t) {
        return function(t) {
            return null !== t && t === t.window
        }(t) ? t : 9 === t.nodeType && t.defaultView
    }
    function e(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }
    function n(t) {
        var n = c.call(t);
        return "[object String]" === n ? u(t) : e(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n) && t.hasOwnProperty("length") ? t : function(t) {
            return e(t) && t.nodeType > 0
        }(t) ? [t] : []
    }
    function r(e) {
        var n, r, o = {
            top: 0,
            left: 0
        }, i = e && e.ownerDocument;
        return n = i.documentElement,
        "undefined" != typeof e.getBoundingClientRect && (o = e.getBoundingClientRect()),
        r = t(i),
        {
            top: o.top + r.pageYOffset - n.clientTop,
            left: o.left + r.pageXOffset - n.clientLeft
        }
    }
    function o(t) {
        var e = "";
        for (var n in t)
            t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
        return e
    }
    function i(t, e, n) {
        if (n) {
            n.classList.remove("waves-rippling");
            var r = n.getAttribute("data-x")
              , i = n.getAttribute("data-y")
              , a = n.getAttribute("data-scale")
              , s = n.getAttribute("data-translate")
              , u = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
            0 > u && (u = 0),
            "mousemove" === t.type && (u = 150);
            var c = "mousemove" === t.type ? 2500 : d.duration;
            setTimeout((function() {
                var t = {
                    top: i + "px",
                    left: r + "px",
                    opacity: "0",
                    "-webkit-transition-duration": c + "ms",
                    "-moz-transition-duration": c + "ms",
                    "-o-transition-duration": c + "ms",
                    "transition-duration": c + "ms",
                    "-webkit-transform": a + " " + s,
                    "-moz-transform": a + " " + s,
                    "-ms-transform": a + " " + s,
                    "-o-transform": a + " " + s,
                    transform: a + " " + s
                };
                n.setAttribute("style", o(t)),
                setTimeout((function() {
                    try {
                        e.removeChild(n)
                    } catch (t) {
                        return !1
                    }
                }
                ), c)
            }
            ), u)
        }
    }
    function a(t) {
        var e = function(t) {
            if (!1 === m.allowEvent(t))
                return null;
            for (var e = null, n = t.target || t.srcElement; null !== n.parentElement; ) {
                if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
                    e = n;
                    break
                }
                n = n.parentElement
            }
            return e
        }(t);
        if (null !== e) {
            if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled"))
                return;
            if (m.registerEvent(t),
            "touchstart" === t.type && d.delay) {
                var n = !1
                  , r = setTimeout((function() {
                    r = null,
                    d.show(t, e)
                }
                ), d.delay)
                  , o = function(o) {
                    r && (clearTimeout(r),
                    r = null,
                    d.show(t, e)),
                    n || (n = !0,
                    d.hide(o, e))
                };
                e.addEventListener("touchmove", (function(t) {
                    r && (clearTimeout(r),
                    r = null),
                    o(t)
                }
                ), !1),
                e.addEventListener("touchend", o, !1),
                e.addEventListener("touchcancel", o, !1)
            } else
                d.show(t, e),
                l && (e.addEventListener("touchend", d.hide, !1),
                e.addEventListener("touchcancel", d.hide, !1)),
                e.addEventListener("mouseup", d.hide, !1),
                e.addEventListener("mouseleave", d.hide, !1)
        }
    }
    var s = s || {}
      , u = document.querySelectorAll.bind(document)
      , c = Object.prototype.toString
      , l = "ontouchstart"in window
      , d = {
        duration: 750,
        delay: 200,
        show: function(t, e, n) {
            if (2 === t.button)
                return !1;
            e = e || this;
            var i = document.createElement("div");
            i.className = "waves-ripple waves-rippling",
            e.appendChild(i);
            var a = r(e)
              , s = 0
              , u = 0;
            "touches"in t && t.touches.length ? (s = t.touches[0].pageY - a.top,
            u = t.touches[0].pageX - a.left) : (s = t.pageY - a.top,
            u = t.pageX - a.left),
            u = u >= 0 ? u : 0,
            s = s >= 0 ? s : 0;
            var c = "scale(" + e.clientWidth / 100 * 3 + ")"
              , l = "translate(0,0)";
            n && (l = "translate(" + n.x + "px, " + n.y + "px)"),
            i.setAttribute("data-hold", Date.now()),
            i.setAttribute("data-x", u),
            i.setAttribute("data-y", s),
            i.setAttribute("data-scale", c),
            i.setAttribute("data-translate", l);
            var f = {
                top: s + "px",
                left: u + "px"
            };
            i.classList.add("waves-notransition"),
            i.setAttribute("style", o(f)),
            i.classList.remove("waves-notransition"),
            f["-webkit-transform"] = c + " " + l,
            f["-moz-transform"] = c + " " + l,
            f["-ms-transform"] = c + " " + l,
            f["-o-transform"] = c + " " + l,
            f.transform = c + " " + l,
            f.opacity = "1";
            var m = "mousemove" === t.type ? 2500 : d.duration;
            f["-webkit-transition-duration"] = m + "ms",
            f["-moz-transition-duration"] = m + "ms",
            f["-o-transition-duration"] = m + "ms",
            f["transition-duration"] = m + "ms",
            i.setAttribute("style", o(f))
        },
        hide: function(t, e) {
            for (var n = (e = e || this).getElementsByClassName("waves-rippling"), r = 0, o = n.length; o > r; r++)
                i(t, e, n[r])
        }
    }
      , f = {
        input: function(t) {
            var e = t.parentNode;
            if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                n.className = t.className + " waves-input-wrapper",
                t.className = "waves-button-input",
                e.replaceChild(n, t),
                n.appendChild(t);
                var r = window.getComputedStyle(t, null)
                  , o = r.color
                  , i = r.backgroundColor;
                n.setAttribute("style", "color:" + o + ";background:" + i),
                t.setAttribute("style", "background-color:rgba(0,0,0,0);")
            }
        },
        img: function(t) {
            var e = t.parentNode;
            if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                e.replaceChild(n, t),
                n.appendChild(t)
            }
        }
    }
      , m = {
        touches: 0,
        allowEvent: function(t) {
            var e = !0;
            return /^(mousedown|mousemove)$/.test(t.type) && m.touches && (e = !1),
            e
        },
        registerEvent: function(t) {
            var e = t.type;
            "touchstart" === e ? m.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout((function() {
                m.touches && (m.touches -= 1)
            }
            ), 500)
        }
    };
    return s.init = function(t) {
        var e = document.body;
        "duration"in (t = t || {}) && (d.duration = t.duration),
        "delay"in t && (d.delay = t.delay),
        l && (e.addEventListener("touchstart", a, !1),
        e.addEventListener("touchcancel", m.registerEvent, !1),
        e.addEventListener("touchend", m.registerEvent, !1)),
        e.addEventListener("mousedown", a, !1)
    }
    ,
    s.attach = function(t, e) {
        t = n(t),
        "[object Array]" === c.call(e) && (e = e.join(" ")),
        e = e ? " " + e : "";
        for (var r, o, i = 0, a = t.length; a > i; i++)
            o = (r = t[i]).tagName.toLowerCase(),
            -1 !== ["input", "img"].indexOf(o) && (f[o](r),
            r = r.parentElement),
            -1 === r.className.indexOf("waves-effect") && (r.className += " waves-effect" + e)
    }
    ,
    s.ripple = function(t, e) {
        var o = (t = n(t)).length;
        if ((e = e || {}).wait = e.wait || 0,
        e.position = e.position || null,
        o)
            for (var i, a, s, u = {}, c = 0, l = {
                type: "mousedown",
                button: 1
            }, f = function(t, e) {
                return function() {
                    d.hide(t, e)
                }
            }; o > c; c++)
                if (i = t[c],
                a = e.position || {
                    x: i.clientWidth / 2,
                    y: i.clientHeight / 2
                },
                s = r(i),
                u.x = s.left + a.x,
                u.y = s.top + a.y,
                l.pageX = u.x,
                l.pageY = u.y,
                d.show(l, i),
                e.wait >= 0 && null !== e.wait) {
                    setTimeout(f({
                        type: "mouseup",
                        button: 1
                    }, i), e.wait)
                }
    }
    ,
    s.calm = function(t) {
        for (var e = {
            type: "mouseup",
            button: 1
        }, r = 0, o = (t = n(t)).length; o > r; r++)
            d.hide(e, t[r])
    }
    ,
    s.displayEffect = function(t) {
        s.init(t)
    }
    ,
    s
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.NProgress = e()
}(this, (function() {
    var t, e, n = {
        version: "0.2.0"
    }, r = n.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    function o(t, e, n) {
        return t < e ? e : t > n ? n : t
    }
    function i(t) {
        return 100 * (-1 + t)
    }
    n.configure = function(t) {
        var e, n;
        for (e in t)
            (n = t[e]) !== undefined && t.hasOwnProperty(e) && (r[e] = n);
        return this
    }
    ,
    n.status = null,
    n.set = function(t) {
        var e = n.isStarted();
        t = o(t, r.minimum, 1),
        n.status = 1 === t ? null : t;
        var u = n.render(!e)
          , c = u.querySelector(r.barSelector)
          , l = r.speed
          , d = r.easing;
        return u.offsetWidth,
        a((function(e) {
            "" === r.positionUsing && (r.positionUsing = n.getPositioningCSS()),
            s(c, function(t, e, n) {
                var o;
                o = "translate3d" === r.positionUsing ? {
                    transform: "translate3d(" + i(t) + "%,0,0)"
                } : "translate" === r.positionUsing ? {
                    transform: "translate(" + i(t) + "%,0)"
                } : {
                    "margin-left": i(t) + "%"
                };
                return o.transition = "all " + e + "ms " + n,
                o
            }(t, l, d)),
            1 === t ? (s(u, {
                transition: "none",
                opacity: 1
            }),
            u.offsetWidth,
            setTimeout((function() {
                s(u, {
                    transition: "all " + l + "ms linear",
                    opacity: 0
                }),
                setTimeout((function() {
                    n.remove(),
                    e()
                }
                ), l)
            }
            ), l)) : setTimeout(e, l)
        }
        )),
        this
    }
    ,
    n.isStarted = function() {
        return "number" == typeof n.status
    }
    ,
    n.start = function() {
        n.status || n.set(0);
        var t = function() {
            setTimeout((function() {
                n.status && (n.trickle(),
                t())
            }
            ), r.trickleSpeed)
        };
        return r.trickle && t(),
        this
    }
    ,
    n.done = function(t) {
        return t || n.status ? n.inc(.3 + .5 * Math.random()).set(1) : this
    }
    ,
    n.inc = function(t) {
        var e = n.status;
        return e ? ("number" != typeof t && (t = (1 - e) * o(Math.random() * e, .1, .95)),
        e = o(e + t, 0, .994),
        n.set(e)) : n.start()
    }
    ,
    n.trickle = function() {
        return n.inc(Math.random() * r.trickleRate)
    }
    ,
    t = 0,
    e = 0,
    n.promise = function(r) {
        return r && "resolved" !== r.state() ? (0 === e && n.start(),
        t++,
        e++,
        r.always((function() {
            0 == --e ? (t = 0,
            n.done()) : n.set((t - e) / t)
        }
        )),
        this) : this
    }
    ,
    n.render = function(t) {
        if (n.isRendered())
            return document.getElementById("nprogress");
        c(document.documentElement, "nprogress-busy");
        var e = document.createElement("div");
        e.id = "nprogress",
        e.innerHTML = r.template;
        var o, a = e.querySelector(r.barSelector), u = t ? "-100" : i(n.status || 0), l = document.querySelector(r.parent);
        return s(a, {
            transition: "all 0 linear",
            transform: "translate3d(" + u + "%,0,0)"
        }),
        r.showSpinner || (o = e.querySelector(r.spinnerSelector)) && f(o),
        l != document.body && c(l, "nprogress-custom-parent"),
        l.appendChild(e),
        e
    }
    ,
    n.remove = function() {
        l(document.documentElement, "nprogress-busy"),
        l(document.querySelector(r.parent), "nprogress-custom-parent");
        var t = document.getElementById("nprogress");
        t && f(t)
    }
    ,
    n.isRendered = function() {
        return !!document.getElementById("nprogress")
    }
    ,
    n.getPositioningCSS = function() {
        var t = document.body.style
          , e = "WebkitTransform"in t ? "Webkit" : "MozTransform"in t ? "Moz" : "msTransform"in t ? "ms" : "OTransform"in t ? "O" : "";
        return e + "Perspective"in t ? "translate3d" : e + "Transform"in t ? "translate" : "margin"
    }
    ;
    var a = function() {
        var t = [];
        function e() {
            var n = t.shift();
            n && n(e)
        }
        return function(n) {
            t.push(n),
            1 == t.length && e()
        }
    }()
      , s = function() {
        var t = ["Webkit", "O", "Moz", "ms"]
          , e = {};
        function n(n) {
            return n = n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(t, e) {
                return e.toUpperCase()
            }
            )),
            e[n] || (e[n] = function(e) {
                var n = document.body.style;
                if (e in n)
                    return e;
                for (var r, o = t.length, i = e.charAt(0).toUpperCase() + e.slice(1); o--; )
                    if ((r = t[o] + i)in n)
                        return r;
                return e
            }(n))
        }
        function r(t, e, r) {
            e = n(e),
            t.style[e] = r
        }
        return function(t, e) {
            var n, o, i = arguments;
            if (2 == i.length)
                for (n in e)
                    (o = e[n]) !== undefined && e.hasOwnProperty(n) && r(t, n, o);
            else
                r(t, i[1], i[2])
        }
    }();
    function u(t, e) {
        return ("string" == typeof t ? t : d(t)).indexOf(" " + e + " ") >= 0
    }
    function c(t, e) {
        var n = d(t)
          , r = n + e;
        u(n, e) || (t.className = r.substring(1))
    }
    function l(t, e) {
        var n, r = d(t);
        u(t, e) && (n = r.replace(" " + e + " ", " "),
        t.className = n.substring(1, n.length - 1))
    }
    function d(t) {
        return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
    }
    function f(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }
    return n
}
)),
NProgress.start(),
setTimeout((function() {
    NProgress.done()
}
), 1e3),
$(document).on("pjax:start", (function() {
    NProgress.start()
}
)),
$(document).on("pjax:end", (function() {
    NProgress.done()
}
));
