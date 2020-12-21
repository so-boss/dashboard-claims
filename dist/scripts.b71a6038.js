// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//var jquery = require("jquery");
//window.$ = window.jQuery = jquery; // notice the definition of global variables here
// require("jquery-ui");

/*!
* Superclamp 0.2.1
* https://github.com/makandra/superclamp
*/
(function () {
  var t,
      e,
      n,
      i,
      o,
      r,
      s,
      l,
      u,
      a,
      p,
      c,
      d,
      h,
      m,
      f,
      g,
      y,
      _,
      v,
      b,
      A,
      E,
      T,
      w,
      x,
      N,
      L,
      _F,
      I,
      B,
      R,
      S = function S(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  },
      q = [].slice;

  u = !1, e = !1, o = "superclamp:done", c = "superclamp:update", l = "superclamp:instance", a = "superclamp-ready", n = "superclamp:dimensions", i = "superclamp:distanceToBottomRight", r = "superclamp:fragmentNodes", s = "superclamp:fragmentValues", t = ".clamp-ellipsis.is-not-required {\n  visibility: hidden !important;\n}\n.clamp-hidden {\n  display: none !important;\n}", p = function () {
    function t(t) {
      var e;
      this.element = t, this._clampNode = S(this._clampNode, this), this._checkFit = S(this._checkFit, this), this._unchanged = S(this._unchanged, this), this._distanceToBottomRight = S(this._distanceToBottomRight, this), this._getEllipsisAt = S(this._getEllipsisAt, this), this._clampThis = S(this._clampThis, this), this._storeDistance = S(this._storeDistance, this), this._updateElementAt = S(this._updateElementAt, this), this._updateEllipsisSize = S(this._updateEllipsisSize, this), d("initialize", this.element), e = document.createTextNode(" "), this.ellipsis = document.createElement("span"), this.ellipsis.classList.add("clamp-ellipsis"), this.ellipsis.innerText = "\u2026", this.element.appendChild(e), this.element.appendChild(this.ellipsis), this.element[l] = this, this.element.setAttribute(a, !0);
    }

    return t.register = function (t) {
      var e, n, i;

      for (d(".register", t), e = 0, n = t.length; n > e; e++) {
        i = t[e], this.clamp(i);
      }

      m();
    }, t.clamp = function (e) {
      var n;
      d(".clamp", e), n = e[l] || new t(e), n.clamp();
    }, t.reclampAll = function (e) {
      var n, i, o, r;

      for ((null == e || null != e.currentTarget) && (e = document), r = e.querySelectorAll("[" + a + "]"), i = 0, o = r.length; o > i; i++) {
        n = r[i], t.clamp(n);
      }

      return m(), e;
    }, t.prototype.clamp = function () {
      N("query", function (t) {
        return function () {
          return t._updateEllipsisSize(), t._updateElementAt(), t._unchanged() ? d("unchanged", t.element) : t._clampThis();
        };
      }(this));
    }, t.prototype._updateEllipsisSize = function () {
      return I(this.ellipsis);
    }, t.prototype._updateElementAt = function () {
      return this.elementAt = v(this.element);
    }, t.prototype._storeDistance = function () {
      var t;
      return t = this._distanceToBottomRight(), d("storing distance", t), this.ellipsis[i] = t;
    }, t.prototype._clampThis = function () {
      return x("_clampThis", this.element), this._clampNode(this.element, function (t) {
        return function (e) {
          return t._storeDistance(), N("layout", function () {
            return e ? t.ellipsis.classList.add("is-not-required") : t.ellipsis.classList.remove("is-not-required"), R(t.element, o);
          });
        };
      }(this));
    }, t.prototype._getEllipsisAt = function () {
      return b(this.ellipsis);
    }, t.prototype._distanceToBottomRight = function () {
      var t;
      return t = this._getEllipsisAt(), [this.elementAt.right - t.right, this.elementAt.bottom - t.bottom];
    }, t.prototype._unchanged = function () {
      var t, e, n, o, r, s;
      return s = this.ellipsis[i], null != s ? (t = s[0], n = s[1], r = this._distanceToBottomRight(), e = r[0], o = r[1], d("_unchanged: %o == %o && %o == %o", t, e, n, o), t === e && n === o) : !1;
    }, t.prototype._checkFit = function (t) {
      return N("query", function (e) {
        return function () {
          var n, i;
          return i = e._getEllipsisAt(), n = i.bottom <= e.elementAt.bottom && i.right <= e.elementAt.right, d("checkFit: %o (bottom: %o <= %o, right: %o <= %o)", n, i.bottom, e.elementAt.bottom, i.right, e.elementAt.right), t(n);
        };
      }(this));
    }, t.prototype._clampNode = function (t, e, n) {
      var i, o;
      return null == n && (n = !0), i = function (n) {
        return function (r, s, l) {
          return N("query", function () {
            var u, a, p;
            return d("findBestFit #contents: %o, nodeName: %o, prefix: %o", r, t.nodeName, s), 0 === r.length ? e(l) : 1 === r.length ? o ? (t.nodeValue = s + r[0], n._checkFit(function (n) {
              return N("layout", function (i) {
                return function () {
                  return n ? e(l) : (t.nodeValue = s.replace(RegExp(" $"), ""), e(!1));
                };
              }(this));
            })) : n._clampNode(r[0], e, l) : (a = Math.floor(r.length / 2), u = r.slice(0, a), p = r.slice(a), d("findBestFit head: %o, tail: %o", u, p), o ? t.nodeValue = s + u.join(" ") : (_F(u), E(p)), n._checkFit(function (e) {
              return N("layout", function (n) {
                return function () {
                  return e ? (d("fits"), o ? i(p, t.nodeValue + " ", l) : i(p, "", l)) : (d("wont fit"), i(u, s, !1));
                };
              }(this));
            }));
          });
        };
      }(this), o = "#text" === t.nodeName, N("layout", function (e) {
        return function () {
          var r;
          return o ? (T(t), i(_(t), "", n)) : "#comment" !== t.nodeName ? (_F([t]), r = f(t), t === e.element && (r = Array.prototype.slice.call(r, 0, -2)), i(r, "", n)) : void 0;
        };
      }(this));
    }, t;
  }(), w = {
    layout: [],
    query: []
  }, N = function N(t, e) {
    w[t].push(e);
  }, h = function h(t) {
    var e, n;
    if (n = w[t], 0 === n.length) return !0;

    for (d("draining", t); e = n.shift();) {
      e();
    }

    return !1;
  }, m = function m() {
    for (var t, e; !t || !e;) {
      t = h("layout"), e = h("query");
    }
  }, d = function d() {
    var t, n;
    return t = 1 <= arguments.length ? q.call(arguments, 0) : [], e && null != (n = window.console) && "function" == typeof n.debug ? n.debug.apply(n, t) : void 0;
  }, x = function x() {
    var t, e;
    return t = 1 <= arguments.length ? q.call(arguments, 0) : [], u && null != (e = window.console) && "function" == typeof e.log ? e.log.apply(e, t) : void 0;
  }, I = function I(t) {
    t[n] = g(t), d("storeDimensions", t[n]);
  }, g = function g(t) {
    var e, n, i;
    return e = window.getComputedStyle(t), n = t.offsetHeight - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom), i = t.offsetWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight), d("getDimensions", [n, i]), [i, n];
  }, A = function A(t) {
    return t[n];
  }, b = function b(t) {
    var e, n, i, o;
    return i = A(t) || g(t), o = i[0], e = i[1], n = {
      top: t.offsetTop,
      left: t.offsetLeft
    }, null == n.bottom && (n.bottom = n.top + e), null == n.right && (n.right = n.left + o), d("getPosition of %o: %o", t, n), n;
  }, v = function v(t) {
    var e, n, i, o, r, s, l, u, a, p;
    return s = !!t.currentStyle, i = window.getComputedStyle(t), e = "border-box" === i.boxSizing, a = t.offsetTop, l = t.offsetLeft, o = parseInt(i.maxHeight) || parseInt(i.height), p = parseInt(i.maxWidth) || parseInt(i.width), e && (u = {
      top: parseInt(i.paddingTop) || 0,
      left: parseInt(i.paddingLeft) || 0,
      right: parseInt(i.paddingRight) || 0,
      bottom: parseInt(i.paddingBottom) || 0
    }, n = {
      top: parseInt(i.borderTopWidth) || 0,
      left: parseInt(i.borderLeftWidth) || 0,
      right: parseInt(i.borderRightWidth) || 0,
      bottom: parseInt(i.borderBottomWidth) || 0
    }, s || (a += u.top + n.top, l += u.left + n.left, p -= u.left + u.right + n.left + n.right, o -= u.top + u.bottom + n.top + n.bottom)), r = {
      top: a,
      left: l,
      right: l + p,
      bottom: a + o,
      width: p,
      height: o
    };
  }, y = function y(t) {
    var e, n, i, o;
    return i = t.parentNode, n = i[r] || [], o = i[s] || [], e = Array.prototype.indexOf.call(n, t), [n, o, e, i];
  }, L = function L(t, e) {
    var n, i, o, l, u;
    l = y(t), i = l[0], u = l[1], n = l[2], o = l[3], 0 > n && (n = i.length), i[n] = t, u[n] = e, o[r] = i, o[s] = u;
  }, _ = function _(t) {
    var e, n, i, o, r;
    return o = y(t), n = o[0], r = o[1], e = o[2], i = o[3], r[e];
  }, T = function T(t) {
    null == _(t) && L(t, t.nodeValue.split(/[ \t\r\n]+/));
  }, f = function f(t) {
    return t.childNodes;
  }, E = function E(t) {
    var e, n, i;

    for (d("hideAll", t), e = 0, n = t.length; n > e; e++) {
      i = t[e], "#text" === i.nodeName ? (T(i), i.nodeValue = "") : i.classList.add("clamp-hidden");
    }
  }, _F = function F(t) {
    var e, n, i;

    for (d("showAll", t), e = 0, n = t.length; n > e; e++) {
      i = t[e], "#text" === i.nodeName ? (T(i), i.nodeValue = _(i).join(" ")) : (i.classList.remove("clamp-hidden"), _F(f(i)));
    }
  }, R = function R(t, e) {
    var n;
    return "function" == typeof Event ? n = new Event("submit") : (n = document.createEvent("Event"), n.initEvent(e, !0, !0)), t.dispatchEvent(n);
  }, B = document.createElement("style"), B.type = "text/css", B.appendChild(document.createTextNode(t)), document.head.appendChild(B), "undefined" != typeof jQuery && (jQuery.fn.clamp = function () {
    return p.register(this.get()), this;
  }), document.addEventListener("DOMContentLoaded", function () {
    return document.addEventListener(c, p.reclampAll);
  }), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module && "object" == _typeof(module.exports) ? module.exports = p : window.Superclamp = p;
}).call(this);
$(function () {
  $(document).ready(function () {
    $("#files>select").selectmenu({
      create: function create(e, ui) {
        var $select = $(this);
        var $children = $select.next().children();
        $children.filter(".ui-icon").insertAfter($children.filter(".ui-selectmenu-text"));
        setTimeout(function () {
          $select.closest("[built]").attr("built", true);
        }, 2000);
      }
    }); // $(".doc-text div:first").each(function() {
    //   var $newDiv = $("<div>"+$(this).text()+"</div>").prependTo($(this).parent())
    //
    //   $(this).remove()
    //
    //   $newDiv.clamp()
    // })

    $(".doc-text div").clamp();

    function calcThisShiz($el) {
      //$("[highlight]").each(function() {
      if ($el.is("[highlight=start]")) {
        $el.data("px", {
          start: {},
          stop: {}
        });
        var pos = {};
      } else {
        var pos = $el.prevUntil("[highlight=start]").data("px");
      }

      pos = $el.position();

      if ($el.is("[highlight=stop]")) {
        $el.prevUntil("[highlight=start]").data("px").stop = pos;
      } else {
        $el.data("px").start = pos;
      } // })
      //     $('<div class="row-light"></div>').appendTo("#days").css({
      //         left:pos.start.left,
      //         position:absolute,
      //         width:Math.abs(pos.start.left-pos.stop.left)+$(".day-num").width()
      //     })


      console.log($el);
    }

    var state = true;
    $(".day-num").on("click", function () {
      var highlightValue = "start";

      if (!state) {
        highlightValue = "stop";
      }

      $(this).attr("highlight", highlightValue);
      state = !state;
      calcThisShiz($(this)); //     console.log($(this).position())
    });
  });
  /* linkOut("https://www.alesolutions.com/");*/

  function linkOut(url) {
    window.open(url);
  }
});
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53617" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","scripts.js"], null)
//# sourceMappingURL=/scripts.b71a6038.js.map