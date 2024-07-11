/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "1.12.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1,
                    f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {},
                    g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a)
                    return k.call(a, b);
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h)
                    return h.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            n.isFunction(a) ? (c = e.call(arguments, 2),
            d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }
            ,
            d.guid = a.guid = a.guid || n.guid++,
            d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                        s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                            d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Z.test(n.getElementsByClassName),
            c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Z.test(o.compareDocumentPosition),
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }
        ,
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(T, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }
        ,
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }
        ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}),
                            i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k,
                            k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qa(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fa
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , w = n.expr.match.needsContext
      , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
        "string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if (f = d.getElementById(e[2]),
            f && f.parentNode) {
                if (f.id !== e[2])
                    return A.find(a);
                this.length = 1,
                this[0] = f
            }
            return this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
      , E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || (e = n.uniqueSort(e)),
            D.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = !0,
                c || j.disable(),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d),
                j = new Array(d),
                k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
            n.fn.triggerHandler && (n(d).triggerHandler("ready"),
            n(d).off("ready"))))
        }
    });
    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K),
        a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K),
        a.detachEvent("onload", K))
    }
    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(),
        n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(),
            "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll)
                a.setTimeout(n.ready);
            else if (d.addEventListener)
                d.addEventListener("DOMContentLoaded", K),
                a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K),
                a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && !function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(),
                        n.ready()
                    }
                }()
            }
        return I.promise(b)
    }
    ,
    n.ready.promise();
    var L;
    for (L in n(l))
        break;
    l.ownFirst = "0" === L,
    l.inlineBlockNeedsLayout = !1,
    n(function() {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0],
        c && c.style && (b = d.createElement("div"),
        e = d.createElement("div"),
        e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(e).appendChild(b),
        "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(e))
    }),
    function() {
        var a = d.createElement("div");
        l.deleteExpando = !0;
        try {
            delete a.test
        } catch (b) {
            l.deleteExpando = !1
        }
        a = null
    }();
    var M = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
      , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else
                c = void 0;
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }),
                "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[n.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null == f && (f = g[n.camelCase(b)])) : f = g,
                f
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando],
            !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f),
                1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        P(f, d, e[d])));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = n._data(a, b),
            c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"),
                    n._removeData(a, c)
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = n._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    }),
    function() {
        var a;
        l.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, e;
            return c = d.getElementsByTagName("body")[0],
            c && c.style ? (b = d.createElement("div"),
            e = d.createElement("div"),
            e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(e).appendChild(b),
            "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(d.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(e),
            a) : void 0
        }
    }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$","i")
      , V = ["Top", "Right", "Bottom", "Left"]
      , W = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function X(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var Y = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                Y(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , Z = /^(?:checkbox|radio)$/i
      , $ = /<([\w:-]+)/
      , _ = /^$|\/(?:java|ecma)script/i
      , aa = /^\s+/
      , ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    !function() {
        var a = d.createElement("div")
          , b = d.createDocumentFragment()
          , c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        l.leadingWhitespace = 3 === a.firstChild.nodeType,
        l.tbody = !a.getElementsByTagName("tbody").length,
        l.htmlSerialize = !!a.getElementsByTagName("link").length,
        l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML,
        c.type = "checkbox",
        c.checked = !0,
        b.appendChild(c),
        l.appendChecked = c.checked,
        a.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
        b.appendChild(a),
        c = d.createElement("input"),
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        a.appendChild(c),
        l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        l.noCloneEvent = !!a.addEventListener,
        a[n.expando] = 1,
        l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option,
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead,
    da.th = da.td;
    function ea(a, b) {
        var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/
      , ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }
    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r],
            g || 0 === g)
                if ("object" === n.type(g))
                    n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    i = i || p.appendChild(b.createElement("div")),
                    j = ($.exec(g) || ["", ""])[1].toLowerCase(),
                    m = da[j] || da._default,
                    i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2],
                    f = m[0];
                    while (f--)
                        i = i.lastChild;
                    if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])),
                    !l.tbody) {
                        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild,
                        f = g && g.childNodes.length;
                        while (f--)
                            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                    }
                    n.merge(q, i.childNodes),
                    i.textContent = "";
                    while (i.firstChild)
                        i.removeChild(i.firstChild);
                    i = p.lastChild
                } else
                    q.push(b.createTextNode(g));
        i && p.removeChild(i),
        l.appendChecked || n.grep(ea(q, "input"), ia),
        r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1)
                e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g),
            i = ea(p.appendChild(g), "script"),
            h && fa(i),
            c) {
                f = 0;
                while (g = i[f++])
                    _.test(g.type || "") && c.push(g)
            }
        return i = null,
        p
    }
    !function() {
        var b, c, e = d.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (l[b] = c in a) || (e.setAttribute(c, "t"),
            l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i
      , la = /^key/
      , ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , na = /^(?:focusinfocus|focusoutblur)$/
      , oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return !0
    }
    function qa() {
        return !1
    }
    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = qa;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = n.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(G) || [""],
                h = b.length;
                while (h--)
                    f = oa.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = n.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = n.event.special[o] || {},
                    l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (m = g[o]) || (m = g[o] = [],
                    m.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                    n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = m.length;
                        while (f--)
                            g = m[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                            g.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle,
                n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            h = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = r.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : n.makeArray(c, [b]),
            l = n.event.special[q] || {},
            f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q,
                    na.test(j + q) || (i = i.parentNode); i; i = i.parentNode)
                        p.push(i),
                        m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped())
                    b.type = o > 1 ? j : l.bindType || q,
                    g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"),
                    g && g.apply(i, c),
                    g = h && i[h],
                    g && g.apply && M(i) && (b.result = g.apply(i, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = q,
                !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h],
                    m && (e[h] = null),
                    n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0,
                    m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                        a.data = g.data,
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--)
                c = e[b],
                a[c] = g[c];
            return a.target || (a.target = g.srcElement || d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button, h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d,
                f = e.documentElement,
                c = e.body,
                a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b),
            d.isDefaultPrevented() && c.preventDefault()
        }
    },
    n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa,
            a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }),
                n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble,
            this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }),
    l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }),
            n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1),
                n.event.simulate("change", this, a)
            })),
            !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }),
                n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"),
            !ka.test(this.nodeName)
        }
    }),
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = n._data(d, b);
                e || d.addEventListener(a, c, !0),
                n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0),
                n._removeData(d, b))
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = qa),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g
      , ua = new RegExp("<(?:" + ba + ")[\\s/>]","i")
      , va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , wa = /<script|<style|<link/i
      , xa = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ya = /^true\/(.*)/
      , za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Aa = ca(d)
      , Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events)
                    n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text,
            Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                Ha(f, b, c, d)
            });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d),
        e = k.firstChild,
        1 === k.childNodes.length && (k = e),
        e || d)) {
            for (i = n.map(ea(k, "script"), Da),
            h = i.length; o > m; m++)
                g = k,
                m !== p && (g = n.clone(g, !0, !0),
                h && n.merge(i, ea(g, "script"))),
                c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument,
                n.map(i, Ea),
                m = 0; h > m; m++)
                    g = i[m],
                    _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(ea(d)),
            d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML,
            Ba.removeChild(f = Ba.firstChild)),
            !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f),
                h = ea(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a),
                    d = d || ea(f),
                    g = 0; null != (e = h[g]); g++)
                        Fa(e, d[g]);
                else
                    Fa(a, f);
            return d = ea(f, "script"),
            d.length > 0 && fa(d, !i && ea(a, "script")),
            d = h = e = null,
            f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i),
                    c.push(f))
                }
        }
    }),
    n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(ea(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                n(f[d])[b](c),
                g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
          , d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function Ma(a) {
        var b = d
          , c = Ka[a];
        return c || (c = La(a, b),
        "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Ja[0].contentWindow || Ja[0].contentDocument).document,
        b.write(),
        b.close(),
        c = La(a, b),
        Ja.detach()),
        Ka[a] = c),
        c
    }
    var Na = /^margin/
      , Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$","i")
      , Pa = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
      , Qa = d.documentElement;
    !function() {
        var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5",
            l.opacity = "0.5" === j.style.opacity,
            l.cssFloat = !!j.style.cssFloat,
            j.style.backgroundClip = "content-box",
            j.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === j.style.backgroundClip,
            i = d.createElement("div"),
            i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            j.innerHTML = "",
            i.appendChild(j),
            l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing,
            n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(),
                    f
                },
                boxSizingReliable: function() {
                    return null == b && k(),
                    e
                },
                pixelMarginRight: function() {
                    return null == b && k(),
                    c
                },
                pixelPosition: function() {
                    return null == b && k(),
                    b
                },
                reliableMarginRight: function() {
                    return null == b && k(),
                    g
                },
                reliableMarginLeft: function() {
                    return null == b && k(),
                    h
                }
            });
            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i),
                j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                b = e = h = !1,
                c = g = !0,
                a.getComputedStyle && (l = a.getComputedStyle(j),
                b = "1%" !== (l || {}).top,
                h = "2px" === (l || {}).marginLeft,
                e = "4px" === (l || {
                    width: "4px"
                }).width,
                j.style.marginRight = "50%",
                c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight,
                k = j.appendChild(d.createElement("div")),
                k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                k.style.marginRight = k.style.width = "0",
                j.style.width = "1px",
                g = !parseFloat((a.getComputedStyle(k) || {}).marginRight),
                j.removeChild(k)),
                j.style.display = "none",
                f = 0 === j.getClientRects().length,
                f && (j.style.display = "",
                j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                j.childNodes[0].style.borderCollapse = "separate",
                k = j.getElementsByTagName("td"),
                k[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                f = 0 === k[0].offsetHeight,
                f && (k[0].style.display = "",
                k[1].style.display = "none",
                f = 0 === k[0].offsetHeight)),
                m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }
    ,
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f),
        void 0 === g ? g : g + ""
    }
    ) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }
    ,
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Oa.test(g) && !Ta.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i
      , Wa = /opacity\s*=\s*([^)]*)/i
      , Xa = /^(none|table(?!-c[ea]).+)/
      , Ya = new RegExp("^(" + T + ")(.*)$","i")
      , Za = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , $a = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , _a = ["Webkit", "O", "Moz", "ms"]
      , ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab)
            return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1)
          , c = _a.length;
        while (c--)
            if (a = _a[c] + b,
            a in ab)
                return a
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = n._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d),
            (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + V[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }
    function fb(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ra(a)
          , g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Oa.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Sa(a, b, d)),
            "normal" === f && b in $a && (f = $a[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }),
    n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }),
    n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Na.test(a) || (n.cssHooks[a + b].set = db)
    }),
    n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a,b,c,d,e)
    }
    n.Tween = gb,
    gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : gb.propHooks._default.set(this),
            this
        }
    },
    gb.prototype.init.prototype = gb.prototype,
    gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = gb.prototype.init,
    n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }),
        hb = n.now()
    }
    function mb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = V[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        m.always(function() {
            m.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            jb.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(o))
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = n._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? n(a).show() : m.done(function() {
                n(a).hide()
            }),
            m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o)
                    n.style(a, b, o[b])
            });
            for (d in o)
                g = nb(q ? r[d] : 0, d, m),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function qb(a, b, c) {
        var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: hb || lb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                d;
        return n.map(k, nb, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                qb.tweeners[c] = qb.tweeners[c] || [],
                qb.tweeners[c].unshift(b)
        },
        prefilters: [ob],
        prefilter: function(a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = qb(this, n.extend({}, a), f);
                (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = n._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && kb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = n.timers, c = 0;
        for (hb = n.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(),
        hb = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        a.clearInterval(ib),
        ib = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option"));
        c = d.createElement("div"),
        c.setAttribute("className", "t"),
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        a = c.getElementsByTagName("a")[0],
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        a = c.getElementsByTagName("a")[0],
        a.style.cssText = "top:1px",
        l.getSetAttribute = "t" !== c.className,
        l.style = /top/.test(a.getAttribute("style")),
        l.hrefNormalized = "/a" === a.getAttribute("href"),
        l.checkOn = !!b.value,
        l.optSelected = f.selected,
        l.enctype = !!d.createElement("form").enctype,
        e.disabled = !0,
        l.optDisabled = !f.disabled,
        b = d.createElement("input"),
        b.setAttribute("value", ""),
        l.input = "" === b.getAttribute("value"),
        b.value = "t",
        b.setAttribute("type", "radio"),
        l.radioValue = "t" === b.value
    }();
    var rb = /\r/g
      , sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        n.inArray(n.valHooks.option.get(d), f) > -1)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)),
                void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""),
                    a.removeAttribute(xb ? c : d)
        }
    }),
    ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b],
            vb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            vb[b] = f),
            e
        }
        : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }),
    xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    },
    n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    },
    n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i
      , Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }),
    l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                        e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                        e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = Cb(this),
                    b && n._data(this, "__className__", b),
                    n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location
      , Eb = n.now()
      , Fb = /\?/
      , Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }
    ,
    n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new a.DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    }
    ;
    var Hb = /#.*$/
      , Ib = /([?&])_=[^&]*/
      , Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Lb = /^(?:GET|HEAD)$/
      , Mb = /^\/\//
      , Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Ob = {}
      , Pb = {}
      , Qb = "*/".concat("*")
      , Rb = Db.href
      , Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Ub(a, b, c, d) {
        var e = {}
          , f = a === Pb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c),
        a
    }
    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!k) {
                            k = {};
                            while (b = Jb.exec(g))
                                k[b[1].toLowerCase()] = b[2]
                        }
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a,
                    s[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return u || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > u)
                            for (b in a)
                                r[b] = [r[b], a[b]];
                        else
                            w.always(a[w.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || v;
                    return j && j.abort(b),
                    y(0, b),
                    this
                }
            };
            if (p.promise(w).complete = q.add,
            w.success = w.done,
            w.error = w.fail,
            l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"),
            l.type = c.method || c.type || l.method || l.type,
            l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""],
            null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()),
            l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)),
            Ub(Ob, l, c, w),
            2 === u)
                return w;
            i = n.event && l.global,
            i && 0 === n.active++ && n.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !Lb.test(l.type),
            f = l.url,
            l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
            l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
            (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType),
            w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1,
                i && o.trigger("ajaxSend", [w, l]),
                2 === u)
                    return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1,
                    j.send(s, y)
                } catch (x) {
                    if (!(2 > u))
                        throw x;
                    y(-1, x)
                }
            } else
                y(-1, "No Transport");
            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2,
                h && a.clearTimeout(h),
                j = void 0,
                g = e || "",
                w.readyState = b > 0 ? 4 : 0,
                k = b >= 200 && 300 > b || 304 === b,
                d && (v = Wb(l, w, d)),
                v = Xb(l, v, w, k),
                k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"),
                x && (n.lastModified[f] = x),
                x = w.getResponseHeader("etag"),
                x && (n.etag[f] = x)),
                204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state,
                s = v.data,
                t = v.error,
                k = !t)) : (t = y,
                !b && y || (y = "error",
                0 > b && (b = 0))),
                w.status = b,
                w.statusText = (c || y) + "",
                k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
                w.statusCode(r),
                r = void 0,
                i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
                q.fireWith(m, [w, y]),
                i && (o.trigger("ajaxComplete", [w, l]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a))
            return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }
    ,
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    }
    ;
    var $b = /%20/g
      , _b = /\[\]$/
      , ac = /\r?\n/g
      , bc = /^(?:submit|button|image|reset|file)$/i
      , cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    }
    : hc;
    var ec = 0
      , fc = {}
      , gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc)
            fc[a](void 0, !0)
    }),
    l.cors = !!gc && "withCredentials"in gc,
    gc = l.ajax = !!gc,
    gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(), h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password),
                    b.xhrFields)
                        for (f in b.xhrFields)
                            g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType),
                    b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d)
                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null),
                    c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h],
                            c = void 0,
                            g.onreadystatechange = n.noop,
                            d)
                                4 !== g.readyState && g.abort();
                            else {
                                j = {},
                                f = g.status,
                                "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }
                    ,
                    b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || f(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = []
      , kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            jc.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || d;
        var e = x.exec(a)
          , f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f),
        f && f.length && n(f).remove(),
        n.merge([], e.childNodes))
    }
    ;
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc)
            return lc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()),
                c = mc(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (c = a.offset()),
                c.top += n.css(a[0], "borderTopWidth", !0),
                c.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Qa
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b),
            Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }),
    n.fn.size = function() {
        return this.length
    }
    ,
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery
      , oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc),
        b && a.jQuery === n && (a.jQuery = nc),
        n
    }
    ,
    b || (a.jQuery = a.$ = n),
    n
});

