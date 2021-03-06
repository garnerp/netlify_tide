adbcheck = !1,
    function(n, t) {
        function dt(n) {
            var t = n.length,
                r = i.type(n);
            return i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || r !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in n)
        }

        function kf(n) {
            var t = gt[n] = {};
            return i.each(n.match(s) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function ir(n, r, u, f) {
            if (i.acceptData(n)) {
                var s, h, c = i.expando,
                    a = typeof r == "string",
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c;
                if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = b.pop() || i.guid++ : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], h == null && (h = s[i.camelCase(r)])) : h = s, h
            }
        }

        function rr(n, t, r) {
            if (i.acceptData(n)) {
                var o, h, e, s = n.nodeType,
                    u = s ? i.cache : n,
                    f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data, e)) {
                        for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" ")), o = 0, h = t.length; o < h; o++) delete e[t[o]];
                        if (!(r ? ni : i.isEmptyObject)(e)) return
                    }(r || (delete u[f].data, ni(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
                }
            }
        }

        function ur(n, r, u) {
            if (u === t && n.nodeType === 1) {
                var f = "data-" + r.replace(tr, "-$1").toLowerCase();
                if (u = n.getAttribute(f), typeof u == "string") {
                    try {
                        u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : nr.test(u) ? i.parseJSON(u) : u
                    } catch (e) {}
                    i.data(n, r, u)
                } else u = t
            }
            return u
        }

        function ni(n) {
            var t;
            for (t in n)
                if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
            return !0
        }

        function ht() {
            return !0
        }

        function d() {
            return !1
        }

        function cr(n, t) {
            do n = n[t]; while (n && n.nodeType !== 1);
            return n
        }

        function lr(n, t, r) {
            if (t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
                var u = !!t.call(n, i, n);
                return u === r
            });
            if (t.nodeType) return i.grep(n, function(n) {
                return n === t === r
            });
            if (typeof t == "string") {
                var u = i.grep(n, function(n) {
                    return n.nodeType === 1
                });
                if (fe.test(t)) return i.filter(t, u, !r);
                t = i.filter(t, u)
            }
            return i.grep(n, function(n) {
                return i.inArray(n, t) >= 0 === r
            })
        }

        function ar(n) {
            var i = vr.split("|"),
                t = n.createDocumentFragment();
            if (t.createElement)
                while (i.length) t.createElement(i.pop());
            return t
        }

        function ye(n, t) {
            return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
        }

        function dr(n) {
            var t = n.getAttributeNode("type");
            return n.type = (t && t.specified) + "/" + n.type, n
        }

        function gr(n) {
            var t = le.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function si(n, t) {
            for (var u, r = 0;
                (u = n[r]) != null; r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
        }

        function nu(n, t) {
            if (t.nodeType === 1 && i.hasData(n)) {
                var u, f, o, s = i._data(n),
                    r = i._data(t, s),
                    e = s.events;
                if (e) {
                    delete r.handle;
                    r.events = {};
                    for (u in e)
                        for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
                }
                r.data && (r.data = i.extend({}, r.data))
            }
        }

        function pe(n, t) {
            var r, f, u;
            if (t.nodeType === 1) {
                if (r = t.nodeName.toLowerCase(), !i.support.noCloneEvent && t[i.expando]) {
                    u = i._data(t);
                    for (f in u.events) i.removeEvent(t, f, u.handle);
                    t.removeAttribute(i.expando)
                }
                r === "script" && t.text !== n.text ? (dr(t).text = n.text, gr(t)) : r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && ei.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : r === "option" ? t.defaultSelected = t.selected = n.defaultSelected : (r === "input" || r === "textarea") && (t.defaultValue = n.defaultValue)
            }
        }

        function u(n, r) {
            var s, e, h = 0,
                f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
            if (!f)
                for (f = [], s = n.childNodes || n;
                    (e = s[h]) != null; h++) !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
            return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f
        }

        function we(n) {
            ei.test(n.type) && (n.defaultChecked = n.checked)
        }

        function fu(n, t) {
            if (t in n) return t;
            for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = uu.length; i--;)
                if (t = uu[i] + r, t in n) return t;
            return u
        }

        function ut(n, t) {
            return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
        }

        function eu(n, t) {
            for (var f, r, o, e = [], u = 0, s = n.length; u < s; u++)(r = n[u], r.style) && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || f !== "none" || (r.style.display = ""), r.style.display === "" && ut(r) && (e[u] = i._data(r, "olddisplay", cu(r.nodeName)))) : e[u] || (o = ut(r), (f && f !== "none" || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
            for (u = 0; u < s; u++)(r = n[u], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[u] || "" : "none"));
            return n
        }

        function ou(n, t, i) {
            var r = ge.exec(t);
            return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
        }

        function su(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + p[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + p[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), r !== "padding" && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
            return o
        }

        function hu(n, t, r) {
            var e = !0,
                u = t === "width" ? n.offsetWidth : n.offsetHeight,
                f = v(n),
                o = i.support.boxSizing && i.css(n, "boxSizing", !1, f) === "border-box";
            if (u <= 0 || u == null) {
                if (u = y(n, t, f), (u < 0 || u == null) && (u = n.style[t]), ct.test(u)) return u;
                e = o && (i.support.boxSizingReliable || u === n.style[t]);
                u = parseFloat(u) || 0
            }
            return u + su(n, t, r || (o ? "border" : "content"), e, f) + "px"
        }

        function cu(n) {
            var u = r,
                t = iu[n];
            return t || (t = lu(n, u), t !== "none" && t || (rt = (rt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement), u = (rt[0].contentWindow || rt[0].contentDocument).document, u.write("<!doctype html><html><body>"), u.close(), t = lu(n, u), rt.detach()), iu[n] = t), t
        }

        function lu(n, t) {
            var r = i(t.createElement(n)).appendTo(t.body),
                u = i.css(r[0], "display");
            return r.remove(), u
        }

        function ci(n, t, r, u) {
            var f;
            if (i.isArray(t)) i.each(t, function(t, i) {
                r || ro.test(n) ? u(n, i) : ci(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
            });
            else if (r || i.type(t) !== "object") u(n, t);
            else
                for (f in t) ci(n + "[" + f + "]", t[f], r, u)
        }

        function ku(n) {
            return function(t, r) {
                typeof t != "string" && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(s) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function du(n, t, r, u) {
            function e(s) {
                var h;
                return f[s] = !0, i.each(n[s] || [], function(n, i) {
                    var s = i(t, r, u);
                    if (typeof s != "string" || o || f[s]) {
                        if (o) return !(h = s)
                    } else return t.dataTypes.unshift(s), e(s), !1
                }), h
            }
            var f = {},
                o = n === vi;
            return e(t.dataTypes[0]) || !f["*"] && e("*")
        }

        function yi(n, r) {
            var f, u, e = i.ajaxSettings.flatOptions || {};
            for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
            return f && i.extend(!0, n, f), n
        }

        function co(n, i, r) {
            var s, o, e, u, h = n.contents,
                f = n.dataTypes,
                c = n.responseFields;
            for (u in c) u in r && (i[c[u]] = r[u]);
            while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
            if (o)
                for (u in h)
                    if (h[u] && h[u].test(o)) {
                        f.unshift(u);
                        break
                    }
            if (f[0] in r) e = f[0];
            else {
                for (u in r) {
                    if (!f[0] || n.converters[u + " " + f[0]]) {
                        e = u;
                        break
                    }
                    s || (s = u)
                }
                e = e || s
            }
            if (e) return e !== f[0] && f.unshift(e), r[e]
        }

        function lo(n, t) {
            var o, r, i, e, u = {},
                h = 0,
                s = n.dataTypes.slice(),
                f = s[0];
            if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
                for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
            for (; r = s[++h];)
                if (r !== "*") {
                    if (f !== "*" && f !== r) {
                        if (i = u[f + " " + r] || u["* " + r], !i)
                            for (o in u)
                                if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]], i)) {
                                    i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
                                    break
                                }
                        if (i !== !0)
                            if (i && n.throws) t = i(t);
                            else try {
                                t = i(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: i ? c : "No conversion from " + f + " to " + r
                                }
                            }
                    }
                    f = r
                }
            return {
                state: "success",
                data: t
            }
        }

        function nf() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }

        function ao() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function tf() {
            return setTimeout(function() {
                tt = t
            }), tt = i.now()
        }

        function wo(n, t) {
            i.each(t, function(t, i) {
                for (var u = (ft[t] || []).concat(ft["*"]), r = 0, f = u.length; r < f; r++)
                    if (u[r].call(n, t, i)) return
            })
        }

        function rf(n, t, r) {
            var e, o, s = 0,
                l = yt.length,
                f = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (o) return !1;
                    for (var s = tt || tf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {}
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: tt || tf(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i < r; i++) u.tweens[i].run(1);
                        return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                    }
                }),
                h = u.props;
            for (bo(h, u.opts.specialEasing); s < l; s++)
                if (e = yt[s].call(u, n, h, u.opts), e) return e;
            return wo(u, h), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function bo(n, t) {
            var u, f, r, e, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function ko(n, t, r) {
            var u, o, v, a, s, y, l, f, b, h = this,
                e = n.style,
                p = {},
                w = [],
                c = n.nodeType && ut(n);
            r.queue || (f = i._queueHooks(n, "fx"), f.unqueued == null && (f.unqueued = 0, b = f.empty.fire, f.empty.fire = function() {
                f.unqueued || b()
            }), f.unqueued++, h.always(function() {
                h.always(function() {
                    f.unqueued--;
                    i.queue(n, "fx").length || f.empty.fire()
                })
            }));
            n.nodeType === 1 && ("height" in t || "width" in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY], i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (i.support.inlineBlockNeedsLayout && cu(n.nodeName) !== "inline" ? e.zoom = 1 : e.display = "inline-block"));
            r.overflow && (e.overflow = "hidden", i.support.shrinkWrapBlocks || h.always(function() {
                e.overflow = r.overflow[0];
                e.overflowX = r.overflow[1];
                e.overflowY = r.overflow[2]
            }));
            for (o in t)
                if (a = t[o], vo.exec(a)) {
                    if (delete t[o], y = y || a === "toggle", a === (c ? "hide" : "show")) continue;
                    w.push(o)
                }
            if (v = w.length, v)
                for (s = i._data(n, "fxshow") || i._data(n, "fxshow", {}), ("hidden" in s) && (c = s.hidden), y && (s.hidden = !c), c ? i(n).show() : h.done(function() {
                        i(n).hide()
                    }), h.done(function() {
                        var t;
                        i._removeData(n, "fxshow");
                        for (t in p) i.style(n, t, p[t])
                    }), o = 0; o < v; o++) u = w[o], l = h.createTween(u, c ? s[u] : 0), p[u] = s[u] || i.style(n, u), u in s || (s[u] = l.start, c && (l.end = l.start, l.start = u === "width" || u === "height" ? 1 : 0))
        }

        function f(n, t, i, r, u) {
            return new f.prototype.init(n, t, i, r, u)
        }

        function pt(n, t) {
            var r, i = {
                    height: n
                },
                u = 0;
            for (t = t ? 1 : 0; u < 4; u += 2 - t) r = p[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function uf(n) {
            return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
        }
        var et, wi, o = typeof t,
            r = n.document,
            ff = n.location,
            ef = n.jQuery,
            of = n.$,
            ot = {},
            b = [],
            wt = "1.9.1",
            bi = b.concat,
            bt = b.push,
            l = b.slice,
            ki = b.indexOf,
            sf = ot.toString,
            it = ot.hasOwnProperty,
            kt = wt.trim,
            i = function(n, t) {
                return new i.fn.init(n, t, wi)
            },
            st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            s = /\S+/g,
            hf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            cf = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            di = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            lf = /^[\],:{}\s]*$/,
            af = /(?:^|:|,)(?:\s*\[)+/g,
            vf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            yf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            pf = /^-ms-/,
            wf = /-([\da-z])/gi,
            bf = function(n, t) {
                return t.toUpperCase()
            },
            h = function(n) {
                (r.addEventListener || n.type === "load" || r.readyState === "complete") && (gi(), i.ready())
            },
            gi = function() {
                r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1), n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h), n.detachEvent("onload", h))
            },
            gt, nr, tr, pi, lt, g, nt, gu, at;
        i.fn = i.prototype = {
            jquery: wt,
            constructor: i,
            init: function(n, u, f) {
                var e, o;
                if (!n) return this;
                if (typeof n == "string") {
                    if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : cf.exec(n), e && (e[1] || !u)) {
                        if (e[1]) {
                            if (u = u instanceof i ? u[0] : u, i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)), di.test(e[1]) && i.isPlainObject(u))
                                for (e in u) i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                            return this
                        }
                        if (o = r.getElementById(e[2]), o && o.parentNode) {
                            if (o.id !== e[2]) return f.find(n);
                            this.length = 1;
                            this[0] = o
                        }
                        return this.context = r, this.selector = n, this
                    }
                    return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
                }
                return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return l.call(this)
            },
            get: function(n) {
                return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(n, t) {
                return i.each(this, n, t)
            },
            ready: function(n) {
                return i.ready.promise().done(n), this
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (n < 0 ? i : 0);
                return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: bt,
            sort: [].sort,
            splice: [].splice
        };
        i.fn.init.prototype = i.fn;
        i.extend = i.fn.extend = function() {
            var u, o, r, e, s, h, n = arguments[0] || {},
                f = 1,
                l = arguments.length,
                c = !1;
            for (typeof n == "boolean" && (c = n, n = arguments[1] || {}, f = 2), typeof n == "object" || i.isFunction(n) || (n = {}), l === f && (n = this, --f); f < l; f++)
                if ((s = arguments[f]) != null)
                    for (e in s)(u = n[e], r = s[e], n !== r) && (c && r && (i.isPlainObject(r) || (o = i.isArray(r))) ? (o ? (o = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
            return n
        };
        i.extend({
            noConflict: function(t) {
                return n.$ === i && (n.$ = of), t && n.jQuery === i && (n.jQuery = ef), i
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function(n) {
                if (n === !0 ? !--i.readyWait : !i.isReady) {
                    if (!r.body) return setTimeout(i.ready);
                    (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (et.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
                }
            },
            isFunction: function(n) {
                return i.type(n) === "function"
            },
            isArray: Array.isArray || function(n) {
                return i.type(n) === "array"
            },
            isWindow: function(n) {
                return n != null && n == n.window
            },
            isNumeric: function(n) {
                return !isNaN(parseFloat(n)) && isFinite(n)
            },
            type: function(n) {
                return n == null ? String(n) : typeof n == "object" || typeof n == "function" ? ot[sf.call(n)] || "object" : typeof n
            },
            isPlainObject: function(n) {
                if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
                try {
                    if (n.constructor && !it.call(n, "constructor") && !it.call(n.constructor.prototype, "isPrototypeOf")) return !1
                } catch (u) {
                    return !1
                }
                var r;
                for (r in n);
                return r === t || it.call(n, r)
            },
            isEmptyObject: function(n) {
                var t;
                for (t in n) return !1;
                return !0
            },
            error: function(n) {
                throw new Error(n);
            },
            parseHTML: function(n, t, u) {
                if (!n || typeof n != "string") return null;
                typeof t == "boolean" && (u = t, t = !1);
                t = t || r;
                var f = di.exec(n),
                    e = !u && [];
                return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && i(e).remove(), i.merge([], f.childNodes))
            },
            parseJSON: function(t) {
                if (n.JSON && n.JSON.parse) return n.JSON.parse(t);
                if (t === null) return t;
                if (typeof t == "string" && (t = i.trim(t), t && lf.test(t.replace(vf, "@").replace(yf, "]").replace(af, "")))) return new Function("return " + t)();
                i.error("Invalid JSON: " + t)
            },
            parseXML: function(r) {
                var u, f;
                if (!r || typeof r != "string") return null;
                try {
                    n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
                } catch (e) {
                    u = t
                }
                return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u
            },
            noop: function() {},
            globalEval: function(t) {
                t && i.trim(t) && (n.execScript || function(t) {
                    n.eval.call(n, t)
                })(t)
            },
            camelCase: function(n) {
                return n.replace(pf, "ms-").replace(wf, bf)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(n, t, i) {
                var u, r = 0,
                    f = n.length,
                    e = dt(n);
                if (i) {
                    if (e) {
                        for (; r < f; r++)
                            if (u = t.apply(n[r], i), u === !1) break
                    } else
                        for (r in n)
                            if (u = t.apply(n[r], i), u === !1) break
                } else if (e) {
                    for (; r < f; r++)
                        if (u = t.call(n[r], r, n[r]), u === !1) break
                } else
                    for (r in n)
                        if (u = t.call(n[r], r, n[r]), u === !1) break; return n
            },
            trim: kt && !kt.call("﻿ ") ? function(n) {
                return n == null ? "" : kt.call(n)
            } : function(n) {
                return n == null ? "" : (n + "").replace(hf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return n != null && (dt(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : bt.call(r, n)), r
            },
            inArray: function(n, t, i) {
                var r;
                if (t) {
                    if (ki) return ki.call(t, n, i);
                    for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                        if (i in t && t[i] === n) return i
                }
                return -1
            },
            merge: function(n, i) {
                var f = i.length,
                    u = n.length,
                    r = 0;
                if (typeof f == "number")
                    for (; r < f; r++) n[u++] = i[r];
                else
                    while (i[r] !== t) n[u++] = i[r++];
                return n.length = u, n
            },
            grep: function(n, t, i) {
                var u, f = [],
                    r = 0,
                    e = n.length;
                for (i = !!i; r < e; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var u, r = 0,
                    e = n.length,
                    o = dt(n),
                    f = [];
                if (o)
                    for (; r < e; r++) u = t(n[r], r, i), u != null && (f[f.length] = u);
                else
                    for (r in n) u = t(n[r], r, i), u != null && (f[f.length] = u);
                return bi.apply([], f)
            },
            guid: 1,
            proxy: function(n, r) {
                var f, u, e;
                return (typeof r == "string" && (e = n[r], r = n, n = e), !i.isFunction(n)) ? t : (f = l.call(arguments, 2), u = function() {
                    return n.apply(r || this, f.concat(l.call(arguments)))
                }, u.guid = n.guid = n.guid || i.guid++, u)
            },
            access: function(n, r, u, f, e, o, s) {
                var h = 0,
                    l = n.length,
                    c = u == null;
                if (i.type(u) === "object") {
                    e = !0;
                    for (h in u) i.access(n, r, h, u[h], !0, o, s)
                } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function(n, t, r) {
                        return c.call(i(n), r)
                    })), r))
                    for (; h < l; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
                return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
            },
            now: function() {
                return (new Date).getTime()
            }
        });
        i.ready.promise = function(t) {
            if (!et)
                if (et = i.Deferred(), r.readyState === "complete") setTimeout(i.ready);
                else if (r.addEventListener) r.addEventListener("DOMContentLoaded", h, !1), n.addEventListener("load", h, !1);
            else {
                r.attachEvent("onreadystatechange", h);
                n.attachEvent("onload", h);
                var u = !1;
                try {
                    u = n.frameElement == null && r.documentElement
                } catch (e) {}
                u && u.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            u.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        gi();
                        i.ready()
                    }
                }()
            }
            return et.promise(t)
        };
        i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
            ot["[object " + t + "]"] = t.toLowerCase()
        });
        wi = i(r);
        gt = {};
        i.Callbacks = function(n) {
            n = typeof n == "string" ? gt[n] || kf(n) : i.extend({}, n);
            var o, f, c, s, e, l, r = [],
                u = !n.once && [],
                a = function(t) {
                    for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && e < s; e++)
                        if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                            f = !1;
                            break
                        }
                    o = !1;
                    r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (r) {
                            var t = r.length;
                            (function u(t) {
                                i.each(t, function(t, f) {
                                    var e = i.type(f);
                                    e === "function" ? n.unique && h.has(f) || r.push(f) : f && f.length && e !== "string" && u(f)
                                })
                            })(arguments);
                            o ? s = r.length : f && (l = t, a(f))
                        }
                        return this
                    },
                    remove: function() {
                        return r && i.each(arguments, function(n, t) {
                            for (var u;
                                (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), o && (u <= s && s--, u <= e && e--)
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, r) > -1 : !!(r && r.length)
                    },
                    empty: function() {
                        return r = [], this
                    },
                    disable: function() {
                        return r = u = f = t, this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return u = t, f || h.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(n, t) {
                        return t = t || [], t = [n, t.slice ? t.slice() : t], r && (!c || u) && (o ? u.push(t) : a(t)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!c
                    }
                };
            return h
        };
        i.extend({
            Deferred: function(n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")]
                    ],
                    f = "pending",
                    r = {
                        state: function() {
                            return f
                        },
                        always: function() {
                            return t.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var s = e[0],
                                        o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function() {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        promise: function(n) {
                            return n != null ? i.extend(n, r) : r
                        }
                    },
                    t = {};
                return r.pipe = r.then, i.each(u, function(n, i) {
                    var e = i[2],
                        o = i[3];
                    r[i[1]] = e.add;
                    o && e.add(function() {
                        f = o
                    }, u[n ^ 1][2].disable, u[2][2].lock);
                    t[i[0]] = function() {
                        return t[i[0] + "With"](this === t ? r : this, arguments), this
                    };
                    t[i[0] + "With"] = e.fireWith
                }), r.promise(t), n && n.call(t, t), t
            },
            when: function(n) {
                var t = 0,
                    u = l.call(arguments),
                    r = u.length,
                    e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                    f = e === 1 ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? l.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o, c, s;
                if (r > 1)
                    for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        });
        i.support = function() {
            var u, s, e, f, h, c, l, a, y, v, t = r.createElement("div");
            if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", s = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !s || !e || !s.length) return {};
            h = r.createElement("select");
            l = h.appendChild(r.createElement("option"));
            f = t.getElementsByTagName("input")[0];
            e.style.cssText = "top:1px;float:left;opacity:.5";
            u = {
                getSetAttribute: t.className !== "t",
                leadingWhitespace: t.firstChild.nodeType === 3,
                tbody: !t.getElementsByTagName("tbody").length,
                htmlSerialize: !!t.getElementsByTagName("link").length,
                style: /top/.test(e.getAttribute("style")),
                hrefNormalized: e.getAttribute("href") === "/a",
                opacity: /^0.5/.test(e.style.opacity),
                cssFloat: !!e.style.cssFloat,
                checkOn: !!f.value,
                optSelected: l.selected,
                enctype: !!r.createElement("form").enctype,
                html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
                boxModel: r.compatMode === "CSS1Compat",
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            };
            f.checked = !0;
            u.noCloneChecked = f.cloneNode(!0).checked;
            h.disabled = !0;
            u.optDisabled = !l.disabled;
            try {
                delete t.test
            } catch (p) {
                u.deleteExpando = !1
            }
            f = r.createElement("input");
            f.setAttribute("value", "");
            u.input = f.getAttribute("value") === "";
            f.value = "t";
            f.setAttribute("type", "radio");
            u.radioValue = f.value === "t";
            f.setAttribute("checked", "t");
            f.setAttribute("name", "t");
            c = r.createDocumentFragment();
            c.appendChild(f);
            u.appendChecked = f.checked;
            u.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
            t.attachEvent && (t.attachEvent("onclick", function() {
                u.noCloneEvent = !1
            }), t.cloneNode(!0).click());
            for (v in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t.setAttribute(a = "on" + v, "t"), u[v + "Bubbles"] = a in n || t.attributes[a].expando === !1;
            return t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = t.style.backgroundClip === "content-box", i(function() {
                var e, f, i, h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = r.getElementsByTagName("body")[0];
                s && (e = r.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(e).appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", y = i[0].offsetHeight === 0, i[0].style.display = "", i[1].style.display = "none", u.reliableHiddenOffsets = y && i[0].offsetHeight === 0, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = t.offsetWidth === 4, u.doesNotIncludeMarginInBodyOffset = s.offsetTop !== 1, n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%", u.boxSizingReliable = (n.getComputedStyle(t, null) || {
                    width: "4px"
                }).width === "4px", f = t.appendChild(r.createElement("div")), f.style.cssText = t.style.cssText = h, f.style.marginRight = f.style.width = "0", t.style.width = "1px", u.reliableMarginRight = !parseFloat((n.getComputedStyle(f, null) || {}).marginRight)), typeof t.style.zoom !== o && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.innerHTML = "<div><\/div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = t.offsetWidth !== 3, u.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(e), e = t = i = f = null)
            }), s = h = c = l = e = f = null, u
        }();
        nr = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
        tr = /([A-Z])/g;
        i.extend({
            cache: {},
            expando: "jQuery" + (wt + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(n) {
                return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ni(n)
            },
            data: function(n, t, i) {
                return ir(n, t, i)
            },
            removeData: function(n, t) {
                return rr(n, t)
            },
            _data: function(n, t, i) {
                return ir(n, t, i, !0)
            },
            _removeData: function(n, t) {
                return rr(n, t, !0)
            },
            acceptData: function(n) {
                if (n.nodeType && n.nodeType !== 1 && n.nodeType !== 9) return !1;
                var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
                return !t || t !== !0 && n.getAttribute("classid") === t
            }
        });
        i.fn.extend({
            data: function(n, r) {
                var e, f, u = this[0],
                    o = 0,
                    s = null;
                if (n === t) {
                    if (this.length && (s = i.data(u), u.nodeType === 1 && !i._data(u, "parsedAttrs"))) {
                        for (e = u.attributes; o < e.length; o++) f = e[o].name, f.indexOf("data-") || (f = i.camelCase(f.slice(5)), ur(u, f, s[f]));
                        i._data(u, "parsedAttrs", !0)
                    }
                    return s
                }
                return typeof n == "object" ? this.each(function() {
                    i.data(this, n)
                }) : i.access(this, function(r) {
                    if (r === t) return u ? ur(u, n, i.data(u, n)) : null;
                    this.each(function() {
                        i.data(this, n, r)
                    })
                }, null, r, arguments.length > 1, null, !0)
            },
            removeData: function(n) {
                return this.each(function() {
                    i.removeData(this, n)
                })
            }
        });
        i.extend({
            queue: function(n, t, r) {
                var u;
                if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var f = i.queue(n, t),
                    e = f.length,
                    r = f.shift(),
                    u = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                r === "inprogress" && (r = f.shift(), e--);
                u.cur = r;
                r && (t === "fx" && f.unshift("inprogress"), delete u.stop, r.call(n, o, u));
                !e && u && u.empty.fire()
            },
            _queueHooks: function(n, t) {
                var r = t + "queueHooks";
                return i._data(n, r) || i._data(n, r, {
                    empty: i.Callbacks("once memory").add(function() {
                        i._removeData(n, t + "queue");
                        i._removeData(n, r)
                    })
                })
            }
        });
        i.fn.extend({
            queue: function(n, r) {
                var u = 2;
                return (typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u) ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                    var t = i.queue(this, n, r);
                    i._queueHooks(this, n);
                    n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            delay: function(n, t) {
                return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, r) {
                var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
                for (typeof n != "string" && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(r)
            }
        });
        var k, fr, ti = /[\t\r\n]/g,
            df = /\r/g,
            gf = /^(?:input|select|textarea|button|object)$/i,
            ne = /^(?:a|area)$/i,
            er = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            ii = /^(?:checked|selected)$/i,
            a = i.support.getSetAttribute,
            ri = i.support.input;
        i.fn.extend({
            attr: function(n, t) {
                return i.access(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            },
            prop: function(n, t) {
                return i.access(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function(n) {
                return n = i.propFix[n] || n, this.each(function() {
                    try {
                        this[n] = t;
                        delete this[n]
                    } catch (i) {}
                })
            },
            addClass: function(n) {
                var e, t, r, u, o, f = 0,
                    h = this.length,
                    c = typeof n == "string" && n;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
                if (c)
                    for (e = (n || "").match(s) || []; f < h; f++)
                        if (t = this[f], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(ti, " ") : " "), r) {
                            for (o = 0; u = e[o++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                            t.className = i.trim(r)
                        }
                return this
            },
            removeClass: function(n) {
                var e, r, t, u, o, f = 0,
                    h = this.length,
                    c = arguments.length === 0 || typeof n == "string" && n;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
                if (c)
                    for (e = (n || "").match(s) || []; f < h; f++)
                        if (r = this[f], t = r.nodeType === 1 && (r.className ? (" " + r.className + " ").replace(ti, " ") : ""), t) {
                            for (o = 0; u = e[o++];)
                                while (t.indexOf(" " + u + " ") >= 0) t = t.replace(" " + u + " ", " ");
                            r.className = n ? i.trim(t) : ""
                        }
                return this
            },
            toggleClass: function(n, t) {
                var r = typeof n,
                    u = typeof t == "boolean";
                return i.isFunction(n) ? this.each(function(r) {
                    i(this).toggleClass(n.call(this, r, this.className, t), t)
                }) : this.each(function() {
                    if (r === "string")
                        for (var f, c = 0, h = i(this), e = t, l = n.match(s) || []; f = l[c++];) e = u ? e : !h.hasClass(f), h[e ? "addClass" : "removeClass"](f);
                    else(r === o || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
                })
            },
            hasClass: function(n) {
                for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                    if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(ti, " ").indexOf(i) >= 0) return !0;
                return !1
            },
            val: function(n) {
                var u, r, e, f = this[0];
                return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
                    var f, o = i(this);
                    this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                        return n == null ? "" : n + ""
                    })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
                })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value, typeof u == "string" ? u.replace(df, "") : u == null ? "" : u) : void 0
            }
        });
        i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = n.attributes.value;
                        return !t || t.specified ? n.value : n.text
                    }
                },
                select: {
                    get: function(n) {
                        for (var e, t, o = n.options, r = n.selectedIndex, u = n.type === "select-one" || r < 0, s = u ? null : [], h = u ? r + 1 : o.length, f = r < 0 ? h : u ? r : 0; f < h; f++)
                            if (t = o[f], (t.selected || f === r) && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                                if (e = i(t).val(), u) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(n, t) {
                        var r = i.makeArray(t);
                        return i(n).find("option").each(function() {
                            this.selected = i.inArray(i(this).val(), r) >= 0
                        }), r.length || (n.selectedIndex = -1), r
                    }
                }
            },
            attr: function(n, r, u) {
                var f, s, e, h = n.nodeType;
                if (n && h !== 3 && h !== 8 && h !== 2) {
                    if (typeof n.getAttribute === o) return i.prop(n, r, u);
                    if (s = h !== 1 || !i.isXMLDoc(n), s && (r = r.toLowerCase(), f = i.attrHooks[r] || (er.test(r) ? fr : k)), u !== t)
                        if (u === null) i.removeAttr(n, r);
                        else return f && s && "set" in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u);
                    else return f && s && "get" in f && (e = f.get(n, r)) !== null ? e : (typeof n.getAttribute !== o && (e = n.getAttribute(r)), e == null ? t : e)
                }
            },
            removeAttr: function(n, t) {
                var r, u, e = 0,
                    f = t && t.match(s);
                if (f && n.nodeType === 1)
                    while (r = f[e++]) u = i.propFix[r] || r, er.test(r) ? !a && ii.test(r) ? n[i.camelCase("default-" + r)] = n[u] = !1 : n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(a ? r : u)
            },
            attrHooks: {
                type: {
                    set: function(n, t) {
                        if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                            var r = n.value;
                            return n.setAttribute("type", t), r && (n.value = r), t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(n, r, u) {
                var e, f, s, o = n.nodeType;
                if (n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && (e = f.get(n, r)) !== null ? e : n[r]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        var i = n.getAttributeNode("tabindex");
                        return i && i.specified ? parseInt(i.value, 10) : gf.test(n.nodeName) || ne.test(n.nodeName) && n.href ? 0 : t
                    }
                }
            }
        });
        fr = {
            get: function(n, r) {
                var u = i.prop(n, r),
                    f = typeof u == "boolean" && n.getAttribute(r),
                    e = typeof u == "boolean" ? ri && a ? f != null : ii.test(r) ? n[i.camelCase("default-" + r)] : !!f : n.getAttributeNode(r);
                return e && e.value !== !1 ? r.toLowerCase() : t
            },
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : ri && a || !ii.test(r) ? n.setAttribute(!a && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
            }
        };
        ri && a || (i.attrHooks.value = {
            get: function(n, r) {
                var u = n.getAttributeNode(r);
                return i.nodeName(n, "input") ? n.defaultValue : u && u.specified ? u.value : t
            },
            set: function(n, t, r) {
                if (i.nodeName(n, "input")) n.defaultValue = t;
                else return k && k.set(n, t, r)
            }
        });
        a || (k = i.valHooks.button = {
            get: function(n, i) {
                var r = n.getAttributeNode(i);
                return r && (i === "id" || i === "name" || i === "coords" ? r.value !== "" : r.specified) ? r.value : t
            },
            set: function(n, i, r) {
                var u = n.getAttributeNode(r);
                return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)), u.value = i += "", r === "value" || i === n.getAttribute(r) ? i : t
            }
        }, i.attrHooks.contenteditable = {
            get: k.get,
            set: function(n, t, i) {
                k.set(n, t === "" ? !1 : t, i)
            }
        }, i.each(["width", "height"], function(n, t) {
            i.attrHooks[t] = i.extend(i.attrHooks[t], {
                set: function(n, i) {
                    if (i === "") return n.setAttribute(t, "auto"), i
                }
            })
        }));
        i.support.hrefNormalized || (i.each(["href", "src", "width", "height"], function(n, r) {
            i.attrHooks[r] = i.extend(i.attrHooks[r], {
                get: function(n) {
                    var i = n.getAttribute(r, 2);
                    return i == null ? t : i
                }
            })
        }), i.each(["href", "src"], function(n, t) {
            i.propHooks[t] = {
                get: function(n) {
                    return n.getAttribute(t, 4)
                }
            }
        }));
        i.support.style || (i.attrHooks.style = {
            get: function(n) {
                return n.style.cssText || t
            },
            set: function(n, t) {
                return n.style.cssText = t + ""
            }
        });
        i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
            get: function(n) {
                var t = n.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }));
        i.support.enctype || (i.propFix.enctype = "encoding");
        i.support.checkOn || i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                get: function(n) {
                    return n.getAttribute("value") === null ? "on" : n.value
                }
            }
        });
        i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = i.extend(i.valHooks[this], {
                set: function(n, t) {
                    if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
                }
            })
        });
        var ui = /^(?:input|select|textarea)$/i,
            te = /^key/,
            ie = /^(?:mouse|contextmenu)|click/,
            or = /^(?:focusinfocus|focusoutblur)$/,
            sr = /^([^.]*)(?:\.(.+)|)$/;
        i.event = {
            global: {},
            add: function(n, r, u, f, e) {
                var b, p, k, w, c, l, a, v, h, d, g, y = i._data(n);
                if (y) {
                    for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), (p = y.events) || (p = y.events = {}), (l = y.handle) || (l = y.handle = function(n) {
                            return typeof i !== o && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(l.elem, arguments) : t
                        }, l.elem = n), r = (r || "").match(s) || [""], k = r.length; k--;) b = sr.exec(r[k]) || [], h = g = b[1], d = (b[2] || "").split(".").sort(), c = i.event.special[h] || {}, h = (e ? c.delegateType : c.bindType) || h, c = i.event.special[h] || {}, a = i.extend({
                        type: h,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: d.join(".")
                    }, w), (v = p[h]) || (v = p[h] = [], v.delegateCount = 0, c.setup && c.setup.call(n, f, d, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))), c.add && (c.add.call(n, a), a.handler.guid || (a.handler.guid = u.guid)), e ? v.splice(v.delegateCount++, 0, a) : v.push(a), i.event.global[h] = !0;
                    n = null
                }
            },
            remove: function(n, t, r, u, f) {
                var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
                if (v && (a = v.events)) {
                    for (t = (t || "").match(s) || [""], p = t.length; p--;) {
                        if (h = sr.exec(t[p]) || [], e = k = h[1], w = (h[2] || "").split(".").sort(), !e) {
                            for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                            continue
                        }
                        for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], h = h[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], (f || k === o.origType) && (!r || r.guid === o.guid) && (!h || h.test(o.namespace)) && (!u || u === o.selector || u === "**" && o.selector) && (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                        b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                    }
                    i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
                }
            },
            trigger: function(u, f, e, o) {
                var a, v, h, p, l, c, w, b = [e || r],
                    s = it.call(u, "type") ? u.type : u,
                    y = it.call(u, "namespace") ? u.namespace.split(".") : [];
                if ((h = c = e = e || r, e.nodeType !== 3 && e.nodeType !== 8) && !or.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (y = s.split("."), s = y.shift(), y.sort()), v = s.indexOf(":") < 0 && "on" + s, u = u[i.expando] ? u : new i.Event(s, typeof u == "object" && u), u.isTrigger = !0, u.namespace = y.join("."), u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u.result = t, u.target || (u.target = e), f = f == null ? [u] : i.makeArray(f, [u]), l = i.event.special[s] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                    if (!o && !l.noBubble && !i.isWindow(e)) {
                        for (p = l.delegateType || s, or.test(p + s) || (h = h.parentNode); h; h = h.parentNode) b.push(h), c = h;
                        c === (e.ownerDocument || r) && b.push(c.defaultView || c.parentWindow || n)
                    }
                    for (w = 0;
                        (h = b[w++]) && !u.isPropagationStopped();) u.type = w > 1 ? p : l.bindType || s, a = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), a && a.apply(h, f), a = v && h[v], a && i.acceptData(h) && a.apply && a.apply(h, f) === !1 && u.preventDefault();
                    if (u.type = s, !o && !u.isDefaultPrevented() && (!l._default || l._default.apply(e.ownerDocument, f) === !1) && !(s === "click" && i.nodeName(e, "a")) && i.acceptData(e) && v && e[s] && !i.isWindow(e)) {
                        c = e[v];
                        c && (e[v] = null);
                        i.event.triggered = s;
                        try {
                            e[s]()
                        } catch (k) {}
                        i.event.triggered = t;
                        c && (e[v] = c)
                    }
                    return u.result
                }
            },
            dispatch: function(n) {
                n = i.event.fix(n);
                var o, e, r, u, s, h = [],
                    c = l.call(arguments),
                    a = (i._data(this, "events") || {})[n.type] || [],
                    f = i.event.special[n.type] || {};
                if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                    for (h = i.event.handlers.call(this, n, a), o = 0;
                        (u = h[o++]) && !n.isPropagationStopped();)
                        for (n.currentTarget = u.elem, s = 0;
                            (r = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r, n.data = r.data, e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, c), e !== t && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return f.postDispatch && f.postDispatch.call(this, n), n.result
                }
            },
            handlers: function(n, r) {
                var e, o, f, s, c = [],
                    h = r.delegateCount,
                    u = n.target;
                if (h && u.nodeType && (!n.button || n.type !== "click"))
                    for (; u != this; u = u.parentNode || this)
                        if (u.nodeType === 1 && (u.disabled !== !0 || n.type !== "click")) {
                            for (f = [], s = 0; s < h; s++) o = r[s], e = o.selector + " ", f[e] === t && (f[e] = o.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length), f[e] && f.push(o);
                            f.length && c.push({
                                elem: u,
                                handlers: f
                            })
                        }
                return h < r.length && c.push({
                    elem: this,
                    handlers: r.slice(h)
                }), c
            },
            fix: function(n) {
                if (n[i.expando]) return n;
                var e, o, s, u = n.type,
                    f = n,
                    t = this.fixHooks[u];
                for (t || (this.fixHooks[u] = t = ie.test(u) ? this.mouseHooks : te.test(u) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
                return n.target || (n.target = f.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(n, t) {
                    return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(n, i) {
                    var u, o, f, e = i.button,
                        s = i.fromElement;
                    return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, f = o.documentElement, u = o.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), n.which || e === t || (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        if (i.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== r.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (n) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === r.activeElement && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(n) {
                        n.result !== t && (n.originalEvent.returnValue = n.result)
                    }
                }
            },
            simulate: function(n, t, r, u) {
                var f = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0,
                    originalEvent: {}
                });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
                f.isDefaultPrevented() && r.preventDefault()
            }
        };
        i.removeEvent = r.removeEventListener ? function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        } : function(n, t, i) {
            var r = "on" + t;
            n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
        };
        i.Event = function(n, t) {
            if (!(this instanceof i.Event)) return new i.Event(n, t);
            n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ht : d) : this.type = n;
            t && i.extend(this, t);
            this.timeStamp = n && n.timeStamp || i.now();
            this[i.expando] = !0
        };
        i.Event.prototype = {
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function() {
                var n = this.originalEvent;
                (this.isDefaultPrevented = ht, n) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                (this.isPropagationStopped = ht, n) && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = ht;
                this.stopPropagation()
            }
        };
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                    return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        i.support.submitBubbles || (i.event.special.submit = {
            setup: function() {
                if (i.nodeName(this, "form")) return !1;
                i.event.add(this, "click._submit keypress._submit", function(n) {
                    var u = n.target,
                        r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                    r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
                        n._submit_bubble = !0
                    }), i._data(r, "submitBubbles", !0))
                })
            },
            postDispatch: function(n) {
                n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
            },
            teardown: function() {
                if (i.nodeName(this, "form")) return !1;
                i.event.remove(this, "._submit")
            }
        });
        i.support.changeBubbles || (i.event.special.change = {
            setup: function() {
                if (ui.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
                    n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), i.event.add(this, "click._change", function(n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1);
                    i.event.simulate("change", this, n, !0)
                })), !1;
                i.event.add(this, "beforeactivate._change", function(n) {
                    var t = n.target;
                    ui.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                        !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                    }), i._data(t, "changeBubbles", !0))
                })
            },
            handle: function(n) {
                var t = n.target;
                if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return i.event.remove(this, "._change"), !ui.test(this.nodeName)
            }
        });
        i.support.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var u = 0,
                f = function(n) {
                    i.event.simulate(t, n.target, i.event.fix(n), !0)
                };
            i.event.special[t] = {
                setup: function() {
                    u++ == 0 && r.addEventListener(n, f, !0)
                },
                teardown: function() {
                    --u == 0 && r.removeEventListener(n, f, !0)
                }
            }
        });
        i.fn.extend({
                on: function(n, r, u, f, e) {
                    var s, o;
                    if (typeof n == "object") {
                        typeof r != "string" && (u = u || r, r = t);
                        for (s in n) this.on(s, r, u, n[s], e);
                        return this
                    }
                    if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = d;
                    else if (!f) return this;
                    return e === 1 && (o = f, f = function(n) {
                        return i().off(n), o.apply(this, arguments)
                    }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() {
                        i.event.add(this, n, f, u, r)
                    })
                },
                one: function(n, t, i, r) {
                    return this.on(n, t, i, r, 1)
                },
                off: function(n, r, u) {
                    var f, e;
                    if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
                    if (typeof n == "object") {
                        for (e in n) this.off(e, r, n[e]);
                        return this
                    }
                    return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = d), this.each(function() {
                        i.event.remove(this, n, u, r)
                    })
                },
                bind: function(n, t, i) {
                    return this.on(n, null, t, i)
                },
                unbind: function(n, t) {
                    return this.off(n, null, t)
                },
                delegate: function(n, t, i, r) {
                    return this.on(t, n, i, r)
                },
                undelegate: function(n, t, i) {
                    return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
                },
                trigger: function(n, t) {
                    return this.each(function() {
                        i.event.trigger(n, t, this)
                    })
                },
                triggerHandler: function(n, t) {
                    var r = this[0];
                    if (r) return i.event.trigger(n, t, r, !0)
                }
            }),
            function(n, t) {
                function ti(n) {
                    return tr.test(n + "")
                }

                function ii() {
                    var n, t = [];
                    return n = function(i, u) {
                        return t.push(i += " ") > r.cacheLength && delete n[t.shift()], n[i] = u
                    }
                }

                function l(n) {
                    return n[f] = !0, n
                }

                function b(n) {
                    var t = s.createElement("div");
                    try {
                        return n(t)
                    } catch (i) {
                        return !1
                    } finally {
                        t = null
                    }
                }

                function u(n, t, i, r) {
                    var y, u, e, l, p, v, w, h, d, b;
                    if ((t ? t.ownerDocument || t : k) !== s && it(t), t = t || s, i = i || [], !n || typeof n != "string") return i;
                    if ((l = t.nodeType) !== 1 && l !== 9) return [];
                    if (!c && !r) {
                        if (y = ir.exec(n))
                            if (e = y[1]) {
                                if (l === 9)
                                    if (u = t.getElementById(e), u && u.parentNode) {
                                        if (u.id === e) return i.push(u), i
                                    } else return i;
                                else if (t.ownerDocument && (u = t.ownerDocument.getElementById(e)) && et(t, u) && u.id === e) return i.push(u), i
                            } else {
                                if (y[2]) return ut.apply(i, ft.call(t.getElementsByTagName(n), 0)), i;
                                if ((e = y[3]) && o.getByClassName && t.getElementsByClassName) return ut.apply(i, ft.call(t.getElementsByClassName(e), 0)), i
                            }
                        if (o.qsa && !a.test(n)) {
                            if (w = !0, h = f, d = t, b = l === 9 && n, l === 1 && t.nodeName.toLowerCase() !== "object") {
                                for (v = yt(n), (w = t.getAttribute("id")) ? h = w.replace(fr, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", p = v.length; p--;) v[p] = h + pt(v[p]);
                                d = ni.test(n) && t.parentNode || t;
                                b = v.join(",")
                            }
                            if (b) try {
                                return ut.apply(i, ft.call(d.querySelectorAll(b), 0)), i
                            } catch (g) {} finally {
                                w || t.removeAttribute("id")
                            }
                        }
                    }
                    return lr(n.replace(at, "$1"), t, i, r)
                }

                function yi(n, t) {
                    var i = t && n,
                        r = i && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                    if (r) return r;
                    if (i)
                        while (i = i.nextSibling)
                            if (i === t) return -1;
                    return n ? 1 : -1
                }

                function or(n) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return i === "input" && t.type === n
                    }
                }

                function sr(n) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return (i === "input" || i === "button") && t.type === n
                    }
                }

                function g(n) {
                    return l(function(t) {
                        return t = +t, l(function(i, r) {
                            for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                        })
                    })
                }

                function yt(n, t) {
                    var e, f, s, o, i, h, c, l = hi[n + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (i = n, h = [], c = r.preFilter; i;) {
                        (!e || (f = ki.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(s = []));
                        e = !1;
                        (f = di.exec(i)) && (e = f.shift(), s.push({
                            value: e,
                            type: f[0].replace(at, " ")
                        }), i = i.slice(e.length));
                        for (o in r.filter)(f = vt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                            value: e,
                            type: o,
                            matches: f
                        }), i = i.slice(e.length));
                        if (!e) break
                    }
                    return t ? i.length : i ? u.error(n) : hi(n, h).slice(0)
                }

                function pt(n) {
                    for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
                    return i
                }

                function ri(n, t, i) {
                    var r = t.dir,
                        u = i && r === "parentNode",
                        e = wi++;
                    return t.first ? function(t, i, f) {
                        while (t = t[r])
                            if (t.nodeType === 1 || u) return n(t, i, f)
                    } : function(t, i, o) {
                        var h, s, c, l = v + " " + e;
                        if (o) {
                            while (t = t[r])
                                if ((t.nodeType === 1 || u) && n(t, i, o)) return !0
                        } else
                            while (t = t[r])
                                if (t.nodeType === 1 || u)
                                    if (c = t[f] || (t[f] = {}), (s = c[r]) && s[0] === l) {
                                        if ((h = s[1]) === !0 || h === ot) return h === !0
                                    } else if (s = c[r] = [l], s[1] = n(t, i, o) || ot, s[1] === !0) return !0
                    }
                }

                function ui(n) {
                    return n.length > 1 ? function(t, i, r) {
                        for (var u = n.length; u--;)
                            if (!n[u](t, i, r)) return !1;
                        return !0
                    } : n[0]
                }

                function wt(n, t, i, r, u) {
                    for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                    return o
                }

                function fi(n, t, i, r, u, e) {
                    return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                        var l, c, a, p = [],
                            y = [],
                            w = e.length,
                            b = f || cr(t || "*", o.nodeType ? [o] : o, []),
                            v = n && (f || !t) ? wt(b, p, n, o, s) : b,
                            h = i ? u || (f ? n : w || r) ? [] : e : v;
                        if (i && i(v, h, o, s), r)
                            for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                        if (f) {
                            if (u || n) {
                                if (u) {
                                    for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                    u(null, h = [], l, s)
                                }
                                for (c = h.length; c--;)(a = h[c]) && (l = u ? dt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                            }
                        } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : ut.apply(e, h)
                    })
                }

                function ei(n) {
                    for (var s, u, i, o = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = ri(function(n) {
                            return n === s
                        }, c, !0), a = ri(function(n) {
                            return dt.call(s, n) > -1
                        }, c, !0), e = [function(n, t, i) {
                            return !h && (i || t !== ht) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                        }]; t < o; t++)
                        if (u = r.relative[n[t].type]) e = [ri(ui(e), u)];
                        else {
                            if (u = r.filter[n[t].type].apply(null, n[t].matches), u[f]) {
                                for (i = ++t; i < o; i++)
                                    if (r.relative[n[i].type]) break;
                                return fi(t > 1 && ui(e), t > 1 && pt(n.slice(0, t - 1)).replace(at, "$1"), u, t < i && ei(n.slice(t, i)), i < o && ei(n = n.slice(i)), i < o && pt(n))
                            }
                            e.push(u)
                        }
                    return ui(e)
                }

                function hr(n, t) {
                    var f = 0,
                        i = t.length > 0,
                        e = n.length > 0,
                        o = function(o, h, c, l, a) {
                            var p, d, b, w = [],
                                k = 0,
                                y = "0",
                                g = o && [],
                                nt = a != null,
                                tt = ht,
                                rt = o || e && r.find.TAG("*", a && h.parentNode || h),
                                it = v += tt == null ? 1 : Math.random() || .1;
                            for (nt && (ht = h !== s && h, ot = f);
                                (p = rt[y]) != null; y++) {
                                if (e && p) {
                                    for (d = 0; b = n[d++];)
                                        if (b(p, h, c)) {
                                            l.push(p);
                                            break
                                        }
                                    nt && (v = it, ot = ++f)
                                }
                                i && ((p = !b && p) && k--, o && g.push(p))
                            }
                            if (k += y, i && y !== k) {
                                for (d = 0; b = t[d++];) b(g, w, h, c);
                                if (o) {
                                    if (k > 0)
                                        while (y--) g[y] || w[y] || (w[y] = bi.call(l));
                                    w = wt(w)
                                }
                                ut.apply(l, w);
                                nt && !o && w.length > 0 && k + t.length > 1 && u.uniqueSort(l)
                            }
                            return nt && (v = it, ht = tt), g
                        };
                    return i ? l(o) : o
                }

                function cr(n, t, i) {
                    for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                    return i
                }

                function lr(n, t, i, u) {
                    var o, f, e, h, l, s = yt(n);
                    if (!u && s.length === 1) {
                        if (f = s[0] = s[0].slice(0), f.length > 2 && (e = f[0]).type === "ID" && t.nodeType === 9 && !c && r.relative[f[1].type]) {
                            if (t = r.find.ID(e.matches[0].replace(p, w), t)[0], !t) return i;
                            n = n.slice(f.shift().value.length)
                        }
                        for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                            if (e = f[o], r.relative[h = e.type]) break;
                            if ((l = r.find[h]) && (u = l(e.matches[0].replace(p, w), ni.test(f[0].type) && t.parentNode || t))) {
                                if (f.splice(o, 1), n = u.length && pt(f), !n) return ut.apply(i, ft.call(u, 0)), i;
                                break
                            }
                        }
                    }
                    return bt(n, s)(u, t, c, i, ni.test(n)), i
                }

                function pi() {}
                var nt, ot, r, st, oi, bt, tt, ht, it, s, h, c, a, rt, ct, et, kt, f = "sizzle" + -new Date,
                    k = n.document,
                    o = {},
                    v = 0,
                    wi = 0,
                    si = ii(),
                    hi = ii(),
                    ci = ii(),
                    y = typeof t,
                    li = -2147483648,
                    lt = [],
                    bi = lt.pop,
                    ut = lt.push,
                    ft = lt.slice,
                    dt = lt.indexOf || function(n) {
                        for (var t = 0, i = this.length; t < i; t++)
                            if (this[t] === n) return t;
                        return -1
                    },
                    e = "[\\x20\\t\\r\\n\\f]",
                    d = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ai = d.replace("w", "w#"),
                    vi = "\\[" + e + "*(" + d + ")" + e + "*(?:([*^$|!~]?=)" + e + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ai + ")|)|)" + e + "*\\]",
                    gt = ":(" + d + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + vi.replace(3, 8) + ")*)|.*)\\)|)",
                    at = new RegExp("^" + e + "+|((?:^|[^\\\\])(?:\\\\.)*)" + e + "+$", "g"),
                    ki = new RegExp("^" + e + "*," + e + "*"),
                    di = new RegExp("^" + e + "*([\\x20\\t\\r\\n\\f>+~])" + e + "*"),
                    gi = new RegExp(gt),
                    nr = new RegExp("^" + ai + "$"),
                    vt = {
                        ID: new RegExp("^#(" + d + ")"),
                        CLASS: new RegExp("^\\.(" + d + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + d + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + d.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + vi),
                        PSEUDO: new RegExp("^" + gt),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + e + "*(even|odd|(([+-]|)(\\d*)n|)" + e + "*(?:([+-]|)" + e + "*(\\d+)|))" + e + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + e + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + e + "*((?:-\\d)?\\d*)" + e + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ni = /[\x20\t\r\n\f]*[+~]/,
                    tr = /^[^{]+\{\s*\[native code/,
                    ir = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    rr = /^(?:input|select|textarea|button)$/i,
                    ur = /^h\d$/i,
                    fr = /'|\\/g,
                    er = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    p = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    w = function(n, t) {
                        var i = "0x" + t - 65536;
                        return i !== i ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320)
                    };
                try {
                    ft.call(k.documentElement.childNodes, 0)[0].nodeType
                } catch (ar) {
                    ft = function(n) {
                        for (var t, i = []; t = this[n++];) i.push(t);
                        return i
                    }
                }
                oi = u.isXML = function(n) {
                    var t = n && (n.ownerDocument || n).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                };
                it = u.setDocument = function(n) {
                    var i = n ? n.ownerDocument || n : k;
                    return i === s || i.nodeType !== 9 || !i.documentElement ? s : (s = i, h = i.documentElement, c = oi(i), o.tagNameNoComments = b(function(n) {
                        return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                    }), o.attributes = b(function(n) {
                        n.innerHTML = "<select><\/select>";
                        var t = typeof n.lastChild.getAttribute("multiple");
                        return t !== "boolean" && t !== "string"
                    }), o.getByClassName = b(function(n) {
                        return (n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>", !n.getElementsByClassName || !n.getElementsByClassName("e").length) ? !1 : (n.lastChild.className = "e", n.getElementsByClassName("e").length === 2)
                    }), o.getByName = b(function(n) {
                        n.id = f + 0;
                        n.innerHTML = "<a name='" + f + "'><\/a><div name='" + f + "'><\/div>";
                        h.insertBefore(n, h.firstChild);
                        var t = i.getElementsByName && i.getElementsByName(f).length === 2 + i.getElementsByName(f + 0).length;
                        return o.getIdNotName = !i.getElementById(f), h.removeChild(n), t
                    }), r.attrHandle = b(function(n) {
                        return n.innerHTML = "<a href='#'><\/a>", n.firstChild && typeof n.firstChild.getAttribute !== y && n.firstChild.getAttribute("href") === "#"
                    }) ? {} : {
                        href: function(n) {
                            return n.getAttribute("href", 2)
                        },
                        type: function(n) {
                            return n.getAttribute("type")
                        }
                    }, o.getIdNotName ? (r.find.ID = function(n, t) {
                        if (typeof t.getElementById !== y && !c) {
                            var i = t.getElementById(n);
                            return i && i.parentNode ? [i] : []
                        }
                    }, r.filter.ID = function(n) {
                        var t = n.replace(p, w);
                        return function(n) {
                            return n.getAttribute("id") === t
                        }
                    }) : (r.find.ID = function(n, i) {
                        if (typeof i.getElementById !== y && !c) {
                            var r = i.getElementById(n);
                            return r ? r.id === n || typeof r.getAttributeNode !== y && r.getAttributeNode("id").value === n ? [r] : t : []
                        }
                    }, r.filter.ID = function(n) {
                        var t = n.replace(p, w);
                        return function(n) {
                            var i = typeof n.getAttributeNode !== y && n.getAttributeNode("id");
                            return i && i.value === t
                        }
                    }), r.find.TAG = o.tagNameNoComments ? function(n, t) {
                        if (typeof t.getElementsByTagName !== y) return t.getElementsByTagName(n)
                    } : function(n, t) {
                        var i, r = [],
                            f = 0,
                            u = t.getElementsByTagName(n);
                        if (n === "*") {
                            while (i = u[f++]) i.nodeType === 1 && r.push(i);
                            return r
                        }
                        return u
                    }, r.find.NAME = o.getByName && function(n, t) {
                        if (typeof t.getElementsByName !== y) return t.getElementsByName(name)
                    }, r.find.CLASS = o.getByClassName && function(n, t) {
                        if (typeof t.getElementsByClassName !== y && !c) return t.getElementsByClassName(n)
                    }, rt = [], a = [":focus"], (o.qsa = ti(i.querySelectorAll)) && (b(function(n) {
                        n.innerHTML = "<select><option selected=''><\/option><\/select>";
                        n.querySelectorAll("[selected]").length || a.push("\\[" + e + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                        n.querySelectorAll(":checked").length || a.push(":checked")
                    }), b(function(n) {
                        n.innerHTML = "<input type='hidden' i=''/>";
                        n.querySelectorAll("[i^='']").length && a.push("[*^$]=" + e + "*(?:\"\"|'')");
                        n.querySelectorAll(":enabled").length || a.push(":enabled", ":disabled");
                        n.querySelectorAll("*,:x");
                        a.push(",.*:")
                    })), (o.matchesSelector = ti(ct = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && b(function(n) {
                        o.disconnectedMatch = ct.call(n, "div");
                        ct.call(n, "[s!='']:x");
                        rt.push("!=", gt)
                    }), a = new RegExp(a.join("|")), rt = new RegExp(rt.join("|")), et = ti(h.contains) || h.compareDocumentPosition ? function(n, t) {
                        var r = n.nodeType === 9 ? n.documentElement : n,
                            i = t && t.parentNode;
                        return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
                    } : function(n, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === n) return !0;
                        return !1
                    }, kt = h.compareDocumentPosition ? function(n, t) {
                        var r;
                        return n === t ? (tt = !0, 0) : (r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t)) ? r & 1 || n.parentNode && n.parentNode.nodeType === 11 ? n === i || et(k, n) ? -1 : t === i || et(k, t) ? 1 : 0 : r & 4 ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
                    } : function(n, t) {
                        var r, u = 0,
                            o = n.parentNode,
                            s = t.parentNode,
                            f = [n],
                            e = [t];
                        if (n === t) return tt = !0, 0;
                        if (o && s) {
                            if (o === s) return yi(n, t)
                        } else return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : 0;
                        for (r = n; r = r.parentNode;) f.unshift(r);
                        for (r = t; r = r.parentNode;) e.unshift(r);
                        while (f[u] === e[u]) u++;
                        return u ? yi(f[u], e[u]) : f[u] === k ? -1 : e[u] === k ? 1 : 0
                    }, tt = !1, [0, 0].sort(kt), o.detectDuplicates = tt, s)
                };
                u.matches = function(n, t) {
                    return u(n, null, null, t)
                };
                u.matchesSelector = function(n, t) {
                    if ((n.ownerDocument || n) !== s && it(n), t = t.replace(er, "='$1']"), o.matchesSelector && !c && (!rt || !rt.test(t)) && !a.test(t)) try {
                        var i = ct.call(n, t);
                        if (i || o.disconnectedMatch || n.document && n.document.nodeType !== 11) return i
                    } catch (r) {}
                    return u(t, s, null, [n]).length > 0
                };
                u.contains = function(n, t) {
                    return (n.ownerDocument || n) !== s && it(n), et(n, t)
                };
                u.attr = function(n, t) {
                    var i;
                    return ((n.ownerDocument || n) !== s && it(n), c || (t = t.toLowerCase()), i = r.attrHandle[t]) ? i(n) : c || o.attributes ? n.getAttribute(t) : ((i = n.getAttributeNode(t)) || n.getAttribute(t)) && n[t] === !0 ? t : i && i.specified ? i.value : null
                };
                u.error = function(n) {
                    throw new Error("Syntax error, unrecognized expression: " + n);
                };
                u.uniqueSort = function(n) {
                    var r, u = [],
                        t = 1,
                        i = 0;
                    if (tt = !o.detectDuplicates, n.sort(kt), tt) {
                        for (; r = n[t]; t++) r === n[t - 1] && (i = u.push(t));
                        while (i--) n.splice(u[i], 1)
                    }
                    return n
                };
                st = u.getText = function(n) {
                    var r, i = "",
                        u = 0,
                        t = n.nodeType;
                    if (t) {
                        if (t === 1 || t === 9 || t === 11) {
                            if (typeof n.textContent == "string") return n.textContent;
                            for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                        } else if (t === 3 || t === 4) return n.nodeValue
                    } else
                        for (; r = n[u]; u++) i += st(r);
                    return i
                };
                r = u.selectors = {
                    cacheLength: 50,
                    createPseudo: l,
                    match: vt,
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
                        ATTR: function(n) {
                            return n[1] = n[1].replace(p, w), n[3] = (n[4] || n[5] || "").replace(p, w), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                        },
                        CHILD: function(n) {
                            return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), n
                        },
                        PSEUDO: function(n) {
                            var i, t = !n[5] && n[2];
                            return vt.CHILD.test(n[0]) ? null : (n[4] ? n[2] = n[4] : t && gi.test(t) && (i = yt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(n) {
                            return n === "*" ? function() {
                                return !0
                            } : (n = n.replace(p, w).toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === n
                            })
                        },
                        CLASS: function(n) {
                            var t = si[n + " "];
                            return t || (t = new RegExp("(^|" + e + ")" + n + "(" + e + "|$)")) && si(n, function(n) {
                                return t.test(n.className || typeof n.getAttribute !== y && n.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, t, i) {
                            return function(r) {
                                var f = u.attr(r, n);
                                return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(n, t, i, r, u) {
                            var s = n.slice(0, 3) !== "nth",
                                o = n.slice(-4) !== "last",
                                e = t === "of-type";
                            return r === 1 && u === 0 ? function(n) {
                                return !!n.parentNode
                            } : function(t, i, h) {
                                var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                                    p = t.parentNode,
                                    g = e && t.nodeName.toLowerCase(),
                                    d = !h && !e;
                                if (p) {
                                    if (s) {
                                        while (b) {
                                            for (c = t; c = c[b];)
                                                if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                            w = b = n === "only" && !w && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                        for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                            if (c.nodeType === 1 && ++l && c === t) {
                                                k[n] = [v, y, l];
                                                break
                                            }
                                    } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v) l = a[1];
                                    else
                                        while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                            if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t)) break; return l -= u, l === r || l % r == 0 && l / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(n, t) {
                            var e, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                            return i[f] ? i(t) : i.length > 1 ? (e = [n, n, "", t], r.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, r) {
                                for (var u, f = i(n, t), e = f.length; e--;) u = dt.call(n, f[e]), n[u] = !(r[u] = f[e])
                            }) : function(n) {
                                return i(n, 0, e)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: l(function(n) {
                            var i = [],
                                r = [],
                                t = bt(n.replace(at, "$1"));
                            return t[f] ? l(function(n, i, r, u) {
                                for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                            }) : function(n, u, f) {
                                return i[0] = n, t(i, null, f, r), !r.pop()
                            }
                        }),
                        has: l(function(n) {
                            return function(t) {
                                return u(n, t).length > 0
                            }
                        }),
                        contains: l(function(n) {
                            return function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                        }),
                        lang: l(function(n) {
                            return nr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(p, w).toLowerCase(),
                                function(t) {
                                    var i;
                                    do
                                        if (i = c ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0;
                                    while ((t = t.parentNode) && t.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var i = n.location && n.location.hash;
                            return i && i.slice(1) === t.id
                        },
                        root: function(n) {
                            return n === h
                        },
                        focus: function(n) {
                            return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                        },
                        enabled: function(n) {
                            return n.disabled === !1
                        },
                        disabled: function(n) {
                            return n.disabled === !0
                        },
                        checked: function(n) {
                            var t = n.nodeName.toLowerCase();
                            return t === "input" && !!n.checked || t === "option" && !!n.selected
                        },
                        selected: function(n) {
                            return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                        },
                        empty: function(n) {
                            for (n = n.firstChild; n; n = n.nextSibling)
                                if (n.nodeName > "@" || n.nodeType === 3 || n.nodeType === 4) return !1;
                            return !0
                        },
                        parent: function(n) {
                            return !r.pseudos.empty(n)
                        },
                        header: function(n) {
                            return ur.test(n.nodeName)
                        },
                        input: function(n) {
                            return rr.test(n.nodeName)
                        },
                        button: function(n) {
                            var t = n.nodeName.toLowerCase();
                            return t === "input" && n.type === "button" || t === "button"
                        },
                        text: function(n) {
                            var t;
                            return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === n.type)
                        },
                        first: g(function() {
                            return [0]
                        }),
                        last: g(function(n, t) {
                            return [t - 1]
                        }),
                        eq: g(function(n, t, i) {
                            return [i < 0 ? i + t : i]
                        }),
                        even: g(function(n, t) {
                            for (var i = 0; i < t; i += 2) n.push(i);
                            return n
                        }),
                        odd: g(function(n, t) {
                            for (var i = 1; i < t; i += 2) n.push(i);
                            return n
                        }),
                        lt: g(function(n, t, i) {
                            for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                            return n
                        }),
                        gt: g(function(n, t, i) {
                            for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                            return n
                        })
                    }
                };
                for (nt in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[nt] = or(nt);
                for (nt in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[nt] = sr(nt);
                bt = u.compile = function(n, t) {
                    var r, u = [],
                        e = [],
                        i = ci[n + " "];
                    if (!i) {
                        for (t || (t = yt(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                        i = ci(n, hr(e, u))
                    }
                    return i
                };
                r.pseudos.nth = r.pseudos.eq;
                r.filters = pi.prototype = r.pseudos;
                r.setFilters = new pi;
                it();
                u.attr = i.attr;
                i.find = u;
                i.expr = u.selectors;
                i.expr[":"] = i.expr.pseudos;
                i.unique = u.uniqueSort;
                i.text = u.getText;
                i.isXMLDoc = u.isXML;
                i.contains = u.contains
            }(n);
        var re = /Until$/,
            ue = /^(?:parents|prev(?:Until|All))/,
            fe = /^.[^:#\[\.,]*$/,
            hr = i.expr.match.needsContext,
            ee = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        i.fn.extend({
            find: function(n) {
                var t, r, f, u = this.length;
                if (typeof n != "string") return f = this, this.pushStack(i(n).filter(function() {
                    for (t = 0; t < u; t++)
                        if (i.contains(f[t], this)) return !0
                }));
                for (r = [], t = 0; t < u; t++) i.find(n, this[t], r);
                return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = (this.selector ? this.selector + " " : "") + n, r
            },
            has: function(n) {
                var t, r = i(n, this),
                    u = r.length;
                return this.filter(function() {
                    for (t = 0; t < u; t++)
                        if (i.contains(this, r[t])) return !0
                })
            },
            not: function(n) {
                return this.pushStack(lr(this, n, !1))
            },
            filter: function(n) {
                return this.pushStack(lr(this, n, !0))
            },
            is: function(n) {
                return !!n && (typeof n == "string" ? hr.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
            },
            closest: function(n, t) {
                for (var r, f = 0, o = this.length, u = [], e = hr.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                    for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11;) {
                        if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                            u.push(r);
                            break
                        }
                        r = r.parentNode
                    }
                return this.pushStack(u.length > 1 ? i.unique(u) : u)
            },
            index: function(n) {
                return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                var r = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                    u = i.merge(this.get(), r);
                return this.pushStack(i.unique(u))
            },
            addBack: function(n) {
                return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.fn.andSelf = i.fn.addBack;
        i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(n) {
                return i.dir(n, "parentNode")
            },
            parentsUntil: function(n, t, r) {
                return i.dir(n, "parentNode", r)
            },
            next: function(n) {
                return cr(n, "nextSibling")
            },
            prev: function(n) {
                return cr(n, "previousSibling")
            },
            nextAll: function(n) {
                return i.dir(n, "nextSibling")
            },
            prevAll: function(n) {
                return i.dir(n, "previousSibling")
            },
            nextUntil: function(n, t, r) {
                return i.dir(n, "nextSibling", r)
            },
            prevUntil: function(n, t, r) {
                return i.dir(n, "previousSibling", r)
            },
            siblings: function(n) {
                return i.sibling((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return i.sibling(n.firstChild)
            },
            contents: function(n) {
                return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return re.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !ee[n] ? i.unique(f) : f, this.length > 1 && ue.test(n) && (f = f.reverse()), this.pushStack(f)
            }
        });
        i.extend({
            filter: function(n, t, r) {
                return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
            },
            dir: function(n, r, u) {
                for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
                return e
            },
            sibling: function(n, t) {
                for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
                return i
            }
        });
        var vr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            oe = / jQuery\d+="(?:null|\d+)"/g,
            yr = new RegExp("<(?:" + vr + ")[\\s/>]", "i"),
            fi = /^\s+/,
            pr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            wr = /<([\w:]+)/,
            br = /<tbody/i,
            se = /<|&#?\w+;/,
            he = /<(?:script|style|link)/i,
            ei = /^(?:checkbox|radio)$/i,
            ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
            kr = /^$|\/(?:java|ecma)script/i,
            le = /^true\/(.*)/,
            ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            e = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                legend: [1, "<fieldset>", "<\/fieldset>"],
                area: [1, "<map>", "<\/map>"],
                param: [1, "<object>", "<\/object>"],
                thead: [1, "<table>", "<\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
            },
            ve = ar(r),
            oi = ve.appendChild(r.createElement("div"));
        e.optgroup = e.option;
        e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
        e.th = e.td;
        i.fn.extend({
            text: function(n) {
                return i.access(this, function(n) {
                    return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
                }, null, n, arguments.length)
            },
            wrapAll: function(n) {
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
                if (this[0]) {
                    var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]);
                    t.map(function() {
                        for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                        return n
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function() {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(n) {
                var t = i.isFunction(n);
                return this.each(function(r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(n) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(n)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(n) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(n, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            remove: function(n, t) {
                for (var r, f = 0;
                    (r = this[f]) != null; f++)(!n || i.filter(n, [r]).length > 0) && (t || r.nodeType !== 1 || i.cleanData(u(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && si(u(r, "script")), r.parentNode.removeChild(r)));
                return this
            },
            empty: function() {
                for (var n, t = 0;
                    (n = this[t]) != null; t++) {
                    for (n.nodeType === 1 && i.cleanData(u(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                    n.options && i.nodeName(n, "select") && (n.options.length = 0)
                }
                return this
            },
            clone: function(n, t) {
                return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return i.access(this, function(n) {
                    var r = this[0] || {},
                        f = 0,
                        o = this.length;
                    if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(oe, "") : t;
                    if (typeof n == "string" && !he.test(n) && (i.support.htmlSerialize || !yr.test(n)) && (i.support.leadingWhitespace || !fi.test(n)) && !e[(wr.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = n.replace(pr, "<$1><\/$2>");
                        try {
                            for (; f < o; f++) r = this[f] || {}, r.nodeType === 1 && (i.cleanData(u(r, !1)), r.innerHTML = n);
                            r = 0
                        } catch (s) {}
                    }
                    r && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function(n) {
                var t = i.isFunction(n);
                return t || typeof n == "string" || (n = i(n).not(this).detach()), this.domManip([n], !0, function(n) {
                    var r = this.nextSibling,
                        t = this.parentNode;
                    t && (i(this).remove(), t.insertBefore(n, r))
                })
            },
            detach: function(n) {
                return this.remove(n, !0)
            },
            domManip: function(n, r, f) {
                n = bi.apply([], n);
                var c, e, l, s, y, h, o = 0,
                    a = this.length,
                    w = this,
                    b = a - 1,
                    v = n[0],
                    p = i.isFunction(v);
                if (p || !(a <= 1 || typeof v != "string" || i.support.checkClone || !ce.test(v))) return this.each(function(i) {
                    var u = w.eq(i);
                    p && (n[0] = v.call(this, i, r ? u.html() : t));
                    u.domManip(n, r, f)
                });
                if (a && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), c = h.firstChild, h.childNodes.length === 1 && (h = c), c)) {
                    for (r = r && i.nodeName(c, "tr"), s = i.map(u(h, "script"), dr), l = s.length; o < a; o++) e = h, o !== b && (e = i.clone(e, !0, !0), l && i.merge(s, u(e, "script"))), f.call(r && i.nodeName(this[o], "table") ? ye(this[o], "tbody") : this[o], e, o);
                    if (l)
                        for (y = s[s.length - 1].ownerDocument, i.map(s, gr), o = 0; o < l; o++) e = s[o], kr.test(e.type || "") && !i._data(e, "globalEval") && i.contains(y, e) && (e.src ? i.ajax({
                            url: e.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : i.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ae, "")));
                    h = c = null
                }
                return this
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, t) {
            i.fn[n] = function(n) {
                for (var u, r = 0, f = [], e = i(n), o = e.length - 1; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), bt.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        i.extend({
            clone: function(n, t, r) {
                var f, h, o, e, s, c = i.contains(n.ownerDocument, n);
                if (i.support.html5Clone || i.isXMLDoc(n) || !yr.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (oi.innerHTML = n.outerHTML, oi.removeChild(o = oi.firstChild)), (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                    for (f = u(o), s = u(n), e = 0;
                        (h = s[e]) != null; ++e) f[e] && pe(h, f[e]);
                if (t)
                    if (r)
                        for (s = s || u(n), f = f || u(o), e = 0;
                            (h = s[e]) != null; e++) nu(h, f[e]);
                    else nu(n, o);
                return f = u(o, "script"), f.length > 0 && si(f, !c && u(n, "script")), f = s = h = null, o
            },
            buildFragment: function(n, t, r, f) {
                for (var h, o, w, s, y, p, l, b = n.length, a = ar(t), c = [], v = 0; v < b; v++)
                    if (o = n[v], o || o === 0)
                        if (i.type(o) === "object") i.merge(c, o.nodeType ? [o] : o);
                        else if (se.test(o)) {
                    for (s = s || a.appendChild(t.createElement("div")), y = (wr.exec(o) || ["", ""])[1].toLowerCase(), l = e[y] || e._default, s.innerHTML = l[1] + o.replace(pr, "<$1><\/$2>") + l[2], h = l[0]; h--;) s = s.lastChild;
                    if (!i.support.leadingWhitespace && fi.test(o) && c.push(t.createTextNode(fi.exec(o)[0])), !i.support.tbody)
                        for (o = y === "table" && !br.test(o) ? s.firstChild : l[1] === "<table>" && !br.test(o) ? s : 0, h = o && o.childNodes.length; h--;) i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
                    for (i.merge(c, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = a.lastChild
                } else c.push(t.createTextNode(o));
                for (s && a.removeChild(s), i.support.appendChecked || i.grep(u(c, "input"), we), v = 0; o = c[v++];)
                    if ((!f || i.inArray(o, f) === -1) && (w = i.contains(o.ownerDocument, o), s = u(a.appendChild(o), "script"), w && si(s), r))
                        for (h = 0; o = s[h++];) kr.test(o.type || "") && r.push(o);
                return s = null, a
            },
            cleanData: function(n, t) {
                for (var r, e, u, f, c = 0, s = i.expando, h = i.cache, l = i.support.deleteExpando, a = i.event.special;
                    (r = n[c]) != null; c++)
                    if ((t || i.acceptData(r)) && (u = r[s], f = u && h[u], f)) {
                        if (f.events)
                            for (e in f.events) a[e] ? i.event.remove(r, e) : i.removeEvent(r, e, f.handle);
                        h[u] && (delete h[u], l ? delete r[s] : typeof r.removeAttribute !== o ? r.removeAttribute(s) : r[s] = null, b.push(u))
                    }
            }
        });
        var rt, v, y, hi = /alpha\([^)]*\)/i,
            be = /opacity\s*=\s*([^)]*)/,
            ke = /^(top|right|bottom|left)$/,
            de = /^(none|table(?!-c[ea]).+)/,
            tu = /^margin/,
            ge = new RegExp("^(" + st + ")(.*)$", "i"),
            ct = new RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
            no = new RegExp("^([+-])=(" + st + ")", "i"),
            iu = {
                BODY: "block"
            },
            to = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ru = {
                letterSpacing: 0,
                fontWeight: 400
            },
            p = ["Top", "Right", "Bottom", "Left"],
            uu = ["Webkit", "O", "Moz", "ms"];
        i.fn.extend({
            css: function(n, r) {
                return i.access(this, function(n, r, u) {
                    var e, o, s = {},
                        f = 0;
                    if (i.isArray(r)) {
                        for (o = v(n), e = r.length; f < e; f++) s[r[f]] = i.css(n, r[f], !1, o);
                        return s
                    }
                    return u !== t ? i.style(n, r, u) : i.css(n, r)
                }, n, r, arguments.length > 1)
            },
            show: function() {
                return eu(this, !0)
            },
            hide: function() {
                return eu(this)
            },
            toggle: function(n) {
                var t = typeof n == "boolean";
                return this.each(function() {
                    (t ? n : ut(this)) ? i(this).show(): i(this).hide()
                })
            }
        });
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = y(n, "opacity");
                            return i === "" ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: i.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(n, r, u, f) {
                if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                    var o, s, e, h = i.camelCase(r),
                        c = n.style;
                    if (r = i.cssProps[h] || (i.cssProps[h] = fu(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u !== t) {
                        if (s = typeof u, s === "string" && (o = no.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), u == null || s === "number" && isNaN(u)) return;
                        if (s !== "number" || i.cssNumber[h] || (u += "px"), i.support.clearCloneStyle || u !== "" || r.indexOf("background") !== 0 || (c[r] = "inherit"), !e || !("set" in e) || (u = e.set(n, u, f)) !== t) try {
                            c[r] = u
                        } catch (l) {}
                    } else return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r]
                }
            },
            css: function(n, r, u, f) {
                var h, e, o, s = i.camelCase(r);
                return (r = i.cssProps[s] || (i.cssProps[s] = fu(n.style, s)), o = i.cssHooks[r] || i.cssHooks[s], o && "get" in o && (e = o.get(n, !0, u)), e === t && (e = y(n, r, f)), e === "normal" && r in ru && (e = ru[r]), u === "" || u) ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e
            },
            swap: function(n, t, i, r) {
                var f, u, e = {};
                for (u in t) e[u] = n.style[u], n.style[u] = t[u];
                f = i.apply(n, r || []);
                for (u in t) n.style[u] = e[u];
                return f
            }
        });
        n.getComputedStyle ? (v = function(t) {
            return n.getComputedStyle(t, null)
        }, y = function(n, r, u) {
            var s, h, c, o = u || v(n),
                e = o ? o.getPropertyValue(r) || o[r] : t,
                f = n.style;
            return o && (e !== "" || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), ct.test(e) && tu.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = s, f.minWidth = h, f.maxWidth = c)), e
        }) : r.documentElement.currentStyle && (v = function(n) {
            return n.currentStyle
        }, y = function(n, i, r) {
            var s, e, o, h = r || v(n),
                u = h ? h[i] : t,
                f = n.style;
            return u == null && f && f[i] && (u = f[i]), ct.test(u) && !ke.test(i) && (s = f.left, e = n.runtimeStyle, o = e && e.left, o && (e.left = n.currentStyle.left), f.left = i === "fontSize" ? "1em" : u, u = f.pixelLeft + "px", f.left = s, o && (e.left = o)), u === "" ? "auto" : u
        });
        i.each(["height", "width"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r, u) {
                    if (r) return n.offsetWidth === 0 && de.test(i.css(n, "display")) ? i.swap(n, to, function() {
                        return hu(n, t, u)
                    }) : hu(n, t, u)
                },
                set: function(n, r, u) {
                    var f = u && v(n);
                    return ou(n, r, u ? su(n, t, u, i.support.boxSizing && i.css(n, "boxSizing", !1, f) === "border-box", f) : 0)
                }
            }
        });
        i.support.opacity || (i.cssHooks.opacity = {
            get: function(n, t) {
                return be.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(n, t) {
                var r = n.style,
                    u = n.currentStyle,
                    e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    f = u && u.filter || r.filter || "";
                (r.zoom = 1, (t >= 1 || t === "") && i.trim(f.replace(hi, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), t === "" || u && !u.filter)) || (r.filter = hi.test(f) ? f.replace(hi, e) : f + " " + e)
            }
        });
        i(function() {
            i.support.reliableMarginRight || (i.cssHooks.marginRight = {
                get: function(n, t) {
                    if (t) return i.swap(n, {
                        display: "inline-block"
                    }, y, [n, "marginRight"])
                }
            });
            !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, t) {
                i.cssHooks[t] = {
                    get: function(n, r) {
                        if (r) return r = y(n, t), ct.test(r) ? i(n).position()[t] + "px" : r
                    }
                }
            })
        });
        i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
            return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none"
        }, i.expr.filters.visible = function(n) {
            return !i.expr.filters.hidden(n)
        });
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            tu.test(n) || (i.cssHooks[n + t].set = ou)
        });
        var io = /%20/g,
            ro = /\[\]$/,
            au = /\r?\n/g,
            uo = /^(?:submit|button|image|reset|file)$/i,
            fo = /^(?:input|select|textarea|keygen)/i;
        i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function() {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && fo.test(this.nodeName) && !uo.test(n) && (this.checked || !ei.test(n))
                }).map(function(n, t) {
                    var r = i(this).val();
                    return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace(au, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(au, "\r\n")
                    }
                }).get()
            }
        });
        i.param = function(n, r) {
            var u, f = [],
                e = function(n, t) {
                    t = i.isFunction(t) ? t() : t == null ? "" : t;
                    f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                };
            if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
                e(this.name, this.value)
            });
            else
                for (u in n) ci(u, n[u], r, e);
            return f.join("&").replace(io, "+")
        };
        i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        i.fn.hover = function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        };
        var w, c, li = i.now(),
            ai = /\?/,
            eo = /#.*$/,
            vu = /([?&])_=[^&]*/,
            oo = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            so = /^(?:GET|HEAD)$/,
            ho = /^\/\//,
            yu = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            pu = i.fn.load,
            wu = {},
            vi = {},
            bu = "*/".concat("*");
        try {
            c = ff.href
        } catch (go) {
            c = r.createElement("a");
            c.href = "";
            c = c.href
        }
        w = yu.exec(c.toLowerCase()) || [];
        i.fn.load = function(n, r, u) {
            if (typeof n != "string" && pu) return pu.apply(this, arguments);
            var f, s, h, e = this,
                o = n.indexOf(" ");
            return o >= 0 && (f = n.slice(o, n.length), n = n.slice(0, o)), i.isFunction(r) ? (u = r, r = t) : r && typeof r == "object" && (h = "POST"), e.length > 0 && i.ajax({
                url: n,
                type: h,
                dataType: "html",
                data: r
            }).done(function(n) {
                s = arguments;
                e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
            }).complete(u && function(n, t) {
                e.each(u, s || [n.responseText, t, n])
            }), this
        };
        i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        });
        i.each(["get", "post"], function(n, r) {
            i[r] = function(n, u, f, e) {
                return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                    url: n,
                    type: r,
                    dataType: e,
                    data: u,
                    success: f
                })
            }
        });
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: c,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(w[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": bu,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": n.String,
                    "text html": !0,
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, t) {
                return t ? yi(yi(n, i.ajaxSettings), t) : yi(i.ajaxSettings, n)
            },
            ajaxPrefilter: ku(wu),
            ajaxTransport: ku(vi),
            ajax: function(n, r) {
                function k(n, r, s, c) {
                    var l, k, w, rt, p, a = r;
                    o !== 2 && (o = 2, g && clearTimeout(g), v = t, d = c || "", f.readyState = n > 0 ? 4 : 0, s && (rt = co(u, f, s)), n >= 200 && n < 300 || n === 304 ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), p && (i.lastModified[e] = p), p = f.getResponseHeader("etag"), p && (i.etag[e] = p)), n === 204 ? (l = !0, a = "nocontent") : n === 304 ? (l = !0, a = "notmodified") : (l = lo(u, rt), a = l.state, k = l.data, w = l.error, l = !w)) : (w = a, (n || !a) && (a = "error", n < 0 && (n = 0))), f.status = n, f.statusText = (r || a) + "", l ? tt.resolveWith(h, [k, a, f]) : tt.rejectWith(h, [f, a, w]), f.statusCode(b), b = t, y && nt.trigger(l ? "ajaxSuccess" : "ajaxError", [f, u, l ? k : w]), it.fireWith(h, [f, a]), y && (nt.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
                }
                typeof n == "object" && (r = n, n = t);
                r = r || {};
                var l, a, e, d, g, y, v, p, u = i.ajaxSetup({}, r),
                    h = u.context || u,
                    nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                    tt = i.Deferred(),
                    it = i.Callbacks("once memory"),
                    b = u.statusCode || {},
                    rt = {},
                    ut = {},
                    o = 0,
                    ft = "canceled",
                    f = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (o === 2) {
                                if (!p)
                                    for (p = {}; t = oo.exec(d);) p[t[1].toLowerCase()] = t[2];
                                t = p[n.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return o === 2 ? d : null
                        },
                        setRequestHeader: function(n, t) {
                            var i = n.toLowerCase();
                            return o || (n = ut[i] = ut[i] || n, rt[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return o || (u.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (o < 2)
                                    for (t in n) b[t] = [b[t], n[t]];
                                else f.always(n[f.status]);
                            return this
                        },
                        abort: function(n) {
                            var t = n || ft;
                            return v && v.abort(t), k(0, t), this
                        }
                    };
                if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || c) + "").replace(eo, "").replace(ho, w[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""], u.crossDomain == null && (l = yu.exec(u.url.toLowerCase()), u.crossDomain = !!(l && (l[1] !== w[1] || l[2] !== w[2] || (l[3] || (l[1] === "http:" ? 80 : 443)) != (w[3] || (w[1] === "http:" ? 80 : 443))))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), du(wu, u, r, f), o === 2) return f;
                y = u.global;
                y && i.active++ == 0 && i.event.trigger("ajaxStart");
                u.type = u.type.toUpperCase();
                u.hasContent = !so.test(u.type);
                e = u.url;
                u.hasContent || (u.data && (e = u.url += (ai.test(e) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = vu.test(e) ? e.replace(vu, "$1_=" + li++) : e + (ai.test(e) ? "&" : "?") + "_=" + li++));
                u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
                (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
                f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + bu + "; q=0.01" : "") : u.accepts["*"]);
                for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
                if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || o === 2)) return f.abort();
                ft = "abort";
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) f[a](u[a]);
                if (v = du(vi, u, r, f), v) {
                    f.readyState = 1;
                    y && nt.trigger("ajaxSend", [f, u]);
                    u.async && u.timeout > 0 && (g = setTimeout(function() {
                        f.abort("timeout")
                    }, u.timeout));
                    try {
                        o = 1;
                        v.send(rt, k)
                    } catch (et) {
                        if (o < 2) k(-1, et);
                        else throw et;
                    }
                } else k(-1, "No Transport");
                return f
            },
            getScript: function(n, r) {
                return i.get(n, t, r, "script")
            },
            getJSON: function(n, t, r) {
                return i.get(n, t, r, "json")
            }
        });
        i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        });
        i.ajaxPrefilter("script", function(n) {
            n.cache === t && (n.cache = !1);
            n.crossDomain && (n.type = "GET", n.global = !1)
        });
        i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var u, f = r.head || i("head")[0] || r.documentElement;
                return {
                    send: function(t, i) {
                        u = r.createElement("script");
                        u.async = !0;
                        n.scriptCharset && (u.charset = n.scriptCharset);
                        u.src = n.url;
                        u.onload = u.onreadystatechange = function(n, t) {
                            (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, u.parentNode && u.parentNode.removeChild(u), u = null, t || i(200, "success"))
                        };
                        f.insertBefore(u, f.firstChild)
                    },
                    abort: function() {
                        if (u) u.onload(t, !0)
                    }
                }
            }
        });
        pi = [];
        lt = /(=)\?(?=&|$)|\?\?/;
        i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = pi.pop() || i.expando + "_" + li++;
                return this[n] = !0, n
            }
        });
        i.ajaxPrefilter("json jsonp", function(r, u, f) {
            var e, s, o, h = r.jsonp !== !1 && (lt.test(r.url) ? "url" : typeof r.data == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && lt.test(r.data) && "data");
            if (h || r.dataTypes[0] === "jsonp") return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(lt, "$1" + e) : r.jsonp !== !1 && (r.url += (ai.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
                return o || i.error(e + " was not called"), o[0]
            }, r.dataTypes[0] = "json", s = n[e], n[e] = function() {
                o = arguments
            }, f.always(function() {
                n[e] = s;
                r[e] && (r.jsonpCallback = u.jsonpCallback, pi.push(e));
                o && i.isFunction(s) && s(o[0]);
                o = s = t
            }), "script"
        });
        gu = 0;
        at = n.ActiveXObject && function() {
            var n;
            for (n in g) g[n](t, !0)
        };
        i.ajaxSettings.xhr = n.ActiveXObject ? function() {
            return !this.isLocal && nf() || ao()
        } : nf;
        nt = i.ajaxSettings.xhr();
        i.support.cors = !!nt && "withCredentials" in nt;
        nt = i.support.ajax = !!nt;
        nt && i.ajaxTransport(function(r) {
            if (!r.crossDomain || i.support.cors) {
                var u;
                return {
                    send: function(f, e) {
                        var h, s, o = r.xhr();
                        if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                            for (s in r.xhrFields) o[s] = r.xhrFields[s];
                        r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                        r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in f) o.setRequestHeader(s, f[s])
                        } catch (c) {}
                        o.send(r.hasContent && r.data || null);
                        u = function(n, f) {
                            var s, a, l, c;
                            try {
                                if (u && (f || o.readyState === 4))
                                    if (u = t, h && (o.onreadystatechange = i.noop, at && delete g[h]), f) o.readyState !== 4 && o.abort();
                                    else {
                                        c = {};
                                        s = o.status;
                                        a = o.getAllResponseHeaders();
                                        typeof o.responseText == "string" && (c.text = o.responseText);
                                        try {
                                            l = o.statusText
                                        } catch (y) {
                                            l = ""
                                        }
                                        s || !r.isLocal || r.crossDomain ? s === 1223 && (s = 204) : s = c.text ? 200 : 404
                                    }
                            } catch (v) {
                                f || e(-1, v)
                            }
                            c && e(s, l, c, a)
                        };
                        r.async ? o.readyState === 4 ? setTimeout(u) : (h = ++gu, at && (g || (g = {}, i(n).unload(at)), g[h] = u), o.onreadystatechange = u) : u()
                    },
                    abort: function() {
                        u && u(t, !0)
                    }
                }
            }
        });
        var tt, vt, vo = /^(?:toggle|show|hide)$/,
            yo = new RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
            po = /queueHooks$/,
            yt = [ko],
            ft = {
                "*": [function(n, t) {
                    var o, s, r = this.createTween(n, t),
                        e = yo.exec(t),
                        h = r.cur(),
                        u = +h || 0,
                        f = 1,
                        c = 20;
                    if (e) {
                        if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), s !== "px" && u) {
                            u = i.css(r.elem, n, !0) || o || 1;
                            do f = f || ".5", u = u / f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && f !== 1 && --c)
                        }
                        r.unit = s;
                        r.start = u;
                        r.end = e[1] ? u + (e[1] + 1) * o : o
                    }
                    return r
                }]
            };
        i.Animation = i.extend(rf, {
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
                for (var r, u = 0, f = n.length; u < f; u++) r = n[u], ft[r] = ft[r] || [], ft[r].unshift(t)
            },
            prefilter: function(n, t) {
                t ? yt.unshift(n) : yt.push(n)
            }
        });
        i.Tween = f;
        f.prototype = {
            constructor: f,
            init: function(n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || "swing";
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = f.propHooks[this.prop];
                return n && n.get ? n.get(this) : f.propHooks._default.get(this)
            },
            run: function(n) {
                var t, r = f.propHooks[this.prop];
                return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : f.propHooks._default.set(this), this
            }
        };
        f.prototype.init.prototype = f.prototype;
        f.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
                }
            }
        };
        f.propHooks.scrollTop = f.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(pt(t, !0), n, i, u)
            }
        });
        i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(ut).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, r, u) {
                var o = i.isEmptyObject(n),
                    e = i.speed(t, r, u),
                    f = function() {
                        var t = rf(this, i.extend({}, n), e);
                        f.finish = function() {
                            t.stop(!0)
                        };
                        (o || i._data(this, "finish")) && t.stop(!0)
                    };
                return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
            },
            stop: function(n, r, u) {
                var f = function(n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u)
                };
                return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var o = !0,
                        t = n != null && n + "queueHooks",
                        e = i.timers,
                        r = i._data(this);
                    if (t) r[t] && r[t].stop && f(r[t]);
                    else
                        for (t in r) r[t] && r[t].stop && po.test(t) && f(r[t]);
                    for (t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u), o = !1, e.splice(t, 1));
                    (o || !u) && i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, f = i._data(this),
                        r = f[n + "queue"],
                        e = f[n + "queueHooks"],
                        u = i.timers,
                        o = r ? r.length : 0;
                    for (f.finish = !0, i.queue(this, n, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                    for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete f.finish
                })
            }
        });
        i.each({
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.speed = function(n, t, r) {
            var u = n && typeof n == "object" ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            }
        };
        i.timers = [];
        i.fx = f.prototype.init;
        i.fx.tick = function() {
            var u, n = i.timers,
                r = 0;
            for (tt = i.now(); r < n.length; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
            n.length || i.fx.stop();
            tt = t
        };
        i.fx.timer = function(n) {
            n() && i.timers.push(n) && i.fx.start()
        };
        i.fx.interval = 13;
        i.fx.start = function() {
            vt || (vt = setInterval(i.fx.tick, i.fx.interval))
        };
        i.fx.stop = function() {
            clearInterval(vt);
            vt = null
        };
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        i.fx.step = {};
        i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        });
        i.fn.offset = function(n) {
            if (arguments.length) return n === t ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, e, f = {
                    top: 0,
                    left: 0
                },
                u = this[0],
                s = u && u.ownerDocument;
            if (s) return (r = s.documentElement, !i.contains(r, u)) ? f : (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()), e = uf(s), {
                top: f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0),
                left: f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
            })
        };
        i.offset = {
            setOffset: function(n, t, r) {
                var f = i.css(n, "position");
                f === "static" && (n.style.position = "relative");
                var e = i(n),
                    o = e.offset(),
                    l = i.css(n, "top"),
                    a = i.css(n, "left"),
                    v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1,
                    u = {},
                    s = {},
                    h, c;
                v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0);
                i.isFunction(t) && (t = t.call(n, r, o));
                t.top != null && (u.top = t.top - o.top + h);
                t.left != null && (u.left = t.left - o.left + c);
                "using" in t ? t.using.call(n, u) : e.css(u)
            }
        };
        i.fn.extend({
            position: function() {
                if (this[0]) {
                    var n, r, t = {
                            top: 0,
                            left: 0
                        },
                        u = this[0];
                    return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent || r.documentElement; n && !i.nodeName(n, "html") && i.css(n, "position") === "static";) n = n.offsetParent;
                    return n || r.documentElement
                })
            }
        });
        i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, r) {
            var u = /Y/.test(r);
            i.fn[n] = function(f) {
                return i.access(this, function(n, f, e) {
                    var o = uf(n);
                    if (e === t) return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
                    o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
                }, n, f, arguments.length, null)
            }
        });
        i.each({
            Height: "height",
            Width: "width"
        }, function(n, r) {
            i.each({
                padding: "inner" + n,
                content: r,
                "": "outer" + n
            }, function(u, f) {
                i.fn[f] = function(f, e) {
                    var o = arguments.length && (u || typeof f != "boolean"),
                        s = u || (f === !0 || e === !0 ? "margin" : "border");
                    return i.access(this, function(r, u, f) {
                        var e;
                        return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
                    }, r, o ? f : t, o, null)
                }
            })
        });
        n.jQuery = n.$ = i;
        typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return i
        })
    }(window),
    function(n, t, i) {
        typeof define == "function" && define.amd ? define(["jquery"], function(r) {
            return i(r, n, t), r.mobile
        }) : i(n.jQuery, n, t)
    }(this, document, function(n, t, i) {
        (function(n, t, i, r) {
            function h(n) {
                while (n && typeof n.originalEvent != "undefined") n = n.originalEvent;
                return n
            }

            function vt(t, i) {
                var u = t.type,
                    e, o, l, f, s, a, v, c, y;
                if (t = n.Event(t), t.type = i, e = t.originalEvent, o = n.event.props, u.search(/^(mouse|click)/) > -1 && (o = gt), e)
                    for (v = o.length, f; v;) f = o[--v], t[f] = e[f];
                if (u.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), u.search(/^touch/) !== -1 && (l = h(e), u = l.touches, s = l.changedTouches, a = u && u.length ? u[0] : s && s.length ? s[0] : r, a))
                    for (c = 0, y = ct.length; c < y; c++) f = ct[c], t[f] = a[f];
                return t
            }

            function v(t) {
                for (var i = {}, r, u; t;) {
                    r = n.data(t, o);
                    for (u in r) r[u] && (i[u] = i.hasVirtualBinding = !0);
                    t = t.parentNode
                }
                return i
            }

            function yt(t, i) {
                for (var r; t;) {
                    if (r = n.data(t, o), r && (!i || r[i])) return t;
                    t = t.parentNode
                }
                return null
            }

            function pt() {
                l = !1
            }

            function tt() {
                l = !0
            }

            function wt() {
                s = 0;
                y.length = 0;
                d = !1;
                tt()
            }

            function bt() {
                pt()
            }

            function w() {
                it();
                c = setTimeout(function() {
                    c = 0;
                    wt()
                }, n.vmouse.resetTimerDuration)
            }

            function it() {
                c && (clearTimeout(c), c = 0)
            }

            function f(t, i, r) {
                var u;
                return (r && r[t] || !r && yt(i.target, t)) && (u = vt(i, t), n(i.target).trigger(u)), u
            }

            function rt(t) {
                var r = n.data(t.target, b),
                    i;
                d || s && s === r || (i = f("v" + t.type, t), i && (i.isDefaultPrevented() && t.preventDefault(), i.isPropagationStopped() && t.stopPropagation(), i.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
            }

            function ut(t) {
                var o = h(t).touches,
                    r, i, u;
                o && o.length === 1 && (r = t.target, i = v(r), i.hasVirtualBinding && (s = ni++, n.data(r, b, s), it(), bt(), e = !1, u = h(t).touches[0], lt = u.pageX, at = u.pageY, f("vmouseover", t, i), f("vmousedown", t, i)))
            }

            function ft(n) {
                l || (e || f("vmousecancel", n, v(n.target)), e = !0, w())
            }

            function et(t) {
                if (!l) {
                    var i = h(t).touches[0],
                        o = e,
                        r = n.vmouse.moveDistanceThreshold,
                        u = v(t.target);
                    e = e || Math.abs(i.pageX - lt) > r || Math.abs(i.pageY - at) > r;
                    e && !o && f("vmousecancel", t, u);
                    f("vmousemove", t, u);
                    w()
                }
            }

            function ot(n) {
                if (!l) {
                    tt();
                    var t = v(n.target),
                        i, r;
                    f("vmouseup", n, t);
                    e || (i = f("vclick", n, t), i && i.isDefaultPrevented() && (r = h(n).changedTouches[0], y.push({
                        touchID: s,
                        x: r.clientX,
                        y: r.clientY
                    }), d = !0));
                    f("vmouseout", n, t);
                    e = !1;
                    w()
                }
            }

            function st(t) {
                var i = n.data(t, o),
                    r;
                if (i)
                    for (r in i)
                        if (i[r]) return !0;
                return !1
            }

            function ht() {}

            function kt(t) {
                var i = t.substr(1);
                return {
                    setup: function() {
                        st(this) || n.data(this, o, {});
                        var r = n.data(this, o);
                        r[t] = !0;
                        u[t] = (u[t] || 0) + 1;
                        u[t] === 1 && p.bind(i, rt);
                        n(this).bind(i, ht);
                        g && (u.touchstart = (u.touchstart || 0) + 1, u.touchstart === 1 && p.bind("touchstart", ut).bind("touchend", ot).bind("touchmove", et).bind("scroll", ft))
                    },
                    teardown: function() {
                        --u[t];
                        u[t] || p.unbind(i, rt);
                        g && (--u.touchstart, u.touchstart || p.unbind("touchstart", ut).unbind("touchmove", et).unbind("touchend", ot).unbind("scroll", ft));
                        var r = n(this),
                            f = n.data(this, o);
                        f && (f[t] = !1);
                        r.unbind(i, ht);
                        st(this) || r.removeData(o)
                    }
                }
            }
            var o = "virtualMouseBindings",
                b = "virtualTouchID",
                k = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
                ct = "clientX clientY pageX pageY screenX screenY".split(" "),
                dt = n.event.mouseHooks ? n.event.mouseHooks.props : [],
                gt = n.event.props.concat(dt),
                u = {},
                c = 0,
                lt = 0,
                at = 0,
                e = !1,
                y = [],
                d = !1,
                l = !1,
                g = "addEventListener" in i,
                p = n(i),
                ni = 1,
                s = 0,
                nt, a;
            for (n.vmouse = {
                    moveDistanceThreshold: 10,
                    clickDistanceThreshold: 10,
                    resetTimerDuration: 1500
                }, a = 0; a < k.length; a++) n.event.special[k[a]] = kt(k[a]);
            g && i.addEventListener("click", function(t) {
                var f = y.length,
                    e = t.target,
                    o, s, i, r, u, h;
                if (f)
                    for (o = t.clientX, s = t.clientY, nt = n.vmouse.clickDistanceThreshold, i = e; i;) {
                        for (r = 0; r < f; r++)
                            if (u = y[r], h = 0, i === e && Math.abs(u.x - o) < nt && Math.abs(u.y - s) < nt || n.data(i, b) === u.touchID) {
                                t.preventDefault();
                                t.stopPropagation();
                                return
                            }
                        i = i.parentNode
                    }
            }, !0)
        })(n, t, i),
        function(n) {
            n.mobile = {}
        }(n),
        function(n) {
            var t = {
                touch: "ontouchend" in i
            };
            n.mobile.support = n.mobile.support || {};
            n.extend(n.support, t);
            n.extend(n.mobile.support, t)
        }(n),
        function(n, t, r) {
            function f(t, i, u, f) {
                var e = u.type;
                u.type = i;
                f ? n.event.trigger(u, r, t) : n.event.dispatch.call(t, u);
                u.type = e
            }
            var u = n(i),
                e = n.mobile.support.touch,
                s = "touchmove scroll",
                h = e ? "touchstart" : "mousedown",
                c = e ? "touchend" : "mouseup",
                o = e ? "touchmove" : "mousemove";
            n.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, i) {
                n.fn[i] = function(n) {
                    return n ? this.bind(i, n) : this.trigger(i)
                };
                n.attrFn && (n.attrFn[i] = !0)
            });
            n.event.special.scrollstart = {
                enabled: !0,
                setup: function() {
                    function i(n, i) {
                        t = i;
                        f(r, t ? "scrollstart" : "scrollstop", n)
                    }
                    var r = this,
                        e = n(r),
                        t, u;
                    e.bind(s, function(r) {
                        n.event.special.scrollstart.enabled && (t || i(r, !0), clearTimeout(u), u = setTimeout(function() {
                            i(r, !1)
                        }, 50))
                    })
                },
                teardown: function() {
                    n(this).unbind(s)
                }
            };
            n.event.special.tap = {
                tapholdThreshold: 750,
                emitTapOnTaphold: !0,
                setup: function() {
                    var i = this,
                        r = n(i),
                        t = !1;
                    r.bind("vmousedown", function(e) {
                        function o() {
                            clearTimeout(l)
                        }

                        function s() {
                            o();
                            r.unbind("vclick", h).unbind("vmouseup", o);
                            u.unbind("vmousecancel", s)
                        }

                        function h(n) {
                            s();
                            !t && c === n.target ? f(i, "tap", n) : t && n.preventDefault()
                        }
                        if (t = !1, e.which && e.which !== 1) return !1;
                        var c = e.target,
                            l;
                        r.bind("vmouseup", o).bind("vclick", h);
                        u.bind("vmousecancel", s);
                        l = setTimeout(function() {
                            n.event.special.tap.emitTapOnTaphold || (t = !0);
                            f(i, "taphold", n.Event("taphold", {
                                target: c
                            }))
                        }, n.event.special.tap.tapholdThreshold)
                    })
                },
                teardown: function() {
                    n(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup");
                    u.unbind("vmousecancel")
                }
            };
            n.event.special.swipe = {
                scrollSupressionThreshold: 30,
                durationThreshold: 1e3,
                horizontalDistanceThreshold: 30,
                verticalDistanceThreshold: 30,
                getLocation: function(n) {
                    var u = t.pageXOffset,
                        f = t.pageYOffset,
                        i = n.clientX,
                        r = n.clientY;
                    return n.pageY === 0 && Math.floor(r) > Math.floor(n.pageY) || n.pageX === 0 && Math.floor(i) > Math.floor(n.pageX) ? (i -= u, r -= f) : (r < n.pageY - f || i < n.pageX - u) && (i = n.pageX - u, r = n.pageY - f), {
                        x: i,
                        y: r
                    }
                },
                start: function(t) {
                    var r = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                        i = n.event.special.swipe.getLocation(r);
                    return {
                        time: (new Date).getTime(),
                        coords: [i.x, i.y],
                        origin: n(t.target)
                    }
                },
                stop: function(t) {
                    var r = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                        i = n.event.special.swipe.getLocation(r);
                    return {
                        time: (new Date).getTime(),
                        coords: [i.x, i.y]
                    }
                },
                handleSwipe: function(t, i, r, u) {
                    if (i.time - t.time < n.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - i.coords[0]) > n.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - i.coords[1]) < n.event.special.swipe.verticalDistanceThreshold) {
                        var e = t.coords[0] > i.coords[0] ? "swipeleft" : "swiperight";
                        return f(r, "swipe", n.Event("swipe", {
                            target: u,
                            swipestart: t,
                            swipestop: i
                        }), !0), f(r, e, n.Event(e, {
                            target: u,
                            swipestart: t,
                            swipestop: i
                        }), !0), !0
                    }
                    return !1
                },
                eventInProgress: !1,
                setup: function() {
                    var i, r = this,
                        f = n(r),
                        t = {};
                    i = n.data(this, "mobile-events");
                    i || (i = {
                        length: 0
                    }, n.data(this, "mobile-events", i));
                    i.length++;
                    i.swipe = t;
                    t.start = function(i) {
                        if (!n.event.special.swipe.eventInProgress) {
                            n.event.special.swipe.eventInProgress = !0;
                            var e, s = n.event.special.swipe.start(i),
                                h = i.target,
                                f = !1;
                            t.move = function(t) {
                                s && !t.isDefaultPrevented() && (e = n.event.special.swipe.stop(t), f || (f = n.event.special.swipe.handleSwipe(s, e, r, h), f && (n.event.special.swipe.eventInProgress = !1)), Math.abs(s.coords[0] - e.coords[0]) > n.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
                            };
                            t.stop = function() {
                                f = !0;
                                n.event.special.swipe.eventInProgress = !1;
                                u.off(o, t.move);
                                t.move = null
                            };
                            u.on(o, t.move).one(c, t.stop)
                        }
                    };
                    f.on(h, t.start)
                },
                teardown: function() {
                    var i, t;
                    i = n.data(this, "mobile-events");
                    i && (t = i.swipe, delete i.swipe, i.length--, i.length === 0 && n.removeData(this, "mobile-events"));
                    t && (t.start && n(this).off(h, t.start), t.move && u.off(o, t.move), t.stop && u.off(c, t.stop))
                }
            };
            n.each({
                scrollstop: "scrollstart",
                taphold: "tap",
                swipeleft: "swipe.left",
                swiperight: "swipe.right"
            }, function(t, i) {
                n.event.special[t] = {
                    setup: function() {
                        n(this).bind(i, n.noop)
                    },
                    teardown: function() {
                        n(this).unbind(i)
                    }
                }
            })
        }(n, this)
    });
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(n, t, i) {
        function r(i) {
            var r = t.console;
            o[i] || (o[i] = !0, n.migrateWarnings.push(i), r && r.warn && !n.migrateMute && (r.warn("JQMIGRATE: " + i), n.migrateTrace && r.trace && r.trace()))
        }

        function e(t, u, f, e) {
            if (Object.defineProperty) try {
                return Object.defineProperty(t, u, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(e), f
                    },
                    set: function(n) {
                        r(e);
                        f = n
                    }
                }), i
            } catch (o) {}
            n._definePropertyBroken = !0;
            t[u] = f
        }
        var o = {},
            l, a, v;
        n.migrateWarnings = [];
        !n.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active");
        n.migrateTrace === i && (n.migrateTrace = !0);
        n.migrateReset = function() {
            o = {};
            n.migrateWarnings.length = 0
        };
        "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var s = n("<input/>", {
                size: 1
            }).attr("size") && n.attrFn,
            h = n.attr,
            g = n.attrHooks.value && n.attrHooks.value.get || function() {
                return null
            },
            nt = n.attrHooks.value && n.attrHooks.value.set || function() {
                return i
            },
            tt = /^(?:input|button)$/i,
            it = /^[238]$/,
            rt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            ut = /^(?:checked|selected)$/i;
        e(n, "attrFn", s || {}, "jQuery.attrFn is deprecated");
        n.attr = function(t, u, f, e) {
            var o = u.toLowerCase(),
                c = t && t.nodeType;
            return e && (4 > h.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !it.test(c) && (s ? u in s : n.isFunction(n.fn[u]))) ? n(t)[u](f) : ("type" === u && f !== i && tt.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !n.attrHooks[o] && rt.test(o) && (n.attrHooks[o] = {
                get: function(t, r) {
                    var u, f = n.prop(t, r);
                    return f === !0 || "boolean" != typeof f && (u = t.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : i
                },
                set: function(t, i, r) {
                    var u;
                    return i === !1 ? n.removeAttr(t, r) : (u = n.propFix[r] || r, u in t && (t[u] = !0), t.setAttribute(r, r.toLowerCase())), r
                }
            }, ut.test(o) && r("jQuery.fn.attr('" + o + "') may use property instead of attribute")), h.call(n, t, u, f))
        };
        n.attrHooks.value = {
            get: function(n, t) {
                var i = (n.nodeName || "").toLowerCase();
                return "button" === i ? g.apply(this, arguments) : ("input" !== i && "option" !== i && r("jQuery.fn.attr('value') no longer gets properties"), t in n ? n.value : null)
            },
            set: function(n, t) {
                var u = (n.nodeName || "").toLowerCase();
                return "button" === u ? nt.apply(this, arguments) : ("input" !== u && "option" !== u && r("jQuery.fn.attr('value', val) no longer sets properties"), n.value = t, i)
            }
        };
        var f, u, c = n.fn.init,
            ft = n.parseJSON,
            et = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        n.fn.init = function(t, i, u) {
            var f;
            return t && "string" == typeof t && !n.isPlainObject(i) && (f = et.exec(n.trim(t))) && f[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), f[3] && r("$(html) HTML text after last tag is ignored"), "#" === f[0].charAt(0) && (r("HTML string cannot start with a '#' character"), n.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), n.parseHTML) ? c.call(this, n.parseHTML(f[2], i, !0), i, u) : c.apply(this, arguments)
        };
        n.fn.init.prototype = n.fn;
        n.parseJSON = function(n) {
            return n || null === n ? ft.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        };
        n.uaMatch = function(n) {
            n = n.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || 0 > n.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        };
        n.browser || (f = n.uaMatch(navigator.userAgent), u = {}, f.browser && (u[f.browser] = !0, u.version = f.version), u.chrome ? u.webkit = !0 : u.webkit && (u.safari = !0), n.browser = u);
        e(n, "browser", n.browser, "jQuery.browser is deprecated");
        n.sub = function() {
            function t(n, i) {
                return new t.fn.init(n, i)
            }
            n.extend(!0, t, this);
            t.superclass = this;
            t.fn = t.prototype = this();
            t.fn.constructor = t;
            t.sub = this.sub;
            t.fn.init = function(r, u) {
                return u && u instanceof n && !(u instanceof t) && (u = t(u)), n.fn.init.call(this, r, u, i)
            };
            t.fn.init.prototype = t.fn;
            var i = t(document);
            return r("jQuery.sub() is deprecated"), t
        };
        n.ajaxSetup({
            converters: {
                "text json": n.parseJSON
            }
        });
        l = n.fn.data;
        n.fn.data = function(t) {
            var f, u, e = this[0];
            return !e || "events" !== t || 1 !== arguments.length || (f = n.data(e, t), u = n._data(e, t), f !== i && f !== u || u === i) ? l.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), u)
        };
        a = /\/(java|ecma)script/i;
        v = n.fn.andSelf || n.fn.addBack;
        n.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), v.apply(this, arguments)
        };
        n.clean || (n.clean = function(t, u, f, e) {
            u = u || document;
            u = !u.nodeType && u[0] || u;
            u = u.ownerDocument || u;
            r("jQuery.clean() is deprecated");
            var s, o, c, l, h = [];
            if (n.merge(h, n.buildFragment(t, u).childNodes), f)
                for (c = function(n) {
                        return !n.type || a.test(n.type) ? e ? e.push(n.parentNode ? n.parentNode.removeChild(n) : n) : f.appendChild(n) : i
                    }, s = 0; null != (o = h[s]); s++) n.nodeName(o, "script") && c(o) || (f.appendChild(o), o.getElementsByTagName !== i && (l = n.grep(n.merge([], o.getElementsByTagName("script")), c), h.splice.apply(h, [s + 1, 0].concat(l)), s += l.length));
            return h
        });
        var ot = n.event.add,
            st = n.event.remove,
            ht = n.event.trigger,
            ct = n.fn.toggle,
            y = n.fn.live,
            p = n.fn.die,
            w = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            b = RegExp("\\b(?:" + w + ")\\b"),
            k = /(?:^|\s)hover(\.\S+|)\b/,
            d = function(t) {
                return "string" != typeof t || n.event.special.hover ? t : (k.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(k, "mouseenter$1 mouseleave$1"))
            };
        n.event.props && "attrChange" !== n.event.props[0] && n.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
        n.event.dispatch && e(n.event, "handle", n.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
        n.event.add = function(n, t, i, u, f) {
            n !== document && b.test(t) && r("AJAX events should be attached to document: " + t);
            ot.call(this, n, d(t || ""), i, u, f)
        };
        n.event.remove = function(n, t, i, r, u) {
            st.call(this, n, d(t) || "", i, r, u)
        };
        n.fn.error = function() {
            var n = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), n.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, n) : (this.triggerHandler.apply(this, n), this)
        };
        n.fn.toggle = function(t, i) {
            if (!n.isFunction(t) || !n.isFunction(i)) return ct.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var u = arguments,
                e = t.guid || n.guid++,
                f = 0,
                o = function(i) {
                    var r = (n._data(this, "lastToggle" + t.guid) || 0) % f;
                    return n._data(this, "lastToggle" + t.guid, r + 1), i.preventDefault(), u[r].apply(this, arguments) || !1
                };
            for (o.guid = e; u.length > f;) u[f++].guid = e;
            return this.click(o)
        };
        n.fn.live = function(t, i, u) {
            return r("jQuery.fn.live() is deprecated"), y ? y.apply(this, arguments) : (n(this.context).on(t, this.selector, i, u), this)
        };
        n.fn.die = function(t, i) {
            return r("jQuery.fn.die() is deprecated"), p ? p.apply(this, arguments) : (n(this.context).off(t, this.selector || "**", i), this)
        };
        n.event.trigger = function(n, t, i, u) {
            return i || b.test(n) || r("Global events are undocumented and deprecated"), ht.call(this, n, t, i || document, u)
        };
        n.each(w.split("|"), function(t, i) {
            n.event.special[i] = {
                setup: function() {
                    var t = this;
                    return t !== document && (n.event.add(document, i + "." + n.guid, function() {
                        n.event.trigger(i, null, t, !0)
                    }), n._data(this, i, n.guid++)), !1
                },
                teardown: function() {
                    return this !== document && n.event.remove(document, i + "." + n._data(this, i)), !1
                }
            }
        })
    }(jQuery, window);
