﻿/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) { return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1 } function cu(a) { if (!cj[a]) { var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display"); d.remove(); if (e === "none" || e === "") { ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck); if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close(); d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck) } cj[a] = e } return cj[a] } function ct(a, b) { var c = {}; f.each(cp.concat.apply([], cp.slice(0, b)), function () { c[this] = a }); return c } function cs() { cq = b } function cr() { setTimeout(cs, 0); return cq = f.now() } function ci() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } function ch() { try { return new a.XMLHttpRequest } catch (b) { } } function cb(a, c) { a.dataFilter && (c = a.dataFilter(c, a.dataType)); var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p; for (g = 1; g < i; g++) { if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]); l = k, k = d[g]; if (k === "*") k = l; else if (l !== "*" && l !== k) { m = l + " " + k, n = e[m] || e["* " + k]; if (!n) { p = b; for (o in e) { j = o.split(" "); if (j[0] === l || j[0] === "*") { p = e[j[1] + " " + k]; if (p) { o = e[o], o === !0 ? n = p : p === !0 && (n = o); break } } } } !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c))) } } return c } function ca(a, c, d) { var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k; for (i in g) i in d && (c[g[i]] = d[i]); while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type")); if (h) for (i in e) if (e[i] && e[i].test(h)) { f.unshift(i); break } if (f[0] in d) j = f[0]; else { for (i in d) { if (!f[0] || a.converters[i + " " + f[0]]) { j = i; break } k || (k = i) } j = j || k } if (j) { j !== f[0] && f.unshift(j); return d[j] } } function b_(a, b, c, d) { if (f.isArray(b)) f.each(b, function (b, e) { c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d) }); else if (!c && f.type(b) === "object") for (var e in b) b_(a + "[" + e + "]", b[e], c, d); else d(a, b) } function b$(a, c) { var d, e, g = f.ajaxSettings.flatOptions || {}; for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]); e && f.extend(!0, a, e) } function bZ(a, c, d, e, f, g) { f = f || c.dataTypes[0], g = g || {}, g[f] = !0; var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l; for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g))); (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g)); return l } function bY(a) { return function (b, c) { typeof b != "string" && (c = b, b = "*"); if (f.isFunction(c)) { var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j; for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c) } } } function bB(a, b, c) { var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4; if (d > 0) { if (c !== "border") for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0; return d + "px" } d = by(a, b); if (d < 0 || d == null) d = a.style[b]; if (bt.test(d)) return d; d = parseFloat(d) || 0; if (c) for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0); return d + "px" } function bo(a) { var b = c.createElement("div"); bh.appendChild(b), b.innerHTML = a.outerHTML; return b.firstChild } function bn(a) { var b = (a.nodeName || "").toLowerCase(); b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm) } function bm(a) { if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked } function bl(a) { return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : [] } function bk(a, b) { var c; b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_uploads"), b.removeAttribute("_change_uploads")) } function bj(a, b) { if (b.nodeType === 1 && !!f.hasData(a)) { var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events; if (i) { delete h.handle, h.events = {}; for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d]) } h.data && (h.data = f.extend({}, h.data)) } } function bi(a, b) { return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function U(a) { var b = V.split("|"), c = a.createDocumentFragment(); if (c.createElement) while (b.length) c.createElement(b.pop()); return c } function T(a, b, c) { b = b || 0; if (f.isFunction(b)) return f.grep(a, function (a, d) { var e = !!b.call(a, d, a); return e === c }); if (b.nodeType) return f.grep(a, function (a, d) { return a === b === c }); if (typeof b == "string") { var d = f.grep(a, function (a) { return a.nodeType === 1 }); if (O.test(b)) return f.filter(b, d, !c); b = f.filter(b, d) } return f.grep(a, function (a, d) { return f.inArray(a, b) >= 0 === c }) } function S(a) { return !a || !a.parentNode || a.parentNode.nodeType === 11 } function K() { return !0 } function J() { return !1 } function n(a, b, c) { var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d); h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () { !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire()) }, 0) } function m(a) { for (var b in a) { if (b === "data" && f.isEmptyObject(a[b])) continue; if (b !== "toJSON") return !1 } return !0 } function l(a, c, d) { if (d === b && a.nodeType === 1) { var e = "data-" + c.replace(k, "-$1").toLowerCase(); d = a.getAttribute(e); if (typeof d == "string") { try { d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d } catch (g) { } f.data(a, c, d) } else d = b } return d } function h(a) { var b = g[a] = {}, c, d; a = a.split(/\s+/); for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0; return b } var c = a.document, d = a.navigator, e = a.location, f = function () { function J() { if (!e.isReady) { try { c.documentElement.doScroll("left") } catch (a) { setTimeout(J, 1); return } e.ready() } } var e = function (a, b) { return new e.fn.init(a, b, h) }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) { return (b + "").toUpperCase() }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {}; e.fn = e.prototype = { constructor: e, init: function (a, d, f) { var g, h, j, k; if (!a) return this; if (a.nodeType) { this.context = this[0] = a, this.length = 1; return this } if (a === "body" && !d && c.body) { this.context = c, this[0] = c.body, this.selector = a, this.length = 1; return this } if (typeof a == "string") { a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null]; if (g && (g[1] || !d)) { if (g[1]) { d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes); return e.merge(this, a) } h = c.getElementById(g[2]); if (h && h.parentNode) { if (h.id !== g[2]) return f.find(a); this.length = 1, this[0] = h } this.context = c, this.selector = a; return this } return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a) } if (e.isFunction(a)) return f.ready(a); a.selector !== b && (this.selector = a.selector, this.context = a.context); return e.makeArray(a, this) }, selector: "", jquery: "1.7.2", length: 0, size: function () { return this.length }, toArray: function () { return F.call(this, 0) }, get: function (a) { return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a] }, pushStack: function (a, b, c) { var d = this.constructor(); e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"); return d }, each: function (a, b) { return e.each(this, a, b) }, ready: function (a) { e.bindReady(), A.add(a); return this }, eq: function (a) { a = +a; return a === -1 ? this.slice(a) : this.slice(a, a + 1) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, slice: function () { return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(",")) }, map: function (a) { return this.pushStack(e.map(this, function (b, c) { return a.call(b, c, b) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: E, sort: [].sort, splice: [].splice }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () { var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1; typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j); for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) { d = i[c], f = a[c]; if (i === f) continue; l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f) } return i }, e.extend({ noConflict: function (b) { a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f); return e }, isReady: !1, readyWait: 1, holdReady: function (a) { a ? e.readyWait++ : e.ready(!0) }, ready: function (a) { if (a === !0 && ! --e.readyWait || a !== !0 && !e.isReady) { if (!c.body) return setTimeout(e.ready, 1); e.isReady = !0; if (a !== !0 && --e.readyWait > 0) return; A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready") } }, bindReady: function () { if (!A) { A = e.Callbacks("once memory"); if (c.readyState === "complete") return setTimeout(e.ready, 1); if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) { c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready); var b = !1; try { b = a.frameElement == null } catch (d) { } c.documentElement.doScroll && b && J() } } }, isFunction: function (a) { return e.type(a) === "function" }, isArray: Array.isArray || function (a) { return e.type(a) === "array" }, isWindow: function (a) { return a != null && a == a.window }, isNumeric: function (a) { return !isNaN(parseFloat(a)) && isFinite(a) }, type: function (a) { return a == null ? String(a) : I[C.call(a)] || "object" }, isPlainObject: function (a) { if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1; try { if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } var d; for (d in a); return d === b || D.call(a, d) }, isEmptyObject: function (a) { for (var b in a) return !1; return !0 }, error: function (a) { throw new Error(a) }, parseJSON: function (b) { if (typeof b != "string" || !b) return null; b = e.trim(b); if (a.JSON && a.JSON.parse) return a.JSON.parse(b); if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))(); e.error("Invalid JSON: " + b) }, parseXML: function (c) { if (typeof c != "string" || !c) return null; var d, f; try { a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c)) } catch (g) { d = b } (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c); return d }, noop: function () { }, globalEval: function (b) { b && j.test(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(w, "ms-").replace(v, x) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase() }, each: function (a, c, d) { var f, g = 0, h = a.length, i = h === b || e.isFunction(a); if (d) { if (i) { for (f in a) if (c.apply(a[f], d) === !1) break } else for (; g < h; ) if (c.apply(a[g++], d) === !1) break } else if (i) { for (f in a) if (c.call(a[f], f, a[f]) === !1) break } else for (; g < h; ) if (c.call(a[g], g, a[g++]) === !1) break; return a }, trim: G ? function (a) { return a == null ? "" : G.call(a) } : function (a) { return a == null ? "" : (a + "").replace(k, "").replace(l, "") }, makeArray: function (a, b) { var c = b || []; if (a != null) { var d = e.type(a); a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a) } return c }, inArray: function (a, b, c) { var d; if (b) { if (H) return H.call(b, a, c); d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; for (; c < d; c++) if (c in b && b[c] === a) return c } return -1 }, merge: function (a, c) { var d = a.length, e = 0; if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e]; else while (c[e] !== b) a[d++] = c[e++]; a.length = d; return a }, grep: function (a, b, c) { var d = [], e; c = !!c; for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]); return d }, map: function (a, c, d) { var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a)); if (k) for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f); return h.concat.apply([], h) }, guid: 1, proxy: function (a, c) { if (typeof c == "string") { var d = a[c]; c = a, a = d } if (!e.isFunction(a)) return b; var f = F.call(arguments, 2), g = function () { return a.apply(c, f.concat(F.call(arguments))) }; g.guid = a.guid = a.guid || g.guid || e.guid++; return g }, access: function (a, c, d, f, g, h, i) { var j, k = d == null, l = 0, m = a.length; if (d && typeof d == "object") { for (l in d) e.access(a, c, l, d[l], 1, h, f); g = 1 } else if (f !== b) { j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) { return j.call(e(a), c) }) : (c.call(a, f), c = null)); if (c) for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i); g = 1 } return g ? a : k ? c.call(a) : m ? c(a[0], d) : h }, now: function () { return (new Date).getTime() }, uaMatch: function (a) { a = a.toLowerCase(); var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || []; return { browser: b[1] || "", version: b[2] || "0"} }, sub: function () { function a(b, c) { return new a.fn.init(b, c) } e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) { f && f instanceof e && !(f instanceof a) && (f = a(f)); return e.fn.init.call(this, d, f, b) }, a.fn.init.prototype = a.fn; var b = a(c); return a }, browser: {} }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) { I["[object " + b + "]"] = b.toLowerCase() }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () { c.removeEventListener("DOMContentLoaded", B, !1), e.ready() } : c.attachEvent && (B = function () { c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready()) }); return e } (), g = {}; f.Callbacks = function (a) { a = a ? g[a] || h(a) : {}; var c = [], d = [], e, i, j, k, l, m, n = function (b) { var d, e, g, h, i; for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g) }, o = function (b, f) { f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length; for (; c && m < l; m++) if (c[m].apply(b, f) === !1 && a.stopOnFalse) { e = !0; break } j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1]))) }, p = { add: function () { if (c) { var a = c.length; n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1])) } return this }, remove: function () { if (c) { var b = arguments, d = 0, e = b.length; for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) { j && f <= l && (l--, f <= m && m--), c.splice(f--, 1); if (a.unique) break } } return this }, has: function (a) { if (c) { var b = 0, d = c.length; for (; b < d; b++) if (a === c[b]) return !0 } return !1 }, empty: function () { c = []; return this }, disable: function () { c = d = e = b; return this }, disabled: function () { return !c }, lock: function () { d = b, (!e || e === !0) && p.disable(); return this }, locked: function () { return !d }, fireWith: function (b, c) { d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c)); return this }, fire: function () { p.fireWith(this, arguments); return this }, fired: function () { return !!i } }; return p }; var i = [].slice; f.extend({ Deferred: function (a) { var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = { resolve: b, reject: c, notify: d }, h = { done: b.add, fail: c.add, progress: d.add, state: function () { return e }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) { i.done(a).fail(b).progress(c); return this }, always: function () { i.done.apply(i, arguments).fail.apply(i, arguments); return this }, pipe: function (a, b, c) { return f.Deferred(function (d) { f.each({ done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"] }, function (a, b) { var c = b[0], e = b[1], g; f.isFunction(c) ? i[a](function () { g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g]) }) : i[a](d[e]) }) }).promise() }, promise: function (a) { if (a == null) a = h; else for (var b in h) a[b] = h[b]; return a } }, i = h.promise({}), j; for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith; i.done(function () { e = "resolved" }, c.disable, d.lock).fail(function () { e = "rejected" }, b.disable, d.lock), a && a.call(i, i); return i }, when: function (a) { function m(a) { return function (b) { e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e) } } function l(a) { return function (c) { b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b) } } var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise(); if (d > 1) { for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g; g || j.resolveWith(j, b) } else j !== a && j.resolveWith(j, d ? [a] : []); return k } }), f.support = function () { var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement; p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0]; if (!d || !d.length || !e) return {}; g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = { leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(e.getAttribute("style")), hrefNormalized: e.getAttribute("href") === "/a", opacity: /^0.55/.test(e.style.opacity), cssFloat: !!e.style.cssFloat, checkOn: i.value === "on", optSelected: h.selected, getSetAttribute: p.className !== "t", enctype: !!c.createElement("form").enctype, html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, pixelMargin: !0 }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled; try { delete p.test } catch (r) { b.deleteExpando = !1 } !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () { b.noCloneEvent = !1 }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p); if (p.attachEvent) for (n in { submit: 1, change: 1, focusin: 1 }) m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o; j.removeChild(p), j = g = h = p = i = null, f(function () { var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0]; !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || { marginRight: 0 }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = { doesNotAddBorder: g.offsetTop !== 5, doesAddBorderForTableAndCells: i.offsetTop === 5 }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || { marginTop: 0 }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j)) }); return b } (); var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g; f.extend({ cache: {}, uuid: 0, expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function (a) { a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando]; return !!a && !m(a) }, data: function (a, c, d, e) { if (!!f.acceptData(a)) { var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events"; if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return; n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop)); if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c); g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d); if (o && !h[c]) return g.events; k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h; return i } }, removeData: function (a, b, c) { if (!!f.acceptData(a)) { var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h; if (!j[k]) return; if (b) { d = c ? j[k] : j[k].data; if (d) { f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" "))); for (e = 0, g = b.length; e < g; e++) delete d[b[e]]; if (!(c ? m : f.isEmptyObject)(d)) return } } if (!c) { delete j[k].data; if (!m(j[k])) return } f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null) } }, _data: function (a, b, c) { return f.data(a, b, c, !0) }, acceptData: function (a) { if (a.nodeName) { var b = f.noData[a.nodeName.toLowerCase()]; if (b) return b !== !0 && a.getAttribute("classid") === b } return !0 } }), f.fn.extend({ data: function (a, c) { var d, e, g, h, i, j = this[0], k = 0, m = null; if (a === b) { if (this.length) { m = f.data(j); if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) { g = j.attributes; for (i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h])); f._data(j, "parsedAttrs", !0) } } return m } if (typeof a == "object") return this.each(function () { f.data(this, a) }); d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!"; return f.access(this, function (c) { if (c === b) { m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m)); return m === b && d[1] ? this.data(d[0]) : m } d[1] = c, this.each(function () { var b = f(this); b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d) }) }, null, c, arguments.length > 1, null, !1) }, removeData: function (a) { return this.each(function () { f.removeData(this, a) }) } }), f.extend({ _mark: function (a, b) { a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1)) }, _unmark: function (a, b, c) { a !== !0 && (c = b, b = a, a = !1); if (b) { c = c || "fx"; var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1; e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark")) } }, queue: function (a, b, c) { var d; if (a) { b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c)); return d || [] } }, dequeue: function (a, b) { b = b || "fx"; var c = f.queue(a, b), d = c.shift(), e = {}; d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () { f.dequeue(a, b) }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue")) } }), f.fn.extend({ queue: function (a, c) { var d = 2; typeof a != "string" && (c = a, a = "fx", d--); if (arguments.length < d) return f.queue(this[0], a); return c === b ? this : this.each(function () { var b = f.queue(this, a, c); a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { f.dequeue(this, a) }) }, delay: function (a, b) { a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx"; return this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, c) { function m() { --h || d.resolveWith(e, [e]) } typeof a != "string" && (c = a, a = b), a = a || "fx"; var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l; while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m); m(); return d.promise(c) } }); var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y; f.fn.extend({ attr: function (a, b) { return f.access(this, f.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { f.removeAttr(this, a) }) }, prop: function (a, b) { return f.access(this, f.prop, a, b, arguments.length > 1) }, removeProp: function (a) { a = f.propFix[a] || a; return this.each(function () { try { this[a] = b, delete this[a] } catch (c) { } }) }, addClass: function (a) { var b, c, d, e, g, h, i; if (f.isFunction(a)) return this.each(function (b) { f(this).addClass(a.call(this, b, this.className)) }); if (a && typeof a == "string") { b = a.split(p); for (c = 0, d = this.length; c < d; c++) { e = this[c]; if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a; else { g = " " + e.className + " "; for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " "); e.className = f.trim(g) } } } return this }, removeClass: function (a) { var c, d, e, g, h, i, j; if (f.isFunction(a)) return this.each(function (b) { f(this).removeClass(a.call(this, b, this.className)) }); if (a && typeof a == "string" || a === b) { c = (a || "").split(p); for (d = 0, e = this.length; d < e; d++) { g = this[d]; if (g.nodeType === 1 && g.className) if (a) { h = (" " + g.className + " ").replace(o, " "); for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " "); g.className = f.trim(h) } else g.className = "" } } return this }, toggleClass: function (a, b) { var c = typeof a, d = typeof b == "boolean"; if (f.isFunction(a)) return this.each(function (c) { f(this).toggleClass(a.call(this, c, this.className, b), b) }); return this.each(function () { if (c === "string") { var e, g = 0, h = f(this), i = b, j = a.split(p); while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e) } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || "" }) }, hasClass: function (a) { var b = " " + a + " ", c = 0, d = this.length; for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0; return !1 }, val: function (a) { var c, d, e, g = this[0]; { if (!!arguments.length) { e = f.isFunction(a); return this.each(function (d) { var g = f(this), h; if (this.nodeType === 1) { e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) { return a == null ? "" : a + "" })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]; if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h } }) } if (g) { c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()]; if (c && "get" in c && (d = c.get(g, "value")) !== b) return d; d = g.value; return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d } } } }), f.extend({ valHooks: { option: { get: function (a) { var b = a.attributes.value; return !b || b.specified ? a.value : a.text } }, select: { get: function (a) { var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one"; if (g < 0) return null; c = j ? g : 0, d = j ? g + 1 : i.length; for (; c < d; c++) { e = i[c]; if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) { b = f(e).val(); if (j) return b; h.push(b) } } if (j && !h.length && i.length) return f(i[g]).val(); return h }, set: function (a, b) { var c = f.makeArray(b); f(a).find("option").each(function () { this.selected = f.inArray(f(this).val(), c) >= 0 }), c.length || (a.selectedIndex = -1); return c } } }, attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 }, attr: function (a, c, d, e) { var g, h, i, j = a.nodeType; if (!!a && j !== 3 && j !== 8 && j !== 2) { if (e && c in f.attrFn) return f(a)[c](d); if (typeof a.getAttribute == "undefined") return f.prop(a, c, d); i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w)); if (d !== b) { if (d === null) { f.removeAttr(a, c); return } if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g; a.setAttribute(c, "" + d); return d } if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g; g = a.getAttribute(c); return g === null ? b : g } }, removeAttr: function (a, b) { var c, d, e, g, h, i = 0; if (b && a.nodeType === 1) { d = b.toLowerCase().split(p), g = d.length; for (; i < g; i++) e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1)) } }, attrHooks: { type: { set: function (a, b) { if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) { var c = a.value; a.setAttribute("type", b), c && (a.value = c); return b } } }, value: { get: function (a, b) { if (w && f.nodeName(a, "button")) return w.get(a, b); return b in a ? a.value : null }, set: function (a, b, c) { if (w && f.nodeName(a, "button")) return w.set(a, b, c); a.value = b } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function (a, c, d) { var e, g, h, i = a.nodeType; if (!!a && i !== 3 && i !== 8 && i !== 2) { h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]); return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c] } }, propHooks: { tabIndex: { get: function (a) { var c = a.getAttributeNode("tabindex"); return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b } }} }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = { get: function (a, c) { var d, e = f.prop(a, c); return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b }, set: function (a, b, c) { var d; b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())); return c } }, v || (y = { name: !0, id: !0, coords: !0 }, w = f.valHooks.button = { get: function (a, c) { var d; d = a.getAttributeNode(c); return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b }, set: function (a, b, d) { var e = a.getAttributeNode(d); e || (e = c.createAttribute(d), a.setAttributeNode(e)); return e.nodeValue = b + "" } }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) { f.attrHooks[b] = f.extend(f.attrHooks[b], { set: function (a, c) { if (c === "") { a.setAttribute(b, "auto"); return c } } }) }), f.attrHooks.contenteditable = { get: w.get, set: function (a, b, c) { b === "" && (b = "false"), w.set(a, b, c) } }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) { f.attrHooks[c] = f.extend(f.attrHooks[c], { get: function (a) { var d = a.getAttribute(c, 2); return d === null ? b : d } }) }), f.support.style || (f.attrHooks.style = { get: function (a) { return a.style.cssText.toLowerCase() || b }, set: function (a, b) { return a.style.cssText = "" + b } }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, { get: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex); return null } })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () { f.valHooks[this] = { get: function (a) { return a.getAttribute("value") === null ? "on" : a.value } } }), f.each(["radio", "checkbox"], function () { f.valHooks[this] = f.extend(f.valHooks[this], { set: function (a, b) { if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0 } }) }); var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (
a) { var b = F.exec(a); b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")); return b }, H = function (a, b) { var c = a.attributes || {}; return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value)) }, I = function (a) { return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1") }; f.event = { add: function (a, c, d, e, g) { var h, i, j, k, l, m, n, o, p, q, r, s; if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) { d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) { return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b }, i.elem = a), c = f.trim(I(c)).split(" "); for (k = 0; k < c.length; k++) { l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({ type: m, origType: l[1], data: e, handler: d, guid: d.guid, selector: g, quick: g && G(g), namespace: n.join(".") }, p), r = j[m]; if (!r) { r = j[m] = [], r.delegateCount = 0; if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i) } s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0 } a = null } }, global: {}, remove: function (a, b, c, d, e) { var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s; if (!!g && !!(o = g.events)) { b = f.trim(I(b || "")).split(" "); for (h = 0; h < b.length; h++) { i = A.exec(b[h]) || [], j = k = i[1], l = i[2]; if (!j) { for (j in o) f.event.remove(a, j + b[h], c, d, !0); continue } p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null; for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s)); r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j]) } f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0)) } }, customEvent: { getData: !0, setData: !0, changeData: !0 }, trigger: function (c, d, e, g) { if (!e || e.nodeType !== 3 && e.nodeType !== 8) { var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s; if (E.test(h + f.event.triggered)) return; h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort()); if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return; c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : ""; if (!e) { j = f.cache; for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0); return } c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {}; if (p.trigger && p.trigger.apply(e, d) === !1) return; r = [[e, p.bindType || h]]; if (!g && !p.noBubble && !f.isWindow(e)) { s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null; for (; m; m = m.parentNode) r.push([m, s]), n = m; n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s]) } for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault(); c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n)); return c.result } }, dispatch: function (c) { c = f.event.fix(c || a.event); var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u; g[0] = c, c.delegateTarget = this; if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) { if (e && (!c.button || c.type !== "click")) { n = f(this), n.context = this.ownerDocument || this; for (m = c.target; m != this; m = m.parentNode || this) if (m.disabled !== !0) { p = {}, r = [], n[0] = m; for (k = 0; k < e; k++) s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s); r.length && j.push({ elem: m, matches: r }) } } d.length > e && j.push({ elem: this, matches: d.slice(e) }); for (k = 0; k < j.length && !c.isPropagationStopped(); k++) { q = j[k], c.currentTarget = q.elem; for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) { s = q.matches[l]; if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation())) } } i.postDispatch && i.postDispatch.call(this, c); return c.result } }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode); return a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, d) { var e, f, g, h = d.button, i = d.fromElement; a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0); return a } }, fix: function (a) { if (a[f.expando]) return a; var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props; a = f.Event(g); for (d = i.length; d; ) e = i[--d], a[e] = g[e]; a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey); return h.filter ? h.filter(a, g) : a }, special: { ready: { setup: f.bindReady }, load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function (a, b, c) { f.isWindow(this) && (this.onbeforeunload = c) }, teardown: function (a, b) { this.onbeforeunload === b && (this.onbeforeunload = null) } } }, simulate: function (a, b, c, d) { var e = f.extend(new f.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { a.detachEvent && a.detachEvent("on" + b, c) }, f.Event = function (a, b) { if (!(this instanceof f.Event)) return new f.Event(a, b); a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0 }, f.Event.prototype = { preventDefault: function () { this.isDefaultPrevented = K; var a = this.originalEvent; !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { this.isPropagationStopped = K; var a = this.originalEvent; !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = K, this.stopPropagation() }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J }, f.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) { f.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h; if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b; return h } } }), f.support.submitBubbles || (f.event.special.submit = { setup: function () { if (f.nodeName(this, "form")) return !1; f.event.add(this, "click._submit keypress._submit", function (a) { var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b; d && !d._submit_uploads && (f.event.add(d, "submit._submit", function (a) { a._submit_bubble = !0 }), d._submit_uploads = !0) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { if (f.nodeName(this, "form")) return !1; f.event.remove(this, "._submit") } }), f.support.changeBubbles || (f.event.special.change = { setup: function () { if (z.test(this.nodeName)) { if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) { a.originalEvent.propertyName === "checked" && (this._just_changed = !0) }), f.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0)) }); return !1 } f.event.add(this, "beforeactivate._change", function (a) { var b = a.target; z.test(b.nodeName) && !b._change_uploads && (f.event.add(b, "change._change", function (a) { this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0) }), b._change_uploads = !0) }) }, handle: function (a) { var b = a.target; if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments) }, teardown: function () { f.event.remove(this, "._change"); return z.test(this.nodeName) } }), f.support.focusinBubbles || f.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var d = 0, e = function (a) { f.event.simulate(b, a.target, f.event.fix(a), !0) }; f.event.special[b] = { setup: function () { d++ === 0 && c.addEventListener(a, e, !0) }, teardown: function () { --d === 0 && c.removeEventListener(a, e, !0) } } }), f.fn.extend({ on: function (a, c, d, e, g) { var h, i; if (typeof a == "object") { typeof c != "string" && (d = d || c, c = b); for (i in a) this.on(i, c, d, a[i], g); return this } d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b)); if (e === !1) e = J; else if (!e) return this; g === 1 && (h = e, e = function (a) { f().off(a); return h.apply(this, arguments) }, e.guid = h.guid || (h.guid = f.guid++)); return this.each(function () { f.event.add(this, a, e, d, c) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, c, d) { if (a && a.preventDefault && a.handleObj) { var e = a.handleObj; f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler); return this } if (typeof a == "object") { for (var g in a) this.off(g, c, a[g]); return this } if (c === !1 || typeof c == "function") d = c, c = b; d === !1 && (d = J); return this.each(function () { f.event.remove(this, a, d, c) }) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, live: function (a, b, c) { f(this.context).on(a, this.selector, b, c); return this }, die: function (a, b) { f(this.context).off(a, this.selector || "**", b); return this }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c) }, trigger: function (a, b) { return this.each(function () { f.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { if (this[0]) return f.event.trigger(a, b, this[0], !0) }, toggle: function (a) { var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) { var e = (f._data(this, "lastToggle" + a.guid) || 0) % d; f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(); return b[e].apply(this, arguments) || !1 }; e.guid = c; while (d < b.length) b[d++].guid = c; return this.click(e) }, hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { f.fn[b] = function (a, c) { c == null && (c = a, a = null); return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks) }), function () { function x(a, b, c, e, f, g) { for (var h = 0, i = e.length; h < i; h++) { var j = e[h]; if (j) { var k = !1; j = j[a]; while (j) { if (j[d] === c) { k = e[j.sizset]; break } if (j.nodeType === 1) { g || (j[d] = c, j.sizset = h); if (typeof b != "string") { if (j === b) { k = !0; break } } else if (m.filter(b, [j]).length > 0) { k = j; break } } j = j[a] } e[h] = k } } } function w(a, b, c, e, f, g) { for (var h = 0, i = e.length; h < i; h++) { var j = e[h]; if (j) { var k = !1; j = j[a]; while (j) { if (j[d] === c) { k = e[j.sizset]; break } j.nodeType === 1 && !g && (j[d] = c, j.sizset = h); if (j.nodeName.toLowerCase() === b) { k = j; break } j = j[a] } e[h] = k } } } var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/; [0, 0].sort(function () { i = !1; return 0 }); var m = function (b, d, e, f) { e = e || [], d = d || c; var h = d; if (d.nodeType !== 1 && d.nodeType !== 9) return []; if (!b || typeof b != "string") return e; var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b; do { a.exec(""), i = a.exec(x); if (i) { x = i[3], w.push(i[1]); if (i[2]) { l = i[3]; break } } } while (i); if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f); else { j = o.relative[w[0]] ? [d] : m(w.shift(), d); while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f) } else { !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]); if (d) { n = f ? { expr: w.pop(), set: s(f)} : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1; while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v) } else k = w = [] } k || (k = j), k || m.error(q || b); if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k); else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e); l && (m(l, h, e, f), m.uniqueSort(e)); return e }; m.uniqueSort = function (a) { if (u) { h = i, a.sort(u); if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1) } return a }, m.matches = function (a, b) { return m(a, null, null, b) }, m.matchesSelector = function (a, b) { return m(b, null, null, [a]).length > 0 }, m.find = function (a, b, c) { var d, e, f, g, h, i; if (!a) return []; for (e = 0, f = o.order.length; e < f; e++) { h = o.order[e]; if (g = o.leftMatch[h].exec(a)) { i = g[1], g.splice(1, 1); if (i.substr(i.length - 1) !== "\\") { g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c); if (d != null) { a = a.replace(o.match[h], ""); break } } } } d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []); return { set: d, expr: a} }, m.filter = function (a, c, d, e) { var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); while (a && c.length) { for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) { k = o.filter[h], l = f[1], g = !1, f.splice(1, 1); if (l.substr(l.length - 1) === "\\") continue; s === r && (r = []); if (o.preFilter[h]) { f = o.preFilter[h](f, s, d, r, e, t); if (!f) g = i = !0; else if (f === !0) continue } if (f) for (n = 0; (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0)); if (i !== b) { d || (s = r), a = a.replace(o.match[h], ""); if (!g) return []; break } } if (a === q) if (g == null) m.error(a); else break; q = a } return s }, m.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }; var n = m.getText = function (a) { var b, c, d = a.nodeType, e = ""; if (d) { if (d === 1 || d === 9 || d === 11) { if (typeof a.textContent == "string") return a.textContent; if (typeof a.innerText == "string") return a.innerText.replace(k, ""); for (a = a.firstChild; a; a = a.nextSibling) e += n(a) } else if (d === 3 || d === 4) return a.nodeValue } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c)); return e }, o = m.selectors = { order: ["ID", "NAME", "TAG"], match: { ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ }, leftMatch: {}, attrMap: { "class": "className", "for": "htmlFor" }, attrHandle: { href: function (a) { return a.getAttribute("href") }, type: function (a) { return a.getAttribute("type") } }, relative: { "+": function (a, b) { var c = typeof b == "string", d = c && !l.test(b), e = c && !d; d && (b = b.toLowerCase()); for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) { while ((h = h.previousSibling) && h.nodeType !== 1); a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b } e && m.filter(b, a, !0) }, ">": function (a, b) { var c, d = typeof b == "string", e = 0, f = a.length; if (d && !l.test(b)) { b = b.toLowerCase(); for (; e < f; e++) { c = a[e]; if (c) { var g = c.parentNode; a[e] = g.nodeName.toLowerCase() === b ? g : !1 } } } else { for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b); d && m.filter(b, a, !0) } }, "": function (a, b, c) { var d, f = e++, g = x; typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c) }, "~": function (a, b, c) { var d, f = e++, g = x; typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c) } }, find: { ID: function (a, b, c) { if (typeof b.getElementById != "undefined" && !c) { var d = b.getElementById(a[1]); return d && d.parentNode ? [d] : [] } }, NAME: function (a, b) { if (typeof b.getElementsByName != "undefined") { var c = [], d = b.getElementsByName(a[1]); for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]); return c.length === 0 ? null : c } }, TAG: function (a, b) { if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1]) } }, preFilter: { CLASS: function (a, b, c, d, e, f) { a = " " + a[1].replace(j, "") + " "; if (f) return a; for (var g = 0, h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1)); return !1 }, ID: function (a) { return a[1].replace(j, "") }, TAG: function (a, b) { return a[1].replace(j, "").toLowerCase() }, CHILD: function (a) { if (a[1] === "nth") { a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, ""); var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]); a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0 } else a[2] && m.error(a[0]); a[0] = e++; return a }, ATTR: function (a, b, c, d, e, f) { var g = a[1] = a[1].replace(j, ""); !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " "); return a }, PSEUDO: function (b, c, d, e, f) { if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c); else { var g = m.filter(b[3], c, d, !0 ^ f); d || e.push.apply(e, g); return !1 } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0; return b }, POS: function (a) { a.unshift(!0); return a } }, filters: { enabled: function (a) { return a.disabled === !1 && a.type !== "hidden" }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { return a.checked === !0 }, selected: function (a) { a.parentNode && a.parentNode.selectedIndex; return a.selected === !0 }, parent: function (a) { return !!a.firstChild }, empty: function (a) { return !a.firstChild }, has: function (a, b, c) { return !!m(c[3], a).length }, header: function (a) { return /h\d/i.test(a.nodeName) }, text: function (a) { var b = a.getAttribute("type"), c = a.type; return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null) }, radio: function (a) { return a.nodeName.toLowerCase() === "input" && "radio" === a.type }, checkbox: function (a) { return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type }, file: function (a) { return a.nodeName.toLowerCase() === "input" && "file" === a.type }, password: function (a) { return a.nodeName.toLowerCase() === "input" && "password" === a.type }, submit: function (a) { var b = a.nodeName.toLowerCase(); return (b === "input" || b === "button") && "submit" === a.type }, image: function (a) { return a.nodeName.toLowerCase() === "input" && "image" === a.type }, reset: function (a) { var b = a.nodeName.toLowerCase(); return (b === "input" || b === "button") && "reset" === a.type }, button: function (a) { var b = a.nodeName.toLowerCase(); return b === "input" && "button" === a.type || b === "button" }, input: function (a) { return /input|select|textarea|button/i.test(a.nodeName) }, focus: function (a) { return a === a.ownerDocument.activeElement } }, setFilters: { first: function (a, b) { return b === 0 }, last: function (a, b, c, d) { return b === d.length - 1 }, even: function (a, b) { return b % 2 === 0 }, odd: function (a, b) { return b % 2 === 1 }, lt: function (a, b, c) { return b < c[3] - 0 }, gt: function (a, b, c) { return b > c[3] - 0 }, nth: function (a, b, c) { return c[3] - 0 === b }, eq: function (a, b, c) { return c[3] - 0 === b } }, filter: { PSEUDO: function (a, b, c, d) { var e = b[1], f = o.filters[e]; if (f) return f(a, c, b, d); if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0; if (e === "not") { var g = b[3]; for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1; return !0 } m.error(e) }, CHILD: function (a, b) { var c, e, f, g, h, i, j, k = b[1], l = a; switch (k) { case "only": case "first": while (l = l.previousSibling) if (l.nodeType === 1) return !1; if (k === "first") return !0; l = a; case "last": while (l = l.nextSibling) if (l.nodeType === 1) return !1; return !0; case "nth": c = b[2], e = b[3]; if (c === 1 && e === 0) return !0; f = b[0], g = a.parentNode; if (g && (g[d] !== f || !a.nodeIndex)) { i = 0; for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i); g[d] = f } j = a.nodeIndex - e; return c === 0 ? j === 0 : j % c === 0 && j / c >= 0 } }, ID: function (a, b) { return a.nodeType === 1 && a.getAttribute("id") === b }, TAG: function (a, b) { return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b }, CLASS: function (a, b) { return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1 }, ATTR: function (a, b) { var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4]; return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1 }, POS: function (a, b, c, d) { var e = b[2], f = o.setFilters[e]; if (f) return f(a, c, b, d) } } }, p = o.match.POS, q = function (a, b) { return "\\" + (b - 0 + 1) }; for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q)); o.match.globalPOS = p; var s = function (a, b) { a = Array.prototype.slice.call(a, 0); if (b) { b.push.apply(b, a); return b } return a }; try { Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType } catch (t) { s = function (a, b) { var c = 0, d = b || []; if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a); else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]); else for (; a[c]; c++) d.push(a[c]); return d } } var u, v; c.documentElement.compareDocumentPosition ? u = function (a, b) { if (a === b) { h = !0; return 0 } if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1; return a.compareDocumentPosition(b) & 4 ? -1 : 1 } : (u = function (a, b) { if (a === b) { h = !0; return 0 } if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex; var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g; if (g === i) return v(a, b); if (!g) return -1; if (!i) return 1; while (j) e.unshift(j), j = j.parentNode; j = i; while (j) f.unshift(j), j = j.parentNode; c = e.length, d = f.length; for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]); return k === c ? v(a, f[k], -1) : v(e[k], b, 1) }, v = function (a, b, c) { if (a === b) return c; var d = a.nextSibling; while (d) { if (d === b) return -1; d = d.nextSibling } return 1 }), function () { var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement; a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) { if (typeof c.getElementById != "undefined" && !d) { var e = c.getElementById(a[1]); return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : [] } }, o.filter.ID = function (a, b) { var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id"); return a.nodeType === 1 && c && c.nodeValue === b }), e.removeChild(a), e = a = null } (), function () { var a = c.createElement("div"); a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) { var c = b.getElementsByTagName(a[1]); if (a[1] === "*") { var d = []; for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]); c = d } return c }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) { return a.getAttribute("href", 2) }), a = null } (), c.querySelectorAll && function () { var a = m, b = c.createElement("div"), d = "__sizzle__"; b.innerHTML = "<p class='TEST'></p>"; if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) { m = function (b, e, f, g) { e = e || c; if (!g && !m.isXML(e)) { var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b); if (h && (e.nodeType === 1 || e.nodeType === 9)) { if (h[1]) return s(e.getElementsByTagName(b), f); if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f) } if (e.nodeType === 9) { if (b === "body" && e.body) return s([e.body], f); if (h && h[3]) { var i = e.getElementById(h[3]); if (!i || !i.parentNode) return s([], f); if (i.id === h[3]) return s([i], f) } try { return s(e.querySelectorAll(b), f) } catch (j) { } } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") { var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b); l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode); try { if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f) } catch (r) { } finally { l || k.removeAttribute("id") } } } return a(b, e, f, g) }; for (var e in a) m[e] = a[e]; b = null } } (), function () { var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector; if (b) { var d = !b.call(c.createElement("div"), "div"), e = !1; try { b.call(c.documentElement, "[test!='']:sizzle") } catch (f) { e = !0 } m.matchesSelector = function (a, c) { c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"); if (!m.isXML(a)) try { if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) { var f = b.call(a, c); if (f || !d || a.document && a.document.nodeType !== 11) return f } } catch (g) { } return m(c, null, null, [a]).length > 0 } } } (), function () { var a = c.createElement("div"); a.innerHTML = "<div class='test e'></div><div class='test'></div>"; if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) { a.lastChild.className = "e"; if (a.getElementsByClassName("e").length === 1) return; o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) { if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1]) }, a = null } } (), c.documentElement.contains ? m.contains = function (a, b) { return a !== b && (a.contains ? a.contains(b) : !0) } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) { return !!(a.compareDocumentPosition(b) & 16) } : m.contains = function () { return !1 }, m.isXML = function (a) { var b = (a ? a.ownerDocument || a : 0).documentElement; return b ? b.nodeName !== "HTML" : !1 }; var y = function (a, b, c) { var d, e = [], f = "", g = b.nodeType ? [b] : b; while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, ""); a = o.relative[a] ? a + "*" : a; for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c); return m.filter(f, e) }; m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains } (); var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.globalPOS, R = { children: !0, contents: !0, next: !0, prev: !0 }; f.fn.extend({ find: function (a) { var b = this, c, d; if (typeof a != "string") return f(a).filter(function () { for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0 }); var e = this.pushStack("", "find", a), g, h, i; for (c = 0, d = this.length; c < d; c++) { g = e.length, f.find(a, this[c], e); if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) { e.splice(h--, 1); break } } return e }, has: function (a) { var b = f(a); return this.filter(function () { for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0 }) }, not: function (a) { return this.pushStack(T(this, a, !1), "not", a) }, filter: function (a) { return this.pushStack(T(this, a, !0), "filter", a) }, is: function (a) { return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0) }, closest: function (a, b) { var c = [], d, e, g = this[0]; if (f.isArray(a)) { var h = 1; while (g && g.ownerDocument && g !== b) { for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({ selector: a[d], elem: g, level: h }); g = g.parentNode, h++ } return c } var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0; for (d = 0, e = this.length; d < e; d++) { g = this[d]; while (g) { if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) { c.push(g); break } g = g.parentNode; if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break } } c = c.length > 1 ? f.unique(c) : c; return this.pushStack(c, "closest", a) }, index: function (a) { if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1; if (typeof a == "string") return f.inArray(this[0], f(a)); return f.inArray(a.jquery ? a[0] : a, this) }, add: function (a, b) { var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c); return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d)) }, andSelf: function () { return this.add(this.prevObject) } }), f.each({ parent: function (a) { var b = a.parentNode; return b && b.nodeType !== 11 ? b : null }, parents: function (a) { return f.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return f.dir(a, "parentNode", c) }, next: function (a) { return f.nth(a, 2, "nextSibling") }, prev: function (a) { return f.nth(a, 2, "previousSibling") }, nextAll: function (a) { return f.dir(a, "nextSibling") }, prevAll: function (a) { return f.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return f.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return f.dir(a, "previousSibling", c) }, siblings: function (a) { return f.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return f.sibling(a.firstChild) }, contents: function (a) { return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes) } }, function (a, b) { f.fn[a] = function (c, d) { var e = f.map(this, b, c); L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse()); return this.pushStack(e, a, P.call(arguments).join(",")) } }), f.extend({ filter: function (a, b, c) { c && (a = ":not(" + a + ")"); return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b) }, dir: function (a, c, d) { var e = [], g = a[c]; while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c]; return e }, nth: function (a, b, c, d) { b = b || 1; var e = 0; for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break; return a }, sibling: function (a, b) { var c = []; for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a); return c } }); var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] }, bh = U(c); bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({ text: function (a) { return f.access(this, function (a) { return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a)) }, null, a, arguments.length) }, wrapAll: function (a) { if (f.isFunction(a)) return this.each(function (b) { f(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = f(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) { if (f.isFunction(a)) return this.each(function (b) { f(this).wrapInner(a.call(this, b)) }); return this.each(function () { var b = f(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = f.isFunction(a); return this.each(function (c) { f(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { f.nodeName(this, "body") || f(this).replaceWith(this.childNodes) }).end() }, append: function () { return this.domManip(arguments, !0, function (a) { this.nodeType === 1 && this.appendChild(a) }) }, prepend: function () { return this.domManip(arguments, !0, function (a) { this.nodeType === 1 && this.insertBefore(a, this.firstChild) }) }, before: function () {
    if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) { this.parentNode.insertBefore(a, this) }); if (arguments.length) {
        var a = f
.clean(arguments); a.push.apply(a, this.toArray()); return this.pushStack(a, "before", arguments)
    } 
}, after: function () { if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) { this.parentNode.insertBefore(a, this.nextSibling) }); if (arguments.length) { var a = this.pushStack(this, "after", arguments); a.push.apply(a, f.clean(arguments)); return a } }, remove: function (a, b) { for (var c = 0, d; (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d); return this }, empty: function () { for (var a = 0, b; (b = this[a]) != null; a++) { b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*")); while (b.firstChild) b.removeChild(b.firstChild) } return this }, clone: function (a, b) { a = a == null ? !1 : a, b = b == null ? a : b; return this.map(function () { return f.clone(this, a, b) }) }, html: function (a) { return f.access(this, function (a) { var c = this[0] || {}, d = 0, e = this.length; if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null; if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) { a = a.replace(Y, "<$1></$2>"); try { for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a); c = 0 } catch (g) { } } c && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function (a) { if (this[0] && this[0].parentNode) { if (f.isFunction(a)) return this.each(function (b) { var c = f(this), d = c.html(); c.replaceWith(a.call(this, b, d)) }); typeof a != "string" && (a = f(a).detach()); return this.each(function () { var b = this.nextSibling, c = this.parentNode; f(this).remove(), b ? f(b).before(a) : f(c).append(a) }) } return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, c, d) { var e, g, h, i, j = a[0], k = []; if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function () { f(this).domManip(a, c, d, !0) }); if (f.isFunction(j)) return this.each(function (e) { var g = f(this); a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d) }); if (this[0]) { i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = { fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild; if (g) { c = c && f.nodeName(g, "tr"); for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h) } k.length && f.each(k, function (a, b) { b.src ? f.ajax({ type: "GET", global: !1, url: b.src, async: !1, dataType: "script" }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b) }) } return this } 
}), f.buildFragment = function (a, b, d) { var e, g, h, i, j = a[0]; b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1); return { fragment: e, cacheable: g} }, f.fragments = {}, f.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { f.fn[a] = function (c) { var d = [], e = f(c), g = this.length === 1 && this[0].parentNode; if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) { e[b](this[0]); return this } for (var h = 0, i = e.length; h < i; h++) { var j = (h > 0 ? this.clone(!0) : this).get(); f(e[h])[b](j), d = d.concat(j) } return this.pushStack(d, a, e.selector) } }), f.extend({ clone: function (a, b, c) { var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a); if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) { bk(a, h), d = bl(a), e = bl(h); for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g]) } if (b) { bj(a, h); if (c) { d = bl(a), e = bl(h); for (g = 0; d[g]; ++g) bj(d[g], e[g]) } } d = e = null; return h }, clean: function (a, b, d, e) { var g, h, i, j = []; b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c); for (var k = 0, l; (l = a[k]) != null; k++) { typeof l == "number" && (l += ""); if (!l) continue; if (typeof l == "string") if (!_.test(l)) l = b.createTextNode(l); else { l = l.replace(Y, "<$1></$2>"); var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement("div"), q = bh.childNodes, r; b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2]; while (o--) p = p.lastChild; if (!f.support.tbody) { var s = $.test(l), t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : []; for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i]) } !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r))) } var u; if (!f.support.appendChecked) if (l[0] && typeof (u = l.length) == "number") for (i = 0; i < u; i++) bn(l[i]); else bn(l); l.nodeType ? j.push(l) : j = f.merge(j, l) } if (d) { g = function (a) { return !a.type || be.test(a.type) }; for (k = 0; j[k]; k++) { h = j[k]; if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h); else { if (h.nodeType === 1) { var v = f.grep(h.getElementsByTagName("script"), g); j.splice.apply(j, [k + 1, 0].concat(v)) } d.appendChild(h) } } } return j }, cleanData: function (a) { var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando; for (var h = 0, i; (i = a[h]) != null; h++) { if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue; c = i[f.expando]; if (c) { b = d[c]; if (b && b.events) { for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle); b.handle && (b.handle.elem = null) } g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c] } } } }); var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = { position: "absolute", visibility: "hidden", display: "block" }, bx = ["Top", "Right", "Bottom", "Left"], by, bz, bA; f.fn.css = function (a, c) { return f.access(this, function (a, c, d) { return d !== b ? f.style(a, c, d) : f.css(a, c) }, a, c, arguments.length > 1) }, f.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = by(a, "opacity"); return c === "" ? "1" : c } return a.style.opacity } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": f.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, c, d, e) { if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) { var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i]; c = f.cssProps[i] || i; if (d === b) { if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g; return j[c] } h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number"); if (d == null || h === "number" && isNaN(d)) return; h === "number" && !f.cssNumber[i] && (d += "px"); if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try { j[c] = d } catch (l) { } } }, css: function (a, c, d) { var e, g; c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float"); if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e; if (by) return by(a, c) }, swap: function (a, b, c) { var d = {}, e, f; for (f in b) d[f] = a.style[f], a.style[f] = b[f]; e = c.call(a); for (f in b) a.style[f] = d[f]; return e } }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) { var c, d, e, g, h = a.style; b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g); return c }), c.documentElement.currentStyle && (bA = function (a, b) { var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style; f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)); return f === "" ? "auto" : f }), by = bz || bA, f.each(["height", "width"], function (a, b) { f.cssHooks[b] = { get: function (a, c, d) { if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () { return bB(a, b, d) }) }, set: function (a, b) { return bs.test(b) ? b + "px" : b } } }), f.support.opacity || (f.cssHooks.opacity = { get: function (a, b) { return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || ""; c.zoom = 1; if (b >= 1 && f.trim(g.replace(bp, "")) === "") { c.removeAttribute("filter"); if (d && !d.filter) return } c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e } }), f(function () { f.support.reliableMarginRight || (f.cssHooks.marginRight = { get: function (a, b) { return f.swap(a, { display: "inline-block" }, function () { return b ? by(a, "margin-right") : a.style.marginRight }) } }) }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) { var b = a.offsetWidth, c = a.offsetHeight; return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none" }, f.expr.filters.visible = function (a) { return !f.expr.filters.hidden(a) }), f.each({ margin: "", padding: "", border: "Width" }, function (a, b) { f.cssHooks[a + b] = { expand: function (c) { var d, e = typeof c == "string" ? c.split(" ") : [c], f = {}; for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0]; return f } } }); var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"]; try { bU = e.href } catch (bX) { bU = c.createElement("a"), bU.href = "", bU = bU.href } bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({ load: function (a, c, d) { if (typeof a != "string" && bR) return bR.apply(this, arguments); if (!this.length) return this; var e = a.indexOf(" "); if (e >= 0) { var g = a.slice(e, a.length); a = a.slice(0, e) } var h = "GET"; c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST")); var i = this; f.ajax({ url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) { c = a.responseText, a.isResolved() && (a.done(function (a) { c = a }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a]) } }); return this }, serialize: function () { return f.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { return this.elements ? f.makeArray(this.elements) : this }).filter(function () { return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type)) }).map(function (a, b) { var c = f(this).val(); return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) { return { name: b.name, value: a.replace(bE, "\r\n")} }) : { name: b.name, value: c.replace(bE, "\r\n")} }).get() } }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) { f.fn[b] = function (a) { return this.on(b, a) } }), f.each(["get", "post"], function (a, c) { f[c] = function (a, d, e, g) { f.isFunction(d) && (g = g || e, e = d, d = b); return f.ajax({ type: c, url: a, data: d, success: e, dataType: g }) } }), f.extend({ getScript: function (a, c) { return f.get(a, b, c, "script") }, getJSON: function (a, b, c) { return f.get(a, b, c, "json") }, ajaxSetup: function (a, b) { b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b); return a }, ajaxSettings: { url: bU, isLocal: bI.test(bV[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": bW }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML }, flatOptions: { context: !0, url: !0} }, ajaxPrefilter: bY(bS), ajaxTransport: bY(bT), ajax: function (a, c) { function w(a, c, l, m) { if (s !== 2) { s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0; var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z; if (a >= 200 && a < 300 || a === 304) { if (d.ifModified) { if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y; if (z = v.getResponseHeader("Etag")) f.etag[k] = z } if (a === 304) w = "notmodified", o = !0; else try { r = cb(d, x), w = "success", o = !0 } catch (A) { w = "parsererror", u = A } } else { u = w; if (!w || a) w = "error", a < 0 && (a = 0) } v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop")) } } typeof a == "object" && (c = a, a = b), c = c || {}; var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = { readyState: 0, setRequestHeader: function (a, b) { if (!s) { var c = a.toLowerCase(); a = m[c] = m[c] || a, l[a] = b } return this }, getAllResponseHeaders: function () { return s === 2 ? n : null }, getResponseHeader: function (a) { var c; if (s === 2) { if (!o) { o = {}; while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2] } c = o[a.toLowerCase()] } return c === b ? null : c }, overrideMimeType: function (a) { s || (d.mimeType = a); return this }, abort: function (a) { a = a || "abort", p && p.abort(a), w(0, a); return this } }; h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) { if (a) { var b; if (s < 2) for (b in a) j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b) } return this }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v); if (s === 2) return !1; t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart"); if (!d.hasContent) { d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url; if (d.cache === !1) { var x = f.now(), y = d.url.replace(bP, "$1_=" + x); d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "") } } (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]); for (u in d.headers) v.setRequestHeader(u, d.headers[u]); if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) { v.abort(); return !1 } for (u in { success: 1, error: 1, complete: 1 }) v[u](d[u]); p = bZ(bT, d, c, v); if (!p) w(-1, "No Transport"); else { v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () { v.abort("timeout") }, d.timeout)); try { s = 1, p.send(l, w) } catch (z) { if (s < 2) w(-1, z); else throw z } } return v }, param: function (a, c) { var d = [], e = function (a, b) { b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; c === b && (c = f.ajaxSettings.traditional); if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () { e(this.name, this.value) }); else for (var g in a) b_(g, a[g], c, e); return d.join("&").replace(bC, "+") } }), f.extend({ active: 0, lastModified: {}, etag: {} }); var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i; f.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { return f.expando + "_" + cc++ } }), f.ajaxPrefilter("json jsonp", function (b, c, d) { var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType); if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) { var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2"; b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) { g = [a] }, d.always(function () { a[h] = i, g && f.isFunction(i) && a[h](g[0]) }), b.converters["script json"] = function () { g || f.error(h + " was not called"); return g[0] }, b.dataTypes[0] = "json"; return "script" } }), f.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function (a) { f.globalEval(a); return a } } }), f.ajaxPrefilter("script", function (a) { a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), f.ajaxTransport("script", function (a) { if (a.crossDomain) { var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement; return { send: function (f, g) { d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) { if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success") }, e.insertBefore(d, e.firstChild) }, abort: function () { d && d.onload(0, 1) } } } }); var ce = a.ActiveXObject ? function () { for (var a in cg) cg[a](0, 1) } : !1, cf = 0, cg; f.ajaxSettings.xhr = a.ActiveXObject ? function () { return !this.isLocal && ch() || ci() } : ch, function (a) { f.extend(f.support, { ajax: !!a, cors: !!a && "withCredentials" in a }) } (f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) { if (!c.crossDomain || f.support.cors) { var d; return { send: function (e, g) { var h = c.xhr(), i, j; c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async); if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j]; c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest"); try { for (j in e) h.setRequestHeader(j, e[j]) } catch (k) { } h.send(c.hasContent && c.data || null), d = function (a, e) { var j, k, l, m, n; try { if (d && (e || h.readyState === 4)) { d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]); if (e) h.readyState !== 4 && h.abort(); else { j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n); try { m.text = h.responseText } catch (a) { } try { k = h.statusText } catch (o) { k = "" } !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204) } } } catch (p) { e || g(-1, p) } m && g(j, k, m, l) }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d) }, abort: function () { d && d(0, 1) } } } }); var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cq; f.fn.extend({ show: function (a, b, c) { var d, e; if (a || a === 0) return this.animate(ct("show", 3), a, b, c); for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName))); for (g = 0; g < h; g++) { d = this[g]; if (d.style) { e = d.style.display; if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || "" } } return this }, hide: function (a, b, c) { if (a || a === 0) return this.animate(ct("hide", 3), a, b, c); var d, e, g = 0, h = this.length; for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e)); for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none"); return this }, _toggle: f.fn.toggle, toggle: function (a, b, c) { var d = typeof a == "boolean"; f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () { var b = d ? a : f(this).is(":hidden"); f(this)[b ? "show" : "hide"]() }) : this.animate(ct("toggle", 3), a, b, c); return this }, fadeTo: function (a, b, c, d) { return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { function g() { e.queue === !1 && f._mark(this); var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q; b.animatedProperties = {}; for (i in a) { g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]); if ((k = f.cssHooks[g]) && "expand" in k) { l = k.expand(a[g]), delete a[g]; for (i in l) i in a || (a[i] = l[i]) } } for (g in a) { h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing"; if (h === "hide" && d || h === "show" && !d) return b.complete.call(this); c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1)) } b.overflow != null && (this.style.overflow = "hidden"); for (i in a) j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, "")); return !0 } var e = f.speed(b, c, d); if (f.isEmptyObject(a)) return this.each(e.complete, [!1]); a = f.extend({}, a); return e.queue === !1 ? this.each(g) : this.queue(e.queue, g) }, stop: function (a, c, d) { typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []); return this.each(function () { function h(a, b, c) { var e = b[c]; f.removeData(a, c, !0), e.stop(d) } var b, c = !1, e = f.timers, g = f._data(this); d || f._unmark(!0, this); if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b); for (b = e.length; b--; ) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1)); (!d || !c) && f.dequeue(this, a) }) } }), f.each({ slideDown: ct("show", 1), slideUp: ct("hide", 1), slideToggle: ct("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle"} }, function (a, b) { f.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), f.extend({ speed: function (a, b, c) { var d = a && typeof a == "object" ? f.extend({}, a) : { complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b }; d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default; if (d.queue == null || d.queue === !0) d.queue = "fx"; d.old = d.complete, d.complete = function (a) { f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this) }; return d }, easing: { linear: function (a) { return a }, swing: function (a) { return -Math.cos(a * Math.PI) / 2 + .5 } }, timers: [], fx: function (a, b, c) { this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {} } }), f.fx.prototype = { update: function () { this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this) }, cur: function () { if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop]; var a, b = f.css(this.elem, this.prop); return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a }, custom: function (a, c, d) { function h(a) { return e.step(a) } var e = this, g = f.fx; this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () { f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end)) }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval)) }, show: function () { var a = f._data(this.elem, "fxshow" + this.prop); this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show() }, hide: function () { this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0) }, step: function (a) { var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options; if (a || e >= i.duration + this.startTime) { this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0; for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1); if (g) { i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) { h.style["overflow" + b] = i.overflow[a] }), i.hide && f(h).hide(); if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0); d = i.complete, d && (i.complete = !1, d.call(h)) } return !1 } i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(); return !0 } }, f.extend(f.fx, { tick: function () { var a, b = f.timers, c = 0; for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1); b.length || f.fx.stop() }, interval: 13, stop: function () { clearInterval(co), co = null }, speeds: { slow: 600, fast: 200, _default: 400 }, step: { opacity: function (a) { f.style(a.elem, "opacity", a.now) }, _default: function (a) { a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now } } }), f.each(cp.concat.apply([], cp), function (a, b) { b.indexOf("margin") && (f.fx.step[b] = function (a) { f.style(a.elem, b, Math.max(0, a.now) + a.unit) }) }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) { return f.grep(f.timers, function (b) { return a === b.elem }).length }); var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i; "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) { try { d = a.getBoundingClientRect() } catch (e) { } if (!d || !f.contains(c, a)) return d ? { top: d.top, left: d.left} : { top: 0, left: 0 }; var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i, n = d.left + l - j; return { top: m, left: n} } : cv = function (a, b, c) { var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft; while ((a = a.parentNode) && a !== h && a !== c) { if (f.support.fixedPosition && j.position === "fixed") break; d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d } if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft; f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft)); return { top: k, left: l} }, f.fn.offset = function (a) { if (arguments.length) return a === b ? this : this.each(function (b) { f.offset.setOffset(this, a, b) }); var c = this[0], d = c && c.ownerDocument; if (!d) return null; if (c === d.body) return f.offset.bodyOffset(c); return cv(c, d, d.documentElement) }, f.offset = { bodyOffset: function (a) { var b = a.offsetTop, c = a.offsetLeft; f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0); return { top: b, left: c} }, setOffset: function (a, b, c) { var d = f.css(a, "position"); d === "static" && (a.style.position = "relative"); var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n; j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k) } }, f.fn.extend({ position: function () { if (!this[0]) return null; var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? { top: 0, left: 0} : b.offset(); c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0; return { top: c.top - d.top, left: c.left - d.left} }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || c.body; while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent; return a }) } }), f.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, c) { var d = /Y/.test(c); f.fn[a] = function (e) { return f.access(this, function (a, e, g) { var h = cy(a); if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e]; h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g }, a, e, arguments.length, null) } }), f.each({ Height: "height", Width: "width" }, function (a, c) { var d = "client" + a, e = "scroll" + a, g = "offset" + a; f.fn["inner" + a] = function () { var a = this[0]; return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null }, f.fn["outer" + a] = function (a) { var b = this[0]; return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null }, f.fn[c] = function (a) { return f.access(this, function (a, c, h) { var i, j, k, l; if (f.isWindow(a)) { i = a.document, j = i.documentElement[d]; return f.support.boxModel && j || i.body && i.body[d] || j } if (a.nodeType === 9) { i = a.documentElement; if (i[d] >= i[e]) return i[d]; return Math.max(a.body[e], i[e], a.body[g], i[g]) } if (h === b) { k = f.css(a, c), l = parseFloat(k); return f.isNumeric(l) ? l : k } f(a).css(c, h) }, c, a, arguments.length, null) } }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () { return f })
})(window);