/*! jQuery UI - v1.12.1 - 2019-11-20
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}
)(function(t) {
    function e(t) {
        for (var e = t.css("visibility"); "inherit" === e; )
            t = t.parent(),
            e = t.css("visibility");
        return "hidden" !== e
    }
    function i(t) {
        for (var e, i; t.length && t[0] !== document; ) {
            if (e = t.css("position"),
            ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10),
            !isNaN(i) && 0 !== i))
                return i;
            t = t.parent()
        }
        return 0
    }
    function s() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        t.extend(this._defaults, this.regional[""]),
        this.regional.en = t.extend(!0, {}, this.regional[""]),
        this.regional["en-US"] = t.extend(!0, {}, this.regional.en),
        this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function n(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, function() {
            t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", i, o)
    }
    function o() {
        t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }
    function a(e, i) {
        t.extend(e, i);
        for (var s in i)
            null == i[s] && (e[s] = i[s]);
        return e
    }
    function r(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments),
            this._refresh(),
            e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {},
    t.ui.version = "1.12.1";
    var h = 0
      , l = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++)
                try {
                    s = t._data(n, "events"),
                    s && s.remove && t(n).triggerHandler("remove")
                } catch (a) {}
            e(i)
        }
    }(t.cleanData),
    t.widget = function(e, i, s) {
        var n, o, a, r = {}, h = e.split(".")[0];
        e = e.split(".")[1];
        var l = h + "-" + e;
        return s || (s = i,
        i = t.Widget),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        t.expr[":"][l.toLowerCase()] = function(e) {
            return !!t.data(e, l)
        }
        ,
        t[h] = t[h] || {},
        n = t[h][e],
        o = t[h][e] = function(t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e),
            void 0) : new o(t,e)
        }
        ,
        t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }),
        a = new i,
        a.options = t.widget.extend({}, a.options),
        t.each(s, function(e, s) {
            return t.isFunction(s) ? (r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }
                function n(t) {
                    return i.prototype[e].apply(this, t)
                }
                return function() {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t,
                    this._superApply = n,
                    e = s.apply(this, arguments),
                    this._super = i,
                    this._superApply = o,
                    e
                }
            }(),
            void 0) : (r[e] = s,
            void 0)
        }),
        o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n ? a.widgetEventPrefix || e : e
        }, r, {
            constructor: o,
            namespace: h,
            widgetName: e,
            widgetFullName: l
        }),
        n ? (t.each(n._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }),
        delete n._childConstructors) : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
    }
    ,
    t.widget.extend = function(e) {
        for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
            for (i in n[o])
                s = n[o][i],
                n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
        return e
    }
    ,
    t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(n) {
            var o = "string" == typeof n
              , a = l.call(arguments, 1)
              , r = this;
            return o ? this.length || "instance" !== n ? this.each(function() {
                var i, o = t.data(this, s);
                return "instance" === n ? (r = o,
                !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a),
                i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i,
                !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'")
            }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))),
            this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(n || {}),
                e._init && e._init()) : t.data(this, s, new i(n,this))
            })),
            r
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0],
            this.element = t(i),
            this.uuid = h++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            this.classesElementLookup = {},
            i !== this && (t.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy()
                }
            }),
            this.document = t(i.style ? i.ownerDocument : i.document || i),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(),
            t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {},
                s = e.split("."),
                e = s.shift(),
                s.length) {
                    for (n = a[e] = t.widget.extend({}, this.options[e]),
                    o = 0; s.length - 1 > o; o++)
                        n[s[o]] = n[s[o]] || {},
                        n = n[s[o]];
                    if (e = s.pop(),
                    1 === arguments.length)
                        return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(e) {
            var i, s, n;
            for (i in e)
                n = this.classesElementLookup[i],
                e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()),
                this._removeClass(n, i),
                s.addClass(this._classes({
                    element: s,
                    keys: i,
                    classes: e,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++)
                    a = n.classesElementLookup[i[r]] || t(),
                    a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()),
                    n.classesElementLookup[i[r]] = a,
                    s.push(i[r]),
                    o && e.classes[i[r]] && s.push(e.classes[i[r]])
            }
            var s = []
              , n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e),
            this._on(e.element, {
                remove: "_untrackClassesElement"
            }),
            e.keys && i(e.keys.match(/\S+/g) || [], !0),
            e.extra && i(e.extra.match(/\S+/g) || []),
            s.join(" ")
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            })
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t
              , o = {
                extra: n ? e : i,
                keys: n ? t : e,
                element: n ? this.element : t,
                add: s
            };
            return o.element.toggleClass(this._classes(o), s),
            this
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i,
            i = e,
            e = !1),
            s ? (i = n = t(i),
            this.bindings = this.bindings.add(i)) : (s = i,
            i = this.element,
            n = this.widget()),
            t.each(s, function(s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/)
                  , l = h[1] + o.eventNamespace
                  , c = h[2];
                c ? n.on(l, c, r) : i.on(l, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.off(i).off(i),
            this.bindings = t(this.bindings.not(e).get()),
            this.focusable = t(this.focusable.not(e).get()),
            this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {},
            i = t.Event(i),
            i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            o = i.originalEvent)
                for (n in o)
                    n in i || (i[n] = o[n]);
            return this.element.trigger(i, s),
            !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            a = !t.isEmptyObject(n),
            n.complete = o,
            n.delay && s.delay(n.delay),
            a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](),
                o && o.call(s[0]),
                i()
            })
        }
    }),
    t.widget,
    function() {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        function s(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        var n, o = Math.max, a = Math.abs, r = /left|center|right/, h = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, u = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== n)
                    return n;
                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
                return t("body").append(s),
                e = o.offsetWidth,
                s.css("overflow", "scroll"),
                i = o.offsetWidth,
                e === i && (i = s[0].clientWidth),
                s.remove(),
                n = e - i
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x")
                  , s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y")
                  , n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth
                  , o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: o ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window)
                  , s = t.isWindow(i[0])
                  , n = !!i[0] && 9 === i[0].nodeType
                  , o = !s && !n;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: o ? t(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        },
        t.fn.position = function(n) {
            if (!n || !n.of)
                return d.apply(this, arguments);
            n = t.extend({}, n);
            var u, p, f, g, m, _, v = t(n.of), b = t.position.getWithinInfo(n.within), y = t.position.getScrollInfo(b), w = (n.collision || "flip").split(" "), k = {};
            return _ = s(v),
            v[0].preventDefault && (n.at = "left top"),
            p = _.width,
            f = _.height,
            g = _.offset,
            m = t.extend({}, g),
            t.each(["my", "at"], function() {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                i[0] = r.test(i[0]) ? i[0] : "center",
                i[1] = h.test(i[1]) ? i[1] : "center",
                t = l.exec(i[0]),
                e = l.exec(i[1]),
                k[this] = [t ? t[0] : 0, e ? e[0] : 0],
                n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
            }),
            1 === w.length && (w[1] = w[0]),
            "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2),
            "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2),
            u = e(k.at, p, f),
            m.left += u[0],
            m.top += u[1],
            this.each(function() {
                var s, r, h = t(this), l = h.outerWidth(), c = h.outerHeight(), d = i(this, "marginLeft"), _ = i(this, "marginTop"), x = l + d + i(this, "marginRight") + y.width, C = c + _ + i(this, "marginBottom") + y.height, D = t.extend({}, m), I = e(k.my, h.outerWidth(), h.outerHeight());
                "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2),
                "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2),
                D.left += I[0],
                D.top += I[1],
                s = {
                    marginLeft: d,
                    marginTop: _
                },
                t.each(["left", "top"], function(e, i) {
                    t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: l,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [u[0] + I[0], u[1] + I[1]],
                        my: n.my,
                        at: n.at,
                        within: b,
                        elem: h
                    })
                }),
                n.using && (r = function(t) {
                    var e = g.left - D.left
                      , i = e + p - l
                      , s = g.top - D.top
                      , r = s + f - c
                      , u = {
                        target: {
                            element: v,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: h,
                            left: D.left,
                            top: D.top,
                            width: l,
                            height: c
                        },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    l > p && p > a(e + i) && (u.horizontal = "center"),
                    c > f && f > a(s + r) && (u.vertical = "middle"),
                    u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical",
                    n.using.call(this, t, u)
                }
                ),
                h.offset(t.extend(D, {
                    using: r
                }))
            })
        }
        ,
        t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n,
                    t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n,
                    t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within, o = n.offset.left + n.scrollLeft, r = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, u = l + e.collisionWidth - r - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o,
                    (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h,
                    (s > 0 || u > a(s)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within, o = n.offset.top + n.scrollTop, r = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, u = l + e.collisionHeight - r - h, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o,
                    (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h,
                    (i > 0 || u > a(i)) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments),
                    t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments),
                    t.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(),
    t.ui.position,
    t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, s) {
            return !!t.data(e, s[3])
        }
    }),
    t.fn.extend({
        disableSelection: function() {
            var t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    }),
    t.ui.focusable = function(i, s) {
        var n, o, a, r, h, l = i.nodeName.toLowerCase();
        return "area" === l ? (n = i.parentNode,
        o = n.name,
        i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"),
        a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled,
        r && (h = t(i).closest("fieldset")[0],
        h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s,
        r && t(i).is(":visible") && e(t(i)))
    }
    ,
    t.extend(t.expr[":"], {
        focusable: function(e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"))
        }
    }),
    t.ui.focusable,
    t.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
    }
    ,
    t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout(function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(),
            this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler),
                t.push(this),
                this.form.data("ui-form-reset-instances", t)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1),
                e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    },
    "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
        function s(e, i, s, o) {
            return t.each(n, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0,
                s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }),
            i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
          , o = i.toLowerCase()
          , a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                t(this).css(o, s(this, e) + "px")
            })
        }
        ,
        t.fn["outer" + i] = function(e, n) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                t(this).css(o, s(this, e, !0, n) + "px")
            })
        }
    }),
    t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    t.ui.escapeSelector = function() {
        var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function(e) {
            return e.replace(t, "\\$1")
        }
    }(),
    t.fn.labels = function() {
        var e, i, s, n, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"),
        s = this.attr("id"),
        s && (e = this.eq(0).parents().last(),
        o = e.add(e.length ? e.siblings() : this.siblings()),
        i = "label[for='" + t.ui.escapeSelector(s) + "']",
        n = n.add(o.find(i).addBack(i))),
        this.pushStack(n))
    }
    ,
    t.fn.scrollParent = function(e) {
        var i = this.css("position")
          , s = "absolute" === i
          , n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , o = this.parents().filter(function() {
            var e = t(this);
            return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
        }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }
    ,
    t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex")
              , s = null != i;
            return (!s || i >= 0) && t.ui.focusable(e, s)
        }
    }),
    t.fn.extend({
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }),
    t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var c = !1;
    t(document).on("mouseup", function() {
        c = !1
    }),
    t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName),
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!c) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(e),
                this._mouseDownEvent = e;
                var i = this
                  , s = 1 === e.which
                  , n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1,
                !this._mouseStarted) ? (e.preventDefault(),
                !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }
                ,
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                e.preventDefault(),
                c = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button)
                    return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(e),
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1,
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer),
            this.ignoreMissingWhich = !1,
            c = !1,
            e.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
    t.ui.plugin = {
        add: function(e, i, s) {
            var n, o = t.ui[e].prototype;
            for (n in s)
                o.plugins[n] = o.plugins[n] || [],
                o.plugins[n].push([i, s[n]])
        },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; o.length > n; n++)
                    t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    },
    t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body),
        e.nodeName || (e = t.body),
        e
    }
    ,
    t.ui.safeBlur = function(e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    }
    ,
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this._addClass("ui-draggable"),
            this._setHandleClassName(),
            this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0,
            void 0) : (this._removeHandleClassName(),
            this._mouseDestroy(),
            void 0)
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e),
            this.handle ? (this._blurActiveElement(e),
            this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix),
            !0) : !1)
        },
        _blockFrames: function(e) {
            this.iframeBlocks = this.document.find(e).map(function() {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0])
              , s = t(e.target);
            s.closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e),
            this._addClass(this.helper, "ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === t(this).css("position")
            }).length > 0,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(e),
            this.originalPosition = this.position = this._generatePosition(e, !1),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            this._trigger("start", e) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this._mouseDrag(e, !0),
            t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
            !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            },
            this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(e, !0),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1)
                    return this._mouseUp(new t.Event("mouseup",e)),
                    !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
        },
        _mouseStop: function(e) {
            var i = this
              , s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
            this.dropped && (s = this.dropped,
            this.dropped = !1),
            "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(),
            !1
        },
        _mouseUp: function(e) {
            return this._unblockFrames(),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            this.handleElement.is(e.target) && this.element.trigger("focus"),
            t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup",{
                target: this.element[0]
            })) : this._clear(),
            this
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(e) {
            var i = this.options
              , s = t.isFunction(i.helper)
              , n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
            s && n[0] === this.element[0] && this._setPositionRelative(),
            n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"),
            n
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset()
              , i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var t = this.element.position()
              , e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options, o = this.document[0];
            return this.relativeContainer = null,
            n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
            void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
            void 0) : n.containment.constructor === Array ? (this.containment = n.containment,
            void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode),
            i = t(n.containment),
            s = i[0],
            s && (e = /(scroll|auto)/.test(i.css("overflow")),
            this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relativeContainer = i),
            void 0) : (this.containment = null,
            void 0)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1
              , s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, s, n, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), h = t.pageX, l = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)),
            a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY,
            l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n,
            o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX,
            h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o),
            "y" === a.axis && (h = this.originalPageX),
            "x" === a.axis && (l = this.originalPageY)),
            {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1,
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(),
            t.ui.plugin.call(this, e, [i, s, this], !0),
            /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"),
            s.offset = this.positionAbs),
            t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.sortables = [],
            t(s.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", e, n))
            })
        },
        stop: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.cancelHelperRemoval = !1,
            t.each(s.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0,
                s.cancelHelperRemoval = !0,
                t.cancelHelperRemoval = !1,
                t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                },
                t._mouseStop(e),
                t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0,
                t._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i, s) {
            t.each(s.sortables, function() {
                var n = !1
                  , o = this;
                o.positionAbs = s.positionAbs,
                o.helperProportions = s.helperProportions,
                o.offset.click = s.offset.click,
                o._intersectsWith(o.containerCache) && (n = !0,
                t.each(s.sortables, function() {
                    return this.positionAbs = s.positionAbs,
                    this.helperProportions = s.helperProportions,
                    this.offset.click = s.offset.click,
                    this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1),
                    n
                })),
                n ? (o.isOver || (o.isOver = 1,
                s._parent = i.helper.parent(),
                o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0),
                o.options._helper = o.options.helper,
                o.options.helper = function() {
                    return i.helper[0]
                }
                ,
                e.target = o.currentItem[0],
                o._mouseCapture(e, !0),
                o._mouseStart(e, !0, !0),
                o.offset.click.top = s.offset.click.top,
                o.offset.click.left = s.offset.click.left,
                o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left,
                o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top,
                s._trigger("toSortable", e),
                s.dropped = o.element,
                t.each(s.sortables, function() {
                    this.refreshPositions()
                }),
                s.currentItem = s.element,
                o.fromOutside = s),
                o.currentItem && (o._mouseDrag(e),
                i.position = o.position)) : o.isOver && (o.isOver = 0,
                o.cancelHelperRemoval = !0,
                o.options._revert = o.options.revert,
                o.options.revert = !1,
                o._trigger("out", e, o._uiHash(o)),
                o._mouseStop(e, !0),
                o.options.revert = o.options._revert,
                o.options.helper = o.options._helper,
                o.placeholder && o.placeholder.remove(),
                i.helper.appendTo(s._parent),
                s._refreshOffsets(e),
                i.position = s._generatePosition(e, !0),
                s._trigger("fromSortable", e),
                s.dropped = !1,
                t.each(s.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }),
    t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, s) {
            var n = t("body")
              , o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")),
            n.css("cursor", o.cursor)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor)
        }
    }),
    t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, s) {
            var n = t(i.helper)
              , o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")),
            n.css("opacity", o.opacity)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }),
    t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(e, i, s) {
            var n = s.options
              , o = !1
              , a = s.scrollParentNotHidden[0]
              , r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)),
            n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))),
            n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))),
            o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }),
    t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, s) {
            var n = s.options;
            s.snapElements = [],
            t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var e = t(this)
                  , i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(e, i, s) {
            var n, o, a, r, h, l, c, u, d, p, f = s.options, g = f.snapTolerance, m = i.offset.left, _ = m + s.helperProportions.width, v = i.offset.top, b = v + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--)
                h = s.snapElements[d].left - s.margins.left,
                l = h + s.snapElements[d].width,
                c = s.snapElements[d].top - s.margins.top,
                u = c + s.snapElements[d].height,
                h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[d].item
                })),
                s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b),
                o = g >= Math.abs(u - v),
                a = g >= Math.abs(h - _),
                r = g >= Math.abs(l - m),
                n && (i.position.top = s._convertPositionTo("relative", {
                    top: c - s.helperProportions.height,
                    left: 0
                }).top),
                o && (i.position.top = s._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top),
                a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h - s.helperProportions.width
                }).left),
                r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)),
                p = n || o || a || r,
                "outer" !== f.snapMode && (n = g >= Math.abs(c - v),
                o = g >= Math.abs(u - b),
                a = g >= Math.abs(h - m),
                r = g >= Math.abs(l - _),
                n && (i.position.top = s._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top),
                o && (i.position.top = s._convertPositionTo("relative", {
                    top: u - s.helperProportions.height,
                    left: 0
                }).top),
                a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left),
                r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l - s.helperProportions.width
                }).left)),
                !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[d].item
                })),
                s.snapElements[d].snapping = n || o || a || r || p)
        }
    }),
    t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, s) {
            var n, o = s.options, a = t.makeArray(t(o.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            });
            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0,
            t(a).each(function(e) {
                t(this).css("zIndex", n + e)
            }),
            this.css("zIndex", n + a.length))
        }
    }),
    t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, s) {
            var n = t(i.helper)
              , o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")),
            n.css("zIndex", o.zIndex)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    }),
    t.ui.draggable,
    t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options, s = i.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = t.isFunction(s) ? s : function(t) {
                return t.is(s)
            }
            ,
            this.proportions = function() {
                return arguments.length ? (e = arguments[0],
                void 0) : e ? e : e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }
            ,
            this._addToManager(i.scope),
            i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [],
            t.ui.ddmanager.droppables[e].push(this)
        },
        _splice: function(t) {
            for (var e = 0; t.length > e; e++)
                t[e] === this && t.splice(e, 1)
        },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function(e, i) {
            if ("accept" === e)
                this.accept = t.isFunction(i) ? i : function(t) {
                    return t.is(i)
                }
                ;
            else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s),
                this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(),
            i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(),
            i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(),
            this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(),
            this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current
              , n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && u(s, t.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, e) ? (n = !0,
                !1) : void 0
            }),
            n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(),
            this._removeHoverClass(),
            this._trigger("drop", e, this.ui(s)),
            this.element) : !1) : !1
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    var u = t.ui.intersect = function() {
        function t(t, e, i) {
            return t >= e && e + i > t
        }
        return function(e, i, s, n) {
            if (!i.offset)
                return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left
              , a = (e.positionAbs || e.position.absolute).top + e.margins.top
              , r = o + e.helperProportions.width
              , h = a + e.helperProportions.height
              , l = i.offset.left
              , c = i.offset.top
              , u = l + i.proportions().width
              , d = c + i.proportions().height;
            switch (s) {
            case "fit":
                return o >= l && u >= r && a >= c && d >= h;
            case "intersect":
                return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;
            case "pointer":
                return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
            case "touch":
                return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
            default:
                return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; o.length > s; s++)
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === o[s].element[0]) {
                            o[s].proportions().height = 0;
                            continue t
                        }
                    o[s].visible = "none" !== o[s].element.css("display"),
                    o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i),
                    o[s].offset = o[s].element.offset(),
                    o[s].proportions({
                        width: o[s].element[0].offsetWidth,
                        height: o[s].element[0].offsetHeight
                    }))
                }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && u(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, i)))
            }),
            s
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, a = u(e, this, this.options.tolerance, i), r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope,
                    o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t(this).droppable("instance").options.scope === n
                    }),
                    o.length && (s = t(o[0]).droppable("instance"),
                    s.greedyChild = "isover" === r)),
                    s && "isover" === r && (s.isover = !1,
                    s.isout = !0,
                    s._out.call(s, i)),
                    this[r] = !0,
                    this["isout" === r ? "isover" : "isout"] = !1,
                    this["isover" === r ? "_over" : "_out"].call(this, i),
                    s && "isout" === r && (s.isout = !1,
                    s.isover = !0,
                    s._over.call(s, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    },
    t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(),
            this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super(),
            this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super(),
            this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super(),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }),
    t.ui.droppable,
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow"))
                return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop"
              , n = !1;
            return e[s] > 0 ? !0 : (e[s] = 1,
            n = e[s] > 0,
            e[s] = 0,
            n)
        },
        _create: function() {
            var e, i = this.options, s = this;
            this._addClass("ui-resizable"),
            t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
            this.elementIsWrapper = !0,
            e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            },
            this.element.css(e),
            this.originalElement.css("margin", 0),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css(e),
            this._proportionallyResize()),
            this._setupHandles(),
            i.autoHide && t(this.element).on("mouseenter", function() {
                i.disabled || (s._removeClass("ui-resizable-autohide"),
                s._handles.show())
            }).on("mouseleave", function() {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"),
                s._handles.hide())
            }),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element),
            e = this.element,
            this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e),
            e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _setOption: function(t, e) {
            switch (this._super(t, e),
            t) {
            case "handles":
                this._removeHandles(),
                this._setupHandles();
                break;
            default:
            }
        },
        _setupHandles: function() {
            var e, i, s, n, o, a = this.options, r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this._handles = t(),
            this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                s = this.handles.split(","),
                this.handles = {},
                i = 0; s.length > i; i++)
                    e = t.trim(s[i]),
                    n = "ui-resizable-" + e,
                    o = t("<div>"),
                    this._addClass(o, "ui-resizable-handle " + n),
                    o.css({
                        zIndex: a.zIndex
                    }),
                    this.handles[e] = ".ui-resizable-" + e,
                    this.element.append(o);
            this._renderAxis = function(e) {
                var i, s, n, o;
                e = e || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]),
                    this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element),
                    o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(),
                    n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    e.css(n, o),
                    this._proportionallyResize()),
                    this._handles = this._handles.add(this.handles[i])
            }
            ,
            this._renderAxis(this.element),
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
            this._handles.disableSelection(),
            this._handles.on("mouseover", function() {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                r.axis = o && o[1] ? o[1] : "se")
            }),
            a.autoHide && (this._handles.hide(),
            this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles)
                s = t(this.handles[i])[0],
                (s === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(e) {
            var i, s, n, o = this.options, a = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            i = this._num(this.helper.css("left")),
            s = this._num(this.helper.css("top")),
            o.containment && (i += t(o.containment).scrollLeft() || 0,
            s += t(o.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: i,
                top: s
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            },
            this.originalPosition = {
                left: i,
                top: s
            },
            this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            },
            this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            n = t(".ui-resizable-" + this.axis).css("cursor"),
            t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n),
            this._addClass("ui-resizable-resizing"),
            this._propagate("start", e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n = this.originalMousePosition, o = this.axis, a = e.pageX - n.left || 0, r = e.pageY - n.top || 0, h = this._change[o];
            return this._updatePrevProperties(),
            h ? (i = h.apply(this, [e, a, r]),
            this._updateVirtualBoundaries(e.shiftKey),
            (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
            i = this._respectSize(i, e),
            this._updateCache(i),
            this._propagate("resize", e),
            s = this._applyChanges(),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            t.isEmptyObject(s) || (this._updatePrevProperties(),
            this._trigger("resize", e, this.ui()),
            this._applyChanges()),
            !1) : !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, o, a, r, h, l = this.options, c = this;
            return this._helper && (i = this._proportionallyResizeElements,
            s = i.length && /textarea/i.test(i[0].nodeName),
            n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height,
            o = s ? 0 : c.sizeDiff.width,
            a = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            },
            r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null,
            h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null,
            l.animate || this.element.css(t.extend(a, {
                top: h,
                left: r
            })),
            c.helper.height(c.size.height),
            c.helper.width(c.size.width),
            this._helper && !l.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this._removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            },
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            },
            (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio,
            s = o.minWidth / this.aspectRatio,
            i = o.maxHeight * this.aspectRatio,
            n = o.maxWidth / this.aspectRatio,
            e > o.minWidth && (o.minWidth = e),
            s > o.minHeight && (o.minHeight = s),
            o.maxWidth > i && (o.maxWidth = i),
            o.maxHeight > n && (o.maxHeight = n)),
            this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position
              , i = this.size
              , s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" === s && (t.left = e.left + (i.width - t.width),
            t.top = null),
            "nw" === s && (t.top = e.top + (i.height - t.height),
            t.left = e.left + (i.width - t.width)),
            t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries
              , i = this.axis
              , s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width
              , n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height
              , o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width
              , a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height
              , r = this.originalPosition.left + this.originalSize.width
              , h = this.originalPosition.top + this.originalSize.height
              , l = /sw|nw|w/.test(i)
              , c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth),
            a && (t.height = e.minHeight),
            s && (t.width = e.maxWidth),
            n && (t.height = e.maxHeight),
            o && l && (t.left = r - e.minWidth),
            s && l && (t.left = r - e.maxWidth),
            a && c && (t.top = h - e.minHeight),
            n && c && (t.top = h - e.maxHeight),
            t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
            t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++)
                i[e] = parseFloat(s[e]) || 0,
                i[e] += parseFloat(n[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
                    t = this._proportionallyResizeElements[e],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                    t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var e = this.element
              , i = this.options;
            this.elementOffset = e.offset(),
            this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"),
            this._addClass(this.helper, this._helper),
            this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize
                  , s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize
                  , n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance")
              , s = i.options
              , n = i._proportionallyResizeElements
              , o = n.length && /textarea/i.test(n[0].nodeName)
              , a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height
              , r = o ? 0 : i.sizeDiff.width
              , h = {
                width: i.size.width - r,
                height: i.size.height - a
            }
              , l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
              , c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }),
                    i._updateCache(s),
                    i._propagate("resize", e)
                }
            })
        }
    }),
    t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, s, n, o, a, r, h = t(this).resizable("instance"), l = h.options, c = h.element, u = l.containment, d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (h.containerElement = t(d),
            /document/.test(u) || u === document ? (h.containerOffset = {
                left: 0,
                top: 0
            },
            h.containerPosition = {
                left: 0,
                top: 0
            },
            h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d),
            i = [],
            t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                i[t] = h._num(e.css("padding" + s))
            }),
            h.containerOffset = e.offset(),
            h.containerPosition = e.position(),
            h.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            },
            s = h.containerOffset,
            n = h.containerSize.height,
            o = h.containerSize.width,
            a = h._hasScroll(d, "left") ? d.scrollWidth : o,
            r = h._hasScroll(d) ? d.scrollHeight : n,
            h.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: a,
                height: r
            }))
        },
        resize: function(e) {
            var i, s, n, o, a = t(this).resizable("instance"), r = a.options, h = a.containerOffset, l = a.position, c = a._aspectRatio || e.shiftKey, u = {
                top: 0,
                left: 0
            }, d = a.containerElement, p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = h),
            l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left),
            c && (a.size.height = a.size.width / a.aspectRatio,
            p = !1),
            a.position.left = r.helper ? h.left : 0),
            l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top),
            c && (a.size.width = a.size.height * a.aspectRatio,
            p = !1),
            a.position.top = a._helper ? h.top : 0),
            n = a.containerElement.get(0) === a.element.parent().get(0),
            o = /relative|absolute/.test(a.containerElement.css("position")),
            n && o ? (a.offset.left = a.parentData.left + a.position.left,
            a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left,
            a.offset.top = a.element.offset().top),
            i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)),
            s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)),
            i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i,
            c && (a.size.height = a.size.width / a.aspectRatio,
            p = !1)),
            s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s,
            c && (a.size.width = a.size.height * a.aspectRatio,
            p = !1)),
            p || (a.position.left = a.prevPosition.left,
            a.position.top = a.prevPosition.top,
            a.size.width = a.prevSize.width,
            a.size.height = a.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance")
              , i = e.options
              , s = e.containerOffset
              , n = e.containerPosition
              , o = e.containerElement
              , a = t(e.helper)
              , r = a.offset()
              , h = a.outerWidth() - e.sizeDiff.width
              , l = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }),
            e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }),
    t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance")
              , i = e.options;
            t(i.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                })
            })
        },
        resize: function(e, i) {
            var s = t(this).resizable("instance")
              , n = s.options
              , o = s.originalSize
              , a = s.originalPosition
              , r = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - a.top || 0,
                left: s.position.left - a.left || 0
            };
            t(n.alsoResize).each(function() {
                var e = t(this)
                  , s = t(this).data("ui-resizable-alsoresize")
                  , n = {}
                  , o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (n[e] = i || null)
                }),
                e.css(n)
            })
        },
        stop: function() {
            t(this).removeData("ui-resizable-alsoresize")
        }
    }),
    t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance")
              , i = e.size;
            e.ghost = e.originalElement.clone(),
            e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }),
            e._addClass(e.ghost, "ui-resizable-ghost"),
            t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost),
            e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }),
    t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"), s = i.options, n = i.size, o = i.originalSize, a = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid, l = h[0] || 1, c = h[1] || 1, u = Math.round((n.width - o.width) / l) * l, d = Math.round((n.height - o.height) / c) * c, p = o.width + u, f = o.height + d, g = s.maxWidth && p > s.maxWidth, m = s.maxHeight && f > s.maxHeight, _ = s.minWidth && s.minWidth > p, v = s.minHeight && s.minHeight > f;
            s.grid = h,
            _ && (p += l),
            v && (f += c),
            g && (p -= l),
            m && (f -= c),
            /^(se|s|e)$/.test(r) ? (i.size.width = p,
            i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p,
            i.size.height = f,
            i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p,
            i.size.height = f,
            i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)),
            f - c > 0 ? (i.size.height = f,
            i.position.top = a.top - d) : (f = c - e.height,
            i.size.height = f,
            i.position.top = a.top + o.height - f),
            p - l > 0 ? (i.size.width = p,
            i.position.left = a.left - u) : (p = l - e.width,
            i.size.width = p,
            i.position.left = a.left + o.width - p))
        }
    }),
    t.ui.resizable,
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(),
                e.selectees = t(e.options.filter, e.element[0]),
                e._addClass(e.selectees, "ui-selectee"),
                e.selectees.each(function() {
                    var i = t(this)
                      , s = i.offset()
                      , n = {
                        left: s.left - e.elementPos.left,
                        top: s.top - e.elementPos.top
                    };
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: n.left,
                        top: n.top,
                        right: n.left + i.outerWidth(),
                        bottom: n.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                })
            }
            ,
            this.refresh(),
            this._mouseInit(),
            this.helper = t("<div>"),
            this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"),
            this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this
              , s = this.options;
            this.opos = [e.pageX, e.pageY],
            this.elementPos = t(this.element[0]).offset(),
            this.options.disabled || (this.selectees = t(s.filter, this.element[0]),
            this._trigger("start", e),
            t(s.appendTo).append(this.helper),
            this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }),
            s.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0,
                e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"),
                s.selected = !1,
                i._addClass(s.$element, "ui-unselecting"),
                s.unselecting = !0,
                i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }),
            t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"),
                i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"),
                n.unselecting = !s,
                n.selecting = s,
                n.selected = s,
                s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }),
                !1) : void 0
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0,
            !this.options.disabled) {
                var i, s = this, n = this.options, o = this.opos[0], a = this.opos[1], r = e.pageX, h = e.pageY;
                return o > r && (i = r,
                r = o,
                o = i),
                a > h && (i = h,
                h = a,
                a = i),
                this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: h - a
                }),
                this.selectees.each(function() {
                    var i = t.data(this, "selectable-item")
                      , l = !1
                      , c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left,
                    c.right = i.right + s.elementPos.left,
                    c.top = i.top + s.elementPos.top,
                    c.bottom = i.bottom + s.elementPos.top,
                    "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom),
                    l ? (i.selected && (s._removeClass(i.$element, "ui-selected"),
                    i.selected = !1),
                    i.unselecting && (s._removeClass(i.$element, "ui-unselecting"),
                    i.unselecting = !1),
                    i.selecting || (s._addClass(i.$element, "ui-selecting"),
                    i.selecting = !0,
                    s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"),
                    i.selecting = !1,
                    s._addClass(i.$element, "ui-selected"),
                    i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"),
                    i.selecting = !1,
                    i.startselected && (s._addClass(i.$element, "ui-unselecting"),
                    i.unselecting = !0),
                    s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))),
                    i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"),
                    i.selected = !1,
                    s._addClass(i.$element, "ui-unselecting"),
                    i.unselecting = !0,
                    s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1,
            t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"),
                s.unselecting = !1,
                s.startselected = !1,
                i._trigger("unselected", e, {
                    unselected: s.element
                })
            }),
            t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"),
                s.selecting = !1,
                s.selected = !0,
                s.startselected = !0,
                i._trigger("selected", e, {
                    selected: s.element
                })
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
        }
    }),
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function() {
            this.containerCache = {},
            this._addClass("ui-sortable"),
            this.refresh(),
            this.offset = this.element.offset(),
            this._mouseInit(),
            this._setHandleClassName(),
            this.ready = !0
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
            t.each(this.items, function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(e, i) {
            var s = null
              , n = !1
              , o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e),
            t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this),
                !1) : void 0
            }),
            t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)),
            s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }),
            n) ? (this.currentItem = s,
            this._removeCurrentsFromItems(),
            !0) : !1 : !1)
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(e),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(e),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            a.containment && this._setContainment(),
            a.cursor && "auto" !== a.cursor && (o = this.document.find("body"),
            this.storedCursor = o.css("cursor"),
            o.css("cursor", a.cursor),
            this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)),
            a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", a.opacity)),
            a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", a.zIndex)),
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !s)
                for (n = this.containers.length - 1; n >= 0; n--)
                    this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)),
            e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))),
            r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i],
                n = s.item[0],
                o = this._intersectsWithPointer(s),
                o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
                        break;
                    this._rearrange(e, s),
                    this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e),
                this.options.revert) {
                    var s = this
                      , n = this.placeholder.offset()
                      , o = this.options.axis
                      , a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                    o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else
                    this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup",{
                    target: null
                })),
                "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)),
                    this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }),
            !s.length && e.key && s.push(e.key + "="),
            s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }),
            s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left
              , i = e + this.helperProportions.width
              , s = this.positionAbs.top
              , n = s + this.helperProportions.height
              , o = t.left
              , a = o + t.width
              , r = t.top
              , h = r + t.height
              , l = this.offset.click.top
              , c = this.offset.click.left
              , u = "x" === this.options.axis || s + l > r && h > s + l
              , d = "y" === this.options.axis || e + c > o && a > e + c
              , p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), o = s && n;
            return o ? (e = this._getDragVerticalDirection(),
            i = this._getDragHorizontalDirection(),
            this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
              , i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
              , s = this._getDragVerticalDirection()
              , n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var s, n, o, a, r = [], h = [], l = this._connectWith();
            if (l && e)
                for (s = l.length - 1; s >= 0; s--)
                    for (o = t(l[s], this.document[0]),
                    n = o.length - 1; n >= 0; n--)
                        a = t.data(o[n], this.widgetFullName),
                        a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            s = h.length - 1; s >= 0; s--)
                h[s][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [],
            this.containers = [this];
            var i, s, n, o, a, r, h, l, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i], this.document[0]),
                    s = n.length - 1; s >= 0; s--)
                        o = t.data(n[s], this.widgetFullName),
                        o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]),
                        this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1],
                r = u[i][0],
                s = 0,
                l = r.length; l > s; s++)
                    h = t(r[s]),
                    h.data(this.widgetName + "-item", a),
                    c.push({
                        item: h,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(e) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1,
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--)
                s = this.items[i],
                s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item,
                e || (s.width = n.outerWidth(),
                s.height = n.outerHeight()),
                o = n.offset(),
                s.left = o.left,
                s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    o = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = o.left,
                    this.containers[i].containerCache.top = o.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder,
            s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase()
                      , n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"),
                    "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")),
                    i || n.css("visibility", "hidden"),
                    n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
                    n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)),
            e.currentItem.after(e.placeholder),
            s.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function(e) {
            var i, s, n, o, a, r, h, l, c, u, d = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0]))
                            continue;
                        d = this.containers[i],
                        p = i
                    } else
                        this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)),
                        this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length)
                    this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)),
                    this.containers[p].containerCache.over = 1);
                else {
                    for (n = 1e4,
                    o = null,
                    c = d.floating || this._isFloating(this.currentItem),
                    a = c ? "left" : "top",
                    r = c ? "width" : "height",
                    u = c ? "pageX" : "pageY",
                    s = this.items.length - 1; s >= 0; s--)
                        t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a],
                        l = !1,
                        e[u] - h > this.items[s][r] / 2 && (l = !0),
                        n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h),
                        o = this.items[s],
                        this.direction = l ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[p])
                        return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()),
                        this.currentContainer.containerCache.over = 1),
                        void 0;
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0),
                    this._trigger("change", e, this._uiHash()),
                    this.containers[p]._trigger("change", e, this._uiHash(this)),
                    this.currentContainer = this.containers[p],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[p]._trigger("over", e, this._uiHash(this)),
                    this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options
              , s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
            s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode),
            ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0],
            i = t(n.containment).offset(),
            s = "hidden" !== t(e).css("overflow"),
            this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1
              , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
            e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top),
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
            e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)),
            n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1],
            a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i,
            s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0],
            o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)),
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)
                    ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }),
            this !== this.currentContainer && (e || (n.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }),
            n.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            n.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            s = this.containers.length - 1; s >= 0; s--)
                e || n.push(i("deactivate", this, this.containers[s])),
                this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])),
                this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null),
            !e) {
                for (s = 0; n.length > s; s++)
                    n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !this.cancelHelperRemoval
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }),
    t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(),
            this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
            this.element.attr("role", "tablist"),
            e.collapsible || e.active !== !1 && null != e.active || (e.active = 0),
            this._processPanels(),
            0 > e.active && (e.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"),
            this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header),
            e.prependTo(this.headers),
            i = this.active.children(".ui-accordion-header-icon"),
            this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"),
            this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"),
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
            this._destroyIcons(),
            t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),
            "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? (this._activate(e),
            void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t || e || this.options.active !== !1 || this._activate(0),
            "icons" === t && (this._destroyIcons(),
            e && this._createIcons()),
            void 0)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t),
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode
                  , s = this.headers.length
                  , n = this.headers.index(e.target)
                  , o = !1;
                switch (e.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    o = this.headers[(n + 1) % s];
                    break;
                case i.LEFT:
                case i.UP:
                    o = this.headers[(n - 1 + s) % s];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(e);
                    break;
                case i.HOME:
                    o = this.headers[0];
                    break;
                case i.END:
                    o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1),
                t(o).attr("tabIndex", 0),
                t(o).trigger("focus"),
                e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(),
            e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1,
            this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1,
            this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function() {
            var t = this.headers
              , e = this.panels;
            this.headers = this.element.find(this.options.header),
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
            e && (this._off(t.not(this.headers)),
            this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var e, i = this.options, s = i.heightStyle, n = this.element.parent();
            this.active = this._findActive(i.active),
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
            this._addClass(this.active.next(), "ui-accordion-content-active"),
            this.active.next().show(),
            this.headers.attr("role", "tab").each(function() {
                var e = t(this)
                  , i = e.uniqueId().attr("id")
                  , s = e.next()
                  , n = s.uniqueId().attr("id");
                e.attr("aria-controls", n),
                s.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(i.event),
            "fill" === s ? (e = n.height(),
            this.element.siblings(":visible").each(function() {
                var i = t(this)
                  , s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            }),
            this.headers.each(function() {
                e -= t(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (e = 0,
            this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(),
                e = Math.max(e, t(this).css("height", "").height()),
                i || t(this).hide()
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i, s, n = this.options, o = this.active, a = t(e.currentTarget), r = a[0] === o[0], h = r && n.collapsible, l = h ? t() : a.next(), c = o.next(), u = {
                oldHeader: o,
                oldPanel: c,
                newHeader: h ? t() : a,
                newPanel: l
            };
            e.preventDefault(),
            r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a),
            this.active = r ? t() : a,
            this._toggle(u),
            this._removeClass(o, "ui-accordion-header-active", "ui-state-active"),
            n.icons && (i = o.children(".ui-accordion-header-icon"),
            this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)),
            r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"),
            n.icons && (s = a.children(".ui-accordion-header-icon"),
            this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)),
            this._addClass(a.next(), "ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel
              , s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = i,
            this.prevHide = s,
            this.options.animate ? this._animate(i, s, e) : (s.hide(),
            i.show(),
            this._toggleComplete(e)),
            s.attr({
                "aria-hidden": "true"
            }),
            s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function() {
                return 0 === parseInt(t(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1),
            i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, e, i) {
            var s, n, o, a = this, r = 0, h = t.css("box-sizing"), l = t.length && (!e.length || t.index() < e.index()), c = this.options.animate || {}, u = l && c.down || c, d = function() {
                a._toggleComplete(i)
            };
            return "number" == typeof u && (o = u),
            "string" == typeof u && (n = u),
            n = n || u.easing || c.easing,
            o = o || u.duration || c.duration,
            e.length ? t.length ? (s = t.show().outerHeight(),
            e.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }),
            t.hide().animate(this.showProps, {
                duration: o,
                easing: n,
                complete: d,
                step: function(t, i) {
                    i.now = Math.round(t),
                    "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r),
                    r = 0)
                }
            }),
            void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel
              , i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"),
            this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t)
        }
    }),
    t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target)
                      , s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e),
                    e.isPropagationStopped() || (this.mouseHandled = !0),
                    i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item")
                          , s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"),
                        this.focus(e, s))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled")
              , i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
            i.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var i, s, n, o, a = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                a = !1,
                s = this.previousFilter || "",
                o = !1,
                n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode),
                clearTimeout(this.filterTimer),
                n === s ? o = !0 : n = s + n,
                i = this._filterMenuItems(n),
                i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i,
                i.length || (n = String.fromCharCode(e.keyCode),
                i = this._filterMenuItems(n)),
                i.length ? (this.focus(e, i),
                this.previousFilter = n,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
            }
            a && e.preventDefault()
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i, s, n, o, a = this, r = this.options.icons.submenu, h = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
            s = h.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this)
                  , i = e.prev()
                  , s = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(s, "ui-menu-icon", "ui-icon " + r),
                i.attr("aria-haspopup", "true").prepend(s),
                e.attr("aria-labelledby", i.attr("id"))
            }),
            this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"),
            e = h.add(this.element),
            i = e.find(this.options.items),
            i.not(".ui-menu-item").each(function() {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
            }),
            n = i.not(".ui-menu-item, .ui-menu-divider"),
            o = n.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"),
            i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t + ""),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            this.active = e.first(),
            s = this.active.children(".ui-menu-item-wrapper"),
            this._addClass(s, null, "ui-state-active"),
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
            n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
            this._addClass(n, null, "ui-state-active"),
            t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            i = e.children(".ui-menu"),
            i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
            this.activeMenu = e.parent(),
            this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0,
            s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0,
            n = e.offset().top - this.activeMenu.offset().top - i - s,
            o = this.activeMenu.scrollTop(),
            a = this.activeMenu.height(),
            r = e.outerHeight(),
            0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer),
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", t, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(t) {
            clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element),
                this._close(s),
                this.blur(e),
                this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"),
                this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element),
            t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(),
            this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()),
            this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this),
                0 > i.offset().top - s - n
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())),
            void 0) : (this.next(e),
            void 0)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this),
                i.offset().top - s + n > 0
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())),
            void 0) : (this.next(e),
            void 0)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }),
    t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element),
            this.valueMethod = this.element[o || a ? "val" : "text"],
            this.isNewMenu = !0,
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        return e = !0,
                        s = !0,
                        i = !0,
                        void 0;
                    e = !1,
                    s = !1,
                    i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                    case o.PAGE_UP:
                        e = !0,
                        this._move("previousPage", n);
                        break;
                    case o.PAGE_DOWN:
                        e = !0,
                        this._move("nextPage", n);
                        break;
                    case o.UP:
                        e = !0,
                        this._keyEvent("previous", n);
                        break;
                    case o.DOWN:
                        e = !0,
                        this._keyEvent("next", n);
                        break;
                    case o.ENTER:
                        this.menu.active && (e = !0,
                        n.preventDefault(),
                        this.menu.select(n));
                        break;
                    case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case o.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                        this.close(n),
                        n.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e)
                        return e = !1,
                        (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(),
                        void 0;
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1,
                    t.preventDefault(),
                    void 0) : (this._searchTimeout(t),
                    void 0)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? (delete this.cancelBlur,
                    void 0) : (clearTimeout(this.searching),
                    this.close(t),
                    this._change(t),
                    void 0)
                }
            }),
            this._initSource(),
            this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur,
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(e, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1,
                    e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(),
                    this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent)
                    }),
                    void 0) : (n = i.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value),
                    s = i.item.attr("aria-label") || n.value,
                    s && t.trim(s).length && (this.liveRegion.children().hide(),
                    t("<div>").text(s).appendTo(this.liveRegion)),
                    void 0)
                },
                menuselect: function(e, i) {
                    var s = i.item.data("ui-autocomplete-item")
                      , n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = n,
                    this._delay(function() {
                        this.previous = n,
                        this.selectedItem = s
                    })),
                    !1 !== this._trigger("select", e, {
                        item: s
                    }) && this._value(s.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = s
                }
            }),
            this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            e && e[0] || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source,
            this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }
            ) : "string" == typeof this.options.source ? (i = this.options.source,
            this.source = function(e, n) {
                s.xhr && s.xhr.abort(),
                s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                var e = this.term === this._value()
                  , i = this.menu.element.is(":visible")
                  , s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null,
                this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(),
            this.term = this._value(),
            t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++,
            this._addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t),
                this.pending--,
                this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t && (t = this._normalize(t)),
            this._trigger("response", null, {
                content: t
            }),
            !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
            this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0,
            this._close(t)
        },
        _close: function(t) {
            this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term),
            this.menu.blur(),
            void 0) : (this.menu[t](e),
            void 0) : (this.search(null, e),
            void 0)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e),
            e.preventDefault())
        },
        _isContentEditable: function(t) {
            if (!t.length)
                return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }),
    t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t)
            })
        }
    }),
    t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults,
            this.liveRegion.children().hide(),
            t("<div>").text(i).appendTo(this.liveRegion))
        }
    }),
    t.ui.autocomplete;
    var d = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"),
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"),
            this.childWidgets.removeData("ui-controlgroup-data"),
            this.element.removeAttr("role"),
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var e = this
              , i = [];
            t.each(this.options.items, function(s, n) {
                var o, a = {};
                return n ? "controlgroupLabel" === s ? (o = e.element.find(n),
                o.each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }),
                e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"),
                i = i.concat(o.get()),
                void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
                    classes: {}
                },
                e.element.find(n).each(function() {
                    var n = t(this)
                      , o = n[s]("instance")
                      , r = t.widget.extend({}, a);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")),
                        o && (r.classes = e._resolveClassesValues(r.classes, o)),
                        n[s](r);
                        var h = n[s]("widget");
                        t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")),
                        i.push(h[0])
                    }
                })),
                void 0) : void 0
            }),
            this.childWidgets = t(t.unique(i)),
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this)
                  , s = i.data("ui-controlgroup-data");
                s && s[e] && s[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"
              , s = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, i),
            this._addClass(t, null, s)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction
              , s = {
                classes: {}
            };
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t],
            s
        },
        _spinnerOptions: function(t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "",
            e.classes["ui-spinner-down"] = "",
            e
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: e ? "auto" : !1,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[t]
            }
        },
        _resolveClassesValues: function(e, i) {
            var s = {};
            return t.each(e, function(n) {
                var o = i.options.classes[n] || "";
                o = t.trim(o.replace(d, "")),
                s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
            }),
            s
        },
        _setOption: function(t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction),
            this._super(t, e),
            "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"),
            void 0) : (this.refresh(),
            void 0)
        },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
            "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
            this._initWidgets(),
            e = this.childWidgets,
            this.options.onlyVisible && (e = e.filter(":visible")),
            e.length && (t.each(["first", "last"], function(t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n),
                    n.element[n.widgetName](o)
                } else
                    i._updateCornerClass(e[s](), s)
            }),
            this._callChildMethod("refresh"))
        }
    }),
    t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var e, i, s = this, n = this._super() || {};
            return this._readType(),
            i = this.element.labels(),
            this.label = t(i[i.length - 1]),
            this.label.length || t.error("No label found for checkboxradio widget"),
            this.originalLabel = "",
            this.label.contents().not(this.element[0]).each(function() {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
            }),
            this.originalLabel && (n.label = this.originalLabel),
            e = this.element[0].disabled,
            null != e && (n.disabled = e),
            n
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
            this._setOption("disabled", this.options.disabled),
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
            "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
            this.icon && this._addClass(this.icon, null, "ui-state-hover")),
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type,
            "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var e, i = this.element[0].name, s = "input[name='" + t.ui.escapeSelector(i) + "']";
            return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function() {
                return 0 === t(this).form().length
            }),
            e.not(this.element)) : t([])
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e),
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e),
            "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler(),
            this.icon && (this.icon.remove(),
            this.iconSpace.remove())
        },
        _setOption: function(t, e) {
            return "label" !== t || e ? (this._super(t, e),
            "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e),
            this.element[0].disabled = e,
            void 0) : (this.refresh(),
            void 0)) : void 0
        },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"),
            this.iconSpace = t("<span> </span>"),
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
            this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank",
            this._addClass(this.icon, "ui-checkboxradio-icon", i),
            e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(),
            this.iconSpace.remove(),
            delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])),
            this.iconSpace && (t = t.not(this.iconSpace[0])),
            t.remove(),
            this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked
              , e = this.element[0].disabled;
            this._updateIcon(t),
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({
                disabled: e
            })
        }
    }]),
    t.ui.checkboxradio,
    t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"),
            t = this.element[0].disabled,
            null != t && (e.disabled = t),
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(),
            this.originalLabel && (e.label = this.originalLabel),
            e
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
            this.hasTitle = !!this.element.attr("title"),
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
            this._addClass("ui-button", "ui-widget"),
            this._setOption("disabled", this.options.disabled),
            this._enhance(),
            this.element.is("a") && this._on({
                keyup: function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(),
                    this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"),
            this.options.icon && (this._updateIcon("icon", this.options.icon),
            this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"),
            this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(e, i) {
            var s = "iconPosition" !== e
              , n = s ? this.options.iconPosition : i
              , o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only")),
            s && this._addClass(this.icon, null, i),
            this._attachIcon(n),
            o ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"),
            this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(n))
        },
        _destroy: function() {
            this.element.removeAttr("role"),
            this.icon && this.icon.remove(),
            this.iconSpace && this.iconSpace.remove(),
            this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel
              , i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0),
            this._super(t)
        },
        _setOption: function(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(),
            this.iconSpace && this.iconSpace.remove())),
            "iconPosition" === t && this._updateIcon(t, e),
            "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e),
            this._updateTooltip()),
            "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e),
            this.icon && (this._attachIcon(this.options.iconPosition),
            this._attachIconSpace(this.options.iconPosition)))),
            this._super(t, e),
            "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e),
            this.element[0].disabled = e,
            e && this.element.blur())
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }),
            this._updateTooltip()
        }
    }),
    t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
            this.options.iconPosition = "end"),
            this._super()
        },
        _setOption: function(t, e) {
            return "text" === t ? (this._super("showLabel", e),
            void 0) : ("showLabel" === t && (this.options.text = e),
            "icon" === t && (this.options.icons.primary = e),
            "icons" === t && (e.primary ? (this._super("icon", e.primary),
            this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary),
            this._super("iconPosition", "end"))),
            this._superApply(arguments),
            void 0)
        }
    }),
    t.fn.button = function(e) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"),
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
    }(t.fn.button),
    t.fn.buttonset = function() {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"),
        "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }),
        this.controlgroup.apply(this, arguments))
    }
    ),
    t.ui.button,
    t.extend(t.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var p;
    t.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return a(this._defaults, t || {}),
            this
        },
        _attachDatepicker: function(e, i) {
            var s, n, o;
            s = e.nodeName.toLowerCase(),
            n = "div" === s || "span" === s,
            e.id || (this.uuid += 1,
            e.id = "dp" + this.uuid),
            o = this._newInst(t(e), n),
            o.settings = t.extend({}, i || {}),
            "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) {
            var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]),
            i.trigger = t([]),
            s.hasClass(this.markerClassName) || (this._attachments(s, i),
            s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
            this._autoSize(i),
            t.data(e, "datepicker", i),
            i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(),
            a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"),
            e[r ? "before" : "after"](i.append)),
            e.off("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            s = this._get(i, "showOn"),
            ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker),
            ("button" === s || "both" === s) && (n = this._get(i, "buttonText"),
            o = this._get(i, "buttonImage"),
            i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)),
            e[r ? "before" : "after"](i.trigger),
            i.trigger.on("click", function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(),
                t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
                !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009,11,20), a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (i = 0,
                    s = 0,
                    n = 0; t.length > n; n++)
                        t[n].length > i && (i = t[n].length,
                        s = n);
                    return s
                }
                ,
                o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
                t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, n, o) {
            var r, h, l, c, u, d = this._dialogInst;
            return d || (this.uuid += 1,
            r = "dp" + this.uuid,
            this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.on("keydown", this._doKeyDown),
            t("body").append(this._dialogInput),
            d = this._dialogInst = this._newInst(this._dialogInput, !1),
            d.settings = {},
            t.data(this._dialogInput[0], "datepicker", d)),
            a(d.settings, n || {}),
            i = i && i.constructor === Date ? this._formatDate(d, i) : i,
            this._dialogInput.val(i),
            this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null,
            this._pos || (h = document.documentElement.clientWidth,
            l = document.documentElement.clientHeight,
            c = document.documentElement.scrollLeft || document.body.scrollLeft,
            u = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            d.settings.onSelect = s,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], "datepicker", d),
            this
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e), n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            t.removeData(e, "datepicker"),
            "input" === i ? (n.append.remove(),
            n.trigger.remove(),
            s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(),
            p === n && (p = null))
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            "input" === i ? (e.disabled = !1,
            o.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass),
            s.children().removeClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            "input" === i ? (e.disabled = !0,
            o.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass),
            s.children().addClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }),
            this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t)
                return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t)
                    return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, i, s) {
            var n, o, r, h, l = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {},
            "string" == typeof i && (n = {},
            n[i] = s),
            l && (this._curInst === l && this._hideDatepicker(),
            o = this._getDateDatepicker(e, !0),
            r = this._getMinMaxDate(l, "min"),
            h = this._getMinMaxDate(l, "max"),
            a(l.settings, n),
            null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)),
            null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)),
            "disabled"in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
            this._attachments(t(e), l),
            this._autoSize(l),
            this._setDate(l, o),
            this._updateAlternate(l),
            this._updateDatepicker(l)),
            void 0)
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, s, n, o = t.datepicker._getInst(e.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0,
            t.datepicker._datepickerShowing)
                switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(),
                    a = !1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv),
                    n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]),
                    i = t.datepicker._get(o, "onSelect"),
                    i ? (s = t.datepicker._formatDate(o),
                    i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                    a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                    a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                    a = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
                    a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                    a = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
                    a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
                }
            else
                36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(),
            e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var i, s, n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")),
            s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
            e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function(e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal)
                try {
                    i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)),
                    i && (t.datepicker._setDateFromField(s),
                    t.datepicker._updateAlternate(s),
                    t.datepicker._updateDatepicker(s))
                } catch (n) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e,
            "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]),
            !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var s, n, o, r, h, l, c;
                s = t.datepicker._getInst(e),
                t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0),
                s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
                n = t.datepicker._get(s, "beforeShow"),
                o = n ? n.apply(e, [e, s]) : {},
                o !== !1 && (a(s.settings, o),
                s.lastVal = null,
                t.datepicker._lastInput = e,
                t.datepicker._setDateFromField(s),
                t.datepicker._inDialog && (e.value = ""),
                t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e),
                t.datepicker._pos[1] += e.offsetHeight),
                r = !1,
                t(e).parents().each(function() {
                    return r |= "fixed" === t(this).css("position"),
                    !r
                }),
                h = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                },
                t.datepicker._pos = null,
                s.dpDiv.empty(),
                s.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }),
                t.datepicker._updateDatepicker(s),
                h = t.datepicker._checkOffset(s, h, r),
                s.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }),
                s.inline || (l = t.datepicker._get(s, "showAnim"),
                c = t.datepicker._get(s, "duration"),
                s.dpDiv.css("z-index", i(t(e)) + 1),
                t.datepicker._datepickerShowing = !0,
                t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null),
                t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"),
                t.datepicker._curInst = s))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4,
            p = e,
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e);
            var i, s = this._getNumberOfMonths(e), n = s[1], a = 17, r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)),
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"),
            e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"),
            e.yearshtml && (i = e.yearshtml,
            setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
                i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth()
              , o = e.dpDiv.outerHeight()
              , a = e.input ? e.input.outerWidth() : 0
              , r = e.input ? e.input.outerHeight() : 0
              , h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft())
              , l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - a : 0,
            i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
            i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0),
            i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0),
            i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
                e = e[n ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, s, n, o, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"),
            s = this._get(a, "duration"),
            n = function() {
                t.datepicker._tidyDialog(a)
            }
            ,
            t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n),
            i || n(),
            this._datepickerShowing = !1,
            o = this._get(a, "onClose"),
            o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            t.blockUI && (t.unblockUI(),
            t("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target)
                  , s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e)
              , o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s),
            this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay,
            n.drawMonth = n.selectedMonth = n.currentMonth,
            n.drawYear = n.selectedYear = n.currentYear) : (i = new Date,
            n.selectedDay = i.getDate(),
            n.drawMonth = n.selectedMonth = i.getMonth(),
            n.drawYear = n.selectedYear = i.getFullYear()),
            this._notifyChange(n),
            this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e)
              , o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(o),
            this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var o, a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]),
            o.selectedDay = o.currentDay = t("a", n).html(),
            o.selectedMonth = o.currentMonth = i,
            o.selectedYear = o.currentYear = s,
            this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e), o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o),
            o.input && o.input.val(i),
            this._updateAlternate(o),
            s = this._get(o, "onSelect"),
            s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"),
            o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(),
            this._lastInput = o.input[0],
            "object" != typeof o.input[0] && o.input.trigger("focus"),
            this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
            s = this._getDate(e),
            n = this.formatDate(i, s, this._getFormatConfig(e)),
            t(o).val(n))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            e = i.getTime(),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(e, i, s) {
            if (null == e || null == i)
                throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "",
            "" === i)
                return null;
            var n, o, a, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, _ = -1, v = -1, b = !1, y = function(t) {
                var i = e.length > n + 1 && e.charAt(n + 1) === t;
                return i && n++,
                i
            }, w = function(t) {
                var e = y(t)
                  , s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2
                  , n = "y" === t ? s : 1
                  , o = RegExp("^\\d{" + n + "," + s + "}")
                  , a = i.substring(h).match(o);
                if (!a)
                    throw "Missing number at position " + h;
                return h += a[0].length,
                parseInt(a[0], 10)
            }, k = function(e, s, n) {
                var o = -1
                  , a = t.map(y(e) ? n : s, function(t, e) {
                    return [[e, t]]
                }).sort(function(t, e) {
                    return -(t[1].length - e[1].length)
                });
                if (t.each(a, function(t, e) {
                    var s = e[1];
                    return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0],
                    h += s.length,
                    !1) : void 0
                }),
                -1 !== o)
                    return o + 1;
                throw "Unknown name at position " + h
            }, x = function() {
                if (i.charAt(h) !== e.charAt(n))
                    throw "Unexpected literal at position " + h;
                h++
            };
            for (n = 0; e.length > n; n++)
                if (b)
                    "'" !== e.charAt(n) || y("'") ? x() : b = !1;
                else
                    switch (e.charAt(n)) {
                    case "d":
                        _ = w("d");
                        break;
                    case "D":
                        k("D", u, d);
                        break;
                    case "o":
                        v = w("o");
                        break;
                    case "m":
                        m = w("m");
                        break;
                    case "M":
                        m = k("M", p, f);
                        break;
                    case "y":
                        g = w("y");
                        break;
                    case "@":
                        r = new Date(w("@")),
                        g = r.getFullYear(),
                        m = r.getMonth() + 1,
                        _ = r.getDate();
                        break;
                    case "!":
                        r = new Date((w("!") - this._ticksTo1970) / 1e4),
                        g = r.getFullYear(),
                        m = r.getMonth() + 1,
                        _ = r.getDate();
                        break;
                    case "'":
                        y("'") ? x() : b = !0;
                        break;
                    default:
                        x()
                    }
            if (i.length > h && (a = i.substr(h),
            !/^\s+/.test(a)))
                throw "Extra/unparsed characters found in date: " + a;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)),
            v > -1)
                for (m = 1,
                _ = v; ; ) {
                    if (o = this._getDaysInMonth(g, m - 1),
                    o >= _)
                        break;
                    m++,
                    _ -= o
                }
            if (r = this._daylightSavingAdjust(new Date(g,m - 1,_)),
            r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _)
                throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e)
                return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function(e) {
                var i = t.length > s + 1 && t.charAt(s + 1) === e;
                return i && s++,
                i
            }, l = function(t, e, i) {
                var s = "" + e;
                if (h(t))
                    for (; i > s.length; )
                        s = "0" + s;
                return s
            }, c = function(t, e, i, s) {
                return h(t) ? s[e] : i[e]
            }, u = "", d = !1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (d)
                        "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                    else
                        switch (t.charAt(s)) {
                        case "d":
                            u += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, o);
                            break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime() - new Date(e.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                        }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "", s = !1, n = function(i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++,
                s
            };
            for (e = 0; t.length > e; e++)
                if (s)
                    "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else
                    switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                    }
            return i
        },
        _get: function(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat")
                  , s = t.lastVal = t.input ? t.input.val() : null
                  , n = this._getDefaultDate(t)
                  , o = n
                  , a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n
                } catch (r) {
                    s = e ? "" : s
                }
                t.selectedDay = o.getDate(),
                t.drawMonth = t.selectedMonth = o.getMonth(),
                t.drawYear = t.selectedYear = o.getFullYear(),
                t.currentDay = s ? o.getDate() : 0,
                t.currentMonth = s ? o.getMonth() : 0,
                t.currentYear = s ? o.getFullYear() : 0,
                this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var n = function(t) {
                var e = new Date;
                return e.setDate(e.getDate() + t),
                e
            }
              , o = function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (s) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l; ) {
                    switch (l[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(l[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += 7 * parseInt(l[1], 10);
                        break;
                    case "m":
                    case "M":
                        a += parseInt(l[1], 10),
                        r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                        break;
                    case "y":
                    case "Y":
                        o += parseInt(l[1], 10),
                        r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
                    }
                    l = h.exec(i)
                }
                return new Date(o,a,r)
            }
              , a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return a = a && "Invalid Date" == "" + a ? s : a,
            a && (a.setHours(0),
            a.setMinutes(0),
            a.setSeconds(0),
            a.setMilliseconds(0)),
            this._daylightSavingAdjust(a)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0),
            t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e
              , n = t.selectedMonth
              , o = t.selectedYear
              , a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(),
            t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(),
            t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(),
            n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths")
              , s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"),
                        !1
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date, B = this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())), Y = this._get(t, "isRTL"), j = this._get(t, "showButtonPanel"), q = this._get(t, "hideIfNoPrevNext"), K = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), $ = this._get(t, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), Q = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - V, te = t.drawYear;
            if (0 > Z && (Z += 12,
            te--),
            J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth() - U[0] * U[1] + 1,J.getDate())),
                e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te,Z,1)) > e; )
                    Z--,
                    0 > Z && (Z = 11,
                    te--);
            for (t.drawMonth = Z,
            t.drawYear = te,
            i = this._get(t, "prevText"),
            i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te,Z - $,1)), this._getFormatConfig(t)) : i,
            s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>",
            n = this._get(t, "nextText"),
            n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te,Z + $,1)), this._getFormatConfig(t)) : n,
            o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>",
            a = this._get(t, "currentText"),
            r = this._get(t, "gotoCurrent") && t.currentDay ? G : B,
            a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
            h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
            l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "",
            c = parseInt(this._get(t, "firstDay"), 10),
            c = isNaN(c) ? 0 : c,
            u = this._get(t, "showWeek"),
            d = this._get(t, "dayNames"),
            p = this._get(t, "dayNamesMin"),
            f = this._get(t, "monthNames"),
            g = this._get(t, "monthNamesShort"),
            m = this._get(t, "beforeShowDay"),
            _ = this._get(t, "showOtherMonths"),
            v = this._get(t, "selectOtherMonths"),
            b = this._getDefaultDate(t),
            y = "",
            k = 0; U[0] > k; k++) {
                for (x = "",
                this.maxRows = 4,
                C = 0; U[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),
                    I = " ui-corner-all",
                    T = "",
                    X) {
                        if (T += "<div class='ui-datepicker-group",
                        U[1] > 1)
                            switch (C) {
                            case 0:
                                T += " ui-datepicker-group-first",
                                I = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case U[1] - 1:
                                T += " ui-datepicker-group-last",
                                I = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle",
                                I = ""
                            }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>",
                    P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                    w = 0; 7 > w; w++)
                        M = (w + c) % 7,
                        P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
                    for (T += P + "</tr></thead><tbody>",
                    S = this._getDaysInMonth(te, Z),
                    te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)),
                    H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7,
                    z = Math.ceil((H + S) / 7),
                    O = X ? this.maxRows > z ? this.maxRows : z : z,
                    this.maxRows = O,
                    A = this._daylightSavingAdjust(new Date(te,Z,1 - H)),
                    N = 0; O > N; N++) {
                        for (T += "<tr>",
                        W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "",
                        w = 0; 7 > w; w++)
                            E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""],
                            F = A.getMonth() !== Z,
                            L = F && !v || !E[0] || Q && Q > A || J && A > J,
                            W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>",
                            A.setDate(A.getDate() + 1),
                            A = this._daylightSavingAdjust(A);
                        T += W + "</tr>"
                    }
                    Z++,
                    Z > 11 && (Z = 0,
                    te++),
                    T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
                    x += T
                }
                y += x
            }
            return y += l,
            t._keyEvent = !1,
            y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"), _ = this._get(t, "changeYear"), v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (o || !m)
                y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (h = s && s.getFullYear() === i,
                l = n && n.getFullYear() === i,
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                c = 0; 12 > c; c++)
                    (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>"
            }
            if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")),
            !t.yearshtml)
                if (t.yearshtml = "",
                o || !_)
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"),
                    d = (new Date).getFullYear(),
                    p = function(t) {
                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(e) ? d : e
                    }
                    ,
                    f = p(u[0]),
                    g = Math.max(f, p(u[1] || "")),
                    f = s ? Math.max(f, s.getFullYear()) : f,
                    g = n ? Math.min(g, n.getFullYear()) : g,
                    t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++)
                        t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>",
                    b += t.yearshtml,
                    t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"),
            v && (b += (!o && m && _ ? "" : "&#xa0;") + y),
            b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0)
              , n = t.selectedMonth + ("M" === i ? e : 0)
              , o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0)
              , a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s,n,o)));
            t.selectedDay = a.getDate(),
            t.drawMonth = t.selectedMonth = a.getMonth(),
            t.drawYear = t.selectedYear = a.getFullYear(),
            ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min")
              , s = this._getMinMaxDate(t, "max")
              , n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t,e,1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t)
              , o = this._daylightSavingAdjust(new Date(i,s + (0 > e ? e : n[0] * n[1]),1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
            this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null, h = this._get(t, "yearRange");
            return h && (i = h.split(":"),
            s = (new Date).getFullYear(),
            a = parseInt(i[0], 10),
            r = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (a += s),
            i[1].match(/[+\-].*/) && (r += s)),
            (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
            {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay,
            t.currentMonth = t.selectedMonth,
            t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }),
    t.fn.datepicker = function(e) {
        if (!this.length)
            return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick),
        t.datepicker.initialized = !0),
        0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }
    ,
    t.datepicker = new s,
    t.datepicker.initialized = !1,
    t.datepicker.uuid = (new Date).getTime(),
    t.datepicker.version = "1.12.1",
    t.datepicker,
    t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
            this.options.disabled && (this.options.disabled = !1),
            this._createWrapper(),
            this.element.show().removeAttr("title").appendTo(this.uiDialog),
            this._addClass("ui-dialog-content", "ui-widget-content"),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && t.fn.draggable && this._makeDraggable(),
            this.options.resizable && t.fn.resizable && this._makeResizable(),
            this._isOpen = !1,
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(),
            this._destroyOverlay(),
            this.element.removeUniqueId().css(this.originalCss).detach(),
            this.uiDialog.remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            t = e.parent.children().eq(e.index),
            t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1,
            this._focusedElement = null,
            this._destroyOverlay(),
            this._untrackInstance(),
            this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
            this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(e, i) {
            var s = !1
              , n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +t(this).css("z-index")
            }).get()
              , o = Math.max.apply(null, n);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1),
            s = !0),
            s && !i && this._trigger("focus", e),
            s
        },
        open: function() {
            var e = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(),
            void 0) : (this._isOpen = !0,
            this.opener = t(t.ui.safeActiveElement(this.document[0])),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(),
                e._trigger("focus")
            }),
            this._makeFocusTarget(),
            this._trigger("open"),
            void 0)
        },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")),
            t.length || (t = this.element.find(":tabbable")),
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
            t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
            t.length || (t = this.uiDialog),
            t.eq(0).trigger("focus")
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0])
                  , i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }
            e.preventDefault(),
            i.call(this),
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
            this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
                        return e.preventDefault(),
                        this.close(e),
                        void 0;
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable")
                          , s = i.filter(":first")
                          , n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                            n.trigger("focus")
                        }),
                        e.preventDefault()) : (this._delay(function() {
                            s.trigger("focus")
                        }),
                        e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"),
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }),
            this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar),
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
            this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(),
                    this.close(t)
                }
            }),
            e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),
            this._addClass(e, "ui-dialog-title"),
            this._title(e),
            this.uiDialogTitlebar.prependTo(this.uiDialog),
            this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>"),
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane),
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
            this._createButtons()
        },
        _createButtons: function() {
            var e = this
              , i = this.options.buttons;
            return this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"),
            void 0) : (t.each(i, function(i, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s,
                s = t.extend({
                    type: "button"
                }, s),
                n = s.click,
                o = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text
                },
                delete s.click,
                delete s.icon,
                delete s.iconPosition,
                delete s.showLabel,
                delete s.icons,
                "boolean" == typeof s.text && delete s.text,
                t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() {
                    n.apply(e.element[0], arguments)
                })
            }),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog),
            void 0)
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this
              , s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-dragging"),
                    i._blockFrames(),
                    i._trigger("dragStart", s, e(n))
                },
                drag: function(t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function(n, o) {
                    var a = o.offset.left - i.document.scrollLeft()
                      , r = o.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    },
                    i._removeClass(t(this), "ui-dialog-dragging"),
                    i._unblockFrames(),
                    i._trigger("dragStop", n, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this
              , s = this.options
              , n = s.resizable
              , o = this.uiDialog.css("position")
              , a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-resizing"),
                    i._blockFrames(),
                    i._trigger("resizeStart", s, e(n))
                },
                resize: function(t, s) {
                    i._trigger("resize", t, e(s))
                },
                stop: function(n, o) {
                    var a = i.uiDialog.offset()
                      , r = a.left - i.document.scrollLeft()
                      , h = a.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(),
                    s.width = i.uiDialog.width(),
                    s.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
                        of: i.window
                    },
                    i._removeClass(t(this), "ui-dialog-resizing"),
                    i._unblockFrames(),
                    i._trigger("resizeStop", n, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(e) {
                    this._makeFocusTarget(),
                    this._focusedElement = t(e.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(),
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var e = this._trackingInstances()
              , i = t.inArray(this, e);
            -1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function() {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [],
            this.document.data("ui-dialog-instances", t)),
            t
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this
              , s = !1
              , n = {};
            t.each(e, function(t, e) {
                i._setOption(t, e),
                t in i.sizeRelatedOptions && (s = !0),
                t in i.resizableRelatedOptions && (n[t] = e)
            }),
            s && (this._size(),
            this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function(e, i) {
            var s, n, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i),
            "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === e && this._createButtons(),
            "closeText" === e && this.uiDialogTitlebarClose.button({
                label: t("<a>").text("" + this.options.closeText).html()
            }),
            "draggable" === e && (s = o.is(":data(ui-draggable)"),
            s && !i && o.draggable("destroy"),
            !s && i && this._makeDraggable()),
            "position" === e && this._position(),
            "resizable" === e && (n = o.is(":data(ui-resizable)"),
            n && !i && o.resizable("destroy"),
            n && "string" == typeof i && o.resizable("option", "handles", i),
            n || i === !1 || this._makeResizable()),
            "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            s.minWidth > s.width && (s.width = s.minWidth),
            t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(),
            e = Math.max(0, s.minHeight - t),
            i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none",
            "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() {
                    e = !1
                }),
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(t) {
                        e || this._allowInteraction(t) || (t.preventDefault(),
                        this._trackingInstances()[0]._focusTabbable())
                    }
                }),
                this.overlay = t("<div>").appendTo(this._appendTo()),
                this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }),
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"),
                this.document.removeData("ui-dialog-overlays")),
                this.overlay.remove(),
                this.overlay = null
            }
        }
    }),
    t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(),
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
            this._superApply(arguments)
        }
    }),
    t.ui.dialog,
    t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(),
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }),
            this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
            this.valueDiv = t("<div>").appendTo(this.element),
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t),
            this._refreshValue(),
            void 0)
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value),
            this.indeterminate = t === !1,
            "number" != typeof t && (t = 0),
            this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value,
            this._super(t),
            this.options.value = this._constrainedValue(e),
            this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)),
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value
              , i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"),
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate),
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv),
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null)),
            this.oldValue !== e && (this.oldValue = e,
            this._trigger("change")),
            e === this.options.max && this._trigger("complete")
        }
    }),
    t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            },
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            this._rendered = !1,
            this.menuItems = t()
        },
        _drawButton: function() {
            var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button),
            this._on(this.labels, {
                click: function(t) {
                    this.button.focus(),
                    t.preventDefault()
                }
            }),
            this.element.hide(),
            this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element),
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
            e = t("<span>").appendTo(this.button),
            this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
            this.buttonItem = this._renderButtonItem(s).appendTo(this.button),
            this.options.width !== !1 && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", function() {
                i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }),
            this.menuWrap = t("<div>").append(this.menu),
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
            this.menuWrap.appendTo(this._appendTo()),
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(t, i) {
                    t.preventDefault(),
                    e._setSelection(),
                    e._select(i.item.data("ui-selectmenu-item"), t)
                },
                focus: function(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                        item: s
                    }),
                    e.isOpen || e._select(s, t)),
                    e.focusIndex = s.index,
                    e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"),
            this.menuInstance._off(this.menu, "mouseleave"),
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }
            ,
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(),
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})),
            null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(),
            this._parseOptions(e),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),
            this._rendered = !0,
            e.length && (t = this._getSelectedItem(),
            this.menuInstance.focus(null, t),
            this._setAria(t.data("ui-selectmenu-item")),
            this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
            this.menuItems.length && (this.isOpen = !0,
            this._toggleAttr(),
            this._resizeMenu(),
            this._position(),
            this._on(this.document, this._documentClick),
            this._trigger("open", t)))
        },
        _position: function() {
            this.menuWrap.position(t.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(t) {
            this.isOpen && (this.isOpen = !1,
            this._toggleAttr(),
            this.range = null,
            this._off(this.document),
            this._trigger("close", t))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(e) {
            var i = t("<span>");
            return this._setText(i, e.label),
            this._addClass(i, "ui-selectmenu-text"),
            i
        },
        _renderMenu: function(e, i) {
            var s = this
              , n = "";
            t.each(i, function(i, o) {
                var a;
                o.optgroup !== n && (a = t("<li>", {
                    text: o.optgroup
                }),
                s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                a.appendTo(e),
                n = o.optgroup),
                s._renderItemData(e, o)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function(e, i) {
            var s = t("<li>")
              , n = t("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(s, null, "ui-state-disabled"),
            this._setText(n, i.label),
            s.append(n).appendTo(e)
        },
        _setText: function(t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function(t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"),
            n += ":not(.ui-state-disabled)"),
            s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0),
            s.length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? (t = window.getSelection(),
            t.removeAllRanges(),
            t.addRange(this.range)) : this.range.select(),
            this.button.focus())
        },
        _documentClick: {
            mousedown: function(e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection(),
                t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(t) {
                this._setSelection(),
                this._toggle(t)
            },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                case t.ui.keyCode.TAB:
                case t.ui.keyCode.ESCAPE:
                    this.close(e),
                    i = !1;
                    break;
                case t.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(e);
                    break;
                case t.ui.keyCode.UP:
                    e.altKey ? this._toggle(e) : this._move("prev", e);
                    break;
                case t.ui.keyCode.DOWN:
                    e.altKey ? this._toggle(e) : this._move("next", e);
                    break;
                case t.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this._move("prev", e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this._move("next", e);
                    break;
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.PAGE_UP:
                    this._move("first", e);
                    break;
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_DOWN:
                    this._move("last", e);
                    break;
                default:
                    this.menu.trigger(e),
                    i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index,
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)),
            this._setAria(t),
            this._trigger("select", e, {
                item: t
            }),
            t.index !== i && this._trigger("change", e, {
                item: t
            }),
            this.close(e)
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }),
            this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.menuInstance.option("disabled", t),
            this.button.attr("aria-disabled", t),
            this._toggleClass(this.button, null, "ui-state-disabled", t),
            this.element.prop("disabled", t),
            t ? (this.button.attr("tabindex", -1),
            this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            e && e[0] || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen),
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var t = this.options.width;
            return t === !1 ? (this.button.css("width", ""),
            void 0) : (null === t && (t = this.element.show().outerWidth(),
            this.element.hide()),
            this.button.outerWidth(t),
            void 0)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"),
            t
        },
        _parseOptions: function(e) {
            var i = this
              , s = [];
            e.each(function(e, n) {
                s.push(i._parseOption(t(n), e))
            }),
            this.items = s
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr("for", this.ids.element)
        }
    }]),
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
            this._refresh(),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle"), o = "<span tabindex='0'></span>", a = [];
            for (i = s.values && s.values.length || 1,
            n.length > i && (n.slice(i).remove(),
            n = n.slice(0, i)),
            e = n.length; i > e; e++)
                a.push(o);
            this.handles = n.add(t(a.join("")).appendTo(this.element)),
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
            this.handle = this.handles.eq(0),
            this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element),
            this._addClass(this.range, "ui-slider-range")),
            ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, r, h, l, c = this, u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            i = {
                x: e.pageX,
                y: e.pageY
            },
            s = this._normValueFromMouse(i),
            n = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i,
                o = t(this),
                a = e)
            }),
            r = this._start(e, a),
            r === !1 ? !1 : (this._mouseSliding = !0,
            this._handleIndex = a,
            this._addClass(o, null, "ui-state-active"),
            o.trigger("focus"),
            h = o.offset(),
            l = !t(e.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - h.left - o.width() / 2,
                top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(e, a, s),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }
              , i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i),
            !1
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width,
            i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            s = i / e,
            s > 1 && (s = 1),
            0 > s && (s = 0),
            "vertical" === this.orientation && (s = 1 - s),
            n = this._valueMax() - this._valueMin(),
            o = this._valueMin() + s * n,
            this._trimAlignValue(o)
        },
        _uiHash: function(t, e, i) {
            var s = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t),
            s.values = i || this.values()),
            s
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function(t, e, i) {
            var s, n, o = this.value(), a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1),
            o = this.values(e),
            2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
            a[e] = i),
            i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)),
            s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e,
            this._trigger("change", t, this._uiHash(e)))
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t),
            this._refreshValue(),
            this._change(null, 0),
            void 0) : this._value()
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1)
                return this.options.values[e] = this._trimAlignValue(i),
                this._refreshValue(),
                this._change(null, e),
                void 0;
            if (!arguments.length)
                return this._values();
            if (!t.isArray(arguments[0]))
                return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values,
            n = arguments[0],
            o = 0; s.length > o; o += 1)
                s[o] = this._trimAlignValue(n[o]),
                this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            t.isArray(this.options.values) && (n = this.options.values.length),
            this._super(e, i),
            e) {
            case "orientation":
                this._detectOrientation(),
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(i),
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                s = n - 1; s >= 0; s--)
                    this._change(null, s);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0,
                this._calculateNewMax(),
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length)
                return e = this.options.values[t],
                e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(),
                s = 0; i.length > s; s += 1)
                    i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t)
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1
              , i = (t - this._valueMin()) % e
              , s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
            parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max
              , e = this._valueMin()
              , i = this.options.step
              , s = Math.round((t - e) / i) * i;
            t = s + e,
            t > this.options.max && (t -= i),
            this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function(t) {
            var e = "" + t
              , i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }),
            "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range, r = this.options, h = this, l = this._animateOff ? !1 : r.animate, c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())),
                c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%",
                t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate),
                h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate),
                1 === s && h.range[l ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate),
                1 === s && h.range[l ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))),
                e = i
            }) : (s = this.value(),
            n = this._valueMin(),
            o = this._valueMax(),
            i = o !== n ? 100 * ((s - n) / (o - n)) : 0,
            c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
            this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate),
            "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, r.animate),
            "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate),
            "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, r.animate),
            "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (e.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    this._addClass(t(e.target), null, "ui-state-active"),
                    i = this._start(e, a),
                    i === !1))
                        return
                }
                switch (o = this.options.step,
                s = n = this._hasMultipleValues() ? this.values(a) : this.value(),
                e.keyCode) {
                case t.ui.keyCode.HOME:
                    n = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    n = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (s === this._valueMax())
                        return;
                    n = this._trimAlignValue(s + o);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (s === this._valueMin())
                        return;
                    n = this._trimAlignValue(s - o)
                }
                this._slide(e, a, n)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(e, i),
                this._change(e, i),
                this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }),
    t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            "" !== this.value() && this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = this._super()
              , i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                null != n && n.length && (e[s] = n)
            }),
            e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? (delete this.cancelBlur,
                void 0) : (this._stop(),
                this._refresh(),
                this.previous !== this.element.val() && this._trigger("change", t),
                void 0)
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t))
                        return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                    clearTimeout(this.mousewheelTimer),
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100),
                    t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
                    e || (this.element.trigger("focus"),
                    this.previous = s,
                    this._delay(function() {
                        this.previous = s
                    }))
                }
                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(),
                e.preventDefault(),
                i.call(this),
                this.cancelBlur = !0,
                this._delay(function() {
                    delete this.cancelBlur,
                    i.call(this)
                }),
                this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e),
                void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function() {
            this._enhance(),
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
            this._addClass("ui-spinner-input"),
            this.element.attr("role", "spinbutton"),
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }),
            this._removeClass(this.buttons, "ui-corner-all"),
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }),
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }),
            this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(e) {
            var i = this.options
              , s = t.ui.keyCode;
            switch (e.keyCode) {
            case s.UP:
                return this._repeat(null, 1, e),
                !0;
            case s.DOWN:
                return this._repeat(null, -1, e),
                !0;
            case s.PAGE_UP:
                return this._repeat(null, i.page, e),
                !0;
            case s.PAGE_DOWN:
                return this._repeat(null, -i.page, e),
                !0
            }
            return !1
        },
        _start: function(t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1),
            this.spinning = !0,
            !0) : !1
        },
        _repeat: function(t, e, i) {
            t = t || 500,
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t),
            this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1),
            i = this._adjustValue(i + t * this._increment(this.counter)),
            this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i),
            this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function(t) {
            var e = "" + t
              , i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0,
            i = t - e,
            i = Math.round(i / s.step) * s.step,
            t = e + i,
            t = parseFloat(t.toFixed(this._precision())),
            null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            var i, s, n;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()),
            this.options[t] = e,
            this.element.val(this._format(i)),
            void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)),
            "icons" === t && (s = this.buttons.first().find(".ui-icon"),
            this._removeClass(s, null, this.options.icons.up),
            this._addClass(s, null, e.up),
            n = this.buttons.last().find(".ui-icon"),
            this._removeClass(n, null, this.options.icons.down),
            this._addClass(n, null, e.down)),
            this._super(t, e),
            void 0)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
            this.element.prop("disabled", !!t),
            this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: r(function(t) {
            this._super(t)
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
            "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var t = this.value();
            return null === t ? !1 : t === this._adjustValue(t)
        },
        _value: function(t, e) {
            var i;
            "" !== t && (i = this._parse(t),
            null !== i && (e || (i = this._adjustValue(i)),
            t = this._format(i))),
            this.element.val(t),
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: r(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step),
            this._stop())
        },
        stepDown: r(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step),
            this._stop())
        },
        pageUp: r(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: r(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            return arguments.length ? (r(this._value).call(this, t),
            void 0) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    }),
    t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a></a><a></a>"
        }
    }),
    t.ui.spinner,
    t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, s;
                i = e.href.replace(t, ""),
                s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i)
                } catch (n) {}
                try {
                    s = decodeURIComponent(s)
                } catch (n) {}
                return e.hash.length > 1 && i === s
            }
        }(),
        _create: function() {
            var e = this
              , i = this.options;
            this.running = !1,
            this._addClass("ui-tabs", "ui-widget ui-widget-content"),
            this._toggleClass("ui-tabs-collapsible", null, i.collapsible),
            this._processTabs(),
            i.active = this._initialActive(),
            t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()),
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(),
            this._refresh(),
            this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active
              , i = this.options.collapsible
              , s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, n) {
                return t(n).attr("aria-controls") === s ? (e = i,
                !1) : void 0
            }),
            null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)),
            e !== !1 && (e = this.tabs.index(this.tabs.eq(e)),
            -1 === e && (e = i ? !1 : 0)),
            !i && e === !1 && this.anchors.length && (e = 0),
            e
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li")
              , s = this.tabs.index(i)
              , n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                    s++;
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.LEFT:
                    n = !1,
                    s--;
                    break;
                case t.ui.keyCode.END:
                    s = this.anchors.length - 1;
                    break;
                case t.ui.keyCode.HOME:
                    s = 0;
                    break;
                case t.ui.keyCode.SPACE:
                    return e.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(s),
                    void 0;
                case t.ui.keyCode.ENTER:
                    return e.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(s === this.options.active ? !1 : s),
                    void 0;
                default:
                    return
                }
                e.preventDefault(),
                clearTimeout(this.activating),
                s = this._focusNextTab(s, n),
                e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"),
                this.tabs.eq(s).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", s)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(),
            this.active.trigger("focus"))
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(e, i) {
            function s() {
                return e > n && (e = 0),
                0 > e && (e = n),
                e
            }
            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled); )
                e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e),
            this.tabs.eq(t).trigger("focus"),
            t
        },
        _setOption: function(t, e) {
            return "active" === t ? (this._activate(e),
            void 0) : (this._super(t, e),
            "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e),
            e || this.options.active !== !1 || this._activate(0)),
            "event" === t && this._setupEvents(e),
            "heightStyle" === t && this._setupHeightStyle(e),
            void 0)
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options
              , i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }),
            this._processTabs(),
            e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1,
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1,
            this.active = t()),
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this
              , i = this.tabs
              , s = this.anchors
              , n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"),
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }),
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
            this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }),
            this._addClass(this.anchors, "ui-tabs-anchor"),
            this.panels = t(),
            this.anchors.each(function(i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"), h = t(s).closest("li"), l = h.attr("aria-controls");
                e._isLocal(s) ? (n = s.hash,
                a = n.substring(1),
                o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id,
                n = "#" + a,
                o = e.element.find(n),
                o.length || (o = e._createPanel(a),
                o.insertAfter(e.panels[i - 1] || e.tablist)),
                o.attr("aria-live", "polite")),
                o.length && (e.panels = e.panels.add(o)),
                l && h.data("ui-tabs-aria-controls", l),
                h.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }),
                o.attr("aria-labelledby", r)
            }),
            this.panels.attr("role", "tabpanel"),
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
            i && (this._off(i.not(this.tabs)),
            this._off(s.not(this.anchors)),
            this._off(n.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1),
            n = 0; s = this.tabs[n]; n++)
                i = t(s),
                e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"),
                this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"),
                this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e,
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }),
            this._on(this.anchors, i),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var e = t(this)
                  , s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }),
            this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0,
            this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options
              , s = this.active
              , n = t(e.currentTarget)
              , o = n.closest("li")
              , a = o[0] === s[0]
              , r = a && i.collapsible
              , h = r ? t() : this._getPanelForTab(o)
              , l = s.length ? this._getPanelForTab(s) : t()
              , c = {
                oldTab: s,
                oldPanel: l,
                newTab: r ? t() : o,
                newPanel: h
            };
            e.preventDefault(),
            o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o),
            this.active = a ? t() : o,
            this.xhr && this.xhr.abort(),
            l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
            h.length && this.load(this.tabs.index(o), e),
            this._toggle(e, c))
        },
        _toggle: function(e, i) {
            function s() {
                o.running = !1,
                o._trigger("activate", e, i)
            }
            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(),
                s())
            }
            var o = this
              , a = i.newPanel
              , r = i.oldPanel;
            this.running = !0,
            r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                n()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
            r.hide(),
            n()),
            r.attr("aria-hidden", "true"),
            i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            a.attr("aria-hidden", "false"),
            i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active),
            i = s.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))),
            e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.tablist.removeAttr("role").off(this.eventNamespace),
            this.anchors.removeAttr("role tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }),
            this.tabs.each(function() {
                var e = t(this)
                  , i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e),
            i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null
            })),
            this._setOptionDisabled(i))
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === e)
                    i = !0;
                else {
                    if (e = this._getIndex(e),
                    -1 !== t.inArray(e, i))
                        return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this
              , n = this.tabs.eq(e)
              , o = n.find(".ui-tabs-anchor")
              , a = this._getPanelForTab(n)
              , r = {
                tab: n,
                panel: a
            }
              , h = function(t, e) {
                "abort" === e && s.panels.stop(!1, !0),
                s._removeClass(n, "ui-tabs-loading"),
                a.removeAttr("aria-busy"),
                t === s.xhr && delete s.xhr
            };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)),
            this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"),
            a.attr("aria-busy", "true"),
            this.xhr.done(function(t, e, n) {
                setTimeout(function() {
                    a.html(t),
                    s._trigger("load", i, r),
                    h(n, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    h(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }),
    t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments),
            this._addClass(this.tabs, "ui-tab")
        }
    }),
    t.ui.tabs,
    t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i),
            e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id")
              , s = (e.attr("aria-describedby") || "").split(/\s+/)
              , n = t.inArray(i, s);
            -1 !== n && s.splice(n, 1),
            e.removeData("ui-tooltip-id"),
            s = t.trim(s.join(" ")),
            s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this.disabledTitles = t([])
        },
        _setOption: function(e, i) {
            var s = this;
            this._super(e, i),
            "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e.element)
            })
        },
        _setOptionDisabled: function(t) {
            this[t ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0],
                e.close(n, !0)
            }),
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }),
            this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this
              , s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")),
            s.data("ui-tooltip-open", !0),
            e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"),
                e.target = e.currentTarget = this,
                i.close(e, !0)),
                s.attr("title") && (s.uniqueId(),
                i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                },
                s.attr("title", ""))
            }),
            this._registerCloseHandlers(e, s),
            this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
                n._delay(function() {
                    t.data("ui-tooltip-open") && (e && (e.type = o),
                    this._open(e, t, i))
                })
            }),
            i && this._open(e, t, i),
            void 0)
        },
        _open: function(e, i, s) {
            function n(t) {
                l.of = t,
                a.is(":hidden") || a.position(l)
            }
            var o, a, r, h, l = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i))
                    return o.tooltip.find(".ui-tooltip-content").html(s),
                    void 0;
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
                o = this._tooltip(i),
                a = o.tooltip,
                this._addDescribedBy(i, a.attr("id")),
                a.find(".ui-tooltip-content").html(s),
                this.liveRegion.children().hide(),
                h = t("<div>").html(a.find(".ui-tooltip-content").html()),
                h.removeAttr("name").find("[name]").removeAttr("name"),
                h.removeAttr("id").find("[id]").removeAttr("id"),
                h.appendTo(this.liveRegion),
                this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                    mousemove: n
                }),
                n(e)) : a.position(t.extend({
                    of: i
                }, this.options.position)),
                a.hide(),
                this._show(a, this.options.show),
                this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (n(l.of),
                    clearInterval(r))
                }, t.fx.interval)),
                this._trigger("open", e, {
                    tooltip: a
                })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var s = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0],
                        this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() {
                this._removeTooltip(this._find(i).tooltip)
            }
            ),
            e && "mouseover" !== e.type || (s.mouseleave = "close"),
            e && "focusin" !== e.type || (s.focusout = "close"),
            this._on(!0, i, s)
        },
        close: function(e) {
            var i, s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
            return o ? (i = o.tooltip,
            o.closing || (clearInterval(this.delayedShow),
            n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")),
            this._removeDescribedBy(n),
            o.hiding = !0,
            i.stop(!0),
            this._hide(i, this.options.hide, function() {
                s._removeTooltip(t(this))
            }),
            n.removeData("ui-tooltip-open"),
            this._off(n, "mouseleave focusout keyup"),
            n[0] !== this.element[0] && this._off(n, "remove"),
            this._off(this.document, "mousemove"),
            e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title),
                delete s.parents[e]
            }),
            o.closing = !0,
            this._trigger("close", e, {
                tooltip: i
            }),
            o.hiding || (o.closing = !1)),
            void 0) : (n.removeData("ui-tooltip-open"),
            void 0)
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip")
              , s = t("<div>").appendTo(i)
              , n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"),
            this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
            i.appendTo(this._appendTo(e)),
            this.tooltips[n] = {
                element: e,
                tooltip: i
            }
        },
        _find: function(t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        },
        _removeTooltip: function(t) {
            t.remove(),
            delete this.tooltips[t.attr("id")]
        },
        _appendTo: function(t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body),
            e
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur")
                  , o = s.element;
                n.target = n.currentTarget = o[0],
                e.close(n, !0),
                t("#" + i).remove(),
                o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
                o.removeData("ui-tooltip-title"))
            }),
            this.liveRegion.remove()
        }
    }),
    t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass),
            t
        }
    }),
    t.ui.tooltip;
    var f = "ui-effects-"
      , g = "ui-effects-style"
      , m = "ui-effects-animated"
      , _ = t;
    t.effects = {
        effect: {}
    },
    function(t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t),
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }
        function s(i) {
            var s = l()
              , n = s._rgba = [];
            return i = i.toLowerCase(),
            f(h, function(t, o) {
                var a, r = o.re.exec(i), h = r && o.parse(r), l = o.space || "rgba";
                return h ? (a = s[l](h),
                s[c[l].cache] = a[c[l].cache],
                n = s._rgba = a._rgba,
                !1) : e
            }),
            n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent),
            s) : o[i]
        }
        function n(t, e, i) {
            return i = (i + 1) % 1,
            1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }
        var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], l = t.Color = function(e, i, s, n) {
            return new t.Color.fn.parse(e,i,s,n)
        }
        , c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, d = l.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)",
        d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
        f(c, function(t, e) {
            e.cache = "_" + t,
            e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        l.fn = t.extend(l.prototype, {
            parse: function(n, a, r, h) {
                if (n === e)
                    return this._rgba = [null, null, null, null],
                    this;
                (n.jquery || n.nodeType) && (n = t(n).css(a),
                a = e);
                var u = this
                  , d = t.type(n)
                  , p = this._rgba = [];
                return a !== e && (n = [n, a, r, h],
                d = "array"),
                "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }),
                this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                }) : f(c, function(e, s) {
                    var o = s.cache;
                    f(s.props, function(t, e) {
                        if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t])
                                return;
                            u[o] = s.to(u._rgba)
                        }
                        u[o][e.idx] = i(n[t], e, !0)
                    }),
                    u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1,
                    s.from && (u._rgba = s.from(u[o])))
                }),
                this) : e
            },
            is: function(t) {
                var i = l(t)
                  , s = !0
                  , n = this;
                return f(c, function(t, o) {
                    var a, r = i[o.cache];
                    return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [],
                    f(o.props, function(t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
                    })),
                    s
                }),
                s
            },
            _space: function() {
                var t = []
                  , e = this;
                return f(c, function(i, s) {
                    e[s.cache] && t.push(i)
                }),
                t.pop()
            },
            transition: function(t, e) {
                var s = l(t)
                  , n = s._space()
                  , o = c[n]
                  , a = 0 === this.alpha() ? l("transparent") : this
                  , r = a[o.cache] || o.to(a._rgba)
                  , h = r.slice();
                return s = s[o.cache],
                f(o.props, function(t, n) {
                    var o = n.idx
                      , a = r[o]
                      , l = s[o]
                      , c = u[n.type] || {};
                    null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)),
                    h[o] = i((l - a) * e + a, n)))
                }),
                this[n](h)
            },
            blend: function(e) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice()
                  , s = i.pop()
                  , n = l(e)._rgba;
                return l(t.map(i, function(t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            },
            toRgbaString: function() {
                var e = "rgba("
                  , i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(),
                e = "rgb("),
                e + i.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla("
                  , i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                });
                return 1 === i[3] && (i.pop(),
                e = "hsl("),
                e + i.join() + ")"
            },
            toHexString: function(e) {
                var i = this._rgba.slice()
                  , s = i.pop();
                return e && i.push(~~(255 * s)),
                "#" + t.map(i, function(t) {
                    return t = (t || 0).toString(16),
                    1 === t.length ? "0" + t : t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        l.fn.parse.prototype = l.fn,
        c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o), h = Math.min(s, n, o), l = r - h, c = r + h, u = .5 * c;
            return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240,
            i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c),
            [Math.round(e) % 360, i, u, null == a ? 1 : a]
        }
        ,
        c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e = t[0] / 360
              , i = t[1]
              , s = t[2]
              , o = t[3]
              , a = .5 >= s ? s * (1 + i) : s + i - s * i
              , r = 2 * s - a;
            return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
        }
        ,
        f(c, function(s, n) {
            var o = n.props
              , a = n.cache
              , h = n.to
              , c = n.from;
            l.fn[s] = function(s) {
                if (h && !this[a] && (this[a] = h(this._rgba)),
                s === e)
                    return this[a].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice();
                return f(o, function(t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]),
                    d[e.idx] = i(s, e)
                }),
                c ? (n = l(c(d)),
                n[a] = d,
                n) : l(d)
            }
            ,
            f(o, function(e, i) {
                l.fn[e] || (l.fn[e] = function(n) {
                    var o, a = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), c = l[i.idx];
                    return "undefined" === a ? c : ("function" === a && (n = n.call(this, c),
                    a = t.type(n)),
                    null == n && i.empty ? this : ("string" === a && (o = r.exec(n),
                    o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))),
                    l[i.idx] = n,
                    this[h](l)))
                }
                )
            })
        }),
        l.hook = function(e) {
            var i = e.split(" ");
            f(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, n) {
                        var o, a, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                            if (n = l(o || n),
                            !d.rgba && 1 !== n._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style; )
                                    try {
                                        r = t.css(a, "backgroundColor"),
                                        a = a.parentNode
                                    } catch (h) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (h) {}
                    }
                },
                t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = l(e.elem, i),
                    e.end = l(e.end),
                    e.colorInit = !0),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }
        ,
        l.hook(a),
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                    e["border" + s + "Color"] = t
                }),
                e
            }
        },
        o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(_),
    function() {
        function e(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (n && n.length && n[0] && n[n[0]])
                for (s = n.length; s--; )
                    i = n[s],
                    "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
            else
                for (i in n)
                    "string" == typeof n[i] && (o[i] = n[i]);
            return o
        }
        function i(e, i) {
            var s, o, a = {};
            for (s in i)
                o = i[s],
                e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
            return a
        }
        var s = ["add", "remove", "toggle"]
          , n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (_.style(t.elem, i, t.end),
                t.setAttr = !0)
            }
        }),
        t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
        ),
        t.effects.animateClass = function(n, o, a, r) {
            var h = t.speed(o, a, r);
            return this.queue(function() {
                var o, a = t(this), r = a.attr("class") || "", l = h.children ? a.find("*").addBack() : a;
                l = l.map(function() {
                    var i = t(this);
                    return {
                        el: i,
                        start: e(this)
                    }
                }),
                o = function() {
                    t.each(s, function(t, e) {
                        n[e] && a[e + "Class"](n[e])
                    })
                }
                ,
                o(),
                l = l.map(function() {
                    return this.end = e(this.el[0]),
                    this.diff = i(this.start, this.end),
                    this
                }),
                a.attr("class", r),
                l = l.map(function() {
                    var e = this
                      , i = t.Deferred()
                      , s = t.extend({}, h, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s),
                    i.promise()
                }),
                t.when.apply(t, l.get()).done(function() {
                    o(),
                    t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "")
                        })
                    }),
                    h.complete.call(a[0])
                })
            })
        }
        ,
        t.fn.extend({
            addClass: function(e) {
                return function(i, s, n, o) {
                    return s ? t.effects.animateClass.call(this, {
                        add: i
                    }, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, s, n, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    }, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.removeClass),
            toggleClass: function(e) {
                return function(i, s, n, o, a) {
                    return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                        add: i
                    } : {
                        remove: i
                    }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: i
                    }, s, n, o)
                }
            }(t.fn.toggleClass),
            switchClass: function(e, i, s, n, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, s, n, o)
            }
        })
    }(),
    function() {
        function e(e, i, s, n) {
            return t.isPlainObject(e) && (i = e,
            e = e.effect),
            e = {
                effect: e
            },
            null == i && (i = {}),
            t.isFunction(i) && (n = i,
            s = null,
            i = {}),
            ("number" == typeof i || t.fx.speeds[i]) && (n = s,
            s = i,
            i = {}),
            t.isFunction(s) && (n = s,
            s = null),
            i && t.extend(e, i),
            s = s || i.duration,
            e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default,
            e.complete = n || i.complete,
            e
        }
        function i(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }
        function s(t, e) {
            var i = e.outerWidth()
              , s = e.outerHeight()
              , n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/
              , o = n.exec(t) || ["", 0, i, s, 0];
            return {
                top: parseFloat(o[1]) || 0,
                right: "auto" === o[2] ? i : parseFloat(o[2]),
                bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                left: parseFloat(o[4]) || 0
            }
        }
        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
            return function(i) {
                return !!t(i).data(m) || e(i)
            }
        }(t.expr.filters.animated)),
        t.uiBackCompat !== !1 && t.extend(t.effects, {
            save: function(t, e) {
                for (var i = 0, s = e.length; s > i; i++)
                    null !== e[i] && t.data(f + e[i], t[0].style[e[i]])
            },
            restore: function(t, e) {
                for (var i, s = 0, n = e.length; n > s; s++)
                    null !== e[s] && (i = t.data(f + e[s]),
                    t.css(e[s], i))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                e
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper"))
                    return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                }
                  , s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , n = {
                    width: e.width(),
                    height: e.height()
                }
                  , o = document.activeElement;
                try {
                    o.id
                } catch (a) {
                    o = document.body
                }
                return e.wrap(s),
                (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
                s = e.parent(),
                "static" === e.css("position") ? (s.css({
                    position: "relative"
                }),
                e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }),
                t.each(["top", "left", "bottom", "right"], function(t, s) {
                    i[s] = e.css(s),
                    isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }),
                e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                e.css(n),
                s.css(i).show()
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e),
                (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")),
                e
            }
        }),
        t.extend(t.effects, {
            version: "1.12.1",
            define: function(e, i, s) {
                return s || (s = i,
                i = "effect"),
                t.effects.effect[e] = s,
                t.effects.effect[e].mode = i,
                s
            },
            scaledDimensions: function(t, e, i) {
                if (0 === e)
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                var s = "horizontal" !== i ? (e || 100) / 100 : 1
                  , n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * n,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * n,
                    outerWidth: t.outerWidth() * s
                }
            },
            clipToBox: function(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                }
            },
            unshift: function(t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))),
                t.dequeue()
            },
            saveStyle: function(t) {
                t.data(g, t[0].style.cssText)
            },
            restoreStyle: function(t) {
                t[0].style.cssText = t.data(g) || "",
                t.removeData(g)
            },
            mode: function(t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"),
                (i ? "hide" === e : "show" === e) && (e = "none"),
                e
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
                }
                switch (t[1]) {
                case "left":
                    s = 0;
                    break;
                case "center":
                    s = .5;
                    break;
                case "right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createPlaceholder: function(e) {
                var i, s = e.css("position"), n = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),
                /^(static|relative)/.test(s) && (s = "absolute",
                i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    "float": e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),
                e.data(f + "placeholder", i)),
                e.css({
                    position: s,
                    left: n.left,
                    top: n.top
                }),
                i
            },
            removePlaceholder: function(t) {
                var e = f + "placeholder"
                  , i = t.data(e);
                i && (i.remove(),
                t.removeData(e))
            },
            cleanUp: function(e) {
                t.effects.restoreStyle(e),
                t.effects.removePlaceholder(e)
            },
            setTransition: function(e, i, s, n) {
                return n = n || {},
                t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                }),
                n
            }
        }),
        t.fn.extend({
            effect: function() {
                function i(e) {
                    function i() {
                        r.removeData(m),
                        t.effects.cleanUp(r),
                        "hide" === s.mode && r.hide(),
                        a()
                    }
                    function a() {
                        t.isFunction(h) && h.call(r[0]),
                        t.isFunction(e) && e()
                    }
                    var r = t(this);
                    s.mode = c.shift(),
                    t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](),
                    a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](),
                    a()) : n.call(r[0], s, a)
                }
                var s = e.apply(this, arguments)
                  , n = t.effects.effect[s.effect]
                  , o = n.mode
                  , a = s.queue
                  , r = a || "fx"
                  , h = s.complete
                  , l = s.mode
                  , c = []
                  , u = function(e) {
                    var i = t(this)
                      , s = t.effects.mode(i, l) || o;
                    i.data(m, !0),
                    c.push(s),
                    o && ("show" === s || s === o && "hide" === s) && i.show(),
                    o && "none" === s || t.effects.saveStyle(i),
                    t.isFunction(e) && e()
                };
                return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function() {
                    h && h.call(this)
                }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
            },
            show: function(t) {
                return function(s) {
                    if (i(s))
                        return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "show",
                    this.effect.call(this, n)
                }
            }(t.fn.show),
            hide: function(t) {
                return function(s) {
                    if (i(s))
                        return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "hide",
                    this.effect.call(this, n)
                }
            }(t.fn.hide),
            toggle: function(t) {
                return function(s) {
                    if (i(s) || "boolean" == typeof s)
                        return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "toggle",
                    this.effect.call(this, n)
                }
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e)
                  , s = [];
                return t.each(["em", "px", "%", "pt"], function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }),
                s
            },
            cssClip: function(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
            },
            transfer: function(e, i) {
                var s = t(this)
                  , n = t(e.to)
                  , o = "fixed" === n.css("position")
                  , a = t("body")
                  , r = o ? a.scrollTop() : 0
                  , h = o ? a.scrollLeft() : 0
                  , l = n.offset()
                  , c = {
                    top: l.top - r,
                    left: l.left - h,
                    height: n.innerHeight(),
                    width: n.innerWidth()
                }
                  , u = s.offset()
                  , d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                    top: u.top - r,
                    left: u.left - h,
                    height: s.innerHeight(),
                    width: s.innerWidth(),
                    position: o ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, function() {
                    d.remove(),
                    t.isFunction(i) && i()
                })
            }
        }),
        t.fx.step.clip = function(e) {
            e.clipInit || (e.start = t(e.elem).cssClip(),
            "string" == typeof e.end && (e.end = s(e.end, e.elem)),
            e.clipInit = !0),
            t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            })
        }
    }(),
    function() {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }),
        t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }),
        t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i,
            t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            }
            ,
            t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }();
    var v = t.effects;
    t.effects.define("blind", "hide", function(e, i) {
        var s = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , n = t(this)
          , o = e.direction || "up"
          , a = n.cssClip()
          , r = {
            clip: t.extend({}, a)
        }
          , h = t.effects.createPlaceholder(n);
        r.clip[s[o][0]] = r.clip[s[o][1]],
        "show" === e.mode && (n.cssClip(r.clip),
        h && h.css(t.effects.clipToBox(r)),
        r.clip = a),
        h && h.animate(t.effects.clipToBox(r), e.duration, e.easing),
        n.animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }),
    t.effects.define("bounce", function(e, i) {
        var s, n, o, a = t(this), r = e.mode, h = "hide" === r, l = "show" === r, c = e.direction || "up", u = e.distance, d = e.times || 5, p = 2 * d + (l || h ? 1 : 0), f = e.duration / p, g = e.easing, m = "up" === c || "down" === c ? "top" : "left", _ = "up" === c || "left" === c, v = 0, b = a.queue().length;
        for (t.effects.createPlaceholder(a),
        o = a.css(m),
        u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3),
        l && (n = {
            opacity: 1
        },
        n[m] = o,
        a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)),
        h && (u /= Math.pow(2, d - 1)),
        n = {},
        n[m] = o; d > v; v++)
            s = {},
            s[m] = (_ ? "-=" : "+=") + u,
            a.animate(s, f, g).animate(n, f, g),
            u = h ? 2 * u : u / 2;
        h && (s = {
            opacity: 0
        },
        s[m] = (_ ? "-=" : "+=") + u,
        a.animate(s, f, g)),
        a.queue(i),
        t.effects.unshift(a, b, p + 1)
    }),
    t.effects.define("clip", "hide", function(e, i) {
        var s, n = {}, o = t(this), a = e.direction || "vertical", r = "both" === a, h = r || "horizontal" === a, l = r || "vertical" === a;
        s = o.cssClip(),
        n.clip = {
            top: l ? (s.bottom - s.top) / 2 : s.top,
            right: h ? (s.right - s.left) / 2 : s.right,
            bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
            left: h ? (s.right - s.left) / 2 : s.left
        },
        t.effects.createPlaceholder(o),
        "show" === e.mode && (o.cssClip(n.clip),
        n.clip = s),
        o.animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }),
    t.effects.define("drop", "hide", function(e, i) {
        var s, n = t(this), o = e.mode, a = "show" === o, r = e.direction || "left", h = "up" === r || "down" === r ? "top" : "left", l = "up" === r || "left" === r ? "-=" : "+=", c = "+=" === l ? "-=" : "+=", u = {
            opacity: 0
        };
        t.effects.createPlaceholder(n),
        s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2,
        u[h] = l + s,
        a && (n.css(u),
        u[h] = c + s,
        u.opacity = 1),
        n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }),
    t.effects.define("explode", "hide", function(e, i) {
        function s() {
            b.push(this),
            b.length === u * d && n()
        }
        function n() {
            p.css({
                visibility: "visible"
            }),
            t(b).remove(),
            i()
        }
        var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = e.mode, g = "show" === f, m = p.show().css("visibility", "hidden").offset(), _ = Math.ceil(p.outerWidth() / d), v = Math.ceil(p.outerHeight() / u), b = [];
        for (o = 0; u > o; o++)
            for (h = m.top + o * v,
            c = o - (u - 1) / 2,
            a = 0; d > a; a++)
                r = m.left + a * _,
                l = a - (d - 1) / 2,
                p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * _,
                    top: -o * v
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: _,
                    height: v,
                    left: r + (g ? l * _ : 0),
                    top: h + (g ? c * v : 0),
                    opacity: g ? 0 : 1
                }).animate({
                    left: r + (g ? 0 : l * _),
                    top: h + (g ? 0 : c * v),
                    opacity: g ? 1 : 0
                }, e.duration || 500, e.easing, s)
    }),
    t.effects.define("fade", "toggle", function(e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({
            opacity: s ? 1 : 0
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }),
    t.effects.define("fold", "hide", function(e, i) {
        var s = t(this)
          , n = e.mode
          , o = "show" === n
          , a = "hide" === n
          , r = e.size || 15
          , h = /([0-9]+)%/.exec(r)
          , l = !!e.horizFirst
          , c = l ? ["right", "bottom"] : ["bottom", "right"]
          , u = e.duration / 2
          , d = t.effects.createPlaceholder(s)
          , p = s.cssClip()
          , f = {
            clip: t.extend({}, p)
        }
          , g = {
            clip: t.extend({}, p)
        }
          , m = [p[c[0]], p[c[1]]]
          , _ = s.queue().length;
        h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]),
        f.clip[c[0]] = r,
        g.clip[c[0]] = r,
        g.clip[c[1]] = 0,
        o && (s.cssClip(g.clip),
        d && d.css(t.effects.clipToBox(g)),
        g.clip = p),
        s.queue(function(i) {
            d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing),
            i()
        }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i),
        t.effects.unshift(s, _, 4)
    }),
    t.effects.define("highlight", "show", function(e, i) {
        var s = t(this)
          , n = {
            backgroundColor: s.css("backgroundColor")
        };
        "hide" === e.mode && (n.opacity = 0),
        t.effects.saveStyle(s),
        s.css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }),
    t.effects.define("size", function(e, i) {
        var s, n, o, a = t(this), r = ["fontSize"], h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], c = e.mode, u = "effect" !== c, d = e.scale || "both", p = e.origin || ["middle", "center"], f = a.css("position"), g = a.position(), m = t.effects.scaledDimensions(a), _ = e.from || m, v = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a),
        "show" === c && (o = _,
        _ = v,
        v = o),
        n = {
            from: {
                y: _.height / m.height,
                x: _.width / m.width
            },
            to: {
                y: v.height / m.height,
                x: v.width / m.width
            }
        },
        ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _),
        v = t.effects.setTransition(a, h, n.to.y, v)),
        n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _),
        v = t.effects.setTransition(a, l, n.to.x, v))),
        ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _),
        v = t.effects.setTransition(a, r, n.to.y, v)),
        p && (s = t.effects.getBaseline(p, m),
        _.top = (m.outerHeight - _.outerHeight) * s.y + g.top,
        _.left = (m.outerWidth - _.outerWidth) * s.x + g.left,
        v.top = (m.outerHeight - v.outerHeight) * s.y + g.top,
        v.left = (m.outerWidth - v.outerWidth) * s.x + g.left),
        a.css(_),
        ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r),
        l = l.concat(["marginLeft", "marginRight"]),
        a.find("*[width]").each(function() {
            var i = t(this)
              , s = t.effects.scaledDimensions(i)
              , o = {
                height: s.height * n.from.y,
                width: s.width * n.from.x,
                outerHeight: s.outerHeight * n.from.y,
                outerWidth: s.outerWidth * n.from.x
            }
              , a = {
                height: s.height * n.to.y,
                width: s.width * n.to.x,
                outerHeight: s.height * n.to.y,
                outerWidth: s.width * n.to.x
            };
            n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o),
            a = t.effects.setTransition(i, h, n.to.y, a)),
            n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o),
            a = t.effects.setTransition(i, l, n.to.x, a)),
            u && t.effects.saveStyle(i),
            i.css(o),
            i.animate(a, e.duration, e.easing, function() {
                u && t.effects.restoreStyle(i)
            })
        })),
        a.animate(v, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = a.offset();
                0 === v.opacity && a.css("opacity", _.opacity),
                u || (a.css("position", "static" === f ? "relative" : f).offset(e),
                t.effects.saveStyle(a)),
                i()
            }
        })
    }),
    t.effects.define("scale", function(e, i) {
        var s = t(this)
          , n = e.mode
          , o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100)
          , a = t.extend(!0, {
            from: t.effects.scaledDimensions(s),
            to: t.effects.scaledDimensions(s, o, e.direction || "both"),
            origin: e.origin || ["middle", "center"]
        }, e);
        e.fade && (a.from.opacity = 1,
        a.to.opacity = 0),
        t.effects.effect.size.call(this, a, i)
    }),
    t.effects.define("puff", "hide", function(e, i) {
        var s = t.extend(!0, {}, e, {
            fade: !0,
            percent: parseInt(e.percent, 10) || 150
        });
        t.effects.effect.scale.call(this, s, i)
    }),
    t.effects.define("pulsate", "show", function(e, i) {
        var s = t(this)
          , n = e.mode
          , o = "show" === n
          , a = "hide" === n
          , r = o || a
          , h = 2 * (e.times || 5) + (r ? 1 : 0)
          , l = e.duration / h
          , c = 0
          , u = 1
          , d = s.queue().length;
        for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(),
        c = 1); h > u; u++)
            s.animate({
                opacity: c
            }, l, e.easing),
            c = 1 - c;
        s.animate({
            opacity: c
        }, l, e.easing),
        s.queue(i),
        t.effects.unshift(s, d, h + 1)
    }),
    t.effects.define("shake", function(e, i) {
        var s = 1
          , n = t(this)
          , o = e.direction || "left"
          , a = e.distance || 20
          , r = e.times || 3
          , h = 2 * r + 1
          , l = Math.round(e.duration / h)
          , c = "up" === o || "down" === o ? "top" : "left"
          , u = "up" === o || "left" === o
          , d = {}
          , p = {}
          , f = {}
          , g = n.queue().length;
        for (t.effects.createPlaceholder(n),
        d[c] = (u ? "-=" : "+=") + a,
        p[c] = (u ? "+=" : "-=") + 2 * a,
        f[c] = (u ? "-=" : "+=") + 2 * a,
        n.animate(d, l, e.easing); r > s; s++)
            n.animate(p, l, e.easing).animate(f, l, e.easing);
        n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i),
        t.effects.unshift(n, g, h + 1)
    }),
    t.effects.define("slide", "show", function(e, i) {
        var s, n, o = t(this), a = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }, r = e.mode, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h, u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0), d = {};
        t.effects.createPlaceholder(o),
        s = o.cssClip(),
        n = o.position()[l],
        d[l] = (c ? -1 : 1) * u + n,
        d.clip = o.cssClip(),
        d.clip[a[h][1]] = d.clip[a[h][0]],
        "show" === r && (o.cssClip(d.clip),
        o.css(l, d[l]),
        d.clip = s,
        d[l] = n),
        o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    });
    var v;
    t.uiBackCompat !== !1 && (v = t.effects.define("transfer", function(e, i) {
        t(this).transfer(e, i)
    }))
});

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t)
            }
            return e
        }
        return function(r, e, u, i) {
            e = b(e, i, 4);
            var o = !k(r) && m.keys(r)
              , a = (o || r).length
              , c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c],
            c += n),
            t(r, e, u, o, c, a)
        }
    }
    function t(n) {
        return function(t, r, e) {
            r = x(r, e);
            for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                if (r(t[i], i, t))
                    return i;
            return -1
        }
    }
    function r(n, t, r) {
        return function(e, u, i) {
            var o = 0
              , a = O(e);
            if ("number" == typeof i)
                n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
            else if (r && i && a)
                return i = r(e, u),
                e[i] === u ? i : -1;
            if (u !== u)
                return i = t(l.call(e, o, a), m.isNaN),
                i >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)
                if (e[i] === u)
                    return i;
            return -1
        }
    }
    function e(n, t) {
        var r = I.length
          , e = n.constructor
          , u = m.isFunction(e) && e.prototype || a
          , i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--; )
            i = I[r],
            i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
    }
    var u = this
      , i = u._
      , o = Array.prototype
      , a = Object.prototype
      , c = Function.prototype
      , f = o.push
      , l = o.slice
      , s = a.toString
      , p = a.hasOwnProperty
      , h = Array.isArray
      , v = Object.keys
      , g = c.bind
      , y = Object.create
      , d = function() {}
      , m = function(n) {
        return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m),
    exports._ = m) : u._ = m,
    m.VERSION = "1.8.3";
    var b = function(n, t, r) {
        if (t === void 0)
            return n;
        switch (null == r ? 3 : r) {
        case 1:
            return function(r) {
                return n.call(t, r)
            }
            ;
        case 2:
            return function(r, e) {
                return n.call(t, r, e)
            }
            ;
        case 3:
            return function(r, e, u) {
                return n.call(t, r, e, u)
            }
            ;
        case 4:
            return function(r, e, u, i) {
                return n.call(t, r, e, u, i)
            }
        }
        return function() {
            return n.apply(t, arguments)
        }
    }
      , x = function(n, t, r) {
        return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
    };
    m.iteratee = function(n, t) {
        return x(n, t, 1 / 0)
    }
    ;
    var _ = function(n, t) {
        return function(r) {
            var e = arguments.length;
            if (2 > e || null == r)
                return r;
            for (var u = 1; e > u; u++)
                for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                    var f = o[c];
                    t && r[f] !== void 0 || (r[f] = i[f])
                }
            return r
        }
    }
      , j = function(n) {
        if (!m.isObject(n))
            return {};
        if (y)
            return y(n);
        d.prototype = n;
        var t = new d;
        return d.prototype = null,
        t
    }
      , w = function(n) {
        return function(t) {
            return null == t ? void 0 : t[n]
        }
    }
      , A = Math.pow(2, 53) - 1
      , O = w("length")
      , k = function(n) {
        var t = O(n);
        return "number" == typeof t && t >= 0 && A >= t
    };
    m.each = m.forEach = function(n, t, r) {
        t = b(t, r);
        var e, u;
        if (k(n))
            for (e = 0,
            u = n.length; u > e; e++)
                t(n[e], e, n);
        else {
            var i = m.keys(n);
            for (e = 0,
            u = i.length; u > e; e++)
                t(n[i[e]], i[e], n)
        }
        return n
    }
    ,
    m.map = m.collect = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n)
        }
        return i
    }
    ,
    m.reduce = m.foldl = m.inject = n(1),
    m.reduceRight = m.foldr = n(-1),
    m.find = m.detect = function(n, t, r) {
        var e;
        return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r),
        e !== void 0 && e !== -1 ? n[e] : void 0
    }
    ,
    m.filter = m.select = function(n, t, r) {
        var e = [];
        return t = x(t, r),
        m.each(n, function(n, r, u) {
            t(n, r, u) && e.push(n)
        }),
        e
    }
    ,
    m.reject = function(n, t, r) {
        return m.filter(n, m.negate(x(t)), r)
    }
    ,
    m.every = m.all = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n))
                return !1
        }
        return !0
    }
    ,
    m.some = m.any = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n))
                return !0
        }
        return !1
    }
    ,
    m.contains = m.includes = m.include = function(n, t, r, e) {
        return k(n) || (n = m.values(n)),
        ("number" != typeof r || e) && (r = 0),
        m.indexOf(n, t, r) >= 0
    }
    ,
    m.invoke = function(n, t) {
        var r = l.call(arguments, 2)
          , e = m.isFunction(t);
        return m.map(n, function(n) {
            var u = e ? t : n[t];
            return null == u ? u : u.apply(n, r)
        })
    }
    ,
    m.pluck = function(n, t) {
        return m.map(n, m.property(t))
    }
    ,
    m.where = function(n, t) {
        return m.filter(n, m.matcher(t))
    }
    ,
    m.findWhere = function(n, t) {
        return m.find(n, m.matcher(t))
    }
    ,
    m.max = function(n, t, r) {
        var e, u, i = -1 / 0, o = -1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)
                e = n[a],
                e > i && (i = e)
        } else
            t = x(t, r),
            m.each(n, function(n, r, e) {
                u = t(n, r, e),
                (u > o || u === -1 / 0 && i === -1 / 0) && (i = n,
                o = u)
            });
        return i
    }
    ,
    m.min = function(n, t, r) {
        var e, u, i = 1 / 0, o = 1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)
                e = n[a],
                i > e && (i = e)
        } else
            t = x(t, r),
            m.each(n, function(n, r, e) {
                u = t(n, r, e),
                (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n,
                o = u)
            });
        return i
    }
    ,
    m.shuffle = function(n) {
        for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)
            t = m.random(0, i),
            t !== i && (u[i] = u[t]),
            u[t] = r[i];
        return u
    }
    ,
    m.sample = function(n, t, r) {
        return null == t || r ? (k(n) || (n = m.values(n)),
        n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
    }
    ,
    m.sortBy = function(n, t, r) {
        return t = x(t, r),
        m.pluck(m.map(n, function(n, r, e) {
            return {
                value: n,
                index: r,
                criteria: t(n, r, e)
            }
        }).sort(function(n, t) {
            var r = n.criteria
              , e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0)
                    return 1;
                if (e > r || e === void 0)
                    return -1
            }
            return n.index - t.index
        }), "value")
    }
    ;
    var F = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = x(r, e),
            m.each(t, function(e, i) {
                var o = r(e, i, t);
                n(u, e, o)
            }),
            u
        }
    };
    m.groupBy = F(function(n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [t]
    }),
    m.indexBy = F(function(n, t, r) {
        n[r] = t
    }),
    m.countBy = F(function(n, t, r) {
        m.has(n, r) ? n[r]++ : n[r] = 1
    }),
    m.toArray = function(n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
    }
    ,
    m.size = function(n) {
        return null == n ? 0 : k(n) ? n.length : m.keys(n).length
    }
    ,
    m.partition = function(n, t, r) {
        t = x(t, r);
        var e = []
          , u = [];
        return m.each(n, function(n, r, i) {
            (t(n, r, i) ? e : u).push(n)
        }),
        [e, u]
    }
    ,
    m.first = m.head = m.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
    }
    ,
    m.initial = function(n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    }
    ,
    m.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
    }
    ,
    m.rest = m.tail = m.drop = function(n, t, r) {
        return l.call(n, null == t || r ? 1 : t)
    }
    ,
    m.compact = function(n) {
        return m.filter(n, m.identity)
    }
    ;
    var S = function(n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                t || (c = S(c, t, r));
                var f = 0
                  , l = c.length;
                for (u.length += l; l > f; )
                    u[i++] = c[f++]
            } else
                r || (u[i++] = c)
        }
        return u
    };
    m.flatten = function(n, t) {
        return S(n, t, !1)
    }
    ,
    m.without = function(n) {
        return m.difference(n, l.call(arguments, 1))
    }
    ,
    m.uniq = m.unique = function(n, t, r, e) {
        m.isBoolean(t) || (e = r,
        r = t,
        t = !1),
        null != r && (r = x(r, e));
        for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
            var c = n[o]
              , f = r ? r(c, o, n) : c;
            t ? (o && i === f || u.push(c),
            i = f) : r ? m.contains(i, f) || (i.push(f),
            u.push(c)) : m.contains(u, c) || u.push(c)
        }
        return u
    }
    ,
    m.union = function() {
        return m.uniq(S(arguments, !0, !0))
    }
    ,
    m.intersection = function(n) {
        for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
            var i = n[e];
            if (!m.contains(t, i)) {
                for (var o = 1; r > o && m.contains(arguments[o], i); o++)
                    ;
                o === r && t.push(i)
            }
        }
        return t
    }
    ,
    m.difference = function(n) {
        var t = S(arguments, !0, !0, 1);
        return m.filter(n, function(n) {
            return !m.contains(t, n)
        })
    }
    ,
    m.zip = function() {
        return m.unzip(arguments)
    }
    ,
    m.unzip = function(n) {
        for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++)
            r[e] = m.pluck(n, e);
        return r
    }
    ,
    m.object = function(n, t) {
        for (var r = {}, e = 0, u = O(n); u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }
    ,
    m.findIndex = t(1),
    m.findLastIndex = t(-1),
    m.sortedIndex = function(n, t, r, e) {
        r = x(r, e, 1);
        for (var u = r(t), i = 0, o = O(n); o > i; ) {
            var a = Math.floor((i + o) / 2);
            r(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    }
    ,
    m.indexOf = r(1, m.findIndex, m.sortedIndex),
    m.lastIndexOf = r(-1, m.findLastIndex),
    m.range = function(n, t, r) {
        null == t && (t = n || 0,
        n = 0),
        r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++,
        n += r)
            u[i] = n;
        return u
    }
    ;
    var E = function(n, t, r, e, u) {
        if (!(e instanceof t))
            return n.apply(r, u);
        var i = j(n.prototype)
          , o = n.apply(i, u);
        return m.isObject(o) ? o : i
    };
    m.bind = function(n, t) {
        if (g && n.bind === g)
            return g.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n))
            throw new TypeError("Bind must be called on a function");
        var r = l.call(arguments, 2)
          , e = function() {
            return E(n, e, t, this, r.concat(l.call(arguments)))
        };
        return e
    }
    ,
    m.partial = function(n) {
        var t = l.call(arguments, 1)
          , r = function() {
            for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++)
                i[o] = t[o] === m ? arguments[e++] : t[o];
            for (; e < arguments.length; )
                i.push(arguments[e++]);
            return E(n, r, this, this, i)
        };
        return r
    }
    ,
    m.bindAll = function(n) {
        var t, r, e = arguments.length;
        if (1 >= e)
            throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++)
            r = arguments[t],
            n[r] = m.bind(n[r], n);
        return n
    }
    ,
    m.memoize = function(n, t) {
        var r = function(e) {
            var u = r.cache
              , i = "" + (t ? t.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)),
            u[i]
        };
        return r.cache = {},
        r
    }
    ,
    m.delay = function(n, t) {
        var r = l.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }
    ,
    m.defer = m.partial(m.delay, m, 1),
    m.throttle = function(n, t, r) {
        var e, u, i, o = null, a = 0;
        r || (r = {});
        var c = function() {
            a = r.leading === !1 ? 0 : m.now(),
            o = null,
            i = n.apply(e, u),
            o || (e = u = null)
        };
        return function() {
            var f = m.now();
            a || r.leading !== !1 || (a = f);
            var l = t - (f - a);
            return e = this,
            u = arguments,
            0 >= l || l > t ? (o && (clearTimeout(o),
            o = null),
            a = f,
            i = n.apply(e, u),
            o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)),
            i
        }
    }
    ,
    m.debounce = function(n, t, r) {
        var e, u, i, o, a, c = function() {
            var f = m.now() - o;
            t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null,
            r || (a = n.apply(i, u),
            e || (i = u = null)))
        };
        return function() {
            i = this,
            u = arguments,
            o = m.now();
            var f = r && !e;
            return e || (e = setTimeout(c, t)),
            f && (a = n.apply(i, u),
            i = u = null),
            a
        }
    }
    ,
    m.wrap = function(n, t) {
        return m.partial(t, n)
    }
    ,
    m.negate = function(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }
    ,
    m.compose = function() {
        var n = arguments
          , t = n.length - 1;
        return function() {
            for (var r = t, e = n[t].apply(this, arguments); r--; )
                e = n[r].call(this, e);
            return e
        }
    }
    ,
    m.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }
    ,
    m.before = function(n, t) {
        var r;
        return function() {
            return --n > 0 && (r = t.apply(this, arguments)),
            1 >= n && (t = null),
            r
        }
    }
    ,
    m.once = m.partial(m.before, 2);
    var M = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    m.keys = function(n) {
        if (!m.isObject(n))
            return [];
        if (v)
            return v(n);
        var t = [];
        for (var r in n)
            m.has(n, r) && t.push(r);
        return M && e(n, t),
        t
    }
    ,
    m.allKeys = function(n) {
        if (!m.isObject(n))
            return [];
        var t = [];
        for (var r in n)
            t.push(r);
        return M && e(n, t),
        t
    }
    ,
    m.values = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = n[t[u]];
        return e
    }
    ,
    m.mapObject = function(n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++)
            e = u[a],
            o[e] = t(n[e], e, n);
        return o
    }
    ,
    m.pairs = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = [t[u], n[t[u]]];
        return e
    }
    ,
    m.invert = function(n) {
        for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)
            t[n[r[e]]] = r[e];
        return t
    }
    ,
    m.functions = m.methods = function(n) {
        var t = [];
        for (var r in n)
            m.isFunction(n[r]) && t.push(r);
        return t.sort()
    }
    ,
    m.extend = _(m.allKeys),
    m.extendOwn = m.assign = _(m.keys),
    m.findKey = function(n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
            if (e = u[i],
            t(n[e], e, n))
                return e
    }
    ,
    m.pick = function(n, t, r) {
        var e, u, i = {}, o = n;
        if (null == o)
            return i;
        m.isFunction(t) ? (u = m.allKeys(o),
        e = b(t, r)) : (u = S(arguments, !1, !1, 1),
        e = function(n, t, r) {
            return t in r
        }
        ,
        o = Object(o));
        for (var a = 0, c = u.length; c > a; a++) {
            var f = u[a]
              , l = o[f];
            e(l, f, o) && (i[f] = l)
        }
        return i
    }
    ,
    m.omit = function(n, t, r) {
        if (m.isFunction(t))
            t = m.negate(t);
        else {
            var e = m.map(S(arguments, !1, !1, 1), String);
            t = function(n, t) {
                return !m.contains(e, t)
            }
        }
        return m.pick(n, t, r)
    }
    ,
    m.defaults = _(m.allKeys, !0),
    m.create = function(n, t) {
        var r = j(n);
        return t && m.extendOwn(r, t),
        r
    }
    ,
    m.clone = function(n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
    }
    ,
    m.tap = function(n, t) {
        return t(n),
        n
    }
    ,
    m.isMatch = function(n, t) {
        var r = m.keys(t)
          , e = r.length;
        if (null == n)
            return !e;
        for (var u = Object(n), i = 0; e > i; i++) {
            var o = r[i];
            if (t[o] !== u[o] || !(o in u))
                return !1
        }
        return !0
    }
    ;
    var N = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof m && (n = n._wrapped),
        t instanceof m && (t = t._wrapped);
        var u = s.call(n);
        if (u !== s.call(t))
            return !1;
        switch (u) {
        case "[object RegExp]":
        case "[object String]":
            return "" + n == "" + t;
        case "[object Number]":
            return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
        case "[object Date]":
        case "[object Boolean]":
            return +n === +t
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t)
                return !1;
            var o = n.constructor
              , a = t.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor"in n && "constructor"in t)
                return !1
        }
        r = r || [],
        e = e || [];
        for (var c = r.length; c--; )
            if (r[c] === n)
                return e[c] === t;
        if (r.push(n),
        e.push(t),
        i) {
            if (c = n.length,
            c !== t.length)
                return !1;
            for (; c--; )
                if (!N(n[c], t[c], r, e))
                    return !1
        } else {
            var f, l = m.keys(n);
            if (c = l.length,
            m.keys(t).length !== c)
                return !1;
            for (; c--; )
                if (f = l[c],
                !m.has(t, f) || !N(n[f], t[f], r, e))
                    return !1
        }
        return r.pop(),
        e.pop(),
        !0
    };
    m.isEqual = function(n, t) {
        return N(n, t)
    }
    ,
    m.isEmpty = function(n) {
        return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
    }
    ,
    m.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }
    ,
    m.isArray = h || function(n) {
        return "[object Array]" === s.call(n)
    }
    ,
    m.isObject = function(n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    }
    ,
    m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
        m["is" + n] = function(t) {
            return s.call(t) === "[object " + n + "]"
        }
    }),
    m.isArguments(arguments) || (m.isArguments = function(n) {
        return m.has(n, "callee")
    }
    ),
    "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
        return "function" == typeof n || !1
    }
    ),
    m.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }
    ,
    m.isNaN = function(n) {
        return m.isNumber(n) && n !== +n
    }
    ,
    m.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
    }
    ,
    m.isNull = function(n) {
        return null === n
    }
    ,
    m.isUndefined = function(n) {
        return n === void 0
    }
    ,
    m.has = function(n, t) {
        return null != n && p.call(n, t)
    }
    ,
    m.noConflict = function() {
        return u._ = i,
        this
    }
    ,
    m.identity = function(n) {
        return n
    }
    ,
    m.constant = function(n) {
        return function() {
            return n
        }
    }
    ,
    m.noop = function() {}
    ,
    m.property = w,
    m.propertyOf = function(n) {
        return null == n ? function() {}
        : function(t) {
            return n[t]
        }
    }
    ,
    m.matcher = m.matches = function(n) {
        return n = m.extendOwn({}, n),
        function(t) {
            return m.isMatch(t, n)
        }
    }
    ,
    m.times = function(n, t, r) {
        var e = Array(Math.max(0, n));
        t = b(t, r, 1);
        for (var u = 0; n > u; u++)
            e[u] = t(u);
        return e
    }
    ,
    m.random = function(n, t) {
        return null == t && (t = n,
        n = 0),
        n + Math.floor(Math.random() * (t - n + 1))
    }
    ,
    m.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var B = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , T = m.invert(B)
      , R = function(n) {
        var t = function(t) {
            return n[t]
        }
          , r = "(?:" + m.keys(n).join("|") + ")"
          , e = RegExp(r)
          , u = RegExp(r, "g");
        return function(n) {
            return n = null == n ? "" : "" + n,
            e.test(n) ? n.replace(u, t) : n
        }
    };
    m.escape = R(B),
    m.unescape = R(T),
    m.result = function(n, t, r) {
        var e = null == n ? void 0 : n[t];
        return e === void 0 && (e = r),
        m.isFunction(e) ? e.call(n) : e
    }
    ;
    var q = 0;
    m.uniqueId = function(n) {
        var t = ++q + "";
        return n ? n + t : t
    }
    ,
    m.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var K = /(.)^/
      , z = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , D = /\\|'|\r|\n|\u2028|\u2029/g
      , L = function(n) {
        return "\\" + z[n]
    };
    m.template = function(n, t, r) {
        !t && r && (t = r),
        t = m.defaults({}, t, m.templateSettings);
        var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g")
          , u = 0
          , i = "__p+='";
        n.replace(e, function(t, r, e, o, a) {
            return i += n.slice(u, a).replace(D, L),
            u = a + t.length,
            r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"),
            t
        }),
        i += "';\n",
        t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
        i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj","_",i)
        } catch (a) {
            throw a.source = i,
            a
        }
        var c = function(n) {
            return o.call(this, n, m)
        }
          , f = t.variable || "obj";
        return c.source = "function(" + f + "){\n" + i + "}",
        c
    }
    ,
    m.chain = function(n) {
        var t = m(n);
        return t._chain = !0,
        t
    }
    ;
    var P = function(n, t) {
        return n._chain ? m(t).chain() : t
    };
    m.mixin = function(n) {
        m.each(m.functions(n), function(t) {
            var r = m[t] = n[t];
            m.prototype[t] = function() {
                var n = [this._wrapped];
                return f.apply(n, arguments),
                P(this, r.apply(m, n))
            }
        })
    }
    ,
    m.mixin(m),
    m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = o[n];
        m.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0],
            P(this, r)
        }
    }),
    m.each(["concat", "join", "slice"], function(n) {
        var t = o[n];
        m.prototype[n] = function() {
            return P(this, t.apply(this._wrapped, arguments))
        }
    }),
    m.prototype.value = function() {
        return this._wrapped
    }
    ,
    m.prototype.valueOf = m.prototype.toJSON = m.prototype.value,
    m.prototype.toString = function() {
        return "" + this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return m
    })
}
).call(this);
//# sourceMappingURL=underscore-min.map

