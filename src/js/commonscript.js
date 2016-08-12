window.Modernizr = function(n, t, i) {
    function ht() {
        u.input = function(n) {
            for (var t = 0, i = n.length; t < i; t++) ft[n[t]] = !!(n[t] in f);
            return ft
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        u.inputtypes = function(n) {
            for (var o = 0, r, u, s, h = n.length; o < h; o++) f.setAttribute("type", u = n[o]), r = f.type !== "text", r && (f.value = k, f.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(u) && f.style.WebkitAppearance !== i ? (e.appendChild(f), s = t.defaultView, r = s.getComputedStyle && s.getComputedStyle(f, null).WebkitAppearance !== "textfield" && f.offsetHeight !== 0, e.removeChild(f)) : /^(search|tel)$/.test(u) || (/^(url|email)$/.test(u) ? r = f.checkValidity && f.checkValidity() === !1 : /^color$/.test(u) ? (e.appendChild(f), e.offsetWidth, r = f.value != k, e.removeChild(f)) : r = f.value != k)), ut[n[o]] = !!r;
            return ut
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    function o(n, t) {
        var i = n.charAt(0).toUpperCase() + n.substr(1),
            r = (n + " " + d.join(i + " ") + i).split(" ");
        return !!w(r, t)
    }

    function w(n, t) {
        for (var r in n)
            if (s[n[r]] !== i && (!t || t(n[r], b))) return !0
    }

    function a(n, t) {
        return ("" + n).indexOf(t) !== -1
    }

    function c(n, t) {
        return typeof n === t
    }

    function ct(n, t) {
        return l(h.join(n + ";") + (t || ""))
    }

    function l(n) {
        s.cssText = n
    }
    var u = {},
        tt = !0,
        e = t.documentElement,
        it = t.head || t.getElementsByTagName("head")[0],
        b = t.createElement("modernizr"),
        s = b.style,
        f = t.createElement("input"),
        k = ":)",
        rt = Object.prototype.toString,
        h = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
        d = "Webkit Moz O ms Khtml".split(" "),
        v = {
            svg: "http://www.w3.org/2000/svg"
        },
        r = {},
        ut = {},
        ft = {},
        et = [],
        y, ot = function(n) {
            var r = t.createElement("style"),
                i = t.createElement("div"),
                u;
            return r.textContent = n + "{#modernizr{height:3px}}", it.appendChild(r), i.id = "modernizr", e.appendChild(i), u = i.offsetHeight === 3, r.parentNode.removeChild(r), i.parentNode.removeChild(i), !!u
        },
        g = function() {
            function n(n, u) {
                u = u || t.createElement(r[n] || "div");
                var f = (n = "on" + n) in u;
                return f || (u.setAttribute || (u = t.createElement("div")), u.setAttribute && u.removeAttribute && (u.setAttribute(n, ""), f = c(u[n], "function"), c(u[n], i) || (u[n] = i), u.removeAttribute(n))), u = null, f
            }
            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return n
        }(),
        nt = {}.hasOwnProperty,
        st, p;
    st = c(nt, i) || c(nt.call, i) ? function(n, t) {
        return t in n && c(n.constructor.prototype[t], i)
    } : function(n, t) {
        return nt.call(n, t)
    };
    r.flexbox = function() {
        function u(n, t, i, r) {
            n.style.cssText = h.join(t + ":" + i + ";") + (r || "")
        }

        function f(n, t, i, r) {
            t += ":";
            n.style.cssText = (t + h.join(i + ";" + t)).slice(0, -t.length) + (r || "")
        }
        var n = t.createElement("div"),
            i = t.createElement("div"),
            r;
        return f(n, "display", "box", "width:42px;padding:0;"), u(i, "box-flex", "1", "width:10px;"), n.appendChild(i), e.appendChild(n), r = i.offsetWidth === 42, n.removeChild(i), e.removeChild(n), r
    };
    r.canvas = function() {
        var n = t.createElement("canvas");
        return n.getContext && n.getContext("2d")
    };
    r.canvastext = function() {
        return u.canvas && c(t.createElement("canvas").getContext("2d").fillText, "function")
    };
    r.webgl = function() {
        return !!n.WebGLRenderingContext
    };
    r.touch = function() {
        return "ontouchstart" in n || ot("@media (" + h.join("touch-enabled),(") + "modernizr)")
    };
    r.geolocation = function() {
        return !!navigator.geolocation
    };
    r.postmessage = function() {
        return !!n.postMessage
    };
    r.websqldatabase = function() {
        return !!n.openDatabase
    };
    r.indexedDB = function() {
        for (var i, t = -1, r = d.length; ++t < r;)
            if (i = d[t].toLowerCase(), n[i + "_indexedDB"] || n[i + "IndexedDB"]) return !0;
        return !1
    };
    r.hashchange = function() {
        return g("hashchange", n) && (t.documentMode === i || t.documentMode > 7)
    };
    r.history = function() {
        return !!(n.history && history.pushState)
    };
    r.draganddrop = function() {
        return g("dragstart") && g("drop")
    };
    r.websockets = function() {
        return "WebSocket" in n
    };
    r.rgba = function() {
        return l("background-color:rgba(150,255,150,.5)"), a(s.backgroundColor, "rgba")
    };
    r.hsla = function() {
        return l("background-color:hsla(120,40%,100%,.5)"), a(s.backgroundColor, "rgba") || a(s.backgroundColor, "hsla")
    };
    r.multiplebgs = function() {
        return l("background:url(//:),url(//:),red url(//:)"), new RegExp("(url\\s*\\(.*?){3}").test(s.background)
    };
    r.backgroundsize = function() {
        return o("backgroundSize")
    };
    r.borderimage = function() {
        return o("borderImage")
    };
    r.borderradius = function() {
        return o("borderRadius", "", function(n) {
            return a(n, "orderRadius")
        })
    };
    r.boxshadow = function() {
        return o("boxShadow")
    };
    r.textshadow = function() {
        return t.createElement("div").style.textShadow === ""
    };
    r.opacity = function() {
        return ct("opacity:.55"), /^0.55$/.test(s.opacity)
    };
    r.cssanimations = function() {
        return o("animationName")
    };
    r.csscolumns = function() {
        return o("columnCount")
    };
    r.cssgradients = function() {
        var n = "background-image:";
        return l((n + h.join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + n) + h.join("linear-gradient(left top,#9f9, white);" + n)).slice(0, -n.length)), a(s.backgroundImage, "gradient")
    };
    r.cssreflections = function() {
        return o("boxReflect")
    };
    r.csstransforms = function() {
        return !!w(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
    };
    r.csstransforms3d = function() {
        var n = !!w(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
        return n && "webkitPerspective" in e.style && (n = ot("@media (" + h.join("transform-3d),(") + "modernizr)")), n
    };
    r.csstransitions = function() {
        return o("transitionProperty")
    };
    r.fontface = function() {
        var n, u, r = it || e,
            i = t.createElement("style"),
            o = t.implementation || {
                hasFeature: function() {
                    return !1
                }
            },
            f;
        return i.type = "text/css", r.insertBefore(i, r.firstChild), n = i.sheet || i.styleSheet, f = o.hasFeature("CSS2", "") ? function(t) {
            if (!n || !t) return !1;
            var i = !1;
            try {
                n.insertRule(t, 0);
                i = /src/i.test(n.cssRules[0].cssText);
                n.deleteRule(n.cssRules.length - 1)
            } catch (r) {}
            return i
        } : function(t) {
            return !n || !t ? !1 : (n.cssText = t, n.cssText.length !== 0 && /src/i.test(n.cssText) && n.cssText.replace(/\r+|\n+/g, "").indexOf(t.split(" ")[0]) === 0)
        }, u = f('@font-face { font-family: "font"; src: url(data:,); }'), r.removeChild(i), u
    };
    r.video = function() {
        var i = t.createElement("video"),
            n = !!i.canPlayType,
            r;
        return n && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"'), r = 'video/mp4; codecs="avc1.42E01E', n.h264 = i.canPlayType(r + '"') || i.canPlayType(r + ', mp4a.40.2"'), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"')), n
    };
    r.audio = function() {
        var i = t.createElement("audio"),
            n = !!i.canPlayType;
        return n && (n = new Boolean(n), n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"'), n.mp3 = i.canPlayType("audio/mpeg;"), n.wav = i.canPlayType('audio/wav; codecs="1"'), n.m4a = i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")), n
    };
    r.localstorage = function() {
        try {
            return !!localStorage.getItem
        } catch (n) {
            return !1
        }
    };
    r.sessionstorage = function() {
        try {
            return !!sessionStorage.getItem
        } catch (n) {
            return !1
        }
    };
    r.webWorkers = function() {
        return !!n.Worker
    };
    r.applicationcache = function() {
        return !!n.applicationCache
    };
    r.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(v.svg, "svg").createSVGRect
    };
    r.inlinesvg = function() {
        var n = t.createElement("div");
        return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) == v.svg
    };
    r.smil = function() {
        return !!t.createElementNS && /SVG/.test(rt.call(t.createElementNS(v.svg, "animate")))
    };
    r.svgclippaths = function() {
        return !!t.createElementNS && /SVG/.test(rt.call(t.createElementNS(v.svg, "clipPath")))
    };
    for (p in r) st(r, p) && (y = p.toLowerCase(), u[y] = r[p](), et.push((u[y] ? "" : "no-") + y));
    return u.input || ht(), u.crosswindowmessaging = u.postmessage, u.historymanagement = u.history, u.addTest = function(n, t) {
        return n = n.toLowerCase(), u[n] ? void 0 : (t = !!t(), e.className += " " + (t ? "" : "no-") + n, u[n] = t, u)
    }, l(""), b = f = null, tt && n.attachEvent && function() {
        var n = t.createElement("div");
        return n.innerHTML = "<elem><\/elem>", n.childNodes.length !== 1
    }() && function(n, t) {
        function s(n, t) {
            for (var r = -1, f = n.length, i, u = []; ++r < f;) i = n[r], (t = i.media || t) != "screen" && u.push(s(i.imports, t), i.cssText);
            return u.join("")
        }

        function h(n) {
            for (var t = -1; ++t < c;) n.createElement(f[t])
        }
        var u = "abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            f = u.split("|"),
            c = f.length,
            v = new RegExp("(^|\\s)(" + u + ")", "gi"),
            y = new RegExp("<(/*)(" + u + ")", "gi"),
            p = new RegExp("(^|[^\\n]*?\\s)(" + u + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
            l = t.createDocumentFragment(),
            e = t.documentElement,
            a = e.firstChild,
            r = t.createElement("body"),
            o = t.createElement("style"),
            i;
        h(t);
        h(l);
        a.insertBefore(o, a.firstChild);
        o.media = "print";
        n.attachEvent("onbeforeprint", function() {
            var u = -1,
                b = s(t.styleSheets, "all"),
                w = [],
                n;
            for (i = i || t.body;
                (n = p.exec(b)) != null;) w.push((n[1] + n[2] + n[3]).replace(v, "$1.iepp_$2") + n[4]);
            for (o.styleSheet.cssText = w.join("\n"); ++u < c;)
                for (var h = t.getElementsByTagName(f[u]), k = h.length, a = -1; ++a < k;) h[a].className.indexOf("iepp_") < 0 && (h[a].className += " iepp_" + f[u]);
            l.appendChild(i);
            e.appendChild(r);
            r.className = i.className;
            r.innerHTML = i.innerHTML.replace(y, "<$1font")
        });
        n.attachEvent("onafterprint", function() {
            r.innerHTML = "";
            e.removeChild(r);
            e.appendChild(i);
            o.styleSheet.cssText = ""
        })
    }(n, t), u._enableHTML5 = tt, u._version = "1.7", e.className = e.className.replace(/\bno-js\b/, "") + " js " + et.join(" "), u
}(this, this.document)