/* 二级城市联动：jquery.provincecity */
(function () { var Object$Province = ['安徽', '澳门', '北京', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '河南', '黑龙江', '湖北', '湖南', '吉林', '江苏', '江西', '辽宁', '内蒙古', '宁夏', '青海', '山东', '山西', '陕西', '上海', '四川', '台湾', '天津', '西藏', '香港', '新疆', '云南', '浙江', '重庆', '海外']; var Object$City = [['合肥', '安庆', '蚌埠', '亳州', '巢湖', '池州', '滁州', '阜阳', '淮北', '淮南', '黄山', '六安', '马鞍山', '宿州', '铜陵', '芜湖', '宣城'], ['澳门'], ['昌平', '朝阳', '崇文', '大兴', '东城', '房山', '丰台', '海淀', '怀柔', '门头沟', '密云', '平谷', '石景山', '顺义', '通州', '西城', '宣武', '延庆'], ['福州', '龙岩', '南平', '宁德', '莆田', '泉州', '三明', '厦门', '漳州'], ['兰州', '白银', '定西', '甘南', '嘉峪关', '金昌', '酒泉', '临夏', '陇南', '平凉', '庆阳', '天水', '武威', '张掖'], ['广州', '潮州', '东莞', '佛山', '河源', '惠州', '江门', '揭阳', '茂名', '梅州', '清远', '汕头', '汕尾', '韶关', '深圳', '阳江', '云浮', '湛江', '肇庆', '中山', '珠海'], ['桂林', '百色', '北海', '崇左', '防城港', '贵港', '河池', '贺州', '来宾', '柳州', '南宁', '钦州', '梧州', '玉林'], ['贵阳', '安顺', '毕节', '六盘水', '黔东南', '黔南', '黔西南', '铜仁', '遵义'], ['海口', '白沙', '保亭', '昌江', '澄迈', '儋州', '定安', '东方', '乐东', '临高', '陵水', '南沙群岛', '琼海', '琼中', '三亚', '屯昌', '万宁', '文昌', '五指山', '西沙群岛', '中沙群岛'], ['石家庄', '保定', '沧州', '承德', '邯郸', '衡水', '廊坊', '秦皇岛', '唐山', '邢台', '张家口'], ['郑州', '安阳', '鹤壁', '焦作', '开封', '洛阳', '漯河', '南阳', '平顶山', '濮阳', '三门峡', '商丘', '新乡', '信阳', '许昌', '周口', '驻马店'], ['哈尔滨', '大庆', '大兴安岭', '鹤岗', '黑河', '鸡西', '佳木斯', '牡丹江', '七台河', '齐齐哈尔', '双鸭山', '绥化', '伊春'], ['武汉', '鄂州', '恩施', '黄冈', '黄石', '荆门', '荆州', '潜江', '神农架', '十堰', '随州', '天门', '仙桃', '咸宁', '襄樊', '孝感', '宜昌'], ['长沙', '常德', '郴州', '衡阳', '怀化', '娄底', '邵阳', '湘潭', '湘西', '益阳', '永州', '岳阳', '张家界', '株洲'], ['长春', '白城', '白山', '吉林', '辽源', '四平', '松原', '通化', '延边'], ['南京', '常州', '淮安', '连云港', '南通', '苏州', '宿迁', '泰州', '无锡', '徐州', '盐城', '扬州', '镇江'], ['南昌', '抚州', '赣州', '吉安', '景德镇', '九江', '萍乡', '上饶', '新余', '宜春', '鹰潭'], ['沈阳', '鞍山', '本溪', '朝阳', '大连', '丹东', '抚顺', '阜新', '葫芦岛', '锦州', '辽阳', '盘锦', '铁岭', '营口'], ['呼和浩特', '阿拉善', '巴彦淖尔', '包头', '赤峰', '鄂尔多斯', '呼伦贝尔', '通辽', '乌海', '乌兰察布', '锡林郭勒', '兴安'], ['银川', '固原', '石嘴山', '吴忠', '中卫'], ['西宁', '果洛', '海北', '海东', '海南', '海西', '黄南', '玉树'], ['济南', '滨州', '德州', '东营', '菏泽', '济宁', '莱芜', '聊城', '临沂', '青岛', '日照', '泰安', '威海', '潍坊', '烟台', '枣庄', '淄博'], ['太原', '长治', '大同', '晋城', '晋中', '临汾', '吕梁', '朔州', '忻州', '阳泉', '运城'], ['西安', '安康', '宝鸡', '汉中', '商洛', '铜川', '渭南', '咸阳', '延安', '榆林'], ['宝山', '长宁', '崇明', '奉贤', '虹口', '黄浦', '嘉定', '金山', '静安', '卢湾', '闵行', '南汇', '浦东', '普陀', '青浦', '松江', '徐汇', '杨浦', '闸北'], ['成都', '阿坝', '巴中', '达州', '德阳', '甘孜', '广安', '广元', '乐山', '凉山', '泸州', '眉山', '绵阳', '内江', '南充', '攀枝花', '遂宁', '雅安', '宜宾', '资阳', '自贡'], ['台北', '阿莲', '安定', '安平', '八德', '八里', '白河', '白沙', '板桥', '褒忠', '宝山', '卑南', '北斗', '北港', '北门', '北埔', '北投', '补子', '布袋', '草屯', '长宾', '长治', '潮州', '车城', '成功', '城中区', '池上', '春日', '刺桐', '高雄', '花莲', '基隆', '嘉义', '苗栗', '南投', '屏东', '台东', '台南', '台中', '桃园', '新竹', '宜兰', '彰化'], ['宝坻', '北辰', '大港', '东丽', '汉沽', '和平', '河北', '河东', '河西', '红桥', '蓟县', '津南', '静海', '南开', '宁河', '塘沽', '武清', '西青'], ['拉萨', '阿里', '昌都', '林芝', '那曲', '日喀则', '山南'], ['北区', '大埔区', '东区', '观塘区', '黄大仙区', '九龙', '葵青区', '离岛区', '南区', '荃湾区', '沙田区', '深水埗区', '屯门区', '湾仔区', '西贡区', '香港', '新界', '油尖旺区', '元朗区', '中西区'], ['乌鲁木齐', '阿克苏', '阿拉尔', '阿勒泰', '巴音郭楞', '博尔塔拉', '昌吉', '哈密', '和田', '喀什', '克拉玛依', '克孜勒苏柯尔克孜', '石河子', '塔城', '图木舒克', '吐鲁番', '五家渠', '伊犁'], ['昆明', '保山', '楚雄', '大理', '德宏', '迪庆', '红河', '丽江', '临沧', '怒江', '曲靖', '思茅', '文山', '西双版纳', '玉溪', '昭通'], ['杭州', '湖州', '嘉兴', '金华', '丽水', '宁波', '衢州', '绍兴', '台州', '温州', '舟山'], ['巴南', '北碚', '璧山', '长寿', '城口', '大渡口', '大足', '垫江', '丰都', '奉节', '涪陵', '合川', '江北', '江津', '九龙坡', '开县', '梁平', '南岸', '南川', '彭水', '綦江', '黔江', '荣昌', '沙坪坝', '石柱', '双桥', '铜梁', '潼南', '万盛', '万州', '巫山', '巫溪', '武隆', '秀山', '永川', '酉阳', '渝北', '渝中', '云阳', '忠县'], ['阿根廷', '埃及', '爱尔兰', '奥地利', '奥克兰', '澳大利亚', '巴基斯坦', '巴西', '保加利亚', '比利时', '冰岛', '朝鲜', '丹麦', '德国', '俄罗斯', '法国', '菲律宾', '芬兰', '哥伦比亚', '韩国', '荷兰', '加拿大', '柬埔寨', '喀麦隆', '老挝', '卢森堡', '罗马尼亚', '马达加斯加', '马来西亚', '毛里求斯', '美国', '秘鲁', '缅甸', '墨西哥', '南非', '尼泊尔', '挪威', '葡萄牙', '其它地区', '日本', '瑞典', '瑞士', '斯里兰卡', '泰国', '土耳其', '委内瑞拉', '文莱', '乌克兰', '西班牙', '希腊', '新加坡', '新西兰', '匈牙利', '以色列', '意大利', '印度', '印度尼西亚', '英国', '越南', '智利']]; jQuery.fn.provincecity = function (opts) { opts = jQuery.extend({ selProvince: 'selProvince', defProvinceVal: '北京', selCity: 'selCity', defCityVal: '西城' }, opts || {}); var _sel1 = jQuery('#' + opts.selProvince); var _sel2 = jQuery('#' + opts.selCity); _sel1.append("<option value='" + opts.defProvinceVal + "'>" + opts.defProvinceVal + "</option>"); jQuery.each(Object$Province, function (index, data) { _sel1.append("<option value='" + data + "'>" + data + "</option>") }); _sel2.append("<option value='" + opts.defCityVal + "'>" + opts.defCityVal + "</option>"); var index1 = ""; _sel1.change(function () { _sel2.empty(); index1 = this.selectedIndex; jQuery.each(Object$City[index1 - 1], function (index, data) { _sel2.append("<option value='" + data + "'>" + data + "</option>") }) }); return this } })(jQuery);