jQuery.fn.topLink = function(settings) {
    settings = jQuery.extend({
        min: 1,
        fadeSpeed: 300
    }, settings);
    $(this).bind("click", function() {
        var body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");
        body.animate({
            scrollTop: $($(this).attr("href")).offset().top - 10
        }, 400);
        return false;
    })
    return this.each(function() {
        var el = $(this);
        el.hide();
        $(window).scroll(function() {
            if ($(window).scrollTop() >= settings.min) {
                el.fadeIn(settings.fadeSpeed);
            } else {
                el.fadeOut(settings.fadeSpeed);
            }
        });
    });
}
;

(function($) {

    // Creating a jQuery plugin:

    $.generateFile = function(options) {

        options = options || {};

        if (!options.script || !options.filename || !options.content) {
            throw new Error("Please enter all the required config options!");
        }

        // Creating a 1 by 1 px invisible iframe:

        var iframe = $('body').find('iframe#downloadframe');
        if (iframe.length) {
            iframe = iframe.eq(0);
        } else {
            iframe = $('<iframe>', {
                id: 'downloadframe',
                width: 1,
                height: 1,
                frameborder: 0,
                css: {
                    display: 'none'
                }
            }).appendTo('body');
        }
        var formHTML = '<form action="" method="post">' + '<input type="hidden" name="filename" />' + '<input type="hidden" name="content" />' + '</form>';

        // Giving IE a chance to build the DOM in
        // the iframe with a short timeout:

        setTimeout(function() {

            // The body element of the iframe document:
            var body = (iframe.prop('contentDocument') !== undefined) ? iframe.prop('contentDocument').body : iframe.prop('document').body;
            // IE

            body = $(body);

            // Adding the form to the body:

            body.html(formHTML);

            var form = body.find('form');

            form.attr('action', options.script);
            form.find('input[name=filename]').val(options.filename);
            form.find('input[name=content]').val(options.content);

            form.submit();
        }, 50);
    }
    ;

}
)(jQuery);