! function(n) {
    "use strict";
    n(function() {
        n.support.transition = function() {
            var n = function() {
                var i = document.createElement("bootstrap"),
                    t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    n;
                for (n in t)
                    if (i.style[n] !== undefined) return t[n]
            }();
            return n && {
                end: n
            }
        }()
    })
}(window.jQuery);
! function(n) {
    "use strict";
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.prototype.close = function(t) {
        function f() {
            i.trigger("closed").remove()
        }
        var u = n(this),
            r = u.attr("data-target"),
            i;
        (r || (r = u.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = n(r), t && t.preventDefault(), i.length || (i = u.hasClass("alert") ? u : u.parent()), i.trigger(t = n.Event("close")), t.isDefaultPrevented()) || (i.removeClass("in"), n.support.transition && i.hasClass("fade") ? i.on(n.support.transition.end, f) : f())
    };
    r = n.fn.alert;
    n.fn.alert = function(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("alert");
            u || r.data("alert", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    };
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.alert.data-api", i, t.prototype.close)
}(window.jQuery);
! function(n) {
    "use strict";
    var t = function(t, i) {
            this.$element = n(t);
            this.options = n.extend({}, n.fn.button.defaults, i)
        },
        i;
    t.prototype.setState = function(n) {
        var i = "disabled",
            t = this.$element,
            r = t.data(),
            u = t.is("input") ? "val" : "html";
        n += "Text";
        r.resetText || t.data("resetText", t[u]());
        t[u](r[n] || this.options[n]);
        setTimeout(function() {
            n == "loadingText" ? t.addClass(i).attr(i, i) : t.removeClass(i).removeAttr(i)
        }, 0)
    };
    t.prototype.toggle = function() {
        var n = this.$element.closest('[data-toggle="buttons-radio"]');
        n && n.find(".active").removeClass("active");
        this.$element.toggleClass("active")
    };
    i = n.fn.button;
    n.fn.button = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("button"),
                f = typeof i == "object" && i;
            r || u.data("button", r = new t(this, f));
            i == "toggle" ? r.toggle() : i && r.setState(i)
        })
    };
    n.fn.button.defaults = {
        loadingText: "loading..."
    };
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = i, this
    };
    n(document).on("click.button.data-api", "[data-toggle^=button]", function(t) {
        var i = n(t.target);
        i.hasClass("btn") || (i = i.closest(".btn"));
        i.button("toggle")
    })
}(window.jQuery);
! function(n) {
    "use strict";
    var t = function(t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.options.pause == "hover" && this.$element.on("mouseenter", n.proxy(this.pause, this)).on("mouseleave", n.proxy(this.cycle, this))
        },
        i;
    t.prototype = {
        cycle: function(t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        },
        to: function(t) {
            var i = this.getActiveIndex(),
                r = this;
            if (!(t > this.$items.length - 1) && !(t < 0)) return this.sliding ? this.$element.one("slid", function() {
                r.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", n(this.$items[t]))
        },
        pause: function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition.end && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        },
        next: function() {
            if (!this.sliding) return this.slide("next")
        },
        prev: function() {
            if (!this.sliding) return this.slide("prev")
        },
        slide: function(t, i) {
            var e = this.$element.find(".item.active"),
                r = i || e[t](),
                s = this.interval,
                u = t == "next" ? "left" : "right",
                h = t == "next" ? "first" : "last",
                o = this,
                f;
            if (this.sliding = !0, s && this.pause(), r = r.length ? r : this.$element.find(".item")[h](), f = n.Event("slide", {
                    relatedTarget: r[0],
                    direction: u
                }), !r.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                        var t = n(o.$indicators.children()[o.getActiveIndex()]);
                        t && t.addClass("active")
                    })), n.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(f), f.isDefaultPrevented()) return;
                    r.addClass(t);
                    r[0].offsetWidth;
                    e.addClass(u);
                    r.addClass(u);
                    this.$element.one(n.support.transition.end, function() {
                        r.removeClass([t, u].join(" ")).addClass("active");
                        e.removeClass(["active", u].join(" "));
                        o.sliding = !1;
                        setTimeout(function() {
                            o.$element.trigger("slid")
                        }, 0)
                    })
                } else {
                    if (this.$element.trigger(f), f.isDefaultPrevented()) return;
                    e.removeClass("active");
                    r.addClass("active");
                    this.sliding = !1;
                    this.$element.trigger("slid")
                }
                return s && this.cycle(), this
            }
        }
    };
    i = n.fn.carousel;
    n.fn.carousel = function(i) {
        return this.each(function() {
            var f = n(this),
                r = f.data("carousel"),
                u = n.extend({}, n.fn.carousel.defaults, typeof i == "object" && i),
                e = typeof i == "string" ? i : u.slide;
            r || f.data("carousel", r = new t(this, u));
            typeof i == "number" ? r.to(i) : e ? r[e]() : u.interval && r.pause().cycle()
        })
    };
    n.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    };
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = i, this
    };
    n(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var i = n(this),
            u, r = n(i.attr("data-target") || (u = i.attr("href")) && u.replace(/.*(?=#[^\s]+$)/, "")),
            e = n.extend({}, r.data(), i.data()),
            f;
        r.carousel(e);
        (f = i.attr("data-slide-to")) && r.data("carousel").pause().to(f).cycle();
        t.preventDefault()
    })
}(window.jQuery);
! function(n) {
    "use strict";
    var t = function(t, i) {
            this.$element = n(t);
            this.options = n.extend({}, n.fn.collapse.defaults, i);
            this.options.parent && (this.$parent = n(this.options.parent));
            this.options.toggle && this.toggle()
        },
        i;
    t.prototype = {
        constructor: t,
        dimension: function() {
            var n = this.$element.hasClass("width");
            return n ? "width" : "height"
        },
        show: function() {
            var i, u, t, r;
            if (!this.transitioning && !this.$element.hasClass("in")) {
                if (i = this.dimension(), u = n.camelCase(["scroll", i].join("-")), t = this.$parent && this.$parent.find("> .accordion-group > .in"), t && t.length) {
                    if (r = t.data("collapse"), r && r.transitioning) return;
                    t.collapse("hide");
                    r || t.data("collapse", null)
                }
                this.$element[i](0);
                this.transition("addClass", n.Event("show"), "shown");
                n.support.transition && this.$element[i](this.$element[0][u])
            }
        },
        hide: function() {
            var t;
            !this.transitioning && this.$element.hasClass("in") && (t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", n.Event("hide"), "hidden"), this.$element[t](0))
        },
        reset: function(n) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](n || "auto")[0].offsetWidth, this.$element[n !== null ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function(t, i, r) {
            var u = this,
                f = function() {
                    i.type == "show" && u.reset();
                    u.transitioning = 0;
                    u.$element.trigger(r)
                };
            (this.$element.trigger(i), i.isDefaultPrevented()) || (this.transitioning = 1, this.$element[t]("in"), n.support.transition && this.$element.hasClass("collapse") ? this.$element.one(n.support.transition.end, f) : f())
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    i = n.fn.collapse;
    n.fn.collapse = function(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("collapse"),
                f = n.extend({}, n.fn.collapse.defaults, r.data(), typeof i == "object" && i);
            u || r.data("collapse", u = new t(this, f));
            typeof i == "string" && u[i]()
        })
    };
    n.fn.collapse.defaults = {
        toggle: !0
    };
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = i, this
    };
    n(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
        var i = n(this),
            u, r = i.attr("data-target") || t.preventDefault() || (u = i.attr("href")) && u.replace(/.*(?=#[^\s]+$)/, ""),
            f = n(r).data("collapse") ? "toggle" : i.data();
        i[n(r).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
        n(r).collapse(f)
    })
}(window.jQuery);
! function(n) {
    "use strict";

    function r() {
        n(".dropdown-backdrop").remove();
        n(i).each(function() {
            u(n(this)).removeClass("open")
        })
    }

    function u(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length || (r = t.parent()), r
    }
    var i = "[data-toggle=dropdown]",
        t = function(t) {
            var i = n(t).on("click.dropdown.data-api", this.toggle);
            n("html").on("click.dropdown.data-api", function() {
                i.parent().removeClass("open")
            })
        },
        f;
    t.prototype = {
        constructor: t,
        toggle: function() {
            var t = n(this),
                i, f;
            if (!t.is(".disabled, :disabled")) return i = u(t), f = i.hasClass("open"), r(), f || ("ontouchstart" in document.documentElement && n('<div class="dropdown-backdrop"/>').insertBefore(n(this)).on("click", r), i.toggleClass("open")), t.focus(), !1
        },
        keydown: function(t) {
            var e, f, o, s, r;
            if (/(38|40|27)/.test(t.keyCode) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
                if (o = u(e), s = o.hasClass("open"), !s || s && t.keyCode == 27) return t.which == 27 && o.find(i).focus(), e.click();
                (f = n("[role=menu] li:not(.divider):visible a", o), f.length) && (r = f.index(f.filter(":focus")), t.keyCode == 38 && r > 0 && r--, t.keyCode == 40 && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).focus())
            }
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = function(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("dropdown");
            u || r.data("dropdown", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    };
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.dropdown.data-api", r).on("click.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.dropdown.data-api", i, t.prototype.toggle).on("keydown.dropdown.data-api", i + ", [role=menu]", t.prototype.keydown)
}(window.jQuery);
! function(n) {
    "use strict";
    var t = function(t, i) {
            this.options = i;
            this.$element = n(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", n.proxy(this.hide, this));
            this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        },
        i;
    t.prototype = {
        constructor: t,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var t = this,
                i = n.Event("show");
            (this.$element.trigger(i), this.isShown || i.isDefaultPrevented()) || (this.isShown = !0, this.escape(), this.backdrop(function() {
                var i = n.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body);
                t.$element.show();
                i && t.$element[0].offsetWidth;
                t.$element.addClass("in").attr("aria-hidden", !1);
                t.enforceFocus();
                i ? t.$element.one(n.support.transition.end, function() {
                    t.$element.focus().trigger("shown")
                }) : t.$element.focus().trigger("shown")
            }))
        },
        hide: function(t) {
            t && t.preventDefault();
            var i = this;
            (t = n.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented()) && (this.isShown = !1, this.escape(), n(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), n.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function() {
            var t = this;
            n(document).on("focusin.modal", function(n) {
                t.$element[0] === n.target || t.$element.has(n.target).length || t.$element.focus()
            })
        },
        escape: function() {
            var n = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                t.which == 27 && n.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var t = this,
                i = setTimeout(function() {
                    t.$element.off(n.support.transition.end);
                    t.hideModal()
                }, 500);
            this.$element.one(n.support.transition.end, function() {
                clearTimeout(i);
                t.hideModal()
            })
        },
        hideModal: function() {
            var n = this;
            this.$element.hide();
            this.backdrop(function() {
                n.removeBackdrop();
                n.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove();
            this.$backdrop = null
        },
        backdrop: function(t) {
            var u = this,
                r = this.$element.hasClass("fade") ? "fade" : "",
                i;
            if (this.isShown && this.options.backdrop) {
                if (i = n.support.transition && r, this.$backdrop = n('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? n.proxy(this.$element[0].focus, this.$element[0]) : n.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                i ? this.$backdrop.one(n.support.transition.end, t) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(n.support.transition.end, t) : t()) : t && t()
        }
    };
    i = n.fn.modal;
    n.fn.modal = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("modal"),
                f = n.extend({}, n.fn.modal.defaults, u.data(), typeof i == "object" && i);
            r || u.data("modal", r = new t(this, f));
            typeof i == "string" ? r[i]() : f.show && r.show()
        })
    };
    n.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = i, this
    };
    n(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
        var i = n(this),
            r = i.attr("href"),
            u = n(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            f = u.data("modal") ? "toggle" : n.extend({
                remote: !/#/.test(r) && r
            }, u.data(), i.data());
        t.preventDefault();
        u.modal(f).one("hide", function() {
            i.focus()
        })
    })
}(window.jQuery);
! function(n) {
    "use strict";
    var t = function(n, t) {
            this.init("tooltip", n, t)
        },
        i;
    t.prototype = {
        constructor: t,
        init: function(t, i, r) {
            var o, s, f, u, e;
            for (this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.enabled = !0, f = this.options.trigger.split(" "), e = f.length; e--;) u = f[e], u == "click" ? this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this)) : u != "manual" && (o = u == "hover" ? "mouseenter" : "focus", s = u == "hover" ? "mouseleave" : "blur", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
            this.options.selector ? this._options = n.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(t) {
            return t = n.extend({}, n.fn[this.type].defaults, this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function(t) {
            var u = n.fn[this.type].defaults,
                r = {},
                i;
            if (this._options && n.each(this._options, function(n, t) {
                    u[n] != t && (r[n] = t)
                }, this), i = n(t.currentTarget)[this.type](r).data(this.type), !i.options.delay || !i.options.delay.show) return i.show();
            clearTimeout(this.timeout);
            i.hoverState = "in";
            this.timeout = setTimeout(function() {
                i.hoverState == "in" && i.show()
            }, i.options.delay.show)
        },
        leave: function(t) {
            var i = n(t.currentTarget)[this.type](this._options).data(this.type);
            if (this.timeout && clearTimeout(this.timeout), !i.options.delay || !i.options.delay.hide) return i.hide();
            i.hoverState = "out";
            this.timeout = setTimeout(function() {
                i.hoverState == "out" && i.hide()
            }, i.options.delay.hide)
        },
        show: function() {
            var i, t, u, f, e, r, o = n.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(o), o.isDefaultPrevented()) return;
                i = this.tip();
                this.setContent();
                this.options.animation && i.addClass("fade");
                e = typeof this.options.placement == "function" ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement;
                i.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                });
                this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
                t = this.getPosition();
                u = i[0].offsetWidth;
                f = i[0].offsetHeight;
                switch (e) {
                    case "bottom":
                        r = {
                            top: t.top + t.height,
                            left: t.left + t.width / 2 - u / 2
                        };
                        break;
                    case "top":
                        r = {
                            top: t.top - f,
                            left: t.left + t.width / 2 - u / 2
                        };
                        break;
                    case "left":
                        r = {
                            top: t.top + t.height / 2 - f / 2,
                            left: t.left - u
                        };
                        break;
                    case "right":
                        r = {
                            top: t.top + t.height / 2 - f / 2,
                            left: t.left + t.width
                        }
                }
                this.applyPlacement(r, e);
                this.$element.trigger("shown")
            }
        },
        applyPlacement: function(n, t) {
            var i = this.tip(),
                s = i[0].offsetWidth,
                f = i[0].offsetHeight,
                u, r, e, o;
            i.offset(n).addClass(t).addClass("in");
            u = i[0].offsetWidth;
            r = i[0].offsetHeight;
            t == "top" && r != f && (n.top = n.top + f - r, o = !0);
            t == "bottom" || t == "top" ? (e = 0, n.left < 0 && (e = n.left * -2, n.left = 0, i.offset(n), u = i[0].offsetWidth, r = i[0].offsetHeight), this.replaceArrow(e - s + u, u, "left")) : this.replaceArrow(r - f, r, "top");
            o && i.offset(n)
        },
        replaceArrow: function(n, t, i) {
            this.arrow().css(i, n ? 50 * (1 - n / t) + "%" : "")
        },
        setContent: function() {
            var n = this.tip(),
                t = this.getTitle();
            n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
            n.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function r() {
                var i = setTimeout(function() {
                    t.off(n.support.transition.end).detach()
                }, 500);
                t.one(n.support.transition.end, function() {
                    clearTimeout(i);
                    t.detach()
                })
            }
            var u = this,
                t = this.tip(),
                i = n.Event("hide");
            if (this.$element.trigger(i), !i.isDefaultPrevented()) return t.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? r() : t.detach(), this.$element.trigger("hidden"), this
        },
        fixTitle: function() {
            var n = this.$element;
            (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var t = this.$element[0];
            return n.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var t, i = this.$element,
                n = this.options;
            return t = i.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(i[0]) : n.title), t
        },
        tip: function() {
            return this.$tip = this.$tip || n(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function(t) {
            var i = t ? n(t.currentTarget)[this.type](this._options).data(this.type) : this;
            i.tip().hasClass("in") ? i.hide() : i.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    i = n.fn.tooltip;
    n.fn.tooltip = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("tooltip"),
                f = typeof i == "object" && i;
            r || u.data("tooltip", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    };
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    };
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(window.jQuery);
! function(n) {
    "use strict";
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function() {
            var n = this.tip(),
                t = this.getTitle(),
                i = this.getContent();
            n.find(".popover-title")[this.options.html ? "html" : "text"](t);
            n.find(".popover-content")[this.options.html ? "html" : "text"](i);
            n.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var t, i = this.$element,
                n = this.options;
            return t = (typeof n.content == "function" ? n.content.call(i[0]) : n.content) || i.attr("data-content"), t
        },
        tip: function() {
            return this.$tip || (this.$tip = n(this.options.template)), this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    i = n.fn.popover;
    n.fn.popover = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("popover"),
                f = typeof i == "object" && i;
            r || u.data("popover", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    };
    n.fn.popover.Constructor = t;
    n.fn.popover.defaults = n.extend({}, n.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(window.jQuery);
! function(n) {
    "use strict";

    function t(t, i) {
        var u = n.proxy(this.process, this),
            f = n(t).is("body") ? n(window) : n(t),
            r;
        this.options = n.extend({}, n.fn.scrollspy.defaults, i);
        this.$scrollElement = f.on("scroll.scroll-spy.data-api", u);
        this.selector = (this.options.target || (r = n(t).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
        this.$body = n("body");
        this.refresh();
        this.process()
    }
    t.prototype = {
        constructor: t,
        refresh: function() {
            var t = this,
                i;
            this.offsets = n([]);
            this.targets = n([]);
            i = this.$body.find(this.selector).map(function() {
                var u = n(this),
                    i = u.data("target") || u.attr("href"),
                    r = /^#\w/.test(i) && n(i);
                return r && r.length && [
                    [r.position().top + (!n.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), i]
                ] || null
            }).sort(function(n, t) {
                return n[0] - t[0]
            }).each(function() {
                t.offsets.push(this[0]);
                t.targets.push(this[1])
            })
        },
        process: function() {
            var i = this.$scrollElement.scrollTop() + this.options.offset,
                f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                e = f - this.$scrollElement.height(),
                t = this.offsets,
                r = this.targets,
                u = this.activeTarget,
                n;
            if (i >= e) return u != (n = r.last()[0]) && this.activate(n);
            for (n = t.length; n--;) u != r[n] && i >= t[n] && (!t[n + 1] || i <= t[n + 1]) && this.activate(r[n])
        },
        activate: function(t) {
            var i, r;
            this.activeTarget = t;
            n(this.selector).parent(".active").removeClass("active");
            r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]';
            i = n(r).parent("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
            i.trigger("activate")
        }
    };
    var i = n.fn.scrollspy;
    n.fn.scrollspy = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("scrollspy"),
                f = typeof i == "object" && i;
            r || u.data("scrollspy", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    };
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.defaults = {
        offset: 10
    };
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = i, this
    };
    n(window).on("load", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery);
! function(n) {
    "use strict";
    var t = function(t) {
            this.element = n(t)
        },
        i;
    t.prototype = {
        constructor: t,
        show: function() {
            var t = this.element,
                e = t.closest("ul:not(.dropdown-menu)"),
                i = t.attr("data-target"),
                r, u, f;
            (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), t.parent("li").hasClass("active")) || (r = e.find(".active:last a")[0], f = n.Event("show", {
                relatedTarget: r
            }), t.trigger(f), f.isDefaultPrevented()) || (u = n(i), this.activate(t.parent("li"), e), this.activate(u, u.parent(), function() {
                t.trigger({
                    type: "shown",
                    relatedTarget: r
                })
            }))
        },
        activate: function(t, i, r) {
            function f() {
                u.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
                t.addClass("active");
                e ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade");
                t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active");
                r && r()
            }
            var u = i.find("> .active"),
                e = r && n.support.transition && u.hasClass("fade");
            e ? u.one(n.support.transition.end, f) : f();
            u.removeClass("in")
        }
    };
    i = n.fn.tab;
    n.fn.tab = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("tab");
            r || u.data("tab", r = new t(this));
            typeof i == "string" && r[i]()
        })
    };
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = i, this
    };
    n(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault();
        n(this).tab("show")
    })
}(window.jQuery);
! function(n) {
    "use strict";
    var t = function(t, i) {
            this.$element = n(t);
            this.options = n.extend({}, n.fn.typeahead.defaults, i);
            this.matcher = this.options.matcher || this.matcher;
            this.sorter = this.options.sorter || this.sorter;
            this.highlighter = this.options.highlighter || this.highlighter;
            this.updater = this.options.updater || this.updater;
            this.source = this.options.source;
            this.$menu = n(this.options.menu);
            this.shown = !1;
            this.listen()
        },
        i;
    t.prototype = {
        constructor: t,
        select: function() {
            var n = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(n)).change(), this.hide()
        },
        updater: function(n) {
            return n
        },
        show: function() {
            var t = n.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: t.top + t.height,
                left: t.left
            }).show(), this.shown = !0, this
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function() {
            var t;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (t = n.isFunction(this.source) ? this.source(this.query, n.proxy(this.process, this)) : this.source, t ? this.process(t) : this)
        },
        process: function(t) {
            var i = this;
            return t = n.grep(t, function(n) {
                return i.matcher(n)
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(n) {
            return ~n.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(n) {
            for (var i = [], r = [], u = [], t; t = n.shift();) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? r.push(t) : u.push(t) : i.push(t);
            return i.concat(r, u)
        },
        highlighter: function(n) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return n.replace(new RegExp("(" + t + ")", "ig"), function(n, t) {
                return "<strong>" + t + "<\/strong>"
            })
        },
        render: function(t) {
            var i = this;
            return t = n(t).map(function(t, r) {
                return t = n(i.options.item).attr("data-value", r), t.find("a").html(i.highlighter(r)), t[0]
            }), t.first().addClass("active"), this.$menu.html(t), this
        },
        next: function() {
            var i = this.$menu.find(".active").removeClass("active"),
                t = i.next();
            t.length || (t = n(this.$menu.find("li")[0]));
            t.addClass("active")
        },
        prev: function() {
            var t = this.$menu.find(".active").removeClass("active"),
                n = t.prev();
            n.length || (n = this.$menu.find("li").last());
            n.addClass("active")
        },
        listen: function() {
            this.$element.on("focus", n.proxy(this.focus, this)).on("blur", n.proxy(this.blur, this)).on("keypress", n.proxy(this.keypress, this)).on("keyup", n.proxy(this.keyup, this));
            this.eventSupported("keydown") && this.$element.on("keydown", n.proxy(this.keydown, this));
            this.$menu.on("click", n.proxy(this.click, this)).on("mouseenter", "li", n.proxy(this.mouseenter, this)).on("mouseleave", "li", n.proxy(this.mouseleave, this))
        },
        eventSupported: function(n) {
            var t = n in this.$element;
            return t || (this.$element.setAttribute(n, "return;"), t = typeof this.$element[n] == "function"), t
        },
        move: function(n) {
            if (this.shown) {
                switch (n.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        n.preventDefault();
                        break;
                    case 38:
                        n.preventDefault();
                        this.prev();
                        break;
                    case 40:
                        n.preventDefault();
                        this.next()
                }
                n.stopPropagation()
            }
        },
        keydown: function(t) {
            this.suppressKeyPressRepeat = ~n.inArray(t.keyCode, [40, 38, 9, 13, 27]);
            this.move(t)
        },
        keypress: function(n) {
            this.suppressKeyPressRepeat || this.move(n)
        },
        keyup: function(n) {
            switch (n.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            n.stopPropagation();
            n.preventDefault()
        },
        focus: function() {
            this.focused = !0
        },
        blur: function() {
            this.focused = !1;
            !this.mousedover && this.shown && this.hide()
        },
        click: function(n) {
            n.stopPropagation();
            n.preventDefault();
            this.select();
            this.$element.focus()
        },
        mouseenter: function(t) {
            this.mousedover = !0;
            this.$menu.find(".active").removeClass("active");
            n(t.currentTarget).addClass("active")
        },
        mouseleave: function() {
            this.mousedover = !1;
            !this.focused && this.shown && this.hide()
        }
    };
    i = n.fn.typeahead;
    n.fn.typeahead = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("typeahead"),
                f = typeof i == "object" && i;
            r || u.data("typeahead", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    };
    n.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"><\/ul>',
        item: '<li><a href="#"><\/a><\/li>',
        minLength: 1
    };
    n.fn.typeahead.Constructor = t;
    n.fn.typeahead.noConflict = function() {
        return n.fn.typeahead = i, this
    };
    n(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
        var t = n(this);
        t.data("typeahead") || t.typeahead(t.data())
    })
}(window.jQuery);
! function(n) {
    "use strict";
    var t = function(t, i) {
            this.options = n.extend({}, n.fn.affix.defaults, i);
            this.$window = n(window).on("scroll.affix.data-api", n.proxy(this.checkPosition, this)).on("click.affix.data-api", n.proxy(function() {
                setTimeout(n.proxy(this.checkPosition, this), 1)
            }, this));
            this.$element = n(t);
            this.checkPosition()
        },
        i;
    t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var o = n(document).height(),
                f = this.$window.scrollTop(),
                e = this.$element.offset(),
                t = this.options.offset,
                r = t.bottom,
                u = t.top,
                i;
            (typeof t != "object" && (r = u = t), typeof u == "function" && (u = t.top()), typeof r == "function" && (r = t.bottom()), i = this.unpin != null && f + this.unpin <= e.top ? !1 : r != null && e.top + this.$element.height() >= o - r ? "bottom" : u != null && f <= u ? "top" : !1, this.affixed !== i) && (this.affixed = i, this.unpin = i == "bottom" ? e.top - f : null, this.$element.removeClass("affix affix-top affix-bottom").addClass("affix" + (i ? "-" + i : "")))
        }
    };
    i = n.fn.affix;
    n.fn.affix = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("affix"),
                f = typeof i == "object" && i;
            r || u.data("affix", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    };
    n.fn.affix.Constructor = t;
    n.fn.affix.defaults = {
        offset: 0
    };
    n.fn.affix.noConflict = function() {
        return n.fn.affix = i, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var i = n(this),
                t = i.data();
            t.offset = t.offset || {};
            t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            t.offsetTop && (t.offset.top = t.offsetTop);
            i.affix(t)
        })
    })
}(window.jQuery),
function(n, t, i) {
    n.fn.jScrollPane = function(r) {
        function u(r, u) {
            function li(t) {
                var u, d, g, c, p, w, nt = !1,
                    tt = !1;
                if (f = t, o === i) p = r.scrollTop(), w = r.scrollLeft(), r.css({
                    overflow: "hidden",
                    padding: 0
                }), h = r.innerWidth() + ht, s = r.innerHeight(), r.width(h), o = n('<div class="jspPane" />').css("padding", yi).append(r.children()), e = n('<div class="jspContainer" />').css({
                    width: h + "px",
                    height: s + "px"
                }).append(o).appendTo(r);
                else {
                    if (r.css("width", ""), nt = f.stickToBottom && or(), tt = f.stickToRight && sr(), c = r.innerWidth() + ht != h || r.outerHeight() != s, c && (h = r.innerWidth() + ht, s = r.innerHeight(), e.css({
                            width: h + "px",
                            height: s + "px"
                        })), !c && pi == y && o.outerHeight() == v) {
                        r.width(h);
                        return
                    }
                    pi = y;
                    o.css("width", "");
                    r.width(h);
                    e.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                o.css("overflow", "auto");
                y = t.contentWidth ? t.contentWidth : o[0].scrollWidth;
                v = o[0].scrollHeight;
                o.css("overflow", "");
                oi = y / h;
                gt = v / s;
                k = gt > 1;
                b = oi > 1;
                b || k ? (r.addClass("jspScrollable"), u = f.maintainPosition && (l || a), u && (d = et(), g = ot()), nr(), tr(), ir(), u && (yt(tt ? y - h : d, !1), ft(nt ? v - s : g, !1)), lr(), hr(), br(), f.enableKeyboardNavigation && vr(), f.clickOnTrack && ur(), pr(), f.hijackInternalLinks && wr()) : (r.removeClass("jspScrollable"), o.css({
                    top: 0,
                    width: e.width() - ht
                }), cr(), ar(), yr(), di());
                f.autoReinitialise && !at ? at = setInterval(function() {
                    li(f)
                }, f.autoReinitialiseDelay) : !f.autoReinitialise && at && clearInterval(at);
                p && r.scrollTop(0) && ft(p, !1);
                w && r.scrollLeft(0) && yt(w, !1);
                r.trigger("jsp-initialised", [b || k])
            }

            function nr() {
                k && (e.append(n('<div class="jspVerticalBar" />').append(n('<div class="jspCap jspCapTop" />'), n('<div class="jspTrack" />').append(n('<div class="jspDrag" />').append(n('<div class="jspDragTop" />'), n('<div class="jspDragBottom" />'))), n('<div class="jspCap jspCapBottom" />'))), ni = e.find(">.jspVerticalBar"), g = ni.find(">.jspTrack"), p = g.find(">.jspDrag"), f.showArrows && (wt = n('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", ut(0, -1)).bind("click.jsp", pt), bt = n('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", ut(0, 1)).bind("click.jsp", pt), f.arrowScrollOnHover && (wt.bind("mouseover.jsp", ut(0, -1, wt)), bt.bind("mouseover.jsp", ut(0, 1, bt))), ki(g, f.verticalArrowPositions, wt, bt)), lt = s, e.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    lt -= n(this).outerHeight()
                }), p.hover(function() {
                    p.addClass("jspHover")
                }, function() {
                    p.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    n("html").bind("dragstart.jsp selectstart.jsp", pt);
                    p.addClass("jspActive");
                    var i = t.pageY - p.position().top;
                    return n("html").bind("mousemove.jsp", function(n) {
                        ct(n.pageY - i, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", gi), !1
                }), wi())
            }

            function wi() {
                g.height(lt + "px");
                l = 0;
                si = f.verticalGutter + g.outerWidth();
                o.width(h - si - ht);
                try {
                    ni.position().left === 0 && o.css("margin-left", si + "px")
                } catch (n) {}
            }

            function tr() {
                b && (e.append(n('<div class="jspHorizontalBar" />').append(n('<div class="jspCap jspCapLeft" />'), n('<div class="jspTrack" />').append(n('<div class="jspDrag" />').append(n('<div class="jspDragLeft" />'), n('<div class="jspDragRight" />'))), n('<div class="jspCap jspCapRight" />'))), ti = e.find(">.jspHorizontalBar"), nt = ti.find(">.jspTrack"), w = nt.find(">.jspDrag"), f.showArrows && (kt = n('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", ut(-1, 0)).bind("click.jsp", pt), dt = n('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", ut(1, 0)).bind("click.jsp", pt), f.arrowScrollOnHover && (kt.bind("mouseover.jsp", ut(-1, 0, kt)), dt.bind("mouseover.jsp", ut(1, 0, dt))), ki(nt, f.horizontalArrowPositions, kt, dt)), w.hover(function() {
                    w.addClass("jspHover")
                }, function() {
                    w.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    n("html").bind("dragstart.jsp selectstart.jsp", pt);
                    w.addClass("jspActive");
                    var i = t.pageX - w.position().left;
                    return n("html").bind("mousemove.jsp", function(n) {
                        vt(n.pageX - i, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", gi), !1
                }), st = e.innerWidth(), bi())
            }

            function bi() {
                e.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    st -= n(this).outerWidth()
                });
                nt.width(st + "px");
                a = 0
            }

            function ir() {
                if (b && k) {
                    var t = nt.outerHeight(),
                        i = g.outerWidth();
                    lt -= t;
                    n(ti).find(">.jspCap:visible,>.jspArrow").each(function() {
                        st += n(this).outerWidth()
                    });
                    st -= i;
                    s -= i;
                    h -= t;
                    nt.parent().append(n('<div class="jspCorner" />').css("width", t + "px"));
                    wi();
                    bi()
                }
                b && o.width(e.outerWidth() - ht + "px");
                v = o.outerHeight();
                gt = v / s;
                b && (rt = Math.ceil(1 / oi * st), rt > f.horizontalDragMaxWidth ? rt = f.horizontalDragMaxWidth : rt < f.horizontalDragMinWidth && (rt = f.horizontalDragMinWidth), w.width(rt + "px"), tt = st - rt, vi(a));
                k && (it = Math.ceil(1 / gt * lt), it > f.verticalDragMaxHeight ? it = f.verticalDragMaxHeight : it < f.verticalDragMinHeight && (it = f.verticalDragMinHeight), p.height(it + "px"), d = lt - it, ai(l))
            }

            function ki(n, t, i, r) {
                var u = "before",
                    f = "after",
                    e;
                t == "os" && (t = /Mac/.test(navigator.platform) ? "after" : "split");
                t == u ? f = t : t == f && (u = t, e = i, i = r, r = e);
                n[u](i)[f](r)
            }

            function ut(n, t, i) {
                return function() {
                    return rr(n, t, this, i), this.blur(), !1
                }
            }

            function rr(t, i, r, u) {
                r = n(r).addClass("jspActive");
                var o, e, s = !0,
                    h = function() {
                        t !== 0 && c.scrollByX(t * f.arrowButtonSpeed);
                        i !== 0 && c.scrollByY(i * f.arrowButtonSpeed);
                        e = setTimeout(h, s ? f.initialDelay : f.arrowRepeatFreq);
                        s = !1
                    };
                h();
                o = u ? "mouseout.jsp" : "mouseup.jsp";
                u = u || n("html");
                u.bind(o, function() {
                    r.removeClass("jspActive");
                    e && clearTimeout(e);
                    e = null;
                    u.unbind(o)
                })
            }

            function ur() {
                di();
                k && g.bind("mousedown.jsp", function(t) {
                    if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                        var e = n(this),
                            y = e.offset(),
                            o = t.pageY - y.top - l,
                            r, h = !0,
                            a = function() {
                                var p = e.offset(),
                                    n = t.pageY - p.top - it / 2,
                                    i = s * f.scrollPagePercent,
                                    y = d * i / (v - s);
                                if (o < 0) l - y > n ? c.scrollByY(-i) : ct(n);
                                else if (o > 0) l + y < n ? c.scrollByY(i) : ct(n);
                                else {
                                    u();
                                    return
                                }
                                r = setTimeout(a, h ? f.initialDelay : f.trackClickRepeatFreq);
                                h = !1
                            },
                            u = function() {
                                r && clearTimeout(r);
                                r = null;
                                n(document).unbind("mouseup.jsp", u)
                            };
                        return a(), n(document).bind("mouseup.jsp", u), !1
                    }
                });
                b && nt.bind("mousedown.jsp", function(t) {
                    if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                        var e = n(this),
                            v = e.offset(),
                            o = t.pageX - v.left - a,
                            r, s = !0,
                            l = function() {
                                var p = e.offset(),
                                    n = t.pageX - p.left - rt / 2,
                                    i = h * f.scrollPagePercent,
                                    v = tt * i / (y - h);
                                if (o < 0) a - v > n ? c.scrollByX(-i) : vt(n);
                                else if (o > 0) a + v < n ? c.scrollByX(i) : vt(n);
                                else {
                                    u();
                                    return
                                }
                                r = setTimeout(l, s ? f.initialDelay : f.trackClickRepeatFreq);
                                s = !1
                            },
                            u = function() {
                                r && clearTimeout(r);
                                r = null;
                                n(document).unbind("mouseup.jsp", u)
                            };
                        return l(), n(document).bind("mouseup.jsp", u), !1
                    }
                })
            }

            function di() {
                nt && nt.unbind("mousedown.jsp");
                g && g.unbind("mousedown.jsp")
            }

            function gi() {
                n("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                p && p.removeClass("jspActive");
                w && w.removeClass("jspActive")
            }

            function ct(n, t) {
                k && (n < 0 ? n = 0 : n > d && (n = d), t === i && (t = f.animateScroll), t ? c.animate(p, "top", n, ai) : (p.css("top", n), ai(n)))
            }

            function ai(n) {
                n === i && (n = p.position().top);
                e.scrollTop(0);
                l = n;
                var t = l === 0,
                    u = l == d,
                    h = n / d,
                    f = -h * (v - s);
                (ii != t || ui != u) && (ii = t, ui = u, r.trigger("jsp-arrow-change", [ii, ui, ri, fi]));
                fr(t, u);
                o.css("top", f);
                r.trigger("jsp-scroll-y", [-f, t, u]).trigger("scroll")
            }

            function vt(n, t) {
                b && (n < 0 ? n = 0 : n > tt && (n = tt), t === i && (t = f.animateScroll), t ? c.animate(w, "left", n, vi) : (w.css("left", n), vi(n)))
            }

            function vi(n) {
                n === i && (n = w.position().left);
                e.scrollTop(0);
                a = n;
                var t = a === 0,
                    u = a == tt,
                    s = n / tt,
                    f = -s * (y - h);
                (ri != t || fi != u) && (ri = t, fi = u, r.trigger("jsp-arrow-change", [ii, ui, ri, fi]));
                er(t, u);
                o.css("left", f);
                r.trigger("jsp-scroll-x", [-f, t, u]).trigger("scroll")
            }

            function fr(n, t) {
                f.showArrows && (wt[n ? "addClass" : "removeClass"]("jspDisabled"), bt[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function er(n, t) {
                f.showArrows && (kt[n ? "addClass" : "removeClass"]("jspDisabled"), dt[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function ft(n, t) {
                var i = n / (v - s);
                ct(i * d, t)
            }

            function yt(n, t) {
                var i = n / (y - h);
                vt(i * tt, t)
            }

            function ei(t, i, r) {
                var u, v, y, o = 0,
                    c = 0,
                    p, w, b, k, l, a;
                try {
                    u = n(t)
                } catch (d) {
                    return
                }
                for (v = u.outerHeight(), y = u.outerWidth(), e.scrollTop(0), e.scrollLeft(0); !u.is(".jspPane");)
                    if (o += u.position().top, c += u.position().left, u = u.offsetParent(), /^body|html$/i.test(u[0].nodeName)) return;
                p = ot();
                b = p + s;
                o < p || i ? l = o - f.verticalGutter : o + v > b && (l = o - s + v + f.verticalGutter);
                l && ft(l, r);
                w = et();
                k = w + h;
                c < w || i ? a = c - f.horizontalGutter : c + y > k && (a = c - h + y + f.horizontalGutter);
                a && yt(a, r)
            }

            function et() {
                return -o.position().left
            }

            function ot() {
                return -o.position().top
            }

            function or() {
                var n = v - s;
                return n > 20 && n - ot() < 10
            }

            function sr() {
                var n = y - h;
                return n > 20 && n - et() < 10
            }

            function hr() {
                e.unbind(ci).bind(ci, function(n, t, i, r) {
                    var u = a,
                        e = l;
                    return c.scrollBy(i * f.mouseWheelSpeed, -r * f.mouseWheelSpeed, !1), u == a && e == l
                })
            }

            function cr() {
                e.unbind(ci)
            }

            function pt() {
                return !1
            }

            function lr() {
                o.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(n) {
                    ei(n.target, !1)
                })
            }

            function ar() {
                o.find(":input,a").unbind("focus.jsp")
            }

            function vr() {
                function h() {
                    var n = a,
                        r = l;
                    switch (t) {
                        case 40:
                            c.scrollByY(f.keyboardSpeed, !1);
                            break;
                        case 38:
                            c.scrollByY(-f.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            c.scrollByY(s * f.scrollPagePercent, !1);
                            break;
                        case 33:
                            c.scrollByY(-s * f.scrollPagePercent, !1);
                            break;
                        case 39:
                            c.scrollByX(f.keyboardSpeed, !1);
                            break;
                        case 37:
                            c.scrollByX(-f.keyboardSpeed, !1)
                    }
                    return i = n != a || r != l
                }
                var t, i, u = [];
                b && u.push(ti[0]);
                k && u.push(ni[0]);
                o.focus(function() {
                    r.focus()
                });
                r.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(r) {
                    if (r.target === this || u.length && n(r.target).closest(u).length) {
                        var f = a,
                            e = l;
                        switch (r.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                t = r.keyCode;
                                h();
                                break;
                            case 35:
                                ft(v - s);
                                t = null;
                                break;
                            case 36:
                                ft(0);
                                t = null
                        }
                        return i = r.keyCode == t && f != a || e != l, !i
                    }
                }).bind("keypress.jsp", function(n) {
                    return n.keyCode == t && h(), !i
                });
                f.hideFocus ? (r.css("outline", "none"), "hideFocus" in e[0] && r.attr("hideFocus", !0)) : (r.css("outline", ""), "hideFocus" in e[0] && r.attr("hideFocus", !1))
            }

            function yr() {
                r.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }

            function pr() {
                if (location.hash && location.hash.length > 1) {
                    var t, r, i = escape(location.hash.substr(1));
                    try {
                        t = n("#" + i + ', a[name="' + i + '"]')
                    } catch (u) {
                        return
                    }
                    t.length && o.find(i) && (e.scrollTop() === 0 ? r = setInterval(function() {
                        e.scrollTop() > 0 && (ei(t, !0), n(document).scrollTop(e.position().top), clearInterval(r))
                    }, 50) : (ei(t, !0), n(document).scrollTop(e.position().top)))
                }
            }

            function wr() {
                n(document.body).data("jspHijack") || (n(document.body).data("jspHijack", !0), n(document.body).delegate("a[href*=#]", "click", function(i) {
                    var c = this.href.substr(0, this.href.indexOf("#")),
                        s = location.href,
                        f, r, u, h, e, o;
                    if (location.href.indexOf("#") !== -1 && (s = location.href.substr(0, location.href.indexOf("#"))), c === s) {
                        f = escape(this.href.substr(this.href.indexOf("#") + 1));
                        r;
                        try {
                            r = n("#" + f + ', a[name="' + f + '"]')
                        } catch (l) {
                            return
                        }
                        r.length && (u = r.closest(".jspScrollable"), h = u.data("jsp"), h.scrollToElement(r, !0), u[0].scrollIntoView && (e = n(t).scrollTop(), o = r.offset().top, (o < e || o > e + n(t).height()) && u[0].scrollIntoView()), i.preventDefault())
                    }
                }))
            }

            function br() {
                var u, f, t, i, n, r = !1;
                e.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(e) {
                    var o = e.originalEvent.touches[0];
                    u = et();
                    f = ot();
                    t = o.pageX;
                    i = o.pageY;
                    n = !1;
                    r = !0
                }).bind("touchmove.jsp", function(e) {
                    if (r) {
                        var o = e.originalEvent.touches[0],
                            s = a,
                            h = l;
                        return c.scrollTo(u + t - o.pageX, f + i - o.pageY), n = n || Math.abs(t - o.pageX) > 5 || Math.abs(i - o.pageY) > 5, s == a && h == l
                    }
                }).bind("touchend.jsp", function() {
                    r = !1
                }).bind("click.jsp-touchclick", function() {
                    if (n) return n = !1, !1
                })
            }

            function kr() {
                var n = ot(),
                    t = et();
                r.removeClass("jspScrollable").unbind(".jsp");
                r.replaceWith(hi.append(o.children()));
                hi.scrollTop(n);
                hi.scrollLeft(t);
                at && clearInterval(at)
            }
            var f, c = this,
                o, h, s, e, y, v, oi, gt, k, b, p, d, l, w, tt, a, ni, g, si, lt, it, wt, bt, ti, nt, st, rt, kt, dt, at, yi, ht, pi, ii = !0,
                ri = !0,
                ui = !1,
                fi = !1,
                hi = r.clone(!1, !1).empty(),
                ci = n.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            yi = r.css("paddingTop") + " " + r.css("paddingRight") + " " + r.css("paddingBottom") + " " + r.css("paddingLeft");
            ht = (parseInt(r.css("paddingLeft"), 10) || 0) + (parseInt(r.css("paddingRight"), 10) || 0);
            n.extend(c, {
                reinitialise: function(t) {
                    t = n.extend({}, f, t);
                    li(t)
                },
                scrollToElement: function(n, t, i) {
                    ei(n, t, i)
                },
                scrollTo: function(n, t, i) {
                    yt(n, i);
                    ft(t, i)
                },
                scrollToX: function(n, t) {
                    yt(n, t)
                },
                scrollToY: function(n, t) {
                    ft(n, t)
                },
                scrollToPercentX: function(n, t) {
                    yt(n * (y - h), t)
                },
                scrollToPercentY: function(n, t) {
                    ft(n * (v - s), t)
                },
                scrollBy: function(n, t, i) {
                    c.scrollByX(n, i);
                    c.scrollByY(t, i)
                },
                scrollByX: function(n, t) {
                    var i = et() + Math[n < 0 ? "floor" : "ceil"](n),
                        r = i / (y - h);
                    vt(r * tt, t)
                },
                scrollByY: function(n, t) {
                    var i = ot() + Math[n < 0 ? "floor" : "ceil"](n),
                        r = i / (v - s);
                    ct(r * d, t)
                },
                positionDragX: function(n, t) {
                    vt(n, t)
                },
                positionDragY: function(n, t) {
                    ct(n, t)
                },
                animate: function(n, t, i, r) {
                    var u = {};
                    u[t] = i;
                    n.animate(u, {
                        duration: f.animateDuration,
                        easing: f.animateEase,
                        queue: !1,
                        step: r
                    })
                },
                getContentPositionX: function() {
                    return et()
                },
                getContentPositionY: function() {
                    return ot()
                },
                getContentWidth: function() {
                    return y
                },
                getContentHeight: function() {
                    return v
                },
                getPercentScrolledX: function() {
                    return et() / (y - h)
                },
                getPercentScrolledY: function() {
                    return ot() / (v - s)
                },
                getIsScrollableH: function() {
                    return b
                },
                getIsScrollableV: function() {
                    return k
                },
                getContentPane: function() {
                    return o
                },
                scrollToBottom: function(n) {
                    ct(d, n)
                },
                hijackInternalLinks: n.noop,
                destroy: function() {
                    kr()
                }
            });
            li(u)
        }
        return r = n.extend({}, n.fn.jScrollPane.defaults, r), n.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            r[this] = r[this] || r.speed
        }), this.each(function() {
            var t = n(this),
                i = t.data("jsp");
            i ? i.reinitialise(r) : (n("script", t).filter('[type="text/javascript"],:not([type])').remove(), i = new u(t, r), t.data("jsp", i))
        })
    };
    n.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: i,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}(jQuery, this),
function(n, t) {
    "use strict";
    var i = t.event,
        r, u;
    i.special.smartresize = {
        setup: function() {
            t(this).bind("resize", i.special.smartresize.handler)
        },
        teardown: function() {
            t(this).unbind("resize", i.special.smartresize.handler)
        },
        handler: function(n, t) {
            var i = this,
                u = arguments;
            n.type = "smartresize";
            r && clearTimeout(r);
            r = setTimeout(function() {
                jQuery.event.handle.apply(i, u)
            }, t === "execAsap" ? 0 : 100)
        }
    };
    t.fn.smartresize = function(n) {
        return n ? this.bind("smartresize", n) : this.trigger("smartresize", ["execAsap"])
    };
    t.Mason = function(n, i) {
        this.element = t(i);
        this._create(n);
        this._init()
    };
    t.Mason.settings = {
        isResizable: !0,
        isAnimated: !1,
        animationOptions: {
            queue: !1,
            duration: 500
        },
        gutterWidth: 0,
        isRTL: !1,
        isFitWidth: !1,
        containerStyle: {
            position: "relative"
        }
    };
    t.Mason.prototype = {
        _filterFindBricks: function(n) {
            var t = this.options.itemSelector;
            return t ? n.filter(t).add(n.find(t)) : n
        },
        _getBricks: function(n) {
            return this._filterFindBricks(n).css({
                position: "absolute"
            }).addClass("masonry-brick")
        },
        _create: function(i) {
            var r, u, f, e;
            this.options = t.extend(!0, {}, t.Mason.settings, i);
            this.styleQueue = [];
            r = this.element[0].style;
            this.originalStyle = {
                height: r.height || ""
            };
            u = this.options.containerStyle;
            for (f in u) this.originalStyle[f] = r[f] || "";
            this.element.css(u);
            this.horizontalDirection = this.options.isRTL ? "right" : "left";
            this.offset = {
                x: parseInt(this.element.css("padding-" + this.horizontalDirection), 10),
                y: parseInt(this.element.css("padding-top"), 10)
            };
            this.isFluid = this.options.columnWidth && typeof this.options.columnWidth == "function";
            e = this;
            setTimeout(function() {
                e.element.addClass("masonry")
            }, 0);
            this.options.isResizable && t(n).bind("smartresize.masonry", function() {
                e.resize()
            });
            this.reloadItems()
        },
        _init: function(n) {
            this._getColumns();
            this._reLayout(n)
        },
        option: function(n) {
            t.isPlainObject(n) && (this.options = t.extend(!0, this.options, n))
        },
        layout: function(n, t) {
            for (var u, f, o, s, e, i = 0, r = n.length; i < r; i++) this._placeBrick(n[i]);
            if (u = {}, u.height = Math.max.apply(Math, this.colYs), this.options.isFitWidth) {
                for (f = 0, i = this.cols; --i;) {
                    if (this.colYs[i] !== 0) break;
                    f++
                }
                u.width = (this.cols - f) * this.columnWidth - this.options.gutterWidth
            }
            for (this.styleQueue.push({
                    $el: this.element,
                    style: u
                }), o = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css", s = this.options.animationOptions, i = 0, r = this.styleQueue.length; i < r; i++) e = this.styleQueue[i], e.$el[o](e.style, s);
            this.styleQueue = [];
            t && t.call(n);
            this.isLaidOut = !0
        },
        _getColumns: function() {
            var t = this.options.isFitWidth ? this.element.parent() : this.element,
                n = t.width();
            this.columnWidth = this.isFluid ? this.options.columnWidth(n) : this.options.columnWidth || this.$bricks.outerWidth(!0) || n;
            this.columnWidth += this.options.gutterWidth;
            this.cols = Math.floor((n + this.options.gutterWidth) / this.columnWidth);
            this.cols = Math.max(this.cols, 1)
        },
        _placeBrick: function(n) {
            var s = t(n),
                r, l, u, a, f, e, o, i, h, c, v, y;
            if (r = Math.ceil(s.outerWidth(!0) / (this.columnWidth + this.options.gutterWidth)), r = Math.min(r, this.cols), r === 1) u = this.colYs;
            else
                for (l = this.cols + 1 - r, u = [], f = 0; f < l; f++) a = this.colYs.slice(f, f + r), u[f] = Math.max.apply(Math, a);
            for (e = Math.min.apply(Math, u), o = 0, i = 0, h = u.length; i < h; i++)
                if (u[i] === e) {
                    o = i;
                    break
                }
            for (c = {
                    top: e + this.offset.y
                }, c[this.horizontalDirection] = this.columnWidth * o + this.offset.x, this.styleQueue.push({
                    $el: s,
                    style: c
                }), v = e + s.outerHeight(!0), y = this.cols + 1 - h, i = 0; i < y; i++) this.colYs[o + i] = v
        },
        resize: function() {
            var n = this.cols;
            this._getColumns();
            (this.isFluid || this.cols !== n) && this._reLayout()
        },
        _reLayout: function(n) {
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.layout(this.$bricks, n)
        },
        reloadItems: function() {
            this.$bricks = this._getBricks(this.element.children())
        },
        reload: function(n) {
            this.reloadItems();
            this._init(n)
        },
        appended: function(n, t, i) {
            if (t) {
                this._filterFindBricks(n).css({
                    top: this.element.height()
                });
                var r = this;
                setTimeout(function() {
                    r._appended(n, i)
                }, 1)
            } else this._appended(n, i)
        },
        _appended: function(n, t) {
            var i = this._getBricks(n);
            this.$bricks = this.$bricks.add(i);
            this.layout(i, t)
        },
        remove: function(n) {
            this.$bricks = this.$bricks.not(n);
            n.remove()
        },
        destroy: function() {
            var r, i;
            this.$bricks.removeClass("masonry-brick").each(function() {
                this.style.position = "";
                this.style.top = "";
                this.style.left = ""
            });
            r = this.element[0].style;
            for (i in this.originalStyle) r[i] = this.originalStyle[i];
            this.element.unbind(".masonry").removeClass("masonry").removeData("masonry");
            t(n).unbind(".masonry")
        }
    };
    t.fn.imagesLoaded = function(n) {
        function u(n) {
            var i = n.target;
            i.src !== o && t.inArray(i, s) === -1 && (s.push(i), --e <= 0 && (setTimeout(f), r.unbind(".imagesLoaded", u)))
        }

        function f() {
            n.call(i, r)
        }
        var i = this,
            r = i.find("img").add(i.filter("img")),
            e = r.length,
            o = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            s = [];
        return e || f(), r.bind("load.imagesLoaded error.imagesLoaded", u).each(function() {
            var n = this.src;
            this.src = o;
            this.src = n
        }), i
    };
    u = function(t) {
        n.console && n.console.error(t)
    };
    t.fn.masonry = function(n) {
        if (typeof n == "string") {
            var i = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var r = t.data(this, "masonry");
                if (r) {
                    if (!t.isFunction(r[n]) || n.charAt(0) === "_") {
                        u("no such method '" + n + "' for masonry instance");
                        return
                    }
                    r[n].apply(r, i)
                } else u("cannot call methods on masonry prior to initialization; attempted to call method '" + n + "'")
            })
        } else this.each(function() {
            var i = t.data(this, "masonry");
            i ? (i.option(n || {}), i._init()) : t.data(this, "masonry", new t.Mason(n, this))
        });
        return this
    }
}(window, jQuery),
function(n, t) {
    "use strict";

    function i(n) {
        var t = Array.prototype.slice.call(arguments, 1);
        return n.prop ? n.prop.apply(n, t) : n.attr.apply(n, t)
    }

    function r(n, t, i) {
        var r, u;
        for (r in i) i.hasOwnProperty(r) && (u = r.replace(/ |$/g, t.eventNamespace), n.bind(u, i[r]))
    }

    function u(n, t, i) {
        r(n, i, {
            focus: function() {
                t.addClass(i.focusClass)
            },
            blur: function() {
                t.removeClass(i.focusClass);
                t.removeClass(i.activeClass)
            },
            mouseenter: function() {
                t.addClass(i.hoverClass)
            },
            mouseleave: function() {
                t.removeClass(i.hoverClass);
                t.removeClass(i.activeClass)
            },
            "mousedown touchbegin": function() {
                n.is(":disabled") || t.addClass(i.activeClass)
            },
            "mouseup touchend": function() {
                t.removeClass(i.activeClass)
            }
        })
    }

    function e(n, t) {
        n.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass)
    }

    function y(n, t, i) {
        i ? n.addClass(t) : n.removeClass(t)
    }

    function o(n, t, i) {
        var r = "checked",
            u = t.is(":" + r);
        t.prop ? t.prop(r, u) : u ? t.attr(r, r) : t.removeAttr(r);
        y(n, i.checkedClass, u)
    }

    function f(n, t, i) {
        y(n, i.disabledClass, t.is(":disabled"))
    }

    function h(n, t, i) {
        switch (i) {
            case "after":
                return n.after(t), n.next();
            case "before":
                return n.before(t), n.prev();
            case "wrap":
                return n.wrap(t), n.parent()
        }
        return null
    }

    function s(t, r, u) {
        var e, o, s;
        return u || (u = {}), u = n.extend({
            bind: {},
            divClass: null,
            divWrap: "wrap",
            spanClass: null,
            spanHtml: null,
            spanWrap: "wrap"
        }, u), e = n("<div />"), o = n("<span />"), r.autoHide && t.is(":hidden") && "none" === t.css("display") && e.hide(), u.divClass && e.addClass(u.divClass), r.wrapperClass && e.addClass(r.wrapperClass), u.spanClass && o.addClass(u.spanClass), s = i(t, "id"), r.useID && s && i(e, "id", r.idPrefix + "-" + s), u.spanHtml && o.html(u.spanHtml), e = h(t, e, u.divWrap), o = h(t, o, u.spanWrap), f(e, t, r), {
            div: e,
            span: o
        }
    }

    function a(t, i) {
        var r;
        return i.wrapperClass ? (r = n("<span />").addClass(i.wrapperClass), r = h(t, r, "wrap")) : null
    }

    function it() {
        var u, t, i, r;
        return r = "rgb(120,2,153)", t = n('<div style="width:0;height:0;color:' + r + '">'), n("body").append(t), i = t.get(0), u = window.getComputedStyle ? window.getComputedStyle(i, "").color : (i.currentStyle || i.style || {}).color, t.remove(), u.replace(/ /g, "") !== r
    }

    function rt(t) {
        return t ? n("<span />").text(t).html() : ""
    }

    function p() {
        return navigator.cpuClass && !navigator.product
    }

    function ut() {
        return window.XMLHttpRequest !== void 0 ? !0 : !1
    }

    function w(n) {
        var t;
        return n[0].multiple ? !0 : (t = i(n, "size"), !t || 1 >= t ? !1 : !0)
    }

    function c() {
        return !1
    }

    function l(n, t) {
        var i = "none";
        r(n, t, {
            "selectstart dragstart mousedown": c
        });
        n.css({
            MozUserSelect: i,
            msUserSelect: i,
            webkitUserSelect: i,
            userSelect: i
        })
    }

    function b(n, t, i) {
        var r = n.val();
        "" === r ? r = i.fileDefaultHtml : (r = r.split(/[\/\\]+/), r = r[r.length - 1]);
        t.text(r)
    }

    function k(n, t, i) {
        var r, u;
        for (r = [], n.each(function() {
                var n;
                for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (r.push({
                    el: this,
                    name: n,
                    old: this.style[n]
                }), this.style[n] = t[n])
            }), i(); r.length;) u = r.pop(), u.el.style[u.name] = u.old
    }

    function d(n, t) {
        var i;
        i = n.parents();
        i.push(n[0]);
        i = i.not(":visible");
        k(i, {
            visibility: "hidden",
            display: "block",
            position: "absolute"
        }, t)
    }

    function g(n, t) {
        return function() {
            n.unwrap().unwrap().unbind(t.eventNamespace)
        }
    }
    var v = !0,
        nt = !1,
        tt = [{
            match: function(n) {
                return n.is("a, button, :submit, :reset, input[type='button']")
            },
            apply: function(n, t) {
                var o, h, a, v, c;
                return h = t.submitDefaultHtml, n.is(":reset") && (h = t.resetDefaultHtml), v = n.is("a, button") ? function() {
                    return n.html() || h
                } : function() {
                    return rt(i(n, "value")) || h
                }, a = s(n, t, {
                    divClass: t.buttonClass,
                    spanHtml: v()
                }), o = a.div, u(n, o, t), c = !1, r(o, t, {
                    "click touchend": function() {
                        var r, f, t, u;
                        c || n.is(":disabled") || (c = !0, n[0].dispatchEvent ? (r = document.createEvent("MouseEvents"), r.initEvent("click", !0, !0), f = n[0].dispatchEvent(r), n.is("a") && f && (t = i(n, "target"), u = i(n, "href"), t && "_self" !== t ? window.open(u, t) : document.location.href = u)) : n.click(), c = !1)
                    }
                }), l(o, t), {
                    remove: function() {
                        return o.after(n), o.remove(), n.unbind(t.eventNamespace), n
                    },
                    update: function() {
                        e(o, t);
                        f(o, n, t);
                        n.detach();
                        a.span.html(v()).append(n)
                    }
                }
            }
        }, {
            match: function(n) {
                return n.is(":checkbox")
            },
            apply: function(n, t) {
                var c, h, i;
                return c = s(n, t, {
                    divClass: t.checkboxClass
                }), h = c.div, i = c.span, u(n, h, t), r(n, t, {
                    "click touchend": function() {
                        o(i, n, t)
                    }
                }), o(i, n, t), {
                    remove: g(n, t),
                    update: function() {
                        e(h, t);
                        i.removeClass(t.checkedClass);
                        o(i, n, t);
                        f(h, n, t)
                    }
                }
            }
        }, {
            match: function(n) {
                return n.is(":file")
            },
            apply: function(t, o) {
                function v() {
                    b(t, c, o)
                }
                var y, a, c, w;
                return y = s(t, o, {
                    divClass: o.fileClass,
                    spanClass: o.fileButtonClass,
                    spanHtml: o.fileButtonHtml,
                    spanWrap: "after"
                }), a = y.div, w = y.span, c = n("<span />").html(o.fileDefaultHtml), c.addClass(o.filenameClass), c = h(t, c, "after"), i(t, "size") || i(t, "size", a.width() / 10), u(t, a, o), v(), p() ? r(t, o, {
                    click: function() {
                        t.trigger("change");
                        setTimeout(v, 0)
                    }
                }) : r(t, o, {
                    change: v
                }), l(c, o), l(w, o), {
                    remove: function() {
                        return c.remove(), w.remove(), t.unwrap().unbind(o.eventNamespace)
                    },
                    update: function() {
                        e(a, o);
                        b(t, c, o);
                        f(a, t, o)
                    }
                }
            }
        }, {
            match: function(n) {
                if (n.is("input")) {
                    var t = (" " + i(n, "type") + " ").toLowerCase();
                    return " color date datetime datetime-local email month number password search tel text time url week ".indexOf(t) >= 0
                }
                return !1
            },
            apply: function(n, t) {
                var r, f;
                return r = i(n, "type"), n.addClass(t.inputClass), f = a(n, t), u(n, n, t), t.inputAddTypeAsClass && n.addClass(r), {
                    remove: function() {
                        n.removeClass(t.inputClass);
                        t.inputAddTypeAsClass && n.removeClass(r);
                        f && n.unwrap()
                    },
                    update: c
                }
            }
        }, {
            match: function(n) {
                return n.is(":radio")
            },
            apply: function(t, h) {
                var l, c, a;
                return l = s(t, h, {
                    divClass: h.radioClass
                }), c = l.div, a = l.span, u(t, c, h), r(t, h, {
                    "click touchend": function() {
                        n.uniform.update(n(':radio[name="' + i(t, "name") + '"]'))
                    }
                }), o(a, t, h), {
                    remove: g(t, h),
                    update: function() {
                        e(c, h);
                        o(a, t, h);
                        f(c, t, h)
                    }
                }
            }
        }, {
            match: function(n) {
                return n.is("select") && !w(n) ? !0 : !1
            },
            apply: function(t, i) {
                var c, h, o, a;
                return i.selectAutoWidth && d(t, function() {
                    a = t.width()
                }), c = s(t, i, {
                    divClass: i.selectClass,
                    spanHtml: (t.find(":selected:first") || t.find("option:first")).html(),
                    spanWrap: "before"
                }), h = c.div, o = c.span, i.selectAutoWidth ? d(t, function() {
                    k(n([o[0], h[0]]), {
                        display: "block"
                    }, function() {
                        var n;
                        n = o.outerWidth() - o.width();
                        h.width(a + n);
                        o.width(a)
                    })
                }) : h.addClass("fixedWidth"), u(t, h, i), r(t, i, {
                    change: function() {
                        o.html(t.find(":selected").html());
                        h.removeClass(i.activeClass)
                    },
                    "click touchend": function() {
                        var n = t.find(":selected").html();
                        o.html() !== n && t.trigger("change")
                    },
                    keyup: function() {
                        o.html(t.find(":selected").html())
                    }
                }), l(o, i), {
                    remove: function() {
                        return o.remove(), t.unwrap().unbind(i.eventNamespace), t
                    },
                    update: function() {
                        i.selectAutoWidth ? (n.uniform.restore(t), t.uniform(i)) : (e(h, i), o.html(t.find(":selected").html()), f(h, t, i))
                    }
                }
            }
        }, {
            match: function(n) {
                return n.is("select") && w(n) ? !0 : !1
            },
            apply: function(n, t) {
                var i;
                return n.addClass(t.selectMultiClass), i = a(n, t), u(n, n, t), {
                    remove: function() {
                        n.removeClass(t.selectMultiClass);
                        i && n.unwrap()
                    },
                    update: c
                }
            }
        }, {
            match: function(n) {
                return n.is("textarea")
            },
            apply: function(n, t) {
                var i;
                return n.addClass(t.textareaClass), i = a(n, t), u(n, n, t), {
                    remove: function() {
                        n.removeClass(t.textareaClass);
                        i && n.unwrap()
                    },
                    update: c
                }
            }
        }];
    p() && !ut() && (v = !1);
    n.uniform = {
        defaults: {
            activeClass: "active",
            autoHide: !0,
            buttonClass: "button",
            checkboxClass: "checker",
            checkedClass: "checked",
            disabledClass: "disabled",
            eventNamespace: ".uniform",
            fileButtonClass: "action",
            fileButtonHtml: "Choose File",
            fileClass: "uploader",
            fileDefaultHtml: "No file selected",
            filenameClass: "filename",
            focusClass: "focus",
            hoverClass: "hover",
            idPrefix: "uniform",
            inputAddTypeAsClass: !0,
            inputClass: "uniform-input",
            radioClass: "radio",
            resetDefaultHtml: "Reset",
            resetSelector: !1,
            selectAutoWidth: !0,
            selectClass: "selector",
            selectMultiClass: "uniform-multiselect",
            submitDefaultHtml: "Submit",
            textareaClass: "uniform",
            useID: !0,
            wrapperClass: null
        },
        elements: []
    };
    n.fn.uniform = function(t) {
        var i = this;
        return t = n.extend({}, n.uniform.defaults, t), nt || (nt = !0, it() && (v = !1)), v ? (t.resetSelector && n(t.resetSelector).mouseup(function() {
            window.setTimeout(function() {
                n.uniform.update(i)
            }, 10)
        }), this.each(function() {
            var r, u, f, i = n(this);
            if (i.data("uniformed")) return n.uniform.update(i), void 0;
            for (r = 0; tt.length > r; r += 1)
                if (u = tt[r], u.match(i, t)) return f = u.apply(i, t), i.data("uniformed", f), n.uniform.elements.push(i.get(0)), void 0
        })) : this
    };
    n.uniform.restore = n.fn.uniform.restore = function(i) {
        i === t && (i = n.uniform.elements);
        n(i).each(function() {
            var t, i, r = n(this);
            i = r.data("uniformed");
            i && (i.remove(), t = n.inArray(this, n.uniform.elements), t >= 0 && n.uniform.elements.splice(t, 1), r.removeData("uniformed"))
        })
    };
    n.uniform.update = n.fn.uniform.update = function(i) {
        i === t && (i = n.uniform.elements);
        n(i).each(function() {
            var t, i = n(this);
            t = i.data("uniformed");
            t && t.update(i, t.options)
        })
    }
}(jQuery),
function(n) {
    function ut(n, t, i) {
        return i.transition == "transition" && t == "swing" && (t = "ease"), {
            anims: [],
            duration: n,
            orgDuration: n,
            easing: t,
            startTime: p()
        }
    }

    function k(n, t) {
        for (var i, r = 0, u = n.anims.length; r < u; r++)(i = n.anims[r], i) && i[0][t.transition](i[1], n.duration, n.easing, i[2])
    }

    function ft(n, t) {
        var r, e, i;
        for (f(t) || (t = !0), s(n.pre) && ft(n.pre, t), r = 0, e = n.anims.length; r < e; r++) i = n.anims[r], i[0].stop(!0), t && (i[0].css(i[1]), u(i[2]) && i[2]());
        s(n.post) && ft(n.post, t)
    }

    function ui(n, t, i) {
        t && t.remove();
        switch (i.fx) {
            case "fade":
            case "crossfade":
            case "cover-fade":
            case "uncover-fade":
                n.css("opacity", 1);
                n.css("filter", "")
        }
    }

    function et(n, t, i, r, u) {
        if (t[i] && t[i].call(n, r), u[i].length)
            for (var f = 0, e = u[i].length; f < e; f++) u[i][f].call(n, r);
        return []
    }

    function fi(n, i, r) {
        return i.length && (n.trigger(t(i[0][0], r), i[0][1]), i.shift()), i
    }

    function ei(t) {
        t.each(function() {
            var t = n(this);
            t.data("_cfs_isHidden", t.is(":hidden")).hide()
        })
    }

    function oi(t) {
        t && t.each(function() {
            var t = n(this);
            t.data("_cfs_isHidden") || t.show()
        })
    }

    function d(n) {
        return n.auto && clearTimeout(n.auto), n.progress && clearInterval(n.progress), n
    }

    function si(n, t, i, r, u, f, e) {
        return {
            width: e.width,
            height: e.height,
            items: {
                old: n,
                skipped: t,
                visible: i
            },
            scroll: {
                items: r,
                direction: u,
                duration: f
            }
        }
    }

    function hi(n, t, i, r) {
        var u = n.duration;
        return n.fx == "none" ? 0 : (u == "auto" ? u = t.scroll.duration / t.scroll.items * i : u < 10 && (u = r / u), u < 1) ? 0 : (n.fx == "fade" && (u = u / 2), Math.round(u))
    }

    function vt(n, t, u) {
        var s = i(n.items.minimum) ? n.items.minimum : n.items.visible + 1,
            f, e, o;
        t == "show" || t == "hide" ? f = t : s > t ? (r(u, "Not enough items (" + t + " total, " + s + " needed): Hiding navigation."), f = "hide") : f = "show";
        e = f == "show" ? "removeClass" : "addClass";
        o = l("hidden", u);
        n.auto.button && n.auto.button[f]()[e](o);
        n.prev.button && n.prev.button[f]()[e](o);
        n.next.button && n.next.button[f]()[e](o);
        n.pagination.container && n.pagination.container[f]()[e](o)
    }

    function g(n, t, i) {
        var r, f, u;
        n.circular || n.infinite || (r = t == "removeClass" || t == "addClass" ? t : !1, f = l("disabled", i), n.auto.button && r && n.auto.button[r](f), n.prev.button && (u = r || t == 0 ? "addClass" : "removeClass", n.prev.button[u](f)), n.next.button && (u = r || t == n.items.visible ? "addClass" : "removeClass", n.next.button[u](f)))
    }

    function ot(n, t) {
        return u(t) ? t = t.call(n) : o(t) && (t = {}), t
    }

    function or(n, t) {
        return t = ot(n, t), i(t) ? t = {
            visible: t
        } : t == "variable" ? t = {
            visible: t,
            width: t,
            height: t
        } : s(t) || (t = {}), t
    }

    function sr(n, t) {
        return t = ot(n, t), i(t) ? t = t <= 50 ? {
            items: t
        } : {
            duration: t
        } : e(t) ? t = {
            easing: t
        } : s(t) || (t = {}), t
    }

    function yt(t, i) {
        if (i = ot(t, i), e(i)) {
            var r = ir(i);
            i = r == -1 ? n(i) : r
        }
        return i
    }

    function hr(n, t) {
        return t = yt(n, t), c(t) ? t = {
            button: t
        } : f(t) ? t = {
            play: t
        } : i(t) && (t = {
            timeoutDuration: t
        }), t.progress && (e(t.progress) || c(t.progress)) && (t.progress = {
            bar: t.progress
        }), t
    }

    function cr(t, r) {
        return u(r.button) && (r.button = r.button.call(t)), e(r.button) && (r.button = n(r.button)), f(r.play) || (r.play = !0), i(r.delay) || (r.delay = 0), o(r.pauseOnEvent) && (r.pauseOnEvent = !0), f(r.pauseOnResize) || (r.pauseOnResize = !0), i(r.timeoutDuration) || (r.timeoutDuration = r.duration < 10 ? 2500 : r.duration * 5), r.progress && (u(r.progress.bar) && (r.progress.bar = r.progress.bar.call(t)), e(r.progress.bar) && (r.progress.bar = n(r.progress.bar)), r.progress.bar ? (u(r.progress.updater) || (r.progress.updater = n.fn.carouFredSel.progressbarUpdater), i(r.progress.interval) || (r.progress.interval = 50)) : r.progress = !1), r
    }

    function ci(n, t) {
        return t = yt(n, t), c(t) ? t = {
            button: t
        } : i(t) && (t = {
            key: t
        }), t
    }

    function li(t, i) {
        return u(i.button) && (i.button = i.button.call(t)), e(i.button) && (i.button = n(i.button)), e(i.key) && (i.key = ir(i.key)), i
    }

    function lr(n, t) {
        return t = yt(n, t), c(t) ? t = {
            container: t
        } : f(t) && (t = {
            keys: t
        }), t
    }

    function ar(t, r) {
        return u(r.container) && (r.container = r.container.call(t)), e(r.container) && (r.container = n(r.container)), i(r.items) || (r.items = !1), f(r.keys) || (r.keys = !1), u(r.anchorBuilder) || ri(r.anchorBuilder) || (r.anchorBuilder = n.fn.carouFredSel.pageAnchorBuilder), i(r.deviation) || (r.deviation = 0), r
    }

    function vr(n, t) {
        return u(t) && (t = t.call(n)), o(t) && (t = {
            onTouch: !1
        }), rt(t) ? t = {
            onTouch: t
        } : i(t) && (t = {
            items: t
        }), t
    }

    function yr(n, t) {
        return f(t.onTouch) || (t.onTouch = !0), f(t.onMouse) || (t.onMouse = !1), s(t.options) || (t.options = {}), f(t.options.triggerOnTouchEnd) || (t.options.triggerOnTouchEnd = !1), t
    }

    function pr(n, t) {
        return u(t) && (t = t.call(n)), rt(t) ? t = {} : i(t) ? t = {
            items: t
        } : o(t) && (t = !1), t
    }

    function wr(n, t) {
        return t
    }

    function nt(t, r, u, o, h) {
        if (e(t) && (t = n(t, h)), s(t) && (t = n(t, h)), c(t) ? (t = h.children().index(t), f(u) || (u = !1)) : f(u) || (u = !0), i(t) || (t = 0), i(r) || (r = 0), u && (t += o.first), t += r, o.total > 0) {
            while (t >= o.total) t -= o.total;
            while (t < 0) t += o.total
        }
        return t
    }

    function pt(n, t, i) {
        for (var f = 0, e = 0, u, r = i; r >= 0; r--) {
            if (u = n.eq(r), f += u.is(":visible") ? u[t.d.outerWidth](!0) : 0, f > t.maxDimension) return e;
            r == 0 && (r = n.length);
            e++
        }
    }

    function br(n, t, i) {
        return ai(n, t.items.filter, t.items.visibleConf.org, i)
    }

    function kr(n, t, i, r) {
        return ai(n, t.items.filter, r, i)
    }

    function ai(n, t, i, r) {
        for (var o = 0, f = 0, s, u = r, e = n.length; u >= 0; u--) {
            if ((f++, f == e) || (s = n.eq(u), s.is(t) && (o++, o == i))) return f;
            u == 0 && (u = e)
        }
    }

    function vi(n, t) {
        return t.items.visibleConf.org || n.children().slice(0, t.items.visible).filter(t.items.filter).length
    }

    function w(n, t, i) {
        for (var o = 0, f = 0, e, r = i, u = n.length - 1; r <= u; r++) {
            if ((e = n.eq(r), o += e.is(":visible") ? e[t.d.outerWidth](!0) : 0, o > t.maxDimension) || (f++, f == u + 1)) return f;
            r == u && (r = -1)
        }
    }

    function yi(n, t, i, r) {
        var u = w(n, t, i);
        return t.circular || i + u > r && (u = r - i), u
    }

    function st(n, t, i) {
        return pi(n, t.items.filter, t.items.visibleConf.org, i, t.circular)
    }

    function dr(n, t, i, r) {
        return pi(n, t.items.filter, r + 1, i, t.circular) - 1
    }

    function pi(n, t, i, r) {
        for (var o = 0, e = 0, s, u = r, f = n.length - 1; u <= f; u++) {
            if ((e++, e >= f) || (s = n.eq(u), s.is(t) && (o++, o == i))) return e;
            u == f && (u = -1)
        }
    }

    function tt(n, t) {
        return n.slice(0, t.items.visible)
    }

    function gr(n, t, i) {
        return n.slice(i, t.items.visibleConf.old + i)
    }

    function nu(n, t) {
        return n.slice(0, t.items.visible)
    }

    function tu(n, t) {
        return n.slice(0, t.items.visibleConf.old)
    }

    function iu(n, t, i) {
        return n.slice(i, t.items.visible + i)
    }

    function wt(t, r, u) {
        r.usePadding && (e(u) || (u = "_cfs_origCssMargin"), t.each(function() {
            var f = n(this),
                t = parseInt(f.css(r.d.marginRight), 10);
            i(t) || (t = 0);
            f.data(u, t)
        }))
    }

    function h(t, r, u) {
        if (r.usePadding) {
            var e = f(u) ? u : !1;
            i(u) || (u = 0);
            wt(t, r, "_cfs_tempCssMargin");
            t.each(function() {
                var t = n(this);
                t.css(r.d.marginRight, e ? t.data("_cfs_tempCssMargin") : u + t.data("_cfs_origCssMargin"))
            })
        }
    }

    function ht(t) {
        t.each(function() {
            var t = n(this);
            t.data("_cfs_origCss", t.attr("style") || "")
        })
    }

    function bt(t) {
        t.each(function() {
            var t = n(this);
            t.attr("style", t.data("_cfs_origCss") || "")
        })
    }

    function wi(t, i) {
        var e = t.items.visible,
            u = t.items[t.d.width],
            r = t[t.d.height],
            f = lt(r);
        i.each(function() {
            var i = n(this),
                e = u - ru(i, t, "Width");
            i[t.d.width](e);
            f && i[t.d.height](gt(e, r))
        })
    }

    function kt(n, t) {
        var s = n.parent(),
            u = n.children(),
            o = tt(u, t),
            f = ni(dt(o, t, !0), t, !1),
            i, r, e;
        return s.css(f), t.usePadding && (i = t.padding, r = i[t.d[1]], t.align && r < 0 && (r = 0), e = o.last(), e.css(t.d.marginRight, e.data("_cfs_origCssMargin") + r), n.css(t.d.top, i[t.d[0]]), n.css(t.d.left, i[t.d[3]])), n.css(t.d.width, f[t.d.width] + v(u, t, "width") * 2), n.css(t.d.height, bi(u, t, "height")), f
    }

    function dt(n, t, i) {
        return [v(n, t, "width", i), bi(n, t, "height", i)]
    }

    function bi(n, t, r, u) {
        return (f(u) || (u = !1), i(t[t.d[r]]) && u) ? t[t.d[r]] : i(t.items[t.d[r]]) ? t.items[t.d[r]] : (r = r.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ct(n, t, r))
    }

    function ct(n, t, i) {
        for (var u = 0, f, e, r = 0, o = n.length; r < o; r++) f = n.eq(r), e = f.is(":visible") ? f[t.d[i]](!0) : 0, u < e && (u = e);
        return u
    }

    function v(n, t, r, u) {
        var h, o, e, c, s;
        if (f(u) || (u = !1), i(t[t.d[r]]) && u) return t[t.d[r]];
        if (i(t.items[t.d[r]])) return t.items[t.d[r]] * n.length;
        for (h = r.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", o = 0, e = 0, c = n.length; e < c; e++) s = n.eq(e), o += s.is(":visible") ? s[t.d[h]](!0) : 0;
        return o
    }

    function ki(n, t, i) {
        var r = n.is(":visible"),
            u;
        return r && n.hide(), u = n.parent()[t.d[i]](), r && n.show(), u
    }

    function di(n, t) {
        return i(n[n.d.width]) ? n[n.d.width] : t
    }

    function gi(n, t, i) {
        for (var r = !1, f = !1, e, o, u = 0, s = n.length; u < s; u++) e = n.eq(u), o = e.is(":visible") ? e[t.d[i]](!0) : 0, r === !1 ? r = o : r != o && (f = !0), r == 0 && (f = !0);
        return f
    }

    function ru(n, t, i) {
        return n[t.d["outer" + i]](!0) - n[t.d[i.toLowerCase()]]()
    }

    function gt(n, t) {
        if (lt(t)) {
            if (t = parseInt(t.slice(0, -1), 10), !i(t)) return n;
            n *= t / 100
        }
        return n
    }

    function t(n, t, i, r, u) {
        return f(i) || (i = !0), f(r) || (r = !0), f(u) || (u = !1), i && (n = t.events.prefix + n), r && (n = n + "." + t.events.namespace), r && u && (n += t.serialNumber), n
    }

    function l(n, t) {
        return e(t.classnames[n]) ? t.classnames[n] : n
    }

    function ni(n, t, i) {
        f(i) || (i = !0);
        var r = t.usePadding && i ? t.padding : [0, 0, 0, 0],
            u = {};
        return u[t.d.width] = n[0] + r[1] + r[3], u[t.d.height] = n[1] + r[0] + r[2], u
    }

    function b(n, t) {
        for (var u = [], i, e, r = 0, f = n.length; r < f; r++)
            for (i = 0, e = t.length; i < e; i++)
                if (t[i].indexOf(typeof n[r]) > -1 && o(u[i])) {
                    u[i] = n[r];
                    break
                }
        return u
    }

    function uu(n) {
        if (o(n)) return [0, 0, 0, 0];
        if (i(n)) return [n, n, n, n];
        if (e(n) && (n = n.split("px").join("").split("em").join("").split(" ")), !y(n)) return [0, 0, 0, 0];
        for (var t = 0; t < 4; t++) n[t] = parseInt(n[t], 10);
        switch (n.length) {
            case 0:
                return [0, 0, 0, 0];
            case 1:
                return [n[0], n[0], n[0], n[0]];
            case 2:
                return [n[0], n[1], n[0], n[1]];
            case 3:
                return [n[0], n[1], n[2], n[1]];
            default:
                return [n[0], n[1], n[2], n[3]]
        }
    }

    function ti(n, t) {
        var r = i(t[t.d.width]) ? Math.ceil(t[t.d.width] - v(n, t, "width")) : 0;
        switch (t.align) {
            case "left":
                return [0, r];
            case "right":
                return [r, 0];
            case "center":
            default:
                return [Math.ceil(r / 2), Math.floor(r / 2)]
        }
    }

    function fu(n) {
        for (var i = [
                ["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
                ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
            ], u = i[0].length, f = n.direction == "right" || n.direction == "left" ? 0 : 1, r = {}, t = 0; t < u; t++) r[i[0][t]] = i[f][t];
        return r
    }

    function ii(n, t, r, f) {
        var o = n,
            h, c;
        if (u(r)) o = r.call(f, o);
        else if (e(r)) {
            if (h = r.split("+"), c = r.split("-"), c.length > h.length) var l = !0,
                a = c[0],
                s = c[1];
            else var l = !1,
                a = h[0],
                s = h[1];
            switch (a) {
                case "even":
                    o = n % 2 == 1 ? n - 1 : n;
                    break;
                case "odd":
                    o = n % 2 == 0 ? n - 1 : n;
                    break;
                default:
                    o = n
            }
            s = parseInt(s, 10);
            i(s) && (l && (s = -s), o += s)
        }
        return (!i(o) || o < 1) && (o = 1), o
    }

    function a(n, t, i, r) {
        return nr(ii(n, t, i, r), t.items.visibleConf)
    }

    function nr(n, t) {
        return i(t.min) && n < t.min && (n = t.min), i(t.max) && n > t.max && (n = t.max), n < 1 && (n = 1), n
    }

    function tr(t) {
        y(t) || (t = [
            [t]
        ]);
        y(t[0]) || (t = [t]);
        for (var r = 0, u = t.length; r < u; r++) e(t[r][0]) && (t[r][0] = n(t[r][0])), f(t[r][1]) || (t[r][1] = !0), f(t[r][2]) || (t[r][2] = !0), i(t[r][3]) || (t[r][3] = 0);
        return t
    }

    function ir(n) {
        return n == "right" ? 39 : n == "left" ? 37 : n == "up" ? 38 : n == "down" ? 40 : -1
    }

    function rr(i, r, u) {
        if (i) {
            var f = r.triggerHandler(t("currentPosition", u));
            n.fn.carouFredSel.cookie.set(i, f)
        }
    }

    function eu(t) {
        var i = n.fn.carouFredSel.cookie.get(t);
        return i == "" ? 0 : i
    }

    function ou(n, t) {
        for (var r = {}, i = 0, u = t.length; i < u; i++) r[t[i]] = n.css(t[i]);
        return r
    }

    function su(n, t, f, o) {
        return s(n.visibleConf) || (n.visibleConf = {}), s(n.sizesConf) || (n.sizesConf = {}), n.start == 0 && i(o) && (n.start = o), s(n.visible) ? (n.visibleConf.min = n.visible.min, n.visibleConf.max = n.visible.max, n.visible = !1) : e(n.visible) ? (n.visible == "variable" ? n.visibleConf.variable = !0 : n.visibleConf.adjust = n.visible, n.visible = !1) : u(n.visible) && (n.visibleConf.adjust = n.visible, n.visible = !1), e(n.filter) || (n.filter = f.filter(":hidden").length > 0 ? ":visible" : "*"), n[t.d.width] || (t.responsive ? (r(!0, "Set a " + t.d.width + " for the items!"), n[t.d.width] = ct(f, t, "outerWidth")) : n[t.d.width] = gi(f, t, "outerWidth") ? "variable" : f[t.d.outerWidth](!0)), n[t.d.height] || (n[t.d.height] = gi(f, t, "outerHeight") ? "variable" : f[t.d.outerHeight](!0)), n.sizesConf.width = n.width, n.sizesConf.height = n.height, n
    }

    function hu(n, t) {
        return n.items[n.d.width] == "variable" && (n.items.visibleConf.variable = !0), n.items.visibleConf.variable || (i(n[n.d.width]) ? n.items.visible = Math.floor(n[n.d.width] / n.items[n.d.width]) : (n.items.visible = Math.floor(t / n.items[n.d.width]), n[n.d.width] = n.items.visible * n.items[n.d.width], n.items.visibleConf.adjust || (n.align = !1)), (n.items.visible == "Infinity" || n.items.visible < 1) && (r(!0, 'Not a valid number of visible items: Set to "variable".'), n.items.visibleConf.variable = !0)), n
    }

    function cu(n, t, i) {
        return n == "auto" && (n = ct(i, t, "outerWidth")), n
    }

    function lu(n, t, i) {
        return n == "auto" && (n = ct(i, t, "outerHeight")), n || (n = t.items[t.d.height]), n
    }

    function ur(n, t) {
        var i = ti(tt(t, n), n);
        return n.padding[n.d[1]] = i[1], n.padding[n.d[3]] = i[0], n
    }

    function fr(n, t) {
        var i = nr(Math.ceil(n[n.d.width] / n.items[n.d.width]), n.items.visibleConf),
            r;
        return i > t.length && (i = t.length), r = Math.floor(n[n.d.width] / i), n.items.visible = i, n.items[n.d.width] = r, n[n.d.width] = i * r, n
    }

    function it(n) {
        var i, t;
        return e(n) ? (t = n.indexOf("immediate") > -1 ? !0 : !1, i = n.indexOf("resume") > -1 ? !0 : !1) : t = i = !1, [t, i]
    }

    function er(n) {
        return n === null
    }

    function o(n) {
        return er(n) || typeof n == "undefined" || n === "" || n === "undefined"
    }

    function y(n) {
        return n instanceof Array
    }

    function c(n) {
        return n instanceof jQuery
    }

    function s(n) {
        return (n instanceof Object || typeof n == "object") && !er(n) && !c(n) && !y(n) && !u(n)
    }

    function i(n) {
        return (n instanceof Number || typeof n == "number") && !isNaN(n)
    }

    function e(n) {
        return (n instanceof String || typeof n == "string") && !o(n) && !rt(n) && !ri(n)
    }

    function u(n) {
        return n instanceof Function || typeof n == "function"
    }

    function f(n) {
        return n instanceof Boolean || typeof n == "boolean" || rt(n) || ri(n)
    }

    function rt(n) {
        return n === !0 || n === "true"
    }

    function ri(n) {
        return n === !1 || n === "false"
    }

    function lt(n) {
        return e(n) && n.slice(-1) == "%"
    }

    function p() {
        return (new Date).getTime()
    }

    function at(n, t) {
        r(!0, n + " is DEPRECATED, support for it will be removed. Use " + t + " instead.")
    }

    function r(n, t) {
        var i;
        if (!o(window.console) && !o(window.console.log)) {
            if (s(n) ? (i = " (" + n.selector + ")", n = n.debug) : i = "", !n) return !1;
            t = e(t) ? "carouFredSel" + i + ": " + t : ["carouFredSel" + i + ":", t];
            window.console.log(t)
        }
        return !1
    }
    n.fn.carouFredSel || (n.fn.caroufredsel = n.fn.carouFredSel = function(ct, yt) {
        var au, pu, ku, nf, wu, du, tf;
        if (this.length == 0) return r(!0, 'No element found for "' + this.selector + '".'), this;
        if (this.length > 1) return this.each(function() {
            n(this).carouFredSel(ct, yt)
        });
        var ai = this,
            nr = this[0],
            gu = !1;
        ai.data("_cfs_isCarousel") && (gu = ai.triggerHandler("_cfs_triggerEvent", "currentPosition"), ai.trigger("_cfs_triggerEvent", ["destroy", !0]));
        au = {};
        au._init = function(t, r, u) {
            t = ot(nr, t);
            t.items = or(nr, t.items);
            t.scroll = sr(nr, t.scroll);
            t.auto = hr(nr, t.auto);
            t.prev = ci(nr, t.prev);
            t.next = ci(nr, t.next);
            t.pagination = lr(nr, t.pagination);
            t.swipe = vr(nr, t.swipe);
            t.mousewheel = pr(nr, t.mousewheel);
            r && (bu = n.extend(!0, {}, n.fn.carouFredSel.defaults, t));
            ri = n.extend(!0, {}, n.fn.carouFredSel.defaults, t);
            ri.d = fu(ri);
            ir.direction = ri.direction == "up" || ri.direction == "left" ? "next" : "prev";
            var f = ai.children(),
                e = ki(er, ri, "width");
            if (rt(ri.cookie) && (ri.cookie = "caroufredsel_cookie_" + pi.serialNumber), ri.maxDimension = di(ri, e), ri.items = su(ri.items, ri, f, u), ri[ri.d.width] = cu(ri[ri.d.width], ri, f), ri[ri.d.height] = lu(ri[ri.d.height], ri, f), ri.responsive && (lt(ri[ri.d.width]) || (ri[ri.d.width] = "100%")), lt(ri[ri.d.width]) && (ir.upDateOnWindowResize = !0, ir.primarySizePercentage = ri[ri.d.width], ri[ri.d.width] = gt(e, ir.primarySizePercentage), ri.items.visible || (ri.items.visibleConf.variable = !0)), ri.responsive ? (ri.usePadding = !1, ri.padding = [0, 0, 0, 0], ri.align = !1, ri.items.visibleConf.variable = !1) : (ri.items.visible || (ri = hu(ri, e)), ri[ri.d.width] || (!ri.items.visibleConf.variable && i(ri.items[ri.d.width]) && ri.items.filter == "*" ? (ri[ri.d.width] = ri.items.visible * ri.items[ri.d.width], ri.align = !1) : ri[ri.d.width] = "variable"), o(ri.align) && (ri.align = i(ri[ri.d.width]) ? "center" : !1), ri.items.visibleConf.variable && (ri.items.visible = w(f, ri, 0))), ri.items.filter == "*" || ri.items.visibleConf.variable || (ri.items.visibleConf.org = ri.items.visible, ri.items.visible = st(f, ri, 0)), ri.items.visible = a(ri.items.visible, ri, ri.items.visibleConf.adjust, nr), ri.items.visibleConf.old = ri.items.visible, ri.responsive) ri.items.visibleConf.min || (ri.items.visibleConf.min = ri.items.visible), ri.items.visibleConf.max || (ri.items.visibleConf.max = ri.items.visible), ri = fr(ri, f, e);
            else {
                ri.padding = uu(ri.padding);
                ri.align == "top" ? ri.align = "left" : ri.align == "bottom" && (ri.align = "right");
                switch (ri.align) {
                    case "center":
                    case "left":
                    case "right":
                        ri[ri.d.width] != "variable" && (ri = ur(ri, f), ri.usePadding = !0);
                        break;
                    default:
                        ri.align = !1;
                        ri.usePadding = ri.padding[0] == 0 && ri.padding[1] == 0 && ri.padding[2] == 0 && ri.padding[3] == 0 ? !1 : !0
                }
            }
            i(ri.scroll.duration) || (ri.scroll.duration = 500);
            o(ri.scroll.items) && (ri.scroll.items = ri.responsive || ri.items.visibleConf.variable || ri.items.filter != "*" ? "visible" : ri.items.visible);
            ri.auto = n.extend(!0, {}, ri.scroll, ri.auto);
            ri.prev = n.extend(!0, {}, ri.scroll, ri.prev);
            ri.next = n.extend(!0, {}, ri.scroll, ri.next);
            ri.pagination = n.extend(!0, {}, ri.scroll, ri.pagination);
            ri.auto = cr(nr, ri.auto);
            ri.prev = li(nr, ri.prev);
            ri.next = li(nr, ri.next);
            ri.pagination = ar(nr, ri.pagination);
            ri.swipe = yr(nr, ri.swipe);
            ri.mousewheel = wr(nr, ri.mousewheel);
            ri.synchronise && (ri.synchronise = tr(ri.synchronise));
            ri.auto.onPauseStart && (ri.auto.onTimeoutStart = ri.auto.onPauseStart, at("auto.onPauseStart", "auto.onTimeoutStart"));
            ri.auto.onPausePause && (ri.auto.onTimeoutPause = ri.auto.onPausePause, at("auto.onPausePause", "auto.onTimeoutPause"));
            ri.auto.onPauseEnd && (ri.auto.onTimeoutEnd = ri.auto.onPauseEnd, at("auto.onPauseEnd", "auto.onTimeoutEnd"));
            ri.auto.pauseDuration && (ri.auto.timeoutDuration = ri.auto.pauseDuration, at("auto.pauseDuration", "auto.timeoutDuration"))
        };
        au._build = function() {
            ai.data("_cfs_isCarousel", !0);
            var t = ai.children(),
                n = ou(ai, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
                i = "relative";
            switch (n.position) {
                case "absolute":
                case "fixed":
                    i = n.position
            }
            pi.wrapper == "parent" ? ht(er) : er.css(n);
            er.css({
                overflow: "hidden",
                position: i
            });
            ht(ai);
            ai.data("_cfs_origCssZindex", n.zIndex);
            ai.css({
                textAlign: "left",
                float: "none",
                position: "absolute",
                top: 0,
                right: "auto",
                bottom: "auto",
                left: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0
            });
            wt(t, ri);
            ht(t);
            ri.responsive && wi(ri, t)
        };
        au._bind_events = function() {
            au._unbind_events();
            ai.bind(t("stop", pi), function(n, i) {
                return n.stopPropagation(), ir.isStopped || ri.auto.button && ri.auto.button.addClass(l("stopped", pi)), ir.isStopped = !0, ri.auto.play && (ri.auto.play = !1, ai.trigger(t("pause", pi), i)), !0
            });
            ai.bind(t("finish", pi), function(n) {
                return n.stopPropagation(), ir.isScrolling && ft(gi), !0
            });
            ai.bind(t("pause", pi), function(n, t, i) {
                var r, u, f;
                return n.stopPropagation(), ru = d(ru), t && ir.isScrolling && (gi.isStopped = !0, r = p() - gi.startTime, gi.duration -= r, gi.pre && (gi.pre.duration -= r), gi.post && (gi.post.duration -= r), ft(gi, !1)), ir.isPaused || ir.isScrolling || i && (ru.timePassed += p() - ru.startTime), ir.isPaused || ri.auto.button && ri.auto.button.addClass(l("paused", pi)), ir.isPaused = !0, ri.auto.onTimeoutPause && (u = ri.auto.timeoutDuration - ru.timePassed, f = 100 - Math.ceil(u * 100 / ri.auto.timeoutDuration), ri.auto.onTimeoutPause.call(nr, f, u)), !0
            });
            ai.bind(t("play", pi), function(n, u, e, o) {
                var s;
                n.stopPropagation();
                ru = d(ru);
                var c = [u, e, o],
                    h = b(c, ["string", "number", "boolean"]);
                return (u = h[0], e = h[1], o = h[2], u != "prev" && u != "next" && (u = ir.direction), i(e) || (e = 0), f(o) || (o = !1), o && (ir.isStopped = !1, ri.auto.play = !0), !ri.auto.play) ? (n.stopImmediatePropagation(), r(pi, "Carousel stopped: Not scrolling.")) : (ir.isPaused && ri.auto.button && (ri.auto.button.removeClass(l("stopped", pi)), ri.auto.button.removeClass(l("paused", pi))), ir.isPaused = !1, ru.startTime = p(), s = ri.auto.timeoutDuration + e, dur2 = s - ru.timePassed, perc = 100 - Math.ceil(dur2 * 100 / s), ri.auto.progress && (ru.progress = setInterval(function() {
                    var n = p() - ru.startTime + ru.timePassed,
                        t = Math.ceil(n * 100 / s);
                    ri.auto.progress.updater.call(ri.auto.progress.bar[0], t)
                }, ri.auto.progress.interval)), ru.auto = setTimeout(function() {
                    ri.auto.progress && ri.auto.progress.updater.call(ri.auto.progress.bar[0], 100);
                    ri.auto.onTimeoutEnd && ri.auto.onTimeoutEnd.call(nr, perc, dur2);
                    ir.isScrolling ? ai.trigger(t("play", pi), u) : ai.trigger(t(u, pi), ri.auto)
                }, dur2), ri.auto.onTimeoutStart && ri.auto.onTimeoutStart.call(nr, perc, dur2), !0)
            });
            ai.bind(t("resume", pi), function(n) {
                return n.stopPropagation(), gi.isStopped ? (gi.isStopped = !1, ir.isPaused = !1, ir.isScrolling = !0, gi.startTime = p(), k(gi, pi)) : ai.trigger(t("play", pi)), !0
            });
            ai.bind(t("prev", pi) + " " + t("next", pi), function(e, o, h, c, l) {
                var nt, v, w, a, p, g, y, k, d;
                if (e.stopPropagation(), ir.isStopped || ai.is(":hidden")) return e.stopImmediatePropagation(), r(pi, "Carousel stopped or hidden: Not scrolling.");
                if (nt = i(ri.items.minimum) ? ri.items.minimum : ri.items.visible + 1, nt > bi.total) return e.stopImmediatePropagation(), r(pi, "Not enough items (" + bi.total + " total, " + nt + " needed): Not scrolling.");
                var tt = [o, h, c, l],
                    a = b(tt, ["object", "number/string", "function", "boolean"]);
                if (o = a[0], h = a[1], c = a[2], l = a[3], v = e.type.slice(pi.events.prefix.length), s(o) || (o = {}), u(c) && (o.onAfter = c), f(l) && (o.queue = l), o = n.extend(!0, {}, ri[v], o), o.conditions && !o.conditions.call(nr, v)) return e.stopImmediatePropagation(), r(pi, 'Callback "conditions" returned false.');
                if (!i(h)) {
                    if (ri.items.filter != "*") h = "visible";
                    else
                        for (w = [h, o.items, ri[v].items], a = 0, k = w.length; a < k; a++)
                            if (i(w[a]) || w[a] == "page" || w[a] == "visible") {
                                h = w[a];
                                break
                            } switch (h) {
                        case "page":
                            return e.stopImmediatePropagation(), ai.triggerHandler(t(v + "Page", pi), [o, c]);
                        case "visible":
                            ri.items.visibleConf.variable || ri.items.filter != "*" || (h = ri.items.visible)
                    }
                }
                if (gi.isStopped) return ai.trigger(t("resume", pi)), ai.trigger(t("queue", pi), [v, [o, h, c]]), e.stopImmediatePropagation(), r(pi, "Carousel resumed scrolling.");
                if (o.duration > 0 && ir.isScrolling) return o.queue && (o.queue == "last" && (yu = []), (o.queue != "first" || yu.length == 0) && ai.trigger(t("queue", pi), [v, [o, h, c]])), e.stopImmediatePropagation(), r(pi, "Carousel currently scrolling.");
                if (ru.timePassed = 0, ai.trigger(t("slide_" + v, pi), [o, h]), ri.synchronise)
                    for (p = ri.synchronise, g = [o, h], y = 0, k = p.length; y < k; y++) d = v, p[y][2] || (d = d == "prev" ? "next" : "prev"), p[y][1] || (g[0] = p[y][0].triggerHandler("_cfs_triggerEvent", ["configuration", d])), g[1] = h + p[y][3], p[y][0].trigger("_cfs_triggerEvent", ["slide_" + d, g]);
                return !0
            });
            ai.bind(t("slide_prev", pi), function(u, f, e) {
                var o, ur, tt, ot, lt, gt, or, bt, tr;
                if (u.stopPropagation(), o = ai.children(), !ri.circular && bi.first == 0) return ri.infinite && ai.trigger(t("next", pi), bi.total - 1), u.stopImmediatePropagation();
                if (h(o, ri), i(e) || (ri.items.visibleConf.variable ? e = pt(o, ri, bi.total - 1) : ri.items.filter != "*" ? (ur = i(f.items) ? f.items : vi(ai, ri), e = kr(o, ri, bi.total - 1, ur)) : e = ri.items.visible, e = ii(e, ri, f.items, nr)), ri.circular || bi.total - e < bi.first && (e = bi.total - bi.first), ri.items.visibleConf.old = ri.items.visible, ri.items.visibleConf.variable ? (tt = a(w(o, ri, bi.total - e), ri, ri.items.visibleConf.adjust, nr), ri.items.visible + e <= tt && e < bi.total && (e++, tt = a(w(o, ri, bi.total - e), ri, ri.items.visibleConf.adjust, nr)), ri.items.visible = tt) : ri.items.filter != "*" && (tt = st(o, ri, bi.total - e), ri.items.visible = a(tt, ri, ri.items.visibleConf.adjust, nr)), h(o, ri, !0), e == 0) return u.stopImmediatePropagation(), r(pi, "0 items to scroll: Not scrolling.");
                for (r(pi, "Scrolling " + e + " items backward."), bi.first += e; bi.first >= bi.total;) bi.first -= bi.total;
                ri.circular || (bi.first == 0 && f.onEnd && f.onEnd.call(nr, "prev"), ri.infinite || g(ri, bi.first, pi));
                ai.children().slice(bi.total - e, bi.total).prependTo(ai);
                bi.total < ri.items.visible + e && ai.children().slice(0, ri.items.visible + e - bi.total).clone(!0).appendTo(ai);
                var o = ai.children(),
                    kt = gr(o, ri, e),
                    yt = nu(o, ri),
                    it = o.eq(e - 1),
                    ct = kt.last(),
                    ft = yt.last();
                h(o, ri);
                ot = 0;
                lt = 0;
                ri.align && (gt = ti(yt, ri), ot = gt[0], lt = gt[1]);
                var fr = ot < 0 ? ri.padding[ri.d[3]] : 0,
                    wt = !1,
                    ci = n();
                ri.items.visible < e && (ci = o.slice(ri.items.visibleConf.old, e), f.fx == "directscroll" && (or = ri.items[ri.d.width], wt = ci, it = ft, ei(wt), ri.items[ri.d.width] = "variable"));
                var s = !1,
                    sr = v(o.slice(0, e), ri, "width"),
                    at = ni(dt(yt, ri, !0), ri, !ri.usePadding),
                    hr = 0,
                    ht = {},
                    li = {},
                    vt = {},
                    yi = {},
                    wi = {},
                    cr = {},
                    lr = {},
                    ki = hi(f, ri, e, sr);
                switch (f.fx) {
                    case "cover":
                    case "cover-fade":
                        hr = v(o.slice(0, ri.items.visible), ri, "width")
                }
                wt && (ri.items[ri.d.width] = or);
                h(o, ri, !0);
                lt >= 0 && h(ct, ri, ri.padding[ri.d[1]]);
                ot >= 0 && h(it, ri, ri.padding[ri.d[3]]);
                ri.align && (ri.padding[ri.d[1]] = lt, ri.padding[ri.d[3]] = ot);
                cr[ri.d.left] = -(sr - fr);
                lr[ri.d.left] = -(hr - fr);
                li[ri.d.left] = at[ri.d.width];
                var di = function() {},
                    rt = function() {},
                    y = function() {},
                    ar = function() {},
                    p = function() {},
                    vr = function() {},
                    b = function() {},
                    yr = function() {},
                    c = function() {},
                    l = function() {},
                    nt = function() {};
                switch (f.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                    case "uncover":
                    case "uncover-fade":
                        s = ai.clone(!0).appendTo(er)
                }
                switch (f.fx) {
                    case "crossfade":
                    case "uncover":
                    case "uncover-fade":
                        s.children().slice(0, e).remove();
                        s.children().slice(ri.items.visibleConf.old).remove();
                        break;
                    case "cover":
                    case "cover-fade":
                        s.children().slice(ri.items.visible).remove();
                        s.css(lr)
                }
                if (ai.css(cr), gi = ut(ki, f.easing, pi), ht[ri.d.left] = ri.usePadding ? ri.padding[ri.d[3]] : 0, (ri[ri.d.width] == "variable" || ri[ri.d.height] == "variable") && (di = function() {
                        er.css(at)
                    }, rt = function() {
                        gi.anims.push([er, at])
                    }), ri.usePadding) {
                    ft.not(it).length && (vt[ri.d.marginRight] = it.data("_cfs_origCssMargin"), ot < 0 ? it.css(vt) : (b = function() {
                        it.css(vt)
                    }, yr = function() {
                        gi.anims.push([it, vt])
                    }));
                    switch (f.fx) {
                        case "cover":
                        case "cover-fade":
                            s.children().eq(e - 1).css(vt)
                    }
                    ft.not(ct).length && (yi[ri.d.marginRight] = ct.data("_cfs_origCssMargin"), y = function() {
                        ct.css(yi)
                    }, ar = function() {
                        gi.anims.push([ct, yi])
                    });
                    lt >= 0 && (wi[ri.d.marginRight] = ft.data("_cfs_origCssMargin") + ri.padding[ri.d[1]], p = function() {
                        ft.css(wi)
                    }, vr = function() {
                        gi.anims.push([ft, wi])
                    })
                }
                nt = function() {
                    ai.css(ht)
                };
                bt = ri.items.visible + e - bi.total;
                l = function() {
                    if (bt > 0 && (ai.children().slice(bi.total).remove(), kt = n(ai.children().slice(bi.total - (ri.items.visible - bt)).get().concat(ai.children().slice(0, bt).get()))), oi(wt), ri.usePadding) {
                        var t = ai.children().eq(ri.items.visible + e - 1);
                        t.css(ri.d.marginRight, t.data("_cfs_origCssMargin"))
                    }
                };
                tr = si(kt, ci, yt, e, "prev", ki, at);
                c = function() {
                    ui(ai, s, f);
                    ir.isScrolling = !1;
                    vu.onAfter = et(nr, f, "onAfter", tr, vu);
                    yu = fi(ai, yu, pi);
                    ir.isPaused || ai.trigger(t("play", pi))
                };
                ir.isScrolling = !0;
                ru = d(ru);
                vu.onBefore = et(nr, f, "onBefore", tr, vu);
                switch (f.fx) {
                    case "none":
                        ai.css(ht);
                        di();
                        y();
                        p();
                        b();
                        nt();
                        l();
                        c();
                        break;
                    case "fade":
                        gi.anims.push([ai, {
                            opacity: 0
                        }, function() {
                            di();
                            y();
                            p();
                            b();
                            nt();
                            l();
                            gi = ut(ki, f.easing, pi);
                            gi.anims.push([ai, {
                                opacity: 1
                            }, c]);
                            k(gi, pi)
                        }]);
                        break;
                    case "crossfade":
                        ai.css({
                            opacity: 0
                        });
                        gi.anims.push([s, {
                            opacity: 0
                        }]);
                        gi.anims.push([ai, {
                            opacity: 1
                        }, c]);
                        rt();
                        y();
                        p();
                        b();
                        nt();
                        l();
                        break;
                    case "cover":
                        gi.anims.push([s, ht, function() {
                            y();
                            p();
                            b();
                            nt();
                            l();
                            c()
                        }]);
                        rt();
                        break;
                    case "cover-fade":
                        gi.anims.push([ai, {
                            opacity: 0
                        }]);
                        gi.anims.push([s, ht, function() {
                            y();
                            p();
                            b();
                            nt();
                            l();
                            c()
                        }]);
                        rt();
                        break;
                    case "uncover":
                        gi.anims.push([s, li, c]);
                        rt();
                        y();
                        p();
                        b();
                        nt();
                        l();
                        break;
                    case "uncover-fade":
                        ai.css({
                            opacity: 0
                        });
                        gi.anims.push([ai, {
                            opacity: 1
                        }]);
                        gi.anims.push([s, li, c]);
                        rt();
                        y();
                        p();
                        b();
                        nt();
                        l();
                        break;
                    default:
                        gi.anims.push([ai, ht, function() {
                            l();
                            c()
                        }]);
                        rt();
                        ar();
                        vr();
                        yr()
                }
                return k(gi, pi), rr(ri.cookie, ai, pi), ai.trigger(t("updatePageStatus", pi), [!1, at]), !0
            });
            ai.bind(t("slide_next", pi), function(u, f, e) {
                var o, ft, nt, s, ht, vt, gt, at, yt, cr, tr, ur, fr, or;
                if (u.stopPropagation(), o = ai.children(), !ri.circular && bi.first == ri.items.visible) return ri.infinite && ai.trigger(t("prev", pi), bi.total - 1), u.stopImmediatePropagation();
                if (h(o, ri), i(e) || (ri.items.filter != "*" ? (nt = i(f.items) ? f.items : vi(ai, ri), e = dr(o, ri, 0, nt)) : e = ri.items.visible, e = ii(e, ri, f.items, nr)), ft = bi.first == 0 ? bi.total : bi.first, ri.circular || (ri.items.visibleConf.variable ? (s = w(o, ri, e), nt = pt(o, ri, ft - 1)) : (s = ri.items.visible, nt = ri.items.visible), e + s > ft && (e = ft - nt)), ri.items.visibleConf.old = ri.items.visible, ri.items.visibleConf.variable) {
                    for (s = a(yi(o, ri, e, ft), ri, ri.items.visibleConf.adjust, nr); ri.items.visible - e >= s && e < bi.total;) e++, s = a(yi(o, ri, e, ft), ri, ri.items.visibleConf.adjust, nr);
                    ri.items.visible = s
                } else ri.items.filter != "*" && (s = st(o, ri, e), ri.items.visible = a(s, ri, ri.items.visibleConf.adjust, nr));
                if (h(o, ri, !0), e == 0) return u.stopImmediatePropagation(), r(pi, "0 items to scroll: Not scrolling.");
                for (r(pi, "Scrolling " + e + " items forward."), bi.first -= e; bi.first < 0;) bi.first += bi.total;
                ri.circular || (bi.first == ri.items.visible && f.onEnd && f.onEnd.call(nr, "next"), ri.infinite || g(ri, bi.first, pi));
                bi.total < ri.items.visible + e && ai.children().slice(0, ri.items.visible + e - bi.total).clone(!0).appendTo(ai);
                var o = ai.children(),
                    sr = tu(o, ri),
                    ct = iu(o, ri, e),
                    lt = o.eq(e - 1),
                    ot = sr.last(),
                    hr = ct.last();
                h(o, ri);
                ht = 0;
                vt = 0;
                ri.align && (gt = ti(ct, ri), ht = gt[0], vt = gt[1]);
                at = !1;
                yt = n();
                ri.items.visibleConf.old < e && (yt = o.slice(ri.items.visibleConf.old, e), f.fx == "directscroll" && (cr = ri.items[ri.d.width], at = yt, lt = ot, ei(at), ri.items[ri.d.width] = "variable"));
                var y = !1,
                    lr = v(o.slice(0, e), ri, "width"),
                    wt = ni(dt(ct, ri, !0), ri, !ri.usePadding),
                    ar = 0,
                    bt = {},
                    ci = {},
                    li = {},
                    wi = {},
                    kt = {},
                    ki = hi(f, ri, e, lr);
                switch (f.fx) {
                    case "uncover":
                    case "uncover-fade":
                        ar = v(o.slice(0, ri.items.visibleConf.old), ri, "width")
                }
                at && (ri.items[ri.d.width] = cr);
                ri.align && ri.padding[ri.d[1]] < 0 && (ri.padding[ri.d[1]] = 0);
                h(o, ri, !0);
                h(ot, ri, ri.padding[ri.d[1]]);
                ri.align && (ri.padding[ri.d[1]] = vt, ri.padding[ri.d[3]] = ht);
                kt[ri.d.left] = ri.usePadding ? ri.padding[ri.d[3]] : 0;
                var di = function() {},
                    it = function() {},
                    p = function() {},
                    vr = function() {},
                    b = function() {},
                    yr = function() {},
                    c = function() {},
                    l = function() {},
                    rt = function() {};
                switch (f.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                    case "uncover":
                    case "uncover-fade":
                        y = ai.clone(!0).appendTo(er);
                        y.children().slice(ri.items.visibleConf.old).remove()
                }
                switch (f.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                        ai.css("zIndex", 1);
                        y.css("zIndex", 0)
                }
                gi = ut(ki, f.easing, pi);
                bt[ri.d.left] = -lr;
                ci[ri.d.left] = -ar;
                ht < 0 && (bt[ri.d.left] += ht);
                (ri[ri.d.width] == "variable" || ri[ri.d.height] == "variable") && (di = function() {
                    er.css(wt)
                }, it = function() {
                    gi.anims.push([er, wt])
                });
                ri.usePadding && (tr = hr.data("_cfs_origCssMargin"), vt >= 0 && (tr += ri.padding[ri.d[1]]), hr.css(ri.d.marginRight, tr), lt.not(ot).length && (wi[ri.d.marginRight] = ot.data("_cfs_origCssMargin")), p = function() {
                    ot.css(wi)
                }, vr = function() {
                    gi.anims.push([ot, wi])
                }, ur = lt.data("_cfs_origCssMargin"), ht > 0 && (ur += ri.padding[ri.d[3]]), li[ri.d.marginRight] = ur, b = function() {
                    lt.css(li)
                }, yr = function() {
                    gi.anims.push([lt, li])
                });
                rt = function() {
                    ai.css(kt)
                };
                fr = ri.items.visible + e - bi.total;
                l = function() {
                    var n, t;
                    fr > 0 && ai.children().slice(bi.total).remove();
                    n = ai.children().slice(0, e).appendTo(ai).last();
                    fr > 0 && (ct = tt(o, ri));
                    oi(at);
                    ri.usePadding && (bi.total < ri.items.visible + e && (t = ai.children().eq(ri.items.visible - 1), t.css(ri.d.marginRight, t.data("_cfs_origCssMargin") + ri.padding[ri.d[1]])), n.css(ri.d.marginRight, n.data("_cfs_origCssMargin")))
                };
                or = si(sr, yt, ct, e, "next", ki, wt);
                c = function() {
                    ai.css("zIndex", ai.data("_cfs_origCssZindex"));
                    ui(ai, y, f);
                    ir.isScrolling = !1;
                    vu.onAfter = et(nr, f, "onAfter", or, vu);
                    yu = fi(ai, yu, pi);
                    ir.isPaused || ai.trigger(t("play", pi))
                };
                ir.isScrolling = !0;
                ru = d(ru);
                vu.onBefore = et(nr, f, "onBefore", or, vu);
                switch (f.fx) {
                    case "none":
                        ai.css(bt);
                        di();
                        p();
                        b();
                        rt();
                        l();
                        c();
                        break;
                    case "fade":
                        gi.anims.push([ai, {
                            opacity: 0
                        }, function() {
                            di();
                            p();
                            b();
                            rt();
                            l();
                            gi = ut(ki, f.easing, pi);
                            gi.anims.push([ai, {
                                opacity: 1
                            }, c]);
                            k(gi, pi)
                        }]);
                        break;
                    case "crossfade":
                        ai.css({
                            opacity: 0
                        });
                        gi.anims.push([y, {
                            opacity: 0
                        }]);
                        gi.anims.push([ai, {
                            opacity: 1
                        }, c]);
                        it();
                        p();
                        b();
                        rt();
                        l();
                        break;
                    case "cover":
                        ai.css(ri.d.left, er[ri.d.width]());
                        gi.anims.push([ai, kt, c]);
                        it();
                        p();
                        b();
                        l();
                        break;
                    case "cover-fade":
                        ai.css(ri.d.left, er[ri.d.width]());
                        gi.anims.push([y, {
                            opacity: 0
                        }]);
                        gi.anims.push([ai, kt, c]);
                        it();
                        p();
                        b();
                        l();
                        break;
                    case "uncover":
                        gi.anims.push([y, ci, c]);
                        it();
                        p();
                        b();
                        rt();
                        l();
                        break;
                    case "uncover-fade":
                        ai.css({
                            opacity: 0
                        });
                        gi.anims.push([ai, {
                            opacity: 1
                        }]);
                        gi.anims.push([y, ci, c]);
                        it();
                        p();
                        b();
                        rt();
                        l();
                        break;
                    default:
                        gi.anims.push([ai, bt, function() {
                            rt();
                            l();
                            c()
                        }]);
                        it();
                        vr();
                        yr()
                }
                return k(gi, pi), rr(ri.cookie, ai, pi), ai.trigger(t("updatePageStatus", pi), [!1, wt]), !0
            });
            ai.bind(t("slideTo", pi), function(n, i, r, u, f, e, o) {
                n.stopPropagation();
                var c = [i, r, u, f, e, o],
                    h = b(c, ["string/number/object", "number", "boolean", "object", "string", "function"]);
                return (f = h[3], e = h[4], o = h[5], i = nt(h[0], h[1], h[2], bi, ai), i == 0) ? !1 : (s(f) || (f = !1), e != "prev" && e != "next" && (e = ri.circular ? i <= bi.total / 2 ? "next" : "prev" : bi.first == 0 || bi.first > i ? "next" : "prev"), e == "prev" && (i = bi.total - i), ai.trigger(t(e, pi), [f, i, o]), !0)
            });
            ai.bind(t("prevPage", pi), function(n, i, r) {
                n.stopPropagation();
                var u = ai.triggerHandler(t("currentPage", pi));
                return ai.triggerHandler(t("slideToPage", pi), [u - 1, i, "prev", r])
            });
            ai.bind(t("nextPage", pi), function(n, i, r) {
                n.stopPropagation();
                var u = ai.triggerHandler(t("currentPage", pi));
                return ai.triggerHandler(t("slideToPage", pi), [u + 1, i, "next", r])
            });
            ai.bind(t("slideToPage", pi), function(n, r, u, f, e) {
                n.stopPropagation();
                i(r) || (r = ai.triggerHandler(t("currentPage", pi)));
                var o = ri.pagination.items || ri.items.visible,
                    s = Math.ceil(bi.total / o) - 1;
                return r < 0 && (r = s), r > s && (r = 0), ai.triggerHandler(t("slideTo", pi), [r * o, 0, !0, u, f, e])
            });
            ai.bind(t("jumpToStart", pi), function(n, t) {
                if (n.stopPropagation(), t = t ? nt(t, 0, !0, bi, ai) : 0, t += bi.first, t != 0) {
                    if (bi.total > 0)
                        while (t > bi.total) t -= bi.total;
                    ai.prepend(ai.children().slice(t, bi.total))
                }
                return !0
            });
            ai.bind(t("synchronise", pi), function(n, i) {
                var e, f, u, o;
                if (n.stopPropagation(), i) i = tr(i);
                else if (ri.synchronise) i = ri.synchronise;
                else return r(pi, "No carousel to synchronise.");
                for (e = ai.triggerHandler(t("currentPosition", pi)), f = !0, u = 0, o = i.length; u < o; u++) i[u][0].triggerHandler(t("slideTo", pi), [e, i[u][3], !0]) || (f = !1);
                return f
            });
            ai.bind(t("queue", pi), function(n, t, i) {
                return n.stopPropagation(), u(t) ? t.call(nr, yu) : y(t) ? yu = t : o(t) || yu.push([t, i]), yu
            });
            ai.bind(t("insertItem", pi), function(i, u, f, h, l) {
                var p, v, y;
                i.stopPropagation();
                var w = [u, f, h, l],
                    a = b(w, ["string/object", "string/number/object", "boolean", "number"]);
                return (u = a[0], f = a[1], h = a[2], l = a[3], s(u) && !c(u) ? u = n(u) : e(u) && (u = n(u)), !c(u) || u.length == 0) ? r(pi, "Not a valid object.") : (o(f) && (f = "end"), wt(u, ri), ht(u), p = f, v = "before", f == "end" ? h ? (bi.first == 0 ? (f = bi.total - 1, v = "after") : (f = bi.first, bi.first += u.length), f < 0 && (f = 0)) : (f = bi.total - 1, v = "after") : f = nt(f, l, h, bi, ai), y = ai.children().eq(f), y.length ? y[v](u) : (r(pi, "Correct insert-position not found! Appending item to the end."), ai.append(u)), p == "end" || h || f < bi.first && (bi.first += u.length), bi.total = ai.children().length, bi.first >= bi.total && (bi.first -= bi.total), ai.trigger(t("updateSizes", pi)), ai.trigger(t("linkAnchors", pi)), !0)
            });
            ai.bind(t("removeItem", pi), function(i, r, u, f) {
                var c, e;
                i.stopPropagation();
                var h = [r, u, f],
                    s = b(h, ["string/number/object", "boolean", "number"]);
                return (r = s[0], u = s[1], f = s[2], c = !1, r instanceof n && r.length > 1) ? (e = n(), r.each(function() {
                    var i = ai.trigger(t("removeItem", pi), [n(this), u, f]);
                    i && (e = e.add(i))
                }), e) : (o(r) || r == "end" ? e = ai.children().last() : (r = nt(r, f, u, bi, ai), e = ai.children().eq(r), e.length && r < bi.first && (bi.first -= e.length)), e && e.length && (e.detach(), bi.total = ai.children().length, ai.trigger(t("updateSizes", pi))), e)
            });
            ai.bind(t("onBefore", pi) + " " + t("onAfter", pi), function(n, t) {
                n.stopPropagation();
                var i = n.type.slice(pi.events.prefix.length);
                return y(t) && (vu[i] = t), u(t) && vu[i].push(t), vu[i]
            });
            ai.bind(t("currentPosition", pi), function(n, t) {
                var i;
                return n.stopPropagation(), i = bi.first == 0 ? 0 : bi.total - bi.first, u(t) && t.call(nr, i), i
            });
            ai.bind(t("currentPage", pi), function(n, t) {
                n.stopPropagation();
                var r = ri.pagination.items || ri.items.visible,
                    f = Math.ceil(bi.total / r - 1),
                    i;
                return i = bi.first == 0 ? 0 : bi.first < bi.total % r ? 0 : bi.first != r || ri.circular ? Math.round((bi.total - bi.first) / r) : f, i < 0 && (i = 0), i > f && (i = f), u(t) && t.call(nr, i), i
            });
            ai.bind(t("currentVisible", pi), function(n, t) {
                n.stopPropagation();
                var i = tt(ai.children(), ri);
                return u(t) && t.call(nr, i), i
            });
            ai.bind(t("slice", pi), function(t, r, f, e) {
                var s, h;
                if (t.stopPropagation(), bi.total == 0) return !1;
                var c = [r, f, e],
                    o = b(c, ["number", "number", "function"]);
                if (r = i(o[0]) ? o[0] : 0, f = i(o[1]) ? o[1] : bi.total, e = o[2], r += bi.first, f += bi.first, items.total > 0) {
                    while (r > bi.total) r -= bi.total;
                    while (f > bi.total) f -= bi.total;
                    while (r < 0) r += bi.total;
                    while (f < 0) f += bi.total
                }
                return s = ai.children(), h = f > r ? s.slice(r, f) : n(s.slice(r, bi.total).get().concat(s.slice(0, f).get())), u(e) && e.call(nr, h), h
            });
            ai.bind(t("isPaused", pi) + " " + t("isStopped", pi) + " " + t("isScrolling", pi), function(n, t) {
                n.stopPropagation();
                var r = n.type.slice(pi.events.prefix.length),
                    i = ir[r];
                return u(t) && t.call(nr, i), i
            });
            ai.bind(t("configuration", pi), function(e, a, b, c) {
                var reInit, val, sz;
                if (e.stopPropagation(), reInit = !1, u(a)) a.call(nr, ri);
                else if (s(a)) bu = n.extend(!0, {}, bu, a), b !== !1 ? reInit = !0 : ri = n.extend(!0, {}, ri, a);
                else if (!o(a))
                    if (u(b)) val = eval("opts." + a), o(val) && (val = ""), b.call(nr, val);
                    else {
                        if (o(b)) return eval("opts." + a);
                        typeof c != "boolean" && (c = !0);
                        eval("opts_orig." + a + " = b");
                        c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
                    }
                return reInit && (h(ai.children(), ri), au._init(bu), au._bind_buttons(), sz = kt(ai, ri), ai.trigger(t("updatePageStatus", pi), [!0, sz])), ri
            });
            ai.bind(t("linkAnchors", pi), function(i, u, f) {
                return (i.stopPropagation(), o(u) ? u = n("body") : e(u) && (u = n(u)), !c(u) || u.length == 0) ? r(pi, "Not a valid object.") : (e(f) || (f = "a.caroufredsel"), u.find(f).each(function() {
                    var i = this.hash || "";
                    i.length > 0 && ai.children().index(n(i)) != -1 && n(this).unbind("click").click(function(n) {
                        n.preventDefault();
                        ai.trigger(t("slideTo", pi), i)
                    })
                }), !0)
            });
            ai.bind(t("updatePageStatus", pi), function(i, r) {
                var f, e, u;
                if (i.stopPropagation(), ri.pagination.container) return f = ri.pagination.items || ri.items.visible, e = Math.ceil(bi.total / f), r && (ri.pagination.anchorBuilder && (ri.pagination.container.children().remove(), ri.pagination.container.each(function() {
                    for (var i, t = 0; t < e; t++) i = ai.children().eq(nt(t * f, 0, !0, bi, ai)), n(this).append(ri.pagination.anchorBuilder.call(i[0], t + 1))
                })), ri.pagination.container.each(function() {
                    n(this).children().unbind(ri.pagination.event).each(function(i) {
                        n(this).bind(ri.pagination.event, function(n) {
                            n.preventDefault();
                            ai.trigger(t("slideTo", pi), [i * f, -ri.pagination.deviation, !0, ri.pagination])
                        })
                    })
                })), u = ai.triggerHandler(t("currentPage", pi)) + ri.pagination.deviation, u >= e && (u = 0), u < 0 && (u = e - 1), ri.pagination.container.each(function() {
                    n(this).children().removeClass(l("selected", pi)).eq(u).addClass(l("selected", pi))
                }), !0
            });
            ai.bind(t("updateSizes", pi), function() {
                var i = ri.items.visible,
                    n = ai.children(),
                    f = ki(er, ri, "width"),
                    u, e;
                return bi.total = n.length, ir.primarySizePercentage ? (ri.maxDimension = f, ri[ri.d.width] = gt(f, ir.primarySizePercentage)) : ri.maxDimension = di(ri, f), ri.responsive ? (ri.items.width = ri.items.sizesConf.width, ri.items.height = ri.items.sizesConf.height, ri = fr(ri, n, f), i = ri.items.visible, wi(ri, n)) : ri.items.visibleConf.variable ? i = w(n, ri, 0) : ri.items.filter != "*" && (i = st(n, ri, 0)), !ri.circular && bi.first != 0 && i > bi.first && (u = ri.items.visibleConf.variable ? pt(n, ri, bi.first) - bi.first : ri.items.filter != "*" ? br(n, ri, bi.first) - bi.first : ri.items.visible - bi.first, r(pi, "Preventing non-circular: sliding " + u + " items backward."), ai.trigger(t("prev", pi), u)), ri.items.visible = a(i, ri, ri.items.visibleConf.adjust, nr), ri.items.visibleConf.old = ri.items.visible, ri = ur(ri, n), e = kt(ai, ri), ai.trigger(t("updatePageStatus", pi), [!0, e]), vt(ri, bi.total, pi), g(ri, bi.first, pi), e
            });
            ai.bind(t("destroy", pi), function(n, i) {
                return n.stopPropagation(), ru = d(ru), ai.data("_cfs_isCarousel", !1), ai.trigger(t("finish", pi)), i && ai.trigger(t("jumpToStart", pi)), bt(ai.children()), bt(ai), au._unbind_events(), au._unbind_buttons(), pi.wrapper == "parent" ? bt(er) : er.replaceWith(ai), !0
            });
            ai.bind(t("debug", pi), function() {
                return r(pi, "Carousel width: " + ri.width), r(pi, "Carousel height: " + ri.height), r(pi, "Item widths: " + ri.items.width), r(pi, "Item heights: " + ri.items.height), r(pi, "Number of items visible: " + ri.items.visible), ri.auto.play && r(pi, "Number of items scrolled automatically: " + ri.auto.items), ri.prev.button && r(pi, "Number of items scrolled backward: " + ri.prev.items), ri.next.button && r(pi, "Number of items scrolled forward: " + ri.next.items), pi.debug
            });
            ai.bind("_cfs_triggerEvent", function(n, i, r) {
                return n.stopPropagation(), ai.triggerHandler(t(i, pi), r)
            })
        };
        au._unbind_events = function() {
            ai.unbind(t("", pi));
            ai.unbind(t("", pi, !1));
            ai.unbind("_cfs_triggerEvent")
        };
        au._bind_buttons = function() {
            var i, u, a, v, o, s;
            if (au._unbind_buttons(), vt(ri, bi.total, pi), g(ri, bi.first, pi), ri.auto.pauseOnHover && (i = it(ri.auto.pauseOnHover), er.bind(t("mouseenter", pi, !1), function() {
                    ai.trigger(t("pause", pi), i)
                }).bind(t("mouseleave", pi, !1), function() {
                    ai.trigger(t("resume", pi))
                })), ri.auto.button && ri.auto.button.bind(t(ri.auto.event, pi, !1), function(n) {
                    n.preventDefault();
                    var i = !1,
                        r = null;
                    ir.isPaused ? i = "play" : ri.auto.pauseOnEvent && (i = "pause", r = it(ri.auto.pauseOnEvent));
                    i && ai.trigger(t(i, pi), r)
                }), ri.prev.button && (ri.prev.button.bind(t(ri.prev.event, pi, !1), function(n) {
                    n.preventDefault();
                    ai.trigger(t("prev", pi))
                }), ri.prev.pauseOnHover && (i = it(ri.prev.pauseOnHover), ri.prev.button.bind(t("mouseenter", pi, !1), function() {
                    ai.trigger(t("pause", pi), i)
                }).bind(t("mouseleave", pi, !1), function() {
                    ai.trigger(t("resume", pi))
                }))), ri.next.button && (ri.next.button.bind(t(ri.next.event, pi, !1), function(n) {
                    n.preventDefault();
                    ai.trigger(t("next", pi))
                }), ri.next.pauseOnHover && (i = it(ri.next.pauseOnHover), ri.next.button.bind(t("mouseenter", pi, !1), function() {
                    ai.trigger(t("pause", pi), i)
                }).bind(t("mouseleave", pi, !1), function() {
                    ai.trigger(t("resume", pi))
                }))), ri.pagination.container && ri.pagination.pauseOnHover && (i = it(ri.pagination.pauseOnHover), ri.pagination.container.bind(t("mouseenter", pi, !1), function() {
                    ai.trigger(t("pause", pi), i)
                }).bind(t("mouseleave", pi, !1), function() {
                    ai.trigger(t("resume", pi))
                })), (ri.prev.key || ri.next.key) && n(document).bind(t("keyup", pi, !1, !0, !0), function(n) {
                    var i = n.keyCode;
                    i == ri.next.key && (n.preventDefault(), ai.trigger(t("next", pi)));
                    i == ri.prev.key && (n.preventDefault(), ai.trigger(t("prev", pi)))
                }), ri.pagination.keys && n(document).bind(t("keyup", pi, !1, !0, !0), function(n) {
                    var i = n.keyCode;
                    i >= 49 && i < 58 && (i = (i - 49) * ri.items.visible, i <= bi.total && (n.preventDefault(), ai.trigger(t("slideTo", pi), [i, 0, !0, ri.pagination])))
                }), n.fn.swipe && (u = "ontouchstart" in window, u && ri.swipe.onTouch || !u && ri.swipe.onMouse)) {
                var y = n.extend(!0, {}, ri.prev, ri.swipe),
                    p = n.extend(!0, {}, ri.next, ri.swipe),
                    c = function() {
                        ai.trigger(t("prev", pi), [y])
                    },
                    l = function() {
                        ai.trigger(t("next", pi), [p])
                    };
                switch (ri.direction) {
                    case "up":
                    case "down":
                        ri.swipe.options.swipeUp = l;
                        ri.swipe.options.swipeDown = c;
                        break;
                    default:
                        ri.swipe.options.swipeLeft = l;
                        ri.swipe.options.swipeRight = c
                }
                ir.swipe && ai.swipe("destroy");
                er.swipe(ri.swipe.options);
                er.css("cursor", "move");
                ir.swipe = !0
            }
            if (n.fn.mousewheel && ri.mousewheel && (a = n.extend(!0, {}, ri.prev, ri.mousewheel), v = n.extend(!0, {}, ri.next, ri.mousewheel), ir.mousewheel && er.unbind(t("mousewheel", pi, !1)), er.bind(t("mousewheel", pi, !1), function(n, i) {
                    n.preventDefault();
                    i > 0 ? ai.trigger(t("prev", pi), [a]) : ai.trigger(t("next", pi), [v])
                }), ir.mousewheel = !0), ri.auto.play && ai.trigger(t("play", pi), ri.auto.delay), ir.upDateOnWindowResize) {
                var f = function() {
                        ai.trigger(t("finish", pi));
                        ri.auto.pauseOnResize && !ir.isPaused && ai.trigger(t("play", pi));
                        h(ai.children(), ri);
                        ai.trigger(t("updateSizes", pi))
                    },
                    e = n(window),
                    r = null;
                n.debounce && pi.onWindowResize == "debounce" ? r = n.debounce(200, f) : n.throttle && pi.onWindowResize == "throttle" ? r = n.throttle(300, f) : (o = 0, s = 0, r = function() {
                    var n = e.width(),
                        t = e.height();
                    (n != o || t != s) && (f(), o = n, s = t)
                });
                e.bind(t("resize", pi, !1, !0, !0), r)
            }
        };
        au._unbind_buttons = function() {
            var r = t("", pi),
                i = t("", pi, !1);
            ns3 = t("", pi, !1, !0, !0);
            n(document).unbind(ns3);
            n(window).unbind(ns3);
            er.unbind(i);
            ri.auto.button && ri.auto.button.unbind(i);
            ri.prev.button && ri.prev.button.unbind(i);
            ri.next.button && ri.next.button.unbind(i);
            ri.pagination.container && (ri.pagination.container.unbind(i), ri.pagination.anchorBuilder && ri.pagination.container.children().remove());
            ir.swipe && (ai.swipe("destroy"), er.css("cursor", "default"), ir.swipe = !1);
            ir.mousewheel && (ir.mousewheel = !1);
            vt(ri, "hide", pi);
            g(ri, "removeClass", pi)
        };
        f(yt) && (yt = {
            debug: yt
        });
        var ir = {
                direction: "next",
                isPaused: !0,
                isScrolling: !1,
                isStopped: !1,
                mousewheel: !1,
                swipe: !1
            },
            bi = {
                total: ai.children().length,
                first: 0
            },
            ru = {
                auto: null,
                progress: null,
                startTime: p(),
                timePassed: 0
            },
            gi = {
                isStopped: !1,
                duration: 0,
                startTime: 0,
                easing: "",
                anims: []
            },
            vu = {
                onBefore: [],
                onAfter: []
            },
            yu = [],
            pi = n.extend(!0, {}, n.fn.carouFredSel.configs, yt),
            ri = {},
            bu = n.extend(!0, {}, ct),
            er = pi.wrapper == "parent" ? ai.parent() : ai.wrap("<" + pi.wrapper.element + ' class="' + pi.wrapper.classname + '" />').parent();
        if (pi.selector = ai.selector, pi.serialNumber = n.fn.carouFredSel.serialNumber++, pi.transition = pi.transition && n.fn.transition ? "transition" : "animate", au._init(bu, !0, gu), au._build(), au._bind_events(), au._bind_buttons(), y(ri.items.start) ? pu = ri.items.start : (pu = [], ri.items.start != 0 && pu.push(ri.items.start)), ri.cookie && pu.unshift(parseInt(eu(ri.cookie), 10)), pu.length > 0)
            for (ku = 0, nf = pu.length; ku < nf; ku++)
                if (wu = pu[ku], wu != 0) {
                    if (wu === !0) {
                        if (wu = window.location.hash, wu.length < 1) continue
                    } else wu === "random" && (wu = Math.floor(Math.random() * bi.total));
                    if (ai.triggerHandler(t("slideTo", pi), [wu, 0, !0, {
                            fx: "none"
                        }])) break
                }
        return du = kt(ai, ri), tf = tt(ai.children(), ri), ri.onCreate && ri.onCreate.call(nr, {
            width: du.width,
            height: du.height,
            items: tf
        }), ai.trigger(t("updatePageStatus", pi), [!0, du]), ai.trigger(t("linkAnchors", pi)), pi.debug && ai.trigger(t("debug", pi)), ai
    }, n.fn.carouFredSel.serialNumber = 1, n.fn.carouFredSel.defaults = {
        synchronise: !1,
        infinite: !0,
        circular: !0,
        responsive: !1,
        direction: "left",
        items: {
            start: 0
        },
        scroll: {
            easing: "swing",
            duration: 500,
            pauseOnHover: !1,
            event: "click",
            queue: !1
        }
    }, n.fn.carouFredSel.configs = {
        debug: !1,
        transition: !1,
        onWindowResize: "throttle",
        events: {
            prefix: "",
            namespace: "cfs"
        },
        wrapper: {
            element: "div",
            classname: "caroufredsel_wrapper"
        },
        classnames: {}
    }, n.fn.carouFredSel.pageAnchorBuilder = function(n) {
        return '<a href="#"><span>' + n + "<\/span><\/a>"
    }, n.fn.carouFredSel.progressbarUpdater = function(t) {
        n(this).css("width", t + "%")
    }, n.fn.carouFredSel.cookie = {
        get: function(n) {
            var r, i, u, t;
            for (n += "=", r = document.cookie.split(";"), i = 0, u = r.length; i < u; i++) {
                for (t = r[i]; t.charAt(0) == " ";) t = t.slice(1);
                if (t.indexOf(n) == 0) return t.slice(n.length)
            }
            return 0
        },
        set: function(n, t, i) {
            var u = "",
                r;
            i && (r = new Date, r.setTime(r.getTime() + i * 864e5), u = "; expires=" + r.toGMTString());
            document.cookie = n + "=" + t + u + "; path=/"
        },
        remove: function(t) {
            n.fn.carouFredSel.cookie.set(t, "", -1)
        }
    }, n.extend(n.easing, {
        quadratic: function(n) {
            var t = n * n;
            return n * (-t * n + 4 * t - 6 * n + 4)
        },
        cubic: function(n) {
            return n * (4 * n * n - 9 * n + 6)
        },
        elastic: function(n) {
            var t = n * n;
            return n * (33 * t * t - 106 * t * n + 126 * t - 67 * n + 15)
        }
    }))
}(jQuery),
function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? module.exports = n : n(jQuery)
}(function(n) {
    function f(i) {
        var u = i || window.event,
            l = [].slice.call(arguments, 1),
            f = 0,
            e = 0,
            o = 0,
            h = 0,
            c = 0,
            s;
        return i = n.event.fix(u), i.type = "mousewheel", u.wheelDelta && (f = u.wheelDelta), u.detail && (f = u.detail * -1), u.deltaY && (o = u.deltaY * -1, f = o), u.deltaX && (e = u.deltaX, f = e * -1), u.wheelDeltaY !== undefined && (o = u.wheelDeltaY), u.wheelDeltaX !== undefined && (e = u.wheelDeltaX * -1), h = Math.abs(f), (!r || h < r) && (r = h), c = Math.max(Math.abs(o), Math.abs(e)), (!t || c < t) && (t = c), s = f > 0 ? "floor" : "ceil", f = Math[s](f / r), e = Math[s](e / t), o = Math[s](o / t), l.unshift(i, f, e, o), (n.event.dispatch || n.event.handle).apply(this, l)
    }
    var e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        r, t, u;
    if (n.event.fixHooks)
        for (u = e.length; u;) n.event.fixHooks[e[--u]] = n.event.mouseHooks;
    n.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var n = i.length; n;) this.addEventListener(i[--n], f, !1);
            else this.onmousewheel = f
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = i.length; n;) this.removeEventListener(i[--n], f, !1);
            else this.onmousewheel = null
        }
    };
    n.fn.extend({
        mousewheel: function(n) {
            return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
        },
        unmousewheel: function(n) {
            return this.unbind("mousewheel", n)
        }
    })
})