/* 颜色选择器：jquery.colorPicker */

var show_panel = false; if (jQuery) (function ($) { $.extend($.fn, { colorPicker: function (opt) { $(this).each(function () { var o = opt; if (!o) var o = {}; if (o.colorValues == undefined) o.colorValues = Array("", "#953503", "#35381D", "#003906", "#03316D", "#020274", "#282AA1", "#373737", "#7C0200", "#F76905", "#848000", "#037B0D", "#008589", "#0001FE", "#63649D", "#7E7E7E", "#FE0000", "#F7981A", "#93CD00", "#2D9C69", "#21D4CE", "#3860FF", "#700788", "#909090", "#F60EE0", "#FFC500", "#FFFC01", "#00FF00", "#0CFFFD", "#03CBFF", "#AB245F", "#B9B9B9", "#FF8CCE", "#FFCB90", "#FFFF94", "#BFFFC5", "#C4FFFF", "#92CDFF", "#D996FF", "#FFFFFF"); if (o.buttonBackClassName == undefined) o.buttonBackClassName = "colorPicker_button_back"; if (o.buttonBackColorClassName == undefined) o.buttonBackColorClassName = "colorPicker_button_color"; if (o.buttonOnPopupClassName == undefined) o.buttonOnPopupClassName = "colorPicker_button_back_popup"; if (o.popupClassName == undefined) o.popupClassName = "color_parent"; if (o.clearClassName == undefined) o.clearClassName = "clear"; if (o.popupColorClassName == undefined) o.popupColorClassName = "picker_panel"; if (o.popupHeader == undefined) o.popupHeader = "picker_panel_header"; if (o.defaultColor == undefined) o.defaultColor = ""; if (o.colorRows == undefined) o.colorRows = 8; o.input = this; $(this).hide(); colors_html = ""; p = 0; cval = ''; for (i in o.colorValues) { p++; colors_html += '<div class="' + o.popupClassName + '"><a href="" color=' + o.colorValues[i] + '><div style="background-color:' + o.colorValues[i] + '"></div></a></div>'; if (o.colorValues[i] == $(this).val()) { cval = o.colorValues[i]; } if (p == o.colorRows) { p = 0; colors_html += '<div class="' + o.clearClassName + '"></div>'; } } if (cval.length < 1) { cval = o.defaultColor; } $(this).val(cval); if (o.obj != undefined) o.obj.css("color", cval); $(this).after('<div id="picker_button_' + $(this).attr('id') + '" class="' + o.buttonBackClassName + '"><div id="picker_shower_' + $(this).attr('id') + '" class="' + o.buttonBackColorClassName + '" style="background-color:' + cval + '"></div></div><div class="' + o.popupColorClassName + '" id="picker_panel_' + $(this).attr('id') + '"><div class="' + o.popupHeader + '"></div>' + colors_html + '</div>'); o.button = $("#picker_button_" + $(this).attr('id')); $(o.button).click(function () { showPanel(); }); o.panel = $("#picker_panel_" + $(this).attr('id')); $(o.panel).mouseout(function () { show_panel = false; setTimeout('if(!show_panel){hidePanelIs("' + $(o.panel).attr('id') + '","' + $(o.button).attr('id') + '","' + o.buttonOnPopupClassName + '");}', 200); }); $(o.button).mouseout(function () { show_panel = false; setTimeout('if(!show_panel){hidePanelIs("' + $(o.panel).attr('id') + '","' + $(o.button).attr('id') + '","' + o.buttonOnPopupClassName + '");}', 200); }); $(o.panel).mouseover(function () { show_panel = true; }); $(o.button).mouseover(function () { show_panel = true; }); $("#picker_panel_" + $(this).attr('id') + " a").each(function () { $(this).data('color_value', $(this).attr('color')); $(this).removeAttr('color'); $(this).click(function () { $("#picker_shower_" + $(o.input).attr('id')).css('background-color', $(this).data('color_value')); $(o.input).val($(this).data('color_value')); if (o.obj != undefined) o.obj.css("color", $(this).data('color_value')); hidePanel(); return false; }); }); function hidePanel() { $(o.panel).hide(); show_panel = false; $(o.button).removeClass(o.buttonOnPopupClassName); } function showPanel() { $(o.button).addClass(o.buttonOnPopupClassName); show_panel = true; $(o.panel).show(); } }); } }); })(jQuery); function hidePanelIs(d1, d2, cl) { $('#' + d1).hide(); show_panel = false; $('#' + d2).removeClass(cl); }