/*
 * Facebox (for jQuery)
 * version: 1.4.1
 * @requires jQuery v1.2 or later
 * @homepage https://github.com/defunkt/facebox
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright Forever Chris Wanstrath, Kyle Neath
 *
 * Usage:
 *
 *  jQuery(document).ready(function() {
 *    jQuery('a[rel*=facebox]').facebox()
 *  })
 *
 *  <a href="#terms" rel="facebox">Terms</a>
 *    Loads the #terms div in the box
 *
 *  <a href="terms.html" rel="facebox">Terms</a>
 *    Loads the terms.html page in the box
 *
 *  <a href="terms.png" rel="facebox">Terms</a>
 *    Loads the terms.png image in the box
 *
 *
 *  You can also use it programmatically:
 *
 *    jQuery.facebox('some html')
 *    jQuery.facebox('some html', 'my-groovy-style')
 *
 *  The above will open a facebox with "some html" as the content.
 *
 *    jQuery.facebox(function($) {
 *      $.get('blah.html', function(data) { $.facebox(data) })
 *    })
 *
 *  The above will show a loading screen before the passed function is called,
 *  allowing for a better ajaxy experience.
 *
 *  The facebox function can also display an ajax page, an image, or the contents of a div:
 *
 *    jQuery.facebox({ ajax: 'remote.html' })
 *    jQuery.facebox({ ajax: 'remote.html' }, 'my-groovy-style')
 *    jQuery.facebox({ image: 'stairs.jpg' })
 *    jQuery.facebox({ image: 'stairs.jpg' }, 'my-groovy-style')
 *    jQuery.facebox({ div: '#box' })
 *    jQuery.facebox({ div: '#box' }, 'my-groovy-style')
 *
 *  Want to close the facebox?  Trigger the 'close.facebox' document event:
 *
 *    jQuery(document).trigger('close.facebox')
 *
 *  Facebox also has a bunch of other hooks:
 *
 *    loading.facebox
 *    beforeReveal.facebox
 *    reveal.facebox (aliased as 'afterReveal.facebox')
 *    init.facebox
 *    afterClose.facebox
 *
 *  Simply bind a function to any of these hooks:
 *
 *   $(document).bind('reveal.facebox', function() { ...stuff to do after the facebox and contents are revealed... })
 *
 */
