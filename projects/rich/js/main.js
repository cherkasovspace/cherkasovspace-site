function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = ie.type(e);
        return "function" !== n && !ie.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ie.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pe.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function(e) {
            return ie.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function i(e) {
        var t = xe[e] = {};
        return ie.each(e.match(we) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        me.addEventListener ? (me.removeEventListener("DOMContentLoaded", l, !1), e.removeEventListener("load", l, !1)) : (me.detachEvent("onreadystatechange", l), e.detachEvent("onload", l))
    }

    function l() {
        (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (a(), ie.ready())
    }

    function s(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(ke, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : je.test(n) ? ie.parseJSON(n) : n)
                } catch (o) {}
                ie.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (ie.acceptData(e)) {
            var o, i, a = ie.expando,
                l = e.nodeType,
                s = l ? ie.cache : e,
                u = l ? e[a] : e[a] && a;
            if (u && s[u] && (r || s[u].data) || void 0 !== n || "string" != typeof t) return u || (u = l ? e[a] = V.pop() || ie.guid++ : a), s[u] || (s[u] = l ? {} : {
                toJSON: ie.noop
            }), "object" != typeof t && "function" != typeof t || (r ? s[u] = ie.extend(s[u], t) : s[u].data = ie.extend(s[u].data, t)), i = s[u], r || (i.data || (i.data = {}), i = i.data), void 0 !== n && (i[ie.camelCase(t)] = n), "string" == typeof t ? (o = i[t], null == o && (o = i[ie.camelCase(t)])) : o = i, o
        }
    }

    function d(e, t, n) {
        if (ie.acceptData(e)) {
            var r, o, i = e.nodeType,
                a = i ? ie.cache : e,
                l = i ? e[ie.expando] : ie.expando;
            if (a[l]) {
                if (t && (r = n ? a[l] : a[l].data)) {
                    ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete r[t[o]];
                    if (n ? !u(r) : !ie.isEmptyObject(r)) return
                }(n || (delete a[l].data, u(a[l]))) && (i ? ie.cleanData([e], !0) : re.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return me.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = $e.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function y(e, t) {
        var n, r, o = 0,
            i = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
        if (!i)
            for (i = [], n = e.childNodes || e; null != (r = n[o]); o++) !t || ie.nodeName(r, t) ? i.push(r) : ie.merge(i, y(r, t));
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], i) : i
    }

    function v(e) {
        Ae.test(e.type) && (e.defaultChecked = e.checked)
    }

    function g(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && ie.hasData(e)) {
            var n, r, o, i = ie._data(e),
                a = ie._data(t, i),
                l = i.events;
            if (l) {
                delete a.handle, a.events = {};
                for (n in l)
                    for (r = 0, o = l[n].length; r < o; r++) ie.event.add(t, n, l[n][r])
            }
            a.data && (a.data = ie.extend({}, a.data))
        }
    }

    function P(e, t) {
        var n, r, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !re.noCloneEvent && t[ie.expando]) {
                o = ie._data(t);
                for (r in o.events) ie.removeEvent(t, r, o.handle);
                t.removeAttribute(ie.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), re.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ae.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, n) {
        var r = ie(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : ie.css(r[0], "display");
        return r.detach(), o
    }

    function j(e) {
        var t = me,
            n = et[e];
        return n || (n = C(e, t), "none" !== n && n || (Ze = (Ze || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ze[0].contentWindow || Ze[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Ze.detach()), et[e] = n), n
    }

    function k(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = pt.length; o--;)
            if (t = pt[o] + n, t in e) return t;
        return r
    }

    function Y(e, t) {
        for (var n, r, o, i = [], a = 0, l = e.length; a < l; a++) r = e[a], r.style && (i[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && _e(r) && (i[a] = ie._data(r, "olddisplay", j(r.nodeName)))) : i[a] || (o = _e(r), (n && "none" !== n || !o) && ie._data(r, "olddisplay", o ? n : ie.css(r, "display"))));
        for (a = 0; a < l; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
        return e
    }

    function _(e, t, n) {
        var r = ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function E(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; i < 4; i += 2) "margin" === n && (a += ie.css(e, n + Ye[i], !0, o)), r ? ("content" === n && (a -= ie.css(e, "padding" + Ye[i], !0, o)), "margin" !== n && (a -= ie.css(e, "border" + Ye[i] + "Width", !0, o))) : (a += ie.css(e, "padding" + Ye[i], !0, o), "padding" !== n && (a += ie.css(e, "border" + Ye[i] + "Width", !0, o)));
        return a
    }

    function A(e, t, n) {
        var r = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = tt(e),
            a = re.boxSizing() && "border-box" === ie.css(e, "boxSizing", !1, i);
        if (o <= 0 || null == o) {
            if (o = nt(e, t, i), (o < 0 || null == o) && (o = e.style[t]), ot.test(o)) return o;
            r = a && (re.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + E(e, t, n || (a ? "border" : "content"), r, i) + "px"
    }

    function Q(e, t, n, r, o) {
        return new Q.prototype.init(e, t, n, r, o)
    }

    function I() {
        return setTimeout(function() {
            ht = void 0
        }), ht = ie.now()
    }

    function D(e, t) {
        var n, r = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t) n = Ye[o], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function O(e, t, n) {
        for (var r, o = (wt[t] || []).concat(wt["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function N(e, t, n) {
        var r, o, i, a, l, s, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && _e(e),
            m = ie._data(e, "fxshow");
        n.queue || (l = ie._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, s = l.empty.fire, l.empty.fire = function() {
            l.unqueued || s()
        }), l.unqueued++, d.always(function() {
            d.always(function() {
                l.unqueued--, ie.queue(e, "fx").length || l.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ie.css(e, "display"), c = j(e.nodeName), "none" === u && (u = c), "inline" === u && "none" === ie.css(e, "float") && (re.inlineBlockNeedsLayout && "inline" !== c ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", re.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], yt.exec(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[r]) continue;
                    h = !0
                }
                f[r] = m && m[r] || ie.style(e, r)
            } if (!ie.isEmptyObject(f)) {
            m ? "hidden" in m && (h = m.hidden) : m = ie._data(e, "fxshow", {}), i && (m.hidden = !h), h ? ie(e).show() : d.done(function() {
                ie(e).hide()
            }), d.done(function() {
                var t;
                ie._removeData(e, "fxshow");
                for (t in f) ie.style(e, t, f[t])
            });
            for (r in f) a = O(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = ie.camelCase(n), o = t[r], i = e[n], ie.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) {
                i = a.expand(i), delete e[r];
                for (n in i) n in e || (e[n] = i[n], t[n] = o)
            } else t[r] = o
    }

    function M(e, t, n) {
        var r, o, i = 0,
            a = bt.length,
            l = ie.Deferred().always(function() {
                delete s.elem
            }),
            s = function() {
                if (o) return !1;
                for (var t = ht || I(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, i = 1 - r, a = 0, s = u.tweens.length; a < s; a++) u.tweens[a].run(i);
                return l.notifyWith(e, [u, i, n]), i < 1 && s ? n : (l.resolveWith(e, [u]), !1)
            },
            u = l.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || I(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ie.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? l.resolveWith(e, [u, t]) : l.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for ($(c, u.opts.specialEasing); i < a; i++)
            if (r = bt[i].call(u, e, c, u.opts)) return r;
        return ie.map(c, O, u), ie.isFunction(u.opts.start) && u.opts.start.call(e, u), ie.fx.timer(ie.extend(s, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(we) || [];
            if (ie.isFunction(n))
                for (; r = i[o++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function z(e, t, n, r) {
        function o(l) {
            var s;
            return i[l] = !0, ie.each(e[l] || [], function(e, l) {
                var u = l(t, n, r);
                return "string" != typeof u || a || i[u] ? a ? !(s = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), s
        }
        var i = {},
            a = e === qt;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function B(e, t) {
        var n, r, o = ie.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((o[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ie.extend(!0, e, n), e
    }

    function R(e, t, n) {
        for (var r, o, i, a, l = e.contents, s = e.dataTypes;
            "*" === s[0];) s.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in l)
                if (l[a] && l[a].test(o)) {
                    s.unshift(a);
                    break
                } if (s[0] in n) i = s[0];
        else {
            for (a in n) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    i = a;
                    break
                }
                r || (r = a)
            }
            i = i || r
        }
        if (i) return i !== s[0] && s.unshift(i), n[i]
    }

    function F(e, t, n, r) {
        var o, i, a, l, s, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = i, i = c.shift())
                if ("*" === i) i = s;
                else if ("*" !== s && s !== i) {
            if (a = u[s + " " + i] || u["* " + i], !a)
                for (o in u)
                    if (l = o.split(" "), l[1] === i && (a = u[s + " " + l[0]] || u["* " + l[0]])) {
                        a === !0 ? a = u[o] : u[o] !== !0 && (i = l[0], c.unshift(l[1]));
                        break
                    } if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + s + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function q(e, t, n, r) {
        var o;
        if (ie.isArray(t)) ie.each(t, function(t, o) {
            n || Vt.test(e) ? r(e, o) : q(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (o in t) q(e + "[" + o + "]", t[o], n, r)
    }

    function H() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function W(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var V = [],
        X = V.slice,
        J = V.concat,
        K = V.push,
        G = V.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = "".trim,
        re = {},
        oe = "1.11.0",
        ie = function(e, t) {
            return new ie.fn.init(e, t)
        },
        ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        le = /^-ms-/,
        se = /-([\da-z])/gi,
        ue = function(e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: oe,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : X.call(this)
        },
        pushStack: function(e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ie.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ie.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: V.sort,
        splice: V.splice
    }, ie.extend = ie.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            l = 1,
            s = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" == typeof a || ie.isFunction(a) || (a = {}), l === s && (a = this, l--); l < s; l++)
            if (null != (o = arguments[l]))
                for (r in o) e = a[r], n = o[r], a !== n && (u && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, i = e && ie.isArray(e) ? e : []) : i = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(u, i, n)) : void 0 !== n && (a[r] = n));
        return a
    }, ie.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ie.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ie.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (re.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && ie.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(le, "ms-").replace(se, ue)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var o, i = 0,
                a = e.length,
                l = n(e);
            if (r) {
                if (l)
                    for (; i < a && (o = t.apply(e[i], r), o !== !1); i++);
                else
                    for (i in e)
                        if (o = t.apply(e[i], r), o === !1) break
            } else if (l)
                for (; i < a && (o = t.call(e[i], i, e[i]), o !== !1); i++);
            else
                for (i in e)
                    if (o = t.call(e[i], i, e[i]), o === !1) break;
            return e
        },
        trim: ne && !ne.call("\ufeff ") ? function(e) {
            return null == e ? "" : ne.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(ae, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (G) return G.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n;) e[o++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[o++] = t[r++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r, o = [], i = 0, a = e.length, l = !n; i < a; i++) r = !t(e[i], i), r !== l && o.push(e[i]);
            return o
        },
        map: function(e, t, r) {
            var o, i = 0,
                a = e.length,
                l = n(e),
                s = [];
            if (l)
                for (; i < a; i++) o = t(e[i], i, r), null != o && s.push(o);
            else
                for (i in e) o = t(e[i], i, r), null != o && s.push(o);
            return J.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (o = e[t], t = e, e = o), ie.isFunction(e)) return n = X.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(X.call(arguments)))
            }, r.guid = e.guid = e.guid || ie.guid++, r
        },
        now: function() {
            return +new Date
        },
        support: re
    }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, n, r) {
            var o, i, a, l, s, u, d, h, m, y;
            if ((t ? t.ownerDocument || t : z) !== Q && A(t), t = t || Q, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (D && !r) {
                if (o = ge.exec(e))
                    if (a = o[1]) {
                        if (9 === l) {
                            if (i = t.getElementById(a), !i || !i.parentNode) return n;
                            if (i.id === a) return n.push(i), n
                        } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && M(t, i) && i.id === a) return n.push(i), n
                    } else {
                        if (o[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = o[3]) && P.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                    } if (P.qsa && (!O || !O.test(e))) {
                    if (h = d = L, m = t, y = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        for (u = f(e), (d = t.getAttribute("id")) ? h = d.replace(we, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", s = u.length; s--;) u[s] = h + p(u[s]);
                        m = be.test(e) && c(t.parentNode) || t, y = u.join(",")
                    }
                    if (y) try {
                        return Z.apply(n, m.querySelectorAll(y)), n
                    } catch (v) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[L] = !0, e
        }

        function o(e) {
            var t = Q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) C.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== W && e
        }

        function d() {}

        function f(e, n) {
            var r, o, i, a, l, s, u, c = q[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (l = e, s = [], u = C.preFilter; l;) {
                r && !(o = ue.exec(l)) || (o && (l = l.slice(o[0].length) || l), s.push(i = [])), r = !1, (o = ce.exec(l)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(se, " ")
                }), l = l.slice(r.length));
                for (a in C.filter) !(o = he[a].exec(l)) || u[a] && !(o = u[a](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: a,
                    matches: o
                }), l = l.slice(r.length));
                if (!r) break
            }
            return n ? l.length : l ? t.error(e) : q(e, s).slice(0)
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                o = n && "parentNode" === r,
                i = R++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || o) return e(t, n, i)
            } : function(t, n, a) {
                var l, s, u = [B, i];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || o) {
                            if (s = t[L] || (t[L] = {}), (l = s[r]) && l[0] === B && l[1] === i) return u[2] = l[2];
                            if (s[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function y(e, t, n, r, o) {
            for (var i, a = [], l = 0, s = e.length, u = null != t; l < s; l++)(i = e[l]) && (n && !n(i, r, o) || (a.push(i), u && t.push(l)));
            return a
        }

        function v(e, t, n, o, i, a) {
            return o && !o[L] && (o = v(o)), i && !i[L] && (i = v(i, a)), r(function(r, a, l, s) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    m = r || w(t || "*", l.nodeType ? [l] : l, []),
                    v = !e || !r && t ? m : y(m, f, e, l, s),
                    g = n ? i || (r ? e : h || o) ? [] : a : v;
                if (n && n(v, g, l, s), o)
                    for (u = y(g, p), o(u, [], l, s), c = u.length; c--;)(d = u[c]) && (g[p[c]] = !(v[p[c]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = g.length; c--;)(d = g[c]) && u.push(v[c] = d);
                            i(null, g = [], u, s)
                        }
                        for (c = g.length; c--;)(d = g[c]) && (u = i ? te.call(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else g = y(g === a ? g.splice(h, g.length) : g), i ? i(null, a, g, s) : Z.apply(a, g)
            })
        }

        function g(e) {
            for (var t, n, r, o = e.length, i = C.relative[e[0].type], a = i || C.relative[" "], l = i ? 1 : 0, s = h(function(e) {
                    return e === t
                }, a, !0), u = h(function(e) {
                    return te.call(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    return !i && (r || n !== Y) || ((t = n).nodeType ? s(e, n, r) : u(e, n, r))
                }]; l < o; l++)
                if (n = C.relative[e[l].type]) c = [h(m(c), n)];
                else {
                    if (n = C.filter[e[l].type].apply(null, e[l].matches), n[L]) {
                        for (r = ++l; r < o && !C.relative[e[r].type]; r++);
                        return v(l > 1 && m(c), l > 1 && p(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, l < r && g(e.slice(l, r)), r < o && g(e = e.slice(r)), r < o && p(e))
                    }
                    c.push(n)
                } return m(c)
        }

        function b(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                a = function(r, a, l, s, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        g = Y,
                        b = r || i && C.find.TAG("*", u),
                        w = B += null == g ? 1 : Math.random() || .1,
                        x = b.length;
                    for (u && (Y = a !== Q && a); h !== x && null != (c = b[h]); h++) {
                        if (i && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, l)) {
                                    s.push(c);
                                    break
                                } u && (B = w)
                        }
                        o && ((c = !f && c) && p--, r && m.push(c))
                    }
                    if (p += h, o && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, l);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = K.call(s));
                            v = y(v)
                        }
                        Z.apply(s, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(s)
                    }
                    return u && (B = w, Y = g), m
                };
            return o ? r(a) : a
        }

        function w(e, n, r) {
            for (var o = 0, i = n.length; o < i; o++) t(e, n[o], r);
            return r
        }

        function x(e, t, n, r) {
            var o, i, a, l, s, u = f(e);
            if (!r && 1 === u.length) {
                if (i = u[0] = u[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && P.getById && 9 === t.nodeType && D && C.relative[i[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(xe, Te), t) || [])[0], !t) return n;
                    e = e.slice(i.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !C.relative[l = a.type]);)
                    if ((s = C.find[l]) && (r = s(a.matches[0].replace(xe, Te), be.test(i[0].type) && c(t.parentNode) || t))) {
                        if (i.splice(o, 1), e = r.length && p(i), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return S(e, u)(r, t, !D, n, be.test(e) && c(t.parentNode) || t), n
        }
        var T, P, C, j, k, S, Y, _, E, A, Q, I, D, O, N, $, M, L = "sizzle" + -new Date,
            z = e.document,
            B = 0,
            R = 0,
            F = n(),
            q = n(),
            H = n(),
            U = function(e, t) {
                return e === t && (E = !0), 0
            },
            W = "undefined",
            V = 1 << 31,
            X = {}.hasOwnProperty,
            J = [],
            K = J.pop,
            G = J.push,
            Z = J.push,
            ee = J.slice,
            te = J.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = oe.replace("w", "w#"),
            ae = "\\[" + re + "*(" + oe + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + re + "*\\]",
            le = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
            se = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            ue = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            de = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            fe = new RegExp(le),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + le),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ye = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            Te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(J = ee.call(z.childNodes), z.childNodes), J[z.childNodes.length].nodeType
        } catch (Pe) {
            Z = {
                apply: J.length ? function(e, t) {
                    G.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        P = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : z,
                r = n.defaultView;
            return n !== Q && 9 === n.nodeType && n.documentElement ? (Q = n, I = n.documentElement, D = !k(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                A()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                A()
            })), P.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), P.getElementsByTagName = o(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), P.getElementsByClassName = ve.test(n.getElementsByClassName) && o(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), P.getById = o(function(e) {
                return I.appendChild(e).id = L, !n.getElementsByName || !n.getElementsByName(L).length
            }), P.getById ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== W && D) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(xe, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(xe, Te);
                return function(e) {
                    var n = typeof e.getAttributeNode !== W && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = P.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== W) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, C.find.CLASS = P.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== W && D) return t.getElementsByClassName(e)
            }, N = [], O = [], (P.qsa = ve.test(n.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && O.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
            }), o(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (P.matchesSelector = ve.test($ = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(e) {
                P.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), N.push("!=", le)
            }), O = O.length && new RegExp(O.join("|")), N = N.length && new RegExp(N.join("|")), t = ve.test(I.compareDocumentPosition), M = t || ve.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return E = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !P.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === z && M(z, e) ? -1 : t === n || t.ownerDocument === z && M(z, t) ? 1 : _ ? te.call(_, e) - te.call(_, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return E = !0, 0;
                var r, o = 0,
                    i = e.parentNode,
                    l = t.parentNode,
                    s = [e],
                    u = [t];
                if (!i || !l) return e === n ? -1 : t === n ? 1 : i ? -1 : l ? 1 : _ ? te.call(_, e) - te.call(_, t) : 0;
                if (i === l) return a(e, t);
                for (r = e; r = r.parentNode;) s.unshift(r);
                for (r = t; r = r.parentNode;) u.unshift(r);
                for (; s[o] === u[o];) o++;
                return o ? a(s[o], u[o]) : s[o] === z ? -1 : u[o] === z ? 1 : 0
            }, n) : Q
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== Q && A(e), n = n.replace(de, "='$1']"), P.matchesSelector && D && (!N || !N.test(n)) && (!O || !O.test(n))) try {
                var r = $.call(e, n);
                if (r || P.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (o) {}
            return t(n, Q, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== Q && A(e), M(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== Q && A(e);
            var n = C.attrHandle[t.toLowerCase()],
                r = n && X.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
            return void 0 !== r ? r : P.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (E = !P.detectDuplicates, _ = !P.sortStable && e.slice(0), e.sort(U), E) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return _ = null, e
        }, j = t.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += j(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += j(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, Te), e[3] = (e[4] || e[5] || "").replace(xe, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && fe.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && F(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== W && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        l = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, s) {
                        var u, c, d, f, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = l && t.nodeName.toLowerCase(),
                            g = !s && !l;
                        if (y) {
                            if (i) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (l ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && g) {
                                for (c = y[L] || (y[L] = {}), u = c[e] || [], p = u[0] === B && u[1], f = u[0] === B && u[2], d = p && y.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [B, p, f];
                                        break
                                    }
                            } else if (g && (u = (t[L] || (t[L] = {}))[e]) && u[0] === B) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((l ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (g && ((d[L] || (d[L] = {}))[e] = [B, f]), d !== t)););
                            return f -= o, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[L] ? i(n) : i.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--;) r = te.call(e, o[a]), e[r] = !(t[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        o = S(e.replace(se, "$1"));
                    return o[L] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), l = e.length; l--;)(i = a[l]) && (e[l] = !(t[l] = i))
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || j(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === Q.activeElement && (!Q.hasFocus || Q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return ye.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[T] = l(T);
        for (T in {
                submit: !0,
                reset: !0
            }) C.pseudos[T] = s(T);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, S = t.compile = function(e, t) {
            var n, r = [],
                o = [],
                i = H[e + " "];
            if (!i) {
                for (t || (t = f(e)), n = t.length; n--;) i = g(t[n]), i[L] ? r.push(i) : o.push(i);
                i = H(e, b(o, r))
            }
            return i
        }, P.sortStable = L.split("").sort(U).join("") === L, P.detectDuplicates = !!E, A(), P.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(Q.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), P.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(ne, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ie.find = ce, ie.expr = ce.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = ce.uniqueSort, ie.text = ce.getText, ie.isXMLDoc = ce.isXML, ie.contains = ce.contains;
    var de = ie.expr.match.needsContext,
        fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pe = /^.[^:#\[\.,]*$/;
    ie.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ie.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                o = r.length;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                for (t = 0; t < o; t++)
                    if (ie.contains(r[t], this)) return !0
            }));
            for (t = 0; t < o; t++) ie.find(e, r[t], n);
            return n = this.pushStack(o > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && de.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var he, me = e.document,
        ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ve = ie.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ye.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : me, !0)), fe.test(n[1]) && ie.isPlainObject(t))
                        for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = me.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return he.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = me, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
        };
    ve.prototype = ie.fn, he = ie(me);
    var ge = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ie.extend({
        dir: function(e, t, n) {
            for (var r = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ie(o).is(n));) 1 === o.nodeType && r.push(o), o = o[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ie.fn.extend({
        has: function(e) {
            var t, n = ie(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (ie.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], a = de.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; r < o; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    } return this.pushStack(i.length > 1 ? ie.unique(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ie.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ie.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ie.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ie.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ie.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ie.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ie.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ie.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ie.sibling(e.firstChild)
        },
        contents: function(e) {
            return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes)
        }
    }, function(e, t) {
        ie.fn[e] = function(n, r) {
            var o = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = ie.filter(r, o)), this.length > 1 && (be[e] || (o = ie.unique(o)), ge.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var we = /\S+/g,
        xe = {};
    ie.Callbacks = function(e) {
        e = "string" == typeof e ? xe[e] || i(e) : ie.extend({}, e);
        var t, n, r, o, a, l, s = [],
            u = !e.once && [],
            c = function(i) {
                for (n = e.memory && i, r = !0, a = l || 0, l = 0, o = s.length, t = !0; s && a < o; a++)
                    if (s[a].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    } t = !1, s && (u ? u.length && c(u.shift()) : n ? s = [] : d.disable())
            },
            d = {
                add: function() {
                    if (s) {
                        var r = s.length;
                        ! function i(t) {
                            ie.each(t, function(t, n) {
                                var r = ie.type(n);
                                "function" === r ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        }(arguments), t ? o = s.length : n && (l = r, c(n))
                    }
                    return this
                },
                remove: function() {
                    return s && ie.each(arguments, function(e, n) {
                        for (var r;
                            (r = ie.inArray(n, s, r)) > -1;) s.splice(r, 1), t && (r <= o && o--, r <= a && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ie.inArray(e, s) > -1 : !(!s || !s.length)
                },
                empty: function() {
                    return s = [], o = 0, this
                },
                disable: function() {
                    return s = u = n = void 0, this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !s || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, ie.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ie.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ie.Deferred(function(n) {
                            ie.each(t, function(t, i) {
                                var a = ie.isFunction(e[t]) && e[t];
                                o[i[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ie.extend(e, r) : r
                    }
                },
                o = {};
            return r.pipe = r.then, ie.each(t, function(e, i) {
                var a = i[2],
                    l = i[3];
                r[i[1]] = a.add, l && a.add(function() {
                    n = l
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = a.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, r, o = 0,
                i = X.call(arguments),
                a = i.length,
                l = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                s = 1 === l ? e : ie.Deferred(),
                u = function(e, n, r) {
                    return function(o) {
                        n[e] = this, r[e] = arguments.length > 1 ? X.call(arguments) : o, r === t ? s.notifyWith(n, r) : --l || s.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); o < a; o++) i[o] && ie.isFunction(i[o].promise) ? i[o].promise().done(u(o, r, i)).fail(s.reject).progress(u(o, n, t)) : --l;
            return l || s.resolveWith(r, i), s.promise()
        }
    });
    var Te;
    ie.fn.ready = function(e) {
        return ie.ready.promise().done(e), this
    }, ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ie.readyWait++ : ie.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ie.readyWait : !ie.isReady) {
                if (!me.body) return setTimeout(ie.ready);
                ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (Te.resolveWith(me, [ie]), ie.fn.trigger && ie(me).trigger("ready").off("ready"))
            }
        }
    }), ie.ready.promise = function(t) {
        if (!Te)
            if (Te = ie.Deferred(), "complete" === me.readyState) setTimeout(ie.ready);
            else if (me.addEventListener) me.addEventListener("DOMContentLoaded", l, !1), e.addEventListener("load", l, !1);
        else {
            me.attachEvent("onreadystatechange", l), e.attachEvent("onload", l);
            var n = !1;
            try {
                n = null == e.frameElement && me.documentElement
            } catch (r) {}
            n && n.doScroll && ! function o() {
                if (!ie.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    a(), ie.ready()
                }
            }()
        }
        return Te.promise(t)
    };
    var Pe, Ce = "undefined";
    for (Pe in ie(re)) break;
    re.ownLast = "0" !== Pe, re.inlineBlockNeedsLayout = !1, ie(function() {
            var e, t, n = me.getElementsByTagName("body")[0];
            n && (e = me.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = me.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (re.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
        }),
        function() {
            var e = me.createElement("div");
            if (null == re.deleteExpando) {
                re.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    re.deleteExpando = !1
                }
            }
            e = null
        }(), ie.acceptData = function(e) {
            var t = ie.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        };
    var je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ke = /([A-Z])/g;
    ie.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), ie.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = ie.data(i), 1 === i.nodeType && !ie._data(i, "parsedAttrs"))) {
                    for (n = a.length; n--;) r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), s(i, r, o[r]));
                    ie._data(i, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ie.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ie.data(this, e, t)
            }) : i ? s(i, e, ie.data(i, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ie.removeData(this, e)
            })
        }
    }), ie.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = ie._queueHooks(e, t),
                a = function() {
                    ie.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ie._data(e, n) || ie._data(e, n, {
                empty: ie.Callbacks("once memory").add(function() {
                    ie._removeData(e, t + "queue"), ie._removeData(e, n)
                })
            })
        }
    }), ie.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = ie.Deferred(),
                i = this,
                a = this.length,
                l = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ie._data(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(l));
            return l(), o.promise(t)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ye = ["Top", "Right", "Bottom", "Left"],
        _e = function(e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        },
        Ee = ie.access = function(e, t, n, r, o, i, a) {
            var l = 0,
                s = e.length,
                u = null == n;
            if ("object" === ie.type(n)) {
                o = !0;
                for (l in n) ie.access(e, t, l, n[l], !0, i, a)
            } else if (void 0 !== r && (o = !0, ie.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(ie(e), n)
                })), t))
                for (; l < s; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
            return o ? e : u ? t.call(e) : s ? t(e[0], n) : i
        },
        Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = me.createDocumentFragment(),
            t = me.createElement("div"),
            n = me.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", re.leadingWhitespace = 3 === t.firstChild.nodeType, re.tbody = !t.getElementsByTagName("tbody").length, re.htmlSerialize = !!t.getElementsByTagName("link").length, re.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), re.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, re.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                re.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == re.deleteExpando) {
            re.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                re.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function() {
        var t, n, r = me.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (re[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), re[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Qe = /^(?:input|select|textarea)$/i,
        Ie = /^key/,
        De = /^(?:mouse|contextmenu)|click/,
        Oe = /^(?:focusinfocus|focusoutblur)$/,
        Ne = /^([^.]*)(?:\.(.+)|)$/;
    ie.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, l, s, u, c, d, f, p, h, m, y = ie._data(e);
            if (y) {
                for (n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = ie.guid++), (a = y.events) || (a = y.events = {}), (c = y.handle) || (c = y.handle = function(e) {
                        return typeof ie === Ce || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(we) || [""], l = t.length; l--;) i = Ne.exec(t[l]) || [], p = m = i[1], h = (i[2] || "").split(".").sort(), p && (u = ie.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = ie.event.special[p] || {}, d = ie.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ie.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, s), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, o) {
            var i, a, l, s, u, c, d, f, p, h, m, y = ie.hasData(e) && ie._data(e);
            if (y && (c = y.events)) {
                for (t = (t || "").match(we) || [""], u = t.length; u--;)
                    if (l = Ne.exec(t[u]) || [], p = m = l[1], h = (l[2] || "").split(".").sort(), p) {
                        for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], l = l[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = f.length; i--;) a = f[i], !o && m !== a.origType || n && n.guid !== a.guid || l && !l.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(i, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        s && !f.length && (d.teardown && d.teardown.call(e, h, y.handle) !== !1 || ie.removeEvent(e, p, y.handle), delete c[p])
                    } else
                        for (p in c) ie.event.remove(e, p + t[u], n, r, !0);
                ie.isEmptyObject(c) && (delete y.handle, ie._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, o) {
            var i, a, l, s, u, c, d, f = [r || me],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (l = c = r = r || me, 3 !== r.nodeType && 8 !== r.nodeType && !Oe.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), u = ie.event.special[p] || {}, o || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!o && !u.noBubble && !ie.isWindow(r)) {
                    for (s = u.delegateType || p, Oe.test(s + p) || (l = l.parentNode); l; l = l.parentNode) f.push(l), c = l;
                    c === (r.ownerDocument || me) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (l = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? s : u.bindType || p, i = (ie._data(l, "events") || {})[t.type] && ie._data(l, "handle"), i && i.apply(l, n), i = a && l[a], i && i.apply && ie.acceptData(l) && (t.result = i.apply(l, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) {
                    c = r[a], c && (r[a] = null), ie.event.triggered = p;
                    try {
                        r[p]()
                    } catch (m) {}
                    ie.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ie.event.fix(e);
            var t, n, r, o, i, a = [],
                l = X.call(arguments),
                s = (ie._data(this, "events") || {})[e.type] || [],
                u = ie.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = ie.event.handlers.call(this, e, s), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, i = 0;
                        (r = o.handlers[i++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a = [],
                l = t.delegateCount,
                s = e.target;
            if (l && s.nodeType && (!e.button || "click" !== e.type))
                for (; s != this; s = s.parentNode || this)
                    if (1 === s.nodeType && (s.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], i = 0; i < l; i++) r = t[i], n = r.selector + " ", void 0 === o[n] && (o[n] = r.needsContext ? ie(n, this).index(s) >= 0 : ie.find(n, this, null, [s]).length), o[n] && o.push(r);
                        o.length && a.push({
                            elem: s,
                            handlers: o
                        })
                    } return l < t.length && a.push({
                elem: this,
                handlers: t.slice(l)
            }), a
        },
        fix: function(e) {
            if (e[ie.expando]) return e;
            var t, n, r, o = e.type,
                i = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = De.test(o) ? this.mouseHooks : Ie.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
            return e.target || (e.target = i.srcElement || me), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, o, i = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || me, o = r.documentElement, n = r.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === h() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (ie.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return ie.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var o = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ie.event.trigger(o, null, t) : ie.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, ie.removeEvent = me.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ce && (e[r] = null), e.detachEvent(r, n))
    }, ie.Event = function(e, t) {
        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? f : p) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
    }, ie.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = f, this.stopPropagation()
        }
    }, ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return o && (o === r || ie.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), re.submitBubbles || (ie.event.special.submit = {
        setup: function() {
            return !ie.nodeName(this, "form") && void ie.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ie._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !ie.nodeName(this, "form") && void ie.event.remove(this, "._submit")
        }
    }), re.changeBubbles || (ie.event.special.change = {
        setup: function() {
            return Qe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ie.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ie.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0)
            })), !1) : void ie.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Qe.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0)
                }), ie._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return ie.event.remove(this, "._change"), !Qe.test(this.nodeName)
        }
    }), re.focusinBubbles || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ie.event.simulate(t, e.target, ie.event.fix(e), !0)
        };
        ie.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = ie._data(r, t);
                o || r.addEventListener(e, n, !0), ie._data(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = ie._data(r, t) - 1;
                o ? ie._data(r, t, o) : (r.removeEventListener(e, n, !0), ie._removeData(r, t))
            }
        }
    }), ie.fn.extend({
        on: function(e, t, n, r, o) {
            var i, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (i in e) this.on(i, t, n, e[i], o);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === o && (a = r, r = function(e) {
                return ie().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function() {
                ie.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                ie.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ie.event.trigger(e, t, n, !0)
        }
    });
    var $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Me = / jQuery\d+="(?:null|\d+)"/g,
        Le = new RegExp("<(?:" + $e + ")[\\s/>]", "i"),
        ze = /^\s+/,
        Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Re = /<([\w:]+)/,
        Fe = /<tbody/i,
        qe = /<|&#?\w+;/,
        He = /<(?:script|style|link)/i,
        Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        We = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: re.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ke = m(me),
        Ge = Ke.appendChild(me.createElement("div"));
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, ie.extend({
        clone: function(e, t, n) {
            var r, o, i, a, l, s = ie.contains(e.ownerDocument, e);
            if (re.html5Clone || ie.isXMLDoc(e) || !Le.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(i = Ge.firstChild)), !(re.noCloneEvent && re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (r = y(i), l = y(e), a = 0; null != (o = l[a]); ++a) r[a] && P(o, r[a]);
            if (t)
                if (n)
                    for (l = l || y(e), r = r || y(i), a = 0; null != (o = l[a]); a++) T(o, r[a]);
                else T(e, i);
            return r = y(i, "script"), r.length > 0 && x(r, !s && y(e, "script")), r = l = o = null, i
        },
        buildFragment: function(e, t, n, r) {
            for (var o, i, a, l, s, u, c, d = e.length, f = m(t), p = [], h = 0; h < d; h++)
                if (i = e[h], i || 0 === i)
                    if ("object" === ie.type(i)) ie.merge(p, i.nodeType ? [i] : i);
                    else if (qe.test(i)) {
                for (l = l || f.appendChild(t.createElement("div")), s = (Re.exec(i) || ["", ""])[1].toLowerCase(), c = Je[s] || Je._default, l.innerHTML = c[1] + i.replace(Be, "<$1></$2>") + c[2], o = c[0]; o--;) l = l.lastChild;
                if (!re.leadingWhitespace && ze.test(i) && p.push(t.createTextNode(ze.exec(i)[0])), !re.tbody)
                    for (i = "table" !== s || Fe.test(i) ? "<table>" !== c[1] || Fe.test(i) ? 0 : l : l.firstChild, o = i && i.childNodes.length; o--;) ie.nodeName(u = i.childNodes[o], "tbody") && !u.childNodes.length && i.removeChild(u);
                for (ie.merge(p, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = f.lastChild
            } else p.push(t.createTextNode(i));
            for (l && f.removeChild(l), re.appendChecked || ie.grep(y(p, "input"), v), h = 0; i = p[h++];)
                if ((!r || ie.inArray(i, r) === -1) && (a = ie.contains(i.ownerDocument, i), l = y(f.appendChild(i), "script"), a && x(l), n))
                    for (o = 0; i = l[o++];) We.test(i.type || "") && n.push(i);
            return l = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, o, i, a = 0, l = ie.expando, s = ie.cache, u = re.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)
                if ((t || ie.acceptData(n)) && (o = n[l], i = o && s[o])) {
                    if (i.events)
                        for (r in i.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, i.handle);
                    s[o] && (delete s[o], u ? delete n[l] : typeof n.removeAttribute !== Ce ? n.removeAttribute(l) : n[l] = null, V.push(o))
                }
        }
    }), ie.fn.extend({
        text: function(e) {
            return Ee(this, function(e) {
                return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ie.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || ie.cleanData(y(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && x(y(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ie.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ie.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ie.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ee(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Me, "") : void 0;
                if ("string" == typeof e && !He.test(e) && (re.htmlSerialize || !Le.test(e)) && (re.leadingWhitespace || !ze.test(e)) && !Je[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Be, "<$1></$2>");
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ie.cleanData(y(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = J.apply([], e);
            var n, r, o, i, a, l, s = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = ie.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !re.checkClone && Ue.test(f)) return this.each(function(n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (l = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (i = ie.map(y(l, "script"), b), o = i.length; s < u; s++) r = l, s !== d && (r = ie.clone(r, !0, !0), o && ie.merge(i, y(r, "script"))), t.call(this[s], r, s);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, ie.map(i, w), s = 0; s < o; s++) r = i[s], We.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Xe, "")));
                l = n = null
            }
            return this
        }
    }), ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ie.fn[e] = function(e) {
            for (var n, r = 0, o = [], i = ie(e), a = i.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), ie(i[r])[t](n), K.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Ze, et = {};
    ! function() {
        var e, t, n = me.createElement("div"),
            r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", re.opacity = /^0.5/.test(e.style.opacity), re.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, re.shrinkWrapBlocks = function() {
            var e, n, o, i;
            if (null == t) {
                if (e = me.getElementsByTagName("body")[0], !e) return;
                i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = me.createElement("div"), o = me.createElement("div"), e.appendChild(n).appendChild(o), t = !1, typeof o.style.zoom !== Ce && (o.style.cssText = r + ";width:1px;padding:1px;zoom:1", o.innerHTML = "<div></div>", o.firstChild.style.width = "5px", t = 3 !== o.offsetWidth), e.removeChild(n), e = n = o = null
            }
            return t
        }
    }();
    var tt, nt, rt = /^margin/,
        ot = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        it = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (tt = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, nt = function(e, t, n) {
            var r, o, i, a, l = e.style;
            return n = n || tt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), ot.test(a) && rt.test(t) && (r = l.width, o = l.minWidth, i = l.maxWidth, l.minWidth = l.maxWidth = l.width = a,
                a = n.width, l.width = r, l.minWidth = o, l.maxWidth = i)), void 0 === a ? a : a + ""
        }) : me.documentElement.currentStyle && (tt = function(e) {
            return e.currentStyle
        }, nt = function(e, t, n) {
            var r, o, i, a, l = e.style;
            return n = n || tt(e), a = n ? n[t] : void 0, null == a && l && l[t] && (a = l[t]), ot.test(a) && !it.test(t) && (r = l.left, o = e.runtimeStyle, i = o && o.left, i && (o.left = e.currentStyle.left), l.left = "fontSize" === t ? "1em" : a, a = l.pixelLeft + "px", l.left = r, i && (o.left = i)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, r = me.getElementsByTagName("body")[0];
                r && (t = me.createElement("div"), n = me.createElement("div"), t.style.cssText = u, r.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", ie.swap(r, null != r.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    o = 4 === n.offsetWidth
                }), i = !0, a = !1, l = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(n, null) || {}).top, i = "4px" === (e.getComputedStyle(n, null) || {
                    width: "4px"
                }).width), r.removeChild(t), n = r = null)
            }
            var n, r, o, i, a, l, s = me.createElement("div"),
                u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = s.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", re.opacity = /^0.5/.test(n.style.opacity), re.cssFloat = !!n.style.cssFloat, s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === s.style.backgroundClip, n = s = null, ie.extend(re, {
                reliableHiddenOffsets: function() {
                    if (null != r) return r;
                    var e, t, n, o = me.createElement("div"),
                        i = me.getElementsByTagName("body")[0];
                    if (i) return o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = me.createElement("div"), e.style.cssText = u, i.appendChild(e).appendChild(o), o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = o.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", r = n && 0 === t[0].offsetHeight, i.removeChild(e), o = i = null, r
                },
                boxSizing: function() {
                    return null == o && t(), o
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                pixelPosition: function() {
                    return null == a && t(), a
                },
                reliableMarginRight: function() {
                    var t, n, r, o;
                    if (null == l && e.getComputedStyle) {
                        if (t = me.getElementsByTagName("body")[0], !t) return;
                        n = me.createElement("div"), r = me.createElement("div"), n.style.cssText = u, t.appendChild(n).appendChild(r), o = r.appendChild(me.createElement("div")), o.style.cssText = r.style.cssText = c, o.style.marginRight = o.style.width = "0", r.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(n)
                    }
                    return l
                }
            })
        }(), ie.swap = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o
        };
    var at = /alpha\([^)]*\)/i,
        lt = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        ut = new RegExp("^(" + Se + ")(.*)$", "i"),
        ct = new RegExp("^([+-])=(" + Se + ")", "i"),
        dt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ft = {
            letterSpacing: 0,
            fontWeight: 400
        },
        pt = ["Webkit", "O", "Moz", "ms"];
    ie.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nt(e, "opacity");
                        return "" === n ? "1" : n
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
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": re.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, l = ie.camelCase(t),
                    s = e.style;
                if (t = ie.cssProps[l] || (ie.cssProps[l] = S(s, l)), a = ie.cssHooks[t] || ie.cssHooks[l], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : s[t];
                if (i = typeof n, "string" === i && (o = ct.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ie.css(e, t)), i = "number"), null != n && n === n && ("number" !== i || ie.cssNumber[l] || (n += "px"), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    s[t] = "", s[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, l = ie.camelCase(t);
            return t = ie.cssProps[l] || (ie.cssProps[l] = S(e.style, l)), a = ie.cssHooks[t] || ie.cssHooks[l], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = nt(e, t, r)), "normal" === i && t in ft && (i = ft[t]), "" === n || n ? (o = parseFloat(i), n === !0 || ie.isNumeric(o) ? o || 0 : i) : i
        }
    }), ie.each(["height", "width"], function(e, t) {
        ie.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return 0 === e.offsetWidth && st.test(ie.css(e, "display")) ? ie.swap(e, dt, function() {
                    return A(e, t, r)
                }) : A(e, t, r)
            },
            set: function(e, n, r) {
                var o = r && tt(e);
                return _(e, n, r ? E(e, t, r, re.boxSizing() && "border-box" === ie.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), re.opacity || (ie.cssHooks.opacity = {
        get: function(e, t) {
            return lt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                o = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                i = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(i.replace(at, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = at.test(i) ? i.replace(at, o) : i + " " + o)
        }
    }), ie.cssHooks.marginRight = k(re.reliableMarginRight, function(e, t) {
        if (t) return ie.swap(e, {
            display: "inline-block"
        }, nt, [e, "marginRight"])
    }), ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ie.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + Ye[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, rt.test(e) || (ie.cssHooks[e + t].set = _)
    }), ie.fn.extend({
        css: function(e, t) {
            return Ee(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (ie.isArray(t)) {
                    for (r = tt(e), o = t.length; a < o; a++) i[t[a]] = ie.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Y(this, !0)
        },
        hide: function() {
            return Y(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                _e(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }), ie.Tween = Q, Q.prototype = {
        constructor: Q,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (ie.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Q.propHooks[this.prop];
            return e && e.get ? e.get(this) : Q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Q.propHooks._default.set(this), this
        }
    }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ie.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ie.fx = Q.prototype.init, ie.fx.step = {};
    var ht, mt, yt = /^(?:toggle|show|hide)$/,
        vt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        gt = /queueHooks$/,
        bt = [N],
        wt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    o = vt.exec(t),
                    i = o && o[3] || (ie.cssNumber[e] ? "" : "px"),
                    a = (ie.cssNumber[e] || "px" !== i && +r) && vt.exec(ie.css(n.elem, e)),
                    l = 1,
                    s = 20;
                if (a && a[3] !== i) {
                    i = i || a[3], o = o || [], a = +r || 1;
                    do l = l || ".5", a /= l, ie.style(n.elem, e, a + i); while (l !== (l = n.cur() / r) && 1 !== l && --s)
                }
                return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    ie.Animation = ie.extend(M, {
            tweener: function(e, t) {
                ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, o = e.length; r < o; r++) n = e[r], wt[n] = wt[n] || [], wt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bt.unshift(e) : bt.push(e)
            }
        }), ie.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
            }, r
        }, ie.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(_e).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = ie.isEmptyObject(e),
                    i = ie.speed(t, n, r),
                    a = function() {
                        var t = M(this, ie.extend({}, e), i);
                        (o || ie._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = ie.timers,
                        a = ie._data(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && gt.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    !t && n || ie.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ie._data(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = ie.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function(e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, r, o)
            }
        }), ie.each({
            slideDown: D("show"),
            slideUp: D("hide"),
            slideToggle: D("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ie.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ie.timers = [], ie.fx.tick = function() {
            var e, t = ie.timers,
                n = 0;
            for (ht = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ie.fx.stop(), ht = void 0
        }, ie.fx.timer = function(e) {
            ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
        }, ie.fx.interval = 13, ie.fx.start = function() {
            mt || (mt = setInterval(ie.fx.tick, ie.fx.interval))
        }, ie.fx.stop = function() {
            clearInterval(mt), mt = null
        }, ie.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ie.fn.delay = function(e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, o = me.createElement("div");
            o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = o.getElementsByTagName("a")[0], n = me.createElement("select"), r = n.appendChild(me.createElement("option")), t = o.getElementsByTagName("input")[0], e.style.cssText = "top:1px", re.getSetAttribute = "t" !== o.className, re.style = /top/.test(e.getAttribute("style")), re.hrefNormalized = "/a" === e.getAttribute("href"), re.checkOn = !!t.value, re.optSelected = r.selected, re.enctype = !!me.createElement("form").enctype, n.disabled = !0, re.optDisabled = !r.disabled, t = me.createElement("input"), t.setAttribute("value", ""), re.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), re.radioValue = "t" === t.value, e = t = n = r = o = null
        }();
    var xt = /\r/g;
    ie.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0]; {
                if (arguments.length) return r = ie.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = r ? e.call(this, n, ie(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ie.isArray(o) && (o = ie.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = ie.valHooks[o.type] || ie.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
            }
        }
    }), ie.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || o < 0, a = i ? null : [], l = i ? o + 1 : r.length, s = o < 0 ? l : i ? o : 0; s < l; s++)
                        if (n = r[s], (n.selected || s === o) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), i) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = ie.makeArray(t), a = o.length; a--;)
                        if (r = o[a], ie.inArray(ie.valHooks.option.get(r), i) >= 0) try {
                            r.selected = n = !0
                        } catch (l) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function() {
        ie.valHooks[this] = {
            set: function(e, t) {
                if (ie.isArray(t)) return e.checked = ie.inArray(ie(e).val(), t) >= 0
            }
        }, re.checkOn || (ie.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tt, Pt, Ct = ie.expr.attrHandle,
        jt = /^(?:checked|selected)$/i,
        kt = re.getSetAttribute,
        St = re.input;
    ie.fn.extend({
        attr: function(e, t) {
            return Ee(this, ie.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ie.removeAttr(this, e)
            })
        }
    }), ie.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === Ce ? ie.prop(e, t, n) : (1 === i && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Pt : Tt)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = ie.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, o = 0,
                i = t && t.match(we);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? St && kt || !jt.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(kt ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!re.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Pt = {
        set: function(e, t, n) {
            return t === !1 ? ie.removeAttr(e, n) : St && kt || !jt.test(n) ? e.setAttribute(!kt && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ct[t] || ie.find.attr;
        Ct[t] = St && kt || !jt.test(t) ? function(e, t, r) {
            var o, i;
            return r || (i = Ct[t], Ct[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = i), o
        } : function(e, t, n) {
            if (!n) return e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), St && kt || (ie.attrHooks.value = {
        set: function(e, t, n) {
            return ie.nodeName(e, "input") ? void(e.defaultValue = t) : Tt && Tt.set(e, t, n)
        }
    }), kt || (Tt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, ie.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: Tt.set
    }, ie.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Tt.set(e, "" !== t && t, n)
        }
    }, ie.each(["width", "height"], function(e, t) {
        ie.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), re.style || (ie.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Yt = /^(?:input|select|textarea|button|object)$/i,
        _t = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function(e, t) {
            return Ee(this, ie.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ie.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ie.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, o, i, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return i = 1 !== a || !ie.isXMLDoc(e), i && (t = ie.propFix[t] || t, o = ie.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Yt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), re.hrefNormalized || ie.each(["href", "src"], function(e, t) {
        ie.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), re.optSelected || (ie.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ie.propFix[this.toLowerCase()] = this
    }), re.enctype || (ie.propFix.enctype = "encoding");
    var Et = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, l = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(we) || []; l < s; l++)
                    if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                        for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = ie.trim(r), n.className !== a && (n.className = a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, l = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(we) || []; l < s; l++)
                    if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                        for (i = 0; o = t[i++];)
                            for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                        a = e ? ie.trim(r) : "", n.className !== a && (n.className = a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function(n) {
                ie(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, o = ie(this), i = e.match(we) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else n !== Ce && "boolean" !== n || (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ie.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ie.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var At = ie.now(),
        Qt = /\?/,
        It = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ie.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            o = ie.trim(t + "");
        return o && !ie.trim(o.replace(It, function(e, t, o, i) {
            return n && t && (r = 0), 0 === r ? e : (n = o || t, r += !i - !o, "")
        })) ? Function("return " + o)() : ie.error("Invalid JSON: " + t)
    }, ie.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
    };
    var Dt, Ot, Nt = /#.*$/,
        $t = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        zt = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ft = {},
        qt = {},
        Ht = "*/".concat("*");
    try {
        Ot = location.href
    } catch (Ut) {
        Ot = me.createElement("a"), Ot.href = "", Ot = Ot.href
    }
    Dt = Rt.exec(Ot.toLowerCase()) || [], ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ot,
            type: "GET",
            isLocal: Lt.test(Dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
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
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ie.parseJSON,
                "text xml": ie.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? B(B(e, ie.ajaxSettings), t) : B(ie.ajaxSettings, e)
        },
        ajaxPrefilter: L(Ft),
        ajaxTransport: L(qt),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var o, c, v, g, w, T = t;
                2 !== b && (b = 2, l && clearTimeout(l), u = void 0, a = r || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, n && (g = R(d, x, n)), g = F(d, g, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ie.lastModified[i] = w), w = x.getResponseHeader("etag"), w && (ie.etag[i] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = g.state, c = g.data, v = g.error, o = !v)) : (v = T, !e && T || (T = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || T) + "", o ? h.resolveWith(f, [c, T, x]) : h.rejectWith(f, [x, T, v]), x.statusCode(y), y = void 0, s && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? c : v]), m.fireWith(f, [x, T]), s && (p.trigger("ajaxComplete", [x, d]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, o, i, a, l, s, u, c, d = ie.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
                h = ie.Deferred(),
                m = ie.Callbacks("once memory"),
                y = d.statusCode || {},
                v = {},
                g = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Mt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = g[n] = g[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) y[t] = [y[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Ot) + "").replace(Nt, "").replace(Bt, Dt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(we) || [""], null == d.crossDomain && (r = Rt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Dt[1] && r[2] === Dt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Dt[3] || ("http:" === Dt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), z(Ft, d, t, x), 2 === b) return x;
            s = d.global, s && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !zt.test(d.type), i = d.url, d.hasContent || (d.data && (i = d.url += (Qt.test(i) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = $t.test(i) ? i.replace($t, "$1_=" + At++) : i + (Qt.test(i) ? "&" : "?") + "_=" + At++)), d.ifModified && (ie.lastModified[i] && x.setRequestHeader("If-Modified-Since", ie.lastModified[i]), ie.etag[i] && x.setRequestHeader("If-None-Match", ie.etag[i])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](d[o]);
            if (u = z(qt, d, t, x)) {
                x.readyState = 1, s && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (T) {
                    if (!(b < 2)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ie.get(e, void 0, t, "script")
        }
    }), ie.each(["get", "post"], function(e, t) {
        ie[t] = function(e, n, r, o) {
            return ie.isFunction(n) && (o = o || r, r = n, n = void 0), ie.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            })
        }
    }), ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ie.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ie._evalUrl = function(e) {
        return ie.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ie.fn.extend({
        wrapAll: function(e) {
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ie.isFunction(e) ? this.each(function(t) {
                ie(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ie.isFunction(e);
            return this.each(function(n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ie.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !re.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"))
    }, ie.expr.filters.visible = function(e) {
        return !ie.expr.filters.hidden(e)
    };
    var Wt = /%20/g,
        Vt = /\[\]$/,
        Xt = /\r?\n/g,
        Jt = /^(?:submit|button|image|reset|file)$/i,
        Kt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) q(n, e[n], t, o);
        return r.join("&").replace(Wt, "+")
    }, ie.fn.extend({
        serialize: function() {
            return ie.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Kt.test(this.nodeName) && !Jt.test(e) && (this.checked || !Ae.test(e))
            }).map(function(e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Xt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Xt, "\r\n")
                }
            }).get()
        }
    }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && H() || U()
    } : H;
    var Gt = 0,
        Zt = {},
        en = ie.ajaxSettings.xhr();
    e.ActiveXObject && ie(e).on("unload", function() {
        for (var e in Zt) Zt[e](void 0, !0)
    }), re.cors = !!en && "withCredentials" in en, en = re.ajax = !!en, en && ie.ajaxTransport(function(e) {
        if (!e.crossDomain || re.cors) {
            var t;
            return {
                send: function(n, r) {
                    var o, i = e.xhr(),
                        a = ++Gt;
                    if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) i[o] = e.xhrFields[o];
                    e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && i.setRequestHeader(o, n[o] + "");
                    i.send(e.hasContent && e.data || null), t = function(n, o) {
                        var l, s, u;
                        if (t && (o || 4 === i.readyState))
                            if (delete Zt[a], t = void 0, i.onreadystatechange = ie.noop, o) 4 !== i.readyState && i.abort();
                            else {
                                u = {}, l = i.status, "string" == typeof i.responseText && (u.text = i.responseText);
                                try {
                                    s = i.statusText
                                } catch (c) {
                                    s = ""
                                }
                                l || !e.isLocal || e.crossDomain ? 1223 === l && (l = 204) : l = u.text ? 200 : 404
                            } u && r(l, s, u, i.getAllResponseHeaders())
                    }, e.async ? 4 === i.readyState ? setTimeout(t) : i.onreadystatechange = Zt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), ie.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ie.globalEval(e), e
            }
        }
    }), ie.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ie.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = me.head || ie("head")[0] || me.documentElement;
            return {
                send: function(r, o) {
                    t = me.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
        nn = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tn.pop() || ie.expando + "_" + At++;
            return this[e] = !0, e
        }
    }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, l = t.jsonp !== !1 && (nn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(t.data) && "data");
        if (l || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, l ? t[l] = t[l].replace(nn, "$1" + o) : t.jsonp !== !1 && (t.url += (Qt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || ie.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always(function() {
            e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, tn.push(o)), a && ie.isFunction(i) && i(a[0]), a = i = void 0
        }), "script"
    }), ie.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || me;
        var r = fe.exec(e),
            o = !n && [];
        return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, o), o && o.length && ie(o).remove(), ie.merge([], r.childNodes))
    };
    var rn = ie.fn.load;
    ie.fn.load = function(e, t, n) {
        if ("string" != typeof e && rn) return rn.apply(this, arguments);
        var r, o, i, a = this,
            l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && ie.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, ie.expr.filters.animated = function(e) {
        return ie.grep(ie.timers, function(t) {
            return e === t.elem
        }).length
    };
    var on = e.document.documentElement;
    ie.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, l, s, u, c = ie.css(e, "position"),
                d = ie(e),
                f = {};
            "static" === c && (e.style.position = "relative"), l = d.offset(), i = ie.css(e, "top"), s = ie.css(e, "left"), u = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [i, s]) > -1, u ? (r = d.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(s) || 0), ie.isFunction(t) && (t = t.call(e, n, l)), null != t.top && (f.top = t.top - l.top + a), null != t.left && (f.left = t.left - l.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, ie.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ie.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                i = o && o.ownerDocument;
            if (i) return t = i.documentElement, ie.contains(t, o) ? (typeof o.getBoundingClientRect !== Ce && (r = o.getBoundingClientRect()), n = W(i), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ie.css(r, "marginTop", !0),
                    left: t.left - n.left - ie.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || on; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || on
            })
        }
    }), ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        ie.fn[e] = function(r) {
            return Ee(this, function(e, r, o) {
                var i = W(e);
                return void 0 === o ? i ? t in i ? i[t] : i.document.documentElement[r] : e[r] : void(i ? i.scrollTo(n ? ie(i).scrollLeft() : o, n ? o : ie(i).scrollTop()) : e[r] = o)
            }, e, r, arguments.length, null);
        }
    }), ie.each(["top", "left"], function(e, t) {
        ie.cssHooks[t] = k(re.pixelPosition, function(e, n) {
            if (n) return n = nt(e, t), ot.test(n) ? ie(e).position()[t] + "px" : n
        })
    }), ie.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ie.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ie.fn[r] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || o === !0 ? "margin" : "border");
                return Ee(this, function(t, n, r) {
                    var o;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
                }, t, i ? r : void 0, i, null)
            }
        })
    }), ie.fn.size = function() {
        return this.length
    }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ie
    });
    var an = e.jQuery,
        ln = e.$;
    return ie.noConflict = function(t) {
        return e.$ === ie && (e.$ = ln), t && e.jQuery === ie && (e.jQuery = an), ie
    }, typeof t === Ce && (e.jQuery = e.$ = ie), ie
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";

    function t(t) {
        var n = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n))
    }

    function n(t) {
        var n = t.target,
            r = e(n);
        if (!r.is("[type=submit],[type=image]")) {
            var o = r.closest("[type=submit]");
            if (0 === o.length) return;
            n = o[0]
        }
        var i = this;
        if (i.clk = n, "image" == n.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var a = r.offset();
            i.clk_x = t.pageX - a.left, i.clk_y = t.pageY - a.top
        } else i.clk_x = t.pageX - n.offsetLeft, i.clk_y = t.pageY - n.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function r() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var o = {};
    o.fileapi = void 0 !== e("<input type='file'/>").get(0).files, o.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t) {
        function n(n) {
            var r, o, i = e.param(n, t.traditional).split("&"),
                a = i.length,
                l = [];
            for (r = 0; r < a; r++) i[r] = i[r].replace(/\+/g, " "), o = i[r].split("="), l.push([decodeURIComponent(o[0]), decodeURIComponent(o[1])]);
            return l
        }

        function a(r) {
            for (var o = new FormData, i = 0; i < r.length; i++) o.append(r[i].name, r[i].value);
            if (t.extraData) {
                var a = n(t.extraData);
                for (i = 0; i < a.length; i++) a[i] && o.append(a[i][0], a[i][1])
            }
            t.data = null;
            var l = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: s || "POST"
            });
            t.uploadProgress && (l.xhr = function() {
                var n = e.ajaxSettings.xhr();
                return n.upload && n.upload.addEventListener("progress", function(e) {
                    var n = 0,
                        r = e.loaded || e.position,
                        o = e.total;
                    e.lengthComputable && (n = Math.ceil(r / o * 100)), t.uploadProgress(e, r, o, n)
                }, !1), n
            }), l.data = null;
            var u = l.beforeSend;
            return l.beforeSend = function(e, n) {
                t.formData ? n.data = t.formData : n.data = o, u && u.call(this, e, n)
            }, e.ajax(l)
        }

        function l(n) {
            function o(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (n) {
                    r("cannot get iframe.contentWindow document: " + n)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (n) {
                    r("cannot get iframe.contentDocument: " + n), t = e.document
                }
                return t
            }

            function a() {
                function t() {
                    try {
                        var e = o(v).readyState;
                        r("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (n) {
                        r("Server abort: ", n, " (", n.name, ")"), l(k), T && clearTimeout(T), T = void 0
                    }
                }
                var n = d.attr2("target"),
                    i = d.attr2("action"),
                    a = "multipart/form-data",
                    u = d.attr("enctype") || d.attr("encoding") || a;
                P.setAttribute("target", h), s && !/post/i.test(s) || P.setAttribute("method", "POST"), i != f.url && P.setAttribute("action", f.url), f.skipEncodingOverride || s && !/post/i.test(s) || d.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), f.timeout && (T = setTimeout(function() {
                    x = !0, l(j)
                }, f.timeout));
                var c = [];
                try {
                    if (f.extraData)
                        for (var p in f.extraData) f.extraData.hasOwnProperty(p) && (e.isPlainObject(f.extraData[p]) && f.extraData[p].hasOwnProperty("name") && f.extraData[p].hasOwnProperty("value") ? c.push(e('<input type="hidden" name="' + f.extraData[p].name + '">').val(f.extraData[p].value).appendTo(P)[0]) : c.push(e('<input type="hidden" name="' + p + '">').val(f.extraData[p]).appendTo(P)[0]));
                    f.iframeTarget || y.appendTo("body"), v.attachEvent ? v.attachEvent("onload", l) : v.addEventListener("load", l, !1), setTimeout(t, 15);
                    try {
                        P.submit()
                    } catch (m) {
                        var g = document.createElement("form").submit;
                        g.apply(P)
                    }
                } finally {
                    P.setAttribute("action", i), P.setAttribute("enctype", u), n ? P.setAttribute("target", n) : d.removeAttr("target"), e(c).remove()
                }
            }

            function l(t) {
                if (!g.aborted && !A) {
                    if (E = o(v), E || (r("cannot access response document"), t = k), t === j && g) return g.abort("timeout"), void C.reject(g, "timeout");
                    if (t == k && g) return g.abort("server abort"), void C.reject(g, "error", "server abort");
                    if (E && E.location.href != f.iframeSrc || x) {
                        v.detachEvent ? v.detachEvent("onload", l) : v.removeEventListener("load", l, !1);
                        var n, i = "success";
                        try {
                            if (x) throw "timeout";
                            var a = "xml" == f.dataType || E.XMLDocument || e.isXMLDoc(E);
                            if (r("isXml=" + a), !a && window.opera && (null === E.body || !E.body.innerHTML) && --Q) return r("requeing onLoad callback, DOM not available"), void setTimeout(l, 250);
                            var s = E.body ? E.body : E.documentElement;
                            g.responseText = s ? s.innerHTML : null, g.responseXML = E.XMLDocument ? E.XMLDocument : E, a && (f.dataType = "xml"), g.getResponseHeader = function(e) {
                                var t = {
                                    "content-type": f.dataType
                                };
                                return t[e.toLowerCase()]
                            }, s && (g.status = Number(s.getAttribute("status")) || g.status, g.statusText = s.getAttribute("statusText") || g.statusText);
                            var u = (f.dataType || "").toLowerCase(),
                                c = /(json|script|text)/.test(u);
                            if (c || f.textarea) {
                                var d = E.getElementsByTagName("textarea")[0];
                                if (d) g.responseText = d.value, g.status = Number(d.getAttribute("status")) || g.status, g.statusText = d.getAttribute("statusText") || g.statusText;
                                else if (c) {
                                    var h = E.getElementsByTagName("pre")[0],
                                        m = E.getElementsByTagName("body")[0];
                                    h ? g.responseText = h.textContent ? h.textContent : h.innerText : m && (g.responseText = m.textContent ? m.textContent : m.innerText)
                                }
                            } else "xml" == u && !g.responseXML && g.responseText && (g.responseXML = I(g.responseText));
                            try {
                                _ = O(g, u, f)
                            } catch (b) {
                                i = "parsererror", g.error = n = b || i
                            }
                        } catch (b) {
                            r("error caught: ", b), i = "error", g.error = n = b || i
                        }
                        g.aborted && (r("upload aborted"), i = null), g.status && (i = g.status >= 200 && g.status < 300 || 304 === g.status ? "success" : "error"), "success" === i ? (f.success && f.success.call(f.context, _, "success", g), C.resolve(g.responseText, "success", g), p && e.event.trigger("ajaxSuccess", [g, f])) : i && (void 0 === n && (n = g.statusText), f.error && f.error.call(f.context, g, i, n), C.reject(g, "error", n), p && e.event.trigger("ajaxError", [g, f, n])), p && e.event.trigger("ajaxComplete", [g, f]), p && !--e.active && e.event.trigger("ajaxStop"), f.complete && f.complete.call(f.context, g, i), A = !0, f.timeout && clearTimeout(T), setTimeout(function() {
                            f.iframeTarget ? y.attr("src", f.iframeSrc) : y.remove(), g.responseXML = null
                        }, 100)
                    }
                }
            }
            var u, c, f, p, h, y, v, g, b, w, x, T, P = d[0],
                C = e.Deferred();
            if (C.abort = function(e) {
                    g.abort(e)
                }, n)
                for (c = 0; c < m.length; c++) u = e(m[c]), i ? u.prop("disabled", !1) : u.removeAttr("disabled");
            if (f = e.extend(!0, {}, e.ajaxSettings, t), f.context = f.context || f, h = "jqFormIO" + (new Date).getTime(), f.iframeTarget ? (y = e(f.iframeTarget), w = y.attr2("name"), w ? h = w : y.attr2("name", h)) : (y = e('<iframe name="' + h + '" src="' + f.iframeSrc + '" />'), y.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), v = y[0], g = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var n = "timeout" === t ? "timeout" : "aborted";
                        r("aborting upload... " + n), this.aborted = 1;
                        try {
                            v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
                        } catch (o) {}
                        y.attr("src", f.iframeSrc), g.error = n, f.error && f.error.call(f.context, g, n, t), p && e.event.trigger("ajaxError", [g, f, n]), f.complete && f.complete.call(f.context, g, n)
                    }
                }, p = f.global, p && 0 === e.active++ && e.event.trigger("ajaxStart"), p && e.event.trigger("ajaxSend", [g, f]), f.beforeSend && f.beforeSend.call(f.context, g, f) === !1) return f.global && e.active--, C.reject(), C;
            if (g.aborted) return C.reject(), C;
            b = P.clk, b && (w = b.name, w && !b.disabled && (f.extraData = f.extraData || {}, f.extraData[w] = b.value, "image" == b.type && (f.extraData[w + ".x"] = P.clk_x, f.extraData[w + ".y"] = P.clk_y)));
            var j = 1,
                k = 2,
                S = e("meta[name=csrf-token]").attr("content"),
                Y = e("meta[name=csrf-param]").attr("content");
            Y && S && (f.extraData = f.extraData || {}, f.extraData[Y] = S), f.forceSync ? a() : setTimeout(a, 10);
            var _, E, A, Q = 50,
                I = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                D = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                O = function(t, n, r) {
                    var o = t.getResponseHeader("content-type") || "",
                        i = "xml" === n || !n && o.indexOf("xml") >= 0,
                        a = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === a.documentElement.nodeName && e.error && e.error("parsererror"), r && r.dataFilter && (a = r.dataFilter(a, n)), "string" == typeof a && ("json" === n || !n && o.indexOf("json") >= 0 ? a = D(a) : ("script" === n || !n && o.indexOf("javascript") >= 0) && e.globalEval(a)), a
                };
            return C
        }
        if (!this.length) return r("ajaxSubmit: skipping submit process - no element selected"), this;
        var s, u, c, d = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), s = t.type || this.attr2("method"), u = t.url || this.attr2("action"), c = "string" == typeof u ? e.trim(u) : "", c = c || window.location.href || "", c && (c = (c.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: c,
            success: e.ajaxSettings.success,
            type: s || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var f = {};
        if (this.trigger("form-pre-serialize", [this, t, f]), f.veto) return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return r("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var p = t.traditional;
        void 0 === p && (p = e.ajaxSettings.traditional);
        var h, m = [],
            y = this.formToArray(t.semantic, m);
        if (t.data && (t.extraData = t.data, h = e.param(t.data, p)), t.beforeSubmit && t.beforeSubmit(y, this, t) === !1) return r("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [y, this, t, f]), f.veto) return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var v = e.param(y, p);
        h && (v = v ? v + "&" + h : h), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + v, t.data = null) : t.data = v;
        var g = [];
        if (t.resetForm && g.push(function() {
                d.resetForm()
            }), t.clearForm && g.push(function() {
                d.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var b = t.success || function() {};
            g.push(function(n) {
                var r = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[r](n).each(b, arguments)
            })
        } else t.success && g.push(t.success);
        if (t.success = function(e, n, r) {
                for (var o = t.context || this, i = 0, a = g.length; i < a; i++) g[i].apply(o, [e, n, r || d, d])
            }, t.error) {
            var w = t.error;
            t.error = function(e, n, r) {
                var o = t.context || this;
                w.apply(o, [e, n, r, d])
            }
        }
        if (t.complete) {
            var x = t.complete;
            t.complete = function(e, n) {
                var r = t.context || this;
                x.apply(r, [e, n, d])
            }
        }
        var T = e("input[type=file]:enabled", this).filter(function() {
                return "" !== e(this).val()
            }),
            P = T.length > 0,
            C = "multipart/form-data",
            j = d.attr("enctype") == C || d.attr("encoding") == C,
            k = o.fileapi && o.formdata;
        r("fileAPI :" + k);
        var S, Y = (P || j) && !k;
        t.iframe !== !1 && (t.iframe || Y) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            S = l(y)
        }) : S = l(y) : S = (P || j) && k ? a(y) : e.ajax(t), d.removeData("jqxhr").data("jqxhr", S);
        for (var _ = 0; _ < m.length; _++) m[_] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(o) {
        if (o = o || {}, o.delegation = o.delegation && e.isFunction(e.fn.on), !o.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (r("DOM not ready, queuing ajaxForm"), e(function() {
                e(i.s, i.c).ajaxForm(o)
            }), this) : (r("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return o.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, o, t).on("click.form-plugin", this.selector, o, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", o, t).bind("click.form-plugin", o, n)
    }, e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, n) {
        var r = [];
        if (0 === this.length) return r;
        var i, a = this[0],
            l = this.attr("id"),
            s = t ? a.getElementsByTagName("*") : a.elements;
        if (s && !/MSIE [678]/.test(navigator.userAgent) && (s = e(s).get()), l && (i = e(":input[form=" + l + "]").get(), i.length && (s = (s || []).concat(i))), !s || !s.length) return r;
        var u, c, d, f, p, h, m;
        for (u = 0, h = s.length; u < h; u++)
            if (p = s[u], d = p.name, d && !p.disabled)
                if (t && a.clk && "image" == p.type) a.clk == p && (r.push({
                    name: d,
                    value: e(p).val(),
                    type: p.type
                }), r.push({
                    name: d + ".x",
                    value: a.clk_x
                }, {
                    name: d + ".y",
                    value: a.clk_y
                }));
                else if (f = e.fieldValue(p, !0), f && f.constructor == Array)
            for (n && n.push(p), c = 0, m = f.length; c < m; c++) r.push({
                name: d,
                value: f[c]
            });
        else if (o.fileapi && "file" == p.type) {
            n && n.push(p);
            var y = p.files;
            if (y.length)
                for (c = 0; c < y.length; c++) r.push({
                    name: d,
                    value: y[c],
                    type: p.type
                });
            else r.push({
                name: d,
                value: "",
                type: p.type
            })
        } else null !== f && "undefined" != typeof f && (n && n.push(p), r.push({
            name: d,
            value: f,
            type: p.type,
            required: p.required
        }));
        if (!t && a.clk) {
            var v = e(a.clk),
                g = v[0];
            d = g.name, d && !g.disabled && "image" == g.type && (r.push({
                name: d,
                value: v.val()
            }), r.push({
                name: d + ".x",
                value: a.clk_x
            }, {
                name: d + ".y",
                value: a.clk_y
            }))
        }
        return r
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var n = [];
        return this.each(function() {
            var r = this.name;
            if (r) {
                var o = e.fieldValue(this, t);
                if (o && o.constructor == Array)
                    for (var i = 0, a = o.length; i < a; i++) n.push({
                        name: r,
                        value: o[i]
                    });
                else null !== o && "undefined" != typeof o && n.push({
                    name: this.name,
                    value: o
                })
            }
        }), e.param(n)
    }, e.fn.fieldValue = function(t) {
        for (var n = [], r = 0, o = this.length; r < o; r++) {
            var i = this[r],
                a = e.fieldValue(i, t);
            null === a || "undefined" == typeof a || a.constructor == Array && !a.length || (a.constructor == Array ? e.merge(n, a) : n.push(a))
        }
        return n
    }, e.fieldValue = function(t, n) {
        var r = t.name,
            o = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === n && (n = !0), n && (!r || t.disabled || "reset" == o || "button" == o || ("checkbox" == o || "radio" == o) && !t.checked || ("submit" == o || "image" == o) && t.form && t.form.clk != t || "select" == i && t.selectedIndex == -1)) return null;
        if ("select" == i) {
            var a = t.selectedIndex;
            if (a < 0) return null;
            for (var l = [], s = t.options, u = "select-one" == o, c = u ? a + 1 : s.length, d = u ? a : 0; d < c; d++) {
                var f = s[d];
                if (f.selected) {
                    var p = f.value;
                    if (p || (p = f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value), u) return p;
                    l.push(p)
                }
            }
            return l
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var r = this.type,
                o = this.tagName.toLowerCase();
            n.test(r) || "textarea" == o ? this.value = "" : "checkbox" == r || "radio" == r ? this.checked = !1 : "select" == o ? this.selectedIndex = -1 : "file" == r ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(r) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var n = this.type;
            if ("checkbox" == n || "radio" == n) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var r = e(this).parent("select");
                t && r[0] && "select-one" == r[0].type && r.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, r, o) {
            return jQuery.easing[jQuery.easing.def](e, t, n, r, o)
        },
        easeInQuad: function(e, t, n, r, o) {
            return r * (t /= o) * t + n
        },
        easeOutQuad: function(e, t, n, r, o) {
            return -r * (t /= o) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, r, o) {
            return r * (t /= o) * t * t + n
        },
        easeOutCubic: function(e, t, n, r, o) {
            return r * ((t = t / o - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, r, o) {
            return r * (t /= o) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, r, o) {
            return -r * ((t = t / o - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, r, o) {
            return r * (t /= o) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, r, o) {
            return r * ((t = t / o - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, r, o) {
            return -r * Math.cos(t / o * (Math.PI / 2)) + r + n
        },
        easeOutSine: function(e, t, n, r, o) {
            return r * Math.sin(t / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, r, o) {
            return -r / 2 * (Math.cos(Math.PI * t / o) - 1) + n
        },
        easeInExpo: function(e, t, n, r, o) {
            return 0 == t ? n : r * Math.pow(2, 10 * (t / o - 1)) + n
        },
        easeOutExpo: function(e, t, n, r, o) {
            return t == o ? n + r : r * (-Math.pow(2, -10 * t / o) + 1) + n
        },
        easeInOutExpo: function(e, t, n, r, o) {
            return 0 == t ? n : t == o ? n + r : (t /= o / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, r, o) {
            return -r * (Math.sqrt(1 - (t /= o) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, r, o) {
            return r * Math.sqrt(1 - (t = t / o - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, r, o) {
            return (t /= o / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, r, o) {
            var i = 1.70158,
                a = 0,
                l = r;
            if (0 == t) return n;
            if (1 == (t /= o)) return n + r;
            if (a || (a = .3 * o), l < Math.abs(r)) {
                l = r;
                var i = a / 4
            } else var i = a / (2 * Math.PI) * Math.asin(r / l);
            return -(l * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - i) * (2 * Math.PI) / a)) + n
        },
        easeOutElastic: function(e, t, n, r, o) {
            var i = 1.70158,
                a = 0,
                l = r;
            if (0 == t) return n;
            if (1 == (t /= o)) return n + r;
            if (a || (a = .3 * o), l < Math.abs(r)) {
                l = r;
                var i = a / 4
            } else var i = a / (2 * Math.PI) * Math.asin(r / l);
            return l * Math.pow(2, -10 * t) * Math.sin((t * o - i) * (2 * Math.PI) / a) + r + n
        },
        easeInOutElastic: function(e, t, n, r, o) {
            var i = 1.70158,
                a = 0,
                l = r;
            if (0 == t) return n;
            if (2 == (t /= o / 2)) return n + r;
            if (a || (a = o * (.3 * 1.5)), l < Math.abs(r)) {
                l = r;
                var i = a / 4
            } else var i = a / (2 * Math.PI) * Math.asin(r / l);
            return t < 1 ? -.5 * (l * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - i) * (2 * Math.PI) / a)) + n : l * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - i) * (2 * Math.PI) / a) * .5 + r + n
        },
        easeInBack: function(e, t, n, r, o, i) {
            return void 0 == i && (i = 1.70158), r * (t /= o) * t * ((i + 1) * t - i) + n
        },
        easeOutBack: function(e, t, n, r, o, i) {
            return void 0 == i && (i = 1.70158), r * ((t = t / o - 1) * t * ((i + 1) * t + i) + 1) + n
        },
        easeInOutBack: function(e, t, n, r, o, i) {
            return void 0 == i && (i = 1.70158), (t /= o / 2) < 1 ? r / 2 * (t * t * (((i *= 1.525) + 1) * t - i)) + n : r / 2 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2) + n
        },
        easeInBounce: function(e, t, n, r, o) {
            return r - jQuery.easing.easeOutBounce(e, o - t, 0, r, o) + n
        },
        easeOutBounce: function(e, t, n, r, o) {
            return (t /= o) < 1 / 2.75 ? r * (7.5625 * t * t) + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, r, o) {
            return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, r, o) + .5 * r + n
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(e) {
            return l.raw ? e : encodeURIComponent(e)
        }

        function n(e) {
            return l.raw ? e : decodeURIComponent(e)
        }

        function r(e) {
            return t(l.json ? JSON.stringify(e) : String(e))
        }

        function o(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                e = decodeURIComponent(e.replace(a, " "))
            } catch (t) {
                return
            }
            try {
                return l.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function i(t, n) {
            var r = l.raw ? t : o(t);
            return e.isFunction(n) ? n(r) : r
        }
        var a = /\+/g,
            l = e.cookie = function(o, a, s) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if (s = e.extend({}, l.defaults, s), "number" == typeof s.expires) {
                        var u = s.expires,
                            c = s.expires = new Date;
                        c.setDate(c.getDate() + u)
                    }
                    return document.cookie = [t(o), "=", r(a), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
                }
                for (var d = o ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], p = 0, h = f.length; p < h; p++) {
                    var m = f[p].split("="),
                        y = n(m.shift()),
                        v = m.join("=");
                    if (o && o === y) {
                        d = i(v, a);
                        break
                    }
                    o || void 0 === (v = i(v)) || (d[y] = v)
                }
                return d
            };
        l.defaults = {}, e.removeCookie = function(t, n) {
            return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
                expires: -1
            })), !0)
        }
    }),
    function(e, t, n, r) {
        function o(e, t) {
            return e[t] === r ? b[t] : e[t]
        }

        function i() {
            var e = t.pageYOffset;
            return e === r ? v.scrollTop : e
        }

        function a(e, t) {
            var n = b["on" + e];
            n && (T(n) ? n.call(t[0]) : (n.addClass && t.addClass(n.addClass), n.removeClass && t.removeClass(n.removeClass))), t.trigger("lazy" + e, [t]), c()
        }

        function l(t) {
            a(t.type, e(this).off(m, l))
        }

        function s(n) {
            if (k.length) {
                n = n || b.forceLoad, S = 1 / 0;
                var r, o, s = i(),
                    u = t.innerHeight || v.clientHeight,
                    c = t.innerWidth || v.clientWidth;
                for (r = 0, o = k.length; r < o; r++) {
                    var d, f = k[r],
                        h = f[0],
                        y = f[p],
                        g = !1,
                        w = n;
                    if (j(v, h)) {
                        if (n || !y.visibleOnly || h.offsetWidth || h.offsetHeight) {
                            if (!w) {
                                var x = h.getBoundingClientRect(),
                                    P = y.edgeX,
                                    C = y.edgeY;
                                d = x.top + s - C - u, w = d <= s && x.bottom > -C && x.left <= c + P && x.right > -P
                            }
                            if (w) {
                                a("show", f);
                                var Y = y.srcAttr,
                                    _ = T(Y) ? Y(f) : h.getAttribute(Y);
                                _ && (f.on(m, l), h.src = _), g = !0
                            } else d < S && (S = d)
                        }
                    } else g = !0;
                    g && (k.splice(r--, 1), o--)
                }
                o || a("complete", e(v))
            }
        }

        function u() {
            Y > 1 ? (Y = 1, s(), setTimeout(u, b.throttle)) : Y = 0
        }

        function c(e) {
            k.length && (e && "scroll" === e.type && e.currentTarget === t && S >= i() || (Y || setTimeout(u, 0), Y = 2))
        }

        function d() {
            x.lazyLoadXT()
        }

        function f() {
            s(!0)
        }
        var p = "lazyLoadXT",
            h = "lazied",
            m = "load error",
            y = "lazy-hidden",
            v = n.documentElement || n.body,
            g = t.onscroll === r || !!t.operamini || !v.getBoundingClientRect,
            b = {
                autoInit: !0,
                selector: "img[data-src]",
                blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                throttle: 99,
                forceLoad: g,
                loadEvent: "pageshow",
                updateEvent: "load orientationchange resize scroll touchmove focus",
                forceEvent: "",
                oninit: {
                    removeClass: "lazy"
                },
                onshow: {
                    addClass: y
                },
                onload: {
                    removeClass: y,
                    addClass: "lazy-loaded"
                },
                onerror: {
                    removeClass: y
                },
                checkDuplicates: !0
            },
            w = {
                srcAttr: "data-src",
                edgeX: 0,
                edgeY: 0,
                visibleOnly: !0
            },
            x = e(t),
            T = e.isFunction,
            P = e.extend,
            C = e.data || function(t, n) {
                return e(t).data(n)
            },
            j = e.contains || function(e, t) {
                for (; t = t.parentNode;)
                    if (t === e) return !0;
                return !1
            },
            k = [],
            S = 0,
            Y = 0;
        e[p] = P(b, w, e[p]), e.fn[p] = function(n) {
            n = n || {};
            var r, i = o(n, "blankImage"),
                l = o(n, "checkDuplicates"),
                s = o(n, "scrollContainer"),
                u = {};
            e(s).on("scroll", c);
            for (r in w) u[r] = o(n, r);
            return this.each(function(r, o) {
                if (o === t) e(b.selector).lazyLoadXT(n);
                else {
                    if (l && C(o, h)) return;
                    var s = e(o).data(h, 1);
                    i && "IMG" === o.tagName && !o.src && (o.src = i), s[p] = P({}, u), a("init", s), k.push(s)
                }
            })
        }, e(n).ready(function() {
            a("start", x), x.on(b.loadEvent, d).on(b.updateEvent, c).on(b.forceEvent, f), e(n).on(b.updateEvent, c), b.autoInit && d()
        })
    }(window.jQuery || window.Zepto || window.$, window, document),
    function(e) {
        var t = function(e) {
                return e.split("").reverse().join("")
            },
            n = {
                numberStep: function(t, n) {
                    var r = Math.floor(t),
                        o = e(n.elem);
                    o.text(r)
                }
            },
            r = function(e) {
                var t = e.elem;
                if (t.nodeType && t.parentNode) {
                    var r = t._animateNumberSetter;
                    r || (r = n.numberStep), r(e.now, e)
                }
            };
        e.Tween && e.Tween.propHooks ? e.Tween.propHooks.number = {
            set: r
        } : e.fx.step.number = r;
        var o = function(e, t) {
                for (var n, r, o, i = e.split("").reverse(), a = [], l = 0, s = Math.ceil(e.length / t); l < s; l++) {
                    for (n = "", o = 0; o < t && (r = l * t + o, r !== e.length); o++) n += i[r];
                    a.push(n)
                }
                return a
            },
            i = function(e) {
                var n = e.length - 1,
                    r = t(e[n]);
                return e[n] = t(parseInt(r, 10).toString()), e
            };
        e.animateNumber = {
            numberStepFactories: {
                append: function(t) {
                    return function(n, r) {
                        var o = Math.floor(n),
                            i = e(r.elem);
                        i.prop("number", n).text(o + t)
                    }
                },
                separator: function(n, r, a) {
                    return n = n || " ", r = r || 3, a = a || "",
                        function(l, s) {
                            var u = Math.floor(l),
                                c = u.toString(),
                                d = e(s.elem);
                            if (c.length > r) {
                                var f = o(c, r);
                                c = i(f).join(n), c = t(c)
                            }
                            d.prop("number", l).text(c + a)
                        }
                }
            }
        }, e.fn.animateNumber = function() {
            for (var t = arguments[0], r = e.extend({}, n, t), o = e(this), i = [r], a = 1, l = arguments.length; a < l; a++) i.push(arguments[a]);
            if (t.numberStep) {
                var s = this.each(function() {
                        this._animateNumberSetter = t.numberStep
                    }),
                    u = r.complete;
                r.complete = function() {
                    s.each(function() {
                        delete this._animateNumberSetter
                    }), u && u.apply(this, arguments)
                }
            }
            return o.animate.apply(o, i)
        }
    }(jQuery),
    function() {
        function e(e, t, n) {
            for (var r = (n || 0) - 1, o = e ? e.length : 0; ++r < o;)
                if (e[r] === t) return r;
            return -1
        }

        function t(t, n) {
            var r = typeof n;
            if (t = t.cache, "boolean" == r || null == n) return t[n] ? 0 : -1;
            "number" != r && "string" != r && (r = "object");
            var o = "number" == r ? n : v + n;
            return t = (t = t[r]) && t[o], "object" == r ? t && e(t, n) > -1 ? 0 : -1 : t ? 0 : -1
        }

        function n(e) {
            var t = this.cache,
                n = typeof e;
            if ("boolean" == n || null == e) t[e] = !0;
            else {
                "number" != n && "string" != n && (n = "object");
                var r = "number" == n ? e : v + e,
                    o = t[n] || (t[n] = {});
                "object" == n ? (o[r] || (o[r] = [])).push(e) : o[r] = !0
            }
        }

        function r(e) {
            return e.charCodeAt(0)
        }

        function o(e, t) {
            for (var n = e.criteria, r = t.criteria, o = -1, i = n.length; ++o < i;) {
                var a = n[o],
                    l = r[o];
                if (a !== l) {
                    if (a > l || "undefined" == typeof a) return 1;
                    if (a < l || "undefined" == typeof l) return -1
                }
            }
            return e.index - t.index
        }

        function i(e) {
            var t = -1,
                r = e.length,
                o = e[0],
                i = e[r / 2 | 0],
                a = e[r - 1];
            if (o && "object" == typeof o && i && "object" == typeof i && a && "object" == typeof a) return !1;
            var l = s();
            l["false"] = l["null"] = l["true"] = l.undefined = !1;
            var u = s();
            for (u.array = e, u.cache = l, u.push = n; ++t < r;) u.push(e[t]);
            return u
        }

        function a(e) {
            return "\\" + W[e]
        }

        function l() {
            return h.pop() || []
        }

        function s() {
            return m.pop() || {
                array: null,
                cache: null,
                criteria: null,
                "false": !1,
                index: 0,
                "null": !1,
                number: null,
                object: null,
                push: null,
                string: null,
                "true": !1,
                undefined: !1,
                value: null
            }
        }

        function u(e) {
            e.length = 0, h.length < b && h.push(e)
        }

        function c(e) {
            var t = e.cache;
            t && c(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, m.length < b && m.push(e)
        }

        function d(e, t, n) {
            t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
            for (var r = -1, o = n - t || 0, i = Array(o < 0 ? 0 : o); ++r < o;) i[r] = e[t + r];
            return i
        }

        function f(n) {
            function h(e) {
                return e && "object" == typeof e && !Gn(e) && Dn.call(e, "__wrapped__") ? e : new m(e)
            }

            function m(e, t) {
                this.__chain__ = !!t, this.__wrapped__ = e
            }

            function b(e) {
                function t() {
                    if (r) {
                        var e = d(r);
                        On.apply(e, arguments)
                    }
                    if (this instanceof t) {
                        var i = X(n.prototype),
                            a = n.apply(i, e || arguments);
                        return Ee(a) ? a : i
                    }
                    return n.apply(o, e || arguments)
                }
                var n = e[0],
                    r = e[2],
                    o = e[4];
                return Kn(t, e), t
            }

            function W(e, t, n, r, o) {
                if (n) {
                    var i = n(e);
                    if ("undefined" != typeof i) return i
                }
                var a = Ee(e);
                if (!a) return e;
                var s = Sn.call(e);
                if (!F[s]) return e;
                var c = Xn[s];
                switch (s) {
                    case N:
                    case $:
                        return new c((+e));
                    case L:
                    case R:
                        return new c(e);
                    case B:
                        return i = c(e.source, j.exec(e)), i.lastIndex = e.lastIndex, i
                }
                var f = Gn(e);
                if (t) {
                    var p = !r;
                    r || (r = l()), o || (o = l());
                    for (var h = r.length; h--;)
                        if (r[h] == e) return o[h];
                    i = f ? c(e.length) : {}
                } else i = f ? d(e) : ir({}, e);
                return f && (Dn.call(e, "index") && (i.index = e.index), Dn.call(e, "input") && (i.input = e.input)), t ? (r.push(e), o.push(i), (f ? Je : sr)(e, function(e, a) {
                    i[a] = W(e, t, n, r, o)
                }), p && (u(r), u(o)), i) : i
            }

            function X(e, t) {
                return Ee(e) ? zn(e) : {}
            }

            function J(e, t, n) {
                if ("function" != typeof e) return Kt;
                if ("undefined" == typeof t || !("prototype" in e)) return e;
                var r = e.__bindData__;
                if ("undefined" == typeof r && (Jn.funcNames && (r = !e.name), r = r || !Jn.funcDecomp, !r)) {
                    var o = Qn.call(e);
                    Jn.funcNames || (r = !k.test(o)), r || (r = E.test(o), Kn(e, r))
                }
                if (r === !1 || r !== !0 && 1 & r[1]) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function(n, r, o) {
                            return e.call(t, n, r, o)
                        };
                    case 4:
                        return function(n, r, o, i) {
                            return e.call(t, n, r, o, i)
                        }
                }
                return Dt(e, t)
            }

            function K(e) {
                function t() {
                    var e = s ? a : this;
                    if (o) {
                        var h = d(o);
                        On.apply(h, arguments)
                    }
                    if ((i || c) && (h || (h = d(arguments)), i && On.apply(h, i), c && h.length < l)) return r |= 16, K([n, f ? r : r & -4, h, null, a, l]);
                    if (h || (h = arguments), u && (n = e[p]), this instanceof t) {
                        e = X(n.prototype);
                        var m = n.apply(e, h);
                        return Ee(m) ? m : e
                    }
                    return n.apply(e, h)
                }
                var n = e[0],
                    r = e[1],
                    o = e[2],
                    i = e[3],
                    a = e[4],
                    l = e[5],
                    s = 1 & r,
                    u = 2 & r,
                    c = 4 & r,
                    f = 8 & r,
                    p = n;
                return Kn(t, e), t
            }

            function G(n, r) {
                var o = -1,
                    a = se(),
                    l = n ? n.length : 0,
                    s = l >= g && a === e,
                    u = [];
                if (s) {
                    var d = i(r);
                    d ? (a = t, r = d) : s = !1
                }
                for (; ++o < l;) {
                    var f = n[o];
                    a(r, f) < 0 && u.push(f)
                }
                return s && c(r), u
            }

            function ee(e, t, n, r) {
                for (var o = (r || 0) - 1, i = e ? e.length : 0, a = []; ++o < i;) {
                    var l = e[o];
                    if (l && "object" == typeof l && "number" == typeof l.length && (Gn(l) || fe(l))) {
                        t || (l = ee(l, t, n));
                        var s = -1,
                            u = l.length,
                            c = a.length;
                        for (a.length += u; ++s < u;) a[c++] = l[s]
                    } else n || a.push(l)
                }
                return a
            }

            function te(e, t, n, r, o, i) {
                if (n) {
                    var a = n(e, t);
                    if ("undefined" != typeof a) return !!a
                }
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                var s = typeof e,
                    c = typeof t;
                if (!(e !== e || e && U[s] || t && U[c])) return !1;
                if (null == e || null == t) return e === t;
                var d = Sn.call(e),
                    f = Sn.call(t);
                if (d == D && (d = z), f == D && (f = z), d != f) return !1;
                switch (d) {
                    case N:
                    case $:
                        return +e == +t;
                    case L:
                        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                    case B:
                    case R:
                        return e == Tn(t)
                }
                var p = d == O;
                if (!p) {
                    var h = Dn.call(e, "__wrapped__"),
                        m = Dn.call(t, "__wrapped__");
                    if (h || m) return te(h ? e.__wrapped__ : e, m ? t.__wrapped__ : t, n, r, o, i);
                    if (d != z) return !1;
                    var y = e.constructor,
                        v = t.constructor;
                    if (y != v && !(_e(y) && y instanceof y && _e(v) && v instanceof v) && "constructor" in e && "constructor" in t) return !1
                }
                var g = !o;
                o || (o = l()), i || (i = l());
                for (var b = o.length; b--;)
                    if (o[b] == e) return i[b] == t;
                var w = 0;
                if (a = !0, o.push(e), i.push(t), p) {
                    if (b = e.length, w = t.length, a = w == b, a || r)
                        for (; w--;) {
                            var x = b,
                                T = t[w];
                            if (r)
                                for (; x-- && !(a = te(e[x], T, n, r, o, i)););
                            else if (!(a = te(e[w], T, n, r, o, i))) break
                        }
                } else lr(t, function(t, l, s) {
                    if (Dn.call(s, l)) return w++, a = Dn.call(e, l) && te(e[l], t, n, r, o, i)
                }), a && !r && lr(e, function(e, t, n) {
                    if (Dn.call(n, t)) return a = --w > -1
                });
                return o.pop(), i.pop(), g && (u(o), u(i)), a
            }

            function ne(e, t, n, r, o) {
                (Gn(t) ? Je : sr)(t, function(t, i) {
                    var a, l, s = t,
                        u = e[i];
                    if (t && ((l = Gn(t)) || ur(t))) {
                        for (var c = r.length; c--;)
                            if (a = r[c] == t) {
                                u = o[c];
                                break
                            } if (!a) {
                            var d;
                            n && (s = n(u, t), (d = "undefined" != typeof s) && (u = s)), d || (u = l ? Gn(u) ? u : [] : ur(u) ? u : {}), r.push(t), o.push(u), d || ne(u, t, n, r, o)
                        }
                    } else n && (s = n(u, t), "undefined" == typeof s && (s = t)), "undefined" != typeof s && (u = s);
                    e[i] = u
                })
            }

            function re(e, t) {
                return e + An(Vn() * (t - e + 1))
            }

            function oe(n, r, o) {
                var a = -1,
                    s = se(),
                    d = n ? n.length : 0,
                    f = [],
                    p = !r && d >= g && s === e,
                    h = o || p ? l() : f;
                if (p) {
                    var m = i(h);
                    s = t, h = m
                }
                for (; ++a < d;) {
                    var y = n[a],
                        v = o ? o(y, a, n) : y;
                    (r ? !a || h[h.length - 1] !== v : s(h, v) < 0) && ((o || p) && h.push(v), f.push(y))
                }
                return p ? (u(h.array), c(h)) : o && u(h), f
            }

            function ie(e) {
                return function(t, n, r) {
                    var o = {};
                    n = h.createCallback(n, r, 3);
                    var i = -1,
                        a = t ? t.length : 0;
                    if ("number" == typeof a)
                        for (; ++i < a;) {
                            var l = t[i];
                            e(o, l, n(l, i, t), t)
                        } else sr(t, function(t, r, i) {
                            e(o, t, n(t, r, i), i)
                        });
                    return o
                }
            }

            function ae(e, t, n, r, o, i) {
                var a = 1 & t,
                    l = 2 & t,
                    s = 4 & t,
                    u = 16 & t,
                    c = 32 & t;
                if (!l && !_e(e)) throw new Pn;
                u && !n.length && (t &= -17, u = n = !1), c && !r.length && (t &= -33, c = r = !1);
                var f = e && e.__bindData__;
                if (f && f !== !0) return f = d(f), f[2] && (f[2] = d(f[2])), f[3] && (f[3] = d(f[3])), !a || 1 & f[1] || (f[4] = o), !a && 1 & f[1] && (t |= 8), !s || 4 & f[1] || (f[5] = i), u && On.apply(f[2] || (f[2] = []), n), c && Mn.apply(f[3] || (f[3] = []), r), f[1] |= t, ae.apply(null, f);
                var p = 1 == t || 17 === t ? b : K;
                return p([e, t, n, r, o, i])
            }

            function le(e) {
                return tr[e]
            }

            function se() {
                var t = (t = h.indexOf) === vt ? e : t;
                return t
            }

            function ue(e) {
                return "function" == typeof e && Yn.test(e)
            }

            function ce(e) {
                var t, n;
                return !!(e && Sn.call(e) == z && (t = e.constructor, !_e(t) || t instanceof t)) && (lr(e, function(e, t) {
                    n = t
                }), "undefined" == typeof n || Dn.call(e, n))
            }

            function de(e) {
                return nr[e]
            }

            function fe(e) {
                return e && "object" == typeof e && "number" == typeof e.length && Sn.call(e) == D || !1
            }

            function pe(e, t, n, r) {
                return "boolean" != typeof t && null != t && (r = n, n = t, t = !1), W(e, t, "function" == typeof n && J(n, r, 1))
            }

            function he(e, t, n) {
                return W(e, !0, "function" == typeof t && J(t, n, 1))
            }

            function me(e, t) {
                var n = X(e);
                return t ? ir(n, t) : n
            }

            function ye(e, t, n) {
                var r;
                return t = h.createCallback(t, n, 3), sr(e, function(e, n, o) {
                    if (t(e, n, o)) return r = n, !1
                }), r
            }

            function ve(e, t, n) {
                var r;
                return t = h.createCallback(t, n, 3), be(e, function(e, n, o) {
                    if (t(e, n, o)) return r = n, !1
                }), r
            }

            function ge(e, t, n) {
                var r = [];
                lr(e, function(e, t) {
                    r.push(t, e)
                });
                var o = r.length;
                for (t = J(t, n, 3); o-- && t(r[o--], r[o], e) !== !1;);
                return e
            }

            function be(e, t, n) {
                var r = er(e),
                    o = r.length;
                for (t = J(t, n, 3); o--;) {
                    var i = r[o];
                    if (t(e[i], i, e) === !1) break
                }
                return e
            }

            function we(e) {
                var t = [];
                return lr(e, function(e, n) {
                    _e(e) && t.push(n)
                }), t.sort()
            }

            function xe(e, t) {
                return !!e && Dn.call(e, t)
            }

            function Te(e) {
                for (var t = -1, n = er(e), r = n.length, o = {}; ++t < r;) {
                    var i = n[t];
                    o[e[i]] = i
                }
                return o
            }

            function Pe(e) {
                return e === !0 || e === !1 || e && "object" == typeof e && Sn.call(e) == N || !1
            }

            function Ce(e) {
                return e && "object" == typeof e && Sn.call(e) == $ || !1;
            }

            function je(e) {
                return e && 1 === e.nodeType || !1
            }

            function ke(e) {
                var t = !0;
                if (!e) return t;
                var n = Sn.call(e),
                    r = e.length;
                return n == O || n == R || n == D || n == z && "number" == typeof r && _e(e.splice) ? !r : (sr(e, function() {
                    return t = !1
                }), t)
            }

            function Se(e, t, n, r) {
                return te(e, t, "function" == typeof n && J(n, r, 2))
            }

            function Ye(e) {
                return Rn(e) && !Fn(parseFloat(e))
            }

            function _e(e) {
                return "function" == typeof e
            }

            function Ee(e) {
                return !(!e || !U[typeof e])
            }

            function Ae(e) {
                return Ie(e) && e != +e
            }

            function Qe(e) {
                return null === e
            }

            function Ie(e) {
                return "number" == typeof e || e && "object" == typeof e && Sn.call(e) == L || !1
            }

            function De(e) {
                return e && "object" == typeof e && Sn.call(e) == B || !1
            }

            function Oe(e) {
                return "string" == typeof e || e && "object" == typeof e && Sn.call(e) == R || !1
            }

            function Ne(e) {
                return "undefined" == typeof e
            }

            function $e(e, t, n) {
                var r = {};
                return t = h.createCallback(t, n, 3), sr(e, function(e, n, o) {
                    r[n] = t(e, n, o)
                }), r
            }

            function Me(e) {
                var t = arguments,
                    n = 2;
                if (!Ee(e)) return e;
                if ("number" != typeof t[2] && (n = t.length), n > 3 && "function" == typeof t[n - 2]) var r = J(t[--n - 1], t[n--], 2);
                else n > 2 && "function" == typeof t[n - 1] && (r = t[--n]);
                for (var o = d(arguments, 1, n), i = -1, a = l(), s = l(); ++i < n;) ne(e, o[i], r, a, s);
                return u(a), u(s), e
            }

            function Le(e, t, n) {
                var r = {};
                if ("function" != typeof t) {
                    var o = [];
                    lr(e, function(e, t) {
                        o.push(t)
                    }), o = G(o, ee(arguments, !0, !1, 1));
                    for (var i = -1, a = o.length; ++i < a;) {
                        var l = o[i];
                        r[l] = e[l]
                    }
                } else t = h.createCallback(t, n, 3), lr(e, function(e, n, o) {
                    t(e, n, o) || (r[n] = e)
                });
                return r
            }

            function ze(e) {
                for (var t = -1, n = er(e), r = n.length, o = hn(r); ++t < r;) {
                    var i = n[t];
                    o[t] = [i, e[i]]
                }
                return o
            }

            function Be(e, t, n) {
                var r = {};
                if ("function" != typeof t)
                    for (var o = -1, i = ee(arguments, !0, !1, 1), a = Ee(e) ? i.length : 0; ++o < a;) {
                        var l = i[o];
                        l in e && (r[l] = e[l])
                    } else t = h.createCallback(t, n, 3), lr(e, function(e, n, o) {
                        t(e, n, o) && (r[n] = e)
                    });
                return r
            }

            function Re(e, t, n, r) {
                var o = Gn(e);
                if (null == n)
                    if (o) n = [];
                    else {
                        var i = e && e.constructor,
                            a = i && i.prototype;
                        n = X(a)
                    } return t && (t = h.createCallback(t, r, 4), (o ? Je : sr)(e, function(e, r, o) {
                    return t(n, e, r, o)
                })), n
            }

            function Fe(e) {
                for (var t = -1, n = er(e), r = n.length, o = hn(r); ++t < r;) o[t] = e[n[t]];
                return o
            }

            function qe(e) {
                for (var t = arguments, n = -1, r = ee(t, !0, !1, 1), o = t[2] && t[2][t[1]] === e ? 1 : r.length, i = hn(o); ++n < o;) i[n] = e[r[n]];
                return i
            }

            function He(e, t, n) {
                var r = -1,
                    o = se(),
                    i = e ? e.length : 0,
                    a = !1;
                return n = (n < 0 ? Hn(0, i + n) : n) || 0, Gn(e) ? a = o(e, t, n) > -1 : "number" == typeof i ? a = (Oe(e) ? e.indexOf(t, n) : o(e, t, n)) > -1 : sr(e, function(e) {
                    if (++r >= n) return !(a = e === t)
                }), a
            }

            function Ue(e, t, n) {
                var r = !0;
                t = h.createCallback(t, n, 3);
                var o = -1,
                    i = e ? e.length : 0;
                if ("number" == typeof i)
                    for (; ++o < i && (r = !!t(e[o], o, e)););
                else sr(e, function(e, n, o) {
                    return r = !!t(e, n, o)
                });
                return r
            }

            function We(e, t, n) {
                var r = [];
                t = h.createCallback(t, n, 3);
                var o = -1,
                    i = e ? e.length : 0;
                if ("number" == typeof i)
                    for (; ++o < i;) {
                        var a = e[o];
                        t(a, o, e) && r.push(a)
                    } else sr(e, function(e, n, o) {
                        t(e, n, o) && r.push(e)
                    });
                return r
            }

            function Ve(e, t, n) {
                t = h.createCallback(t, n, 3);
                var r = -1,
                    o = e ? e.length : 0;
                if ("number" != typeof o) {
                    var i;
                    return sr(e, function(e, n, r) {
                        if (t(e, n, r)) return i = e, !1
                    }), i
                }
                for (; ++r < o;) {
                    var a = e[r];
                    if (t(a, r, e)) return a
                }
            }

            function Xe(e, t, n) {
                var r;
                return t = h.createCallback(t, n, 3), Ke(e, function(e, n, o) {
                    if (t(e, n, o)) return r = e, !1
                }), r
            }

            function Je(e, t, n) {
                var r = -1,
                    o = e ? e.length : 0;
                if (t = t && "undefined" == typeof n ? t : J(t, n, 3), "number" == typeof o)
                    for (; ++r < o && t(e[r], r, e) !== !1;);
                else sr(e, t);
                return e
            }

            function Ke(e, t, n) {
                var r = e ? e.length : 0;
                if (t = t && "undefined" == typeof n ? t : J(t, n, 3), "number" == typeof r)
                    for (; r-- && t(e[r], r, e) !== !1;);
                else {
                    var o = er(e);
                    r = o.length, sr(e, function(e, n, i) {
                        return n = o ? o[--r] : --r, t(i[n], n, i)
                    })
                }
                return e
            }

            function Ge(e, t) {
                var n = d(arguments, 2),
                    r = -1,
                    o = "function" == typeof t,
                    i = e ? e.length : 0,
                    a = hn("number" == typeof i ? i : 0);
                return Je(e, function(e) {
                    a[++r] = (o ? t : e[t]).apply(e, n)
                }), a
            }

            function Ze(e, t, n) {
                var r = -1,
                    o = e ? e.length : 0;
                if (t = h.createCallback(t, n, 3), "number" == typeof o)
                    for (var i = hn(o); ++r < o;) i[r] = t(e[r], r, e);
                else i = [], sr(e, function(e, n, o) {
                    i[++r] = t(e, n, o)
                });
                return i
            }

            function et(e, t, n) {
                var o = -(1 / 0),
                    i = o;
                if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Gn(e))
                    for (var a = -1, l = e.length; ++a < l;) {
                        var s = e[a];
                        s > i && (i = s)
                    } else t = null == t && Oe(e) ? r : h.createCallback(t, n, 3), Je(e, function(e, n, r) {
                        var a = t(e, n, r);
                        a > o && (o = a, i = e)
                    });
                return i
            }

            function tt(e, t, n) {
                var o = 1 / 0,
                    i = o;
                if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Gn(e))
                    for (var a = -1, l = e.length; ++a < l;) {
                        var s = e[a];
                        s < i && (i = s)
                    } else t = null == t && Oe(e) ? r : h.createCallback(t, n, 3), Je(e, function(e, n, r) {
                        var a = t(e, n, r);
                        a < o && (o = a, i = e)
                    });
                return i
            }

            function nt(e, t, n, r) {
                if (!e) return n;
                var o = arguments.length < 3;
                t = h.createCallback(t, r, 4);
                var i = -1,
                    a = e.length;
                if ("number" == typeof a)
                    for (o && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
                else sr(e, function(e, r, i) {
                    n = o ? (o = !1, e) : t(n, e, r, i)
                });
                return n
            }

            function rt(e, t, n, r) {
                var o = arguments.length < 3;
                return t = h.createCallback(t, r, 4), Ke(e, function(e, r, i) {
                    n = o ? (o = !1, e) : t(n, e, r, i)
                }), n
            }

            function ot(e, t, n) {
                return t = h.createCallback(t, n, 3), We(e, function(e, n, r) {
                    return !t(e, n, r)
                })
            }

            function it(e, t, n) {
                if (e && "number" != typeof e.length && (e = Fe(e)), null == t || n) return e ? e[re(0, e.length - 1)] : p;
                var r = at(e);
                return r.length = Un(Hn(0, t), r.length), r
            }

            function at(e) {
                var t = -1,
                    n = e ? e.length : 0,
                    r = hn("number" == typeof n ? n : 0);
                return Je(e, function(e) {
                    var n = re(0, ++t);
                    r[t] = r[n], r[n] = e
                }), r
            }

            function lt(e) {
                var t = e ? e.length : 0;
                return "number" == typeof t ? t : er(e).length
            }

            function st(e, t, n) {
                var r;
                t = h.createCallback(t, n, 3);
                var o = -1,
                    i = e ? e.length : 0;
                if ("number" == typeof i)
                    for (; ++o < i && !(r = t(e[o], o, e)););
                else sr(e, function(e, n, o) {
                    return !(r = t(e, n, o))
                });
                return !!r
            }

            function ut(e, t, n) {
                var r = -1,
                    i = Gn(t),
                    a = e ? e.length : 0,
                    d = hn("number" == typeof a ? a : 0);
                for (i || (t = h.createCallback(t, n, 3)), Je(e, function(e, n, o) {
                        var a = d[++r] = s();
                        i ? a.criteria = Ze(t, function(t) {
                            return e[t]
                        }) : (a.criteria = l())[0] = t(e, n, o), a.index = r, a.value = e
                    }), a = d.length, d.sort(o); a--;) {
                    var f = d[a];
                    d[a] = f.value, i || u(f.criteria), c(f)
                }
                return d
            }

            function ct(e) {
                return e && "number" == typeof e.length ? d(e) : Fe(e)
            }

            function dt(e) {
                for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                    var o = e[t];
                    o && r.push(o)
                }
                return r
            }

            function ft(e) {
                return G(e, ee(arguments, !0, !0, 1))
            }

            function pt(e, t, n) {
                var r = -1,
                    o = e ? e.length : 0;
                for (t = h.createCallback(t, n, 3); ++r < o;)
                    if (t(e[r], r, e)) return r;
                return -1
            }

            function ht(e, t, n) {
                var r = e ? e.length : 0;
                for (t = h.createCallback(t, n, 3); r--;)
                    if (t(e[r], r, e)) return r;
                return -1
            }

            function mt(e, t, n) {
                var r = 0,
                    o = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var i = -1;
                    for (t = h.createCallback(t, n, 3); ++i < o && t(e[i], i, e);) r++
                } else if (r = t, null == r || n) return e ? e[0] : p;
                return d(e, 0, Un(Hn(0, r), o))
            }

            function yt(e, t, n, r) {
                return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (e = Ze(e, n, r)), ee(e, t)
            }

            function vt(t, n, r) {
                if ("number" == typeof r) {
                    var o = t ? t.length : 0;
                    r = r < 0 ? Hn(0, o + r) : r || 0
                } else if (r) {
                    var i = kt(t, n);
                    return t[i] === n ? i : -1
                }
                return e(t, n, r)
            }

            function gt(e, t, n) {
                var r = 0,
                    o = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var i = o;
                    for (t = h.createCallback(t, n, 3); i-- && t(e[i], i, e);) r++
                } else r = null == t || n ? 1 : t || r;
                return d(e, 0, Un(Hn(0, o - r), o))
            }

            function bt() {
                for (var n = [], r = -1, o = arguments.length, a = l(), s = se(), d = s === e, f = l(); ++r < o;) {
                    var p = arguments[r];
                    (Gn(p) || fe(p)) && (n.push(p), a.push(d && p.length >= g && i(r ? n[r] : f)))
                }
                var h = n[0],
                    m = -1,
                    y = h ? h.length : 0,
                    v = [];
                e: for (; ++m < y;) {
                    var b = a[0];
                    if (p = h[m], (b ? t(b, p) : s(f, p)) < 0) {
                        for (r = o, (b || f).push(p); --r;)
                            if (b = a[r], (b ? t(b, p) : s(n[r], p)) < 0) continue e;
                        v.push(p)
                    }
                }
                for (; o--;) b = a[o], b && c(b);
                return u(a), u(f), v
            }

            function wt(e, t, n) {
                var r = 0,
                    o = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var i = o;
                    for (t = h.createCallback(t, n, 3); i-- && t(e[i], i, e);) r++
                } else if (r = t, null == r || n) return e ? e[o - 1] : p;
                return d(e, Hn(0, o - r))
            }

            function xt(e, t, n) {
                var r = e ? e.length : 0;
                for ("number" == typeof n && (r = (n < 0 ? Hn(0, r + n) : Un(n, r - 1)) + 1); r--;)
                    if (e[r] === t) return r;
                return -1
            }

            function Tt(e) {
                for (var t = arguments, n = 0, r = t.length, o = e ? e.length : 0; ++n < r;)
                    for (var i = -1, a = t[n]; ++i < o;) e[i] === a && ($n.call(e, i--, 1), o--);
                return e
            }

            function Pt(e, t, n) {
                e = +e || 0, n = "number" == typeof n ? n : +n || 1, null == t && (t = e, e = 0);
                for (var r = -1, o = Hn(0, _n((t - e) / (n || 1))), i = hn(o); ++r < o;) i[r] = e, e += n;
                return i
            }

            function Ct(e, t, n) {
                var r = -1,
                    o = e ? e.length : 0,
                    i = [];
                for (t = h.createCallback(t, n, 3); ++r < o;) {
                    var a = e[r];
                    t(a, r, e) && (i.push(a), $n.call(e, r--, 1), o--)
                }
                return i
            }

            function jt(e, t, n) {
                if ("number" != typeof t && null != t) {
                    var r = 0,
                        o = -1,
                        i = e ? e.length : 0;
                    for (t = h.createCallback(t, n, 3); ++o < i && t(e[o], o, e);) r++
                } else r = null == t || n ? 1 : Hn(0, t);
                return d(e, r)
            }

            function kt(e, t, n, r) {
                var o = 0,
                    i = e ? e.length : o;
                for (n = n ? h.createCallback(n, r, 1) : Kt, t = n(t); o < i;) {
                    var a = o + i >>> 1;
                    n(e[a]) < t ? o = a + 1 : i = a
                }
                return o
            }

            function St() {
                return oe(ee(arguments, !0, !0))
            }

            function Yt(e, t, n, r) {
                return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (n = h.createCallback(n, r, 3)), oe(e, t, n)
            }

            function _t(e) {
                return G(e, d(arguments, 1))
            }

            function Et() {
                for (var e = -1, t = arguments.length; ++e < t;) {
                    var n = arguments[e];
                    if (Gn(n) || fe(n)) var r = r ? oe(G(r, n).concat(G(n, r))) : n
                }
                return r || []
            }

            function At() {
                for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, n = e ? et(pr(e, "length")) : 0, r = hn(n < 0 ? 0 : n); ++t < n;) r[t] = pr(e, t);
                return r
            }

            function Qt(e, t) {
                var n = -1,
                    r = e ? e.length : 0,
                    o = {};
                for (t || !r || Gn(e[0]) || (t = []); ++n < r;) {
                    var i = e[n];
                    t ? o[i] = t[n] : i && (o[i[0]] = i[1])
                }
                return o
            }

            function It(e, t) {
                if (!_e(t)) throw new Pn;
                return function() {
                    if (--e < 1) return t.apply(this, arguments)
                }
            }

            function Dt(e, t) {
                return arguments.length > 2 ? ae(e, 17, d(arguments, 2), null, t) : ae(e, 1, null, null, t)
            }

            function Ot(e) {
                for (var t = arguments.length > 1 ? ee(arguments, !0, !1, 1) : we(e), n = -1, r = t.length; ++n < r;) {
                    var o = t[n];
                    e[o] = ae(e[o], 1, null, null, e)
                }
                return e
            }

            function Nt(e, t) {
                return arguments.length > 2 ? ae(t, 19, d(arguments, 2), null, e) : ae(t, 3, null, null, e)
            }

            function $t() {
                for (var e = arguments, t = e.length; t--;)
                    if (!_e(e[t])) throw new Pn;
                return function() {
                    for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }

            function Mt(e, t) {
                return t = "number" == typeof t ? t : +t || e.length, ae(e, 4, null, null, null, t)
            }

            function Lt(e, t, n) {
                var r, o, i, a, l, s, u, c = 0,
                    d = !1,
                    f = !0;
                if (!_e(e)) throw new Pn;
                if (t = Hn(0, t) || 0, n === !0) {
                    var h = !0;
                    f = !1
                } else Ee(n) && (h = n.leading, d = "maxWait" in n && (Hn(t, n.maxWait) || 0), f = "trailing" in n ? n.trailing : f);
                var m = function() {
                        var n = t - (mr() - a);
                        if (n <= 0) {
                            o && En(o);
                            var d = u;
                            o = s = u = p, d && (c = mr(), i = e.apply(l, r), s || o || (r = l = null))
                        } else s = Nn(m, n)
                    },
                    y = function() {
                        s && En(s), o = s = u = p, (f || d !== t) && (c = mr(), i = e.apply(l, r), s || o || (r = l = null))
                    };
                return function() {
                    if (r = arguments, a = mr(), l = this, u = f && (s || !h), d === !1) var n = h && !s;
                    else {
                        o || h || (c = a);
                        var p = d - (a - c),
                            v = p <= 0;
                        v ? (o && (o = En(o)), c = a, i = e.apply(l, r)) : o || (o = Nn(y, p))
                    }
                    return v && s ? s = En(s) : s || t === d || (s = Nn(m, t)), n && (v = !0, i = e.apply(l, r)), !v || s || o || (r = l = null), i
                }
            }

            function zt(e) {
                if (!_e(e)) throw new Pn;
                var t = d(arguments, 1);
                return Nn(function() {
                    e.apply(p, t)
                }, 1)
            }

            function Bt(e, t) {
                if (!_e(e)) throw new Pn;
                var n = d(arguments, 2);
                return Nn(function() {
                    e.apply(p, n)
                }, t)
            }

            function Rt(e, t) {
                if (!_e(e)) throw new Pn;
                var n = function() {
                    var r = n.cache,
                        o = t ? t.apply(this, arguments) : v + arguments[0];
                    return Dn.call(r, o) ? r[o] : r[o] = e.apply(this, arguments)
                };
                return n.cache = {}, n
            }

            function Ft(e) {
                var t, n;
                if (!_e(e)) throw new Pn;
                return function() {
                    return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                }
            }

            function qt(e) {
                return ae(e, 16, d(arguments, 1))
            }

            function Ht(e) {
                return ae(e, 32, null, d(arguments, 1))
            }

            function Ut(e, t, n) {
                var r = !0,
                    o = !0;
                if (!_e(e)) throw new Pn;
                return n === !1 ? r = !1 : Ee(n) && (r = "leading" in n ? n.leading : r, o = "trailing" in n ? n.trailing : o), q.leading = r, q.maxWait = t, q.trailing = o, Lt(e, t, q)
            }

            function Wt(e, t) {
                return ae(t, 16, [e])
            }

            function Vt(e) {
                return function() {
                    return e
                }
            }

            function Xt(e, t, n) {
                var r = typeof e;
                if (null == e || "function" == r) return J(e, t, n);
                if ("object" != r) return tn(e);
                var o = er(e),
                    i = o[0],
                    a = e[i];
                return 1 != o.length || a !== a || Ee(a) ? function(t) {
                    for (var n = o.length, r = !1; n-- && (r = te(t[o[n]], e[o[n]], null, !0)););
                    return r
                } : function(e) {
                    var t = e[i];
                    return a === t && (0 !== a || 1 / a == 1 / t)
                }
            }

            function Jt(e) {
                return null == e ? "" : Tn(e).replace(or, le)
            }

            function Kt(e) {
                return e
            }

            function Gt(e, t, n) {
                var r = !0,
                    o = t && we(t);
                t && (n || o.length) || (null == n && (n = t), i = m, t = e, e = h, o = we(t)), n === !1 ? r = !1 : Ee(n) && "chain" in n && (r = n.chain);
                var i = e,
                    a = _e(i);
                Je(o, function(n) {
                    var o = e[n] = t[n];
                    a && (i.prototype[n] = function() {
                        var t = this.__chain__,
                            n = this.__wrapped__,
                            a = [n];
                        On.apply(a, arguments);
                        var l = o.apply(e, a);
                        if (r || t) {
                            if (n === l && Ee(l)) return this;
                            l = new i(l), l.__chain__ = t
                        }
                        return l
                    })
                })
            }

            function Zt() {
                return n._ = kn, this
            }

            function en() {}

            function tn(e) {
                return function(t) {
                    return t[e]
                }
            }

            function nn(e, t, n) {
                var r = null == e,
                    o = null == t;
                if (null == n && ("boolean" == typeof e && o ? (n = e, e = 1) : o || "boolean" != typeof t || (n = t, o = !0)), r && o && (t = 1), e = +e || 0, o ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
                    var i = Vn();
                    return Un(e + i * (t - e + parseFloat("1e-" + ((i + "").length - 1))), t)
                }
                return re(e, t)
            }

            function rn(e, t) {
                if (e) {
                    var n = e[t];
                    return _e(n) ? e[t]() : n
                }
            }

            function on(e, t, n) {
                var r = h.templateSettings;
                e = Tn(e || ""), n = ar({}, n, r);
                var o, i = ar({}, n.imports, r.imports),
                    l = er(i),
                    s = Fe(i),
                    u = 0,
                    c = n.interpolate || _,
                    d = "__p += '",
                    f = xn((n.escape || _).source + "|" + c.source + "|" + (c === S ? C : _).source + "|" + (n.evaluate || _).source + "|$", "g");
                e.replace(f, function(t, n, r, i, l, s) {
                    return r || (r = i), d += e.slice(u, s).replace(A, a), n && (d += "' +\n__e(" + n + ") +\n'"), l && (o = !0, d += "';\n" + l + ";\n__p += '"), r && (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), u = s + t.length, t
                }), d += "';\n";
                var m = n.variable,
                    y = m;
                y || (m = "obj", d = "with (" + m + ") {\n" + d + "\n}\n"), d = (o ? d.replace(x, "") : d).replace(T, "$1").replace(P, "$1;"), d = "function(" + m + ") {\n" + (y ? "" : m + " || (" + m + " = {});\n") + "var __t, __p = '', __e = _.escape" + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                var v = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + I++ + "]") + "\n*/";
                try {
                    var g = vn(l, "return " + d + v).apply(p, s)
                } catch (b) {
                    throw b.source = d, b
                }
                return t ? g(t) : (g.source = d, g)
            }

            function an(e, t, n) {
                e = (e = +e) > -1 ? e : 0;
                var r = -1,
                    o = hn(e);
                for (t = J(t, n, 1); ++r < e;) o[r] = t(r);
                return o
            }

            function ln(e) {
                return null == e ? "" : Tn(e).replace(rr, de)
            }

            function sn(e) {
                var t = ++y;
                return Tn(null == e ? "" : e) + t
            }

            function un(e) {
                return e = new m(e), e.__chain__ = !0, e
            }

            function cn(e, t) {
                return t(e), e
            }

            function dn() {
                return this.__chain__ = !0, this
            }

            function fn() {
                return Tn(this.__wrapped__)
            }

            function pn() {
                return this.__wrapped__
            }
            n = n ? Z.defaults(V.Object(), n, Z.pick(V, Q)) : V;
            var hn = n.Array,
                mn = n.Boolean,
                yn = n.Date,
                vn = n.Function,
                gn = n.Math,
                bn = n.Number,
                wn = n.Object,
                xn = n.RegExp,
                Tn = n.String,
                Pn = n.TypeError,
                Cn = [],
                jn = wn.prototype,
                kn = n._,
                Sn = jn.toString,
                Yn = xn("^" + Tn(Sn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                _n = gn.ceil,
                En = n.clearTimeout,
                An = gn.floor,
                Qn = vn.prototype.toString,
                In = ue(In = wn.getPrototypeOf) && In,
                Dn = jn.hasOwnProperty,
                On = Cn.push,
                Nn = n.setTimeout,
                $n = Cn.splice,
                Mn = Cn.unshift,
                Ln = function() {
                    try {
                        var e = {},
                            t = ue(t = wn.defineProperty) && t,
                            n = t(e, e, e) && t
                    } catch (r) {}
                    return n
                }(),
                zn = ue(zn = wn.create) && zn,
                Bn = ue(Bn = hn.isArray) && Bn,
                Rn = n.isFinite,
                Fn = n.isNaN,
                qn = ue(qn = wn.keys) && qn,
                Hn = gn.max,
                Un = gn.min,
                Wn = n.parseInt,
                Vn = gn.random,
                Xn = {};
            Xn[O] = hn, Xn[N] = mn, Xn[$] = yn, Xn[M] = vn, Xn[z] = wn, Xn[L] = bn, Xn[B] = xn, Xn[R] = Tn, m.prototype = h.prototype;
            var Jn = h.support = {};
            Jn.funcDecomp = !ue(n.WinRTError) && E.test(f), Jn.funcNames = "string" == typeof vn.name, h.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: S,
                variable: "",
                imports: {
                    _: h
                }
            }, zn || (X = function() {
                function e() {}
                return function(t) {
                    if (Ee(t)) {
                        e.prototype = t;
                        var r = new e;
                        e.prototype = null
                    }
                    return r || n.Object()
                }
            }());
            var Kn = Ln ? function(e, t) {
                    H.value = t, Ln(e, "__bindData__", H)
                } : en,
                Gn = Bn || function(e) {
                    return e && "object" == typeof e && "number" == typeof e.length && Sn.call(e) == O || !1
                },
                Zn = function(e) {
                    var t, n = e,
                        r = [];
                    if (!n) return r;
                    if (!U[typeof e]) return r;
                    for (t in n) Dn.call(n, t) && r.push(t);
                    return r
                },
                er = qn ? function(e) {
                    return Ee(e) ? qn(e) : []
                } : Zn,
                tr = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                nr = Te(tr),
                rr = xn("(" + er(nr).join("|") + ")", "g"),
                or = xn("[" + er(tr).join("") + "]", "g"),
                ir = function(e, t, n) {
                    var r, o = e,
                        i = o;
                    if (!o) return i;
                    var a = arguments,
                        l = 0,
                        s = "number" == typeof n ? 2 : a.length;
                    if (s > 3 && "function" == typeof a[s - 2]) var u = J(a[--s - 1], a[s--], 2);
                    else s > 2 && "function" == typeof a[s - 1] && (u = a[--s]);
                    for (; ++l < s;)
                        if (o = a[l], o && U[typeof o])
                            for (var c = -1, d = U[typeof o] && er(o), f = d ? d.length : 0; ++c < f;) r = d[c], i[r] = u ? u(i[r], o[r]) : o[r];
                    return i
                },
                ar = function(e, t, n) {
                    var r, o = e,
                        i = o;
                    if (!o) return i;
                    for (var a = arguments, l = 0, s = "number" == typeof n ? 2 : a.length; ++l < s;)
                        if (o = a[l], o && U[typeof o])
                            for (var u = -1, c = U[typeof o] && er(o), d = c ? c.length : 0; ++u < d;) r = c[u], "undefined" == typeof i[r] && (i[r] = o[r]);
                    return i
                },
                lr = function(e, t, n) {
                    var r, o = e,
                        i = o;
                    if (!o) return i;
                    if (!U[typeof o]) return i;
                    t = t && "undefined" == typeof n ? t : J(t, n, 3);
                    for (r in o)
                        if (t(o[r], r, e) === !1) return i;
                    return i
                },
                sr = function(e, t, n) {
                    var r, o = e,
                        i = o;
                    if (!o) return i;
                    if (!U[typeof o]) return i;
                    t = t && "undefined" == typeof n ? t : J(t, n, 3);
                    for (var a = -1, l = U[typeof o] && er(o), s = l ? l.length : 0; ++a < s;)
                        if (r = l[a], t(o[r], r, e) === !1) return i;
                    return i
                },
                ur = In ? function(e) {
                    if (!e || Sn.call(e) != z) return !1;
                    var t = e.valueOf,
                        n = ue(t) && (n = In(t)) && In(n);
                    return n ? e == n || In(e) == n : ce(e)
                } : ce,
                cr = ie(function(e, t, n) {
                    Dn.call(e, n) ? e[n]++ : e[n] = 1
                }),
                dr = ie(function(e, t, n) {
                    (Dn.call(e, n) ? e[n] : e[n] = []).push(t)
                }),
                fr = ie(function(e, t, n) {
                    e[n] = t
                }),
                pr = Ze,
                hr = We,
                mr = ue(mr = yn.now) && mr || function() {
                    return (new yn).getTime()
                },
                yr = 8 == Wn(w + "08") ? Wn : function(e, t) {
                    return Wn(Oe(e) ? e.replace(Y, "") : e, t || 0)
                };
            return h.after = It, h.assign = ir, h.at = qe, h.bind = Dt, h.bindAll = Ot, h.bindKey = Nt, h.chain = un, h.compact = dt, h.compose = $t, h.constant = Vt, h.countBy = cr, h.create = me, h.createCallback = Xt, h.curry = Mt, h.debounce = Lt, h.defaults = ar, h.defer = zt, h.delay = Bt, h.difference = ft, h.filter = We, h.flatten = yt, h.forEach = Je, h.forEachRight = Ke, h.forIn = lr, h.forInRight = ge, h.forOwn = sr, h.forOwnRight = be, h.functions = we, h.groupBy = dr, h.indexBy = fr, h.initial = gt, h.intersection = bt, h.invert = Te, h.invoke = Ge, h.keys = er, h.map = Ze, h.mapValues = $e, h.max = et, h.memoize = Rt, h.merge = Me, h.min = tt, h.omit = Le, h.once = Ft, h.pairs = ze, h.partial = qt, h.partialRight = Ht, h.pick = Be, h.pluck = pr, h.property = tn, h.pull = Tt, h.range = Pt, h.reject = ot, h.remove = Ct, h.rest = jt, h.shuffle = at, h.sortBy = ut, h.tap = cn, h.throttle = Ut, h.times = an, h.toArray = ct, h.transform = Re, h.union = St, h.uniq = Yt, h.values = Fe, h.where = hr, h.without = _t, h.wrap = Wt, h.xor = Et, h.zip = At, h.zipObject = Qt, h.collect = Ze, h.drop = jt, h.each = Je, h.eachRight = Ke, h.extend = ir, h.methods = we, h.object = Qt, h.select = We, h.tail = jt, h.unique = Yt, h.unzip = At, Gt(h), h.clone = pe, h.cloneDeep = he, h.contains = He, h.escape = Jt, h.every = Ue, h.find = Ve, h.findIndex = pt, h.findKey = ye, h.findLast = Xe, h.findLastIndex = ht, h.findLastKey = ve, h.has = xe, h.identity = Kt, h.indexOf = vt, h.isArguments = fe, h.isArray = Gn, h.isBoolean = Pe, h.isDate = Ce, h.isElement = je, h.isEmpty = ke, h.isEqual = Se, h.isFinite = Ye, h.isFunction = _e, h.isNaN = Ae, h.isNull = Qe, h.isNumber = Ie, h.isObject = Ee, h.isPlainObject = ur, h.isRegExp = De, h.isString = Oe, h.isUndefined = Ne, h.lastIndexOf = xt, h.mixin = Gt, h.noConflict = Zt, h.noop = en, h.now = mr, h.parseInt = yr, h.random = nn, h.reduce = nt, h.reduceRight = rt, h.result = rn, h.runInContext = f, h.size = lt, h.some = st, h.sortedIndex = kt, h.template = on, h.unescape = ln, h.uniqueId = sn, h.all = Ue, h.any = st, h.detect = Ve, h.findWhere = Ve, h.foldl = nt, h.foldr = rt, h.include = He, h.inject = nt, Gt(function() {
                var e = {};
                return sr(h, function(t, n) {
                    h.prototype[n] || (e[n] = t)
                }), e
            }(), !1), h.first = mt, h.last = wt, h.sample = it, h.take = mt, h.head = mt, sr(h, function(e, t) {
                var n = "sample" !== t;
                h.prototype[t] || (h.prototype[t] = function(t, r) {
                    var o = this.__chain__,
                        i = e(this.__wrapped__, t, r);
                    return o || null != t && (!r || n && "function" == typeof t) ? new m(i, o) : i
                })
            }), h.VERSION = "2.4.1", h.prototype.chain = dn, h.prototype.toString = fn, h.prototype.value = pn, h.prototype.valueOf = pn, Je(["join", "pop", "shift"], function(e) {
                var t = Cn[e];
                h.prototype[e] = function() {
                    var e = this.__chain__,
                        n = t.apply(this.__wrapped__, arguments);
                    return e ? new m(n, e) : n
                }
            }), Je(["push", "reverse", "sort", "unshift"], function(e) {
                var t = Cn[e];
                h.prototype[e] = function() {
                    return t.apply(this.__wrapped__, arguments), this
                }
            }), Je(["concat", "slice", "splice"], function(e) {
                var t = Cn[e];
                h.prototype[e] = function() {
                    return new m(t.apply(this.__wrapped__, arguments), this.__chain__)
                }
            }), h
        }
        var p, h = [],
            m = [],
            y = 0,
            v = +new Date + "",
            g = 75,
            b = 40,
            w = " \t\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　",
            x = /\b__p \+= '';/g,
            T = /\b(__p \+=) '' \+/g,
            P = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            C = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            j = /\w*$/,
            k = /^\s*function[ \n\r\t]+\w/,
            S = /<%=([\s\S]+?)%>/g,
            Y = RegExp("^[" + w + "]*0+(?=.$)"),
            _ = /($^)/,
            E = /\bthis\b/,
            A = /['\n\r\t\u2028\u2029\\]/g,
            Q = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
            I = 0,
            D = "[object Arguments]",
            O = "[object Array]",
            N = "[object Boolean]",
            $ = "[object Date]",
            M = "[object Function]",
            L = "[object Number]",
            z = "[object Object]",
            B = "[object RegExp]",
            R = "[object String]",
            F = {};
        F[M] = !1, F[D] = F[O] = F[N] = F[$] = F[L] = F[z] = F[B] = F[R] = !0;
        var q = {
                leading: !1,
                maxWait: 0,
                trailing: !1
            },
            H = {
                configurable: !1,
                enumerable: !1,
                value: null,
                writable: !1
            },
            U = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                undefined: !1
            },
            W = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\t": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            V = U[typeof window] && window || this,
            X = U[typeof exports] && exports && !exports.nodeType && exports,
            J = U[typeof module] && module && !module.nodeType && module,
            K = J && J.exports === X && X,
            G = U[typeof global] && global;
        !G || G.global !== G && G.window !== G || (V = G);
        var Z = f();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (V._ = Z, define(function() {
            return Z
        })) : X && J ? K ? (J.exports = Z)._ = Z : X._ = Z : V._ = Z
    }.call(this), window.Modernizr = function(e, t, n) {
        function r(e) {
            v.cssText = e
        }

        function o(e, t) {
            return typeof e === t
        }

        function i(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function a(e, t) {
            for (var r in e) {
                var o = e[r];
                if (!i(o, "-") && v[o] !== n) return "pfx" != t || o
            }
            return !1
        }

        function l(e, t, r) {
            for (var i in e) {
                var a = t[e[i]];
                if (a !== n) return r === !1 ? e[i] : o(a, "function") ? a.bind(r || t) : a
            }
            return !1
        }

        function s(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + b.join(r + " ") + r).split(" ");
            return o(t, "string") || o(t, "undefined") ? a(i, t) : (i = (e + " " + w.join(r + " ") + r).split(" "), l(i, t, n))
        }
        var u, c, d, f = "2.8.3",
            p = {},
            h = t.documentElement,
            m = "modernizr",
            y = t.createElement(m),
            v = y.style,
            g = ({}.toString, "Webkit Moz O ms"),
            b = g.split(" "),
            w = g.toLowerCase().split(" "),
            x = {},
            T = [],
            P = T.slice,
            C = {}.hasOwnProperty;
        d = o(C, "undefined") || o(C.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return C.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = P.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var o = function() {};
                        o.prototype = t.prototype;
                        var i = new o,
                            a = t.apply(i, n.concat(P.call(arguments)));
                        return Object(a) === a ? a : i
                    }
                    return t.apply(e, n.concat(P.call(arguments)))
                };
            return r
        }), x.cssanimations = function() {
            return s("animationName")
        };
        for (var j in x) d(x, j) && (c = j.toLowerCase(), p[c] = x[j](), T.push((p[c] ? "" : "no-") + c));
        return p.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var r in e) d(e, r) && p.addTest(r, e[r]);
            else {
                if (e = e.toLowerCase(), p[e] !== n) return p;
                t = "function" == typeof t ? t() : t, "undefined" != typeof enableClasses && enableClasses && (h.className += " " + (t ? "" : "no-") + e), p[e] = t
            }
            return p
        }, r(""), y = u = null, p._version = f, p._domPrefixes = w, p._cssomPrefixes = b, p.testProp = function(e) {
            return a([e])
        }, p.testAllProps = s, p
    }(this, this.document), + function(e) {
        "use strict";
        var t = function(t, n) {
            this.options = n, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        t.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, t.prototype.toggle = function(e) {
            return this[this.isShown ? "hide" : "show"](e)
        }, t.prototype.show = function(t) {
            var n = this,
                r = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
                var r = e.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                var o = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                r ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
                    n.$element.focus().trigger(o)
                }).emulateTransitionEnd(300) : n.$element.focus().trigger(o)
            }))
        }, t.prototype.hide = function(t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
        }, t.prototype.enforceFocus = function() {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
            }, this))
        }, t.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
        }, t.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
            })
        }, t.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, t.prototype.backdrop = function(t) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = e.support.transition && n;
                if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                r ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
        };
        var n = e.fn.modal;
        e.fn.modal = function(n, r) {
            return this.each(function() {
                var o = e(this),
                    i = o.data("bs.modal"),
                    a = e.extend({}, t.DEFAULTS, o.data(), "object" == typeof n && n);
                i || o.data("bs.modal", i = new t(this, a)), "string" == typeof n ? i[n](r) : a.show && i.show(r)
            })
        }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
            return e.fn.modal = n, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
            var n = e(this),
                r = n.attr("href"),
                o = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                i = o.data("bs.modal") ? "toggle" : e.extend({
                    remote: !/#/.test(r) && r
                }, o.data(), n.data());
            n.is("a") && t.preventDefault(), o.modal(i, this).one("hide", function() {
                n.is(":visible") && n.focus()
            })
        }), e(document).on("show.bs.modal", ".modal", function() {
            e(document.body).addClass("modal-open")
        }).on("hidden.bs.modal", ".modal", function() {
            e(document.body).removeClass("modal-open")
        })
    }(jQuery), plp._screen = function() {
        if (!plp.screen) {
            var e = document.body.clientWidth;
            "screens-xs" === plp.screens ? plp.screen = "xs" : "screens-sm" === plp.screens ? plp.screen = "sm" : "screens-md" === plp.screens ? plp.screen = "md" : "screens-lg" === plp.screens ? plp.screen = "lg" : "screens-xs-sm" === plp.screens ? e > 768 ? plp.screen = "sm" : e <= 767 && (plp.screen = "xs") : "screens-xs-md" === plp.screens ? e > 992 ? plp.screen = "md" : e <= 991 && (plp.screen = "xs") : "screens-xs-lg" === plp.screens ? e > 1200 ? plp.screen = "lg" : e <= 1199 && (plp.screen = "xs") : "screens-sm-md" === plp.screens ? e > 992 ? plp.screen = "md" : e <= 991 && (plp.screen = "sm") : "screens-sm-lg" === plp.screens ? e > 1200 ? plp.screen = "lg" : e <= 1199 && (plp.screen = "sm") : "screens-md-lg" === plp.screens ? e > 1200 ? plp.screen = "lg" : e <= 1199 && (plp.screen = "md") : "screens-xs-sm-md" === plp.screens ? e > 992 ? plp.screen = "md" : e > 768 && e <= 991 ? plp.screen = "sm" : e <= 767 && (plp.screen = "xs") : "screens-xs-sm-lg" === plp.screens ? e > 1200 ? plp.screen = "lg" : e > 768 && e <= 1199 ? plp.screen = "sm" : e <= 767 && (plp.screen = "xs") : "screens-xs-md-lg" === plp.screens ? e > 1200 ? plp.screen = "lg" : e > 992 && e <= 1199 ? plp.screen = "md" : e <= 991 && (plp.screen = "xs") : "screens-sm-md-lg" === plp.screens ? e > 1200 ? plp.screen = "lg" : e > 992 && e <= 1199 ? plp.screen = "md" : e <= 991 && (plp.screen = "sm") : "screens-xs-sm-md-lg" === plp.screens && (e > 1200 ? plp.screen = "lg" : e > 992 && e <= 1199 ? plp.screen = "md" : e > 768 && e <= 991 ? plp.screen = "sm" : e <= 767 && (plp.screen = "xs")), [].slice.call(document.body.childNodes).forEach(function(e) {
                e.className && e.className.indexOf("area") >= 0 && e.classList.add("screen-" + plp.screen)
            })
        }
    }, $(function() {
        plp._screen(), $("script.adaptive").each(function() {
            var e = $(this).parent().contents(),
                t = e[e.index(this) + 1];
            8 === t.nodeType && t.parentNode.removeChild(t), this.parentNode.removeChild(this)
        })
    }),
    function() {
        var e, t, n, r, o, i = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            a = [].indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        t = function() {
            function e() {}
            return e.prototype.extend = function(e, t) {
                var n, r;
                for (n in t) r = t[n], null == e[n] && (e[n] = r);
                return e
            }, e.prototype.isMobile = function(e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            }, e.prototype.createEvent = function(e, t, n, r) {
                var o;
                return null == t && (t = !1), null == n && (n = !1), null == r && (r = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, t, n, r)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = e) : o.eventName = e, o
            }, e.prototype.emitEvent = function(e, t) {
                return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
            }, e.prototype.addEvent = function(e, t, n) {
                return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
            }, e.prototype.removeEvent = function(e, t, n) {
                return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
            }, e.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, e
        }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
            function e() {
                this.keys = [], this.values = []
            }
            return e.prototype.get = function(e) {
                var t, n, r, o, i;
                for (i = this.keys, t = r = 0, o = i.length; r < o; t = ++r)
                    if (n = i[t], n === e) return this.values[t]
            }, e.prototype.set = function(e, t) {
                var n, r, o, i, a;
                for (a = this.keys, n = o = 0, i = a.length; o < i; n = ++o)
                    if (r = a[n], r === e) return void(this.values[n] = t);
                return this.keys.push(e), this.values.push(t)
            }, e
        }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
            function e() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return e.notSupported = !0, e.prototype.observe = function() {}, e
        }()), r = this.getComputedStyle || function(e, t) {
            return this.getPropertyValue = function(t) {
                var n;
                return "float" === t && (t = "styleFloat"), o.test(t) && t.replace(o, function(e, t) {
                    return t.toUpperCase()
                }), (null != (n = e.currentStyle) ? n[t] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function() {
            function o(e) {
                null == e && (e = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.resetAnimation = i(this.resetAnimation, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return o.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, o.prototype.init = function() {
                var e;
                return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, o.prototype.start = function() {
                var t, n, r, o;
                if (this.stopped = !1, this.boxes = function() {
                        var e, n, r, o;
                        for (r = this.element.querySelectorAll("." + this.config.boxClass), o = [], e = 0, n = r.length; e < n; e++) t = r[e], o.push(t);
                        return o
                    }.call(this), this.all = function() {
                        var e, n, r, o;
                        for (r = this.boxes, o = [], e = 0, n = r.length; e < n; e++) t = r[e], o.push(t);
                        return o
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (o = this.boxes, n = 0, r = o.length; n < r; n++) t = o[n], this.applyStyle(t, !0);
                if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)),
                    this.config.live) return new e(function(e) {
                    return function(t) {
                        var n, r, o, i, a;
                        for (a = [], n = 0, r = t.length; n < r; n++) i = t[n], a.push(function() {
                            var e, t, n, r;
                            for (n = i.addedNodes || [], r = [], e = 0, t = n.length; e < t; e++) o = n[e], r.push(this.doSync(o));
                            return r
                        }.call(e));
                        return a
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }, o.prototype.stop = function() {
                if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
            }, o.prototype.sync = function(t) {
                if (e.notSupported) return this.doSync(this.element)
            }, o.prototype.doSync = function(e) {
                var t, n, r, o, i;
                if (null == e && (e = this.element), 1 === e.nodeType) {
                    for (e = e.parentNode || e, o = e.querySelectorAll("." + this.config.boxClass), i = [], n = 0, r = o.length; n < r; n++) t = o[n], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), i.push(this.scrolled = !0)) : i.push(void 0);
                    return i
                }
            }, o.prototype.show = function(e) {
                return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
            }, o.prototype.applyStyle = function(e, t) {
                var n, r, o;
                return r = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), o = e.getAttribute("data-wow-iteration"), this.animate(function(i) {
                    return function() {
                        return i.customStyle(e, t, r, n, o)
                    }
                }(this))
            }, o.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(e) {
                    return window.requestAnimationFrame(e)
                } : function(e) {
                    return e()
                }
            }(), o.prototype.resetStyle = function() {
                var e, t, n, r, o;
                for (r = this.boxes, o = [], t = 0, n = r.length; t < n; t++) e = r[t], o.push(e.style.visibility = "visible");
                return o
            }, o.prototype.resetAnimation = function(e) {
                var t;
                if (e.type.toLowerCase().indexOf("animationend") >= 0) return t = e.target || e.srcElement, t.className = t.className.replace(this.config.animateClass, "").trim()
            }, o.prototype.customStyle = function(e, t, n, r, o) {
                return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                    animationDuration: n
                }), r && this.vendorSet(e.style, {
                    animationDelay: r
                }), o && this.vendorSet(e.style, {
                    animationIterationCount: o
                }), this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }), e
            }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(e, t) {
                var n, r, o, i;
                r = [];
                for (n in t) o = t[n], e["" + n] = o, r.push(function() {
                    var t, r, a, l;
                    for (a = this.vendors, l = [], t = 0, r = a.length; t < r; t++) i = a[t], l.push(e["" + i + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                    return l
                }.call(this));
                return r
            }, o.prototype.vendorCSS = function(e, t) {
                var n, o, i, a, l, s;
                for (l = r(e), a = l.getPropertyCSSValue(t), i = this.vendors, n = 0, o = i.length; n < o; n++) s = i[n], a = a || l.getPropertyCSSValue("-" + s + "-" + t);
                return a
            }, o.prototype.animationName = function(e) {
                var t;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (n) {
                    t = r(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }, o.prototype.cacheAnimationName = function(e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }, o.prototype.cachedAnimationName = function(e) {
                return this.animationNameCache.get(e)
            }, o.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, o.prototype.scrollCallback = function() {
                var e;
                if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                        var t, n, r, o;
                        for (r = this.boxes, o = [], t = 0, n = r.length; t < n; t++) e = r[t], e && (this.isVisible(e) ? this.show(e) : o.push(e));
                        return o
                    }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
            }, o.prototype.offsetTop = function(e) {
                for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                return t
            }, o.prototype.isVisible = function(e) {
                var t, n, r, o, i;
                return n = e.getAttribute("data-wow-offset") || this.config.offset, i = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = i + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, r = this.offsetTop(e), t = r + e.clientHeight, r <= o && t >= i
            }, o.prototype.util = function() {
                return null != this._util ? this._util : this._util = new t
            }, o.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, o
        }()
    }.call(this), $.lazyLoadXT.autoInit = !1, $.lazyLoadXT.edgeY = 1e3, $.lazyLoadXT.updateEvent += " lazyupdate", $.lazyLoadXT.oninit = {}, $.lazyLoadXT.onshow = {}, $.lazyLoadXT.onload = {}, $.lazyLoadXT.onerror = {}, plp.lazy = {
        add: function(e, t, n) {
            return e.addClass("lazy").lazyLoadXT({
                edgeY: void 0 !== n ? n : plp.lazy.distance()
            }).one("lazyshow", function(e) {
                var n = $(this);
                n.removeClass("lazy"), t(n), e.stopPropagation()
            }), plp.lazy.update(), e
        },
        trigger: function(e) {
            return e.trigger("lazyshow")
        },
        force: function(e) {
            return e = e || $("div.area"), plp.lazy.trigger(e.find(".lazy")), e
        },
        update: function() {
            $(document).trigger("lazyupdate")
        },
        distance: function(e) {
            return e && ($.lazyLoadXT.edgeY = 1 * e, plp.lazy.update()), $.lazyLoadXT.edgeY
        }
    }, $(function() {
        function e(e) {
            var t = e.w << 16 | e.h << 2 | e.c,
                n = e.b << 16 | e.q << 6,
                r = t.toString(29),
                o = n.toString(29),
                i = +t.toString().substring(0, 1) + +n.toString().substring(0, 1);
            return i.toString(29) + r + o + (r.length.toString(29) + o.length.toString(29))
        }

        function t(e) {
            var t = e.indexOf("//u.platformalp.ru") > -1,
                n = e.indexOf("//u0.platformalp.ru") > -1,
                r = e.indexOf("//u1.platformalp.ru") > -1,
                o = e.indexOf("//u2.platformalp.ru") > -1,
                i = e.indexOf("//u3.platformalp.ru") > -1,
                a = e.indexOf("//u4.platformalp.ru") > -1,
                l = e.indexOf("//u5.platformalp.ru") > -1,
                s = e.indexOf("//u6.platformalp.ru") > -1,
                u = e.indexOf("//u7.platformalp.ru") > -1,
                c = e.indexOf("//u8.platformalp.ru") > -1,
                d = e.indexOf("//u9.platformalp.ru") > -1;
            return t || n || r || o || i || a || l || s || u || c || d
        }

        function n(t, n) {
            plp.isRetina() && n.retina && (n.width2 *= 2, n.height2 *= 2);
            var r = Math.min(n.width1, 2e3),
                o = Math.min(n.height1, 2e3);
            n.width2 > r && (n.height2 = r / n.width2 * n.height2, n.width2 = r), n.height2 > o && (n.width2 = o / n.height2 * n.width2, n.height2 = o);
            var i = e({
                h: n.height2,
                w: n.width2
            });
            return t.replace(/(.+?.\w+)\/(.+)/, "$1/s/" + i + "/$2")
        }
        plp.lazy.add($("[data-lazy-iframe]"), function(e) {
            e.attr("src", e.attr("data-lazy-iframe")), e.removeAttr("data-lazy-iframe"), e.addClass("lazy-loading"), e.on("load", function() {
                e.removeClass("lazy-loading")
            }).on("error", function() {
                e.removeClass("lazy-loading")
            })
        }), plp.lazy.add($("[data-lazy-image]"), function(e) {
            var r = e.attr("data-lazy-image");
            if (t(r) && "true" !== e.attr("data-lazy-image_noscale")) {
                var o = e.attr("data-lazy-image_size").split(","),
                    i = {
                        retina: "true" !== e.attr("data-lazy-image_nohd"),
                        width1: 1 * o[0],
                        width2: 1 * o[0],
                        height1: 1 * o[1],
                        height2: 1 * o[1]
                    },
                    a = e.attr("data-lazy-image_detect");
                if ("xs" === plp.screen) {
                    var l = e.attr("data-lazy-image_detect-xs");
                    l && (a = l)
                }
                if ("css-width" === a) i.width2 = e.width(), i.width2 < i.width1 && (i.height2 = i.width2 / i.width1 * i.height1);
                else if ("css-width-height" === a) i.width2 = e.width(), i.height2 = e.height();
                else if ("css-max-height" === a) {
                    var s = parseInt(e.css("max-height"));
                    i.height1 > s ? (i.height2 = s, i.width2 = s / i.height1 * i.width1) : e.css("max-height", i.height2)
                } else if ("css-max-width-max-height" === a) {
                    var u = parseInt(e.css("max-width")),
                        c = parseInt(e.css("max-height"));
                    i.width2 > u && (i.width2 = u, i.height2 = u / i.width1 * i.height1), i.height2 > c && (i.width2 = c / i.height2 * i.width2, i.height2 = c), i.width2 < u && e.css("max-width", i.width2), i.height2 < c && e.css("max-height", i.height2)
                } else if ("css-width-max-height" === a) {
                    i.width2 = e.width(), i.width2 < i.width1 && (i.height2 = i.width2 / i.width1 * i.height1);
                    var c = parseInt(e.css("max-height"));
                    i.height2 > c ? i.height2 = c : e.css("max-height", i.height2)
                } else "fill-width" === a && (i.width2 = e.parent().width(), i.height2 = i.width2 / i.width1 * i.height1);
                r = n(r, i)
            }
            e.data(), e.removeAttr("data-lazy-image"), e.removeAttr("data-lazy-image_size"), e.removeAttr("data-lazy-image_detect"), e.removeAttr("data-lazy-image_nohd"), e.removeAttr("data-lazy-image_noscale"), e.addClass("lazy-loading"), $("<img>").attr("src", r).on("load", function() {
                e.attr("src", r), e.removeClass("lazy-loading")
            }).on("error", function() {
                e.removeClass("lazy-loading")
            })
        }), plp.lazy.add($("[data-lazy-bgimage]"), function(e) {
            var r = e.attr("data-lazy-bgimage");
            if (t(r) && "true" !== e.attr("data-lazy-bgimage_noscale")) {
                var o = e.attr("data-lazy-bgimage_size").split(","),
                    i = {
                        retina: "true" !== e.attr("data-lazy-bgimage_nohd"),
                        width1: 1 * o[0],
                        width2: 1 * o[0],
                        height1: 1 * o[1],
                        height2: 1 * o[1]
                    },
                    a = e.width(),
                    l = e.height(),
                    s = e.css("background-size");
                "cover" === s ? (i.width1 > a && (i.width2 = a, i.height2 = a / i.width1 * i.height1), i.height2 < l && (i.height2 = l, i.width2 = l / i.height1 * i.width1)) : "contain" === s && (i.width2 > a && (i.width2 = a, i.height2 = a / i.width1 * i.height1), i.height2 > l && (i.height2 = l, i.width2 = l / i.height1 * i.width1));
                var r = n(r, i)
            }
            e.data(), e.removeAttr("data-lazy-bgimage"), e.removeAttr("data-lazy-bgimage_size"), e.removeAttr("data-lazy-bgimage_nohd"), e.removeAttr("data-lazy-bgimage_noscale"), e.addClass("lazy-loading"), $("<img>").attr("src", r).on("load", function() {
                e.css("background-image", "url(" + r + ")"), e.removeClass("lazy-loading")
            }).on("error", function() {
                e.removeClass("lazy-loading")
            })
        }), plp.lazy.add($("[data-lazy-all], .lazy-all"), function(e) {
            plp.lazy.force(e)
        })
    }), plp.isRetina = function() {
        if (window.devicePixelRatio > 1) return !0;
        var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return !(!window.matchMedia || !window.matchMedia(e).matches)
    }, $(function() {
        plp.cart = {};
        var e = function(e) {
                var t = e.match(/\d/g);
                if (!t) return 0;
                var n = e.indexOf(t[0]),
                    r = e.lastIndexOf(t[t.length - 1]),
                    o = (e[n], e[r], e.substring(n, r + 1));
                o = o.replace(/[^\d\.\,]+/g, "");
                var i = o.indexOf(".") >= 0,
                    a = o.indexOf(",") >= 0;
                if (i || a) {
                    var t = o.match(/(.+)[\,\.](\d\d)$/);
                    if (t) var l = 1 * t[1].replace(/[\,\.]/g, ""),
                        s = 1 * ("0." + t[2]),
                        u = l + s;
                    else var u = 1 * o.replace(/[\,\.]/g, "")
                } else var u = 1 * o;
                return u
            },
            t = function(e) {
                var t = e.match(/\d/g);
                if (!t) return "%s%";
                e = e.replace(/\&nbsp\;/g, " ");
                var n = e.match(/[\:\-]/);
                n && (e = e.replace(/.*[\:\-]\s*(.*)/, "$1"));
                var r = e.indexOf(t[0]),
                    o = e.lastIndexOf(t[t.length - 1]),
                    i = (e[r], e[o], e.substring(r, o + 1));
                return e.replace(i, "%s%")
            },
            n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            r = $('[data-modal="cart"]'),
            o = r.find(".cont").first(),
            i = o.next();
        o.find('[data-role="itemphoto"]').attr("data-lazy-bgimage", n), plp.lazy.add(r, function() {
            plp.lazy.force(o), plp.lazy.force(i)
        });
        var a = o.find(".node.widget-cart-list").first(),
            l = a.children(".wrapper1").children(".wrapper2"),
            s = l.children(".cont");
        plp.lazy.force(s), a.data("template", s.parent().html()), s.remove();
        var u = $();
        plp.cart.add = function(e) {
            var t = _.filter(e, {
                    type: "title"
                })[0],
                r = _.filter(e, {
                    type: "price"
                })[0],
                o = _.filter(e, {
                    type: "amount"
                })[0],
                i = _.filter(e, {
                    type: "photo"
                })[0],
                s = !1;
            if (_.each(plp.cart.list, function(e, n) {
                    var i = _.filter(e, {
                            type: "title"
                        })[0],
                        a = _.filter(e, {
                            type: "price"
                        })[0],
                        u = _.filter(e, {
                            type: "amount"
                        })[0];
                    t.value === i.value && r.value === a.value && (u.value += 1 * o.value, l.children().eq(n).trigger("setamount", [u.value]), s = !0)
                }), s) return store.set("cart", plp.cart.list), void plp.cart.update();
            plp.cart.list.push(e), store.set("cart", plp.cart.list), plp.cart.update();
            var c = $(a.data("template"));
            l.append(c), c.find('[data-role="setamount"]').val(o.value), c.find('[data-role="itemprice"]').html(r.value), c.find('[data-role="itemname"]').html(t.value), c.find('[data-role="itemphoto"]').css("backgroundImage", 'url("' + (i.value || n) + '")'), u = u.add(c), c.on("setamount", function(e, t) {
                o.value = t, store.set("cart", plp.cart.list), c.find('[data-role="setamount"]').val(t), o.value ? plp.cart.update() : c.trigger("removefromcart")
            }), c.on("removefromcart", function(t) {
                plp.cart.list.splice(plp.cart.list.indexOf(e), 1), store.set("cart", plp.cart.list), c.slideUp(250, function() {
                    c.remove(), u = u.not(c), plp.cart.update()
                })
            }), c.find('[data-role="removefromcart"]').on("click", function() {
                c.trigger("removefromcart")
            }), c.find('[data-role="setamount"]').on("change", function() {
                var e = 1 * $(this).val();
                c.trigger("setamount", [e])
            }), c.find('[data-role="increaseamount"]').on("click", function() {
                var e = o.value + 1;
                c.trigger("setamount", [e])
            }), c.find('[data-role="decreaseamount"]').on("click", function() {
                var e = o.value - 1;
                c.trigger("setamount", [e])
            })
        }, plp.cart.update = function() {
            var n, r = 0,
                a = 0;
            return _.each(plp.cart.list, function(o) {
                var i = 1 * _.filter(o, {
                        type: "amount"
                    })[0].value,
                    l = _.filter(o, {
                        type: "price"
                    })[0].value;
                r += i, a += e(l) * i, n = n || t(l)
            }), $('.btn[data-modal="cart"] *').each(function() {
                $(this).contents().each(function() {
                    3 === this.nodeType && this.data.match(/\d/) && (this.data = this.data.replace(/\d+/, r))
                })
            }), plp.cart.list.length ? (o.show(), i.hide(), void $('[data-role="carttotal"] span').html(n.replace("%s%", a))) : ($('[data-role="carttotal"] span').html("-"), i.show(), void o.hide())
        }, plp.cart.empty = function() {
            u.trigger("removefromcart")
        }, plp.cart.list = [], (store.get("cart") || []).forEach(function(e) {
            plp.cart.add(e)
        }), plp.cart.update(), $(document.body).on("click", '[data-action="addtocart"]', function(e) {
            var t = $(e.currentTarget).closest("[data-item]");
            if (!t.length) return void swal("Товар не найден", "Кнопка должна находиться в карточке товара.", "error");
            var n = _.cloneDeep(t.data("item")),
                r = t.find('[data-role="setamount"]');
            if (r.length) var o = {
                name: "Количество",
                type: "amount",
                value: 1 * r.val() || 1
            };
            else var o = {
                name: "Количество",
                type: "amount",
                value: 1
            };
            if (n.push(o), !t.find('[data-role="image"]').length) {
                var i = _.filter(n, {
                    type: "photo"
                })[0];
                i.value = !1
            }
            plp.cart.add(n), swal({
                title: "Добавлено в корзину!",
                type: "success",
                showCancelButton: !0,
                cancelButtonText: "ОК",
                confirmButtonText: "Открыть корзину"
            }, function() {
                $('.btn[data-modal="cart"]').first().click()
            })
        })
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.store = t()
    }(this, function() {
        function e() {
            try {
                return i in r && r[i]
            } catch (e) {
                return !1
            }
        }
        var t, n = {},
            r = "undefined" != typeof window ? window : global,
            o = r.document,
            i = "localStorage",
            a = "script";
        if (n.disabled = !1, n.version = "1.3.20", n.set = function(e, t) {}, n.get = function(e, t) {}, n.has = function(e) {
                return void 0 !== n.get(e)
            }, n.remove = function(e) {}, n.clear = function() {}, n.transact = function(e, t, r) {
                null == r && (r = t, t = null), null == t && (t = {});
                var o = n.get(e, t);
                r(o), n.set(e, o)
            }, n.getAll = function() {}, n.forEach = function() {}, n.serialize = function(e) {
                return JSON.stringify(e)
            }, n.deserialize = function(e) {
                if ("string" == typeof e) try {
                    return JSON.parse(e)
                } catch (t) {
                    return e || void 0
                }
            }, e()) t = r[i], n.set = function(e, r) {
            return void 0 === r ? n.remove(e) : (t.setItem(e, n.serialize(r)), r)
        }, n.get = function(e, r) {
            var o = n.deserialize(t.getItem(e));
            return void 0 === o ? r : o
        }, n.remove = function(e) {
            t.removeItem(e)
        }, n.clear = function() {
            t.clear()
        }, n.getAll = function() {
            var e = {};
            return n.forEach(function(t, n) {
                e[t] = n
            }), e
        }, n.forEach = function(e) {
            for (var r = 0; r < t.length; r++) {
                var o = t.key(r);
                e(o, n.get(o))
            }
        };
        else if (o && o.documentElement.addBehavior) {
            var l, s;
            try {
                s = new ActiveXObject("htmlfile"), s.open(), s.write("<" + a + ">document.w=window</" + a + '><iframe src="/favicon.ico"></iframe>'), s.close(), l = s.w.frames[0].document, t = l.createElement("div")
            } catch (u) {
                t = o.createElement("div"), l = o.body
            }
            var c = function(e) {
                    return function() {
                        var r = Array.prototype.slice.call(arguments, 0);
                        r.unshift(t), l.appendChild(t), t.addBehavior("#default#userData"), t.load(i);
                        var o = e.apply(n, r);
                        return l.removeChild(t), o
                    }
                },
                d = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
                f = function(e) {
                    return e.replace(/^d/, "___$&").replace(d, "___")
                };
            n.set = c(function(e, t, r) {
                return t = f(t), void 0 === r ? n.remove(t) : (e.setAttribute(t, n.serialize(r)), e.save(i), r)
            }), n.get = c(function(e, t, r) {
                t = f(t);
                var o = n.deserialize(e.getAttribute(t));
                return void 0 === o ? r : o
            }), n.remove = c(function(e, t) {
                t = f(t), e.removeAttribute(t), e.save(i)
            }), n.clear = c(function(e) {
                var t = e.XMLDocument.documentElement.attributes;
                e.load(i);
                for (var n = t.length - 1; n >= 0; n--) e.removeAttribute(t[n].name);
                e.save(i)
            }), n.getAll = function(e) {
                var t = {};
                return n.forEach(function(e, n) {
                    t[e] = n
                }), t
            }, n.forEach = c(function(e, t) {
                for (var r, o = e.XMLDocument.documentElement.attributes, i = 0; r = o[i]; ++i) t(r.name, n.deserialize(e.getAttribute(r.name)))
            })
        }
        try {
            var p = "__storejs__";
            n.set(p, p), n.get(p) != p && (n.disabled = !0), n.remove(p)
        } catch (u) {
            n.disabled = !0
        }
        return n.enabled = !n.disabled, n
    }),
    function(e, t, n) {
        function r(n, r, o) {
            var i = t.createElement(n);
            return r && (i.id = Z + r), o && (i.style.cssText = o), e(i)
        }

        function o() {
            return n.innerHeight ? n.innerHeight : e(n).height()
        }

        function i(t, n) {
            n !== Object(n) && (n = {}), this.cache = {}, this.el = t, this.value = function(t) {
                var r;
                return void 0 === this.cache[t] && (r = e(this.el).attr("data-cbox-" + t), void 0 !== r ? this.cache[t] = r : void 0 !== n[t] ? this.cache[t] = n[t] : void 0 !== K[t] && (this.cache[t] = K[t])), this.cache[t]
            }, this.get = function(t) {
                var n = this.value(t);
                return e.isFunction(n) ? n.call(this.el, this) : n
            }
        }

        function a(e) {
            var t = k.length,
                n = (F + e) % t;
            return n < 0 ? t + n : n
        }

        function l(e, t) {
            return Math.round((/%/.test(e) ? ("x" === t ? S.width() : o()) / 100 : 1) * parseInt(e, 10))
        }

        function s(e, t) {
            return e.get("photo") || e.get("photoRegex").test(t)
        }

        function u(e, t) {
            return e.get("retinaUrl") && n.devicePixelRatio > 1 ? t.replace(e.get("photoRegex"), e.get("retinaSuffix")) : t
        }

        function c(e) {
            "contains" in b[0] && !b[0].contains(e.target) && e.target !== g[0] && (e.stopPropagation(), b.focus())
        }

        function d(e) {
            d.str !== e && (b.add(g).removeClass(d.str).addClass(e), d.str = e)
        }

        function f(t) {
            F = 0, t && t !== !1 && "nofollow" !== t ? (k = e("." + ee).filter(function() {
                var n = e.data(this, G),
                    r = new i(this, n);
                return r.get("rel") === t
            }), F = k.index(M.el), F === -1 && (k = k.add(M.el), F = k.length - 1)) : k = e(M.el)
        }

        function p(n) {
            e(t).trigger(n), le.triggerHandler(n)
        }

        function h(n) {
            var o;
            if (!W) {
                if (o = e(n).data("colorbox"), M = new i(n, o), f(M.get("rel")), !H) {
                    H = U = !0, d(M.get("className")), b.css({
                        visibility: "hidden",
                        display: "block",
                        opacity: ""
                    }), Y = r(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), x.css({
                        width: "",
                        height: ""
                    }).append(Y), L = T.height() + j.height() + x.outerHeight(!0) - x.height(), z = P.width() + C.width() + x.outerWidth(!0) - x.width(), B = Y.outerHeight(!0), R = Y.outerWidth(!0);
                    var a = l(M.get("initialWidth"), "x"),
                        s = l(M.get("initialHeight"), "y"),
                        u = M.get("maxWidth"),
                        h = M.get("maxHeight");
                    M.w = (u !== !1 ? Math.min(a, l(u, "x")) : a) - R - z, M.h = (h !== !1 ? Math.min(s, l(h, "y")) : s) - B - L, Y.css({
                        width: "",
                        height: M.h
                    }), X.position(), p(te), M.get("onOpen"), $.add(A).hide(), b.focus(), M.get("trapFocus") && t.addEventListener && (t.addEventListener("focus", c, !0), le.one(ie, function() {
                        t.removeEventListener("focus", c, !0)
                    })), M.get("returnFocus") && le.one(ie, function() {
                        e(M.el).focus()
                    })
                }
                g.css({
                    opacity: parseFloat(M.get("opacity")) || "",
                    cursor: M.get("overlayClose") ? "pointer" : "",
                    visibility: "visible"
                }).show(), M.get("closeButton") ? N.html(M.get("close")).appendTo(x) : N.appendTo("<div/>"), v()
            }
        }

        function m() {
            !b && t.body && (J = !1, S = e(n), b = r(se).attr({
                id: G,
                "class": e.support.opacity === !1 ? Z + "IE" : "",
                role: "dialog",
                tabindex: "-1"
            }).hide(), g = r(se, "Overlay").hide(), E = e([r(se, "LoadingOverlay")[0], r(se, "LoadingGraphic")[0]]), w = r(se, "Wrapper"), x = r(se, "Content").append(A = r(se, "Title"), Q = r(se, "Current"), O = e('<button type="button"/>').attr({
                id: Z + "Previous"
            }), D = e('<button type="button"/>').attr({
                id: Z + "Next"
            }), I = r("button", "Slideshow"), E), N = e('<button type="button"/>').attr({
                id: Z + "Close"
            }), w.append(r(se).append(r(se, "TopLeft"), T = r(se, "TopCenter"), r(se, "TopRight")), r(se, !1, "clear:left").append(P = r(se, "MiddleLeft"), x, C = r(se, "MiddleRight")), r(se, !1, "clear:left").append(r(se, "BottomLeft"), j = r(se, "BottomCenter"), r(se, "BottomRight"))).find("div div").css({
                "float": "left"
            }), _ = r(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), $ = D.add(O).add(Q).add(I), e(t.body).append(g, b.append(w, _)))
        }

        function y() {
            function n(e) {
                e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), h(this))
            }
            return !!b && (J || (J = !0, D.click(function() {
                X.next()
            }), O.click(function() {
                X.prev()
            }), N.click(function() {
                X.close()
            }), g.click(function() {
                M.get("overlayClose") && X.close()
            }), e(t).bind("keydown." + Z, function(e) {
                var t = e.keyCode;
                H && M.get("escKey") && 27 === t && (e.preventDefault(), X.close()), H && M.get("arrowKey") && k[1] && !e.altKey && (37 === t ? (e.preventDefault(), O.click()) : 39 === t && (e.preventDefault(), D.click()))
            }), e.isFunction(e.fn.on) ? e(t).on("click." + Z, "." + ee, n) : e("." + ee).live("click." + Z, n)), !0)
        }

        function v() {
            var t, o, i, a = X.prep,
                c = ++ue;
            if (U = !0, q = !1, p(ae), p(ne), M.get("onLoad"), M.h = M.get("height") ? l(M.get("height"), "y") - B - L : M.get("innerHeight") && l(M.get("innerHeight"), "y"), M.w = M.get("width") ? l(M.get("width"), "x") - R - z : M.get("innerWidth") && l(M.get("innerWidth"), "x"), M.mw = M.w, M.mh = M.h, M.get("maxWidth") && (M.mw = l(M.get("maxWidth"), "x") - R - z, M.mw = M.w && M.w < M.mw ? M.w : M.mw), M.get("maxHeight") && (M.mh = l(M.get("maxHeight"), "y") - B - L, M.mh = M.h && M.h < M.mh ? M.h : M.mh), t = M.get("href"), V = setTimeout(function() {
                    E.show()
                }, 100), M.get("inline")) {
                var d = e(t);
                i = e("<div>").hide().insertBefore(d), le.one(ae, function() {
                    i.replaceWith(d)
                }), a(d)
            } else M.get("iframe") ? a(" ") : M.get("html") ? a(M.get("html")) : s(M, t) ? (t = u(M, t), q = new Image, e(q).addClass(Z + "Photo").bind("error", function() {
                a(r(se, "Error").html(M.get("imgError")))
            }).one("load", function() {
                c === ue && setTimeout(function() {
                    var t;
                    e.each(["alt", "longdesc", "aria-describedby"], function(t, n) {
                        var r = e(M.el).attr(n) || e(M.el).attr("data-" + n);
                        r && q.setAttribute(n, r)
                    }), M.get("retinaImage") && n.devicePixelRatio > 1 && (q.height = q.height / n.devicePixelRatio, q.width = q.width / n.devicePixelRatio), M.get("scalePhotos") && (o = function() {
                        q.height -= q.height * t, q.width -= q.width * t
                    }, M.mw && q.width > M.mw && (t = (q.width - M.mw) / q.width, o()), M.mh && q.height > M.mh && (t = (q.height - M.mh) / q.height, o())), M.h && (q.style.marginTop = Math.max(M.mh - q.height, 0) / 2 + "px"), k[1] && (M.get("loop") || k[F + 1]) && (q.style.cursor = "pointer", q.onclick = function() {
                        X.next()
                    }), q.style.width = q.width + "px", q.style.height = q.height + "px", a(q)
                }, 1)
            }), q.src = t) : t && _.load(t, M.get("data"), function(t, n) {
                c === ue && a("error" === n ? r(se, "Error").html(M.get("xhrError")) : e(this).contents())
            })
        }
        var g, b, w, x, T, P, C, j, k, S, Y, _, E, A, Q, I, D, O, N, $, M, L, z, B, R, F, q, H, U, W, V, X, J, K = {
                html: !1,
                photo: !1,
                iframe: !1,
                inline: !1,
                transition: "elastic",
                speed: 300,
                fadeOut: 300,
                width: !1,
                initialWidth: "600",
                innerWidth: !1,
                maxWidth: !1,
                height: !1,
                initialHeight: "450",
                innerHeight: !1,
                maxHeight: !1,
                scalePhotos: !0,
                scrolling: !0,
                opacity: .9,
                preloading: !0,
                className: !1,
                overlayClose: !0,
                escKey: !0,
                arrowKey: !0,
                top: !1,
                bottom: !1,
                left: !1,
                right: !1,
                fixed: !1,
                data: void 0,
                closeButton: !0,
                fastIframe: !0,
                open: !1,
                reposition: !0,
                loop: !0,
                slideshow: !1,
                slideshowAuto: !0,
                slideshowSpeed: 2500,
                slideshowStart: "start slideshow",
                slideshowStop: "stop slideshow",
                photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
                retinaImage: !1,
                retinaUrl: !1,
                retinaSuffix: "@2x.$1",
                current: "image {current} of {total}",
                previous: "previous",
                next: "next",
                close: "close",
                xhrError: "This content failed to load.",
                imgError: "This image failed to load.",
                returnFocus: !0,
                trapFocus: !0,
                onOpen: !1,
                onLoad: !1,
                onComplete: !1,
                onCleanup: !1,
                onClosed: !1,
                rel: function() {
                    return this.rel
                },
                href: function() {
                    return e(this).attr("href")
                },
                title: function() {
                    return this.title
                }
            },
            G = "colorbox",
            Z = "cbox",
            ee = Z + "Element",
            te = Z + "_open",
            ne = Z + "_load",
            re = Z + "_complete",
            oe = Z + "_cleanup",
            ie = Z + "_closed",
            ae = Z + "_purge",
            le = e("<a/>"),
            se = "div",
            ue = 0,
            ce = {},
            de = function() {
                function e() {
                    clearTimeout(a)
                }

                function t() {
                    (M.get("loop") || k[F + 1]) && (e(), a = setTimeout(X.next, M.get("slideshowSpeed")))
                }

                function n() {
                    I.html(M.get("slideshowStop")).unbind(s).one(s, r), le.bind(re, t).bind(ne, e), b.removeClass(l + "off").addClass(l + "on")
                }

                function r() {
                    e(), le.unbind(re, t).unbind(ne, e), I.html(M.get("slideshowStart")).unbind(s).one(s, function() {
                        X.next(), n()
                    }), b.removeClass(l + "on").addClass(l + "off")
                }

                function o() {
                    i = !1, I.hide(), e(), le.unbind(re, t).unbind(ne, e), b.removeClass(l + "off " + l + "on")
                }
                var i, a, l = Z + "Slideshow_",
                    s = "click." + Z;
                return function() {
                    i ? M.get("slideshow") || (le.unbind(oe, o), o()) : M.get("slideshow") && k[1] && (i = !0, le.one(oe, o), M.get("slideshowAuto") ? n() : r(), I.show())
                }
            }();
        e.colorbox || (e(m), X = e.fn[G] = e[G] = function(t, n) {
            var r, o = this;
            if (t = t || {}, e.isFunction(o)) o = e("<a/>"), t.open = !0;
            else if (!o[0]) return o;
            return o[0] ? (m(), y() && (n && (t.onComplete = n), o.each(function() {
                var n = e.data(this, G) || {};
                e.data(this, G, e.extend(n, t))
            }).addClass(ee), r = new i(o[0], t), r.get("open") && h(o[0])), o) : o
        }, X.position = function(t, n) {
            function r() {
                T[0].style.width = j[0].style.width = x[0].style.width = parseInt(b[0].style.width, 10) - z + "px", x[0].style.height = P[0].style.height = C[0].style.height = parseInt(b[0].style.height, 10) - L + "px"
            }
            var i, a, s, u = 0,
                c = 0,
                d = b.offset();
            if (S.unbind("resize." + Z), b.css({
                    top: -9e4,
                    left: -9e4
                }), a = S.scrollTop(), s = S.scrollLeft(), M.get("fixed") ? (d.top -= a, d.left -= s, b.css({
                    position: "fixed"
                })) : (u = a, c = s, b.css({
                    position: "absolute"
                })), c += M.get("right") !== !1 ? Math.max(S.width() - M.w - R - z - l(M.get("right"), "x"), 0) : M.get("left") !== !1 ? l(M.get("left"), "x") : Math.round(Math.max(S.width() - M.w - R - z, 0) / 2), u += M.get("bottom") !== !1 ? Math.max(o() - M.h - B - L - l(M.get("bottom"), "y"), 0) : M.get("top") !== !1 ? l(M.get("top"), "y") : Math.round(Math.max(o() - M.h - B - L, 0) / 2), b.css({
                    top: d.top,
                    left: d.left,
                    visibility: "visible"
                }), w[0].style.width = w[0].style.height = "9999px", i = {
                    width: M.w + R + z,
                    height: M.h + B + L,
                    top: u,
                    left: c
                }, t) {
                var f = 0;
                e.each(i, function(e) {
                    if (i[e] !== ce[e]) return void(f = t)
                }), t = f
            }
            ce = i, t || b.css(i), b.dequeue().animate(i, {
                duration: t || 0,
                complete: function() {
                    r(), U = !1, w[0].style.width = M.w + R + z + "px", w[0].style.height = M.h + B + L + "px", M.get("reposition") && setTimeout(function() {
                        S.bind("resize." + Z, X.position)
                    }, 1), n && n()
                },
                step: r
            })
        }, X.resize = function(e) {
            var t;
            H && (e = e || {}, e.width && (M.w = l(e.width, "x") - R - z), e.innerWidth && (M.w = l(e.innerWidth, "x")), Y.css({
                width: M.w
            }), e.height && (M.h = l(e.height, "y") - B - L), e.innerHeight && (M.h = l(e.innerHeight, "y")), e.innerHeight || e.height || (t = Y.scrollTop(), Y.css({
                height: "auto"
            }), M.h = Y.height()), Y.css({
                height: M.h
            }), t && Y.scrollTop(t), X.position("none" === M.get("transition") ? 0 : M.get("speed")))
        }, X.prep = function(n) {
            function o() {
                return M.w = M.w || Y.width(), M.w = M.mw && M.mw < M.w ? M.mw : M.w, M.w
            }

            function l() {
                return M.h = M.h || Y.height(), M.h = M.mh && M.mh < M.h ? M.mh : M.h, M.h
            }
            if (H) {
                var c, f = "none" === M.get("transition") ? 0 : M.get("speed");
                Y.remove(), Y = r(se, "LoadedContent").append(n), Y.hide().appendTo(_.show()).css({
                    width: o(),
                    overflow: M.get("scrolling") ? "auto" : "hidden"
                }).css({
                    height: l()
                }).prependTo(x), _.hide(), e(q).css({
                    "float": "none"
                }), d(M.get("className")), c = function() {
                    function n() {
                        e.support.opacity === !1 && b[0].style.removeAttribute("filter")
                    }
                    var r, o, l = k.length;
                    H && (o = function() {
                        clearTimeout(V), E.hide(), p(re), M.get("onComplete")
                    }, A.html(M.get("title")).show(), Y.show(), l > 1 ? ("string" == typeof M.get("current") && Q.html(M.get("current").replace("{current}", F + 1).replace("{total}", l)).show(), D[M.get("loop") || F < l - 1 ? "show" : "hide"]().html(M.get("next")), O[M.get("loop") || F ? "show" : "hide"]().html(M.get("previous")), de(), M.get("preloading") && e.each([a(-1), a(1)], function() {
                        var n, r = k[this],
                            o = new i(r, e.data(r, G)),
                            a = o.get("href");
                        a && s(o, a) && (a = u(o, a), n = t.createElement("img"), n.src = a)
                    })) : $.hide(), M.get("iframe") ? (r = t.createElement("iframe"), "frameBorder" in r && (r.frameBorder = 0), "allowTransparency" in r && (r.allowTransparency = "true"), M.get("scrolling") || (r.scrolling = "no"), e(r).attr({
                        src: M.get("href"),
                        name: (new Date).getTime(),
                        "class": Z + "Iframe",
                        allowFullScreen: !0
                    }).one("load", o).appendTo(Y), le.one(ae, function() {
                        r.src = "//about:blank"
                    }), M.get("fastIframe") && e(r).trigger("load")) : o(), "fade" === M.get("transition") ? b.fadeTo(f, 1, n) : n())
                }, "fade" === M.get("transition") ? b.fadeTo(f, 0, function() {
                    X.position(0, c)
                }) : X.position(f, c)
            }
        }, X.next = function() {
            !U && k[1] && (M.get("loop") || k[F + 1]) && (F = a(1), h(k[F]))
        }, X.prev = function() {
            !U && k[1] && (M.get("loop") || F) && (F = a(-1), h(k[F]))
        }, X.close = function() {
            H && !W && (W = !0, H = !1, p(oe), M.get("onCleanup"), S.unbind("." + Z), g.fadeTo(M.get("fadeOut") || 0, 0), b.stop().fadeTo(M.get("fadeOut") || 0, 0, function() {
                b.hide(), g.hide(), p(ae), Y.remove(), setTimeout(function() {
                    W = !1, p(ie), M.get("onClosed")
                }, 1)
            }))
        }, X.remove = function() {
            b && (b.stop(), e.colorbox.close(), b.stop().remove(), g.remove(), W = !1, b = null, e("." + ee).removeData(G).removeClass(ee), e(t).unbind("click." + Z).unbind("keydown." + Z))
        }, X.element = function() {
            return e(M.el)
        }, X.settings = K)
    }(jQuery, document, window),
    function(e, t) {
        function n() {
            function n(t) {
                var n = t || e.event,
                    r = n.keyCode || n.which;
                if ([9, 13, 32, 27].indexOf(r) !== -1) {
                    for (var o = n.target || n.srcElement, i = -1, a = 0; a < C.length; a++)
                        if (o === C[a]) {
                            i = a;
                            break
                        } 9 === r ? (o = i === -1 ? T : i === C.length - 1 ? C[0] : C[i + 1], D(n), o.focus(), l(o, d.confirmButtonColor)) : (o = 13 === r || 32 === r ? i === -1 ? T : void 0 : 27 !== r || P.hidden || "none" === P.style.display ? void 0 : P, void 0 !== o && I(o, n))
                }
            }

            function a(t) {
                var n = t || e.event,
                    r = n.target || n.srcElement,
                    o = n.relatedTarget,
                    i = x(m, "visible");
                if (i) {
                    var a = -1;
                    if (null !== o) {
                        for (var l = 0; l < C.length; l++)
                            if (o === C[l]) {
                                a = l;
                                break
                            } a === -1 && r.focus()
                    } else h = r
                }
            }
            if (void 0 === arguments[0]) return e.console.error("sweetAlert expects at least 1 attribute!"), !1;
            var d = i({}, g);
            switch (typeof arguments[0]) {
                case "string":
                    d.title = arguments[0], d.text = arguments[1] || "", d.type = arguments[2] || "";
                    break;
                case "object":
                    if (void 0 === arguments[0].title) return e.console.error('Missing "title" argument!'), !1;
                    d.title = arguments[0].title, d.text = arguments[0].text || g.text, d.type = arguments[0].type || g.type, d.customClass = arguments[0].customClass || d.customClass, d.allowOutsideClick = arguments[0].allowOutsideClick || g.allowOutsideClick, d.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : g.showCancelButton, d.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : g.closeOnConfirm, d.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : g.closeOnCancel, d.timer = arguments[0].timer || g.timer, d.confirmButtonText = g.showCancelButton ? "Confirm" : g.confirmButtonText, d.confirmButtonText = arguments[0].confirmButtonText || g.confirmButtonText, d.confirmButtonColor = arguments[0].confirmButtonColor || g.confirmButtonColor, d.cancelButtonText = arguments[0].cancelButtonText || g.cancelButtonText, d.imageUrl = arguments[0].imageUrl || g.imageUrl, d.imageSize = arguments[0].imageSize || g.imageSize, d.doneFunction = arguments[1] || null;
                    break;
                default:
                    return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
            }
            r(d), c(), s();
            for (var m = b(), y = function(t) {
                    var n = t || e.event,
                        r = n.target || n.srcElement,
                        i = "confirm" === r.className,
                        a = x(m, "visible"),
                        l = d.doneFunction && "true" === m.getAttribute("data-has-done-function");
                    switch (n.type) {
                        case "mouseover":
                            i && (r.style.backgroundColor = o(d.confirmButtonColor, -.04));
                            break;
                        case "mouseout":
                            i && (r.style.backgroundColor = d.confirmButtonColor);
                            break;
                        case "mousedown":
                            i && (r.style.backgroundColor = o(d.confirmButtonColor, -.14));
                            break;
                        case "mouseup":
                            i && (r.style.backgroundColor = o(d.confirmButtonColor, -.04));
                            break;
                        case "focus":
                            var s = m.querySelector("button.confirm"),
                                c = m.querySelector("button.cancel");
                            i ? c.style.boxShadow = "none" : s.style.boxShadow = "none";
                            break;
                        case "click":
                            if (i && l && a) d.doneFunction(!0), d.closeOnConfirm && u();
                            else if (l && a) {
                                var f = String(d.doneFunction).replace(/\s/g, ""),
                                    p = "function(" === f.substring(0, 9) && ")" !== f.substring(9, 10);
                                p && d.doneFunction(!1), d.closeOnCancel && u()
                            } else u()
                    }
                }, v = m.querySelectorAll("button"), w = 0; w < v.length; w++) v[w].onclick = y, v[w].onmouseover = y, v[w].onmouseout = y, v[w].onmousedown = y, v[w].onfocus = y;
            f = t.onclick, t.onclick = function(t) {
                var n = t || e.event,
                    r = n.target || n.srcElement,
                    o = m === r,
                    i = _(m, r),
                    a = x(m, "visible"),
                    l = "true" === m.getAttribute("data-allow-ouside-click");
                !o && !i && a && l && u()
            };
            var T = m.querySelector("button.confirm"),
                P = m.querySelector("button.cancel"),
                C = m.querySelectorAll("button:not([type=hidden])");
            p = e.onkeydown, e.onkeydown = n, T.onblur = a, P.onblur = a, e.onfocus = function() {
                e.setTimeout(function() {
                    void 0 !== h && (h.focus(), h = void 0)
                }, 0)
            }
        }

        function r(t) {
            var n = b(),
                r = n.querySelector("h2"),
                o = n.querySelector("p"),
                i = n.querySelector("button.cancel"),
                a = n.querySelector("button.confirm");
            if (r.innerHTML = C(t.title).split("\n").join("<br>"), o.innerHTML = C(t.text || "").split("\n").join("<br>"), t.text && k(o), t.customClass && T(n, t.customClass), Y(n.querySelectorAll(".icon")), t.type) {
                for (var s = !1, u = 0; u < v.length; u++)
                    if (t.type === v[u]) {
                        s = !0;
                        break
                    } if (!s) return e.console.error("Unknown alert type: " + t.type), !1;
                var c = n.querySelector(".icon." + t.type);
                switch (k(c), t.type) {
                    case "success":
                        T(c, "animate"), T(c.querySelector(".tip"), "animateSuccessTip"), T(c.querySelector(".long"), "animateSuccessLong");
                        break;
                    case "error":
                        T(c, "animateErrorIcon"), T(c.querySelector(".x-mark"), "animateXMark");
                        break;
                    case "warning":
                        T(c, "pulseWarning"), T(c.querySelector(".body"), "pulseWarningIns"), T(c.querySelector(".dot"), "pulseWarningIns");
                }
            }
            if (t.imageUrl) {
                var d = n.querySelector(".icon.custom");
                d.style.backgroundImage = "url(" + t.imageUrl + ")", k(d);
                var f = 80,
                    p = 80;
                if (t.imageSize) {
                    var h = t.imageSize.split("x")[0],
                        m = t.imageSize.split("x")[1];
                    h && m ? (f = h, p = m, d.css({
                        width: h + "px",
                        height: m + "px"
                    })) : e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
                }
                d.setAttribute("style", d.getAttribute("style") + "width:" + f + "px; height:" + p + "px")
            }
            n.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? i.style.display = "inline-block" : Y(i), t.cancelButtonText && (i.innerHTML = C(t.cancelButtonText)), t.confirmButtonText && (a.innerHTML = C(t.confirmButtonText)), a.style.backgroundColor = t.confirmButtonColor, l(a, t.confirmButtonColor), n.setAttribute("data-allow-ouside-click", t.allowOutsideClick);
            var y = !!t.doneFunction;
            n.setAttribute("data-has-done-function", y), n.setAttribute("data-timer", t.timer)
        }

        function o(e, t) {
            e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
            var n, r, o = "#";
            for (r = 0; r < 3; r++) n = parseInt(e.substr(2 * r, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), o += ("00" + n).substr(n.length);
            return o
        }

        function i(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        function a(e) {
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
        }

        function l(e, t) {
            var n = a(t);
            e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
        }

        function s() {
            var e = b();
            A(w(), 10), k(e), T(e, "showSweetAlert"), P(e, "hideSweetAlert"), d = t.activeElement;
            var n = e.querySelector("button.confirm");
            n.focus(), setTimeout(function() {
                T(e, "visible")
            }, 500);
            var r = e.getAttribute("data-timer");
            "null" !== r && "" !== r && (e.timeout = setTimeout(function() {
                u()
            }, r))
        }

        function u() {
            var n = b();
            Q(w(), 5), Q(n, 5), P(n, "showSweetAlert"), T(n, "hideSweetAlert"), P(n, "visible");
            var r = n.querySelector(".icon.success");
            P(r, "animate"), P(r.querySelector(".tip"), "animateSuccessTip"), P(r.querySelector(".long"), "animateSuccessLong");
            var o = n.querySelector(".icon.error");
            P(o, "animateErrorIcon"), P(o.querySelector(".x-mark"), "animateXMark");
            var i = n.querySelector(".icon.warning");
            P(i, "pulseWarning"), P(i.querySelector(".body"), "pulseWarningIns"), P(i.querySelector(".dot"), "pulseWarningIns"), e.onkeydown = p, t.onclick = f, d && d.focus(), h = void 0, clearTimeout(n.timeout)
        }

        function c() {
            var e = b();
            e.style.marginTop = E(b())
        }
        var d, f, p, h, m = ".sweet-alert",
            y = ".sweet-overlay",
            v = ["error", "warning", "info", "success"],
            g = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#AEDEF4",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null
            },
            b = function() {
                return t.querySelector(m)
            },
            w = function() {
                return t.querySelector(y)
            },
            x = function(e, t) {
                return new RegExp(" " + t + " ").test(" " + e.className + " ")
            },
            T = function(e, t) {
                x(e, t) || (e.className += " " + t)
            },
            P = function(e, t) {
                var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (x(e, t)) {
                    for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                    e.className = n.replace(/^\s+|\s+$/g, "")
                }
            },
            C = function(e) {
                var n = t.createElement("div");
                return n.appendChild(t.createTextNode(e)), n.innerHTML
            },
            j = function(e) {
                e.style.opacity = "", e.style.display = "block"
            },
            k = function(e) {
                if (e && !e.length) return j(e);
                for (var t = 0; t < e.length; ++t) j(e[t])
            },
            S = function(e) {
                e.style.opacity = "", e.style.display = "none"
            },
            Y = function(e) {
                if (e && !e.length) return S(e);
                for (var t = 0; t < e.length; ++t) S(e[t])
            },
            _ = function(e, t) {
                for (var n = t.parentNode; null !== n;) {
                    if (n === e) return !0;
                    n = n.parentNode
                }
                return !1
            },
            E = function(e) {
                e.style.left = "-9999px", e.style.display = "block";
                var t, n = e.clientHeight;
                return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt(n / 2 + t) + "px"
            },
            A = function(e, t) {
                if (+e.style.opacity < 1) {
                    t = t || 16, e.style.opacity = 0, e.style.display = "block";
                    var n = +new Date,
                        r = function() {
                            e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(r, t)
                        };
                    r()
                }
                e.style.display = "block"
            },
            Q = function(e, t) {
                t = t || 16, e.style.opacity = 1;
                var n = +new Date,
                    r = function() {
                        e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(r, t) : e.style.display = "none"
                    };
                r()
            },
            I = function(n) {
                if (MouseEvent) {
                    var r = new MouseEvent("click", {
                        view: e,
                        bubbles: !1,
                        cancelable: !0
                    });
                    n.dispatchEvent(r)
                } else if (t.createEvent) {
                    var o = t.createEvent("MouseEvents");
                    o.initEvent("click", !1, !1), n.dispatchEvent(o)
                } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
            },
            D = function(t) {
                "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
            };
        e.sweetAlertInitialize = function() {
                var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',
                    n = t.createElement("div");
                n.innerHTML = e, t.body.appendChild(n)
            }, e.sweetAlert = e.swal = function() {
                var e = arguments;
                if (null !== b()) n.apply(this, e);
                else var t = setInterval(function() {
                    null !== b() && (clearInterval(t), n.apply(this, e))
                }, 100)
            }, e.swal.setDefaults = function(e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e) throw new Error("userParams has to be a object");
                i(g, e)
            },
            function() {
                "complete" === t.readyState || "interactive" === t.readyState && t.body ? e.sweetAlertInitialize() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function n() {
                    t.removeEventListener("DOMContentLoaded", n, !1), e.sweetAlertInitialize()
                }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function r() {
                    "complete" === t.readyState && (t.detachEvent("onreadystatechange", r), e.sweetAlertInitialize())
                })
            }()
    }(window, document);
var ytp = ytp || {};
! function(jQuery, ytp) {
    var nAgt = navigator.userAgent;
    if (!jQuery.browser) {
        jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
        else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
        else if (-1 != nAgt.indexOf("Trident")) {
            jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
            var start = nAgt.indexOf("rv:") + 3,
                end = start + 4;
            jQuery.browser.fullVersion = nAgt.substring(start, end)
        } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.fn.CSSAnimate = function(e, t, n, r, o) {
        function i(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function a(e, t) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
        }
        return jQuery.support.CSStransition = function() {
            var e = (document.body || document.documentElement).style;
            return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
        }(), this.each(function() {
            var l = this,
                s = jQuery(this);
            l.id = l.id || "CSSA_" + (new Date).getTime();
            var u = u || {
                type: "noEvent"
            };
            if (l.CSSAIsRunning && l.eventType == u.type) l.CSSqueue = function() {
                s.CSSAnimate(e, t, n, r, o)
            };
            else if (l.CSSqueue = null, l.eventType = u.type, 0 !== s.length && e) {
                if (l.CSSAIsRunning = !0, "function" == typeof t && (o = t, t = jQuery.fx.speeds._default), "function" == typeof n && (o = n, n = 0), "function" == typeof r && (o = r, r = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t)
                    for (var c in jQuery.fx.speeds) {
                        if (t == c) {
                            t = jQuery.fx.speeds[c];
                            break
                        }
                        t = jQuery.fx.speeds._default
                    }
                if (t || (t = jQuery.fx.speeds._default), jQuery.support.CSStransition) {
                    u = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    }, u[r] && (r = u[r]);
                    var d = "",
                        f = "transitionEnd";
                    jQuery.browser.webkit ? (d = "-webkit-", f = "webkitTransitionEnd") : jQuery.browser.mozilla ? (d = "-moz-", f = "transitionend") : jQuery.browser.opera ? (d = "-o-", f = "otransitionend") : jQuery.browser.msie && (d = "-ms-", f = "msTransitionEnd"), u = [];
                    for (p in e) c = p, "transform" === c && (c = d + "transform", e[c] = e[p], delete e[p]), "filter" === c && (c = d + "filter", e[c] = e[p], delete e[p]), "transform-origin" !== c && "origin" !== c || (c = d + "transform-origin", e[c] = e[p], delete e[p]), "x" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " translateX(" + a(e[p], "px") + ")", delete e[p]), "y" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " translateY(" + a(e[p], "px") + ")", delete e[p]), "z" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " translateZ(" + a(e[p], "px") + ")", delete e[p]), "rotate" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " rotate(" + a(e[p], "deg") + ")", delete e[p]), "rotateX" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " rotateX(" + a(e[p], "deg") + ")", delete e[p]), "rotateY" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " rotateY(" + a(e[p], "deg") + ")", delete e[p]), "rotateZ" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " rotateZ(" + a(e[p], "deg") + ")", delete e[p]), "scale" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " scale(" + a(e[p], "") + ")", delete e[p]), "scaleX" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " scaleX(" + a(e[p], "") + ")", delete e[p]), "scaleY" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " scaleY(" + a(e[p], "") + ")", delete e[p]), "scaleZ" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " scaleZ(" + a(e[p], "") + ")", delete e[p]), "skew" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " skew(" + a(e[p], "deg") + ")", delete e[p]), "skewX" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " skewX(" + a(e[p], "deg") + ")", delete e[p]), "skewY" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " skewY(" + a(e[p], "deg") + ")", delete e[p]), "perspective" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " perspective(" + a(e[p], "px") + ")", delete e[p]), 0 > u.indexOf(c) && u.push(i(c));
                    var p = u.join(","),
                        h = function() {
                            s.off(f + "." + l.id), clearTimeout(l.timeout), s.css(d + "transition", ""), "function" == typeof o && o(s), l.called = !0, l.CSSAIsRunning = !1, "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null)
                        },
                        m = {};
                    jQuery.extend(m, e), m[d + "transition-property"] = p, m[d + "transition-duration"] = t + "ms", m[d + "transition-delay"] = n + "ms", m[d + "transition-style"] = "preserve-3d", m[d + "transition-timing-function"] = r, setTimeout(function() {
                        s.one(f + "." + l.id, h), s.css(m)
                    }, 1), l.timeout = setTimeout(function() {
                        s.called || !o ? (s.called = !1, l.CSSAIsRunning = !1) : (s.css(d + "transition", ""), o(s), l.CSSAIsRunning = !1, "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null))
                    }, t + n + 100)
                } else {
                    for (var p in e) "transform" === p && delete e[p], "filter" === p && delete e[p], "transform-origin" === p && delete e[p], "auto" === e[p] && delete e[p];
                    o && "string" != typeof o || (o = "linear"), s.animate(e, t, o)
                }
            }
        })
    }, ! function(e) {
        e.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            init: function(t) {
                return this.each(function() {
                    var n = this,
                        r = e(n);
                    r.addClass("simpleSlider"), n.opt = {}, e.extend(n.opt, e.simpleSlider.defaults, t), e.extend(n.opt, r.data());
                    var o = "h" == n.opt.orientation ? "horizontal" : "vertical",
                        i = e("<div/>").addClass("level").addClass(o);
                    r.prepend(i), n.level = i, r.css({
                        cursor: "default"
                    }), "auto" == n.opt.scale && (n.opt.scale = e(n).outerWidth()), r.updateSliderVal(), n.opt.readonly || (r.on("mousedown", function(e) {
                        n.canSlide = !0, r.updateSliderVal(e)
                    }), e(document).on("mousemove", function(t) {
                        n.canSlide && (e(document).css({
                            cursor: "default"
                        }), r.updateSliderVal(t), t.preventDefault(), t.stopPropagation())
                    }).on("mouseup", function() {
                        e(document).css({
                            cursor: "auto"
                        }), n.canSlide = !1
                    }))
                })
            },
            updateSliderVal: function(t) {
                function n(e, t) {
                    return Math.floor(100 * e / t)
                }
                var r = this,
                    o = r.get(0);
                o.opt.initialval = "number" == typeof o.opt.initialval ? o.opt.initialval : o.opt.initialval(o);
                var i = e(o).outerWidth(),
                    a = e(o).outerHeight();
                o.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - r.offset().left : "number" == typeof t ? t * i / o.opt.scale : o.opt.initialval * i / o.opt.scale, o.y = "object" == typeof t ? t.clientY + document.body.scrollTop - r.offset().top : "number" == typeof t ? (o.opt.scale - o.opt.initialval - t) * a / o.opt.scale : o.opt.initialval * a / o.opt.scale, o.y = r.outerHeight() - o.y, o.scaleX = o.x * o.opt.scale / i, o.scaleY = o.y * o.opt.scale / a, o.outOfRangeX = o.scaleX > o.opt.scale ? o.scaleX - o.opt.scale : o.scaleX < 0 ? o.scaleX : 0, o.outOfRangeY = o.scaleY > o.opt.scale ? o.scaleY - o.opt.scale : o.scaleY < 0 ? o.scaleY : 0, o.outOfRange = "h" == o.opt.orientation ? o.outOfRangeX : o.outOfRangeY, o.value = "undefined" != typeof t ? "h" == o.opt.orientation ? o.x >= r.outerWidth() ? o.opt.scale : o.x <= 0 ? 0 : o.scaleX : o.y >= r.outerHeight() ? o.opt.scale : o.y <= 0 ? 0 : o.scaleY : "h" == o.opt.orientation ? o.scaleX : o.scaleY, "h" == o.opt.orientation ? o.level.width(n(o.x, i) + "%") : o.level.height(n(o.y, a)), "function" == typeof o.opt.callback && o.opt.callback(o)
            }
        }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
    }(jQuery), jQuery.mbStorage = {
        set: function(e, t) {
            t = JSON.stringify(t), localStorage.setItem(e, t)
        },
        get: function(e) {
            return localStorage[e] ? JSON.parse(localStorage[e]) : null
        },
        remove: function(e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    };
    var getYTPVideoID = function(e) {
        var t, n;
        return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length), n = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = n ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], n = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (t = e.length > 15 ? null : e, n = t ? null : e), {
            videoID: t,
            playlistID: n
        }
    };
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.9.1",
        author: "Matteo Bicocchi",
        defaults: {
            apiKey: "",
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            gaTrack: !0,
            optimizeDisplay: !0,
            onReady: function(e) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        locationProtocol: "https:",
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = {
                    grayscale: {
                        value: 0,
                        unit: "%"
                    },
                    hue_rotate: {
                        value: 0,
                        unit: "deg"
                    },
                    invert: {
                        value: 0,
                        unit: "%"
                    },
                    opacity: {
                        value: 0,
                        unit: "%"
                    },
                    saturate: {
                        value: 0,
                        unit: "%"
                    },
                    sepia: {
                        value: 0,
                        unit: "%"
                    },
                    brightness: {
                        value: 0,
                        unit: "%"
                    },
                    contrast: {
                        value: 0,
                        unit: "%"
                    },
                    blur: {
                        value: 0,
                        unit: "px"
                    }
                }, $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 == property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function() {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID,
                    playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
                YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                    html5: 1
                }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
                    overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay");
                if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    if (YTPlayer.canPlayOnMobile = isPlayer && 0 == jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return void $YTPlayer.remove();
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }), playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({
                            boxSizing: "border-box"
                        }), wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                            position: "relative"
                        }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                            opacity: 1
                        }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady) setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
                            if (!YTPlayer.isInit) {
                                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({
                                            maxWidth: "100%"
                                        });
                                        var h = .6 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({
                                            maxHeight: h
                                        })
                                    }
                                    return void new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        height: "100%",
                                        width: "100%",
                                        events: {
                                            onReady: function(e) {
                                                YTPlayer.player = e.target, playerBox.css({
                                                    opacity: 1
                                                }), YTPlayer.wrapper.css({
                                                    opacity: 1
                                                })
                                            }
                                        }
                                    })
                                }
                                new YT.Player(playerID, {
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function(e) {
                                            if (YTPlayer.player = e.target, !YTPlayer.isReady) {
                                                YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay), YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function() {
                                                    $YTPlayer.optimizeDisplay()
                                                }), jQuery.mbYTPlayer.checkForState(YTPlayer);
                                                var t = jQuery.Event("YTPUnstarted");
                                                t.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(t)
                                            }
                                        },
                                        onStateChange: function(event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.state != state) {
                                                    YTPlayer.state = state;
                                                    var eventType;
                                                    switch (state) {
                                                        case -1:
                                                            eventType = "YTPUnstarted";
                                                            break;
                                                        case 0:
                                                            eventType = "YTPEnd";
                                                            break;
                                                        case 1:
                                                            eventType = "YTPStart", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.videoData.title || YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.videoData.title || YTPlayer.videoID.toString());
                                                            break;
                                                        case 2:
                                                            eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 3:
                                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 5:
                                                            eventType = "YTPCued"
                                                    }
                                                    var YTPevent = jQuery.Event(eventType);
                                                    YTPevent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPevent)
                                                }
                                            }
                                        },
                                        onPlaybackQualityChange: function(e) {
                                            var t = e.target.getPlaybackQuality(),
                                                n = jQuery.Event("YTPQualityChange");
                                            n.quality = t, jQuery(YTPlayer).trigger(n)
                                        },
                                        onError: function(e) {
                                            150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                        }
                                    }
                                })
                            }
                        }))
                    })
                }
            })
        },
        getDataFromAPI: function(e) {
            if (e.videoData = jQuery.mbStorage.get("YYTPlayer_data_" + e.videoID), e.videoData) setTimeout(function() {
                "auto" == e.opt.ratio ? e.opt.ratio = "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
                var t = jQuery.Event("YTPData");
                t.prop = {};
                for (var n in e.videoData) t.prop[n] = e.videoData[n];
                jQuery(e).trigger(t)
            }, 500);
            else if (e.opt.apiKey) jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + e.opt.apiKey + "&part=snippet", function(t) {
                function n(t) {
                    e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : "4/3", e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YYTPlayer_data_" + e.videoID, e.videoData)
                }
                e.dataReceived = !0, jQuery(e).trigger("YTPChanged"), n(t.items[0].snippet);
                var r = jQuery.Event("YTPData");
                r.prop = {};
                for (var o in e.videoData) r.prop[o] = e.videoData[o];
                jQuery(e).trigger(r)
            });
            else {
                if (e.hasData = !1, setTimeout(function() {
                        jQuery(e).trigger("YTPChanged")
                    }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var t = "https://i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    })
                }
                e.videoData = null, "auto" == e.opt.ratio ? "16/9" : "4/3"
            }
            jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                if (!e.hasData && (e.hasData = !0, e.isPlayer && !e.opt.autoPlay)) {
                    var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    })
                }
            }), e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            var e = this.get(0);
            return e.videoData
        },
        getVideoID: function() {
            var e = this.get(0);
            return e.videoID || !1
        },
        setVideoQuality: function(e) {
            var t = this.get(0);
            jQuery.browser.chrome || t.player.setPlaybackQuality(e)
        },
        playlist: function(e, t, n) {
            var r = this,
                o = r.get(0);
            return o.isPlayList = !0, t && (e = jQuery.shuffle(e)), o.videoID || (o.videos = e, o.videoCounter = 0, o.videoLength = e.length, jQuery(o).data("property", e[0]), jQuery(o).mb_YTPlayer()), "function" == typeof n && jQuery(o).on("YTPChanged", function() {
                n(o)
            }), jQuery(o).on("YTPEnd", function() {
                jQuery(o).playNext()
            }), r
        },
        playNext: function() {
            var e = this.get(0);
            e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        playPrev: function() {
            var e = this.get(0);
            e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        changeMovie: function(e) {
            var t = this.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, e && jQuery.extend(t.opt, t.defaultOpt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, jQuery(t.playerEl).CSSAnimate({
                opacity: 0
            }, 200, function() {
                jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery.mbYTPlayer.checkForState(t), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.getDataFromAPI(t)
            })
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null;
            var t = e.wrapper;
            t.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState)
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }

            function RunPrefixMethod(e, t) {
                for (var n, r, o = ["webkit", "moz", "ms", "o", ""], i = 0; i < o.length && !e[n];) {
                    if (n = t, "" == o[i] && (n = n.substr(0, 1).toLowerCase() + n.substr(1)), n = o[i] + n, r = typeof e[n], "undefined" != r) return o = [o[i]], "function" == r ? e[n]() : e[n];
                    i++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    e ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, 500), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(e) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({
                opacity: 0
            }), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, 500)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0)
        },
        toggleLoops: function() {
            var e = this.get(0),
                t = e.opt;
            1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1)
        },
        play: function() {
            var e = this.get(0);
            if (e.isReady) {
                var t = jQuery("#controlBar_" + e.id),
                    n = t.find(".mb_YTPPlaypause");
                n.html(jQuery.mbYTPlayer.controls.pause), e.player.playVideo(), e.wrapper.CSSAnimate({
                    opacity: e.isAlone ? 1 : e.opt.opacity
                }, 2e3), jQuery(e.playerEl).CSSAnimate({
                    opacity: 1
                }, 1e3), jQuery(e).css("background-image", "none")
            }
        },
        togglePlay: function(e) {
            var t = this.get(0);
            1 == t.state ? this.YTPPause() : this.YTPPlay(),
                "function" == typeof e && e(t.state)
        },
        stop: function() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPPlaypause");
            n.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo()
        },
        pause: function() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPPlaypause");
            n.html(jQuery.mbYTPlayer.controls.play), e.player.pauseVideo()
        },
        seekTo: function(e) {
            var t = this.get(0);
            t.player.seekTo(e, !0)
        },
        setVolume: function(e) {
            var t = this.get(0);
            e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute()
        },
        mute: function() {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(0);
                var t = jQuery("#controlBar_" + e.id),
                    n = t.find(".mb_YTPMuteUnmute");
                n.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var r = jQuery.Event("YTPMuted");
                r.time = e.player.time, e.canTrigger && jQuery(e).trigger(r)
            }
        },
        unmute: function() {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);
                var t = jQuery("#controlBar_" + e.id),
                    n = t.find(".mb_YTPMuteUnmute");
                n.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var r = jQuery.Event("YTPUnmuted");
                r.time = e.player.time, e.canTrigger && jQuery(e).trigger(r)
            }
        },
        applyFilter: function(e, t) {
            var n = this.get(0);
            return n.filters[e].value = t, n.filtersEnabled && this.YTPEnableFilters(), this
        },
        applyFilters: function(e) {
            var t = this.get(0);
            return this.on("YTPReady", function() {
                for (var n in e) t.filters[n].value = e[n], jQuery(t).YTPApplyFilter(n, e[n]);
                jQuery(t).trigger("YTPFiltersApplied")
            }), this
        },
        toggleFilter: function(e, t) {
            var n = this.get(0);
            return n.filters[e].value ? n.filters[e].value = 0 : n.filters[e].value = t, n.filtersEnabled && this.YTPEnableFilters(), this
        },
        disableFilters: function() {
            var e = this.get(0),
                t = jQuery(e.playerEl);
            return t.css("-webkit-filter", ""), t.css("filter", ""), e.filtersEnabled = !1, this
        },
        enableFilters: function() {
            var e = this.get(0),
                t = jQuery(e.playerEl),
                n = "";
            for (var r in e.filters) e.filters[r].value && (n += r.replace("_", "-") + "(" + e.filters[r].value + e.filters[r].unit + ") ");
            return t.css("-webkit-filter", n), t.css("filter", n), e.filtersEnabled = !0, this
        },
        toggleFilters: function(e) {
            var t = this.get(0);
            return t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled), this
        },
        removeFilter: function(e, t) {
            "function" == typeof e && (t = e, e = null);
            var n = this.get(0);
            if (e) this.YTPApplyFilter(e, 0), "function" == typeof t && t(e);
            else
                for (var r in n.filters) this.YTPApplyFilter(r, 0), "function" == typeof t && t(r);
            return this
        },
        manageProgress: function() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPProgress"),
                r = t.find(".mb_YTPLoaded"),
                o = t.find(".mb_YTPseekbar"),
                i = n.outerWidth(),
                a = Math.floor(e.player.getCurrentTime()),
                l = Math.floor(e.player.getDuration()),
                s = a * i / l,
                u = 0,
                c = 100 * e.player.getVideoLoadedFraction();
            return r.css({
                left: u,
                width: c + "%"
            }), o.css({
                left: 0,
                width: s
            }), {
                totalTime: l,
                currentTime: a
            }
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                        1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                        0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                    }),
                    volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                        display: "inline-block"
                    });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                    vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                        window.open(vURL, "viewOnYT")
                    }),
                    onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                        jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                        timeBar.css({
                            width: e.clientX - timeBar.offset().left
                        }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        });
                        var t = Math.floor(YTPlayer.player.getDuration());
                        YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        })
                    }),
                    loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 1e3;
            return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).YTPManageProgress(),
                    $YTPlayer = jQuery(YTPlayer),
                    data = YTPlayer.opt,
                    startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0,
                    stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) {
                    var YTPevent = jQuery.Event("YTPTime");
                    YTPevent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPevent)
                }
                if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && YTPlayer.state != -1 && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function() {
                            YTPlayer.isEnded = !1
                        }, 2e3), YTPlayer.isPlayList) {
                        clearInterval(YTPlayer.getState);
                        var YTPEnd = jQuery.Event("YTPEnd");
                        return YTPEnd.time = YTPlayer.player.time, void jQuery(YTPlayer).trigger(YTPEnd)
                    }
                    data.loop ? YTPlayer.player.seekTo(startAt, !0) : (YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({
                        opacity: 0
                    }, 1e3, function() {
                        var e = jQuery.Event("YTPEnd");
                        if (e.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), !YTPlayer.isBackground) {
                            var t = YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
                            YTPlayer.opt.containment.css({
                                background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                                backgroundSize: "cover"
                            })
                        }
                    }))
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function(e) {
            var t = jQuery(e);
            if (!jQuery.contains(document, e)) return void jQuery(e).YTPPlayerDestroy();
            if (jQuery.browser.chrome && (e.opt.quality = "default"), e.player.pauseVideo(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
                var n = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                e.overlay.addClass(e.isRetina ? n + " retina" : n)
            } else e.overlay.removeClass(function(e, t) {
                var n = t.split(" "),
                    r = [];
                return jQuery.each(n, function(e, t) {
                    /raster.*/.test(t) && r.push(t)
                }), r.push("retina"), r.join(" ")
            });
            e.checkForStartAt = setInterval(function() {
                jQuery(e).YTPMute();
                var n = e.opt.startAt ? e.opt.startAt : 1,
                    r = e.player.getVideoLoadedFraction() > n / e.player.getDuration();
                if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= n && r) {
                    clearInterval(e.checkForStartAt), e.isReady = !0, "function" == typeof e.opt.onReady && e.opt.onReady(e);
                    var o = jQuery.Event("YTPReady");
                    jQuery(e).trigger(o), e.player.pauseVideo(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay ? (t.YTPPlay(), t.css("background-image", "none"), jQuery(e.playerEl).CSSAnimate({
                        opacity: 1
                    }, 1e3), e.wrapper.CSSAnimate({
                        opacity: e.isAlone ? 1 : e.opt.opacity
                    }, 1e3)) : e.player.pauseVideo(), e.isPlayer && !e.opt.autoPlay && (e.loading.html("Ready"), setTimeout(function() {
                        e.loading.fadeOut()
                    }, 100)), e.controlBar && e.controlBar.slideDown(1e3)
                } else n >= 0 && e.player.seekTo(n, !0)
            }, 1e3)
        },
        formatTime: function(e) {
            var t = Math.floor(e / 60),
                n = Math.floor(e - 60 * t);
            return (t <= 9 ? "0" + t : t) + " : " + (n <= 9 ? "0" + n : n)
        }
    }, jQuery.fn.toggleVolume = function() {
        var e = this.get(0);
        if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1)
    }, jQuery.fn.optimizeDisplay = function() {
        var e = this.get(0),
            t = e.opt,
            n = jQuery(e.playerEl),
            r = {},
            o = e.wrapper;
        r.width = o.outerWidth(), r.height = o.outerHeight();
        var i = 24,
            a = 100,
            l = {};
        t.optimizeDisplay ? (l.width = r.width + r.width * i / 100, l.height = "16/9" == t.ratio ? Math.ceil(9 * r.width / 16) : Math.ceil(3 * r.width / 4), l.marginTop = -((l.height - r.height) / 2), l.marginLeft = -(r.width * (i / 2) / 100), l.height < r.height && (l.height = r.height + r.height * i / 100, l.width = "16/9" == t.ratio ? Math.floor(16 * r.height / 9) : Math.floor(4 * r.height / 3), l.marginTop = -(r.height * (i / 2) / 100), l.marginLeft = -((l.width - r.width) / 2)), l.width += a, l.height += a, l.marginTop -= a / 2, l.marginLeft -= a / 2) : (l.width = "100%", l.height = "100%", l.marginTop = 0, l.marginLeft -= 0), n.css({
            width: l.width,
            height: l.height,
            marginTop: l.marginTop,
            marginLeft: l.marginLeft
        })
    }, jQuery.shuffle = function(e) {
        for (var t = e.slice(), n = t.length, r = n; r--;) {
            var o = parseInt(Math.random() * n),
                i = t[r];
            t[r] = t[o], t[o] = i
        }
        return t
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), ! function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : e.jQuery)
}(this, function(e) {
    "use strict";

    function t(e) {
        var t, n, r, o, i, a, l, s = {};
        for (i = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), l = 0, a = i.length; l < a && (n = i[l], n.search(/^(http|https|ftp):\/\//) === -1 && n.search(":") !== -1); l++) t = n.indexOf(":"), r = n.substring(0, t), o = n.substring(t + 1), o || (o = void 0), "string" == typeof o && (o = "true" === o || "false" !== o && o), "string" == typeof o && (o = isNaN(o) ? o : +o), s[r] = o;
        return null == r && null == o ? e : s
    }

    function n(e) {
        e = "" + e;
        var t, n, r, o = e.split(/\s+/),
            i = "50%",
            a = "50%";
        for (r = 0, t = o.length; r < t; r++) n = o[r], "left" === n ? i = "0%" : "right" === n ? i = "100%" : "top" === n ? a = "0%" : "bottom" === n ? a = "100%" : "center" === n ? 0 === r ? i = "50%" : a = "50%" : 0 === r ? i = n : a = n;
        return {
            x: i,
            y: a
        }
    }

    function r(t, n) {
        var r = function() {
            n(this.src)
        };
        e('<img src="' + t + '.gif">').load(r), e('<img src="' + t + '.jpg">').load(r), e('<img src="' + t + '.jpeg">').load(r), e('<img src="' + t + '.png">').load(r)
    }

    function o(n, r, o) {
        if (this.$element = e(n), "string" == typeof r && (r = t(r)), o ? "string" == typeof o && (o = t(o)) : o = {}, "string" == typeof r) r = r.replace(/\.\w*$/, "");
        else if ("object" == typeof r)
            for (var i in r) r.hasOwnProperty(i) && (r[i] = r[i].replace(/\.\w*$/, ""));
        this.settings = e.extend({}, a, o), this.path = r, this.init()
    }
    var i = "vide",
        a = {
            volume: 1,
            playbackRate: 1,
            muted: !0,
            loop: !0,
            autoplay: !0,
            position: "50% 50%",
            posterType: "detect",
            resizing: !0
        };
    o.prototype.init = function() {
        var t, o = this,
            i = n(o.settings.position),
            a = "";
        o.$wrapper = e("<div>").css({
            position: "absolute",
            "z-index": -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": i.x + " " + i.y
        }), t = o.path, "object" == typeof o.path && (o.path.poster ? t = o.path.poster : o.path.mp4 ? t = o.path.mp4 : o.path.webm ? t = o.path.webm : o.path.ogv && (t = o.path.ogv)), "detect" === o.settings.posterType ? r(t, function(e) {
            o.$wrapper.css("background-image", "url(" + e + ")")
        }) : "none" !== o.settings.posterType && o.$wrapper.css("background-image", "url(" + t + "." + o.settings.posterType + ")"), "static" === o.$element.css("position") && o.$element.css("position", "relative"), o.$element.prepend(o.$wrapper), "object" == typeof o.path ? (o.path.mp4 && (a += '<source src="' + o.path.mp4 + '.mp4" type="video/mp4">'), o.path.webm && (a += '<source src="' + o.path.webm + '.webm" type="video/webm">'), o.path.ogv && (a += '<source src="' + o.path.ogv + '.ogv" type="video/ogv">'), o.$video = e("<video>" + a + "</video>")) : o.$video = e('<video><source src="' + o.path + '.mp4" type="video/mp4"><source src="' + o.path + '.webm" type="video/webm"><source src="' + o.path + '.ogv" type="video/ogg"></video>'), o.$video.prop({
            autoplay: o.settings.autoplay,
            loop: o.settings.loop,
            volume: o.settings.volume,
            muted: o.settings.muted,
            defaultMuted: o.settings.muted,
            playbackRate: o.settings.playbackRate,
            defaultPlaybackRate: o.settings.playbackRate
        }).css({
            margin: "auto",
            position: "absolute",
            "z-index": -1,
            top: i.y,
            left: i.x,
            "-webkit-transform": "translate(-" + i.x + ", -" + i.y + ")",
            "-ms-transform": "translate(-" + i.x + ", -" + i.y + ")",
            "-moz-transform": "translate(-" + i.x + ", -" + i.y + ")",
            transform: "translate(-" + i.x + ", -" + i.y + ")",
            visibility: "hidden"
        }).one("canplaythrough.vide", function() {
            o.resize()
        }).one("playing.vide", function() {
            o.$video.css("visibility", "visible"), o.$wrapper.css("background-image", "none")
        }), o.$element.on("resize.vide", function() {
            o.settings.resizing && o.resize()
        }), o.$wrapper.append(o.$video)
    }, o.prototype.getVideoObject = function() {
        return this.$video[0]
    }, o.prototype.resize = function() {
        if (this.$video) {
            var e = this.$video[0].videoHeight,
                t = this.$video[0].videoWidth,
                n = this.$wrapper.height(),
                r = this.$wrapper.width();
            r / t > n / e ? this.$video.css({
                width: r + 2,
                height: "auto"
            }) : this.$video.css({
                width: "auto",
                height: n + 2
            })
        }
    }, o.prototype.destroy = function() {
        this.$element.off(i), this.$video && this.$video.off(i), delete e[i].lookup[this.index], this.$element.removeData(i), this.$wrapper.remove()
    }, e[i] = {
        lookup: []
    }, e.fn[i] = function(t, n) {
        var r;
        return this.each(function() {
            r = e.data(this, i), r && r.destroy(), r = new o(this, t, n), r.index = e[i].lookup.push(r) - 1, e.data(this, i, r)
        }), this
    }, e(document).ready(function() {
        var t = e(window);
        t.on("resize.vide", function() {
            for (var t, n = e[i].lookup.length, r = 0; r < n; r++) t = e[i].lookup[r], t && t.settings.resizing && t.resize()
        }), t.on("unload.vide", function() {
            return !1
        }), e(document).find("[data-vide-bg]").each(function(t, n) {
            var r = e(n),
                o = r.data("vide-options"),
                a = r.data("vide-bg");
            r[i](a, o)
        })
    })
}),
function(e, t, n) {
    "use strict";

    function r(e) {
        var n = e.charAt(0).toUpperCase() + e.slice(1),
            r = t.createElement("div"),
            o = r.style,
            i = ["Webkit", "Moz", "ms", "O"];
        if (e in o) return e;
        for (var a = 0, l = i.length; a < l; a++) {
            var s = i[a] + n;
            if (s in o) return s
        }
        return null
    }

    function o(e, t, n) {
        return n ? (n *= t, t += n, e = t - n) : e = e || 0, parseInt(Math.random() * (t - e + 1) + e)
    }

    function i(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function a(e, t) {
        for (var n in t) e.style[d[n] || n] = t[n]
    }

    function l(n) {
        function r() {
            var e = h.cloneNode();
            return "solid" != g.type && (e[d ? "src" : "innerHTML"] = "string" == typeof g.content ? g.content : g.content[0 == p ? 0 : Math.floor(Math.random() * p)]), e
        }

        function l() {
            var e, t = o(g.minSize, g.maxSize),
                n = -2 * t,
                i = o(0, w - t),
                l = o(5, 10) / 10,
                s = o(null, .8 * x, 1),
                u = o(-100, 100),
                c = x + 2 * t,
                d = o(null, 20 * x, .2);
            v.length ? (e = v.shift(), e.dataset.type != g.type && (e = new r)) : e = new r;
            var f = {
                top: n + "px",
                left: i + "px",
                opacity: l,
                transform: "none",
                transition: d + "ms linear"
            };
            switch (g.type) {
                case "solid":
                    f.width = f.height = t + "px";
                    break;
                case "text":
                    f["font-size"] = t + "px";
                    break;
                case "image":
                    f.width = t + "px"
            }
            a(e, f), b.appendChild(e), setTimeout(function() {
                a(e, {
                    transform: "translate(" + u + "px," + c + "px) rotate(" + s + "deg)",
                    opacity: g.fadeOut ? 0 : l
                })
            }, 100)
        }
        var d, p, h, m, y = this,
            v = [],
            g = c,
            b = t.createElement("div");
        y.config = function(e) {
            i(g, e), d = "image" == g.type, p = g.content.length, h = d ? new Image : t.createElement("div"), h.className = "snowflake snowflake-" + g.type, h.dataset.type = g.type
        }, y.config(n);
        var w = g.root.scrollWidth,
            x = g.root.scrollHeight;
        return e.addEventListener("resize", function() {
            w = g.root.scrollWidth, x = g.root.scrollHeight
        }, !1), y.playing = 0, y.play = function() {
            y.playing || (m = setInterval(l, g.interval), y.playing = 1)
        }, y.stop = function() {
            y.playing && (clearInterval(m), m = null, y.playing = 0)
        }, t.addEventListener(u, function() {
            t[s] ? y.stop() : y.play()
        }, !1), b.addEventListener(f, function(e) {
            var t = e.target || e.srcElement;
            b.removeChild(t), v.push(t)
        }, !1), b.className = "snowfield", g.root.firstChild ? g.root.insertBefore(b, g.root.firstChild) : g.root.appendChild(b), g.autoplay && y.play(), y
    }
    var s, u, c = {
            minSize: 10,
            maxSize: 30,
            type: "text",
            content: "&#10052",
            fadeOut: !0,
            autoplay: !0,
            interval: 200,
            root: t.body
        },
        d = {
            transform: r("transform"),
            transition: r("transition")
        },
        f = {
            WebkitTransition: "webkitTransitionEnd",
            OTransition: "oTransitionEnd",
            Moztransition: "transitionend",
            transition: "transitionend"
        } [d.transition];
    "undefined" != typeof t.hidden ? (s = "hidden", u = "visibilitychange") : "undefined" != typeof t.mozHidden ? (s = "mozHidden", u = "mozvisibilitychange") : "undefined" != typeof t.msHidden ? (s = "msHidden", u = "msvisibilitychange") : "undefined" != typeof t.webkitHidden && (s = "webkitHidden", u = "webkitvisibilitychange"), e.Snowfall = l
}(window, document),
function(e, t, n, r) {
    "use strict";
    e.fn.pagepiling = function(o) {
        function i(e) {
            e.addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />')
        }

        function a(t) {
            var n = e(".pp-section.active").index(".pp-section"),
                r = t.index(".pp-section");
            return n > r ? "up" : "down"
        }

        function l(t, n) {
            var r = {
                destination: t,
                animated: n,
                activeSection: e(".pp-section.active"),
                anchorLink: t.data("anchor"),
                sectionIndex: t.index(".pp-section"),
                toMove: t,
                yMovement: a(t),
                leavingSection: e(".pp-section.active").index(".pp-section") + 1
            };
            if (!r.activeSection.is(t)) {
                "undefined" == typeof r.animated && (r.animated = !0), "undefined" != typeof r.anchorLink && p(r.anchorLink, r.sectionIndex), r.destination.addClass("active").siblings().removeClass("active"), r.sectionsToMove = c(r), "down" === r.yMovement ? (r.translate3d = M(), r.scrolling = "-100%", X.css3 || r.sectionsToMove.each(function(t) {
                    t != r.activeSection.index(".pp-section") && e(this).css(f(r.scrolling))
                }), r.animateSection = r.activeSection) : (r.translate3d = "translate3d(0px, 0px, 0px)", r.scrolling = "0", r.animateSection = t), e.isFunction(X.onLeave) && X.onLeave.call(this, r.leavingSection, r.sectionIndex + 1, r.yMovement), s(r), N(r.anchorLink), O(r.anchorLink, r.sectionIndex), L = r.anchorLink;
                var o = (new Date).getTime();
                R = o
            }
        }

        function s(t) {
            X.css3 ? (b(t.animateSection, t.translate3d, t.animated), t.sectionsToMove.each(function() {
                b(e(this), t.translate3d, t.animated)
            }), setTimeout(function() {
                u(t)
            }, X.scrollingSpeed)) : (t.scrollOptions = f(t.scrolling), t.animated ? t.animateSection.animate(t.scrollOptions, X.scrollingSpeed, X.easing, function() {
                d(t), u(t)
            }) : (t.animateSection.css(f(t.scrolling)), setTimeout(function() {
                d(t), u(t)
            }, 400)))
        }

        function u(t) {
            e.isFunction(X.afterLoad) && X.afterLoad.call(this, t.anchorLink, t.sectionIndex + 1)
        }

        function c(t) {
            var n;
            return n = "down" === t.yMovement ? e(".pp-section").map(function(n) {
                if (n < t.destination.index(".pp-section")) return e(this)
            }) : e(".pp-section").map(function(n) {
                if (n > t.destination.index(".pp-section")) return e(this)
            })
        }

        function d(t) {
            "up" === t.yMovement && t.sectionsToMove.each(function(n) {
                e(this).css(f(t.scrolling))
            })
        }

        function f(e) {
            return "vertical" === X.direction ? {
                top: e
            } : {
                left: e
            }
        }

        function p(e, t) {
            X.anchors.length ? (location.hash = e, h(location.hash)) : h(String(t))
        }

        function h(t) {
            t = t.replace("#", ""), e("body")[0].className = e("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g, ""), e("body").addClass("pp-viewing-" + t)
        }

        function m() {
            var r = n.location.hash.replace("#", ""),
                o = r,
                i = e(t).find('.pp-section[data-anchor="' + o + '"]');
            i.length > 0 && l(i, X.animateAnchor)
        }

        function y() {
            var e = (new Date).getTime();
            return e - R < V + X.scrollingSpeed
        }

        function v() {
            var r = n.location.hash.replace("#", "").split("/"),
                o = r[0];
            if (o.length && o && o !== L) {
                var i;
                i = isNaN(o) ? e(t).find('[data-anchor="' + o + '"]') : e(".pp-section").eq(o - 1), l(i)
            }
        }

        function g(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function b(e, t, n) {
            e.toggleClass("pp-easing", n), e.css(g(t))
        }

        function w(t) {
            if (!y()) {
                t = n.event || t;
                var r = Math.max(-1, Math.min(1, t.wheelDelta || -t.deltaY || -t.detail)),
                    o = e(".pp-section.active"),
                    i = P(o);
                return r < 0 ? x("down", i) : x("up", i), !1
            }
        }

        function x(e, t) {
            var n, r;
            if ("down" == e ? (n = "bottom", r = z.moveSectionDown) : (n = "top", r = z.moveSectionUp), t.length > 0) {
                if (!T(n, t)) return !0;
                r()
            } else r()
        }

        function T(e, t) {
            return "top" === e ? !t.scrollTop() : "bottom" === e ? t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0
        }

        function P(e) {
            return e.filter(".pp-scrollable")
        }

        function C() {
            B.get(0).addEventListener ? (B.get(0).removeEventListener("mousewheel", w, !1), B.get(0).removeEventListener("wheel", w, !1)) : B.get(0).detachEvent("onmousewheel", w)
        }

        function j() {
            B.get(0).addEventListener ? (B.get(0).addEventListener("mousewheel", w, !1), B.get(0).addEventListener("wheel", w, !1)) : B.get(0).attachEvent("onmousewheel", w)
        }

        function k() {
            if (F) {
                var e = Y();
                B.off("touchstart " + e.down).on("touchstart " + e.down, A), B.off("touchmove " + e.move).on("touchmove " + e.move, Q)
            }
        }

        function S() {
            if (F) {
                var e = Y();
                B.off("touchstart " + e.down), B.off("touchmove " + e.move)
            }
        }

        function Y() {
            var e;
            return e = n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove",
                up: "pointerup"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove",
                up: "MSPointerUp"
            }
        }

        function _(e) {
            var t = new Array;
            return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, t
        }

        function E(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }

        function A(e) {
            var t = e.originalEvent;
            if (E(t)) {
                var n = _(t);
                q = n.y, H = n.x
            }
        }

        function Q(t) {
            var n = t.originalEvent;
            if (!I(t.target) && E(n)) {
                var r = e(".pp-section.active"),
                    o = P(r);
                if (o.length || t.preventDefault(), !y()) {
                    var i = _(n);
                    U = i.y, W = i.x, "horizontal" === X.direction && Math.abs(H - W) > Math.abs(q - U) ? Math.abs(H - W) > B.width() / 100 * X.touchSensitivity && (H > W ? x("down", o) : W > H && x("up", o)) : Math.abs(q - U) > B.height() / 100 * X.touchSensitivity && (q > U ? x("down", o) : U > q && x("up", o))
                }
            }
        }

        function I(t, n) {
            n = n || 0;
            var r = e(t).parent();
            return !!(n < X.normalScrollElementTouchThreshold && r.is(X.normalScrollElements)) || n != X.normalScrollElementTouchThreshold && I(r, ++n)
        }

        function D() {
            e("body").append('<div id="pp-nav"><ul></ul></div>');
            var t = e("#pp-nav");
            t.css("color", X.navigation.textColor), t.addClass(X.navigation.position);
            for (var n = 0; n < e(".pp-section").length; n++) {
                var r = "";
                if (X.anchors.length && (r = X.anchors[n]), "undefined" !== X.navigation.tooltips) {
                    var o = X.navigation.tooltips[n];
                    "undefined" == typeof o && (o = "")
                }
                t.find("ul").append('<li data-tooltip="' + o + '"><a href="#' + r + '"><span></span></a></li>')
            }
            t.find("span").css("border-color", X.navigation.bulletsColor)
        }

        function O(t, n) {
            X.navigation && (e("#pp-nav").find(".active").removeClass("active"), t ? e("#pp-nav").find('a[href="#' + t + '"]').addClass("active") : e("#pp-nav").find("li").eq(n).find("a").addClass("active"))
        }

        function N(t) {
            X.menu && (e(X.menu).find(".active").removeClass("active"), e(X.menu).find('[data-menuanchor="' + t + '"]').addClass("active"))
        }

        function $() {
            var e, o = t.createElement("p"),
                i = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            t.body.insertBefore(o, null);
            for (var a in i) o.style[a] !== r && (o.style[a] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(i[a]));
            return t.body.removeChild(o), e !== r && e.length > 0 && "none" !== e
        }

        function M() {
            return "vertical" !== X.direction ? "translate3d(-100%, 0px, 0px)" : "translate3d(0px, -100%, 0px)"
        }
        var L, z = e.fn.pagepiling,
            B = e(this),
            R = 0,
            F = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            q = 0,
            H = 0,
            U = 0,
            W = 0,
            V = 600,
            X = e.extend(!0, {
                direction: "vertical",
                menu: null,
                verticalCentered: !0,
                sectionsColor: [],
                anchors: [],
                scrollingSpeed: 700,
                easing: "easeInQuart",
                loopBottom: !1,
                loopTop: !1,
                css3: !0,
                navigation: {
                    textColor: "#000",
                    bulletsColor: "#000",
                    position: "right",
                    tooltips: []
                },
                normalScrollElements: null,
                normalScrollElementTouchThreshold: 5,
                touchSensitivity: 5,
                keyboardScrolling: !0,
                sectionSelector: ".section",
                animateAnchor: !1,
                afterLoad: null,
                onLeave: null,
                afterRender: null
            }, o);
        e.extend(e.easing, {
            easeInQuart: function(e, t, n, r, o) {
                return r * (t /= o) * t * t * t + n
            }
        }), z.setScrollingSpeed = function(e) {
            X.scrollingSpeed = e
        }, z.setMouseWheelScrolling = function(e) {
            e ? j() : C()
        }, z.setAllowScrolling = function(e) {
            e ? (z.setMouseWheelScrolling(!0), k()) : (z.setMouseWheelScrolling(!1), S())
        }, z.setKeyboardScrolling = function(e) {
            X.keyboardScrolling = e
        }, z.moveSectionUp = function() {
            var t = e(".pp-section.active").prev(".pp-section");
            !t.length && X.loopTop && (t = e(".pp-section").last()), t.length && l(t)
        }, z.moveSectionDown = function() {
            var t = e(".pp-section.active").next(".pp-section");
            !t.length && X.loopBottom && (t = e(".pp-section").first()), t.length && l(t)
        }, z.moveTo = function(n) {
            var r = "";
            r = isNaN(n) ? e(t).find('[data-anchor="' + n + '"]') : e(".pp-section").eq(n - 1), r.length > 0 && l(r)
        }, e(X.sectionSelector).each(function() {
            e(this).addClass("pp-section")
        }), X.css3 && (X.css3 = $()), e(B).css({
            overflow: "hidden",
            "-ms-touch-action": "none",
            "touch-action": "none"
        }), z.setAllowScrolling(!0), e.isEmptyObject(X.navigation) || D();
        var J = e(".pp-section").length;
        e(".pp-section").each(function(t) {
            e(this).data("data-index", t), e(this).css("z-index", J), t || 0 !== e(".pp-section.active").length || e(this).addClass("active"), "undefined" != typeof X.anchors[t] && e(this).attr("data-anchor", X.anchors[t]), "undefined" != typeof X.sectionsColor[t] && e(this).css("background-color", X.sectionsColor[t]), X.verticalCentered && !e(this).hasClass("pp-scrollable") && i(e(this)), J -= 1
        }).promise().done(function() {
            X.navigation && (e("#pp-nav").css("margin-top", "-" + e("#pp-nav").height() / 2 + "px"), e("#pp-nav").find("li").eq(e(".pp-section.active").index(".pp-section")).find("a").addClass("active")), e(n).on("load", function() {
                m()
            }), e.isFunction(X.afterRender) && X.afterRender.call(this)
        }), e(n).on("hashchange", v), e(t).keydown(function(t) {
            if (X.keyboardScrolling && !y()) switch (t.which) {
                case 38:
                case 33:
                    z.moveSectionUp();
                    break;
                case 40:
                case 34:
                    z.moveSectionDown();
                    break;
                case 36:
                    z.moveTo(1);
                    break;
                case 35:
                    z.moveTo(e(".pp-section").length);
                    break;
                case 37:
                    z.moveSectionUp();
                    break;
                case 39:
                    z.moveSectionDown();
                    break;
                default:
                    return
            }
        }), X.normalScrollElements && (e(t).on("mouseenter", X.normalScrollElements, function() {
            z.setMouseWheelScrolling(!1)
        }), e(t).on("mouseleave", X.normalScrollElements, function() {
            z.setMouseWheelScrolling(!0)
        })), e(t).on("click touchstart", "#pp-nav a", function(t) {
            t.preventDefault();
            var n = e(this).parent().index();
            l(e(".pp-section").eq(n))
        }), e(t).on({
            mouseenter: function() {
                var t = e(this).data("tooltip");
                e('<div class="pp-tooltip ' + X.navigation.position + '">' + t + "</div>").hide().appendTo(e(this)).fadeIn(200)
            },
            mouseleave: function() {
                e(this).find(".pp-tooltip").fadeOut(200, function() {
                    e(this).remove()
                })
            }
        }, "#pp-nav li")
    }
}(jQuery, document, window), $(function() {
        function e() {
            return "ontouchstart" in window || navigator.maxTouchPoints
        }
        $(".widget-before-after").each(function() {
            var t = $(this),
                n = t.find(".root"),
                r = n.find("> img"),
                o = n.find("> .handler");
            r.on("load", _.after(r.length, function() {
                n.css("height", n.height());
                var t = n.find("> .layer-before"),
                    i = t.find("> .wrap"),
                    a = r.eq(0),
                    l = a.width(),
                    s = a.height();
                a.removeAttr("style").appendTo(i);
                var u = n.find("> .layer-after"),
                    c = u.find("> .wrap"),
                    d = r.eq(1),
                    f = d.width(),
                    p = d.height();
                d.removeAttr("style").appendTo(c), i.add(c).css({
                    width: Math.max(l, f),
                    height: Math.max(s, p),
                    "max-width": "none"
                });
                var h = n.width(),
                    m = n.offset().left,
                    y = i.offset().left,
                    v = i.width(),
                    g = 0,
                    b = function(e) {
                        var n = e.pageX - m - g;
                        n < 0 && (n = 0), n > h && (n = h), t.css("width", n), u.css("width", h - n), i.css("right", -(h / 2 - n)), c.css("left", h / 2 - n), o.css("left", n);
                        var r = o.offset().left + 2;
                        r < y && o.css("left", n + y - r), r > y + v && o.css("left", n - (r - (y + v)))
                    };
                e() ? n.on("move", b) : "hover" === n.data("trigger") ? (n.on("mousemove", b), n.on("mousedown", function(e) {
                    e.preventDefault()
                })) : "drag" === n.data("trigger") && n.on("mousedown", function(e) {
                    g = $(e.target).closest(o).length ? e.pageX - o.offset().left : 0, $(document).on("mousemove.beforeafter", b), $(document).one("mouseup", function() {
                        $(document).off("mousemove.beforeafter");
                    }), e.preventDefault()
                })
            }))
        })
    }), $(function() {
        return $(".widget-gallery").each(function() {
            var e = $(this).find(".colorbox");
            if (e.length) {
                var t = _.uniqueId("group");
                return e.attr("data-rel", t), e.colorbox({
                    rel: t,
                    maxWidth: "80%",
                    maxHeight: "80%"
                })
            }
        })
    }), $(function() {
        $(".widget-increasingdigits").each(function() {
            var e = new RegExp("([0-9]+)", "g"),
                t = "<span class='digits-wrapper'>$1</span>",
                n = $(this).find(".digits"),
                r = 1e3 * parseFloat(n.attr("data-animation-duration")) || 0;
            n.find("*").andSelf().each(function() {
                var n = 3;
                $(this).contents().filter(function() {
                    return this.nodeType === n
                }).each(function() {
                    var n = $(this).parent(),
                        r = this.textContent.replace(e, t);
                    $(this).replaceWith(r), n.find(".digits-wrapper").each(function() {
                        $(this).data("data-number", $(this).text()).text("0")
                    })
                })
            }), plp.lazy.add($(this), function(e) {
                e.find(".digits-wrapper").each(function() {
                    $(this).animateNumber({
                        number: $(this).data("data-number")
                    }, r)
                })
            }, 0)
        })
    }), $(function() {
        $(".widget-slide-share").each(function() {
            var e = $(this).find(".slide"),
                t = e.attr("data-iframe-string");
            if (t) {
                var n = t.match(/.*?src="(.*?)"/);
                if (n) {
                    var r = n[1];
                    r && e.append('<iframe class="slide-share" src=' + r + " allowfullscreen></iframe>")
                }
            }
        })
    }),
    function(e, t, n, r) {
        e(n).ready(function() {
            var o = e('meta[property="og:description"]').attr("content") || "",
                i = e('meta[property="og:image"]').attr("content") || "";
            goodshare = {
                init: function(t, r) {
                    var a = goodshare,
                        l = e.extend({
                            type: "vk",
                            url: location.href,
                            title: n.title,
                            text: o,
                            image: i
                        }, e(t).data(), r);
                    if (null !== a.popup(link = a[l.type](l))) return !1
                },
                vk: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        text: o,
                        image: i
                    }, t);
                    return "http://vk.com/share.php?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title) + "&description=" + encodeURIComponent(r.text) + "&image=" + encodeURIComponent(r.image)
                },
                ok: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments=" + encodeURIComponent(r.title) + "&st._surl=" + encodeURIComponent(r.url)
                },
                fb: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "https://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(r.url)
                },
                lj: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        text: o
                    }, t);
                    return "http://livejournal.com/update.bml?subject=" + encodeURIComponent(r.title) + "&event=" + encodeURIComponent('<a href="' + r.url + '">' + r.title + "</a> " + r.text)
                },
                tw: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "http://twitter.com/share?url=" + encodeURIComponent(r.url) + "&text=" + encodeURIComponent(r.title)
                },
                gp: function(t) {
                    var n = e.extend({
                        url: location.href
                    }, t);
                    return "https://plus.google.com/share?url=" + encodeURIComponent(n.url)
                },
                mr: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        text: o,
                        image: i
                    }, t);
                    return "http://connect.mail.ru/share?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title) + "&description=" + encodeURIComponent(r.text) + "&imageurl=" + encodeURIComponent(r.image)
                },
                li: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        text: o
                    }, t);
                    return "http://www.linkedin.com/shareArticle?url=" + encodeURIComponent(r.url) + "&text=" + encodeURIComponent(r.title) + "&summary=" + encodeURIComponent(r.text) + "&mini=true"
                },
                tm: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        text: o
                    }, t);
                    return "https://www.tumblr.com/widgets/share/tool?canonicalUrl=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title) + "&caption=" + encodeURIComponent(r.text) + "&posttype=link"
                },
                bl: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "https://www.blogger.com/blog-this.g?u=" + encodeURIComponent(r.url) + "&n=" + encodeURIComponent(r.title)
                },
                pt: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        image: e('meta[property="og:image"]').attr("content")
                    }, t);
                    return "https://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(r.url) + "&media=" + encodeURIComponent(r.image) + "&description=" + encodeURIComponent(r.title)
                },
                en: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        text: o
                    }, t);
                    return "https://www.evernote.com/clip.action?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title) + "&body=" + encodeURIComponent(r.text + '<br/><a href="' + r.url + '">' + r.title + "</a>")
                },
                di: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "http://digg.com/submit?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
                },
                rd: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "http://www.reddit.com/submit?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
                },
                de: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "https://delicious.com/save?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
                },
                su: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "http://www.stumbleupon.com/submit?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
                },
                po: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "https://getpocket.com/save?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
                },
                sb: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        text: o
                    }, t);
                    return "http://surfingbird.ru/share?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title) + "&description=" + encodeURIComponent(r.text)
                },
                lr: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "http://www.liveinternet.ru/journal_post.php?action=n_add&cnurl=" + encodeURIComponent(r.url) + "&cntitle=" + encodeURIComponent(r.title)
                },
                bf: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "https://buffer.com/add?url=" + encodeURIComponent(r.url) + "&text=" + encodeURIComponent(r.title)
                },
                ip: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "https://www.instapaper.com/edit?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
                },
                ra: function(t) {
                    var n = e.extend({
                        url: location.href
                    }, t);
                    return "http://www.readability.com/save?url=" + encodeURIComponent(n.url)
                },
                xi: function(t) {
                    var n = e.extend({
                        url: location.href
                    }, t);
                    return "https://www.xing.com/spi/shares/new?url=" + encodeURIComponent(n.url)
                },
                wp: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        text: o,
                        image: i
                    }, t);
                    return "https://wordpress.com/wp-admin/press-this.php?u=" + encodeURIComponent(r.url) + "&t=" + encodeURIComponent(r.title) + "&s=" + encodeURIComponent(r.text) + "&i=" + encodeURIComponent(r.image) + "&v=2"
                },
                bd: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title,
                        text: o
                    }, t);
                    return "http://cang.baidu.com/do/add?it=" + encodeURIComponent(r.title) + "&iu=" + encodeURIComponent(r.url) + "&dc=" + encodeURIComponent(r.text) + "&fr=ien"
                },
                rr: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "http://share.renren.com/share/buttonshare.do?link=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
                },
                wb: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title)
                },
                tg: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "tg://msg?text=" + encodeURIComponent(r.title + " " + r.url)
                },
                vi: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "viber://forward?text=" + encodeURIComponent(r.title + " " + r.url)
                },
                wa: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "whatsapp://send?text=" + encodeURIComponent(r.title + " " + r.url)
                },
                ln: function(t) {
                    var r = e.extend({
                        url: location.href,
                        title: n.title
                    }, t);
                    return "line://msg/text/" + encodeURIComponent(r.title + " " + r.url)
                },
                popup: function(e) {
                    return t.open(e, "", "left=" + (screen.width - 630) / 2 + ",top=" + (screen.height - 440) / 2 + ",toolbar=0,status=0,scrollbars=0,menubar=0,location=0,width=630,height=440")
                }
            }, e.fn.getCount = function() {
                var n = function(e) {
                        if (e > 999 && e <= 999999) var t = e / 1e3 + "k";
                        else if (e > 999999) var t = ">1M";
                        else var t = e;
                        return t
                    },
                    o = function(t) {
                        return e(t).length > 0
                    };
                o('[data-counter="vk"]') && (e.getJSON("https://vk.com/share.php?act=count&index=1&url=" + encodeURIComponent(location.href) + "&callback=?", function(e) {}), t.VK || (VK = {}), VK.Share = {
                    count: function(t, r) {
                        e('[data-counter="vk"]').text(n(r))
                    }
                }), o('[data-counter="fb"]') && e.getJSON("https://graph.facebook.com/?id=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                    t.share === r ? e('[data-counter="fb"]').text("0") : e('[data-counter="fb"]').text(n(t.share.share_count))
                }), o('[data-counter="ok"]') && (e.getJSON("https://connect.ok.ru/dk?st.cmd=extLike&uid=1&ref=" + encodeURIComponent(location.href) + "&callback=?", function(e) {}), t.ODKL || (ODKL = {}), ODKL.updateCount = function(t, r) {
                    e('[data-counter="ok"]').text(n(r))
                }), o('[data-counter="gp"]') && e.ajax({
                    type: "POST",
                    url: "https://clients6.google.com/rpc",
                    processData: !0,
                    contentType: "application/json",
                    data: JSON.stringify({
                        method: "pos.plusones.get",
                        id: location.href,
                        params: {
                            nolog: !0,
                            id: location.href,
                            source: "widget",
                            userId: "@viewer",
                            groupId: "@self"
                        },
                        jsonrpc: "2.0",
                        key: "p",
                        apiVersion: "v1"
                    }),
                    success: function(t) {
                        e('[data-counter="gp"]').text(n(t.result.metadata.globalCounts.count))
                    }
                }), o('[data-counter="mr"]') && e.getJSON("https://connect.mail.ru/share_count?url_list=" + encodeURIComponent(location.href) + "&callback=1&func=?", function(t) {
                    var r = encodeURIComponent(location.href);
                    for (var r in t)
                        if (t.hasOwnProperty(r)) {
                            var o = t[r].shares;
                            break
                        } e.isEmptyObject(t) ? e('[data-counter="mr"]').text("0") : e('[data-counter="mr"]').text(n(o))
                }), o('[data-counter="li"]') && e.getJSON("https://www.linkedin.com/countserv/count/share?url=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                    e('[data-counter="li"]').text(n(t.count))
                }), o('[data-counter="tm"]') && e.getJSON("https://api.tumblr.com/v2/share/stats?url=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                    e('[data-counter="tm"]').text(n(t.response.note_count))
                }), o('[data-counter="pt"]') && e.getJSON("https://api.pinterest.com/v1/urls/count.json?url=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                    e('[data-counter="pt"]').text(n(t.count))
                }), o('[data-counter="rd"]') && e.getJSON("https://www.reddit.com/api/info.json?url=" + encodeURIComponent(location.href) + "&jsonp=?", function(t) {
                    var r = t.data.children;
                    0 === r.length ? e('[data-counter="rd"]').text("0") : e('[data-counter="rd"]').text(n(r[0].data.score))
                }), o('[data-counter="su"]') && e.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('select * from html where url="http://www.stumbleupon.com/services/1.01/badge.getinfo?url=' + location.href + '" and xpath="*"') + "&format=json&callback=?", function(t) {
                    var o = e.parseJSON(t.query.results.html.body);
                    o.result.views === r ? e('[data-counter="su"]').text("0") : e('[data-counter="su"]').text(n(o.result.views))
                }), o('[data-counter="po"]') && e.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('select * from html where url="https://widgets.getpocket.com/v1/button?count=horizontal&url=' + location.href + '" and xpath="*"') + "&format=json&callback=?", function(t) {
                    e('[data-counter="po"]').text(n(t.query.results.html.body.div.a.span.em.content))
                }), o('[data-counter="bf"]') && e.getJSON("https://api.bufferapp.com/1/links/shares.json?url=" + encodeURIComponent(location.href) + "&callback=?", function(t) {
                    e('[data-counter="bf"]').text(n(t.shares))
                }), o('[data-counter="xi"]') && e.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('select * from html where url="https://www.xing-share.com/app/share?op=get_share_button;counter=top;url=' + location.href + '" and xpath="*"') + "&format=json&callback=?", function(t) {
                    e('[data-counter="xi"]').text(n(t.query.results.html.body.div[0].div[0].span.content))
                })
            }, e(n).on("click", ".goodshare", function(e) {
                e.preventDefault(), goodshare.init(this)
            }), e(n).getCount()
        })
    }(jQuery, window, document),
    function() {
        try {
            $(function() {
                try {
                    var e, t, n, r;
                    return $.fn.findUpmost = function(e) {
                        try {
                            var t, n, r, o;
                            for (o = [], $(this).find(e).each(function() {
                                    try {
                                        var e;
                                        return e = $(this).parents().length, o[e] ? o[e].push(this) : o[e] = [this]
                                    } catch (t) {
                                        error_handler(t, "red libs 3", arguments.callee)
                                    }
                                }), t = 0, n = o.length; t < n; t++)
                                if (r = o[t]) return $(r)
                        } catch (i) {
                            error_handler(i, "red libs 2", arguments.callee)
                        }
                    }, t = [], r = ".modal-content, .sweet-overlay, .sweet-alert, #cboxOverlay, #colorbox", plp.modal = {
                        init: function(e, n) {
                            try {
                                var r;
                                return r = !1, e.on("click", function(e) {
                                    try {
                                        return r === !1 && (n.appendTo("div.area"), n.modal({
                                            backdrop: !1,
                                            keyboard: !1,
                                            show: !1
                                        }), r = !0), n.modal("show"), n.before('<div class="modal-backdrop fade in"></div>'), t.push(n), plp.lazy.update(), n.find(".widget-slider").length && n.find(".bxslider").trigger("openModal"), e.preventDefault()
                                    } catch (o) {
                                        error_handler(o, "red libs 5", arguments.callee)
                                    }
                                })
                            } catch (o) {
                                error_handler(o, "red libs 4", arguments.callee)
                            }
                        },
                        openbyid: function(t) {
                            try {
                                return e.filter('[data-id="' + t + '"]:visible:first').click()
                            } catch (n) {
                                error_handler(n, "red libs 6", arguments.callee)
                            }
                        },
                        close: function() {
                            try {
                                var e;
                                return e = _.last(t).modal("hide"), e.find(".macros-video").each(function() {
                                    try {
                                        var e;
                                        return e = $(this).find(".wrap"), e.attr("data-src", e.attr("src")), e.attr("src", e.attr("src").replace("autoplay=1", "autoplay=0"))
                                    } catch (t) {
                                        error_handler(t, "red libs 8", arguments.callee)
                                    }
                                }), e.prev(".modal-backdrop").remove(), t = _.without(t, e)
                            } catch (n) {
                                error_handler(n, "red libs 7", arguments.callee)
                            }
                        },
                        closeAll: function() {
                            try {
                                if (!t.length) return;
                                return plp.modal.close(), plp.modal.closeAll()
                            } catch (e) {
                                error_handler(e, "red libs 9", arguments.callee)
                            }
                        }
                    }, e = $(".btn[data-modal], .btn-modal[data-modal]"), e.each(function() {
                        try {
                            var e, t, n, r;
                            return e = $(this), n = e.closest(".node"), r = e.attr("data-modal"), n.length || (n = e.closest(".modal")), "cart" !== r && "agreement" !== r || (n = $("div.area").first()), t = n.findUpmost('.modal[data-modal="' + r + '"]'), plp.modal.init(e, t)
                        } catch (o) {
                            error_handler(o, "red libs 10", arguments.callee)
                        }
                    }), n = location.href.match(/#modal-([a-z0-9]+)/), n && plp.modal.openbyid(n[1]), $(document).on("click", 'a[href^="#modal-"]', function(e) {
                        try {
                            var t;
                            if (e.isDefaultPrevented()) return;
                            if (t = $(this).attr("href").match(/#modal-([a-z0-9]+)/)) return plp.modal.openbyid(t[1])
                        } catch (n) {
                            error_handler(n, "red libs 11", arguments.callee)
                        }
                    }), $(document).on("click", function(n) {
                        try {
                            var o, i;
                            if (!t.length) return;
                            if ($(n.target).closest(e).length) return;
                            if ($(n.target).closest('a[href^="#modal-"]').length) return;
                            if (i = _.last(t), n.target === i[0]) return plp.modal.close();
                            if ($(n.target).closest(".modal-header > .close").length) return plp.modal.close();
                            if (o = $(n.target).closest(".modal"), o.length && o[0] !== i[0]) return plp.modal.close();
                            if (!$(n.target).closest(r).length) return plp.modal.close()
                        } catch (a) {
                            error_handler(a, "red libs 12", arguments.callee)
                        }
                    })
                } catch (o) {
                    error_handler(o, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t;
                    if (e = $(".macros-map"), !e.length) return;
                    return t = "//api-maps.yandex.ru/2.1/?lang=ru-RU", $.getScript(t, function() {
                        try {
                            if ("undefined" == typeof ymaps) return;
                            return ymaps.ready(function() {
                                try {
                                    return e.each(function() {
                                        try {
                                            var e;
                                            return e = plp.lazy.add($(this), function(t) {
                                                try {
                                                    var n, r, o, i, a;
                                                    return n = e.children(".map"), r = n.data("map"), o = _.uniqueId("map"), n.attr("id", o), i = new ymaps.Map(o, {
                                                        center: r.center,
                                                        type: r.type,
                                                        zoom: r.zoom,
                                                        controls: []
                                                    }), i.behaviors.disable(["scrollZoom"]), a = new ymaps.GeoObject({
                                                        geometry: {
                                                            type: "Point",
                                                            coordinates: r.point
                                                        }
                                                    }, {
                                                        draggable: !0
                                                    }), i.geoObjects.add(a), i.controls.add("zoomControl", {
                                                        "float": "left"
                                                    }).add("typeSelector", {
                                                        "float": "right"
                                                    })
                                                } catch (l) {
                                                    error_handler(l, "red libs 5", arguments.callee)
                                                }
                                            })
                                        } catch (t) {
                                            error_handler(t, "red libs 4", arguments.callee)
                                        }
                                    })
                                } catch (t) {
                                    error_handler(t, "red libs 3", arguments.callee)
                                }
                            })
                        } catch (t) {
                            error_handler(t, "red libs 2", arguments.callee)
                        }
                    })
                } catch (n) {
                    error_handler(n, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t, n, r, o, a, l, s, u, c, d;
                    return a = window.plp_page_id || window.plp.page_id, e = window.plp_content_id || window.plp.content_id, d = $.cookie("visit_id"), s = 0, l = 2500, n = {
                        ru: {
                            error: "Не удалось отправить форму!",
                            validate: "Неправильно заполнены поля:",
                            interval: "Пожалуйста, повторите отправку через пару секунд.",
                            required: "Поле «%field%» обязательно для заполнения.",
                            email: "Поле «%field%» должно содержать ваш настоящий e-mail адрес.",
                            phone: "Поле «%field%» должно содержать правильный номер телефона.",
                            number: "Поле «%field%» должно быть правильным числом."
                        },
                        am: {
                            error: "Հայտն ուղարկված չէ, խնդրում ենք կրկին փորձել",
                            validate: "Տողերը սխալ են լրացված",
                            interval: "Տողերը սխալ են մուտքագրված: Խնդրում ենք կրկին փորձել մի քանի վարկյանից",
                            required: "Խնդրում ենք լրացրեք «%field%» տողը, այն պարտադիր է",
                            email: "Խնդրում ենք «%field%» տողում գրանցել Ձեր իրական էլ. փոստի հասցեն",
                            phone: "Խնդրում ենք «%field%» տողում գրանցել Ձեր ճիշտ հեռախոսահամարը",
                            number: "Խնդրում ենք «%field%» տողում գրանցել ճիշտ ամսաթիվ"
                        },
                        bg: {
                            error: "Неуспешно изпращане на заявката!",
                            validate: "Грешно запълнени полета:",
                            interval: "Моля, изпратете отново заявката след няколко секунди.",
                            required: "Полето «%field%» е задължително за запълване.",
                            email: "Полето «%field%» трябва да съдържа истинският Ви имейл адрес.",
                            phone: "Полето «%field%» задължително трябва да съдържа правилният Ви телефонен номер.",
                            number: "Полето «%field%» трябва да съдържа правилно изписано число."
                        },
                        uk: {
                            error: "Не вдалося відправити форму!",
                            validate: "Неправильно заповнені поля:",
                            interval: "Будь ласка, повторіть відправку через пару секунд",
                            required: "Поле «%field%» обов'язково для заповнення.",
                            email: "Поле «%field%» повинно містити ваш справжній e-mail адресу.",
                            phone: "Поле «%field%» повинно містити правильний номер телефону.",
                            number: "Поле «%field%» має бути правильним числом."
                        },
                        md: {
                            error: "Не удалось отправить форму!",
                            validate: "Неправильно заполнены поля:",
                            interval: "Пожалуйста, повторите отправку через пару секунд.",
                            required: "Поле «%field%» обязательно для заполнения.",
                            email: "Поле «%field%» должно содержать ваш настоящий e-mail адрес.",
                            phone: "Поле «%field%» должно содержать правильный номер телефона.",
                            number: "Поле «%field%» должно быть правильным числом."
                        },
                        en: {
                            error: "Error sending form!",
                            validate: "Fields are not filled corectly:",
                            interval: "Pleasy try again in a few seconds.",
                            required: "The field «%field%» is required.",
                            email: "The field «%field%» must contain you real email address.",
                            phone: "The field «%field%» must contain you real phone number.",
                            number: "The field «%field%» must be a number."
                        },
                        es: {
                            error: "No es posible enviar el formulario!",
                            validate: "Los campos rellenados de forma incorrecta:",
                            interval: "Por favor, inténtelo de nuevo después de unos segundos.",
                            required: "Campo «%field%» rellenar obligatorio.",
                            email: "Campo «%field%» debe contener su dirección electrónica actual.",
                            phone: "Campo «%field%» debe contener el numero de teléfono en el formato adecuado.",
                            number: "Campo «%field%» debe ser el numero correcto."
                        },
                        it: {
                            error: "Il form non è stato inviato!",
                            validate: "I campi richiesti sono stati compilati in modo errato:",
                            interval: "Per favore riprova l'invio tra qualche istante.",
                            required: "«%field%» Campo obbligatorio.",
                            email: "Il campo «%field%» deve contenere un indirizzo e-mail valido.",
                            phone: "Il campo «%field%» deve contenere un numero di telefono valido.",
                            number: "Il campo «%field%» deve avere un numero corretto."
                        },
                        fr: {
                            error: "Impossible d'envoyer le formulaire!",
                            validate: "Ne pas correctement rempli les champs:",
                            interval: "Se il vous plaît essayez d'envoyer un couple de secondes",
                            required: "Le champ «%field%» est nécessaire.",
                            email: "Le champ «%field%» doit contenir votre adresse e-mail réelle.",
                            phone: "Le champ «%field%» doit contenir un numéro de téléphone valide.",
                            number: "Le champ «%field%» doit être un nombre valide."
                        },
                        de: {
                            error: "Die form konnte nicht gesendet!",
                            validate: "Sei nicht korrekt ausgefüllt Felder:",
                            interval: "Versuchen Sie, ein paar Sekunden zu senden.",
                            required: "Das Feld «%field%» ist nicht erforderlich.",
                            email: "Das Feld «%field%» muss auf Ihren eigenen E-Mail Adresse enthalten.",
                            phone: "Das Feld «%field%» muss eine gültige Telefonnummer enthalten.",
                            number: "Das Feld «%field%» muss eine gültige Zahl sein."
                        },
                        "pt-BR": {
                            error: "Não foi possível enviar o formulário!",
                            validate: "Não campos preenchidos corretamente:",
                            interval: "Por favor, tente enviar um par de segundos",
                            required: "O campo «%field%» é necessário.",
                            email: "O campo «%field%» deve conter o seu endereço de e-mail real.",
                            phone: "O campo «%field%» deve conter um número de telefone válido.",
                            number: "O campo «%field%» deve ser um número válido."
                        },
                        cs: {
                            error: "Nepodařilo se odeslat formulář!",
                            validate: "Nesprávně vyplněné pole:",
                            interval: "Prosím zopakujte odeslání za pár vteřin.",
                            required: "Pole «%field%» nutné k vyplnění.",
                            email: "Pole «%field%» musí obsahovat vaši správnou e-mail adresu.",
                            phone: "Pole «%field%» musí obsahovat vaše správné telefonní číslo.",
                            number: "Pole «%field%» musí být prvočislem."
                        },
                        el: {
                            error: "Η φόρμα δεν στάλθηκε!",
                            validate: "Τα πεδία δεν συμπληρώθηκαν σωστά:",
                            interval: "Παρακαλώ, προσπαθήστε ξανά σε μερικά δευτερόλεπτα.",
                            required: "Το πεδίο «%field%» απαιτείται.",
                            email: "Το πεδίο «%field%» πρέπει να περιλαμβάνει την πραγματική διεύθυνση e-mail σας.",
                            phone: "Το πεδίο «%field%» πρέπει να περιέχει τον σωστό αριθμό τηλεφώνου.",
                            number: "Το πεδίο «%field%» θα πρέπει να είναι ο σωστός αριθμός."
                        },
                        lt: {
                            error: "Nepasisekė nusiųsti formą!",
                            validate: "Neteisingai užpildyti laukai:",
                            interval: "Prašome pakartoti siuntimą po keletą sekundžių.",
                            required: "Laukas «%field%» būtinas užpildymui.",
                            email: "Laukas «%field%» turi būti nurodytas jūsų esamas email adresas.",
                            phone: "Laukas «%field%» turi būti teisingai nurodytas telefono numeris.",
                            number: "Laukas «%field%» turu būti nurodytas teisingas skaičius."
                        },
                        pl: {
                            error: "Nie udało się wysłać formularz",
                            validate: "Nieprawidłowo wpisałeś dane",
                            interval: "Proszę powtórzyć za parę sekund",
                            required: 'Informacja "%field%" musi być wypełniona',
                            email: "Nieprawidłowy adres e-mail",
                            phone: "Nieprawidłowy numer telefonu",
                            number: "Wpisałeś nieprawidłowe dane"
                        },
                        kz: {
                            error: "Формаңыз жіберілмеді!",
                            validate: "Қате толтырылған:",
                            interval: "Өтінеміз, бірнеше секундтан соң тағы қайталап байқап көріңіз.",
                            required: '"%field%" толтыруыңыз міндетті.',
                            email: '"%field%" сіздің e-mail адресіңіз шын болуы тиіс.',
                            phone: '"%field%" телефон номеріңізді дұрыстап жазуыңызды сұранамыз.',
                            number: '"%field%" санды дұрыстап жазуыңызды сұранамыз.'
                        },
                        "zh-CN": {
                            error: "填好的表格发不了",
                            validate: "这些字段填写无法",
                            interval: "请稍等再发送",
                            required: "该“%field%” 字段必须填好",
                            email: "该“%field%” 字段必须含真实的电子邮件",
                            phone: "该“%field%” 字段必须填写有效手机号码",
                            number: "该“%field%” 字段必须填写正确的号码"
                        },
                        ge: {
                            error: "ფორმა არ გაიგზავნა!",
                            validate: "შემდეგი ველები არასწორად არის შევსებული:",
                            interval: "გაიმეორეთ გაგზავნის",
                            required: "ამ ველის «%field%» შევსება აუცილებელია.",
                            email: "ეს ველი «%field%» უნდა შეიცავდეს თქვენი ნამდვილი ელ-ფოსტის მისამართს.",
                            phone: "ეს ველი «%field%» უნდა შეიცავდეს რეალურად არსებულ ტელეფონის ნომერს.",
                            number: "ამ ველში «%field%» უნდა იყოს სწორი რიცხვი."
                        },
                        ro: {
                            error: "Formularul nu a fost trimis!",
                            validate: "Câmp completat incorect:",
                            interval: "Vă rugăm să încercați peste câteva secunde.",
                            required: "Câmp «%field%» obligator.",
                            email: "Câmpul «%field%» trebuie să conțină adresa Dvs. e-mail veridică.",
                            phone: "Câmpul «%field%» trebuie să conțină numărul Dvs. de telefon veridic.",
                            number: "Câmpul «%field%»trebuie să conțină o dată veridică."
                        },
                        lv: {
                            error: "Jūsu ziņojums netika nosūtīts!",
                            validate: "Lauks nav aizpildīts vai ir aizpildīts nepareizi:",
                            interval: "Lūdzu, nosūtiet atkārtoti pēc dažām sekundēm.",
                            required: "Lauks «%field%» jāaizpilda obligāti.",
                            email: "Laukā «%field%» jābūt Jūsu īstai e-pasta adresei.",
                            phone: "Laukā «%field%» jānorāda īstais telefona numurs.",
                            number: "Laukā «%field%» jānorāda tikai cipari."
                        },
                        he: {
                            error: "תופס נשלח ללא הצלחה",
                            validate: "השדות ממולאים לא נכון",
                            interval: "אנא לשלוח שוב בעוד כמה שניות",
                            required: 'חייב למלאות שדה "%field%"',
                            email: 'שדה "%field%" חייב לכלול את כתובת הדואר האלקטרוני האמיתית שלך',
                            phone: 'שדה "%field%" חייב לכלול מספר טלפון נכון',
                            number: 'שדה "%field%" צריך להיות המספר הנכון'
                        }
                    }, t = n[window.plp_lang || window.plp.lang || "ru"], c = "Да", u = "Нет", r = function(e, t, n) {
                        try {
                            var r;
                            return "xs" === plp.screen ? (r = e, t && (r += "\n" + t), alert(r), void(n && n())) : Modernizr.cssanimations ? swal({
                                title: e,
                                text: t || null,
                                type: "error"
                            }, n) : swal({
                                title: e,
                                text: t || null,
                                imageUrl: "//s.platformalp.ru/swal/error.png"
                            }, n)
                        } catch (o) {
                            error_handler(o, "red libs 2", arguments.callee)
                        }
                    }, o = function(e, t, n) {
                        try {
                            var r;
                            return "xs" === plp.screen ? (r = e, t && (r += "\n" + t), alert(r), void(n && n())) : Modernizr.cssanimations ? swal({
                                title: e,
                                text: t || null,
                                type: "success"
                            }, n) : swal({
                                title: e,
                                text: t || null,
                                imageUrl: "//s.platformalp.ru/swal/success.png"
                            }, n)
                        } catch (o) {
                            error_handler(o, "red libs 3", arguments.callee)
                        }
                    }, $("[data-ym_goal]").each(function() {
                        try {
                            var e;
                            if (e = $(this), e.closest("form.form").length) return;
                            return e.on("click", function() {
                                try {
                                    var t;
                                    if (t = e.data("ym_goal"), window.yaCounter) return yaCounter.reachGoal(t)
                                } catch (n) {
                                    error_handler(n, "red libs 5", arguments.callee)
                                }
                            })
                        } catch (t) {
                            error_handler(t, "red libs 4", arguments.callee)
                        }
                    }), $("[data-ga_category]").each(function() {
                        try {
                            var e;
                            if (e = $(this), e.closest("form.form").length) return;
                            return e.on("click", function() {
                                try {
                                    var t, n;
                                    if (n = e.data("ga_category"), t = e.data("ga_action"), window.ga) return ga("send", "event", n, t)
                                } catch (r) {
                                    error_handler(r, "red libs 7", arguments.callee)
                                }
                            })
                        } catch (t) {
                            error_handler(t, "red libs 6", arguments.callee)
                        }
                    }), $("form.form").each(function() {
                        try {
                            var n, f, p, h, m, y, v, g;
                            return p = $(this), m = p.data("form"), y = p.closest("[data-item]").data("item") || [], v = p.closest('[data-modal="cart"]').length ? plp.cart.list : [], h = p.data("fields"), g = {
                                hit: {
                                    page_id: a,
                                    ab_id: e,
                                    visit_id: d
                                },
                                form: m,
                                item: y,
                                items: v,
                                fields: h
                            }, f = p.find(".field").each(function(e) {
                                try {
                                    var t, n, o;
                                    if (t = $(this), o = g.fields[e], "radio-list" === o.type && t.find("input").prop("name", _.uniqueId("radio")), "textarea" === o.type && t.find("textarea").val(function(e, t) {
                                            try {
                                                return $.trim(t)
                                            } catch (n) {
                                                error_handler(n, "red libs 10", arguments.callee)
                                            }
                                        }), "file" === o.type) return (n = function() {
                                        try {
                                            return t.find(":file").on("change", function() {
                                                try {
                                                    var e, o;
                                                    for (o = t.find(":file").closest(".pseudo"), o.clone().insertAfter(o), e = $("<form>"), i = 0, attributes = o[0].attributes; i < attributes.length; i++) e.attr(attributes[i].name, attributes[i].value);
                                                    return e.append(o.children()), e.appendTo("body").hide(), o.remove(), e.ajaxSubmit({
                                                        beforeSend: function() {
                                                            try {
                                                                return t.find("span.state").text("Загрузка...")
                                                            } catch (e) {
                                                                error_handler(e, "red libs 13", arguments.callee)
                                                            }
                                                        },
                                                        uploadProgress: function(e, n, r, o) {
                                                            try {
                                                                return t.find("span.state").text("Загрузка... " + o + "%")
                                                            } catch (i) {
                                                                error_handler(i, "red libs 14", arguments.callee)
                                                            }
                                                        },
                                                        success: function(r) {
                                                            try {
                                                                return t.data("result", r), t.find("span.state").text("Файл загружен"), e.remove(), n()
                                                            } catch (o) {
                                                                error_handler(o, "red libs 15", arguments.callee)
                                                            }
                                                        },
                                                        error: function(o) {
                                                            try {
                                                                return r("Ошибка загрузки!", 400 === o.status ? o.responseText : null), t.find("span.state").text("Выберите файл..."), t.data("result", null), e.remove(), n()
                                                            } catch (i) {
                                                                error_handler(i, "red libs 16", arguments.callee)
                                                            }
                                                        },
                                                        dataType: "json"
                                                    })
                                                } catch (a) {
                                                    error_handler(a, "red libs 12", arguments.callee)
                                                }
                                            })
                                        } catch (e) {
                                            error_handler(e, "red libs 11", arguments.callee)
                                        }
                                    })()
                                } catch (a) {
                                    error_handler(a, "red libs 9", arguments.callee)
                                }
                            }), p.find("[data-placeholder]").each(function() {
                                try {
                                    var e, t;
                                    if (e = $(this), !e.val()) return;
                                    return e.data("placeholder", !0), t = e.val(), e.on("focus", function(t) {
                                        try {
                                            if (e.data("placeholder")) return e.val("").data("placeholder", !1)
                                        } catch (n) {
                                            error_handler(n, "red libs 18", arguments.callee)
                                        }
                                    }), e.on("blur", function(n) {
                                        try {
                                            if ("" === e.val()) return e.val(t).data("placeholder", !0)
                                        } catch (r) {
                                            error_handler(r, "red libs 19", arguments.callee)
                                        }
                                    })
                                } catch (n) {
                                    error_handler(n, "red libs 17", arguments.callee)
                                }
                            }), n = p.find(".submit"), p.on("submit", function(e) {
                                try {
                                    var i, a, d, h, y, b;
                                    return e.preventDefault(), $.now() - l < s ? void r(t.error, t.interval) : (d = [], f.each(function(e) {
                                        try {
                                            var n;
                                            if ("checkbox-input" === g.fields[e].type ? g.fields[e].value = $(this).find("input").prop("checked") ? c : u : "radio-list" === g.fields[e].type ? g.fields[e].value = $(this).find("[type=radio]:checked").val() || "" : "select-menu" === g.fields[e].type ? g.fields[e].value = $(this).find("select").val() : "hidden" === g.fields[e].type ? (g.fields[e].name = g.fields[e].id, g.fields[e].value = $(this).find("input").val()) : "file" === g.fields[e].type ? g.fields[e].value = $(this).data("result") || "" : (n = $(this).find(".form-control").data("placeholder"), g.fields[e].value = n ? "" : $(this).find(".form-control").val()), g.fields[e].required && "" === g.fields[e].value && d.push(t.required.replace("%field%", g.fields[e].name)), "" === g.fields[e].value) return;
                                            if ("email" !== g.fields[e].type || /.+@.+\..+/.test(g.fields[e].value) || d.push(t.email.replace("%field%", g.fields[e].name)), "phone" === g.fields[e].type && !/.*\d.*\d.*\d.*\d.*/.test(g.fields[e].value)) return d.push(t.phone.replace("%field%", g.fields[e].name))
                                        } catch (r) {
                                            error_handler(r, "red libs 21", arguments.callee)
                                        }
                                    }), "checkbox" === m.privacy && (i = p.closest(".body").find(".agreement-checkbox input").prop("checked"), h = m.privacy_checkbox.replace(/[<>]/g, ""), i === !1 && d.push(t.required.replace("%field%", h))), d.length > 0 ? void r(t.validate, d.join("\n")) : (b = {
                                        name: "",
                                        phone: "",
                                        email: "",
                                        count: "",
                                        fields: {},
                                        item: {},
                                        send: g,
                                        items: []
                                    }, _.each(g.fields, function(e) {
                                        try {
                                            var t;
                                            if ("" === b[e.type] && (b[t = e.type] || (b[t] = e.value)), !b.fields[e.name]) return b.fields[e.name] = e.value
                                        } catch (n) {
                                            error_handler(n, "red libs 22", arguments.callee)
                                        }
                                    }), _.each(g.item, function(e) {
                                        try {
                                            var t, n;
                                            return (t = b.item)[n = e.type] || (t[n] = _.escape(e.value))
                                        } catch (r) {
                                            error_handler(r, "red libs 23", arguments.callee)
                                        }
                                    }), _.each(g.items, function(e, t) {
                                        try {
                                            return b.items[t] = {}, _.each(e, function(e) {
                                                try {
                                                    var n, r, o, i;
                                                    "amount" === e.type || "photo" === e.type ? (n = b.items[t])[o = e.type] || (n[o] = e.value) : (r = b.items[t])[i = e.type] || (r[i] = _.escape(e.value))
                                                } catch (a) {
                                                    error_handler(a, "red libs 25", arguments.callee)
                                                }
                                            })
                                        } catch (n) {
                                            error_handler(n, "red libs 24", arguments.callee)
                                        }
                                    }), m.payPrice && !b.items.length && b.items.push({
                                        amount: 1,
                                        price: m.payPrice,
                                        title: m.payTitle
                                    }), n.prop("disabled", !0), y = function(e, i, a) {
                                        try {
                                            var l, u, c, d;
                                            return _.defaults(e, b), console.log("Данные формы", {
                                                time: e.time,
                                                name: e.name,
                                                email: e.email,
                                                phone: e.phone,
                                                count: e.count,
                                                fields: e.fields,
                                                item: e.item,
                                                items: e.items
                                            }), n.prop("disabled", !1), 0 === e.result ? r(t.error, e.errors) : 1 === e.result ? (d = n.data("ym_goal"), window.yaCounter && yaCounter.reachGoal(d), u = n.data("ga_category"), l = n.data("ga_action"), window.ga && ga("send", "event", u, l), "msg" === m.after ? o(_.template(m.msg, e), null) : "url" === m.after ? location.href = _.template(m.url, e) : "addhtml" === m.after ? $("body").append(_.template(m.addhtml, e)) : "pay" === m.after ? e.url ? location.href = e.url : e.form && $(e.form).hide().appendTo("body").submit() : "msg+url" === m.after ? o(_.template(m.msg, e), null, function() {
                                                try {
                                                    return location.href = _.template(m.url, e)
                                                } catch (t) {
                                                    error_handler(t, "red libs 27", arguments.callee)
                                                }
                                            }) : "msg+pay" === m.after ? o(_.template(m.msg, e), null, function() {
                                                try {
                                                    if (e.url) return location.href = e.url;
                                                    if (e.form) return $(e.form).hide().appendTo("body").submit()
                                                } catch (t) {
                                                    error_handler(t, "red libs 28", arguments.callee)
                                                }
                                            }) : "msg+addhtml" === m.after ? o(_.template(m.msg, e), null, function() {
                                                try {
                                                    return $("body").append(_.template(m.addhtml, e))
                                                } catch (t) {
                                                    error_handler(t, "red libs 29", arguments.callee)
                                                }
                                            }) : "js" === m.after && (c = "(function () { var time = <%= time %>; var name = '<%- name %>'; var email = '<%- email %>'; var phone = '<%- phone %>'; var count = '<%- count %>'; var fields = <%= JSON.stringify(fields) %>; var item = <%= JSON.stringify(item) %>; var items = <%= JSON.stringify(items) %>; var send = <%= JSON.stringify(send) %>;" + m.js + "})();", $.globalEval(_.template(c, e)))) : r(t.error, null), p.trigger("reset").find("[data-placeholder]").data("placeholder", !0), v.length && plp.cart.empty(), plp.modal.closeAll(), s = $.now()
                                        } catch (f) {
                                            error_handler(f, "red libs 26", arguments.callee)
                                        }
                                    }, a = function(e, o, i) {
                                        try {
                                            return n.prop("disabled", !1), r(t.error, 400 === e.status ? e.responseText : null), s = $.now()
                                        } catch (a) {
                                            error_handler(a, "red libs 30", arguments.callee)
                                        }
                                    }, $.ajax("/app/c", {
                                        type: "POST",
                                        data: JSON.stringify(g),
                                        dataType: "json",
                                        contentType: "application/json",
                                        processData: !1,
                                        success: y,
                                        error: y
                                    })))
                                } catch (w) {
                                    error_handler(w, "red libs 20", arguments.callee)
                                }
                            })
                        } catch (b) {
                            error_handler(b, "red libs 8", arguments.callee)
                        }
                    })
                } catch (f) {
                    error_handler(f, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t, n, r, o, i, a;
                    if ("scroll" !== window.plp.animations.section.type && "scroll" !== window.plp.animations.widget.type || (new WOW).init(), $('[data-action="formscroll"]').each(function() {
                            try {
                                var e, t, n, r, o;
                                return o = $(this), t = o.closest(".section"), r = t.prevAll(".section"), n = t.nextAll(".section"), e = o.hasClass("btn") ? o : o.find(".btn"), e.on("click", function() {
                                    try {
                                        var e, o, i;
                                        if (o = n.find(".form:visible").first(), 1 === o.length) return $("html, body").animate({
                                            scrollTop: o.offset().top - 100
                                        }, {
                                            duration: 1500,
                                            easing: "easeInOutQuint"
                                        });
                                        if (e = t.find(".form:visible").first(), 1 === e.length) return $("html, body").animate({
                                            scrollTop: e.offset().top - 100
                                        }, {
                                            duration: 1500,
                                            easing: "easeInOutQuint"
                                        });
                                        if (i = r.find(".form:visible").last(), 1 === i.length) return $("html, body").animate({
                                            scrollTop: i.offset().top - 100
                                        }, {
                                            duration: 1500,
                                            easing: "easeInOutQuint"
                                        })
                                    } catch (a) {
                                        error_handler(a, "red libs 3", arguments.callee)
                                    }
                                })
                            } catch (i) {
                                error_handler(i, "red libs 2", arguments.callee)
                            }
                        }), t = $(".section.fixation").first(), $(document).on("click", 'a[href^="#"]', function(e) {
                            try {
                                var n, r, o;
                                if (e.isDefaultPrevented()) return;
                                if (n = $($(this).attr("href")), n.length) return o = n.offset().top, t.length && (o -= t.height()), $("html").hasClass("pp") ? (r = n.closest(".pp-section").index(".pp-section"), r = n.closest(".pp-section").index(".pp-section"), $.fn.pagepiling.moveTo(r + 1)) : $("html,body").animate({
                                    scrollTop: o
                                }, {
                                    duration: 1e3,
                                    easing: "easeInOutCubic"
                                }), !1
                            } catch (i) {
                                error_handler(i, "red libs 4", arguments.callee)
                            }
                        }), n = location.href.match(/scrollblock=(\d+)/)) {
                        if (i = location.href.match(/scrolloffset=(-?\d+)/), o = i.length ? 1 * i[1] : 0, r = 1 * n[1], e = $(".node.section").eq(r), e.length) return a = e.offset().top + o, $(document).scrollTop(a);
                        throw new Error("lib-scroll trying to scroll to unexisting " + r + " block")
                    }
                } catch (l) {
                    error_handler(l, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            var e, t, n, r;
            r = function(e, t) {
                try {
                    var n, r, o, i, a, l;
                    for (n = function() {
                            try {
                                return setTimeout(function(e) {
                                    try {
                                        return function() {
                                            try {
                                                return t()
                                            } catch (e) {
                                                error_handler(e, "red libs 4", arguments.callee)
                                            }
                                        }
                                    } catch (n) {
                                        error_handler(n, "red libs 3", arguments.callee)
                                    }
                                }(this), 500)
                            } catch (e) {
                                error_handler(e, "red libs 2", arguments.callee)
                            }
                        }, a = 0, l = [], o = 0, i = e.length; o < i; o++) r = e[o], l.push(function(t) {
                        try {
                            var r, o, i, l;
                            if (i = document.createElement("span"), i.innerHTML = "giItT1WQy@!-/#", i.style.position = "fixed", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "1000px", i.style.fontFamily = "sans-serif", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", document.body.appendChild(i), l = i.offsetWidth, i.style.fontFamily = t, o = void 0, r = function() {
                                    try {
                                        if (i && i.offsetWidth !== l && (++a, i.parentNode.removeChild(i), i = null), a >= e.length && (o && clearInterval(o), a === e.length)) return n(), !0
                                    } catch (t) {
                                        error_handler(t, "red libs 6", arguments.callee)
                                    }
                                }, !r()) return o = setInterval(r, 500)
                        } catch (s) {
                            error_handler(s, "red libs 5", arguments.callee)
                        }
                    }(r));
                    return l
                } catch (s) {
                    error_handler(s, "red libs 1", arguments.callee)
                }
            }, t = {
                opensans: ["Open Sans"],
                robotosans: ["Open Sans", "Roboto Slab"],
                introsans: ["Open Sans", "Intro"],
                sportsans: ["Open Sans", "Sports World"],
                unisans: ["Open Sans", "Uni Sans"],
                junesans: ["Open Sans", "Junegull"],
                geolobster: ["Lobster"],
                geoseva: ["Yeseva One"],
                geobeer: ["Beer money"],
                sladkoblogger: ["Sladkoeshka", "Blogger Sans"]
            }, e = $("div.area"), n = !1, $.each(t, function(t, o) {
                try {
                    if (e.hasClass(t)) return n = !0, r(o, function() {
                        try {
                            return $(plp).trigger("fonts-loaded")
                        } catch (e) {
                            error_handler(e, "red libs 8", arguments.callee)
                        }
                    }), !1
                } catch (i) {
                    error_handler(i, "red libs 7", arguments.callee)
                }
            }), n || $(plp).trigger("fonts-loaded")
        } catch (o) {
            error_handler(o, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t, n;
                    if (n = !1, t = $("<div></div>"), e = $(".section.fixation:visible:first"), e.length) return $(document).on("scroll", function(r) {
                        try {
                            var o, i;
                            if (o = $(document).scrollTop(), n) {
                                if (i = t.offset().top, o < i) return t.remove(), e.removeClass("fixed"), n = !1
                            } else if (i = e.offset().top, o > i) return t.css("height", e.height()).insertAfter(e), e.addClass("fixed"), n = !0
                        } catch (a) {
                            error_handler(a, "red libs 2", arguments.callee)
                        }
                    })
                } catch (r) {
                    error_handler(r, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".node[data-bgvideo]").each(function() {
                        try {
                            var e, t;
                            return e = $(this), t = e.data("bgvideo"), plp.lazy.add(e.removeAttr("data-bgvideo"), function(n) {
                                try {
                                    var r;
                                    if ("youtube" === t.bgVideo_Source) return r = $("<div></div>").prependTo(e.children(".wrapper1")), r.data("property", {
                                        videoURL: t.bgVideo_Youtube,
                                        containment: r,
                                        mute: !0,
                                        showControls: !1
                                    }).YTPlayer();
                                    if ("direct" === t.bgVideo_Source || "library" === t.bgVideo_Source) return r = e.children(".wrapper1"), r.vide({
                                        mp4: t.bgVideo_Mp4,
                                        webm: t.bgVideo_Webm,
                                        ogv: t.bgVideo_Ogv
                                    }, {
                                        mute: !0,
                                        autoplay: !0,
                                        loop: !0,
                                        posterType: "none"
                                    })
                                } catch (o) {
                                    error_handler(o, "red libs 3", arguments.callee)
                                }
                            })
                        } catch (n) {
                            error_handler(n, "red libs 2", arguments.callee)
                        }
                    })
                } catch (e) {
                    error_handler(e, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".node[data-bgsnow]").each(function() {
                        try {
                            var e, t, n;
                            return e = $(this), t = e.data("bgsnow"), e.removeAttr("data-bgsnow"), n = new Snowfall({
                                root: e.find("> .wrapper1 > .wrapper2").get(0),
                                type: "text",
                                content: ["*", "&#10052", "&#10053", "&#10054", "."],
                                minSize: 10,
                                maxSize: 30
                            }), e.data("bgsnow", n)
                        } catch (r) {
                            error_handler(r, "red libs 2", arguments.callee)
                        }
                    })
                } catch (e) {
                    error_handler(e, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            var e;
            "slider" === window.plp.animations.section.type && (e = function() {
                try {
                    var t;
                    if (!window.plp.screen) return setTimeout(e, 10);
                    if ("xs" !== window.plp.screen) return $("html").addClass("pp"), $("div.area").pagepiling({
                        menu: null,
                        direction: "vertical",
                        verticalCentered: !1,
                        sectionsColor: [],
                        anchors: [],
                        scrollingSpeed: 700,
                        easing: "swing",
                        loopBottom: !1,
                        loopTop: !1,
                        css3: !0,
                        navigation: {
                            bulletsColor: "#fff",
                            position: "right"
                        },
                        normalScrollElements: null,
                        normalScrollElementTouchThreshold: 5,
                        touchSensitivity: 5,
                        keyboardScrolling: !0,
                        sectionSelector: ".section:not(.section-helper)",
                        animateAnchor: !1,
                        onLeave: function(e, t, n) {
                            try {
                                var r;
                                if ($(".pp-section").eq(e - 1).find(".wow").addClass("wow-finished"), $(".pp-section").eq(t - 1).find(".wow:not(.wow-finished)").removeAttr("style").css({
                                        visibility: "hidden"
                                    }), r = function(e, t) {
                                        try {
                                            return setTimeout(t, e)
                                        } catch (n) {
                                            error_handler(n, "red libs 3", arguments.callee)
                                        }
                                    }, $(".wow:not(.wow-finished)").length) return r(700, function() {
                                    try {
                                        return $(".pp-section").eq(t - 1).find(".wow").css({
                                            visibility: "visible"
                                        }), (new WOW).init()
                                    } catch (e) {
                                        error_handler(e, "red libs 4", arguments.callee)
                                    }
                                })
                            } catch (o) {
                                error_handler(o, "red libs 2", arguments.callee)
                            }
                        }
                    }), t = function() {
                        try {
                            var e;
                            return e = $("div.area").height(), $(".pp-section>.wrapper1, .pp-section>.wrapper1>.wrapper2").css({
                                height: e
                            })
                        } catch (t) {
                            error_handler(t, "red libs 5", arguments.callee)
                        }
                    }, t(), $(window).on("resize", t)
                } catch (n) {
                    error_handler(n, "red libs 1", arguments.callee)
                }
            })()
        } catch (t) {
            error_handler(t, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".section-slider").each(function() {
                        try {
                            var e, t;
                            return e = $(this).find("> .wrapper1 > .wrapper2 > .container > .incon > .wrap"), t = e.find("> .bxslider"), t.data("$slider", t), plp.lazy.add(t, function() {
                                try {
                                    return plp.lazy.force(t)
                                } catch (e) {
                                    error_handler(e, "red libs 3", arguments.callee)
                                }
                            }), t.bxSlider({
                                slideSelector: ".slide",
                                auto: !0,
                                controls: !1,
                                adaptive: !0,
                                preloadImages: "all",
                                pause: 1 * t.data("pause")
                            }), e.find("> .right").on("click", function() {
                                try {
                                    return t.goToNextSlide()
                                } catch (e) {
                                    error_handler(e, "red libs 4", arguments.callee)
                                }
                            }), e.find("> .left").on("click", function() {
                                try {
                                    return t.goToPrevSlide()
                                } catch (e) {
                                    error_handler(e, "red libs 5", arguments.callee)
                                }
                            }), t.find(".lazy").on("load", function() {
                                try {
                                    return t.redrawSlider()
                                } catch (e) {
                                    error_handler(e, "red libs 6", arguments.callee)
                                }
                            })
                        } catch (n) {
                            error_handler(n, "red libs 2", arguments.callee)
                        }
                    })
                } catch (e) {
                    error_handler(e, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".widget-cart-image").each(function() {
                        try {
                            var e;
                            if (e = $(this).find(".colorbox"), !e.length) return;
                            return e.colorbox({
                                maxWidth: "80%",
                                maxHeight: "80%"
                            })
                        } catch (t) {
                            error_handler(t, "red libs 2", arguments.callee)
                        }
                    })
                } catch (e) {
                    error_handler(e, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t, n, r;
                    if (t = $(".widget-comments-fb"), !t.length) return;
                    if (e = t.find(".fb"), e.length) return n = "true" === e.attr("data-joint"), r = "http://" + location.host.replace(/^www\./, ""), n || (r += "/" + location.pathname), e.attr("data-href", r), e.attr("data-width", e.width()), $("head").append('<meta property="fb:app_id" content="' + e.data("apiid") + '"/>'), $('<div id="fb-root"></div>').appendTo("body"),
                        function(e, t, n) {
                            try {
                                var r, o = e.getElementsByTagName(t)[0];
                                if (e.getElementById(n)) return;
                                r = e.createElement(t), r.id = n, r.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8", o.parentNode.insertBefore(r, o)
                            } catch (i) {
                                error_handler(i, "red libs 2", arguments.callee)
                            }
                        }(document, "script", "facebook-jssdk")
                } catch (o) {
                    error_handler(o, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            var e;
            e = function(e) {
                try {
                    return _.reduce(e, function(e, t, n) {
                        try {
                            return e + t.charCodeAt() * Math.pow(n + 5, 5)
                        } catch (r) {
                            error_handler(r, "red libs 2", arguments.callee)
                        }
                    }, e.length)
                } catch (t) {
                    error_handler(t, "red libs 1", arguments.callee)
                }
            }, $(function() {
                try {
                    var t, n, r, o, i, a;
                    if (n = $(".widget-comments-vk"), !n.length) return;
                    if (t = n.find(".vk"), t.length && t.data("apiid")) return r = _.uniqueId("vk_comments"), t.attr("id", r), a = "true" === t.attr("data-joint"), o = 1, a || (o = e(location.host.replace(/^www\./, "") + "/" + location.pathname)), i = "//vk.com/js/api/openapi.js?112", $.getScript(i, function() {
                        try {
                            return VK.init({
                                apiId: t.data("apiid"),
                                onlyWidgets: !0
                            }), VK.Widgets.Comments(r, {
                                limit: 5,
                                width: t.width(),
                                attach: "*"
                            }, o)
                        } catch (e) {
                            error_handler(e, "red libs 4", arguments.callee)
                        }
                    })
                } catch (l) {
                    error_handler(l, "red libs 3", arguments.callee)
                }
            })
        } catch (t) {
            error_handler(t, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".widget-image").each(function() {
                        try {
                            var e;
                            if (e = $(this).find(".colorbox"), !e.length) return;
                            return e.data("rel") ? e.colorbox({
                                rel: e.data("rel"),
                                maxWidth: "80%",
                                maxHeight: "80%"
                            }) : e.colorbox({
                                maxWidth: "80%",
                                maxHeight: "80%"
                            })
                        } catch (t) {
                            error_handler(t, "red libs 2", arguments.callee)
                        }
                    })
                } catch (e) {
                    error_handler(e, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".widget-slider").each(function() {
                        try {
                            var e, t;
                            return e = $(this).find("> .wrapper1 > .wrapper2 > .wrap"), t = e.find("> .bxslider"), t.data("$slider", t), plp.lazy.add(t, function() {
                                try {
                                    return plp.lazy.force(t)
                                } catch (e) {
                                    error_handler(e, "red libs 3", arguments.callee)
                                }
                            }), t.bxSlider({
                                slideSelector: ".slide",
                                auto: !0,
                                controls: !1,
                                adaptive: !0,
                                preloadImages: "all",
                                pause: 1 * t.data("pause")
                            }), e.find("> .right").on("click", function() {
                                try {
                                    return t.goToNextSlide()
                                } catch (e) {
                                    error_handler(e, "red libs 4", arguments.callee)
                                }
                            }), e.find("> .left").on("click", function() {
                                try {
                                    return t.goToPrevSlide()
                                } catch (e) {
                                    error_handler(e, "red libs 5", arguments.callee)
                                }
                            }), t.find(".lazy").on("load", function() {
                                try {
                                    return t.redrawSlider()
                                } catch (e) {
                                    error_handler(e, "red libs 6", arguments.callee)
                                }
                            }), t.on("openModal", function() {
                                try {
                                    return t.reloadSlider()
                                } catch (e) {
                                    error_handler(e, "red libs 7", arguments.callee)
                                }
                            })
                        } catch (n) {
                            error_handler(n, "red libs 2", arguments.callee)
                        }
                    })
                } catch (e) {
                    error_handler(e, "red libs 1", arguments.callee)
                }
            })
        } catch (e) {
            error_handler(e, "red libs 0", arguments.callee)
        }
    }.call(this);