/* 右键菜单：jquery.ContextMenu */
(function () { var menu, shadow, trigger, content, hash, currentTarget; var defaults = { menuStyle: { listStyle: 'none', padding: '1px', margin: '0px', backgroundColor: '#fff', border: '1px solid #999', width: '100px' }, itemStyle: { margin: '0px', color: '#000', display: 'block', cursor: 'default', padding: '3px', border: '1px solid #fff', backgroundColor: 'transparent' }, itemHoverStyle: { border: '1px solid #0a246a', backgroundColor: '#b6bdd2' }, eventPosX: 'pageX', eventPosY: 'pageY', shadow: true, onContextMenu: null, onShowMenu: null }; jQuery.fn.contextMenu = function (id, options) { if (!menu) { menu = jQuery('<div id="jqContextMenu"></div>').hide().css({ position: 'absolute', zIndex: '500' }).appendTo('body').bind('click', function (e) { e.stopPropagation() }) }; if (!shadow) { shadow = jQuery('<div></div>').css({ backgroundColor: '#000', position: 'absolute', opacity: 0.2, zIndex: 499 }).appendTo('body').hide() }; hash = hash || []; hash.push({ id: id, menuStyle: jQuery.extend({}, defaults.menuStyle, options.menuStyle || {}), itemStyle: jQuery.extend({}, defaults.itemStyle, options.itemStyle || {}), itemHoverStyle: jQuery.extend({}, defaults.itemHoverStyle, options.itemHoverStyle || {}), bindings: options.bindings || {}, shadow: options.shadow || options.shadow === false ? options.shadow : defaults.shadow, onContextMenu: options.onContextMenu || defaults.onContextMenu, onShowMenu: options.onShowMenu || defaults.onShowMenu, eventPosX: options.eventPosX || defaults.eventPosX, eventPosY: options.eventPosY || defaults.eventPosY }); var index = hash.length - 1; jQuery(this).bind('contextmenu', function (e) { var bShowContext = (!!hash[index].onContextMenu) ? hash[index].onContextMenu(e) : true; if (bShowContext) display(index, this, e, options); return false }); return this }; function display(index, trigger, e, options) { var cur = hash[index]; content = jQuery('#' + cur.id).find('ul:first').clone(true); content.css(cur.menuStyle).find('li').css(cur.itemStyle).hover(function () { jQuery(this).css(cur.itemHoverStyle) }, function () { jQuery(this).css(cur.itemStyle) }).find('img').css({ verticalAlign: 'middle', paddingRight: '2px' }); menu.html(content); if (!!cur.onShowMenu) menu = cur.onShowMenu(e, menu); jQuery.each(cur.bindings, function (id, func) { jQuery('#' + id, menu).bind('click', function (e) { hide(); func(trigger, currentTarget) }) }); menu.css({ 'left': e[cur.eventPosX], 'top': e[cur.eventPosY] }).show(); if (cur.shadow) shadow.css({ width: menu.width(), height: menu.height(), left: e.pageX + 2, top: e.pageY + 2 }).show(); jQuery(document).one('click', hide) } function hide() { menu.hide(); shadow.hide() } jQuery.contextMenu = { defaults: function (userDefaults) { jQuery.each(userDefaults, function (i, val) { if (typeof val == 'object' && defaults[i]) { jQuery.extend(defaults[i], val) } else defaults[i] = val }) } } })(jQuery); jQuery(function () { jQuery('div.contextMenu').hide() });