// Support for UMD: https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    $.facebox = function(data, klass) {
        $.facebox.loading(data.settings || [])

        if (data.ajax)
            fillFaceboxFromAjax(data.ajax, klass)
        else if (data.image)
            fillFaceboxFromImage(data.image, klass)
        else if (data.div)
            fillFaceboxFromHref(data.div, klass)
        else if ($.isFunction(data))
            data.call($)
        else
            $.facebox.reveal(data, klass)
    }

    /*
   * Public, $.facebox methods
   */

    $.extend($.facebox, {
        settings: {
            opacity: 0.2,
            overlay: true,
            loadingImage: '//qn14.tool.lu/202109/03/1324173L7Hb5DHE3HZZdMN_32x32.gif',
            closeImage: '../images/close.png',
            imageTypes: ['png', 'jpg', 'jpeg', 'gif'],
            faceboxHtml: '\
    <div id="facebox" style="display:none;"> \
      <div class="popup"> \
        <div class="content"> \
        </div> \
        <a href="#" class="close"></a> \
      </div> \
    </div>'
        },

        loading: function() {
            init()
            if ($('#facebox .loading').length == 1)
                return true
            showOverlay()

            $('#facebox .content').empty().append('<div class="loading"><img src="' + $.facebox.settings.loadingImage + '"/></div>')

            $('#facebox').show().css({
                top: getPageScroll()[1] + (getPageHeight() / 10),
                left: $(window).width() / 2 - ($('#facebox .popup').outerWidth() / 2)
            })

            $(document).bind('keydown.facebox', function(e) {
                if (e.keyCode == 27)
                    $.facebox.close()
                return true
            })
            $(document).trigger('loading.facebox')
        },

        reveal: function(data, klass) {
            $(document).trigger('beforeReveal.facebox')
            if (klass)
                $('#facebox .content').addClass(klass)
            $('#facebox .content').empty().append(data)
            $('#facebox .popup').children().fadeIn('normal')
            $('#facebox').css('left', $(window).width() / 2 - ($('#facebox .popup').outerWidth() / 2))
            $(document).trigger('reveal.facebox').trigger('afterReveal.facebox')
        },

        close: function() {
            $(document).trigger('close.facebox')
            return false
        }
    })

    /*
   * Public, $.fn methods
   */

    $.fn.facebox = function(settings) {
        if ($(this).length == 0)
            return

        init(settings)

        function clickHandler() {
            $.facebox.loading(true)

            // support for rel="facebox.inline_popup" syntax, to add a class
            // also supports deprecated "facebox[.inline_popup]" syntax
            var klass = this.rel.match(/facebox\[?\.(\w+)\]?/)
            if (klass)
                klass = klass[1]

            fillFaceboxFromHref(this.href, klass)
            return false
        }

        return this.bind('click.facebox', clickHandler)
    }

    /*
   * Private methods
   */

    // called one time to setup facebox on this page
    function init(settings) {
        if ($.facebox.settings.inited)
            return true
        else
            $.facebox.settings.inited = true

        $(document).trigger('init.facebox')
        makeCompatible()

        var imageTypes = $.facebox.settings.imageTypes.join('|')
        $.facebox.settings.imageTypesRegexp = new RegExp('\\.(' + imageTypes + ')(\\?.*)?$','i')

        if (settings)
            $.extend($.facebox.settings, settings)
        $('body').append($.facebox.settings.faceboxHtml)

        var preload = [new Image(), new Image()]
        preload[0].src = $.facebox.settings.closeImage
        preload[1].src = $.facebox.settings.loadingImage

        $('#facebox').find('.b:first, .bl').each(function() {
            preload.push(new Image())
            preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
        })

        $('#facebox .close').click($.facebox.close).append('<img src="' + $.facebox.settings.closeImage + '" class="close_image" title="close">')
    }

    // getPageScroll() by quirksmode.com
    function getPageScroll() {
        var xScroll, yScroll;
        if (self.pageYOffset) {
            yScroll = self.pageYOffset;
            xScroll = self.pageXOffset;
        } else if (document.documentElement && document.documentElement.scrollTop) {
            // Explorer 6 Strict
            yScroll = document.documentElement.scrollTop;
            xScroll = document.documentElement.scrollLeft;
        } else if (document.body) {
            // all other Explorers
            yScroll = document.body.scrollTop;
            xScroll = document.body.scrollLeft;
        }
        return new Array(xScroll,yScroll)
    }

    // Adapted from getPageSize() by quirksmode.com
    function getPageHeight() {
        var windowHeight
        if (self.innerHeight) {
            // all except Explorer
            windowHeight = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) {
            // Explorer 6 Strict Mode
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) {
            // other Explorers
            windowHeight = document.body.clientHeight;
        }
        return windowHeight
    }

    // Backwards compatibility
    function makeCompatible() {
        var $s = $.facebox.settings

        $s.loadingImage = $s.loading_image || $s.loadingImage
        $s.closeImage = $s.close_image || $s.closeImage
        $s.imageTypes = $s.image_types || $s.imageTypes
        $s.faceboxHtml = $s.facebox_html || $s.faceboxHtml
    }

    // Figures out what you want to display and displays it
    // formats are:
    //     div: #id
    //   image: blah.extension
    //    ajax: anything else
    function fillFaceboxFromHref(href, klass) {
        // div
        if (href.match(/#/)) {
            var url = window.location.href.split('#')[0]
            var target = href.replace(url, '')
            if (target == '#')
                return
            $.facebox.reveal($(target).html(), klass)

            // image
        } else if (href.match($.facebox.settings.imageTypesRegexp)) {
            fillFaceboxFromImage(href, klass)
            // ajax
        } else {
            fillFaceboxFromAjax(href, klass)
        }
    }

    function fillFaceboxFromImage(href, klass) {
        var image = new Image()
        image.onload = function() {
            $.facebox.reveal('<div class="image"><img src="' + image.src + '" /></div>', klass)
        }
        image.src = href
    }

    function fillFaceboxFromAjax(href, klass) {
        $.facebox.jqxhr = $.get(href, function(data) {
            $.facebox.reveal(data, klass)
        })
    }

    function skipOverlay() {
        return $.facebox.settings.overlay == false || $.facebox.settings.opacity === null
    }

    function showOverlay() {
        if (skipOverlay())
            return

        if ($('#facebox_overlay').length == 0)
            $("body").append('<div id="facebox_overlay" class="facebox_hide"></div>')

        $('#facebox_overlay').hide().addClass("facebox_overlayBG").css('opacity', $.facebox.settings.opacity).click(function() {
            $(document).trigger('close.facebox')
        }).fadeIn(200)
        return false
    }

    function hideOverlay() {
        if (skipOverlay())
            return

        $('#facebox_overlay').fadeOut(200, function() {
            $("#facebox_overlay").removeClass("facebox_overlayBG")
            $("#facebox_overlay").addClass("facebox_hide")
            $("#facebox_overlay").remove()
        })

        return false
    }

    /*
   * Bindings
   */

    $(document).bind('close.facebox', function() {
        if ($.facebox.jqxhr) {
            $.facebox.jqxhr.abort()
            $.facebox.jqxhr = null
        }
        $(document).unbind('keydown.facebox')
        $('#facebox').fadeOut(function() {
            $('#facebox .content').removeClass().addClass('content')
            $('#facebox .loading').remove()
            $(document).trigger('afterClose.facebox')
        })
        hideOverlay()
    })

}));

/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return n = {
        686: function(t, e, n) {
            "use strict";
            n.d(e, {
                default: function() {
                    return o
                }
            });
            var e = n(279)
              , i = n.n(e)
              , e = n(370)
              , u = n.n(e)
              , e = n(817)
              , c = n.n(e);
            function a(t) {
                try {
                    return document.execCommand(t)
                } catch (t) {
                    return
                }
            }
            var f = function(t) {
                t = c()(t);
                return a("cut"),
                t
            };
            var l = function(t) {
                var e, n, o, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                    container: document.body
                }, i = "";
                return "string" == typeof t ? (e = t,
                n = "rtl" === document.documentElement.getAttribute("dir"),
                (o = document.createElement("textarea")).style.fontSize = "12pt",
                o.style.border = "0",
                o.style.padding = "0",
                o.style.margin = "0",
                o.style.position = "absolute",
                o.style[n ? "right" : "left"] = "-9999px",
                n = window.pageYOffset || document.documentElement.scrollTop,
                o.style.top = "".concat(n, "px"),
                o.setAttribute("readonly", ""),
                o.value = e,
                o = o,
                r.container.appendChild(o),
                i = c()(o),
                a("copy"),
                o.remove()) : (i = c()(t),
                a("copy")),
                i
            };
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            var s = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = t.action
                  , n = void 0 === e ? "copy" : e
                  , o = t.container
                  , e = t.target
                  , t = t.text;
                if ("copy" !== n && "cut" !== n)
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (void 0 !== e) {
                    if (!e || "object" !== r(e) || 1 !== e.nodeType)
                        throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === n && e.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                }
                return t ? l(t, {
                    container: o
                }) : e ? "cut" === n ? f(e) : l(e, {
                    container: o
                }) : void 0
            };
            function d(t) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            function y(t, e) {
                return (y = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                )(t, e)
            }
            function h(n) {
                var o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = m(n);
                    return t = o ? (t = m(this).constructor,
                    Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                    e = this,
                    !(t = t) || "object" !== d(t) && "function" != typeof t ? function(t) {
                        if (void 0 !== t)
                            return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(e) : t
                }
            }
            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function v(t, e) {
                t = "data-clipboard-".concat(t);
                if (e.hasAttribute(t))
                    return e.getAttribute(t)
            }
            var o = function() {
                !function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && y(t, e)
                }(r, i());
                var t, e, n, o = h(r);
                function r(t, e) {
                    var n;
                    return function(t) {
                        if (!(t instanceof r))
                            throw new TypeError("Cannot call a class as a function")
                    }(this),
                    (n = o.call(this)).resolveOptions(e),
                    n.listenClick(t),
                    n
                }
                return t = r,
                n = [{
                    key: "copy",
                    value: function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        };
                        return l(t, e)
                    }
                }, {
                    key: "cut",
                    value: function(t) {
                        return f(t)
                    }
                }, {
                    key: "isSupported",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                          , t = "string" == typeof t ? [t] : t
                          , e = !!document.queryCommandSupported;
                        return t.forEach(function(t) {
                            e = e && !!document.queryCommandSupported(t)
                        }),
                        e
                    }
                }],
                (e = [{
                    key: "resolveOptions",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                        this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                        this.text = "function" == typeof t.text ? t.text : this.defaultText,
                        this.container = "object" === d(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = u()(t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget
                          , t = s({
                            action: this.action(e),
                            container: this.container,
                            target: this.target(e),
                            text: this.text(e)
                        });
                        this.emit(t ? "success" : "error", {
                            action: this.action,
                            text: t,
                            trigger: e,
                            clearSelection: function() {
                                e && e.focus(),
                                document.activeElement.blur(),
                                window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return v("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        t = v("target", t);
                        if (t)
                            return document.querySelector(t)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return v("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy()
                    }
                }]) && p(t.prototype, e),
                n && p(t, n),
                r
            }()
        },
        828: function(t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector),
            t.exports = function(t, e) {
                for (; t && 9 !== t.nodeType; ) {
                    if ("function" == typeof t.matches && t.matches(e))
                        return t;
                    t = t.parentNode
                }
            }
        },
        438: function(t, e, n) {
            var u = n(828);
            function i(t, e, n, o, r) {
                var i = function(e, n, t, o) {
                    return function(t) {
                        t.delegateTarget = u(t.target, n),
                        t.delegateTarget && o.call(e, t)
                    }
                }
                .apply(this, arguments);
                return t.addEventListener(n, i, r),
                {
                    destroy: function() {
                        t.removeEventListener(n, i, r)
                    }
                }
            }
            t.exports = function(t, e, n, o, r) {
                return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
                Array.prototype.map.call(t, function(t) {
                    return i(t, e, n, o, r)
                }))
            }
        },
        879: function(t, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }
            ,
            n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || n.node(t[0]))
            }
            ,
            n.string = function(t) {
                return "string" == typeof t || t instanceof String
            }
            ,
            n.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        },
        370: function(t, e, n) {
            var f = n(879)
              , l = n(438);
            t.exports = function(t, e, n) {
                if (!t && !e && !n)
                    throw new Error("Missing required arguments");
                if (!f.string(e))
                    throw new TypeError("Second argument must be a String");
                if (!f.fn(n))
                    throw new TypeError("Third argument must be a Function");
                if (f.node(t))
                    return c = e,
                    a = n,
                    (u = t).addEventListener(c, a),
                    {
                        destroy: function() {
                            u.removeEventListener(c, a)
                        }
                    };
                if (f.nodeList(t))
                    return o = t,
                    r = e,
                    i = n,
                    Array.prototype.forEach.call(o, function(t) {
                        t.addEventListener(r, i)
                    }),
                    {
                        destroy: function() {
                            Array.prototype.forEach.call(o, function(t) {
                                t.removeEventListener(r, i)
                            })
                        }
                    };
                if (f.string(t))
                    return t = t,
                    e = e,
                    n = n,
                    l(document.body, t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var o, r, i, u, c, a
            }
        },
        817: function(t) {
            t.exports = function(t) {
                var e, n = "SELECT" === t.nodeName ? (t.focus(),
                t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                e || t.removeAttribute("readonly"),
                t.value) : (t.hasAttribute("contenteditable") && t.focus(),
                n = window.getSelection(),
                (e = document.createRange()).selectNodeContents(t),
                n.removeAllRanges(),
                n.addRange(e),
                n.toString());
                return n
            }
        },
        279: function(t) {
            function e() {}
            e.prototype = {
                on: function(t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }),
                    this
                },
                once: function(t, e, n) {
                    var o = this;
                    function r() {
                        o.off(t, r),
                        e.apply(n, arguments)
                    }
                    return r._ = e,
                    this.on(t, r, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++)
                        n[o].fn.apply(n[o].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {})
                      , o = n[t]
                      , r = [];
                    if (o && e)
                        for (var i = 0, u = o.length; i < u; i++)
                            o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? n[t] = r : delete n[t],
                    this
                }
            },
            t.exports = e,
            t.exports.TinyEmitter = e
        }
    },
    r = {},
    o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return o.d(e, {
            a: e
        }),
        e
    }
    ,
    o.d = function(t, e) {
        for (var n in e)
            o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    o(686).default;
    function o(t) {
        if (r[t])
            return r[t].exports;
        var e = r[t] = {
            exports: {}
        };
        return n[t](e, e.exports, o),
        e.exports
    }
    var n, r
});

/**
 * @name		jQuery FullScreen Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2012/02/enhance-your-website-fullscreen-api/
 * @license		MIT License
 */

(function($) {

    // Adding a new test to the jQuery support object
    $.support.fullscreen = supportFullScreen();

    // Creating the plugin
    $.fn.fullScreen = function(props) {

        if (!$.support.fullscreen || this.length != 1) {

            // The plugin can be called only
            // on one element at a time

            return this;
        }

        if (fullScreenStatus()) {
            // if we are already in fullscreen, exit
            cancelFullScreen();
            return this;
        }

        // You can potentially pas two arguments a color
        // for the background and a callback function

        var options = $.extend({
            'background': '#111',
            'callback': function() {}
        }, props);

        // This temporary div is the element that is
        // actually going to be enlarged in full screen

        var fs = $('<div>', {
            'css': {
                'overflow-y': 'auto',
                'background': options.background,
                'width': '100%',
                'height': '100%'
            }
        });

        var elem = this;

        // You can use the .fullScreen class to
        // apply styling to your element
        elem.addClass('fullScreen');

        // Inserting our element in the temporary
        // div, after which we zoom it in fullscreen
        fs.insertBefore(elem);
        fs.append(elem);
        requestFullScreen(fs.get(0));

        fs.click(function(e) {
            if (e.target == this) {
                // If the black bar was clicked
                cancelFullScreen();
            }
        });

        elem.cancel = function() {
            cancelFullScreen();
            return elem;
        }
        ;

        onFullScreenEvent(function(fullScreen) {

            if (!fullScreen) {

                // We have exited full screen.
                // Remove the class and destroy
                // the temporary div

                elem.removeClass('fullScreen').insertBefore(fs);
                fs.remove();
            }

            // Calling the user supplied callback
            options.callback(fullScreen);
        });

        return elem;
    }
    ;

    // These helper functions available only to our plugin scope.

    function supportFullScreen() {
        var doc = document.documentElement;

        return ('requestFullscreen'in doc) || ('mozRequestFullScreen'in doc && document.mozFullScreenEnabled) || ('webkitRequestFullScreen'in doc);
    }

    function requestFullScreen(elem) {

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
    }

    function fullScreenStatus() {
        return document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen;
    }

    function cancelFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }

    function onFullScreenEvent(callback) {
        $(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function() {
            // The full screen status is automatically
            // passed to our callback as an argument.
            callback(fullScreenStatus());
        });
    }

}
)(jQuery);

// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

(function($) {

    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    }
    ;
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    }
    ;
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();

                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy';
                // reset classname in case of dynamic gravity
                $tip.remove().css({
                    top: 0,
                    left: 0,
                    visibility: 'hidden',
                    display: 'block'
                }).prependTo(document.body);

                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });

                var actualWidth = $tip[0].offsetWidth
                  , actualHeight = $tip[0].offsetHeight
                  , gravity = maybeCall(this.options.gravity, this.$element[0]);

                var tp;
                switch (gravity.charAt(0)) {
                case 'n':
                    tp = {
                        top: pos.top + pos.height + this.options.offset,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    };
                    break;
                case 's':
                    tp = {
                        top: pos.top - actualHeight - this.options.offset,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    };
                    break;
                case 'e':
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left - actualWidth - this.options.offset
                    };
                    break;
                case 'w':
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left + pos.width + this.options.offset
                    };
                    break;
                }

                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }

                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }

                if (this.options.fade) {
                    $tip.stop().css({
                        opacity: 0,
                        display: 'block',
                        visibility: 'visible'
                    }).animate({
                        opacity: this.options.opacity
                    });
                } else {
                    $tip.css({
                        visibility: 'visible',
                        opacity: this.options.opacity
                    });
                }
            }
        },

        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() {
                    $(this).remove();
                });
            } else {
                this.tip().remove();
            }
        },

        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof ($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },

        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },

        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return this.$tip;
        },

        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function() {
            this.enabled = true;
        },
        disable: function() {
            this.enabled = false;
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled;
        }
    };

    $.fn.tipsy = function(options) {

        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy)
                tipsy[options]();
            return this;
        }

        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele,$.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }

        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() {
                    if (tipsy.hoverState == 'in')
                        tipsy.show();
                }, options.delayIn);
            }
        }
        ;
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() {
                    if (tipsy.hoverState == 'out')
                        tipsy.hide();
                }, options.delayOut);
            }
        }
        ;
        if (!options.live)
            this.each(function() {
                get(this);
            });

        if (options.trigger != 'manual') {
            var binder = options.live ? 'live' : 'bind'
              , eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus'
              , eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }

        return this;

    }
    ;

    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };

    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    }
    ;

    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    }
    ;

    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    }
    ;

    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
    $.fn.tipsy.autoBounds = function(margin, prefer) {
        return function() {
            var dir = {
                ns: prefer[0],
                ew: (prefer.length > 1 ? prefer[1] : false)
            }
              , boundTop = $(document).scrollTop() + margin
              , boundLeft = $(document).scrollLeft() + margin
              , $this = $(this);

            if ($this.offset().top < boundTop)
                dir.ns = 'n';
            if ($this.offset().left < boundLeft)
                dir.ew = 'w';
            if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin)
                dir.ew = 'e';
            if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin)
                dir.ns = 's';

            return dir.ns + (dir.ew ? dir.ew : '');
        }
    }
    ;

}
)(jQuery);