/* 文件树状：jquery.fileTree */
(function () { jQuery.extend(jQuery.fn, { fileTree: function (o, h) { if (!o) var o = {}; if (o.root == undefined) o.root = '/'; if (o.script == undefined) o.script = 'jqueryFileTree.aspx'; if (o.folderEvent == undefined) o.folderEvent = 'click'; if (o.expandSpeed == undefined) o.expandSpeed = 500; if (o.collapseSpeed == undefined) o.collapseSpeed = 500; if (o.expandEasing == undefined) o.expandEasing = null; if (o.collapseEasing == undefined) o.collapseEasing = null; if (o.multiFolder == undefined) o.multiFolder = true; if (o.loadMessage == undefined) o.loadMessage = 'Loading...'; jQuery(this).each(function () { function showTree(c, t) { jQuery(c).addClass('wait'); jQuery(".jqueryFileTree.start").remove(); jQuery.post(o.script, { dir: t }, function (data) { jQuery(c).find('.start').html(''); jQuery(c).removeClass('wait').append(data); if (o.root == t) jQuery(c).find('UL:hidden').show(); else jQuery(c).find('UL:hidden').slideDown({ duration: o.expandSpeed, easing: o.expandEasing }); bindTree(c) }) } function bindTree(t) { jQuery(t).find('LI A').bind(o.folderEvent, function () { if (jQuery(this).parent().hasClass('directory')) { if (jQuery(this).parent().hasClass('collapsed')) { if (!o.multiFolder) { jQuery(this).parent().parent().find('UL').slideUp({ duration: o.collapseSpeed, easing: o.collapseEasing }); jQuery(this).parent().parent().find('LI.directory').removeClass('expanded').addClass('collapsed') } jQuery(this).parent().find('UL').remove(); showTree(jQuery(this).parent(), escape(jQuery(this).attr('rel').match(/.*\//))); jQuery(this).parent().removeClass('collapsed').addClass('expanded') } else { jQuery(this).parent().find('UL').slideUp({ duration: o.collapseSpeed, easing: o.collapseEasing }); jQuery(this).parent().removeClass('expanded').addClass('collapsed') } } else { h(jQuery(this).attr('rel')) } return false }); if (o.folderEvent.toLowerCase != 'click') jQuery(t).find('LI A').bind('click', function () { return false }) } jQuery(this).html('<ul class="jqueryFileTree start"><li class="wait">' + o.loadMessage + '<li></ul>'); showTree(jQuery(this), escape(o.root)) }) } }) })(jQuery);



/* jquery.cookie */
jQuery.cookie = function (name, value, options) { if (typeof value != 'undefined') { options = options || {}; if (value === null) { value = ''; options.expires = -1 } var expires = ''; if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) { var date; if (typeof options.expires == 'number') { date = new Date(); date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000)) } else { date = options.expires } expires = '; expires=' + date.toUTCString() } var path = options.path ? '; path=' + (options.path) : ''; var domain = options.domain ? '; domain=' + (options.domain) : ''; var secure = options.secure ? '; secure' : ''; document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('') } else { var cookieValue = null; if (document.cookie && document.cookie != '') { var cookies = document.cookie.split(';'); for (var i = 0; i < cookies.length; i++) { var cookie = jQuery.trim(cookies[i]); if (cookie.substring(0, name.length + 1) == (name + '=')) { cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); break } } } return cookieValue } };


/* jquery.form */
(function () { jQuery.fn.ajaxSubmit = function (options) { if (!this.length) { log('ajaxSubmit: skipping submit process - no element selected'); return this } if (typeof options == 'function') options = { success: options }; options = jQuery.extend({ url: this.attr('action') || window.location.toString(), type: this.attr('method') || 'GET' }, options || {}); var veto = {}; this.trigger('form-pre-serialize', [this, options, veto]); if (veto.veto) { log('ajaxSubmit: submit vetoed via form-pre-serialize trigger'); return this } var a = this.formToArray(options.semantic); if (options.data) { options.extraData = options.data; for (var n in options.data) a.push({ name: n, value: options.data[n] }) } if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) { log('ajaxSubmit: submit aborted via beforeSubmit callback'); return this } this.trigger('form-submit-validate', [a, this, options, veto]); if (veto.veto) { log('ajaxSubmit: submit vetoed via form-submit-validate trigger'); return this } var q = jQuery.param(a); if (options.type.toUpperCase() == 'GET') { options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q; options.data = null } else options.data = q; var $form = this, callbacks = []; if (options.resetForm) callbacks.push(function () { $form.resetForm() }); if (options.clearForm) callbacks.push(function () { $form.clearForm() }); if (!options.dataType && options.target) { var oldSuccess = options.success || function () { }; callbacks.push(function (data) { jQuery(options.target).html(data).each(oldSuccess, arguments) }) } else if (options.success) callbacks.push(options.success); options.success = function (data, status) { for (var i = 0, max = callbacks.length; i < max; i++) callbacks[i](data, status, $form) }; var files = jQuery('input:file', this).fieldValue(); var found = false; for (var j = 0; j < files.length; j++) if (files[j]) found = true; if (options.iframe || found) { if (jQuery.browser.safari && options.closeKeepAlive) jQuery.get(options.closeKeepAlive, fileUpload); else fileUpload() } else jQuery.ajax(options); this.trigger('form-submit-notify', [this, options]); return this; function fileUpload() { var form = $form[0]; if (jQuery(':input[name=submit]', form).length) { alert('Error: Form elements must not be named "submit".'); return } var opts = jQuery.extend({}, jQuery.ajaxSettings, options); var id = 'jqFormIO' + (new Date().getTime()); var $io = jQuery('<iframe id="' + id + '" name="' + id + '" />'); var io = $io[0]; if (jQuery.browser.msie || jQuery.browser.opera) io.src = 'javascript:false;document.write("");'; $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' }); var xhr = { responseText: null, responseXML: null, status: 0, statusText: 'n/a', getAllResponseHeaders: function () { }, getResponseHeader: function () { }, setRequestHeader: function () { } }; var g = opts.global; if (g && !jQuery.active++) jQuery.event.trigger("ajaxStart"); if (g) jQuery.event.trigger("ajaxSend", [xhr, opts]); var cbInvoked = 0; var timedOut = 0; var sub = form.clk; if (sub) { var n = sub.name; if (n && !sub.disabled) { options.extraData = options.extraData || {}; options.extraData[n] = sub.value; if (sub.type == "image") { options.extraData[name + '.x'] = form.clk_x; options.extraData[name + '.y'] = form.clk_y } } } setTimeout(function () { var t = $form.attr('target'), a = $form.attr('action'); $form.attr({ target: id, encoding: 'multipart/form-data', enctype: 'multipart/form-data', method: 'POST', action: opts.url }); if (opts.timeout) setTimeout(function () { timedOut = true; cb() }, opts.timeout); var extraInputs = []; try { if (options.extraData) for (var n in options.extraData) extraInputs.push(jQuery('<input type="hidden" name="' + n + '" value="' + options.extraData[n] + '" />').appendTo(form)[0]); $io.appendTo('body'); io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false); form.submit() } finally { $form.attr('action', a); t ? $form.attr('target', t) : $form.removeAttr('target'); jQuery(extraInputs).remove() } }, 10); function cb() { if (cbInvoked++) return; io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false); var operaHack = 0; var ok = true; try { if (timedOut) throw 'timeout'; var data, doc; doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document; if (doc.body == null && !operaHack && jQuery.browser.opera) { operaHack = 1; cbInvoked--; setTimeout(cb, 100); return } xhr.responseText = doc.body ? doc.body.innerHTML : null; xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc; xhr.getResponseHeader = function (header) { var headers = { 'content-type': opts.dataType }; return headers[header] }; if (opts.dataType == 'json' || opts.dataType == 'script') { var ta = doc.getElementsByTagName('textarea')[0]; xhr.responseText = ta ? ta.value : xhr.responseText } else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) { xhr.responseXML = toXml(xhr.responseText) } data = jQuery.httpData(xhr, opts.dataType) } catch (e) { ok = false; jQuery.handleError(opts, xhr, 'error', e) } if (ok) { opts.success(data, 'success'); if (g) jQuery.event.trigger("ajaxSuccess", [xhr, opts]) } if (g) jQuery.event.trigger("ajaxComplete", [xhr, opts]); if (g && ! --jQuery.active) jQuery.event.trigger("ajaxStop"); if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error'); setTimeout(function () { $io.remove(); xhr.responseXML = null }, 100) }; function toXml(s, doc) { if (window.ActiveXObject) { doc = new ActiveXObject('Microsoft.XMLDOM'); doc.async = 'false'; doc.loadXML(s) } else doc = (new DOMParser()).parseFromString(s, 'text/xml'); return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null } } }; jQuery.fn.ajaxForm = function (options) { return this.ajaxFormUnbind().bind('submit.form-plugin', function () { jQuery(this).ajaxSubmit(options); return false }).each(function () { jQuery(":submit,input:image", this).bind('click.form-plugin', function (e) { var $form = this.form; $form.clk = this; if (this.type == 'image') { if (e.offsetX != undefined) { $form.clk_x = e.offsetX; $form.clk_y = e.offsetY } else if (typeof jQuery.fn.offset == 'function') { var offset = jQuery(this).offset(); $form.clk_x = e.pageX - offset.left; $form.clk_y = e.pageY - offset.top } else { $form.clk_x = e.pageX - this.offsetLeft; $form.clk_y = e.pageY - this.offsetTop } } setTimeout(function () { $form.clk = $form.clk_x = $form.clk_y = null }, 10) }) }) }; jQuery.fn.ajaxFormUnbind = function () { this.unbind('submit.form-plugin'); return this.each(function () { jQuery(":submit,input:image", this).unbind('click.form-plugin') }) }; jQuery.fn.formToArray = function (semantic) { var a = []; if (this.length == 0) return a; var form = this[0]; var els = semantic ? form.getElementsByTagName('*') : form.elements; if (!els) return a; for (var i = 0, max = els.length; i < max; i++) { var el = els[i]; var n = el.name; if (!n) continue; if (semantic && form.clk && el.type == "image") { if (!el.disabled && form.clk == el) a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y }); continue } var v = jQuery.fieldValue(el, true); if (v && v.constructor == Array) { for (var j = 0, jmax = v.length; j < jmax; j++) a.push({ name: n, value: v[j] }) } else if (v !== null && typeof v != 'undefined') a.push({ name: n, value: v }) } if (!semantic && form.clk) { var inputs = form.getElementsByTagName("input"); for (var i = 0, max = inputs.length; i < max; i++) { var input = inputs[i]; var n = input.name; if (n && !input.disabled && input.type == "image" && form.clk == input) a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y }) } } return a }; jQuery.fn.formSerialize = function (semantic) { return jQuery.param(this.formToArray(semantic)) }; jQuery.fn.fieldSerialize = function (successful) { var a = []; this.each(function () { var n = this.name; if (!n) return; var v = jQuery.fieldValue(this, successful); if (v && v.constructor == Array) { for (var i = 0, max = v.length; i < max; i++) a.push({ name: n, value: v[i] }) } else if (v !== null && typeof v != 'undefined') a.push({ name: this.name, value: v }) }); return jQuery.param(a) }; jQuery.fn.fieldValue = function (successful) { for (var val = [], i = 0, max = this.length; i < max; i++) { var el = this[i]; var v = jQuery.fieldValue(el, successful); if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) continue; v.constructor == Array ? jQuery.merge(val, v) : val.push(v) } return val }; jQuery.fieldValue = function (el, successful) { var n = el.name, t = el.type, tag = el.tagName.toLowerCase(); if (typeof successful == 'undefined') successful = true; if (successful && (!n || el.disabled || t == 'reset' || t == 'button' || (t == 'checkbox' || t == 'radio') && !el.checked || (t == 'submit' || t == 'image') && el.form && el.form.clk != el || tag == 'select' && el.selectedIndex == -1)) return null; if (tag == 'select') { var index = el.selectedIndex; if (index < 0) return null; var a = [], ops = el.options; var one = (t == 'select-one'); var max = (one ? index + 1 : ops.length); for (var i = (one ? index : 0); i < max; i++) { var op = ops[i]; if (op.selected) { var v = jQuery.browser.msie && !(op.attributes['value'].specified) ? op.text : op.value; if (one) return v; a.push(v) } } return a } return el.value }; jQuery.fn.clearForm = function () { return this.each(function () { jQuery('input,select,textarea', this).clearFields() }) }; jQuery.fn.clearFields = jQuery.fn.clearInputs = function () { return this.each(function () { var t = this.type, tag = this.tagName.toLowerCase(); if (t == 'text' || t == 'password' || tag == 'textarea') this.value = ''; else if (t == 'checkbox' || t == 'radio') this.checked = false; else if (tag == 'select') this.selectedIndex = -1 }) }; jQuery.fn.resetForm = function () { return this.each(function () { if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) this.reset() }) }; jQuery.fn.enable = function (b) { if (b == undefined) b = true; return this.each(function () { this.disabled = !b }) }; jQuery.fn.select = function (select) { if (select == undefined) select = true; return this.each(function () { var t = this.type; if (t == 'checkbox' || t == 'radio') this.checked = select; else if (this.tagName.toLowerCase() == 'option') { var $sel = jQuery(this).parent('select'); if (select && $sel[0] && $sel[0].type == 'select-one') { $sel.find('option').select(false) } this.selected = select } }) }; function log() { if (jQuery.fn.ajaxSubmit.debug && window.console && window.console.log) window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments, '')) } })(jQuery);




/* 提示框：jquery.jTips */
(function () { jQuery.fn.jtip = function (opts) { opts = jQuery.extend({ fade: false, gravity: 'r' }, opts || {}); var tip = null, cancelHide = false; this.hover(function () { if (jQuery("#jtip").is("div")) { return } if (jQuery(this).attr('tip') && jQuery(this).attr('tip') != "") { jQuery.data(this, 'cancel.jtip', true); var tip = jQuery.data(this, 'active.jtip'); if (!tip) { tip = jQuery('<div id="jtip" class="jtip"><div id="jtip-inner" class="jtip-inner">' + jQuery(this).attr('tip') + '</div></div>'); tip.css({ position: 'absolute', zIndex: 1000 }); jQuery(this).attr('title', ''); jQuery.data(this, 'active.jtip', tip) }; var pos = jQuery.extend({}, jQuery(this).offset(), { width: this.offsetWidth, height: this.offsetHeight }); tip.remove().css({ top: 0, left: 0, visibility: 'hidden', display: 'block' }).appendTo(document.body); var actualWidth = tip[0].offsetWidth, actualHeight = tip[0].offsetHeight; switch (opts.gravity.charAt(0)) { case 'b': tip.css({ top: pos.top + pos.height, left: pos.left }); break; case 't': tip.css({ top: pos.top - actualHeight, left: pos.left }); break; case 'l': tip.css({ top: pos.top + pos.height, left: pos.left - actualWidth }); break; case 'r': tip.css({ top: pos.top + pos.height, left: pos.left }); break } if (opts.fade) { tip.css({ opacity: 0, display: 'block', visibility: 'visible' }).animate({ opacity: 1 }) } else { tip.css({ visibility: 'visible' }) }; bgiframe = jQuery('<iframe class="bgiframe" frameborder="0" scrolling="no" src="" style="display:block;position:absolute;z-index:999;' + 'top:' + (jQuery('#jtip').offset().top) + 'px;' + 'left:' + (jQuery('#jtip').offset().left) + 'px;' + 'width:' + (tip[0].offsetWidth - 2) + 'px;' + 'height:' + (tip[0].offsetHeight - 2) + 'px;' + '"></iframe>'); bgiframe.appendTo(document.body) } }, function () { if (jQuery(this).attr('tip') && jQuery(this).attr('tip') != "") { jQuery.data(this, 'cancel.jtip', false); var self = this; setTimeout(function () { if (jQuery.data(this, 'cancel.jtip')) return; var tip = jQuery.data(self, 'active.jtip'); if (opts.fade) { tip.stop().fadeOut(function () { jQuery(this).remove() }) } else { tip.remove() }; jQuery('iframe.bgiframe').remove() }, 2) } }) } })(jQuery);