(function(a) {
    a.isScrollToFixed = function(b) {
        return !!a(b).data("ScrollToFixed")
    }
    ;
    a.ScrollToFixed = function(d, i) {
        var l = this;
        l.$el = a(d);
        l.el = d;
        l.$el.data("ScrollToFixed", l);
        var c = false;
        var G = l.$el;
        var H;
        var E;
        var e;
        var y;
        var D = 0;
        var q = 0;
        var j = -1;
        var f = -1;
        var t = null;
        var z;
        var g;
        function u() {
            G.trigger("preUnfixed.ScrollToFixed");
            k();
            G.trigger("unfixed.ScrollToFixed");
            f = -1;
            D = G.offset().top;
            q = G.offset().left;
            if (l.options.offsets) {
                q += (G.offset().left - G.position().left)
            }
            if (j == -1) {
                j = q
            }
            H = G.css("position");
            c = true;
            if (l.options.bottom != -1) {
                G.trigger("preFixed.ScrollToFixed");
                w();
                G.trigger("fixed.ScrollToFixed")
            }
        }
        function n() {
            var I = l.options.limit;
            if (!I) {
                return 0
            }
            if (typeof (I) === "function") {
                return I.apply(G)
            }
            return I
        }
        function p() {
            return H === "fixed"
        }
        function x() {
            return H === "absolute"
        }
        function h() {
            return !(p() || x())
        }
        function w() {
            if (!p()) {
                t.css({
                    display: G.css("display"),
                    width: G.outerWidth(true),
                    height: G.outerHeight(true),
                    "float": G.css("float")
                });
                cssOptions = {
                    "z-index": l.options.zIndex,
                    position: "fixed",
                    top: l.options.bottom == -1 ? s() : "",
                    bottom: l.options.bottom == -1 ? "" : l.options.bottom,
                    "margin-left": "0px"
                };
                if (!l.options.dontSetWidth) {
                    cssOptions.width = G.width()
                }
                G.css(cssOptions);
                G.addClass(l.options.baseClassName);
                if (l.options.className) {
                    G.addClass(l.options.className)
                }
                H = "fixed"
            }
        }
        function b() {
            var J = n();
            var I = q;
            if (l.options.removeOffsets) {
                I = "";
                J = J - D
            }
            cssOptions = {
                position: "absolute",
                top: J,
                left: I,
                "margin-left": "0px",
                bottom: ""
            };
            if (!l.options.dontSetWidth) {
                cssOptions.width = G.width()
            }
            G.css(cssOptions);
            H = "absolute"
        }
        function k() {
            if (!h()) {
                f = -1;
                t.css("display", "none");
                G.css({
                    "z-index": y,
                    width: "",
                    position: E,
                    left: "",
                    top: e,
                    "margin-left": ""
                });
                G.removeClass("scroll-to-fixed-fixed");
                if (l.options.className) {
                    G.removeClass(l.options.className)
                }
                H = null
            }
        }
        function v(I) {
            if (I != f) {
                G.css("left", q - I);
                f = I
            }
        }
        function s() {
            var I = l.options.marginTop;
            if (!I) {
                return 0
            }
            if (typeof (I) === "function") {
                return I.apply(G)
            }
            return I
        }
        function A() {
            if (!a.isScrollToFixed(G)) {
                return
            }
            var K = c;
            if (!c) {
                u()
            } else {
                if (h()) {
                    D = G.offset().top;
                    q = G.offset().left
                }
            }
            var I = a(window).scrollLeft();
            var L = a(window).scrollTop();
            var J = n();
            if (l.options.minWidth && a(window).width() < l.options.minWidth) {
                if (!h() || !K) {
                    o();
                    G.trigger("preUnfixed.ScrollToFixed");
                    k();
                    G.trigger("unfixed.ScrollToFixed")
                }
            } else {
                if (l.options.maxWidth && a(window).width() > l.options.maxWidth) {
                    if (!h() || !K) {
                        o();
                        G.trigger("preUnfixed.ScrollToFixed");
                        k();
                        G.trigger("unfixed.ScrollToFixed")
                    }
                } else {
                    if (l.options.bottom == -1) {
                        if (J > 0 && L >= J - s()) {
                            if (!x() || !K) {
                                o();
                                G.trigger("preAbsolute.ScrollToFixed");
                                b();
                                G.trigger("unfixed.ScrollToFixed")
                            }
                        } else {
                            if (L >= D - s()) {
                                if (!p() || !K) {
                                    o();
                                    G.trigger("preFixed.ScrollToFixed");
                                    w();
                                    f = -1;
                                    G.trigger("fixed.ScrollToFixed")
                                }
                                v(I)
                            } else {
                                if (!h() || !K) {
                                    o();
                                    G.trigger("preUnfixed.ScrollToFixed");
                                    k();
                                    G.trigger("unfixed.ScrollToFixed")
                                }
                            }
                        }
                    } else {
                        if (J > 0) {
                            if (L + a(window).height() - G.outerHeight(true) >= J - (s() || -m())) {
                                if (p()) {
                                    o();
                                    G.trigger("preUnfixed.ScrollToFixed");
                                    if (E === "absolute") {
                                        b()
                                    } else {
                                        k()
                                    }
                                    G.trigger("unfixed.ScrollToFixed")
                                }
                            } else {
                                if (!p()) {
                                    o();
                                    G.trigger("preFixed.ScrollToFixed");
                                    w()
                                }
                                v(I);
                                G.trigger("fixed.ScrollToFixed")
                            }
                        } else {
                            v(I)
                        }
                    }
                }
            }
        }
        function m() {
            if (!l.options.bottom) {
                return 0
            }
            return l.options.bottom
        }
        function o() {
            var I = G.css("position");
            if (I == "absolute") {
                G.trigger("postAbsolute.ScrollToFixed")
            } else {
                if (I == "fixed") {
                    G.trigger("postFixed.ScrollToFixed")
                } else {
                    G.trigger("postUnfixed.ScrollToFixed")
                }
            }
        }
        var C = function(I) {
            if (G.is(":visible")) {
                c = false;
                A()
            }
        };
        var F = function(I) {
            (!!window.requestAnimationFrame) ? requestAnimationFrame(A) : A()
        };
        var B = function() {
            var J = document.body;
            if (document.createElement && J && J.appendChild && J.removeChild) {
                var L = document.createElement("div");
                if (!L.getBoundingClientRect) {
                    return null
                }
                L.innerHTML = "x";
                L.style.cssText = "position:fixed;top:100px;";
                J.appendChild(L);
                var M = J.style.height
                  , N = J.scrollTop;
                J.style.height = "3000px";
                J.scrollTop = 500;
                var I = L.getBoundingClientRect().top;
                J.style.height = M;
                var K = (I === 100);
                J.removeChild(L);
                J.scrollTop = N;
                return K
            }
            return null
        };
        var r = function(I) {
            I = I || window.event;
            if (I.preventDefault) {
                I.preventDefault()
            }
            I.returnValue = false
        };
        l.init = function() {
            l.options = a.extend({}, a.ScrollToFixed.defaultOptions, i);
            y = G.css("z-index");
            l.$el.css("z-index", l.options.zIndex);
            t = a("<div />");
            H = G.css("position");
            E = G.css("position");
            e = G.css("top");
            if (h()) {
                l.$el.after(t)
            }
            a(window).bind("resize.ScrollToFixed", C);
            a(window).bind("scroll.ScrollToFixed", F);
            if ("ontouchmove"in window) {
                a(window).bind("touchmove.ScrollToFixed", A)
            }
            if (l.options.preFixed) {
                G.bind("preFixed.ScrollToFixed", l.options.preFixed)
            }
            if (l.options.postFixed) {
                G.bind("postFixed.ScrollToFixed", l.options.postFixed)
            }
            if (l.options.preUnfixed) {
                G.bind("preUnfixed.ScrollToFixed", l.options.preUnfixed)
            }
            if (l.options.postUnfixed) {
                G.bind("postUnfixed.ScrollToFixed", l.options.postUnfixed)
            }
            if (l.options.preAbsolute) {
                G.bind("preAbsolute.ScrollToFixed", l.options.preAbsolute)
            }
            if (l.options.postAbsolute) {
                G.bind("postAbsolute.ScrollToFixed", l.options.postAbsolute)
            }
            if (l.options.fixed) {
                G.bind("fixed.ScrollToFixed", l.options.fixed)
            }
            if (l.options.unfixed) {
                G.bind("unfixed.ScrollToFixed", l.options.unfixed)
            }
            if (l.options.spacerClass) {
                t.addClass(l.options.spacerClass)
            }
            G.bind("resize.ScrollToFixed", function() {
                t.height(G.height())
            });
            G.bind("scroll.ScrollToFixed", function() {
                G.trigger("preUnfixed.ScrollToFixed");
                k();
                G.trigger("unfixed.ScrollToFixed");
                A()
            });
            G.bind("detach.ScrollToFixed", function(I) {
                r(I);
                G.trigger("preUnfixed.ScrollToFixed");
                k();
                G.trigger("unfixed.ScrollToFixed");
                a(window).unbind("resize.ScrollToFixed", C);
                a(window).unbind("scroll.ScrollToFixed", F);
                G.unbind(".ScrollToFixed");
                t.remove();
                l.$el.removeData("ScrollToFixed")
            });
            C()
        }
        ;
        l.init()
    }
    ;
    a.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1000,
        baseClassName: "scroll-to-fixed-fixed"
    };
    a.fn.scrollToFixed = function(b) {
        return this.each(function() {
            (new a.ScrollToFixed(this,b))
        })
    }
}
)(jQuery);

/* mousetrap v1.1.1 craig.is/killing/mice */
window.Mousetrap = function() {
    function o(a, c, b) {
        if (a.addEventListener)
            return a.addEventListener(c, b, !1);
        a.attachEvent("on" + c, b)
    }
    function u(a) {
        return "keypress" == a.type ? String.fromCharCode(a.which) : h[a.which] ? h[a.which] : v[a.which] ? v[a.which] : String.fromCharCode(a.which).toLowerCase()
    }
    function p(a) {
        var a = a || {}, c = !1, b;
        for (b in l)
            a[b] ? c = !0 : l[b] = 0;
        c || (n = !1)
    }
    function w(a, c, b, d, C) {
        var g, e, f = [];
        if (!j[a])
            return [];
        "keyup" == b && q(a) && (c = [a]);
        for (g = 0; g < j[a].length; ++g)
            if (e = j[a][g],
            !(e.seq && l[e.seq] != e.level) && b == e.action && ("keypress" === b || c.sort().join(",") === e.modifiers.sort().join(",")))
                d && e.combo == C && j[a].splice(g, 1),
                f.push(e);
        return f
    }
    function r(a, c) {
        !1 === a(c) && (c.preventDefault && c.preventDefault(),
        c.stopPropagation && c.stopPropagation(),
        c.returnValue = !1,
        c.cancelBubble = !0)
    }
    function s(a) {
        a.which = "number" == typeof a.which ? a.which : a.keyCode;
        var c = u(a);
        if (c)
            if ("keyup" === a.type && t === c)
                t = !1;
            else {
                var b = a.target || a.srcElement
                  , d = b.tagName;
                if (!(-1 < (" " + b.className + " ").indexOf(" mousetrap ") ? 0 : "INPUT" == d || "SELECT" == d || "TEXTAREA" == d)) {
                    b = [];
                    a.shiftKey && b.push("shift");
                    a.altKey && b.push("alt");
                    a.ctrlKey && b.push("ctrl");
                    a.metaKey && b.push("meta");
                    for (var b = w(c, b, a.type), f = {}, g = !1, d = 0; d < b.length; ++d)
                        b[d].seq ? (g = !0,
                        f[b[d].seq] = 1,
                        r(b[d].callback, a)) : !g && !n && r(b[d].callback, a);
                    a.type == n && !q(c) && p(f)
                }
            }
    }
    function q(a) {
        return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a
    }
    function x(a, c, b) {
        if (!b) {
            if (!k) {
                k = {};
                for (var d in h)
                    95 < d && 112 > d || h.hasOwnProperty(d) && (k[h[d]] = d)
            }
            b = k[a] ? "keydown" : "keypress"
        }
        "keypress" === b && c.length && (b = "keydown");
        return b
    }
    function y(a, c, b, d, f) {
        var a = a.replace(/\s+/g, " "), g = a.split(" "), e, h, i = [];
        if (1 < g.length) {
            var k = a
              , m = b;
            l[k] = 0;
            m || (m = x(g[0], []));
            a = function() {
                n = m;
                ++l[k];
                clearTimeout(z);
                z = setTimeout(p, 1E3)
            }
            ;
            b = function(a) {
                r(c, a);
                "keyup" !== m && (t = u(a));
                setTimeout(p, 10)
            }
            ;
            for (d = 0; d < g.length; ++d)
                y(g[d], d < g.length - 1 ? a : b, m, k, d)
        } else {
            h = "+" === a ? ["+"] : a.split("+");
            for (g = 0; g < h.length; ++g)
                e = h[g],
                A[e] && (e = A[e]),
                b && ("keypress" != b && B[e]) && (e = B[e],
                i.push("shift")),
                q(e) && i.push(e);
            b = x(e, i, b);
            j[e] || (j[e] = []);
            w(e, i, b, !d, a);
            j[e][d ? "unshift" : "push"]({
                callback: c,
                modifiers: i,
                action: b,
                seq: d,
                level: f,
                combo: a
            })
        }
    }
    for (var h = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
    }, v = {
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    }, B = {
        "~": "`",
        "!": "1",
        "@": "2",
        "#": "3",
        $: "4",
        "%": "5",
        "^": "6",
        "&": "7",
        "*": "8",
        "(": "9",
        ")": "0",
        _: "-",
        "+": "=",
        ":": ";",
        '"': "'",
        "<": ",",
        ">": ".",
        "?": "/",
        "|": "\\"
    }, A = {
        option: "alt",
        command: "meta",
        "return": "enter",
        escape: "esc"
    }, k, j = {}, i = {}, l = {}, z, t = !1, n = !1, f = 1; 20 > f; ++f)
        h[111 + f] = "f" + f;
    for (f = 96; 106 > f; ++f)
        h[f] = f - 96;
    o(document, "keypress", s);
    o(document, "keydown", s);
    o(document, "keyup", s);
    return {
        bind: function(a, c, b) {
            for (var d = a instanceof Array ? a : [a], f = 0; f < d.length; ++f)
                y(d[f], c, b);
            i[a + ":" + b] = c
        },
        unbind: function(a, c) {
            i[a + ":" + c] && (delete i[a + ":" + c],
            this.bind(a, function() {}, c))
        },
        trigger: function(a, c) {
            i[a + ":" + c]()
        },
        reset: function() {
            j = {};
            i = {}
        }
    }
}();

/**
 * Swiper 5.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 20, 2020
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(i, s) {
        void 0 === i && (i = {}),
        void 0 === s && (s = {}),
        Object.keys(s).forEach((function(a) {
            void 0 === i[a] ? i[a] = s[a] : e(s[a]) && e(i[a]) && Object.keys(s[a]).length > 0 && t(i[a], s[a])
        }
        ))
    }
    var i = "undefined" != typeof document ? document : {}
      , s = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    t(i, s);
    var a = "undefined" != typeof window ? window : {};
    t(a, {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        }
    });
    var r = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function n(e, t) {
        var s = []
          , n = 0;
        if (e && !t && e instanceof r)
            return e;
        if (e)
            if ("string" == typeof e) {
                var o, l, d = e.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"),
                    0 === d.indexOf("<tr") && (h = "tbody"),
                    0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"),
                    0 === d.indexOf("<tbody") && (h = "table"),
                    0 === d.indexOf("<option") && (h = "select"),
                    (l = i.createElement(h)).innerHTML = d,
                    n = 0; n < l.childNodes.length; n += 1)
                        s.push(l.childNodes[n])
                } else
                    for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])],
                    n = 0; n < o.length; n += 1)
                        o[n] && s.push(o[n])
            } else if (e.nodeType || e === a || e === i)
                s.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (n = 0; n < e.length; n += 1)
                    s.push(e[n]);
        return new r(s)
    }
    function o(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    n.fn = r.prototype,
    n.Class = r,
    n.Dom7 = r;
    var l = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length)
                    this[s].setAttribute(e, t);
                else
                    for (var a in e)
                        this[s][a] = e[a],
                        this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)
                    (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                    i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e),
                    n(t).is(a))
                        r.apply(t, i);
                    else
                        for (var s = n(t).parents(), o = 0; o < s.length; o += 1)
                            n(s[o]).is(a) && r.apply(s[o], i)
                }
            }
            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                r.apply(this, t)
            }
            "function" == typeof t[1] && (s = (e = t)[0],
            r = e[1],
            o = e[2],
            a = void 0),
            o || (o = !1);
            for (var h, p = s.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (a)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                        u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
                        u.dom7LiveListeners[v].push({
                            listener: r,
                            proxyListener: l
                        }),
                        u.addEventListener(v, l, o)
                    }
                else
                    for (h = 0; h < p.length; h += 1) {
                        var f = p[h];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                        u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
                        u.dom7Listeners[f].push({
                            listener: r,
                            proxyListener: d
                        }),
                        u.addEventListener(f, d, o)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0],
            r = e[1],
            n = e[2],
            a = void 0),
            n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h]
                      , c = void 0;
                    if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
                    c && c.length)
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n),
                            c.splice(u, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var s = e[0].split(" "), r = e[1], n = 0; n < s.length; n += 1)
                for (var o = s[n], l = 0; l < this.length; l += 1) {
                    var d = this[l]
                      , h = void 0;
                    try {
                        h = new a.CustomEvent(o,{
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (h = i.createEvent("Event")).initEvent(o, !0, !0),
                        h.detail = r
                    }
                    d.dom7EventData = e.filter((function(e, t) {
                        return t > 0
                    }
                    )),
                    d.dispatchEvent(h),
                    d.dom7EventData = [],
                    delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r),
                    t = 0; t < i.length; t += 1)
                        s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1)
                    s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var e = this[0]
                  , t = e.getBoundingClientRect()
                  , s = i.body
                  , r = e.clientTop || s.clientTop || 0
                  , n = e.clientLeft || s.clientLeft || 0
                  , o = e === a ? a.scrollY : e.scrollTop
                  , l = e === a ? a.scrollX : e.scrollLeft;
                return {
                    top: t.top + o - r,
                    left: t.left + l - n
                }
            }
            return null
        },
        css: function(e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var s in e)
                            this[i].style[s] = e[s];
                    return this
                }
                if (this[0])
                    return a.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1)
                    this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, s, o = this[0];
            if (!o || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (o.matches)
                    return o.matches(e);
                if (o.webkitMatchesSelector)
                    return o.webkitMatchesSelector(e);
                if (o.msMatchesSelector)
                    return o.msMatchesSelector(e);
                for (t = n(e),
                s = 0; s < t.length; s += 1)
                    if (t[s] === o)
                        return !0;
                return !1
            }
            if (e === i)
                return o === i;
            if (e === a)
                return o === a;
            if (e.nodeType || e instanceof r) {
                for (t = e.nodeType ? [e] : e,
                s = 0; s < t.length; s += 1)
                    if (t[s] === o)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, i = this.length;
            return new r(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], s = arguments.length; s--; )
                t[s] = arguments[s];
            for (var a = 0; a < t.length; a += 1) {
                e = t[a];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof e) {
                        var o = i.createElement("div");
                        for (o.innerHTML = e; o.firstChild; )
                            this[n].appendChild(o.firstChild)
                    } else if (e instanceof r)
                        for (var l = 0; l < e.length; l += 1)
                            this[n].appendChild(e[l]);
                    else
                        this[n].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, s;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var a = i.createElement("div");
                    for (a.innerHTML = e,
                    s = a.childNodes.length - 1; s >= 0; s -= 1)
                        this[t].insertBefore(a.childNodes[s], this[t].childNodes[0])
                } else if (e instanceof r)
                    for (s = 0; s < e.length; s += 1)
                        this[t].insertBefore(e[s], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new r([this[0].nextElementSibling]) : new r([]) : this[0].nextElementSibling ? new r([this[0].nextElementSibling]) : new r([]) : new r([])
        },
        nextAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return new r([]);
            for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s),
                i = s
            }
            return new r(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new r([t.previousElementSibling]) : new r([]) : t.previousElementSibling ? new r([t.previousElementSibling]) : new r([])
            }
            return new r([])
        },
        prevAll: function(e) {
            var t = []
              , i = this[0];
            if (!i)
                return new r([]);
            for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s),
                i = s
            }
            return new r(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return n(o(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].parentNode; s; )
                    e ? n(s).is(e) && t.push(s) : t.push(s),
                    s = s.parentNode;
            return n(o(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
                    t.push(s[a]);
            return new r(t)
        },
        children: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
                    e ? 1 === s[a].nodeType && n(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
            return new r(o(t))
        },
        filter: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                e.call(this[i], i, this[i]) && t.push(this[i]);
            return new r(t)
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var i, s, a = this;
            for (i = 0; i < e.length; i += 1) {
                var r = n(e[i]);
                for (s = 0; s < r.length; s += 1)
                    a[a.length] = r[s],
                    a.length += 1
            }
            return a
        },
        styles: function() {
            return this[0] ? a.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(l).forEach((function(e) {
        n.fn[e] = n.fn[e] || l[e]
    }
    ));
    var d = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach((function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            }
            ))
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            var i, s, r;
            void 0 === t && (t = "x");
            var n = a.getComputedStyle(e, null);
            return a.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function(e) {
                return e.replace(",", ".")
            }
            )).join(", ")),
            r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            s || 0
        },
        parseUrlQuery: function(e) {
            var t, i, s, r, n = {}, o = e || a.location.href;
            if ("string" == typeof o && o.length)
                for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                    return "" !== e
                }
                ))).length,
                t = 0; t < r; t += 1)
                    s = i[t].replace(/#\S+/g, "").split("="),
                    n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
            return n
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a)
                    for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                        var l = r[n]
                          , h = Object.getOwnPropertyDescriptor(a, l);
                        void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {},
                        d.extend(i[l], a[l])) : i[l] = a[l])
                    }
            }
            return i
        }
    }
      , h = {
        touch: !!("ontouchstart"in a || a.DocumentTouch && i instanceof a.DocumentTouch),
        pointerEvents: !!a.PointerEvent && "maxTouchPoints"in a.navigator && a.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver"in a || "WebkitMutationObserver"in a,
        passiveListener: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                a.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in a
    }
      , p = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
            t.on(e, t.params.on[e])
        }
        ))
    }
      , c = {
        components: {
            configurable: !0
        }
    };
    p.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach((function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][a](t)
        }
        )),
        s
    }
    ,
    p.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        function a() {
            for (var i = [], r = arguments.length; r--; )
                i[r] = arguments[r];
            s.off(e, a),
            a.f7proxy && delete a.f7proxy,
            t.apply(s, i)
        }
        return a.f7proxy = t,
        s.on(e, a, i)
    }
    ,
    p.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            }
            ))
        }
        )),
        i) : i
    }
    ,
    p.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners)
            return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
        s = e.slice(1, e.length),
        a = r) : (i = e[0].events,
        s = e[0].data,
        a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach((function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function(e) {
                    t.push(e)
                }
                )),
                t.forEach((function(e) {
                    e.apply(a, s)
                }
                ))
            }
        }
        )),
        r
    }
    ,
    p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params)
        }
        ))
    }
    ,
    p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i]
              , a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }
            )),
            s.on && t.on && Object.keys(s.on).forEach((function(e) {
                t.on(e, s.on[e])
            }
            )),
            s.create && s.create.bind(t)(a)
        }
        ))
    }
    ,
    c.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    p.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e,
        e.proto && Object.keys(e.proto).forEach((function(t) {
            s.prototype[t] = e.proto[t]
        }
        )),
        e.static && Object.keys(e.static).forEach((function(t) {
            s[t] = e.static[t]
        }
        )),
        e.install && e.install.apply(s, t),
        s
    }
    ,
    p.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function(e) {
            return s.installModule(e)
        }
        )),
        s) : s.installModule.apply(s, [e].concat(t))
    }
    ,
    Object.defineProperties(p, c);
    var u = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth,
            t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight,
            0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            d.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this.params
              , t = this.$wrapperEl
              , i = this.size
              , s = this.rtlTranslate
              , r = this.wrongRTL
              , n = this.virtual && e.virtual.enabled
              , o = n ? this.virtual.slides.length : this.slides.length
              , l = t.children("." + this.params.slideClass)
              , h = n ? this.virtual.slides.length : l.length
              , p = []
              , c = []
              , u = [];
            function v(t) {
                return !e.cssMode || t !== l.length - 1
            }
            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length
              , b = this.snapGrid.length
              , w = e.spaceBetween
              , y = -f
              , x = 0
              , E = 0;
            if (void 0 !== i) {
                var T, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * i),
                this.virtualSize = -w,
                s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                e.slidesPerColumn > 1 && (T = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn,
                "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = T / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = l.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0
                          , I = void 0
                          , O = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var D = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn))
                              , A = k - e.slidesPerColumn * e.slidesPerGroup * D
                              , G = 0 === D ? e.slidesPerGroup : Math.min(Math.ceil((h - D * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (O = Math.floor(A / G)) * G + D * e.slidesPerGroup) + O * T / M,
                            $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else
                            "column" === e.slidesPerColumnFill ? (O = k - (I = Math.floor(k / M)) * M,
                            (I > z || I === z && O === M - 1) && (O += 1) >= M && (O = 0,
                            I += 1)) : I = k - (O = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== O && e.spaceBetween && e.spaceBetween + "px")
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = a.getComputedStyle($[0], null)
                              , B = $[0].style.transform
                              , N = $[0].style.webkitTransform;
                            if (B && ($[0].style.transform = "none"),
                            N && ($[0].style.webkitTransform = "none"),
                            e.roundLengths)
                                S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                            else if (this.isHorizontal()) {
                                var X = parseFloat(H.getPropertyValue("width"))
                                  , V = parseFloat(H.getPropertyValue("padding-left"))
                                  , Y = parseFloat(H.getPropertyValue("padding-right"))
                                  , F = parseFloat(H.getPropertyValue("margin-left"))
                                  , W = parseFloat(H.getPropertyValue("margin-right"))
                                  , R = H.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                            } else {
                                var q = parseFloat(H.getPropertyValue("height"))
                                  , j = parseFloat(H.getPropertyValue("padding-top"))
                                  , K = parseFloat(H.getPropertyValue("padding-bottom"))
                                  , U = parseFloat(H.getPropertyValue("margin-top"))
                                  , _ = parseFloat(H.getPropertyValue("margin-bottom"))
                                  , Z = H.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                            }
                            B && ($[0].style.transform = B),
                            N && ($[0].style.webkitTransform = N),
                            e.roundLengths && (S = Math.floor(S))
                        } else
                            S = (i - (e.slidesPerView - 1) * w) / e.slidesPerView,
                            e.roundLengths && (S = Math.floor(S)),
                            l[k] && (this.isHorizontal() ? l[k].style.width = S + "px" : l[k].style.height = S + "px");
                        l[k] && (l[k].swiperSlideSize = S),
                        u.push(S),
                        e.centeredSlides ? (y = y + S / 2 + x / 2 + w,
                        0 === x && 0 !== k && (y = y - i / 2 - w),
                        0 === k && (y = y - i / 2 - w),
                        Math.abs(y) < .001 && (y = 0),
                        e.roundLengths && (y = Math.floor(y)),
                        E % e.slidesPerGroup == 0 && p.push(y),
                        c.push(y)) : (e.roundLengths && (y = Math.floor(y)),
                        (E - Math.min(this.params.slidesPerGroupSkip, E)) % this.params.slidesPerGroup == 0 && p.push(y),
                        c.push(y),
                        y = y + S + w),
                        this.virtualSize += S + w,
                        x = S,
                        E += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, i) + m,
                s && r && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }),
                e.setWrapperSize && (this.isHorizontal() ? t.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : t.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                })),
                e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T,
                this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween,
                this.isHorizontal() ? t.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : t.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                }),
                e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)),
                        p[Q] < this.virtualSize + p[0] && C.push(J)
                    }
                    p = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)),
                        p[ee] <= this.virtualSize - i && C.push(te)
                    }
                    p = C,
                    Math.floor(this.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - i)
                }
                if (0 === p.length && (p = [0]),
                0 !== e.spaceBetween && (this.isHorizontal() ? s ? l.filter(v).css({
                    marginLeft: w + "px"
                }) : l.filter(v).css({
                    marginRight: w + "px"
                }) : l.filter(v).css({
                    marginBottom: w + "px"
                })),
                e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach((function(t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }
                    ));
                    var se = (ie -= e.spaceBetween) - i;
                    p = p.map((function(e) {
                        return e < 0 ? -f : e > se ? se + m : e
                    }
                    ))
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach((function(t) {
                        ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }
                    )),
                    (ae -= e.spaceBetween) < i) {
                        var re = (i - ae) / 2;
                        p.forEach((function(e, t) {
                            p[t] = e - re
                        }
                        )),
                        c.forEach((function(e, t) {
                            c[t] = e + re
                        }
                        ))
                    }
                }
                d.extend(this, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }),
                h !== o && this.emit("slidesLengthChange"),
                p.length !== g && (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
                c.length !== b && this.emit("slidesGridLengthChange"),
                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                if (this.params.centeredSlides)
                    this.visibleSlides.each((function(e, t) {
                        i.push(t)
                    }
                    ));
                else
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length)
                            break;
                        i.push(this.slides.eq(a)[0])
                    }
            else
                i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                }
            s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params
              , i = this.slides
              , s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e),
                i.removeClass(t.slideVisibleClass),
                this.visibleSlidesIndexes = [],
                this.visibleSlides = [];
                for (var r = 0; r < i.length; r += 1) {
                    var o = i[r]
                      , l = (a + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                        var d = -(a - o.swiperSlideOffset)
                          , h = d + this.slidesSizesGrid[r];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o),
                        this.visibleSlidesIndexes.push(r),
                        i.eq(r).addClass(t.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                this.visibleSlides = n(this.visibleSlides)
            }
        },
        updateProgress: function(e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params
              , s = this.maxTranslate() - this.minTranslate()
              , a = this.progress
              , r = this.isBeginning
              , n = this.isEnd
              , o = r
              , l = n;
            0 === s ? (a = 0,
            r = !0,
            n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0,
            n = a >= 1),
            d.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: n
            }),
            (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e),
            r && !o && this.emit("reachBeginning toEdge"),
            n && !l && this.emit("reachEnd toEdge"),
            (o && !r || l && !n) && this.emit("fromEdge"),
            this.emit("progress", a)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
            (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass),
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
            l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1)
                    void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if (a.indexOf(i) >= 0)
                t = a.indexOf(i);
            else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1),
            h !== n) {
                var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: n,
                    activeIndex: h
                }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                o !== u && this.emit("realIndexChange"),
                (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
            } else
                t !== l && (this.snapIndex = t,
                this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params
              , i = n(e.target).closest("." + t.slideClass)[0]
              , s = !1;
            if (i)
                for (var a = 0; a < this.slides.length; a += 1)
                    this.slides[a] === i && (s = !0);
            if (!i || !s)
                return this.clickedSlide = void 0,
                void (this.clickedIndex = void 0);
            this.clickedSlide = i,
            this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = n(i).index(),
            t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , i = this.rtlTranslate
              , s = this.translate
              , a = this.$wrapperEl;
            if (t.virtualTranslate)
                return i ? -s : s;
            if (t.cssMode)
                return s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate
              , s = this.params
              , a = this.$wrapperEl
              , r = this.wrapperEl
              , n = this.progress
              , o = 0
              , l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e,
            s.roundLengths && (o = Math.floor(o),
            l = Math.floor(l)),
            s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
            this.previousTranslate = this.translate,
            this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e),
            this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
            var n = this
              , o = n.params
              , l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition)
                return !1;
            var d, h = n.minTranslate(), p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e,
            n.updateProgress(d),
            o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d,
                r.behavior = "smooth",
                r)) : l[c ? "scrollLeft" : "scrollTop"] = -d,
                !0
            }
            return 0 === t ? (n.setTransition(0),
            n.setTranslate(d),
            i && (n.emit("beforeTransitionStart", t, a),
            n.emit("transitionEnd"))) : (n.setTransition(t),
            n.setTranslate(d),
            i && (n.emit("beforeTransitionStart", t, a),
            n.emit("transitionStart")),
            n.animating || (n.animating = !0,
            n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd),
                n.onTranslateToWrapperTransitionEnd = null,
                delete n.onTranslateToWrapperTransitionEnd,
                i && n.emit("transitionEnd"))
            }
            ),
            n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
            n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    var f = {
        setTransition: function(e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.params
              , a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
                this.emit("transitionStart"),
                e && i !== a) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"),
                    "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.previousIndex
              , a = this.params;
            if (this.animating = !1,
            !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
                this.emit("transitionEnd"),
                e && i !== s) {
                    if ("reset" === r)
                        return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"),
                    "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var m = {
        slideTo: function(e, t, i, s) {
            var a;
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var r = this
              , n = e;
            n < 0 && (n = 0);
            var o = r.params
              , l = r.snapGrid
              , d = r.slidesGrid
              , h = r.previousIndex
              , p = r.activeIndex
              , c = r.rtlTranslate
              , u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition)
                return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n)
              , f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1),
            (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m, g = -l[f];
            if (r.updateProgress(g),
            o.normalizeSlideIndex)
                for (var b = 0; b < d.length; b += 1)
                    -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
                    return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n)
                    return !1
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset",
            c && -g === r.translate || !c && g === r.translate)
                return r.updateActiveIndex(n),
                o.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== o.effect && r.setTranslate(g),
                "reset" !== m && (r.transitionStart(i, m),
                r.transitionEnd(i, m)),
                !1;
            if (o.cssMode) {
                var w = r.isHorizontal()
                  , y = -g;
                return c && (y = u.scrollWidth - u.offsetWidth - y),
                0 === t ? u[w ? "scrollLeft" : "scrollTop"] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = y,
                a.behavior = "smooth",
                a)) : u[w ? "scrollLeft" : "scrollTop"] = y,
                !0
            }
            return 0 === t ? (r.setTransition(0),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.transitionEnd(i, m)) : (r.setTransition(t),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(i, m))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
            !0
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides),
            this.slideTo(a, t, i, s)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating
              , r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a)
                    return !1;
                this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating
              , r = this.snapGrid
              , n = this.slidesGrid
              , o = this.rtlTranslate;
            if (s.loop) {
                if (a)
                    return !1;
                this.loopFix(),
                this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var d, h = l(o ? this.translate : -this.translate), p = r.map((function(e) {
                return l(e)
            }
            )), c = (n.map((function(e) {
                return l(e)
            }
            )),
            r[p.indexOf(h)],
            r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach((function(e) {
                !c && h >= e && (c = e)
            }
            )),
            void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1),
            this.slideTo(d, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = .5);
            var a = this.activeIndex
              , r = Math.min(this.params.slidesPerGroupSkip, a)
              , n = r + Math.floor((a - r) / this.params.slidesPerGroup)
              , o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0),
            a = Math.min(a, this.slidesGrid.length - 1),
            this.slideTo(a, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, s = t.$wrapperEl, a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, r = t.clickedIndex;
            if (i.loop) {
                if (t.animating)
                    return;
                e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(),
                r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                d.nextTick((function() {
                    t.slideTo(r)
                }
                ))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(),
                r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                d.nextTick((function() {
                    t.slideTo(r)
                }
                ))) : t.slideTo(r)
            } else
                t.slideTo(r)
        }
    };
    var g = {
        loopCreate: function() {
            var e = this
              , t = e.params
              , s = e.$wrapperEl;
            s.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
            var a = s.children("." + t.slideClass);
            if (t.loopFillGroupWithBlank) {
                var r = t.slidesPerGroup - a.length % t.slidesPerGroup;
                if (r !== t.slidesPerGroup) {
                    for (var o = 0; o < r; o += 1) {
                        var l = n(i.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                        s.append(l)
                    }
                    a = s.children("." + t.slideClass)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length),
            e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
            e.loopedSlides += t.loopAdditionalSlides,
            e.loopedSlides > a.length && (e.loopedSlides = a.length);
            var d = []
              , h = [];
            a.each((function(t, i) {
                var s = n(i);
                t < e.loopedSlides && h.push(i),
                t < a.length && t >= a.length - e.loopedSlides && d.push(i),
                s.attr("data-swiper-slide-index", t)
            }
            ));
            for (var p = 0; p < h.length; p += 1)
                s.append(n(h[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1)
                s.prepend(n(d[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev, r = this.allowSlideNext, n = this.snapGrid, o = this.rtlTranslate;
            this.allowSlidePrev = !0,
            this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s)
                e = i.length - 3 * s + t,
                e += s,
                this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
            else if (t >= i.length - s) {
                e = -i.length + t + s,
                e += s,
                this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a,
            this.allowSlideNext = r,
            this.emit("loopFix")
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
    };
    var b = {
        setGrabCursor: function(e) {
            if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            h.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var w, y, x, E, T, S, C, M, P, z, k, $, L, I, O, D = {
        appendSlide: function(e) {
            var t = this.$wrapperEl
              , i = this.params;
            if (i.loop && this.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && t.append(e[s]);
            else
                t.append(e);
            i.loop && this.loopCreate(),
            i.observer && h.observer || this.update()
        },
        prependSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && i.prepend(e[r]);
                a = s + e.length
            } else
                i.prepend(e);
            t.loop && this.loopCreate(),
            t.observer && h.observer || this.update(),
            this.slideTo(a, 0, !1)
        },
        addSlide: function(e, t) {
            var i = this.$wrapperEl
              , s = this.params
              , a = this.activeIndex;
            s.loop && (a -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0)
                this.prependSlide(t);
            else if (e >= r)
                this.appendSlide(t);
            else {
                for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
                    var d = this.slides.eq(l);
                    d.remove(),
                    o.unshift(d)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var p = 0; p < t.length; p += 1)
                        t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a
                } else
                    i.append(t);
                for (var c = 0; c < o.length; c += 1)
                    i.append(o[c]);
                s.loop && this.loopCreate(),
                s.observer && h.observer || this.update(),
                s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && (s -= this.loopedSlides,
            this.loopDestroy(),
            this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    a = e[n],
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < r && (r -= 1);
                r = Math.max(r, 0)
            } else
                a = e,
                this.slides[a] && this.slides.eq(a).remove(),
                a < r && (r -= 1),
                r = Math.max(r, 0);
            t.loop && this.loopCreate(),
            t.observer && h.observer || this.update(),
            t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }, A = (w = a.navigator.platform,
    y = a.navigator.userAgent,
    x = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!a.cordova && !a.phonegap),
        phonegap: !(!a.cordova && !a.phonegap),
        electron: !1
    },
    E = a.screen.width,
    T = a.screen.height,
    S = y.match(/(Android);?[\s\/]+([\d.]+)?/),
    C = y.match(/(iPad).*OS\s([\d_]+)/),
    M = y.match(/(iPod)(.*OS\s([\d_]+))?/),
    P = !C && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    z = y.indexOf("MSIE ") >= 0 || y.indexOf("Trident/") >= 0,
    k = y.indexOf("Edge/") >= 0,
    $ = y.indexOf("Gecko/") >= 0 && y.indexOf("Firefox/") >= 0,
    L = "Win32" === w,
    I = y.toLowerCase().indexOf("electron") >= 0,
    O = "MacIntel" === w,
    !C && O && h.touch && (1024 === E && 1366 === T || 834 === E && 1194 === T || 834 === E && 1112 === T || 768 === E && 1024 === T) && (C = y.match(/(Version)\/([\d.]+)/),
    O = !1),
    x.ie = z,
    x.edge = k,
    x.firefox = $,
    S && !L && (x.os = "android",
    x.osVersion = S[2],
    x.android = !0,
    x.androidChrome = y.toLowerCase().indexOf("chrome") >= 0),
    (C || P || M) && (x.os = "ios",
    x.ios = !0),
    P && !M && (x.osVersion = P[2].replace(/_/g, "."),
    x.iphone = !0),
    C && (x.osVersion = C[2].replace(/_/g, "."),
    x.ipad = !0),
    M && (x.osVersion = M[3] ? M[3].replace(/_/g, ".") : null,
    x.ipod = !0),
    x.ios && x.osVersion && y.indexOf("Version/") >= 0 && "10" === x.osVersion.split(".")[0] && (x.osVersion = y.toLowerCase().split("version/")[1].split(" ")[0]),
    x.webView = !(!(P || C || M) || !y.match(/.*AppleWebKit(?!.*Safari)/i) && !a.navigator.standalone) || a.matchMedia && a.matchMedia("(display-mode: standalone)").matches,
    x.webview = x.webView,
    x.standalone = x.webView,
    x.desktop = !(x.ios || x.android) || I,
    x.desktop && (x.electron = I,
    x.macos = O,
    x.windows = L,
    x.macos && (x.os = "macos"),
    x.windows && (x.os = "windows")),
    x.pixelRatio = a.devicePixelRatio || 1,
    x);
    function G(e) {
        var t = this.touchEventsData
          , s = this.params
          , r = this.touches;
        if (!this.animating || !s.preventInteractionOnTransition) {
            var o = e;
            o.originalEvent && (o = o.originalEvent);
            var l = n(o.target);
            if (("wrapper" !== s.touchEventsTarget || l.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === o.type,
            (t.isTouchEvent || !("which"in o) || 3 !== o.which) && !(!t.isTouchEvent && "button"in o && o.button > 0 || t.isTouched && t.isMoved)))
                if (s.noSwiping && l.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0])
                    this.allowClick = !0;
                else if (!s.swipeHandler || l.closest(s.swipeHandler)[0]) {
                    r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                    var h = r.currentX
                      , p = r.currentY
                      , c = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection
                      , u = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                    if (!c || !(h <= u || h >= a.screen.width - u)) {
                        if (d.extend(t, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }),
                        r.startX = h,
                        r.startY = p,
                        t.touchStartTime = d.now(),
                        this.allowClick = !0,
                        this.updateSize(),
                        this.swipeDirection = void 0,
                        s.threshold > 0 && (t.allowThresholdMove = !1),
                        "touchstart" !== o.type) {
                            var v = !0;
                            l.is(t.formElements) && (v = !1),
                            i.activeElement && n(i.activeElement).is(t.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
                            var f = v && this.allowTouchMove && s.touchStartPreventDefault;
                            (s.touchStartForcePreventDefault || f) && o.preventDefault()
                        }
                        this.emit("touchStart", o)
                    }
                }
        }
    }
    function H(e) {
        var t = this.touchEventsData
          , s = this.params
          , a = this.touches
          , r = this.rtlTranslate
          , o = e;
        if (o.originalEvent && (o = o.originalEvent),
        t.isTouched) {
            if (!t.isTouchEvent || "touchmove" === o.type) {
                var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0])
                  , h = "touchmove" === o.type ? l.pageX : o.pageX
                  , p = "touchmove" === o.type ? l.pageY : o.pageY;
                if (o.preventedByNestedSwiper)
                    return a.startX = h,
                    void (a.startY = p);
                if (!this.allowTouchMove)
                    return this.allowClick = !1,
                    void (t.isTouched && (d.extend(a, {
                        startX: h,
                        startY: p,
                        currentX: h,
                        currentY: p
                    }),
                    t.touchStartTime = d.now()));
                if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (this.isVertical()) {
                        if (p < a.startY && this.translate <= this.maxTranslate() || p > a.startY && this.translate >= this.minTranslate())
                            return t.isTouched = !1,
                            void (t.isMoved = !1)
                    } else if (h < a.startX && this.translate <= this.maxTranslate() || h > a.startX && this.translate >= this.minTranslate())
                        return;
                if (t.isTouchEvent && i.activeElement && o.target === i.activeElement && n(o.target).is(t.formElements))
                    return t.isMoved = !0,
                    void (this.allowClick = !1);
                if (t.allowTouchCallbacks && this.emit("touchMove", o),
                !(o.targetTouches && o.targetTouches.length > 1)) {
                    a.currentX = h,
                    a.currentY = p;
                    var c = a.currentX - a.startX
                      , u = a.currentY - a.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === t.isScrolling)
                            this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? t.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI,
                            t.isScrolling = this.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
                        if (t.isScrolling && this.emit("touchMoveOpposite", o),
                        void 0 === t.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (t.startMoving = !0)),
                        t.isScrolling)
                            t.isTouched = !1;
                        else if (t.startMoving) {
                            this.allowClick = !1,
                            !s.cssMode && o.cancelable && o.preventDefault(),
                            s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                            t.isMoved || (s.loop && this.loopFix(),
                            t.startTranslate = this.getTranslate(),
                            this.setTransition(0),
                            this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                            t.allowMomentumBounce = !1,
                            !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0),
                            this.emit("sliderFirstMove", o)),
                            this.emit("sliderMove", o),
                            t.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            a.diff = f,
                            f *= s.touchRatio,
                            r && (f = -f),
                            this.swipeDirection = f > 0 ? "prev" : "next",
                            t.currentTranslate = f + t.startTranslate;
                            var m = !0
                              , g = s.resistanceRatio;
                            if (s.touchReleaseOnEdges && (g = 0),
                            f > 0 && t.currentTranslate > this.minTranslate() ? (m = !1,
                            s.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + f, g))) : f < 0 && t.currentTranslate < this.maxTranslate() && (m = !1,
                            s.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - f, g))),
                            m && (o.preventedByNestedSwiper = !0),
                            !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate),
                            !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate),
                            s.threshold > 0) {
                                if (!(Math.abs(f) > s.threshold || t.allowThresholdMove))
                                    return void (t.currentTranslate = t.startTranslate);
                                if (!t.allowThresholdMove)
                                    return t.allowThresholdMove = !0,
                                    a.startX = a.currentX,
                                    a.startY = a.currentY,
                                    t.currentTranslate = t.startTranslate,
                                    void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                            }
                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(),
                            this.updateSlidesClasses()),
                            s.freeMode && (0 === t.velocities.length && t.velocities.push({
                                position: a[this.isHorizontal() ? "startX" : "startY"],
                                time: t.touchStartTime
                            }),
                            t.velocities.push({
                                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                                time: d.now()
                            })),
                            this.updateProgress(t.currentTranslate),
                            this.setTranslate(t.currentTranslate))
                        }
                    }
                }
            }
        } else
            t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o)
    }
    function B(e) {
        var t = this
          , i = t.touchEventsData
          , s = t.params
          , a = t.touches
          , r = t.rtlTranslate
          , n = t.$wrapperEl
          , o = t.slidesGrid
          , l = t.snapGrid
          , h = e;
        if (h.originalEvent && (h = h.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", h),
        i.allowTouchCallbacks = !1,
        !i.isTouched)
            return i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            i.isMoved = !1,
            void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = d.now(), u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h),
        t.emit("tap click", h),
        u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)),
        i.lastClickTime = d.now(),
        d.nextTick((function() {
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
            return i.isTouched = !1,
            i.isMoved = !1,
            void (i.startMoving = !1);
        if (i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1,
        p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate,
        !s.cssMode)
            if (s.freeMode) {
                if (p < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                    return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop()
                          , f = i.velocities.pop()
                          , m = v.position - f.position
                          , g = v.time - f.time;
                        t.velocity = m / g,
                        t.velocity /= 2,
                        Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                        (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
                    } else
                        t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio,
                    i.velocities.length = 0;
                    var b = 1e3 * s.freeModeMomentumRatio
                      , w = t.velocity * b
                      , y = t.translate + w;
                    r && (y = -y);
                    var x, E, T = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate())
                        s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                        x = t.maxTranslate(),
                        T = !0,
                        i.allowMomentumBounce = !0) : y = t.maxTranslate(),
                        s.loop && s.centeredSlides && (E = !0);
                    else if (y > t.minTranslate())
                        s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                        x = t.minTranslate(),
                        T = !0,
                        i.allowMomentumBounce = !0) : y = t.minTranslate(),
                        s.loop && s.centeredSlides && (E = !0);
                    else if (s.freeModeSticky) {
                        for (var C, M = 0; M < l.length; M += 1)
                            if (l[M] > -y) {
                                C = M;
                                break
                            }
                        y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                    }
                    if (E && t.once("transitionEnd", (function() {
                        t.loopFix()
                    }
                    )),
                    0 !== t.velocity) {
                        if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity),
                        s.freeModeSticky) {
                            var P = Math.abs((r ? -y : y) - t.translate)
                              , z = t.slidesSizesGrid[t.activeIndex];
                            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky)
                        return void t.slideToClosest();
                    s.freeModeMomentumBounce && T ? (t.updateProgress(x),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating = !0,
                    n.transitionEnd((function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                        t.setTransition(s.speed),
                        setTimeout((function() {
                            t.setTranslate(x),
                            n.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            }
                            ))
                        }
                        ), 0))
                    }
                    ))) : t.velocity ? (t.updateProgress(y),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating || (t.animating = !0,
                    n.transitionEnd((function() {
                        t && !t.destroyed && t.transitionEnd()
                    }
                    )))) : t.updateProgress(y),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                } else if (s.freeModeSticky)
                    return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses())
            } else {
                for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== o[L + I] ? p >= o[L] && p < o[L + I] && (k = L,
                    $ = o[L + I] - o[L]) : p >= o[L] && (k = L,
                    $ = o[o.length - 1] - o[o.length - 2])
                }
                var O = (p - o[k]) / $
                  , D = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes)
                        return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (O >= s.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k)),
                    "prev" === t.swipeDirection && (O > 1 - s.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k))
                } else {
                    if (!s.shortSwipes)
                        return void t.slideTo(t.activeIndex);
                    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + D) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + D),
                    "prev" === t.swipeDirection && t.slideTo(k))
                }
            }
    }
    function N() {
        var e = this.params
          , t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext
              , s = this.allowSlidePrev
              , a = this.snapGrid;
            this.allowSlideNext = !0,
            this.allowSlidePrev = !0,
            this.updateSize(),
            this.updateSlides(),
            this.updateSlidesClasses(),
            ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
            this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
            this.allowSlidePrev = s,
            this.allowSlideNext = i,
            this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }
    function X(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(),
        this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
        e.stopImmediatePropagation()))
    }
    function V() {
        var e = this.wrapperEl
          , t = this.rtlTranslate;
        this.previousTranslate = this.translate,
        this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop,
        -0 === this.translate && (this.translate = 0),
        this.updateActiveIndex(),
        this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate),
        this.emit("setTranslate", this.translate, !1)
    }
    var Y = !1;
    function F() {}
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , R = {
        update: u,
        translate: v,
        transition: f,
        slide: m,
        loop: g,
        grabCursor: b,
        manipulation: D,
        events: {
            attachEvents: function() {
                var e = this.params
                  , t = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl;
                this.onTouchStart = G.bind(this),
                this.onTouchMove = H.bind(this),
                this.onTouchEnd = B.bind(this),
                e.cssMode && (this.onScroll = V.bind(this)),
                this.onClick = X.bind(this);
                var r = !!e.nested;
                if (!h.touch && h.pointerEvents)
                    s.addEventListener(t.start, this.onTouchStart, !1),
                    i.addEventListener(t.move, this.onTouchMove, r),
                    i.addEventListener(t.end, this.onTouchEnd, !1);
                else {
                    if (h.touch) {
                        var n = !("touchstart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.addEventListener(t.start, this.onTouchStart, n),
                        s.addEventListener(t.move, this.onTouchMove, h.passiveListener ? {
                            passive: !1,
                            capture: r
                        } : r),
                        s.addEventListener(t.end, this.onTouchEnd, n),
                        t.cancel && s.addEventListener(t.cancel, this.onTouchEnd, n),
                        Y || (i.addEventListener("touchstart", F),
                        Y = !0)
                    }
                    (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1),
                    i.addEventListener("mousemove", this.onTouchMove, r),
                    i.addEventListener("mouseup", this.onTouchEnd, !1))
                }
                (e.preventClicks || e.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0),
                e.cssMode && a.addEventListener("scroll", this.onScroll),
                e.updateOnWindowResize ? this.on(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : this.on("observerUpdate", N, !0)
            },
            detachEvents: function() {
                var e = this.params
                  , t = this.touchEvents
                  , s = this.el
                  , a = this.wrapperEl
                  , r = !!e.nested;
                if (!h.touch && h.pointerEvents)
                    s.removeEventListener(t.start, this.onTouchStart, !1),
                    i.removeEventListener(t.move, this.onTouchMove, r),
                    i.removeEventListener(t.end, this.onTouchEnd, !1);
                else {
                    if (h.touch) {
                        var n = !("onTouchStart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s.removeEventListener(t.start, this.onTouchStart, n),
                        s.removeEventListener(t.move, this.onTouchMove, r),
                        s.removeEventListener(t.end, this.onTouchEnd, n),
                        t.cancel && s.removeEventListener(t.cancel, this.onTouchEnd, n)
                    }
                    (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1),
                    i.removeEventListener("mousemove", this.onTouchMove, r),
                    i.removeEventListener("mouseup", this.onTouchEnd, !1))
                }
                (e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0),
                e.cssMode && a.removeEventListener("scroll", this.onScroll),
                this.off(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this.activeIndex
                  , t = this.initialized
                  , i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params
                  , a = this.$el
                  , r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = this.getBreakpoint(r);
                    if (n && this.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }
                        ));
                        var l = o || this.originalParams
                          , h = s.slidesPerColumn > 1
                          , p = l.slidesPerColumn > 1;
                        h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"),
                        "column" === l.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                        var c = l.direction && l.direction !== s.direction
                          , u = s.loop && (l.slidesPerView !== s.slidesPerView || c);
                        c && t && this.changeDirection(),
                        d.extend(this.params, l),
                        d.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }),
                        this.currentBreakpoint = n,
                        u && t && (this.loopDestroy(),
                        this.loopCreate(),
                        this.updateSlides(),
                        this.slideTo(e - i + this.loopedSlides, 0, !1)),
                        this.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1
                      , i = Object.keys(e).map((function(e) {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            var t = parseFloat(e.substr(1));
                            return {
                                value: a.innerHeight * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    ));
                    i.sort((function(e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    }
                    ));
                    for (var s = 0; s < i.length; s += 1) {
                        var r = i[s]
                          , n = r.point;
                        r.value <= a.innerWidth && (t = n)
                    }
                    return t || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this.params
                  , t = this.isLocked
                  , i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length,
                this.allowSlideNext = !this.isLocked,
                this.allowSlidePrev = !this.isLocked,
                t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                t && t !== this.isLocked && (this.isEnd = !1,
                this.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames
                  , t = this.params
                  , i = this.rtl
                  , s = this.$el
                  , a = [];
                a.push("initialized"),
                a.push(t.direction),
                t.freeMode && a.push("free-mode"),
                t.autoHeight && a.push("autoheight"),
                i && a.push("rtl"),
                t.slidesPerColumn > 1 && (a.push("multirow"),
                "column" === t.slidesPerColumnFill && a.push("multirow-column")),
                A.android && a.push("android"),
                A.ios && a.push("ios"),
                t.cssMode && a.push("css-mode"),
                a.forEach((function(i) {
                    e.push(t.containerModifierClass + i)
                }
                )),
                s.addClass(e.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, i, s, r, o) {
                var l;
                function d() {
                    o && o()
                }
                n(e).parent("picture")[0] || e.complete && r ? d() : t ? ((l = new a.Image).onload = d,
                l.onerror = d,
                s && (l.sizes = s),
                i && (l.srcset = i),
                t && (l.src = t)) : d()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , q = {}
      , j = function(e) {
        function t() {
            for (var i, s, a, r = [], o = arguments.length; o--; )
                r[o] = arguments[o];
            1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (s = (i = r)[0],
            a = i[1]),
            a || (a = {}),
            a = d.extend({}, a),
            s && !a.el && (a.el = s),
            e.call(this, a),
            Object.keys(R).forEach((function(e) {
                Object.keys(R[e]).forEach((function(i) {
                    t.prototype[i] || (t.prototype[i] = R[e][i])
                }
                ))
            }
            ));
            var l = this;
            void 0 === l.modules && (l.modules = {}),
            Object.keys(l.modules).forEach((function(e) {
                var t = l.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0]
                      , s = t.params[i];
                    if ("object" != typeof s || null === s)
                        return;
                    if (!(i in a) || !("enabled"in s))
                        return;
                    !0 === a[i] && (a[i] = {
                        enabled: !0
                    }),
                    "object" != typeof a[i] || "enabled"in a[i] || (a[i].enabled = !0),
                    a[i] || (a[i] = {
                        enabled: !1
                    })
                }
            }
            ));
            var p = d.extend({}, W);
            l.useModulesParams(p),
            l.params = d.extend({}, p, q, a),
            l.originalParams = d.extend({}, l.params),
            l.passedParams = d.extend({}, a),
            l.$ = n;
            var c = n(l.params.el);
            if (s = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each((function(e, i) {
                        var s = d.extend({}, a, {
                            el: i
                        });
                        u.push(new t(s))
                    }
                    )),
                    u
                }
                var v, f, m;
                return s.swiper = l,
                c.data("swiper", l),
                s && s.shadowRoot && s.shadowRoot.querySelector ? (v = n(s.shadowRoot.querySelector("." + l.params.wrapperClass))).children = function(e) {
                    return c.children(e)
                }
                : v = c.children("." + l.params.wrapperClass),
                d.extend(l, {
                    $el: c,
                    el: s,
                    $wrapperEl: v,
                    wrapperEl: v[0],
                    classNames: [],
                    slides: n(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === l.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === l.params.direction
                    },
                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === v.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"],
                    m = ["mousedown", "mousemove", "mouseup"],
                    h.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]),
                    l.touchEventsTouch = {
                        start: f[0],
                        move: f[1],
                        end: f[2],
                        cancel: f[3]
                    },
                    l.touchEventsDesktop = {
                        start: m[0],
                        move: m[1],
                        end: m[2]
                    },
                    h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: d.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                l.useModules(),
                l.params.init && l.init(),
                l
            }
        }
        e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function() {
            var e = this.params
              , t = this.slides
              , i = this.slidesGrid
              , s = this.size
              , a = this.activeIndex
              , r = 1;
            if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
                    t[l] && !n && (r += 1,
                    (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1)
                    t[d] && !n && (r += 1,
                    (o += t[d].swiperSlideSize) > s && (n = !0))
            } else
                for (var h = a + 1; h < t.length; h += 1)
                    i[h] - i[a] < s && (r += 1);
            return r
        }
        ,
        t.prototype.update = function() {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid
                  , i = e.params;
                i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode ? (s(),
                e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
        }
        ,
        t.prototype.changeDirection = function(e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e),
            this.params.direction = e,
            this.slides.each((function(t, i) {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            }
            )),
            this.emit("changeDirection"),
            t && this.update()),
            this
        }
        ,
        t.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
            this.attachEvents(),
            this.initialized = !0,
            this.emit("init"))
        }
        ,
        t.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , a = i.$el
              , r = i.$wrapperEl
              , n = i.slides;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t && (i.removeClasses(),
            a.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((function(e) {
                i.off(e)
            }
            )),
            !1 !== e && (i.$el[0].swiper = null,
            i.$el.data("swiper", null),
            d.deleteProps(i)),
            i.destroyed = !0),
            null
        }
        ,
        t.extendDefaults = function(e) {
            d.extend(q, e)
        }
        ,
        i.extendedDefaults.get = function() {
            return q
        }
        ,
        i.defaults.get = function() {
            return W
        }
        ,
        i.Class.get = function() {
            return e
        }
        ,
        i.$.get = function() {
            return n
        }
        ,
        Object.defineProperties(t, i),
        t
    }(p)
      , K = {
        name: "device",
        proto: {
            device: A
        },
        static: {
            device: A
        }
    }
      , U = {
        name: "support",
        proto: {
            support: h
        },
        static: {
            support: h
        }
    }
      , _ = {
        isEdge: !!a.navigator.userAgent.match(/Edge/g),
        isSafari: function() {
            var e = a.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
    }
      , Z = {
        name: "browser",
        proto: {
            browser: _
        },
        static: {
            browser: _
        }
    }
      , Q = {
        name: "resize",
        create: function() {
            var e = this;
            d.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                a.addEventListener("resize", this.resize.resizeHandler),
                a.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                a.removeEventListener("resize", this.resize.resizeHandler),
                a.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , J = {
        func: a.MutationObserver || a.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var i = this
              , s = new (0,
            J.func)((function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        i.emit("observerUpdate", e[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                } else
                    i.emit("observerUpdate", e[0])
            }
            ));
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.observer.observers.push(s)
        },
        init: function() {
            if (h.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                        this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: this.params.observeSlideChildren
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach((function(e) {
                e.disconnect()
            }
            )),
            this.observer.observers = []
        }
    }
      , ee = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            d.extend(this, {
                observer: {
                    init: J.init.bind(this),
                    attach: J.attach.bind(this),
                    destroy: J.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , te = {
        update: function(e) {
            var t = this
              , i = t.params
              , s = i.slidesPerView
              , a = i.slidesPerGroup
              , r = i.centeredSlides
              , n = t.params.virtual
              , o = n.addSlidesBefore
              , l = n.addSlidesAfter
              , h = t.virtual
              , p = h.from
              , c = h.to
              , u = h.slides
              , v = h.slidesGrid
              , f = h.renderSlide
              , m = h.offset;
            t.updateActiveIndex();
            var g, b, w, y = t.activeIndex || 0;
            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            r ? (b = Math.floor(s / 2) + a + o,
            w = Math.floor(s / 2) + a + l) : (b = s + (a - 1) + o,
            w = a + l);
            var x = Math.max((y || 0) - w, 0)
              , E = Math.min((y || 0) + b, u.length - 1)
              , T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
            function S() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (d.extend(t.virtual, {
                from: x,
                to: E,
                offset: T,
                slidesGrid: t.slidesGrid
            }),
            p === x && c === E && !e)
                return t.slidesGrid !== v && T !== m && t.slides.css(g, T + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: x,
                    to: E,
                    slides: function() {
                        for (var e = [], t = x; t <= E; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                void S();
            var C = []
              , M = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var P = p; P <= c; P += 1)
                    (P < x || P > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
            for (var z = 0; z < u.length; z += 1)
                z >= x && z <= E && (void 0 === c || e ? M.push(z) : (z > c && M.push(z),
                z < p && C.push(z)));
            M.forEach((function(e) {
                t.$wrapperEl.append(f(u[e], e))
            }
            )),
            C.sort((function(e, t) {
                return t - e
            }
            )).forEach((function(e) {
                t.$wrapperEl.prepend(f(u[e], e))
            }
            )),
            t.$wrapperEl.children(".swiper-slide").css(g, T + "px"),
            S()
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
            var s = i.renderSlide ? n(i.renderSlide.call(this, e, t)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
            i.cache && (this.virtual.cache[t] = s),
            s
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this.activeIndex
              , i = t + 1
              , s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1)
                    e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length,
                s = e.length
            } else
                this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache
                  , n = {};
                Object.keys(r).forEach((function(e) {
                    var t = r[e]
                      , i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                    n[parseInt(e, 10) + s] = t
                }
                )),
                this.virtual.cache = n
            }
            this.virtual.update(!0),
            this.slideTo(i, 0)
        },
        removeSlide: function(e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; i >= 0; i -= 1)
                        this.virtual.slides.splice(e[i], 1),
                        this.params.virtual.cache && delete this.virtual.cache[e[i]],
                        e[i] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    this.virtual.slides.splice(e, 1),
                    this.params.virtual.cache && delete this.virtual.cache[e],
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                this.virtual.update(!0),
                this.slideTo(t, 0)
            }
        },
        removeAllSlides: function() {
            this.virtual.slides = [],
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0)
        }
    }
      , ie = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            d.extend(this, {
                virtual: {
                    update: te.update.bind(this),
                    appendSlide: te.appendSlide.bind(this),
                    prependSlide: te.prependSlide.bind(this),
                    removeSlide: te.removeSlide.bind(this),
                    removeAllSlides: te.removeAllSlides.bind(this),
                    renderSlide: te.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e),
                    this.params.initialSlide || this.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , se = {
        handle: function(e) {
            var t = this.rtlTranslate
              , s = e;
            s.originalEvent && (s = s.originalEvent);
            var r = s.keyCode || s.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r))
                return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r))
                return !1;
            if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                    var n = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                        return;
                    var o = a.innerWidth
                      , l = a.innerHeight
                      , d = this.$el.offset();
                    t && (d.left -= this.$el[0].scrollLeft);
                    for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
                        var c = h[p];
                        c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                    }
                    if (!n)
                        return
                }
                this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                (34 !== r && 39 !== r || t) && (33 !== r && 37 !== r || !t) || this.slideNext(),
                (33 !== r && 37 !== r || t) && (34 !== r && 39 !== r || !t) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1),
                34 !== r && 40 !== r || this.slideNext(),
                33 !== r && 38 !== r || this.slidePrev()),
                this.emit("keyPress", r)
            }
        },
        enable: function() {
            this.keyboard.enabled || (n(i).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (n(i).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , ae = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            d.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: se.enable.bind(this),
                    disable: se.disable.bind(this),
                    handle: se.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var re = {
        lastScrollTime: d.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return a.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel"in i;
                if (!e) {
                    var t = i.createElement("div");
                    t.setAttribute("onwheel", "return;"),
                    e = "function" == typeof t.onwheel
                }
                return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")),
                e
            }() ? "wheel" : "mousewheel"
        },
        normalize: function(e) {
            var t = 0
              , i = 0
              , s = 0
              , a = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            s = 10 * t,
            a = 10 * i,
            "deltaY"in e && (a = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            e.shiftKey && !s && (s = a,
            a = 0),
            (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
            a *= 40) : (s *= 800,
            a *= 800)),
            s && !t && (t = s < 1 ? -1 : 1),
            a && !i && (i = a < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , i = this
              , s = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            var a = i.$el;
            if ("container" !== i.params.mousewheel.eventsTarged && (a = n(i.params.mousewheel.eventsTarged)),
            !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0
              , o = i.rtlTranslate ? -1 : 1
              , l = re.normalize(t);
            if (s.forceToAxis)
                if (i.isHorizontal()) {
                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                        return !0;
                    r = l.pixelX * o
                } else {
                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                        return !0;
                    r = l.pixelY
                }
            else
                r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
            if (0 === r)
                return !0;
            if (s.invert && (r = -r),
            i.params.freeMode) {
                var h = {
                    time: d.now(),
                    delta: Math.abs(r),
                    direction: Math.sign(r)
                }
                  , p = i.mousewheel.lastEventBeforeSnap
                  , c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                if (!c) {
                    i.mousewheel.lastEventBeforeSnap = void 0,
                    i.params.loop && i.loopFix();
                    var u = i.getTranslate() + r * s.sensitivity
                      , v = i.isBeginning
                      , f = i.isEnd;
                    if (u >= i.minTranslate() && (u = i.minTranslate()),
                    u <= i.maxTranslate() && (u = i.maxTranslate()),
                    i.setTransition(0),
                    i.setTranslate(u),
                    i.updateProgress(),
                    i.updateActiveIndex(),
                    i.updateSlidesClasses(),
                    (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(),
                    i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout),
                        i.mousewheel.timeout = void 0;
                        var m = i.mousewheel.recentWheelEvents;
                        m.length >= 15 && m.shift();
                        var g = m.length ? m[m.length - 1] : void 0
                          , b = m[0];
                        if (m.push(h),
                        g && (h.delta > g.delta || h.direction !== g.direction))
                            m.splice(0);
                        else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                            var w = r > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = h,
                            m.splice(0),
                            i.mousewheel.timeout = d.nextTick((function() {
                                i.slideToClosest(i.params.speed, !0, void 0, w)
                            }
                            ), 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = d.nextTick((function() {
                            i.mousewheel.lastEventBeforeSnap = h,
                            m.splice(0),
                            i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (c || i.emit("scroll", t),
                    i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                    u === i.minTranslate() || u === i.maxTranslate())
                        return !0
                }
            } else {
                var y = {
                    time: d.now(),
                    delta: Math.abs(r),
                    direction: Math.sign(r),
                    raw: e
                }
                  , x = i.mousewheel.recentWheelEvents;
                x.length >= 2 && x.shift();
                var E = x.length ? x[x.length - 1] : void 0;
                if (x.push(y),
                E ? (y.direction !== E.direction || y.delta > E.delta || y.time > E.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y),
                i.mousewheel.releaseScroll(y))
                    return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        animateSlider: function(e) {
            return e.delta >= 6 && d.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(),
            this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(),
            this.emit("scroll", e.raw)),
            this.mousewheel.lastScrollTime = (new a.Date).getTime(),
            !1)
        },
        releaseScroll: function(e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges)
                    return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
                return !0;
            return !1
        },
        enable: function() {
            var e = re.event();
            if (this.params.cssMode)
                return this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)),
            t.on("mouseenter", this.mousewheel.handleMouseEnter),
            t.on("mouseleave", this.mousewheel.handleMouseLeave),
            t.on(e, this.mousewheel.handle),
            this.mousewheel.enabled = !0,
            !0
        },
        disable: function() {
            var e = re.event();
            if (this.params.cssMode)
                return this.wrapperEl.addEventListener(e, this.mousewheel.handle),
                !0;
            if (!e)
                return !1;
            if (!this.mousewheel.enabled)
                return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)),
            t.off(e, this.mousewheel.handle),
            this.mousewheel.enabled = !1,
            !0
        }
    }
      , ne = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation
                  , i = t.$nextEl
                  , s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
                s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = n(i.nextEl),
            this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
            i.prevEl && (t = n(i.prevEl),
            this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", this.navigation.onNextClick),
            t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
            d.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this.navigation
              , t = e.$nextEl
              , i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            i && i.length && (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass))
        }
    }
      , oe = {
        update: function() {
            var e = this.rtl
              , t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, a = this.pagination.$el, r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides),
                i > r - 1 && (i -= r),
                i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0,
                "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                    t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex,
                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                    o = i - this.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2),
                    h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"),
                    a.length > 1)
                        h.each((function(e, s) {
                            var a = n(s)
                              , r = a.index();
                            r === i && a.addClass(t.bulletActiveClass),
                            t.dynamicBullets && (r >= o && r <= l && a.addClass(t.bulletActiveClass + "-main"),
                            r === o && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                            r === l && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        }
                        ));
                    else {
                        var p = h.eq(i)
                          , c = p.index();
                        if (p.addClass(t.bulletActiveClass),
                        t.dynamicBullets) {
                            for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1)
                                h.eq(f).addClass(t.bulletActiveClass + "-main");
                            if (this.params.loop)
                                if (c >= h.length - t.dynamicMainBullets) {
                                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                                        h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                    h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                } else
                                    u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                    v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                            else
                                u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                                v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                    }
                    if (t.dynamicBullets) {
                        var g = Math.min(h.length, t.dynamicMainBullets + 4)
                          , b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize
                          , w = e ? "right" : "left";
                        h.css(this.isHorizontal() ? w : "top", b + "px")
                    }
                }
                if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)),
                a.find("." + t.totalClass).text(t.formatFractionTotal(r))),
                "progressbar" === t.type) {
                    var y;
                    y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var x = (i + 1) / r
                      , E = 1
                      , T = 1;
                    "horizontal" === y ? E = x : T = x,
                    a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + E + ") scaleY(" + T + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)),
                this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]),
                a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length
                  , i = this.pagination.$el
                  , s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)
                        e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s),
                    this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        },
        init: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el) {
                var i = n(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                    t.preventDefault();
                    var i = n(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides),
                    e.slideTo(i)
                }
                )),
                d.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                }))
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }
      , le = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.rtlTranslate
                  , i = this.progress
                  , s = e.dragSize
                  , a = e.trackSize
                  , r = e.$dragEl
                  , n = e.$el
                  , o = this.params.scrollbar
                  , l = s
                  , d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d,
                d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d,
                d = 0) : d + s > a && (l = a - d),
                this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"),
                r[0].style.height = l + "px"),
                o.hide && (clearTimeout(this.scrollbar.timeout),
                n[0].style.opacity = 1,
                this.scrollbar.timeout = setTimeout((function() {
                    n[0].style.opacity = 0,
                    n.transition(400)
                }
                ), 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = e.$dragEl
                  , i = e.$el;
                t[0].style.width = "",
                t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10),
                this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px",
                i[0].style.display = r >= 1 ? "none" : "",
                this.params.scrollbar.hide && (i[0].style.opacity = 0),
                d.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }),
                e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize, o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r),
            t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el
              , r = i.$dragEl;
            this.scrollbar.isTouched = !0,
            this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            r.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            a.transition(0),
            t.hide && a.css("opacity", 1),
            this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , i = this.$wrapperEl
              , s = t.$el
              , a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            a.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
            this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""),
            s.transition("")),
            t.hide && (clearTimeout(this.scrollbar.dragTimeout),
            this.scrollbar.dragTimeout = d.nextTick((function() {
                a.css("opacity", 0),
                a.transition(400)
            }
            ), 1e3)),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = e.$el[0]
                  , n = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.touch ? (r.addEventListener(t.start, this.scrollbar.onDragStart, n),
                r.addEventListener(t.move, this.scrollbar.onDragMove, n),
                r.addEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
                i.addEventListener(s.move, this.scrollbar.onDragMove, n),
                i.addEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.touchEventsTouch
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = e.$el[0]
                  , n = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!h.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.touch ? (r.removeEventListener(t.start, this.scrollbar.onDragStart, n),
                r.removeEventListener(t.move, this.scrollbar.onDragMove, n),
                r.removeEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
                i.removeEventListener(s.move, this.scrollbar.onDragMove, n),
                i.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.$el
                  , i = this.params.scrollbar
                  , s = n(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                var a = s.find("." + this.params.scrollbar.dragClass);
                0 === a.length && (a = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                s.append(a)),
                d.extend(e, {
                    $el: s,
                    el: s[0],
                    $dragEl: a,
                    dragEl: a[0]
                }),
                i.draggable && e.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , de = {
        setTransform: function(e, t) {
            var i = this.rtl
              , s = n(e)
              , a = i ? -1 : 1
              , r = s.attr("data-swiper-parallax") || "0"
              , o = s.attr("data-swiper-parallax-x")
              , l = s.attr("data-swiper-parallax-y")
              , d = s.attr("data-swiper-parallax-scale")
              , h = s.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0",
            l = l || "0") : this.isHorizontal() ? (o = r,
            l = "0") : (l = r,
            o = "0"),
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * a + "%" : o * t * a + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px",
            null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                s[0].style.opacity = p
            }
            if (null == d)
                s.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var e = this
              , t = e.$el
              , i = e.slides
              , s = e.progress
              , a = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                e.parallax.setTransform(i, s)
            }
            )),
            i.each((function(t, i) {
                var r = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - s * (a.length - 1)),
                r = Math.min(Math.max(r, -1), 1),
                n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    e.parallax.setTransform(i, r)
                }
                ))
            }
            ))
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                var s = n(i)
                  , a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (a = 0),
                s.transition(a)
            }
            ))
        }
    }
      , he = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , s = e.targetTouches[1].pageX
              , a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        },
        onGestureStart: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1,
            !h.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                s.scaleStart = he.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = n(e.target).closest("." + this.params.slideClass),
            0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)),
            s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass),
            s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio,
            0 !== s.$imageWrapEl.length) ? (s.$imageEl && s.$imageEl.transition(0),
            this.zoom.isScaling = !0) : s.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!h.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                s.scaleMove = he.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = h.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale,
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!h.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !A.android)
                    return;
                i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio),
            s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            i.currentScale = i.scale,
            i.isScaling = !1,
            1 === i.scale && (s.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (A.android && e.cancelable && e.preventDefault(),
            s.isTouched = !0,
            s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image
              , a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                this.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var r = s.width * t.scale
                  , n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - n / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                    a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                    a.prevTime || (a.prevTime = Date.now()),
                    a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2,
                    a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                    a.prevPositionX = s.touchesCurrent.x,
                    a.prevPositionY = s.touchesCurrent.y,
                    a.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , i = e.image
              , s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                    return i.isTouched = !1,
                    void (i.isMoved = !1);
                i.isTouched = !1,
                i.isMoved = !1;
                var a = 300
                  , r = 300
                  , n = s.x * a
                  , o = i.currentX + n
                  , l = s.y * r
                  , d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o,
                i.currentY = d;
                var p = i.width * e.scale
                  , c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0),
                i.maxX = -i.minX,
                i.minY = Math.min(t.slideHeight / 2 - c / 2, 0),
                i.maxY = -i.minY,
                i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom, b = this.params.zoom, w = g.gesture, y = g.image;
            (w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : w.$slideEl = this.slides.eq(this.activeIndex),
            w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)),
            w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass),
            void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x,
            i = y.touchesStart.y),
            g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
            g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
            e ? (f = w.$slideEl[0].offsetWidth,
            m = w.$slideEl[0].offsetHeight,
            s = w.$slideEl.offset().left + f / 2 - t,
            a = w.$slideEl.offset().top + m / 2 - i,
            o = w.$imageEl[0].offsetWidth,
            l = w.$imageEl[0].offsetHeight,
            d = o * g.scale,
            h = l * g.scale,
            u = -(p = Math.min(f / 2 - d / 2, 0)),
            v = -(c = Math.min(m / 2 - h / 2, 0)),
            (r = s * g.scale) < p && (r = p),
            r > u && (r = u),
            (n = a * g.scale) < c && (n = c),
            n > v && (n = v)) : (r = 0,
            n = 0),
            w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
            w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        },
        out: function() {
            var e = this.zoom
              , t = this.params.zoom
              , i = e.gesture;
            i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1,
            e.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        enable: function() {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !h.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = "." + this.params.slideClass;
                h.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t),
                this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t),
                this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t),
                this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i),
                this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t),
                this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)),
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }
                  , i = !h.passiveListener || {
                    passive: !1,
                    capture: !0
                }
                  , s = "." + this.params.slideClass;
                h.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t),
                this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t),
                this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t),
                this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i),
                this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t),
                this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)),
                this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }
    }
      , pe = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this
              , s = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e)
                  , r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || (r = r.add(a[0])),
                0 !== r.length && r.each((function(e, r) {
                    var o = n(r);
                    o.addClass(s.loadingClass);
                    var l = o.attr("data-background")
                      , d = o.attr("data-src")
                      , h = o.attr("data-srcset")
                      , p = o.attr("data-sizes")
                      , c = o.parent("picture");
                    i.loadImage(o[0], d || l, h, p, !1, (function() {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'),
                            o.removeAttr("data-background")) : (h && (o.attr("srcset", h),
                            o.removeAttr("data-srcset")),
                            p && (o.attr("sizes", p),
                            o.removeAttr("data-sizes")),
                            c.length && c.children("source").each((function(e, t) {
                                var i = n(t);
                                i.attr("data-srcset") && (i.attr("srcset", i.attr("data-srcset")),
                                i.removeAttr("data-srcset"))
                            }
                            )),
                            d && (o.attr("src", d),
                            o.removeAttr("data-src"))),
                            o.addClass(s.loadedClass).removeClass(s.loadingClass),
                            a.find("." + s.preloaderClass).remove(),
                            i.params.loop && t) {
                                var e = a.attr("data-swiper-slide-index");
                                if (a.hasClass(i.params.slideDuplicateClass)) {
                                    var r = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(r.index(), !1)
                                } else {
                                    var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(u.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", a[0], o[0]),
                            i.params.autoHeight && i.updateAutoHeight()
                        }
                    }
                    )),
                    i.emit("lazyImageLoad", a[0], o[0])
                }
                ))
            }
        },
        load: function() {
            var e = this
              , t = e.$wrapperEl
              , i = e.params
              , s = e.slides
              , a = e.activeIndex
              , r = e.virtual && i.virtual.enabled
              , o = i.lazy
              , l = i.slidesPerView;
            function d(e) {
                if (r) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (s[e])
                    return !0;
                return !1
            }
            function h(e) {
                return r ? n(e).attr("data-swiper-slide-index") : n(e).index()
            }
            if ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
                t.children("." + i.slideVisibleClass).each((function(t, i) {
                    var s = r ? n(i).attr("data-swiper-slide-index") : n(i).index();
                    e.lazy.loadInSlide(s)
                }
                ));
            else if (l > 1)
                for (var p = a; p < a + l; p += 1)
                    d(p) && e.lazy.loadInSlide(p);
            else
                e.lazy.loadInSlide(a);
            if (o.loadPrevNext)
                if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    for (var c = o.loadPrevNextAmount, u = l, v = Math.min(a + u + Math.max(c, u), s.length), f = Math.max(a - Math.max(u, c), 0), m = a + l; m < v; m += 1)
                        d(m) && e.lazy.loadInSlide(m);
                    for (var g = f; g < a; g += 1)
                        d(g) && e.lazy.loadInSlide(g)
                } else {
                    var b = t.children("." + i.slideNextClass);
                    b.length > 0 && e.lazy.loadInSlide(h(b));
                    var w = t.children("." + i.slidePrevClass);
                    w.length > 0 && e.lazy.loadInSlide(h(w))
                }
        }
    }
      , ce = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, o = function(e, t) {
                for (s = -1,
                i = e.length; i - s > 1; )
                    e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = o(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new ce.LinearSpline(this.slidesGrid,e.slidesGrid) : new ce.LinearSpline(this.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control;
            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e),
                s = -a.controller.spline.interpolate(-t)),
                s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()),
                s = (t - a.minTranslate()) * i + e.minTranslate()),
                a.params.controller.inverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setTranslate(s, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof j && n(r[o]);
            else
                r instanceof j && t !== r && n(r)
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.controller.control;
            function r(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                t.params.autoHeight && d.nextTick((function() {
                    t.updateAutoHeight()
                }
                )),
                t.$wrapperEl.transitionEnd((function() {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }
                )))
            }
            if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1)
                    a[i] !== t && a[i]instanceof j && r(a[i]);
            else
                a instanceof j && t !== a && r(a)
        }
    }
      , ue = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        makeElNotFocusable: function(e) {
            return e.attr("tabIndex", "-1"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = n(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
                this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
                this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation
                  , t = e.$nextEl
                  , i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i),
                this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i),
                this.a11y.makeElFocusable(i))),
                t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t),
                this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t),
                this.a11y.makeElFocusable(t)))
            }
        },
        updatePagination: function() {
            var e = this
              , t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, s) {
                var a = n(s);
                e.a11y.makeElFocusable(a),
                e.a11y.addElRole(a, "button"),
                e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1))
            }
            ))
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
            t && (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && e.off("keydown", this.a11y.onEnterKey),
            t && t.off("keydown", this.a11y.onEnterKey),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }
      , ve = {
        init: function() {
            if (this.params.history) {
                if (!a.history || !a.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0,
                e.paths = ve.getPathValues(),
                (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || a.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || a.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = ve.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = a.location.pathname.slice(1).split("/").filter((function(e) {
                return "" !== e
            }
            ))
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var i = this.slides.eq(t)
                  , s = ve.slugify(i.attr("data-history"));
                a.location.pathname.includes(e) || (s = e + "/" + s);
                var r = a.history.state;
                r && r.value === s || (this.params.history.replaceState ? a.history.replaceState({
                    value: s
                }, null, s) : a.history.pushState({
                    value: s
                }, null, s))
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
            if (t)
                for (var s = 0, a = this.slides.length; s < a; s += 1) {
                    var r = this.slides.eq(s);
                    if (ve.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                        var n = r.index();
                        this.slideTo(n, e, i)
                    }
                }
            else
                this.slideTo(0, e, i)
        }
    }
      , fe = {
        onHashCange: function() {
            this.emit("hashChange");
            var e = i.location.hash.replace("#", "");
            if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                if (void 0 === t)
                    return;
                this.slideTo(t)
            }
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                if (this.params.hashNavigation.replaceState && a.history && a.history.replaceState)
                    a.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""),
                    this.emit("hashSet");
                else {
                    var e = this.slides.eq(this.activeIndex)
                      , t = e.attr("data-hash") || e.attr("data-history");
                    i.location.hash = t || "",
                    this.emit("hashSet")
                }
        },
        init: function() {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var e = i.location.hash.replace("#", "");
                if (e)
                    for (var t = 0, s = this.slides.length; t < s; t += 1) {
                        var r = this.slides.eq(t);
                        if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(this.params.slideDuplicateClass)) {
                            var o = r.index();
                            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                        }
                    }
                this.params.hashNavigation.watchState && n(a).on("hashchange", this.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && n(a).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , me = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = d.nextTick((function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")),
                e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }
            ), i)
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
            this.autoplay.timeout = void 0),
            this.autoplay.running = !1,
            this.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            this.autoplay.paused = !0,
            0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd),
            this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1,
            this.autoplay.run())))
        }
    }
      , ge = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t)
                  , s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s,
                s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.$wrapperEl;
            if (i.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd((function() {
                    if (!a && t && !t.destroyed) {
                        a = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            s.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , be = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, s = this.slides, a = this.width, r = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: a + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'),
            t.append(e)));
            for (var u = 0; u < s.length; u += 1) {
                var v = s.eq(u)
                  , f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f
                  , g = Math.floor(m / 360);
                o && (m = -m,
                g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1)
                  , w = 0
                  , y = 0
                  , x = 0;
                f % 4 == 0 ? (w = 4 * -g * l,
                x = 0) : (f - 1) % 4 == 0 ? (w = 0,
                x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l,
                x = l) : (f - 3) % 4 == 0 && (w = -l,
                x = 3 * l + 4 * l * g),
                o && (w = -w),
                h || (y = w,
                w = 0);
                var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b,
                o && (c = 90 * -f - 90 * b)),
                v.transform(E),
                d.slideShadows) {
                    var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'),
                    v.append(T)),
                    0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'),
                    v.append(S)),
                    T.length && (T[0].style.opacity = Math.max(-b, 0)),
                    S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (h)
                    e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90)
                      , M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2)
                      , P = d.shadowScale
                      , z = d.shadowScale / M
                      , k = d.shadowOffset;
                    e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (r / 2 + k) + "px, " + -r / 2 / z + "px) rotateX(-90deg)")
                }
            var $ = _.isSafari || _.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , we = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var s = e.eq(i)
                  , a = s[0].progress;
                this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                var r = -180 * a
                  , o = 0
                  , l = -s[0].swiperSlideOffset
                  , d = 0;
                if (this.isHorizontal() ? t && (r = -r) : (d = l,
                l = 0,
                o = -r,
                r = 0),
                s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length,
                this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                      , p = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    s.append(h)),
                    0 === p.length && (p = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    s.append(p)),
                    h.length && (h[0].style.opacity = Math.max(-a, 0)),
                    p.length && (p[0].style.opacity = Math.max(a, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.activeIndex
              , a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd((function() {
                    if (!r && t && !t.destroyed) {
                        r = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            a.trigger(e[i])
                    }
                }
                ))
            }
        }
    }
      , ye = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? r.rotate : -r.rotate, c = r.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u)
                  , m = a[u]
                  , g = (d - f[0].swiperSlideOffset - m / 2) / m * r.modifier
                  , b = o ? p * g : 0
                  , w = o ? 0 : p * g
                  , y = -c * Math.abs(g)
                  , x = r.stretch;
                "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(r.stretch) / 100 * m);
                var E = o ? 0 : x * g
                  , T = o ? x * g : 0;
                Math.abs(T) < .001 && (T = 0),
                Math.abs(E) < .001 && (E = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(w) < .001 && (w = 0);
                var S = "translate3d(" + T + "px," + E + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(S),
                f[0].style.zIndex = 1 - Math.abs(Math.round(g)),
                r.slideShadows) {
                    var C = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , M = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = n('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                    f.append(C)),
                    0 === M.length && (M = n('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                    f.append(M)),
                    C.length && (C[0].style.opacity = g > 0 ? g : 0),
                    M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (h.pointerEvents || h.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , xe = {
        init: function() {
            var e = this.params.thumbs
              , t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper,
            d.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            d.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : d.isObject(e.swiper) && (this.thumbs.swiper = new t(d.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            this.thumbs.swiperCreated = !0),
            this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex
                  , i = e.clickedSlide;
                if (!(i && n(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var s;
                    if (s = e.params.loop ? parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t,
                    this.params.loop) {
                        var a = this.activeIndex;
                        this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(),
                        this._clientLeft = this.$wrapperEl[0].clientLeft,
                        a = this.activeIndex);
                        var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index()
                          , o = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === r ? o : void 0 === o ? r : o - a < a - r ? o : r
                    }
                    this.slideTo(s)
                }
            }
        },
        update: function(e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView
                  , s = this.params.thumbs.autoScrollOffset
                  , a = s && !t.params.loop;
                if (this.realIndex !== t.realIndex || a) {
                    var r, n, o = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                        t._clientLeft = t.$wrapperEl[0].clientLeft,
                        o = t.activeIndex);
                        var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index()
                          , d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l,
                        n = this.activeIndex > this.previousIndex ? "next" : "prev"
                    } else
                        n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
                    a && (r += "next" === n ? s : -1 * s),
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1),
                    t.slideTo(r, e ? 0 : void 0))
                }
                var h = 1
                  , p = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView),
                this.params.thumbs.multipleActiveThumbs || (h = 1),
                h = Math.floor(h),
                t.slides.removeClass(p),
                t.params.loop || t.params.virtual && t.params.virtual.enabled)
                    for (var c = 0; c < h; c += 1)
                        t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(p);
                else
                    for (var u = 0; u < h; u += 1)
                        t.slides.eq(this.realIndex + u).addClass(p)
            }
        }
    }
      , Ee = [K, U, Z, Q, ee, ie, ae, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            d.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: re.enable.bind(this),
                    disable: re.disable.bind(this),
                    handle: re.handle.bind(this),
                    handleMouseEnter: re.handleMouseEnter.bind(this),
                    handleMouseLeave: re.handleMouseLeave.bind(this),
                    animateSlider: re.animateSlider.bind(this),
                    releaseScroll: re.releaseScroll.bind(this),
                    lastScrollTime: d.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            })
        },
        on: {
            init: function() {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(),
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.params.cssMode && this.mousewheel.enable(),
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            d.extend(this, {
                navigation: {
                    init: ne.init.bind(this),
                    update: ne.update.bind(this),
                    destroy: ne.destroy.bind(this),
                    onNextClick: ne.onNextClick.bind(this),
                    onPrevClick: ne.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t, i = this.navigation, s = i.$nextEl, a = i.$prevEl;
                !this.params.navigation.hideOnClick || n(e.target).is(a) || n(e.target).is(s) || (s ? t = s.hasClass(this.params.navigation.hiddenClass) : a && (t = a.hasClass(this.params.navigation.hiddenClass)),
                !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this),
                s && s.toggleClass(this.params.navigation.hiddenClass),
                a && a.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            d.extend(this, {
                pagination: {
                    init: oe.init.bind(this),
                    render: oe.render.bind(this),
                    update: oe.update.bind(this),
                    destroy: oe.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !n(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this),
                this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            d.extend(this, {
                scrollbar: {
                    init: le.init.bind(this),
                    destroy: le.destroy.bind(this),
                    updateSize: le.updateSize.bind(this),
                    setTranslate: le.setTranslate.bind(this),
                    setTransition: le.setTransition.bind(this),
                    enableDraggable: le.enableDraggable.bind(this),
                    disableDraggable: le.disableDraggable.bind(this),
                    setDragPosition: le.setDragPosition.bind(this),
                    getPointerPosition: le.getPointerPosition.bind(this),
                    onDragStart: le.onDragStart.bind(this),
                    onDragMove: le.onDragMove.bind(this),
                    onDragEnd: le.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            d.extend(this, {
                parallax: {
                    setTransform: de.setTransform.bind(this),
                    setTranslate: de.setTranslate.bind(this),
                    setTransition: de.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                t[i] = he[i].bind(e)
            }
            )),
            d.extend(e, {
                zoom: t
            });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function() {
                    return i
                },
                set: function(t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0
                          , a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    i = t
                }
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            },
            slideChange: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            d.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: pe.load.bind(this),
                    loadInSlide: pe.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            },
            slideChange: function() {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            d.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: ce.getInterpolateFunction.bind(this),
                    setTranslate: ce.setTranslate.bind(this),
                    setTransition: ce.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var e = this;
            d.extend(e, {
                a11y: {
                    liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(ue).forEach((function(t) {
                e.a11y[t] = ue[t].bind(e)
            }
            ))
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            d.extend(this, {
                history: {
                    init: ve.init.bind(this),
                    setHistory: ve.setHistory.bind(this),
                    setHistoryPopState: ve.setHistoryPopState.bind(this),
                    scrollToSlide: ve.scrollToSlide.bind(this),
                    destroy: ve.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            },
            slideChange: function() {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            d.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: fe.init.bind(this),
                    destroy: fe.destroy.bind(this),
                    setHash: fe.setHash.bind(this),
                    onHashCange: fe.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            },
            slideChange: function() {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var e = this;
            d.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: me.run.bind(e),
                    start: me.start.bind(e),
                    stop: me.stop.bind(e),
                    pause: me.pause.bind(e),
                    onVisibilityChange: function() {
                        "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                        "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(),
                        e.autoplay.paused = !1)
                    },
                    onTransitionEnd: function(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                        e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                        e.autoplay.paused = !1,
                        e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && (this.autoplay.start(),
                document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            touchEnd: function() {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop(),
                document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            d.extend(this, {
                fadeEffect: {
                    setTranslate: ge.setTranslate.bind(this),
                    setTransition: ge.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            d.extend(this, {
                cubeEffect: {
                    setTranslate: be.setTranslate.bind(this),
                    setTransition: be.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            d.extend(this, {
                flipEffect: {
                    setTranslate: we.setTranslate.bind(this),
                    setTransition: we.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            d.extend(this, {
                coverflowEffect: {
                    setTranslate: ye.setTranslate.bind(this),
                    setTransition: ye.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            d.extend(this, {
                thumbs: {
                    swiper: null,
                    init: xe.init.bind(this),
                    update: xe.update.bind(this),
                    onThumbClick: xe.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === j.use && (j.use = j.Class.use,
    j.installModule = j.Class.installModule),
    j.use(Ee),
    j
}
));
//# sourceMappingURL=swiper.min.js.map

function asset_wrap() {
    var i = 0;
    function asset(path) {
        i %= 4;
        i++;
        return '//s' + i + '.tool.lu/' + path;
    }
    return asset;
}
window.asset = asset_wrap();

function url(path) {
    rootUrl = window.rootUrl || '//' + window.location.hostname + '/';
    return rootUrl + path;
}

Util = {
    escapeRegExp: function(str) {
        return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    },

    trim: function(str, characters) {
        characters = Util.escapeRegExp(characters);
        return String(str).replace(new RegExp('\^' + characters + '+|' + characters + '+$','g'), '');
    },

    ltrim: function(str, characters) {
        characters = Util.escapeRegExp(characters);
        return String(str).replace(new RegExp('^' + characters + '+'), '');
    },

    rtrim: function(str, characters) {
        characters = Util.escapeRegExp(characters);
        return String(str).replace(new RegExp(characters + '+$'), '');
    },
};

window.ltrim = Util.ltrim;

if ($.facebox) {
    $.facebox.settings.closeImage = 'static/images/close.png';
    $.facebox.settings.loadingImage = 'static/images/1324173L7Hb5DHE3HZZdMN_32x32.gif';
}

function modal(html) {
    return $.facebox($('<div class="facebox-inner"/>').html(html));
}

$(function() {
    $('a[rel*=facebox]').facebox();

    if (window.console) {
        console.groupCollapsed('%c在线工具', 'color:#009a61; font-size: 28px; font-weight: 300');
        console.log('%c微信公众号：ZERO开发\n-------------\n微信:bqs219', 'color:#009a61');
        console.groupEnd();
    }

    // if (top.location != self.location) top.location=self.location;

    if (typeof Waves !== 'undefined') {
        // Waves.attach('button', ['waves-light']);
        Waves.attach('button');
        Waves.init();
    }

    /* nav scroll fixed */
    var nav = $('#nav');
    nav.scrollToFixed({
        zIndex: 99
    });
    // $('.aside .note').scrollToFixed({
    //     marginTop: nav.outerHeight() + 10,
    //     zIndex: 99
    // });

    var clipboard = new ClipboardJS('.copy-btn');
    clipboard.on('success', function(e) {
        modal('已经拷贝到剪切板了！');
        e.clearSelection();
    });

    $('#t_fixed .js-tip').tipsy({
        gravity: 'e',
        fade: true,
        fadeIn: 300,
        fadeOut: 300
    });

    //textarea中Tab键
    $('#code').keydown(function(e) {
        if (e.which === 9 && !e.ctrlKey && !e.altKey) {
            if (e.target.setSelectionRange) {
                var start = e.target.selectionStart
                  , end = e.target.selectionEnd;
                var top = e.target.scrollTop;

                var sel = e.target.value.substring(start, end);
                var contain_n = false;
                // [\r\n]+
                if (/\r?\n|\r/.test(sel)) {
                    contain_n = true;
                }

                if (start !== end && contain_n) {
                    start = e.target.value.lastIndexOf("\n", start) + 1;
                }

                if (e.shiftKey) {
                    sel = sel.replace(/^(\t| {1,4})/gm, '');
                } else {
                    if (contain_n) {
                        sel = sel.replace(/^/gm, '\t');
                    } else {
                        sel = '\t';
                    }
                }
                e.target.value = e.target.value.substring(0, start) + sel + e.target.value.substr(end);
                // here need modify
                e.target.setSelectionRange(start === end ? start + 1 : start, start + sel.length);
                e.target.focus();
                e.target.scrollTop = top;
            } else if (e.target.createTextRange) {
                document.selection.createRange().text = "\t";
            }
            if ($.browser.opera) {
                $(this).one('keypress', function(e) {
                    return false;
                });
            }
            return false;
        }
    });

    $('.js-attach-link').on('click', function(e) {
        modal("<div style=\"width: 500px;\"><p>交换链接需满足以下条件：</p><ol><li>你的网站建站时间已满1年</li><li>内容原创，版面整洁，无弹窗广告</li><li>暂时不接受个人博客类的、网址导航类的</li><li>使用<code>window.opener.location.href</code>恶意跳转的，永久加入黑名单</li><li>3天内无来源访问的友链，程序将自动删除友链</li></ol><p>有意向交换链接，并满足以上条件者，<a target=\"_blank\" rel=\"nofollow\" href=\"//tool.lu/user/messages/2\">联系我</a></p></div>");
    });

    $('.js-fixed-summary').on('click', function(e) {
        e.preventDefault();
        $(this).removeClass('fixed-summary');
    });

    $('.js-summary-expand').on('click', function(e) {
        e.preventDefault();
        var thiz = $(this);
        var container = thiz.closest('.js-summary-container');
        container.find('.js-summary-content').removeClass('fixed-summary');
        thiz.hide();
        container.find('.js-summary-collapse').show();
    });

    $('.js-summary-collapse').on('click', function(e) {
        e.preventDefault();
        var thiz = $(this);
        var container = thiz.closest('.js-summary-container');
        container.find('.js-summary-content').addClass('fixed-summary');
        thiz.hide();
        container.find('.js-summary-expand').show();
    });

    var loginBar = $('#js_login_bar');
    $.getJSON(loginBar.data("url"), function(data) {
        loginBar.html(data.info);
        if (data.authorized) {
            setTimeout(checknewpm, 1000);
            setInterval(checknewpm, 10 * 60000);
            // 暂定 10min 检测一次
        }
    });

    var running = false;
    $('a.collectable').on('click', function(e) {
        e.preventDefault();
        if (running)
            return;
        running = true;
        var collectBtn = $(this);

        $.post(collectBtn.data('url'), {
            slug: collectBtn.data('slug')
        }, function(data) {
            if (data.status) {
                if (collectBtn.hasClass("collect")) {
                    collectBtn.find('var').text('取消收藏');
                    collectBtn.find('i.icon').removeClass('collect').addClass('collected');
                    collectBtn.removeClass("collect").addClass("uncollect");
                    animateCollect(collectBtn);
                } else {
                    collectBtn.find('var').text('加入收藏');
                    collectBtn.find('i.icon').removeClass('collected').addClass('collect');
                    collectBtn.removeClass("uncollect").addClass("collect");
                }
            } else {
                modal(data.message);
            }
            running = false;
        }, 'json');
    });

    $('.js-share-wechat').on('click', function(e) {
        e.preventDefault();
        modal('<h4 style="margin-top: 0;">分享到微信朋友圈</h4><div class="text-center"><img src="' + $(this).data('image') + '" width="140" height="140"><br>使用微信“扫一扫”可分享至好友或朋友圈</div>');
    });
    $('.js-share-qrcode').on('click', function(e) {
        e.preventDefault();
        modal('<h4 style="margin-top: 0;">手机扫码打开</h4><div class="text-center"><img src="' + $(this).data('image') + '" width="140" height="140"></div>');
    });
    $('.js-share-weibo').on('click', function(e) {
        e.preventDefault();
        window.open($(this).data('url'), "_blank", "width=615,height=505");
    });
    $('.js-share-qq').on('click', function(e) {
        e.preventDefault();
        window.open($(this).data('url'), "_blank", "width=800,height=600");
    });

    $('.js-wechat-mp').on('click', function(e) {
        e.preventDefault();
        modal('<h4 style="margin-top: 0;">关注公众号：ZERO开发</h4><div class="text-center"><img src="' + $(this).data('image') + '" width="140" height="140"><br>使用微信“扫一扫”关注公众号：ZERO开发</div>');
    });

    $('.js-days-countdown').on('click', function(e) {
        e.preventDefault();
        modal('距离' + $(this).data('targetYear') + '还有' + $(this).data('countdown') + '天，年初定的目标怎样了？');
    });
    var inWechat = /(micromessenger|webbrowser)/.test(navigator.userAgent.toLocaleLowerCase());
});