/* jquery.message */
(function (jQuery) { this.layer = { 'width': 200, 'height': 24, 'top': 0 }; this.title = '1'; this.sfuc = null; this.time = 4000; this.anims = { 'type': 'slide', 'speed': 1000, 'root': '/message/' }; this.inits = function (title, text) { if ($("#PopTips").is("div")) { return }; var sBody = '<div id="PopTips" style="z-index:100;width:90%;margin:0px auto;text-align:center;height:' + (this.layer.height + 2) + 'px;position:absolute;display:none; top:' + (this.layer.top) + 'px;"><div id="tips_Content" style="margin:0px auto;font-size:12px;width:' + (this.layer.width) + 'px;height:' + (this.layer.height) + 'px;border:#000000 1px solid;color:#000000;background:#ffffcc;text-align:left;"><span style="background:url(' + this.anims.root + this.title + '.gif) 1px no-repeat; text-indent:25px;float:left;height:16px;line-height:16px;padding-top:6px;">' + text + '</span><span id="PopTips_Close" style="float:right; padding-right:2px;width:16px;line-height:auto;color:red;font-size:12px;font-weight:bold;text-align:center;cursor:pointer;overflow:hidden;padding-top:6px;">×</span></div></div>'; $(document.body).prepend(sBody) }; this.show = function (title, text, time) { if ($("#PopTips").is("div")) { return }; if (title == '0' || !title) title = this.title; this.inits(title, text); if (time) this.time = time; switch (this.anims.type) { case 'slide': $("#PopTips").slideDown(this.anims.speed); break; case 'fade': $("#PopTips").fadeIn(this.anims.speed); break; case 'show': $("#PopTips").show(this.anims.speed); break; default: $("#PopTips").slideDown(this.anims.speed); break } $("#PopTips_Close").click(function () { setTimeout('this.close()', 1) }); this.rmtips(this.time) }; this.lays = function (width, height, top) { if ($("#PopTips").is("div")) { return }; if (width != 0 && width) this.layer.width = width; if (height != 0 && height) this.layer.height = height; if (top != 0 && top) this.layer.top = top }; this.anim = function (type, speed, root) { if ($("#PopTips").is("div")) { return }; if (type != 0 && type) this.anims.type = type; if (speed != 0 && speed) { switch (speed) { case 'slow': this.anims.speed = 1000; break; case 'fast': this.anims.speed = 200; break; case 'normal': this.anims.speed = 400; break; default: this.anims.speed = speed } }; if (root) { this.anims.root = root; } }; this.rmtips = function (time) { setTimeout('this.close()', time) }; this.close = function () { if ($("#PopTips").is("div")) { switch (this.anims.type) { case 'slide': $("#PopTips").slideUp(this.anims.speed); break; case 'fade': $("#PopTips").fadeOut(this.anims.speed); break; case 'show': $("#PopTips").hide(this.anims.speed); break; default: $("#PopTips").slideUp(this.anims.speed); break }; setTimeout('$("#PopTips").remove();', this.anims.speed); if (this.sfuc != null) eval(this.sfuc); this.original() } }; this.original = function () { this.layer = { 'width': 200, 'height': 24, 'top': 0 }; this.title = '1'; this.sfuc = null; this.time = 4000; this.anims = { 'type': 'slide', 'speed': 1000, 'root': '/message/'} }; this.doafter = function (_sFuc) { this.sfuc = _sFuc }; jQuery.message = this; return jQuery })(jQuery);


/* 灯笼广告：jquery.jFloat */
(function ($) {
    $.fn.jFloat = function (o) {
        o = $.extend({
            top: 60,  //广告距页面顶部距离
            left: 0, //广告左侧距离
            right: 0, //广告右侧距离
            width: 100,  //广告容器的宽度
            height: 360, //广告容器的高度
            minScreenW: 800, //出现广告的最小屏幕宽度，当屏幕分辨率小于此，将不出现对联广告
            position: "left"
        }, o || {});
        var h = o.height;
        var fDiv = $(this);
        if (o.minScreenW >= $(window).width()) {
            fDiv.hide();
            showAd = false;
        }
        else {
            fDiv.css("display", "block");
            switch (o.position) {
                case "left":
                    fDiv.css({ position: "absolute", left: o.left + "px", top: o.top + "px", width: o.width + "px", height: h + "px", overflow: "hidden" });
                    break;
                case "right":
                    fDiv.css({ position: "absolute", left: "auto", right: o.right + "px", top: o.top + "px", width: o.width + "px", height: h + "px", overflow: "hidden" });
                    break;
            };
        };
        function ylFloat() {
            var windowTop = $(window).scrollTop();
            if (fDiv.css("display") != "none")
                fDiv.css("top", o.top + windowTop + "px");
        };

        $(window).scroll(ylFloat);
        $(document).ready(ylFloat);

    };
})(jQuery);


/* jquery.jTemplates */
if (window.jQuery && !window.jQuery.createTemplate) { (function () { var Template = function (s, includes, settings) { this._tree = []; this._param = {}; this._includes = null; this._templates = {}; this._templates_code = {}; this.settings = jQuery.extend({ disallow_functions: false, filter_data: true, filter_params: false, runnable_functions: false, clone_data: true, clone_params: true }, settings); this.f_cloneData = (this.settings.f_cloneData !== undefined) ? (this.settings.f_cloneData) : (TemplateUtils.cloneData); this.f_escapeString = (this.settings.f_escapeString !== undefined) ? (this.settings.f_escapeString) : (TemplateUtils.escapeHTML); this.splitTemplates(s, includes); if (s) { this.setTemplate(this._templates_code['MAIN'], includes, this.settings) } this._templates_code = null }; Template.prototype.version = '0.7.5'; Template.DEBUG_MODE = true; Template.prototype.splitTemplates = function (s, includes) { var reg = /\{#template *(\w*?)( .*)*\}/g; var iter, tname, se; var lastIndex = null; var _template_settings = []; while ((iter = reg.exec(s)) != null) { lastIndex = reg.lastIndex; tname = iter[1]; se = s.indexOf('{#/template ' + tname + '}', lastIndex); if (se == -1) { throw new Error('jTemplates: Template "' + tname + '" is not closed.'); } this._templates_code[tname] = s.substring(lastIndex, se); _template_settings[tname] = TemplateUtils.optionToObject(iter[2]) } if (lastIndex === null) { this._templates_code['MAIN'] = s; return } for (var i in this._templates_code) { if (i != 'MAIN') { this._templates[i] = new Template() } } for (var i in this._templates_code) { if (i != 'MAIN') { this._templates[i].setTemplate(this._templates_code[i], jQuery.extend({}, includes || {}, this._templates || {}), jQuery.extend({}, this.settings, _template_settings[i])); this._templates_code[i] = null } } }; Template.prototype.setTemplate = function (s, includes, settings) { if (s == undefined) { this._tree.push(new TextNode('', 1)); return } s = s.replace(/[\n\r]/g, ''); s = s.replace(/\{\*.*?\*\}/g, ''); this._includes = jQuery.extend({}, this._templates || {}, includes || {}); this.settings = new Object(settings); var node = this._tree; var op = s.match(/\{#.*?\}/g); var ss = 0, se = 0; var e; var literalMode = 0; var elseif_level = 0; for (var i = 0, l = (op) ? (op.length) : (0); i < l; ++i) { if (literalMode) { se = s.indexOf('{#/literal}'); if (se == -1) { throw new Error("jTemplates: No end of literal."); } if (se > ss) { node.push(new TextNode(s.substring(ss, se), 1)) } ss = se + 11; literalMode = 0; i = jQuery.inArray('{#/literal}', op); continue } se = s.indexOf(op[i], ss); if (se > ss) { node.push(new TextNode(s.substring(ss, se), literalMode)) } var ppp = op[i].match(/\{#([\w\/]+).*?\}/); var op_ = RegExp.$1; switch (op_) { case 'elseif': ++elseif_level; node.switchToElse(); case 'if': e = new opIF(op[i], node); node.push(e); node = e; break; case 'else': node.switchToElse(); break; case '/if': while (elseif_level) { node = node.getParent(); --elseif_level } case '/for': case '/foreach': node = node.getParent(); break; case 'foreach': e = new opFOREACH(op[i], node, this); node.push(e); node = e; break; case 'for': e = opFORFactory(op[i], node, this); node.push(e); node = e; break; case 'include': node.push(new Include(op[i], this._includes)); break; case 'param': node.push(new UserParam(op[i])); break; case 'cycle': node.push(new Cycle(op[i])); break; case 'ldelim': node.push(new TextNode('{', 1)); break; case 'rdelim': node.push(new TextNode('}', 1)); break; case 'literal': literalMode = 1; break; case '/literal': if (Template.DEBUG_MODE) { throw new Error("jTemplates: No begin of literal."); } break; default: if (Template.DEBUG_MODE) { throw new Error('jTemplates: unknown tag ' + op_ + '.'); } } ss = se + op[i].length } if (s.length > ss) { node.push(new TextNode(s.substr(ss), literalMode)) } }; Template.prototype.get = function (d, param, element, deep) { ++deep; var $T = d, _param1, _param2; if (this.settings.clone_data) { $T = this.f_cloneData(d, { escapeData: (this.settings.filter_data && deep == 1), noFunc: this.settings.disallow_functions }, this.f_escapeString) } if (!this.settings.clone_params) { _param1 = this._param; _param2 = param } else { _param1 = this.f_cloneData(this._param, { escapeData: (this.settings.filter_params), noFunc: false }, this.f_escapeString); _param2 = this.f_cloneData(param, { escapeData: (this.settings.filter_params && deep == 1), noFunc: false }, this.f_escapeString) } var $P = jQuery.extend({}, _param1, _param2); var $Q = element; $Q.version = this.version; var ret = ''; for (var i = 0, l = this._tree.length; i < l; ++i) { ret += this._tree[i].get($T, $P, $Q, deep) } --deep; return ret }; Template.prototype.setParam = function (name, value) { this._param[name] = value }; TemplateUtils = function () { }; TemplateUtils.escapeHTML = function (txt) { return txt.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;') }; TemplateUtils.cloneData = function (d, filter, f_escapeString) { if (d == null) { return d } switch (d.constructor) { case Object: var o = {}; for (var i in d) { o[i] = TemplateUtils.cloneData(d[i], filter, f_escapeString) } if (!filter.noFunc) { if (d.hasOwnProperty("toString")) o.toString = d.toString } return o; case Array: var o = []; for (var i = 0, l = d.length; i < l; ++i) { o[i] = TemplateUtils.cloneData(d[i], filter, f_escapeString) } return o; case String: return (filter.escapeData) ? (f_escapeString(d)) : (d); case Function: if (filter.noFunc) { if (Template.DEBUG_MODE) throw new Error("jTemplates: Functions are not allowed."); else return undefined } default: return d } }; TemplateUtils.optionToObject = function (optionText) { if (optionText === null || optionText === undefined) { return {} } var o = optionText.split(/[= ]/); if (o[0] === '') { o.shift() } var obj = {}; for (var i = 0, l = o.length; i < l; i += 2) { obj[o[i]] = o[i + 1] } return obj }; var TextNode = function (val, literalMode) { this._value = val; this._literalMode = literalMode }; TextNode.prototype.get = function (d, param, element, deep) { var t = this._value; if (!this._literalMode) { var $T = d; var $P = param; var $Q = element; t = t.replace(/\{(.*?)\}/g, function (__a0, __a1) { try { var tmp = eval(__a1); if (typeof tmp == 'function') { var settings = jQuery.data(element, 'jTemplate').settings; if (settings.disallow_functions || !settings.runnable_functions) { return '' } else { tmp = tmp($T, $P, $Q) } } return (tmp === undefined) ? ("") : (String(tmp)) } catch (e) { if (Template.DEBUG_MODE) throw e; return "" } }) } return t }; var opIF = function (oper, par) { this._parent = par; oper.match(/\{#(?:else)*if (.*?)\}/); this._cond = RegExp.$1; this._onTrue = []; this._onFalse = []; this._currentState = this._onTrue }; opIF.prototype.push = function (e) { this._currentState.push(e) }; opIF.prototype.getParent = function () { return this._parent }; opIF.prototype.switchToElse = function () { this._currentState = this._onFalse }; opIF.prototype.get = function (d, param, element, deep) { var $T = d; var $P = param; var $Q = element; var ret = ''; try { var tab = (eval(this._cond)) ? (this._onTrue) : (this._onFalse); for (var i = 0, l = tab.length; i < l; ++i) { ret += tab[i].get(d, param, element, deep) } } catch (e) { if (Template.DEBUG_MODE) throw e; } return ret }; opFORFactory = function (oper, par, template) { if (oper.match(/\{#for (\w+?) *= *(\S+?) +to +(\S+?) *(?:step=(\S+?))*\}/)) { oper = '{#foreach opFORFactory.funcIterator as ' + RegExp.$1 + ' begin=' + (RegExp.$2 || 0) + ' end=' + (RegExp.$3 || -1) + ' step=' + (RegExp.$4 || 1) + ' extData=$T}'; return new opFOREACH(oper, par, template) } else { throw new Error('jTemplates: Operator failed "find": ' + oper); } }; opFORFactory.funcIterator = function (i) { return i }; var opFOREACH = function (oper, par, template) { this._parent = par; this._template = template; oper.match(/\{#foreach (.+?) as (\w+?)( .+)*\}/); this._arg = RegExp.$1; this._name = RegExp.$2; this._option = RegExp.$3 || null; this._option = TemplateUtils.optionToObject(this._option); this._onTrue = []; this._onFalse = []; this._currentState = this._onTrue }; opFOREACH.prototype.push = function (e) { this._currentState.push(e) }; opFOREACH.prototype.getParent = function () { return this._parent }; opFOREACH.prototype.switchToElse = function () { this._currentState = this._onFalse }; opFOREACH.prototype.get = function (d, param, element, deep) { try { var $T = d; var $P = param; var $Q = element; var fcount = eval(this._arg); var key = []; var mode = typeof fcount; if (mode == 'object') { var arr = []; jQuery.each(fcount, function (k, v) { key.push(k); arr.push(v) }); fcount = arr } var extData = (this._option.extData !== undefined) ? (eval(this._option.extData)) : {}; var s = Number(eval(this._option.begin) || 0), e; var step = Number(eval(this._option.step) || 1); if (mode != 'function') { e = fcount.length } else { if (this._option.end === undefined || this._option.end === null) { e = Number.MAX_VALUE } else { e = Number(eval(this._option.end)) + ((step > 0) ? (1) : (-1)) } } var ret = ''; var i, l; if (this._option.count) { var tmp = s + Number(eval(this._option.count)); e = (tmp > e) ? (e) : (tmp) } if ((e > s && step > 0) || (e < s && step < 0)) { var iteration = 0; var _total = (mode != 'function') ? (Math.ceil((e - s) / step)) : undefined; var ckey, cval; for (; ((step > 0) ? (s < e) : (s > e)); s += step, ++iteration) { ckey = key[s]; if (mode != 'function') { cval = fcount[s] } else { cval = fcount(s); if (cval === undefined || cval === null) { break } } if ((typeof cval == 'function') && (this._template.settings.disallow_functions || !this._template.settings.runnable_functions)) { continue } if ((mode == 'object') && (ckey in Object)) { continue } $T = extData; var p = $T[this._name] = cval; $T[this._name + '$index'] = s; $T[this._name + '$iteration'] = iteration; $T[this._name + '$first'] = (iteration == 0); $T[this._name + '$last'] = (s + step >= e); $T[this._name + '$total'] = _total; $T[this._name + '$key'] = (ckey !== undefined && ckey.constructor == String) ? (this._template.f_escapeString(ckey)) : (ckey); $T[this._name + '$typeof'] = typeof cval; for (i = 0, l = this._onTrue.length; i < l; ++i) { ret += this._onTrue[i].get($T, param, element, deep) } delete $T[this._name + '$index']; delete $T[this._name + '$iteration']; delete $T[this._name + '$first']; delete $T[this._name + '$last']; delete $T[this._name + '$total']; delete $T[this._name + '$key']; delete $T[this._name + '$typeof']; delete $T[this._name] } } else { for (i = 0, l = this._onFalse.length; i < l; ++i) { ret += this._onFalse[i].get($T, param, element, deep) } } return ret } catch (e) { if (Template.DEBUG_MODE) throw e; return "" } }; var Include = function (oper, includes) { oper.match(/\{#include (.*?)(?: root=(.*?))?\}/); this._template = includes[RegExp.$1]; if (this._template == undefined) { if (Template.DEBUG_MODE) throw new Error('jTemplates: Cannot find include: ' + RegExp.$1); } this._root = RegExp.$2 }; Include.prototype.get = function (d, param, element, deep) { var $T = d; try { return this._template.get(eval(this._root), param, element, deep) } catch (e) { if (Template.DEBUG_MODE) throw e; } }; var UserParam = function (oper) { oper.match(/\{#param name=(\w*?) value=(.*?)\}/); this._name = RegExp.$1; this._value = RegExp.$2 }; UserParam.prototype.get = function (d, param, element, deep) { var $T = d; var $P = param; var $Q = element; try { param[this._name] = eval(this._value) } catch (e) { if (Template.DEBUG_MODE) throw e; param[this._name] = undefined } return '' }; var Cycle = function (oper) { oper.match(/\{#cycle values=(.*?)\}/); this._values = eval(RegExp.$1); this._length = this._values.length; if (this._length <= 0) { throw new Error('jTemplates: cycle has no elements'); } this._index = 0; this._lastSessionID = -1 }; Cycle.prototype.get = function (d, param, element, deep) { var sid = jQuery.data(element, 'jTemplateSID'); if (sid != this._lastSessionID) { this._lastSessionID = sid; this._index = 0 } var i = this._index++ % this._length; return this._values[i] }; jQuery.fn.setTemplate = function (s, includes, settings) { if (s.constructor === Template) { return jQuery(this).each(function () { jQuery.data(this, 'jTemplate', s); jQuery.data(this, 'jTemplateSID', 0) }) } else { return jQuery(this).each(function () { jQuery.data(this, 'jTemplate', new Template(s, includes, settings)); jQuery.data(this, 'jTemplateSID', 0) }) } }; jQuery.fn.setTemplateURL = function (url_, includes, settings) { var s = jQuery.ajax({ url: url_, async: false }).responseText; return jQuery(this).setTemplate(s, includes, settings) }; jQuery.fn.setTemplateElement = function (elementName, includes, settings) { var s = $('#' + elementName).val(); if (s == null) { s = $('#' + elementName).html(); s = s.replace(/&lt;/g, "<").replace(/&gt;/g, ">") } s = jQuery.trim(s); s = s.replace(/^<\!\[CDATA\[([\s\S]*)\]\]>$/im, '$1'); s = s.replace(/^<\!--([\s\S]*)-->$/im, '$1'); return jQuery(this).setTemplate(s, includes, settings) }; jQuery.fn.hasTemplate = function () { var count = 0; jQuery(this).each(function () { if (jQuery.data(this, 'jTemplate')) { ++count } }); return count }; jQuery.fn.removeTemplate = function () { jQuery(this).processTemplateStop(); return jQuery(this).each(function () { jQuery.removeData(this, 'jTemplate') }) }; jQuery.fn.setParam = function (name, value) { return jQuery(this).each(function () { var t = jQuery.data(this, 'jTemplate'); if (t === undefined) { if (Template.DEBUG_MODE) throw new Error('jTemplates: Template is not defined.'); else return } t.setParam(name, value) }) }; jQuery.fn.processTemplate = function (d, param) { return jQuery(this).each(function () { var t = jQuery.data(this, 'jTemplate'); if (t === undefined) { if (Template.DEBUG_MODE) throw new Error('jTemplates: Template is not defined.'); else return } jQuery.data(this, 'jTemplateSID', jQuery.data(this, 'jTemplateSID') + 1); jQuery(this).html(t.get(d, param, this, 0)) }) }; jQuery.fn.processTemplateURL = function (url_, param, options) { var that = this; options = jQuery.extend({ type: 'GET', async: true, cache: false }, options); jQuery.ajax({ url: url_, type: options.type, data: options.data, dataFilter: options.dataFilter, async: options.async, cache: options.cache, timeout: options.timeout, dataType: 'json', success: function (d) { var r = jQuery(that).processTemplate(d, param); if (options.on_success) { options.on_success(r) } }, error: options.on_error, complete: options.on_complete }); return this }; var Updater = function (url, param, interval, args, objs, options) { this._url = url; this._param = param; this._interval = interval; this._args = args; this.objs = objs; this.timer = null; this._options = options || {}; var that = this; jQuery(objs).each(function () { jQuery.data(this, 'jTemplateUpdater', that) }); this.run() }; Updater.prototype.run = function () { this.detectDeletedNodes(); if (this.objs.length == 0) { return } var that = this; jQuery.getJSON(this._url, this._args, function (d) { var r = jQuery(that.objs).processTemplate(d, that._param); if (that._options.on_success) { that._options.on_success(r) } }); this.timer = setTimeout(function () { that.run() }, this._interval) }; Updater.prototype.detectDeletedNodes = function () { this.objs = jQuery.grep(this.objs, function (o) { if (jQuery.browser.msie) { var n = o.parentNode; while (n && n != document) { n = n.parentNode } return n != null } else { return o.parentNode != null } }) }; jQuery.fn.processTemplateStart = function (url, param, interval, args, options) { return new Updater(url, param, interval, args, this, options) }; jQuery.fn.processTemplateStop = function () { return jQuery(this).each(function () { var updater = jQuery.data(this, 'jTemplateUpdater'); if (updater == null) { return } var that = this; updater.objs = jQuery.grep(updater.objs, function (o) { return o != that }); jQuery.removeData(this, 'jTemplateUpdater') }) }; jQuery.extend({ createTemplate: function (s, includes, settings) { return new Template(s, includes, settings) }, createTemplateURL: function (url_, includes, settings) { var s = jQuery.ajax({ url: url_, async: false }).responseText; return new Template(s, includes, settings) }, jTemplatesDebugMode: function (value) { Template.DEBUG_MODE = value } }) })(jQuery) }




/* jquery.ajaxfileupload */
jQuery.extend({
    createUploadIframe: function (id, uri) {
        //create frame
        var frameId = 'jUploadFrame' + id;
        var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId + '" style="position:absolute; top:-9999px; left:-9999px"';
        if (window.ActiveXObject) {
            if (typeof uri == 'boolean') {
                iframeHtml += ' src="' + 'javascript:false' + '"';
            } else if (typeof uri == 'string') {
                iframeHtml += ' src="' + uri + '"';
            }
        }
        iframeHtml += ' />';
        jQuery(iframeHtml).appendTo(document.body);
        return jQuery('#' + frameId).get(0);
    },
    createUploadForm: function (id, fileElementId, data) {
        //Create form
        var formId = 'jUploadForm' + id;
        var fileId = 'jUploadFile' + id;
        var form = jQuery('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
        //Handle files
        if (typeof (fileElementId) == "string") {
            fileElementId = [fileElementId];
        }
        for (var i in fileElementId) {
            var oldElement = jQuery('#' + fileElementId[i]);
            var newElement = jQuery(oldElement).clone();
            jQuery(oldElement).attr('id', fileId);
            jQuery(oldElement).before(newElement);
            jQuery(oldElement).appendTo(form);
        }
        //Handle data
        if (data) {
            for (var i in data) {
                jQuery('<textarea name="' + i + '" style="display:none;">' + data[i] + '</textarea>').appendTo(form);
            }
        }
        //Set attributes
        jQuery(form).css('position', 'absolute');
        jQuery(form).css('top', '-1200px');
        jQuery(form).css('left', '-1200px');
        jQuery(form).appendTo('body');
        return form;
    },

    ajaxFileUpload: function (s) {
        // introduce global settings, allowing the client to modify them for all requests, not only timeout
        s = jQuery.extend({}, jQuery.ajaxSettings, s);
        var id = new Date().getTime();
        var form = jQuery.createUploadForm(id, s.fileElementId, (typeof (s.data) == 'undefined' ? false : s.data));
        var io = jQuery.createUploadIframe(id, s.secureuri);
        var frameId = 'jUploadFrame' + id;
        var formId = 'jUploadForm' + id;
        // Watch for a new set of requests
        if (s.global && !jQuery.active++) {
            jQuery.event.trigger("ajaxStart");
        }
        var requestDone = false;
        // Create the request object
        var xml = {};
        if (s.global)
            jQuery.event.trigger("ajaxSend", [xml, s]);
        // Wait for a response to come back
        var uploadCallback = function (isTimeout) {
            var io = document.getElementById(frameId);
            try {
                if (io.contentWindow) {
                    xml.responseText = io.contentWindow.document.body ? jQuery('<div>').html(io.contentWindow.document.body.innerHTML).text() : null;
                    xml.responseXML = io.contentWindow.document.XMLDocument ? io.contentWindow.document.XMLDocument : io.contentWindow.document;
                } else if (io.contentDocument) {
                    xml.responseText = io.contentWindow.document.body ? jQuery('<div>').html(io.contentWindow.document.body.innerHTML).text() : null;
                    xml.responseXML = io.contentDocument.document.XMLDocument ? io.contentDocument.document.XMLDocument : io.contentDocument.document;
                }
            } catch (e) {
                jQuery.handleError(s, xml, null, e);
            }
            if (xml || isTimeout == "timeout") {
                requestDone = true;
                var status;
                try {
                    status = isTimeout != "timeout" ? "success" : "error";
                    // Make sure that the request was successful or notmodified
                    if (status != "error") {
                        // process the data (runs the xml through httpData regardless of callback)
                        var data = jQuery.uploadHttpData(xml, s.dataType);
                        // If a local callback was specified, fire it and pass it the data
                        if (s.success)
                            s.success(data, status);
                        // Fire the global callback
                        if (s.global)
                            jQuery.event.trigger("ajaxSuccess", [xml, s]);
                    } else
                        jQuery.handleError(s, xml, status);
                } catch (e) {
                    status = "error";
                    jQuery.handleError(s, xml, status, e);
                }
                // The request was completed
                if (s.global)
                    jQuery.event.trigger("ajaxComplete", [xml, s]);
                // Handle the global AJAX counter
                if (s.global && ! --jQuery.active)
                    jQuery.event.trigger("ajaxStop");
                // Process result
                if (s.complete)
                    s.complete(xml, status);
                jQuery(io).unbind();
                setTimeout(function () {
                    try {
                        jQuery(io).remove();
                        jQuery(form).remove();
                    } catch (e) {
                        jQuery.handleError(s, xml, null, e);
                    }
                }, 100);
                xml = null;
            }
        };
        // Timeout checker
        if (s.timeout > 0) {
            setTimeout(function () {
                // Check to see if the request is still happening
                if (!requestDone) uploadCallback("timeout");
            }, s.timeout);
        }
        try {
            var form = jQuery('#' + formId);
            jQuery(form).attr('action', s.url);
            jQuery(form).attr('method', 'POST');
            jQuery(form).attr('target', frameId);
            if (form.encoding) {
                jQuery(form).attr('encoding', 'multipart/form-data');
            } else {
                jQuery(form).attr('enctype', 'multipart/form-data');
            }
            jQuery(form).submit();

        } catch (e) {
            jQuery.handleError(s, xml, null, e);
        }
        jQuery('#' + frameId).load(uploadCallback);
        return { abort: function () {
        }
        };

    },
    uploadHttpData: function (r, type) {
        var data = !type;
        data = type == "xml" || data ? r.responseXML : r.responseText;
        // If the type is "script", eval it in global context
        if (type == "script")
            jQuery.globalEval(data);
        // Get the JavaScript object, if JSON is used.
        if (type == "json") {
            ////////////以下为新增代码///////////////   
            data = r.responseText;
            var start = data.indexOf(">");
            if (start != -1) {
                var end = data.indexOf("<", start + 1);
                if (end != -1) {
                    data = data.substring(start + 1, end);
                }
            }
            ///////////以上为新增代码///////////////   
            eval("data = " + data);
        }
        // evaluate scripts within html
        if (type == "html")
            jQuery("<div>").html(data).find('script').remove();
        return data;
    },
    handleError: function (s, xml, status, e) {
        // If a local callback was specified, fire it
        if (s.error)
            s.error(xml, status, e);
        // Fire the global callback
        if (s.global)
            jQuery.event.trigger("ajaxError", [xml, s, e]);
    }
});


/* jquery.select */
(function () { jQuery.fn.getCount = function () { return jQuery(this).get(0).options.length }; jQuery.fn.getSelectedIndex = function () { return jQuery(this).get(0).selectedIndex }; jQuery.fn.getSelectedText = function () { if (this.getCount() == 0) { return "下拉框中无选项" } else { var index = this.getSelectedIndex(); return jQuery(this).get(0).options[index].text } }; jQuery.fn.getSelectedValue = function () { if (this.getCount() == 0) { return "下拉框中无选中值" } else { return jQuery(this).val() } }; jQuery.fn.setSelectedValue = function (value) { jQuery(this).get(0).value = value }; jQuery.fn.setSelectedText = function (text) { var isExist = false; var count = this.getCount(); for (var i = 0; i < count; i++) { if (jQuery(this).get(0).options[i].text == text) { jQuery(this).get(0).options[i].selected = true; isExist = true; break } } if (!isExist) { alert("下拉框中不存在该项") } }; jQuery.fn.setSelectedIndex = function (index) { var count = this.getCount(); if (index >= count || index < 0) { alert("选中项索引超出范围") } else { jQuery(this).get(0).selectedIndex = index } }; jQuery.fn.isExistItem = function (value) { var isExist = false; var count = this.getCount(); for (var i = 0; i < count; i++) { if (jQuery(this).get(0).options[i].value == value) { isExist = true; break } } return isExist }; jQuery.fn.addOption = function (text, value) { if (this.isExistItem(value)) { alert("待添加项的值已存在") } else { jQuery(this).get(0).options.add(new Option(text, value)) } }; jQuery.fn.removeItem = function (value) { if (this.isExistItem(value)) { var count = this.getCount(); for (var i = 0; i < count; i++) { if (jQuery(this).get(0).options[i].value == value) { jQuery(this).get(0).remove(i); break } } } else { alert("待删除的项不存在!") } }; jQuery.fn.removeIndex = function (index) { var count = this.getCount(); if (index >= count || index < 0) { alert("待删除项索引超出范围") } else { jQuery(this).get(0).remove(index) } }; jQuery.fn.removeSelected = function () { var index = this.getSelectedIndex(); this.removeIndex(index) }; jQuery.fn.clearAll = function () { jQuery(this).get(0).options.length = 0 } })(jQuery);

/* jquery.hoverIntent */
(function ($) { $.fn.hoverIntent = function (f, g) { var cfg = { sensitivity: 7, interval: 100, timeout: 0 }; cfg = $.extend(cfg, g ? { over: f, out: g} : f); var cX, cY, pX, pY; var track = function (ev) { cX = ev.pageX; cY = ev.pageY; }; var compare = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) { $(ob).unbind("mousemove", track); ob.hoverIntent_s = 1; return cfg.over.apply(ob, [ev]); } else { pX = cX; pY = cY; ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } }; var delay = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); ob.hoverIntent_s = 0; return cfg.out.apply(ob, [ev]); }; var handleHover = function (e) { var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget; while (p && p != this) { try { p = p.parentNode; } catch (e) { p = this; } } if (p == this) { return false; } var ev = jQuery.extend({}, e); var ob = this; if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); } if (e.type == "mouseover") { pX = ev.pageX; pY = ev.pageY; $(ob).bind("mousemove", track); if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } } else { $(ob).unbind("mousemove", track); if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout(function () { delay(ev, ob); }, cfg.timeout); } } }; return this.mouseover(handleHover).mouseout(handleHover); }; })(jQuery);