function animateCollect(collectBtn) {
    var toolBox = collectBtn.closest(".item");
    if (toolBox.length === 0) {
        return;
    }
    var aniEle = $('<div/>').css({
        top: toolBox.offset().top,
        left: toolBox.offset().left,
        position: "absolute",
        width: toolBox.width(),
        height: toolBox.height(),
        backgroundColor: "rgba(0, 0, 0, .05)"
    });
    $(document.body).append(aniEle);
    var navMine = $('.nav-mine');
    aniEle.animate({
        top: navMine.offset().top,
        left: navMine.offset().left,
        width: navMine.width(),
        height: navMine.height()
    }, 300, null, function() {
        aniEle.remove()
    });
}

function checknewpm() {
    var messsage_nav = $('.js_message_nav');
    $.get('//tool.lu/user/messages/checknew', {}, function(data) {
        if (data.new_count > 0) {
            // noticeTitle();
            messsage_nav.addClass('new');
        } else {
            clearNoticeTitle();
            messsage_nav.removeClass('new');
        }
    }, 'json');
}

function flash(e) {
    var e = $(e), a = 255, b = 239, c = 0, d = 1, to;
    a = 239;
    b = 191;
    c = 1;
    d = 4;
    setTimeout(function() {
        $(window).scrollTop(e.offset().top - 50);
    }, 10);
    to = setInterval(function() {
        a += c;
        b += d;
        e.css("backgroundColor", "#ff" + a.toString(16) + b.toString(16));
        if (b >= 255) {
            clearInterval(to);
            to = null;
            e.css("backgroundColor", "#f3e4b1");
        }
    }, 60);
    return e.css("backgroundColor", "#ff" + a.toString(16) + b.toString(16));
}

var noticeTimer = null;
var orgTitle = document.title;

function noticeTitle() {
    var notice = {
        state: false,
        title: orgTitle,
        flash: 0,
        sleep: 15
    };
    noticeTimer = setInterval(function() {
        if (notice['flash'] < 5 || notice['flash'] > 4 && !notice['state']) {
            document.title = (notice['state'] ? '【　　　】' : '【新消息】') + orgTitle;
            notice['state'] = !notice['state'];
        }
        notice['flash'] = notice['flash'] < notice['sleep'] ? ++notice['flash'] : 0;
    }, 300);
}

function clearNoticeTitle() {
    if (noticeTimer) {
        clearInterval(noticeTimer);
        document.title = orgTitle;
        noticeTimer = null;
    }
}

$(function() {

    $('.gotop').on('click', function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 750);
    });

    var aSwiper = new Swiper('.swiper-container',{
        keyboard: {
            enabled: true
        },
        mousewheel: true,
        // effect: 'fade',
        // preloadImages: false,
        // lazy: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        loop: true
    });

    $('[data-toggle="dropdown"]').on('click', function(e) {
        $(this).closest('.btn-group').toggleClass('open');
    });

    $('ul.tabs a.active').each(function(index, ele) {
        if (ele.scrollIntoViewIfNeeded) {
            ele.scrollIntoViewIfNeeded();
        } else {
            // 检查元素是否在视口内
            var rect = ele.getBoundingClientRect();
            var isVisible = (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));

            // 如果元素不在视口内，则滚动到视口内
            if (!isVisible) {
                ele.scrollIntoView({
                    behavior: 'smooth',
                    // 平滑滚动
                    block: 'nearest',
                    // 滚动到最近的边界
                    inline: 'nearest'
                });
            }
        }
    });

    // var advertise = document.querySelector('.advertise');
    // if (advertise && window.innerWidth > 991 && (window.getComputedStyle(advertise).display === 'none' || advertise.clientHeight === 0)) {
    //     var adReplaceContainer = document.querySelector(adReplaceId);
    //     var adReplaceStyle = document.getElementById(adReplaceId);
    //     if (adReplaceContainer) {
    //         var replaceContainer = adReplaceContainer;
    //         if (adReplaceContainer.attachShadow) {
    //             replaceContainer = adReplaceContainer.attachShadow({mode: "closed"});
    //             if (adReplaceStyle) {
    //                 adReplaceStyle.innerHTML += ':host::before {content: "广告被浏览器插件屏蔽了 :("}';
    //                 replaceContainer.appendChild(adReplaceStyle);
    //             }
    //         }
    //         adReplaceContainer.oncontextmenu = function (e) {
    //             if (e.preventDefault) {
    //                 e.preventDefault();
    //             }
    //             return false;
    //         }
    //         var adNotice = document.createElement('div');
    //         adNotice.className = adReplaceId;
    //         adNotice.innerHTML += '<p>暂停AdBlock就不会出现这个提示了 :)</p>';
    //         replaceContainer.appendChild(adNotice);
    //     }
    //     // var body = document.querySelector('body');
    //     // var nodes = body.childNodes;
    //     // var aNode = nodes[Math.round(Math.random() * nodes.length)];
    //     // if (aNode) {
    //     //     body.insertBefore(adReplaceContainer, aNode);
    //     // }
    //     modal(adReplaceContainer);
    // }

});

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
function humanFileSize(bytes, dp, si) {
    dp = dp !== undefined ? dp : 1;
    si = si !== undefined ? si : true;
    var thresh = si ? 1024 : 1000;

    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }

    var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    var u = -1;
    var r = Math.pow(10, dp);

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

    return bytes.toFixed(dp) + ' ' + units[u];
}

function getIEVersion() {
    var ua = window.navigator.userAgent;

    // 检测 IE 10 或更早版本
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    // 检测 IE 11
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    // 不是 IE 浏览器
    return -1;
}