/* jquery.formValidator */
var regexEnum =
{
    intege: "^-?[1-9]\\d*$", //整数
    intege1: "^[1-9]\\d*$", //正整数
    intege2: "^-[1-9]\\d*$", //负整数
    num: "^([+-]?)\\d*\\.?\\d+$", //数字
    num1: "^([+]?)\\d*\\.?\\d+$", //正数
    num2: "^-\\d*\\.?\\d+$", //负数
    decmal: "^([+-]?)\\d*\\.\\d+$", //浮点数
    decmal1: "^([+]?)\\d*\\.\\d+$", //正浮点数
    decmal2: "^-\\d*\\.\\d+$", //负浮点数
    money: "^[1-9][0-9]*(\\.[0-9]{1,2})?$", //货币
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
    emailgroup: "^(\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+,)*\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件群
    color: "^[a-fA-F0-9]{6}$", //颜色
    url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$", //url
    domain: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+(:[1-9][0-9]*)?$", //domain
    chinese: "^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$", //仅中文
    ascii: "^[\\x00-\\xFF]+$", //仅ACSII字符
    zipcode: "^\\d{6}$", //邮编
    mobile: "^(13|14|15|16|17|18|19)[0-9]{9}$", //手机
    ip4: "^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]).(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]).(d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]).(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$", //ip地址
    notempty: "^\\S+$", //非空
    picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$", //图片
    rar: "(.*)\\.(rar|zip|7zip|tgz)$", //压缩文件
    date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$", //日期
    datetime: "^\\d{4}(\\-)(\\d{2})\\1\\d{2} \\d{2}:\\d{2}:\\d{2}$", //长日期
    qq: "^[1-9]*[1-9][0-9]*$", //QQ号码
    tel: "(\\d{3}-|\\d{4}-)?(\\d{8}|\\d{7})", //国内电话
    username: "^[A-Za-z\\u4E00-\\u9FA5\\uF900-\\uFA2D]+[A-Za-z0-9\\u4E00-\\u9FA5\\uF900-\\uFA2D\\-\\_]*$", //可以是中文、英文、数字、-、_
    letter: "^[A-Za-z]+$", //字母
    letter_u: "^[A-Z]+$", //大写字母
    letter_l: "^[a-z]+$", //小写字母
    idcard: "^[1-9]([0-9]{13}|[0-9]{16})[0-9a-zA-Z]$"//身份证
}

var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }

function isCardID(sId) {
    var iSum = 0;
    var info = "";
    if (!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
    sId = sId.replace(/x$/i, "a");
    if (aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
    sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "身份证上的出生日期非法";
    for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
    if (iSum % 11 != 1) return "你输入的身份证号非法";
    return true; //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女") 
}


var jQuery_formValidator_initConfig; (function() {
    jQuery.formValidator = {
        sustainType: function(elem, setting) {
            var srcTag = elem.tagName;
            var stype = elem.type;
            switch (setting.validateType) {
            case "InitValidator":
                return true;
            case "InputValidator":
                if (srcTag == "INPUT" || srcTag == "TEXTAREA" || srcTag == "SELECT") {
                    return true
                } else {
                    return false
                }
            case "CompareValidator":
                if (srcTag == "INPUT" || srcTag == "TEXTAREA") {
                    if (stype == "checkbox" || stype == "radio") {
                        return false
                    } else {
                        return true
                    }
                }
                return false;
            case "AjaxValidator":
                if (stype == "text" || stype == "textarea" || stype == "file" || stype == "select-one") {
                    return true
                } else {
                    return false
                }
            case "RegexValidator":
                if (srcTag == "INPUT" || srcTag == "TEXTAREA") {
                    if (stype == "checkbox" || stype == "radio") {
                        return false
                    } else {
                        return true
                    }
                }
                return false;
            case "FunctionValidator":
                return true
            }
        },
        initConfig: function(controlOptions) {
            var settings = {
                validatorGroup: "1",
                alertMessage: false,
                onSuccess: function() {
                    return true
                },
                onError: function() {},
                submitOnce: false
            };
            controlOptions = controlOptions || {};
            jQuery.extend(settings, controlOptions);
            if (jQuery_formValidator_initConfig == null) {
                jQuery_formValidator_initConfig = new Array()
            }
            jQuery_formValidator_initConfig.push(settings)
        },
        appendValid: function(id, setting) {
	    //如果是各种校验不支持的类型，就不追加到。返回-1表示没有追加成功
	    var elem = $("#"+id).get(0);   
            if (!$.formValidator.sustainType(elem, setting)) return - 1;
            var srcjo = jQuery("#" + id).get(0);
            if (setting.validateType == "InitValidator" || !srcjo.settings || srcjo.settings == undefined) {
                srcjo.settings = new Array()
            }
            var len = srcjo.settings.push(setting);
            srcjo.settings[len - 1].index = len - 1;
            return len - 1
        },
        getInitConfig: function(validatorGroup) {
            if (jQuery_formValidator_initConfig != null) {
                for (i = 0; i < jQuery_formValidator_initConfig.length; i++) {
                    if (validatorGroup == jQuery_formValidator_initConfig[i].validatorGroup) {
                        return jQuery_formValidator_initConfig[i]
                    }
                }
            }
            return null
        },
        triggerValidate: function(returnObj) {
            switch (returnObj.setting.validateType) {
            case "InputValidator":
                $.formValidator.InputValid(returnObj);
                break;
            case "CompareValidator":
                $.formValidator.CompareValid(returnObj);
                break;
            case "AjaxValidator":
                $.formValidator.AjaxValid(returnObj);
                break;
            case "RegexValidator":
                $.formValidator.RegexValid(returnObj);
                break;
            case "FunctionValidator":
                $.formValidator.FunctionValid(returnObj);
                break
            }
        },
        SetTipState: function(tipid, showclass, showmsg) {
            var tip = jQuery("#" + tipid);
            tip.removeClass();
            tip.addClass(showclass);
            tip.html(showmsg);
            tip.attr("title", showmsg)
        },
        SetFailState: function(tipid, showmsg) {
            var tip = jQuery("#" + tipid);
            tip.removeClass();
            tip.addClass("onError");
            tip.html(showmsg);
            tip.attr("title", showmsg);
            alert(tip.width())
        },
        ShowMessage: function(returnObj) {
            var id = returnObj.id;
            var isValid = returnObj.isValid;
            var setting = returnObj.setting;
            var showmsg = "";
            var showclass = "onNormal";
            var settings = jQuery("#" + id).get(0).settings;
            if (!isValid) {
                if (setting.validateType == "AjaxValidator") {
                    if (setting.lastValid == "") {
                        showclass = "onLoad";
                        showmsg = setting.onwait
                    } else {
                        showclass = "onError";
                        showmsg = setting.onerror
                    }
                } else {
                    showmsg = (returnObj.errormsg == "" ? setting.onerror: returnObj.errormsg);
                    showclass = "onError"
                }
                if ($.formValidator.getInitConfig(settings[0].validatorGroup).alertMessage) {
                    var elem = jQuery("#" + id).get(0);
                    if (elem.validoldvalue != jQuery(elem).val()) alert(showmsg)
                } else {
                    $.formValidator.SetTipState(settings[0].tipid, showclass, showmsg)
                }
            } else {
                if (!$.formValidator.getInitConfig(setting.validatorGroup).alertMessage) {
                    var showmsg = "";
                    if ($.formValidator.IsEmpty(id)) {
                        showmsg = setting.onempty
                    } else {
                        showmsg = (setting.oncorrect ? setting.oncorrect: '格式正确')
                    }
                    $.formValidator.SetTipState(setting.tipid, "onSuccess", showmsg)
                }
            }
        },
        GetLength: function(id) {
            var srcjo = jQuery("#" + id);
            sType = srcjo.get(0).type;
            var len = 0;
            switch (sType) {
            case "text":
            case "hidden":
            case "password":
            case "textarea":
            case "file":
                var val = srcjo.val();
                for (var i = 0; i < val.length; i++) {
                    if (val.charCodeAt(i) >= 0x4e00 && val.charCodeAt(i) <= 0x9fa5) {
                        len += 2
                    } else {
                        len++
                    }
                }
                break;
            case "checkbox":
            case "radio":
                len = jQuery("input[type='" + sType + "'][name='" + srcjo.attr("name") + "']:checked").length;
                break;
            case "select-one":
                len = srcjo.get(0).options ? srcjo.get(0).options.selectedIndex: -1;
                break;
            case "select-more":
                break
            }
            return len
        },
        IsEmpty: function(id) {
            if (jQuery("#" + id).get(0).settings[0].empty && $.formValidator.GetLength(id) == 0) {
                return true
            } else {
                return false
            }
        },
        IsOneValid: function(id) {
            return OneIsValid(id, 1).isValid
        },
        OneIsValid: function(id, index) {
            var returnObj = new Object();
            returnObj.id = id;
            returnObj.ajax = -1;
            returnObj.errormsg = "";
            var elem = jQuery("#" + id).get(0);
            var settings = elem.settings;
            var settingslen = settings.length;
            if ($.formValidator.IsEmpty(id)) {
                returnObj.setting = settings[0];
                returnObj.isValid = true
            } else {
                for (var i = index; i < settingslen; i++) {
                    returnObj.setting = settings[i];
                    if (settings[i].validateType != "AjaxValidator") {
                        $.formValidator.triggerValidate(returnObj)
                    } else {
                        returnObj.ajax = i
                    }
                    if (!settings[i].isValid) {
                        returnObj.isValid = false;
                        returnObj.setting = settings[i];
                        break
                    } else {
                        returnObj.isValid = true;
                        returnObj.setting = settings[0];
                        if (settings[i].validateType == "AjaxValidator") break
                    }
                }
            }
            if (returnObj.isValid) {
                var lb_ret = returnObj.setting.onvalid(jQuery("#" + id).get(0), jQuery("#" + id).val());
                if (lb_ret != undefined) {
                    if (typeof lb_ret == "string") {
                        returnObj.errormsg = lb_ret;
                        returnObj.isValid = false
                    } else {
                        settings[settings.length - 1].isValid = lb_ret;
                        returnObj.isValid = lb_ret
                    }
                }
            }
            return returnObj
        },
        PageIsValid: function(validatorGroup) {
            if (validatorGroup == null || validatorGroup == undefined) validatorGroup = "1";
            var isValid = true;
            var thefirstid = "";
            var returnObj, setting;
            var error_tip = "^";
            jQuery("form").each(function(i, form1) {
                for (i = 0; i < form1.elements.length; i++) {
                    elem = form1.elements[i];
                    if (elem.settings != undefined && elem.settings != null) {
                        if (elem.settings[0].validatorGroup == validatorGroup) {
                            if ($.formValidator.getInitConfig(validatorGroup).alertMessage) {
                                if (isValid) {
                                    returnObj = $.formValidator.OneIsValid(elem.id, 1);
                                    if (!returnObj.isValid) {
                                        $.formValidator.ShowMessage(returnObj);
                                        isValid = false;
                                        if (thefirstid == "") {
                                            thefirstid = returnObj.id;
                                            setting = returnObj.setting
                                        }
                                    }
                                }
                            } else {
                                returnObj = $.formValidator.OneIsValid(elem.id, 1);
                                if (!returnObj.isValid) {
                                    isValid = false;
                                    if (thefirstid == "") {
                                        thefirstid = returnObj.id;
                                        setting = returnObj.setting
                                    }
                                    if (error_tip.indexOf("^" + elem.settings[0].tipid + "^") == -1) {
                                        error_tip = error_tip + elem.settings[0].tipid + "^";
                                        $.formValidator.ShowMessage(returnObj)
                                    }
                                } else {
                                    if (error_tip.indexOf("^" + elem.settings[0].tipid + "^") == -1) {
                                        $.formValidator.ShowMessage(returnObj)
                                    }
                                }
                            }
                        }
                    }
                }
            });
            if (isValid) {
                isValid = $.formValidator.getInitConfig(validatorGroup).onSuccess();
                if ($.formValidator.getInitConfig(validatorGroup).submitOnce) {
                    jQuery("input[type='submit']").attr("disabled", true)
                }
            } else {
                $.formValidator.getInitConfig(validatorGroup).onError(setting.onerror, jQuery("#" + thefirstid));
                if (thefirstid != "") {
                    jQuery("#" + thefirstid).focus()
                }
            }
            return isValid
        },
        AjaxValid: function(returnObj) {
            var id = returnObj.id;
            var srcjo = jQuery("#" + id);
            var setting = srcjo.get(0).settings[returnObj.ajax];
            var ls_url = setting.url;
            if (srcjo.size() == 0 && srcjo.get(0).settings[0].empty) {
                returnObj.setting = jQuery("#" + id).get(0).settings[0];
                returnObj.isValid = true;
                $.formValidator.ShowMessage(returnObj);
                setting.isValid = true;
                return
            }
            if (setting.addidvalue) {
                var parm = id + "=" + escape(srcjo.val());
                ls_url = ls_url + ((ls_url).indexOf("?") > 0 ? ("&" + parm) : ("?" + parm))
            }
            jQuery.ajax({
                mode: "abort",
                type: setting.type,
                url: ls_url,
                data: setting.data,
                async: setting.async,
                dataType: setting.datatype,
                success: function(data) {
                    setting0 = srcjo.get(0).settings[0];
                    if (setting.success(data)) {
                        $.formValidator.SetTipState(setting0.tipid, "onSuccess", (setting0.oncorrect ? setting0.oncorrect: '格式正确'));
                        setting.isValid = true
                    } else {
                        $.formValidator.SetTipState(setting0.tipid, "onError", setting.onerror);
                        setting.isValid = false
                    }
                },
                complete: function() {
                    if (setting.buttons && setting.buttons.length > 0) setting.buttons.attr({
                        "disabled": false
                    });
                    setting.complete
                },
                beforeSend: function() {
                    if (setting.buttons && setting.buttons.length > 0) setting.buttons.attr({
                        "disabled": true
                    });
                    var isvalid = setting.beforesend();
                    if (isvalid) setting.isValid = false;
                    setting.lastValid = "-1";
                    return setting.beforesend
                },
                error: function() {
                    setting0 = srcjo.get(0).settings[0];
                    $.formValidator.SetTipState(setting0.tipid, "onError", setting.onerror);
                    setting.isValid = false;
                    setting.error()
                },
                processData: setting.processdata
            })
        },
        RegexValid: function(returnObj) {
            var id = returnObj.id;
            var setting = returnObj.setting;
            var srcTag = jQuery("#" + id).get(0).tagName;
            var elem = jQuery("#" + id).get(0);
            if (elem.settings[0].empty && elem.value == "") {
                setting.isValid = true
            } else {
                var regexpress = setting.regexp;
                if (setting.datatype == "enum") {
                    regexpress = eval("regexEnum." + regexpress)
                }
                if (regexpress == undefined || regexpress == "") {
                    setting.isValid = false;
                    return
                }
                var exp = new RegExp(regexpress, setting.param);
                if (exp.test(jQuery("#" + id).val())) {
                    setting.isValid = true
                } else {
                    setting.isValid = false
                }
            }
        },
        FunctionValid: function(returnObj) {
            var id = returnObj.id;
            var setting = returnObj.setting;
            var srcjo = jQuery("#" + id);
            var lb_ret = setting.fun(srcjo.val(), srcjo.get(0));
            if (lb_ret != undefined) {
                if (typeof lb_ret == "string") {
                    setting.isValid = false;
                    returnObj.errormsg = lb_ret
                } else {
                    setting.isValid = lb_ret
                }
            }
        },
        InputValid: function(returnObj) {
            var id = returnObj.id;
            var setting = returnObj.setting;
            var srcjo = jQuery("#" + id);
            var elem = srcjo.get(0);
            var val = srcjo.val();
            var sType = elem.type;
            var len = $.formValidator.GetLength(id);
            switch (sType) {
            case "text":
            case "hidden":
            case "password":
            case "textarea":
            case "file":
            case "checkbox":
            case "select-one":
            case "radio":
                if (sType == "select-one") {
                    setting.type = "size"
                }
                if (setting.type == "size") {
                    if (len < setting.min || len > setting.max) {
                        setting.isValid = false
                    } else {
                        setting.isValid = true
                    }
                } else {
                    stype = (typeof setting.min);
                    if (stype == "number") {
                        if (!isNaN(val)) {
                            nval = parseFloat(val);
                            if (nval >= setting.min && nval <= setting.max) {
                                setting.isValid = true
                            } else {
                                setting.isValid = false
                            }
                        } else setting.isValid = false
                    }
                    if (stype == "string") {
                        if (val >= setting.min && val <= setting.max) {
                            setting.isValid = true
                        } else {
                            setting.isValid = false
                        }
                    }
                }
                break;
            case "select-more":
                break
            }
        },
        CompareValid: function(returnObj) {
            var id = returnObj.id;
            var setting = returnObj.setting;
            var srcjo = jQuery("#" + id);
            var desjo = jQuery("#" + setting.desID);
            setting.isValid = false;
            curvalue = srcjo.val();
            ls_data = desjo.val();
            if (setting.datatype == "number") {
                if (!isNaN(curvalue) && !isNaN(ls_data)) {
                    curvalue = parseFloat(curvalue);
                    ls_data = parseFloat(ls_data)
                } else {
                    return
                }
            }
            switch (setting.operateor) {
            case "=":
                if (curvalue == ls_data) {
                    setting.isValid = true
                }
                break;
            case "!=":
                if (curvalue != ls_data) {
                    setting.isValid = true
                }
                break;
            case ">":
                if (curvalue > ls_data) {
                    setting.isValid = true
                }
                break;
            case ">=":
                if (curvalue >= ls_data) {
                    setting.isValid = true
                }
                break;
            case "<":
                if (curvalue < ls_data) {
                    setting.isValid = true
                }
                break;
            case "<=":
                if (curvalue <= ls_data) {
                    setting.isValid = true
                }
                break;
            case "oneok":
                if ($.formValidator.IsEmpty(id) || $.formValidator.IsEmpty(IsEmpty.desID)) {
                    setting.isValid = false
                } else {
                    setting.isValid = true
                }
            }
        }
    };
    jQuery.fn.formValidator = function(msgOptions) {

        var setting = {
            validatorGroup: "1",
            empty: false,
            submitonce: false,
            automodify: false,
            entermovetonext: true,
            onshow: "",
            onfocus: "请输入内容",
            oncorrect: "格式正确",
            onempty: "输入内容为空",
            onvalid: function() {
                return true
            },
            onfocusevent: function() {},
            onblurevent: function() {},
            tipid: this.get(0).id + "Tip",
            defaultvalue: null,
            validateType: "InitValidator"
        };
        msgOptions = msgOptions || {};
        jQuery.extend(setting, msgOptions);
        return this.each(function() {
            var triggerID = this.id;
            if(!triggerID)
            { 
		triggerID = Math.ceil(Math.random()*50000000); 
		this.id = triggerID;
            }
            var tip = jQuery("#" + setting.tipid);
            $.formValidator.appendValid(triggerID, setting);
            if (!$.formValidator.getInitConfig(setting.validatorGroup).alertMessage) {
                $.formValidator.SetTipState(setting.tipid, "onShow", setting.onshow)
            }
            var srcTag = this.tagName;
            var defaultValue = setting.defaultvalue;
            if (srcTag == "INPUT" || srcTag == "TEXTAREA") {
                var stype = this.type;
                var joeach = jQuery(this);
                if (stype == "checkbox" || stype == "radio") {
                    joeach = jQuery("input[name=" + this.name + "]");
                    if (defaultValue) {
                        checkobj = jQuery("input[name=" + this.name + "][value='" + defaultValue + "']");
                        if (checkobj.length == 1) checkobj.attr("checked", "true")
                    }
                } else {
                    if (defaultValue) joeach.val(setting.defaultvalue)
                }
                joeach.focus(function() {
                    var settings = joeach.get(0).settings;
                    if (!$.formValidator.getInitConfig(settings[0].validatorGroup).alertMessage) {
                        $.formValidator.SetTipState(settings[0].tipid, "onFocus", settings[0].onfocus)
                    }
                    if (stype == "password" || stype == "text" || stype == "textarea" || stype == "file") {
                        this.validoldvalue = jQuery(this).val()
                    }
                    settings[0].onfocusevent(joeach.get(0))
                });
                joeach.blur(function() {
                    var elem = joeach.get(0);
                    var thefirstsettings = elem.settings;
                    var settingslen = thefirstsettings.length;
                    var returnObj = $.formValidator.OneIsValid(triggerID, 1);
                    if (returnObj.ajax >= 0 && elem.validoldvalue != jQuery(elem).val()) {
                        $.formValidator.SetTipState(thefirstsettings[0].tipid, "onLoad", thefirstsettings[returnObj.ajax].onwait);
                        $.formValidator.AjaxValid(returnObj)
                    } else {
                        $.formValidator.ShowMessage(returnObj);
                        if (!returnObj.isValid) {
                            var auto = thefirstsettings[0].automodify && (elem.type == "text" || elem.type == "textarea" || elem.type == "file");
                            if (auto && !$.formValidator.getInitConfig(thefirstsettings[0].validatorGroup).alertMessage) {
                                alert(returnObj.setting.onerror);
                                $.formValidator.SetTipState(thefirstsettings[0].tipid, "onShow", setting.onshow)
                            }
                        }
                    }
                    thefirstsettings[0].onblurevent(joeach.get(0))
                })
            } else if (srcTag == "SELECT") {
                srcjo = jQuery(this);
                var settings = this.settings;
                if (defaultValue) {
                    jQuery.each(this.options,
                    function() {
                        if (this.value == defaultValue) this.selected = true
                    })
                }
                srcjo.focus(function() {
                    if (!$.formValidator.getInitConfig(setting.validatorGroup).alertMessage) {
                        $.formValidator.SetTipState(settings[0].tipid, "onFocus", settings[0].onfocus)
                    }
                });
                srcjo.bind("change",
                function() {
                    var returnObj = $.formValidator.OneIsValid(triggerID, 1);
                    if (returnObj.ajax >= 0 && this.validoldvalue != jQuery(this).val()) {
                        $.formValidator.AjaxValid(triggerID, returnObj.setting)
                    } else {
                        $.formValidator.ShowMessage(returnObj)
                    }
                })
            }
        })
    };
    jQuery.fn.InputValidator = function(controlOptions) {
        var stype = this.get(0).type;
        var error_info = "输入错误";
        if (stype == "checkbox" || stype == "radio") {
            error_info = "选择错误";
        }

        var settings = {
            isValid: false,
            min: 0,
            max: 99999999999999,
            forceValid: false,
            type: "size",
            defaultValue: null,
            onerror: error_info,
            validateType: "InputValidator"
        };
        controlOptions = controlOptions || {};
        jQuery.extend(settings, controlOptions);
        return this.each(function() {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    jQuery.fn.SelectValidator = function(controlOptions) {
        var settings = {
            isValid: false,
            onerror: "必须选择",
            defaultValue: null,
            validateType: "SelectValidator"
        };
        controlOptions = controlOptions || {};
        jQuery.extend(settings, controlOptions);
        return this.each(function() {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    jQuery.fn.CompareValidator = function(controlOptions) {
        var settings = {
            isValid: false,
            desID: "",
            operateor: "=",
            onerror: "输入错误",
            validateType: "CompareValidator"
        };
        controlOptions = controlOptions || {};
        jQuery.extend(settings, controlOptions);
        return this.each(function() {
            var li_index = $.formValidator.appendValid(this.id, settings)
        })
    };
    jQuery.fn.RegexValidator = function(controlOptions) {
        var settings = {
            isValid: false,
            regexp: "",
            param: "i",
            datatype: "string",
            onerror: "输入的格式不正确",
            validateType: "RegexValidator"
        };
        controlOptions = controlOptions || {};
        jQuery.extend(settings, controlOptions);
        return this.each(function() {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    jQuery.fn.FunctionValidator = function(controlOptions) {
        var settings = {
            isValid: true,
            onerror: "你输入的数据不正确，请确认",
            fun: function() {
                this.isValid = true
            },
            validateType: "FunctionValidator"
        };
        controlOptions = controlOptions || {};
        jQuery.extend(settings, controlOptions);
        return this.each(function() {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    jQuery.fn.AjaxValidator = function(controlOptions) {
        var settings = {
            isValid: false,
            lastValid: "",
            type: "GET",
            url: "",
            addidvalue: true,
            datatype: "html",
            data: "",
            async: true,
            beforesend: function() {
                return true
            },
            success: function() {
                return true
            },
            complete: function() {},
            processdata: false,
            error: function() {},
            buttons: null,
            onerror: "服务器校验没有通过",
            onwait: "正在等待服务器返回数据",
            validateType: "AjaxValidator"
        };
        controlOptions = controlOptions || {};
        jQuery.extend(settings, controlOptions);
        return this.each(function() {
            $.formValidator.appendValid(this.id, settings)
        })
    };
    jQuery.fn.DefaultPassed = function() {
        return this.each(function() {
            var settings = this.settings;
            for (var i = 1; i < settings.length; i++) {
                settings[i].isValid = true;
                $.formValidator.SetTipState(settings[0].tipid, "onSuccess", (settings[0].oncorrect ? settings[0].oncorrect: '格式正确'))
            }
        })
    }
})(jQuery);

