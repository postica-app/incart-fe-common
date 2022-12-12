import Rn, { createStitches as jn, styled as Pe } from "@stitches/react";
import xt, { useMemo as Pn, createContext as An, forwardRef as Fn, createElement as $t, useContext as In, useEffect as gr, Children as St, Component as Mn, useState as Vr, useCallback as Dn } from "react";
const hr = {
  purple: "#6A23C6",
  purpleLight: "#E5D4FA",
  blue: "#238FC6",
  blueLight: "#EFF2F3",
  red: "#E66C6C",
  redLight: "#F3EFEF",
  grey1: "#F1EFF3",
  grey2: "#D2CCD9",
  grey3: "#C0B9C8",
  grey4: "#A198AD",
  grey5: "#62576E"
}, {
  styled: V,
  css: Ru,
  globalCss: ju,
  keyframes: Pu,
  getCssText: Au,
  theme: Fu,
  createTheme: Iu,
  config: Mu
} = jn({
  theme: {
    colors: hr,
    shadows: hr
  },
  utils: {
    elevated: () => ({
      boxShadow: "0px 1rem 2rem rgba(0, 0, 0, 0.1)"
    }),
    lightBorder: (e) => e ? {
      boxShadow: "0px 1rem 2rem rgba(0, 0, 0, 0.1), inset 0rem 0rem 0rem 0.5rem $purpleLight"
    } : {
      boxShadow: "inset 0rem 0rem 0rem 0.5rem $purpleLight  "
    },
    animated: () => ({
      transition: "300ms cubic-bezier(0,.67,0,.99)"
    })
  }
}), Ae = {
  margin: "0px",
  variants: {
    white: {
      true: {
        color: "white"
      }
    },
    spatial: {
      true: {
        lineHeight: 1.5
      }
    },
    ...Object.fromEntries(Object.entries(hr).map(([e, r]) => [e, {
      true: {
        color: r
      }
    }]))
  }
}, Du = Pe("h1", {
  fontSize: "6rem",
  ...Ae
}), kn = Pe("h2", {
  fontSize: "5rem",
  ...Ae
}), Nn = Pe("h3", {
  fontSize: "4rem",
  ...Ae
}), Ln = Pe("p", {
  fontSize: "5rem",
  ...Ae
}), we = Pe("p", {
  fontSize: "4rem",
  ...Ae
}), Yn = {
  Wrapper: V("button", {
    display: "flex",
    outline: "none",
    gap: "1rem",
    borderRadius: "12rem",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    compoundVariants: [
      {
        ghost: !0,
        active: !0,
        css: {
          border: "0.5rem solid $purpleLight",
          color: "$purple",
          backgroundColor: "white"
        }
      },
      {
        ghost: !0,
        active: !1,
        css: {
          border: "0.5rem solid $grey2",
          color: "$grey4",
          backgroundColor: "white"
        }
      },
      {
        ghost: !1,
        active: !0,
        css: {
          backgroundColor: "$purple",
          color: "white"
        }
      },
      {
        ghost: !1,
        active: !1,
        css: {
          backgroundColor: "$grey4",
          color: "white"
        }
      }
    ],
    variants: {
      size: {
        normal: {
          padding: "3rem 5rem"
        },
        small: {
          padding: "2rem 3rem"
        }
      },
      active: {
        false: {},
        true: {}
      },
      ghost: {
        true: {
          elevated: !0
        },
        false: {}
      }
    },
    defaultVariants: {
      active: !0,
      ghost: !1,
      size: "normal"
    }
  })
};
var zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Un(e) {
  var r = e.default;
  if (typeof r == "function") {
    var t = function() {
      return r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var a = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(t, o, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), t;
}
var Ge = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function Vn() {
  if (Wr)
    return Ee;
  Wr = 1;
  var e = xt, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, h) {
    var p, y = {}, S = null, w = null;
    h !== void 0 && (S = "" + h), l.key !== void 0 && (S = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (p in l)
      o.call(l, p) && !i.hasOwnProperty(p) && (y[p] = l[p]);
    if (c && c.defaultProps)
      for (p in l = c.defaultProps, l)
        y[p] === void 0 && (y[p] = l[p]);
    return { $$typeof: r, type: c, key: S, ref: w, props: y, _owner: a.current };
  }
  return Ee.Fragment = t, Ee.jsx = s, Ee.jsxs = s, Ee;
}
var xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br;
function Wn() {
  return Br || (Br = 1, process.env.NODE_ENV !== "production" && function() {
    var e = xt, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), A = Symbol.iterator, k = "@@iterator";
    function F(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = A && n[A] || n[k];
      return typeof u == "function" ? u : null;
    }
    var I = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(n) {
      {
        for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), v = 1; v < u; v++)
          f[v - 1] = arguments[v];
        D("error", n, f);
      }
    }
    function D(n, u, f) {
      {
        var v = I.ReactDebugCurrentFrame, _ = v.getStackAddendum();
        _ !== "" && (u += "%s", f = f.concat([_]));
        var x = f.map(function(b) {
          return String(b);
        });
        x.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, x);
      }
    }
    var M = !1, d = !1, X = !1, Je = !1, Ze = !1, Me;
    Me = Symbol.for("react.module.reference");
    function Qe(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || Ze || n === a || n === h || n === p || Je || n === w || M || d || X || typeof n == "object" && n !== null && (n.$$typeof === S || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || n.$$typeof === Me || n.getModuleId !== void 0));
    }
    function er(n, u, f) {
      var v = n.displayName;
      if (v)
        return v;
      var _ = u.displayName || u.name || "";
      return _ !== "" ? f + "(" + _ + ")" : f;
    }
    function De(n) {
      return n.displayName || "Context";
    }
    function Y(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var u = n;
            return De(u) + ".Consumer";
          case s:
            var f = n;
            return De(f._context) + ".Provider";
          case l:
            return er(n, n.render, "ForwardRef");
          case y:
            var v = n.displayName || null;
            return v !== null ? v : Y(n.type) || "Memo";
          case S: {
            var _ = n, x = _._payload, b = _._init;
            try {
              return Y(b(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, J = 0, ke, Ne, he, Le, ve, Ye, ze;
    function Ue() {
    }
    Ue.__reactDisabledLog = !0;
    function rr() {
      {
        if (J === 0) {
          ke = console.log, Ne = console.info, he = console.warn, Le = console.error, ve = console.group, Ye = console.groupCollapsed, ze = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        J++;
      }
    }
    function tr() {
      {
        if (J--, J === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, n, {
              value: ke
            }),
            info: B({}, n, {
              value: Ne
            }),
            warn: B({}, n, {
              value: he
            }),
            error: B({}, n, {
              value: Le
            }),
            group: B({}, n, {
              value: ve
            }),
            groupCollapsed: B({}, n, {
              value: Ye
            }),
            groupEnd: B({}, n, {
              value: ze
            })
          });
        }
        J < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = I.ReactCurrentDispatcher, me;
    function ne(n, u, f) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (_) {
            var v = _.stack.trim().match(/\n( *(at )?)/);
            me = v && v[1] || "";
          }
        return `
` + me + n;
      }
    }
    var be = !1, oe;
    {
      var nr = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new nr();
    }
    function g(n, u) {
      if (!n || be)
        return "";
      {
        var f = oe.get(n);
        if (f !== void 0)
          return f;
      }
      var v;
      be = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ye.current, ye.current = null, rr();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (G) {
              v = G;
            }
            Reflect.construct(n, [], b);
          } else {
            try {
              b.call();
            } catch (G) {
              v = G;
            }
            n.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            v = G;
          }
          n();
        }
      } catch (G) {
        if (G && v && typeof G.stack == "string") {
          for (var m = G.stack.split(`
`), N = v.stack.split(`
`), O = m.length - 1, j = N.length - 1; O >= 1 && j >= 0 && m[O] !== N[j]; )
            j--;
          for (; O >= 1 && j >= 0; O--, j--)
            if (m[O] !== N[j]) {
              if (O !== 1 || j !== 1)
                do
                  if (O--, j--, j < 0 || m[O] !== N[j]) {
                    var L = `
` + m[O].replace(" at new ", " at ");
                    return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), typeof n == "function" && oe.set(n, L), L;
                  }
                while (O >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        be = !1, ye.current = x, tr(), Error.prepareStackTrace = _;
      }
      var se = n ? n.displayName || n.name : "", Ur = se ? ne(se) : "";
      return typeof n == "function" && oe.set(n, Ur), Ur;
    }
    function _e(n, u, f) {
      return g(n, !1);
    }
    function ae(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, f) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return g(n, ae(n));
      if (typeof n == "string")
        return ne(n);
      switch (n) {
        case h:
          return ne("Suspense");
        case p:
          return ne("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return _e(n.render);
          case y:
            return Z(n.type, u, f);
          case S: {
            var v = n, _ = v._payload, x = v._init;
            try {
              return Z(x(_), u, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, jr = {}, Pr = I.ReactDebugCurrentFrame;
    function We(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Pr.setExtraStackFrame(f);
      } else
        Pr.setExtraStackFrame(null);
    }
    function cn(n, u, f, v, _) {
      {
        var x = Function.call.bind(Ve);
        for (var b in n)
          if (x(n, b)) {
            var m = void 0;
            try {
              if (typeof n[b] != "function") {
                var N = Error((v || "React class") + ": " + f + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              m = n[b](u, b, v, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              m = O;
            }
            m && !(m instanceof Error) && (We(_), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", f, b, typeof m), We(null)), m instanceof Error && !(m.message in jr) && (jr[m.message] = !0, We(_), P("Failed %s type: %s", f, m.message), We(null));
          }
      }
    }
    var fn = Array.isArray;
    function or(n) {
      return fn(n);
    }
    function ln(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, f = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return f;
      }
    }
    function dn(n) {
      try {
        return Ar(n), !1;
      } catch {
        return !0;
      }
    }
    function Ar(n) {
      return "" + n;
    }
    function Fr(n) {
      if (dn(n))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ln(n)), Ar(n);
    }
    var Te = I.ReactCurrentOwner, pn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ir, Mr, ar;
    ar = {};
    function gn(n) {
      if (Ve.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function hn(n) {
      if (Ve.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function vn(n, u) {
      if (typeof n.ref == "string" && Te.current && u && Te.current.stateNode !== u) {
        var f = Y(Te.current.type);
        ar[f] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Te.current.type), n.ref), ar[f] = !0);
      }
    }
    function yn(n, u) {
      {
        var f = function() {
          Ir || (Ir = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function mn(n, u) {
      {
        var f = function() {
          Mr || (Mr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var bn = function(n, u, f, v, _, x, b) {
      var m = {
        $$typeof: r,
        type: n,
        key: u,
        ref: f,
        props: b,
        _owner: x
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function _n(n, u, f, v, _) {
      {
        var x, b = {}, m = null, N = null;
        f !== void 0 && (Fr(f), m = "" + f), hn(u) && (Fr(u.key), m = "" + u.key), gn(u) && (N = u.ref, vn(u, _));
        for (x in u)
          Ve.call(u, x) && !pn.hasOwnProperty(x) && (b[x] = u[x]);
        if (n && n.defaultProps) {
          var O = n.defaultProps;
          for (x in O)
            b[x] === void 0 && (b[x] = O[x]);
        }
        if (m || N) {
          var j = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          m && yn(b, j), N && mn(b, j);
        }
        return bn(n, m, N, _, v, Te.current, b);
      }
    }
    var ir = I.ReactCurrentOwner, Dr = I.ReactDebugCurrentFrame;
    function ie(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Dr.setExtraStackFrame(f);
      } else
        Dr.setExtraStackFrame(null);
    }
    var sr;
    sr = !1;
    function ur(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function kr() {
      {
        if (ir.current) {
          var n = Y(ir.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Tn(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), f = n.lineNumber;
          return `

Check your code at ` + u + ":" + f + ".";
        }
        return "";
      }
    }
    var Nr = {};
    function En(n) {
      {
        var u = kr();
        if (!u) {
          var f = typeof n == "string" ? n : n.displayName || n.name;
          f && (u = `

Check the top-level render call using <` + f + ">.");
        }
        return u;
      }
    }
    function Lr(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var f = En(u);
        if (Nr[f])
          return;
        Nr[f] = !0;
        var v = "";
        n && n._owner && n._owner !== ir.current && (v = " It was passed a child from " + Y(n._owner.type) + "."), ie(n), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, v), ie(null);
      }
    }
    function Yr(n, u) {
      {
        if (typeof n != "object")
          return;
        if (or(n))
          for (var f = 0; f < n.length; f++) {
            var v = n[f];
            ur(v) && Lr(v, u);
          }
        else if (ur(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var _ = F(n);
          if (typeof _ == "function" && _ !== n.entries)
            for (var x = _.call(n), b; !(b = x.next()).done; )
              ur(b.value) && Lr(b.value, u);
        }
      }
    }
    function xn(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var f;
        if (typeof u == "function")
          f = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === l || u.$$typeof === y))
          f = u.propTypes;
        else
          return;
        if (f) {
          var v = Y(u);
          cn(f, n.props, "prop", v, n);
        } else if (u.PropTypes !== void 0 && !sr) {
          sr = !0;
          var _ = Y(u);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $n(n) {
      {
        for (var u = Object.keys(n.props), f = 0; f < u.length; f++) {
          var v = u[f];
          if (v !== "children" && v !== "key") {
            ie(n), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), ie(null);
            break;
          }
        }
        n.ref !== null && (ie(n), P("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    function zr(n, u, f, v, _, x) {
      {
        var b = Qe(n);
        if (!b) {
          var m = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = Tn(_);
          N ? m += N : m += kr();
          var O;
          n === null ? O = "null" : or(n) ? O = "array" : n !== void 0 && n.$$typeof === r ? (O = "<" + (Y(n.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : O = typeof n, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, m);
        }
        var j = _n(n, u, f, _, x);
        if (j == null)
          return j;
        if (b) {
          var L = u.children;
          if (L !== void 0)
            if (v)
              if (or(L)) {
                for (var se = 0; se < L.length; se++)
                  Yr(L[se], n);
                Object.freeze && Object.freeze(L);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yr(L, n);
        }
        return n === o ? $n(j) : xn(j), j;
      }
    }
    function Sn(n, u, f) {
      return zr(n, u, f, !0);
    }
    function Cn(n, u, f) {
      return zr(n, u, f, !1);
    }
    var wn = Cn, On = Sn;
    xe.Fragment = o, xe.jsx = wn, xe.jsxs = On;
  }()), xe;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Vn() : e.exports = Wn();
})(Ge);
const Ct = Ge.exports.Fragment, R = Ge.exports.jsx, z = Ge.exports.jsxs, Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Fragment: Ct,
  jsx: R,
  jsxs: z
}, Symbol.toStringTag, { value: "Module" })), ku = ({
  children: e,
  icon: r,
  ...t
}) => {
  const {
    TextComponent: o,
    iconWidth: a
  } = Pn(() => t.size === "small" ? {
    TextComponent: Nn,
    iconWidth: "4rem"
  } : {
    TextComponent: kn,
    iconWidth: "5rem"
  }, [t.size]);
  return /* @__PURE__ */ z(Yn.Wrapper, {
    ...t,
    children: [r && /* @__PURE__ */ R(r, {
      width: a
    }), /* @__PURE__ */ R(o, {
      children: e
    })]
  });
};
var U = { exports: {} };
const Gn = /* @__PURE__ */ Un(Bn);
(function(e, r) {
  (function(t, o) {
    o(r, Gn, Rn);
  })(zn, function(t, o, a) {
    /*! *****************************************************************************
    	    Copyright (c) Microsoft Corporation.
    
    	    Permission to use, copy, modify, and/or distribute this software for any
    	    purpose with or without fee is hereby granted.
    
    	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    	    PERFORMANCE OF THIS SOFTWARE.
    	    ***************************************************************************** */
    var i = function() {
      return i = Object.assign || function(y) {
        for (var S, w = 1, A = arguments.length; w < A; w++) {
          S = arguments[w];
          for (var k in S)
            Object.prototype.hasOwnProperty.call(S, k) && (y[k] = S[k]);
        }
        return y;
      }, i.apply(this, arguments);
    }, s = a.styled("div", {
      display: "flex",
      boxSizing: "border-box",
      variants: {
        scrolly: {
          true: {
            overflowY: "auto"
          }
        },
        scrollx: {
          true: {
            overflowX: "auto"
          }
        },
        linebreak: {
          true: {
            flexWrap: "wrap"
          }
        },
        fillx: {
          true: {
            width: "100%"
          }
        },
        filly: {
          true: {
            height: "100%"
          }
        },
        x: {
          right: {
            justifyContent: "flex-end"
          },
          left: {
            justifyContent: "flex-start"
          },
          center: {
            justifyContent: "center"
          },
          space: {
            justifyContent: "space-between"
          }
        },
        y: {
          top: {
            alignItems: "flex-start"
          },
          bottom: {
            alignItems: "flex-end"
          },
          center: {
            alignItems: "center"
          }
        },
        keepsize: {
          true: {
            flexShrink: 0
          }
        },
        relative: {
          true: {
            position: "relative"
          }
        }
      }
    }), c = a.styled("div", {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      variants: {
        scrolly: {
          true: {
            overflowY: "auto"
          }
        },
        scrollx: {
          true: {
            overflowX: "auto"
          }
        },
        linebreak: {
          true: {
            flexWrap: "wrap"
          }
        },
        filly: {
          true: {
            height: "100%"
          }
        },
        fillx: {
          true: {
            width: "100%"
          }
        },
        x: {
          left: {
            alignItems: "flex-start"
          },
          right: {
            alignItems: "flex-end"
          },
          center: {
            alignItems: "center"
          }
        },
        y: {
          bottom: {
            justifyContent: "flex-end"
          },
          top: {
            justifyContent: "flex-start"
          },
          center: {
            justifyContent: "center"
          },
          space: {
            justifyContent: "space-between"
          }
        },
        keepsize: {
          true: {
            flexShrink: 0
          }
        },
        relative: {
          true: {
            position: "relative"
          }
        }
      }
    }), l = function(p) {
      return o.jsx(c, i({ css: i(i(i(i({}, p.padding && {
        padding: p.padding + "rem"
      }), p.gap && {
        gap: p.gap + "rem"
      }), p.paddingx && {
        paddingLeft: p.paddingx + "rem",
        paddingRight: p.paddingx + "rem"
      }), p.paddingy && {
        paddingTop: p.paddingy + "rem",
        paddingBottom: p.paddingy + "rem"
      }) }, p), void 0);
    }, h = function(p) {
      return o.jsx(s, i({ css: i(i(i(i({}, p.padding && {
        padding: p.padding + "rem"
      }), p.gap && {
        gap: p.gap + "rem"
      }), p.paddingx && {
        paddingLeft: p.paddingx + "rem",
        paddingRight: p.paddingx + "rem"
      }), p.paddingy && {
        paddingTop: p.paddingy + "rem",
        paddingBottom: p.paddingy + "rem"
      }) }, p), void 0);
    };
    t.Hexile = h, t.HexileCore = s, t.Vexile = l, t.VexileCore = c, Object.defineProperty(t, "__esModule", { value: !0 });
  });
})(U, U.exports);
const Hn = {
  Container: V(U.exports.Hexile, {
    backgroundColor: "$grey1",
    borderRadius: "3rem"
  })
}, Nu = ({
  children: e,
  icon: r
}) => /* @__PURE__ */ z(Hn.Container, {
  gap: 2,
  padding: 3,
  y: "center",
  children: [r && /* @__PURE__ */ R(r, {
    width: "6rem",
    flexShrink: 0
  }), /* @__PURE__ */ R(we, {
    children: e
  })]
});
var Gr = Array.isArray, Hr = Object.keys, Kn = Object.prototype.hasOwnProperty, qn = typeof Element < "u";
function vr(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    var t = Gr(e), o = Gr(r), a, i, s;
    if (t && o) {
      if (i = e.length, i != r.length)
        return !1;
      for (a = i; a-- !== 0; )
        if (!vr(e[a], r[a]))
          return !1;
      return !0;
    }
    if (t != o)
      return !1;
    var c = e instanceof Date, l = r instanceof Date;
    if (c != l)
      return !1;
    if (c && l)
      return e.getTime() == r.getTime();
    var h = e instanceof RegExp, p = r instanceof RegExp;
    if (h != p)
      return !1;
    if (h && p)
      return e.toString() == r.toString();
    var y = Hr(e);
    if (i = y.length, i !== Hr(r).length)
      return !1;
    for (a = i; a-- !== 0; )
      if (!Kn.call(r, y[a]))
        return !1;
    if (qn && e instanceof Element && r instanceof Element)
      return e === r;
    for (a = i; a-- !== 0; )
      if (s = y[a], !(s === "_owner" && e.$$typeof) && !vr(e[s], r[s]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var Xn = function(r, t) {
  try {
    return vr(r, t);
  } catch (o) {
    if (o.message && o.message.match(/stack|recursion/i) || o.number === -2146828260)
      return console.warn("Warning: react-fast-compare does not handle circular references.", o.name, o.message), !1;
    throw o;
  }
}, Jn = typeof global == "object" && global && global.Object === Object && global;
const wt = Jn;
var Zn = typeof self == "object" && self && self.Object === Object && self, Qn = wt || Zn || Function("return this")();
const W = Qn;
var eo = W.Symbol;
const K = eo;
var Ot = Object.prototype, ro = Ot.hasOwnProperty, to = Ot.toString, $e = K ? K.toStringTag : void 0;
function no(e) {
  var r = ro.call(e, $e), t = e[$e];
  try {
    e[$e] = void 0;
    var o = !0;
  } catch {
  }
  var a = to.call(e);
  return o && (r ? e[$e] = t : delete e[$e]), a;
}
var oo = Object.prototype, ao = oo.toString;
function io(e) {
  return ao.call(e);
}
var so = "[object Null]", uo = "[object Undefined]", Kr = K ? K.toStringTag : void 0;
function de(e) {
  return e == null ? e === void 0 ? uo : so : Kr && Kr in Object(e) ? no(e) : io(e);
}
function Rt(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var co = Rt(Object.getPrototypeOf, Object);
const jt = co;
function pe(e) {
  return e != null && typeof e == "object";
}
function fo() {
  this.__data__ = [], this.size = 0;
}
function Pt(e, r) {
  return e === r || e !== e && r !== r;
}
function He(e, r) {
  for (var t = e.length; t--; )
    if (Pt(e[t][0], r))
      return t;
  return -1;
}
var lo = Array.prototype, po = lo.splice;
function go(e) {
  var r = this.__data__, t = He(r, e);
  if (t < 0)
    return !1;
  var o = r.length - 1;
  return t == o ? r.pop() : po.call(r, t, 1), --this.size, !0;
}
function ho(e) {
  var r = this.__data__, t = He(r, e);
  return t < 0 ? void 0 : r[t][1];
}
function vo(e) {
  return He(this.__data__, e) > -1;
}
function yo(e, r) {
  var t = this.__data__, o = He(t, e);
  return o < 0 ? (++this.size, t.push([e, r])) : t[o][1] = r, this;
}
function H(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
H.prototype.clear = fo;
H.prototype.delete = go;
H.prototype.get = ho;
H.prototype.has = vo;
H.prototype.set = yo;
function mo() {
  this.__data__ = new H(), this.size = 0;
}
function bo(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
function _o(e) {
  return this.__data__.get(e);
}
function To(e) {
  return this.__data__.has(e);
}
function Fe(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Eo = "[object AsyncFunction]", xo = "[object Function]", $o = "[object GeneratorFunction]", So = "[object Proxy]";
function At(e) {
  if (!Fe(e))
    return !1;
  var r = de(e);
  return r == xo || r == $o || r == Eo || r == So;
}
var Co = W["__core-js_shared__"];
const cr = Co;
var qr = function() {
  var e = /[^.]+$/.exec(cr && cr.keys && cr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function wo(e) {
  return !!qr && qr in e;
}
var Oo = Function.prototype, Ro = Oo.toString;
function re(e) {
  if (e != null) {
    try {
      return Ro.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jo = /[\\^$.*+?()[\]{}|]/g, Po = /^\[object .+?Constructor\]$/, Ao = Function.prototype, Fo = Object.prototype, Io = Ao.toString, Mo = Fo.hasOwnProperty, Do = RegExp(
  "^" + Io.call(Mo).replace(jo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ko(e) {
  if (!Fe(e) || wo(e))
    return !1;
  var r = At(e) ? Do : Po;
  return r.test(re(e));
}
function No(e, r) {
  return e == null ? void 0 : e[r];
}
function te(e, r) {
  var t = No(e, r);
  return ko(t) ? t : void 0;
}
var Lo = te(W, "Map");
const Oe = Lo;
var Yo = te(Object, "create");
const Re = Yo;
function zo() {
  this.__data__ = Re ? Re(null) : {}, this.size = 0;
}
function Uo(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Vo = "__lodash_hash_undefined__", Wo = Object.prototype, Bo = Wo.hasOwnProperty;
function Go(e) {
  var r = this.__data__;
  if (Re) {
    var t = r[e];
    return t === Vo ? void 0 : t;
  }
  return Bo.call(r, e) ? r[e] : void 0;
}
var Ho = Object.prototype, Ko = Ho.hasOwnProperty;
function qo(e) {
  var r = this.__data__;
  return Re ? r[e] !== void 0 : Ko.call(r, e);
}
var Xo = "__lodash_hash_undefined__";
function Jo(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Re && r === void 0 ? Xo : r, this;
}
function ee(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
ee.prototype.clear = zo;
ee.prototype.delete = Uo;
ee.prototype.get = Go;
ee.prototype.has = qo;
ee.prototype.set = Jo;
function Zo() {
  this.size = 0, this.__data__ = {
    hash: new ee(),
    map: new (Oe || H)(),
    string: new ee()
  };
}
function Qo(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function Ke(e, r) {
  var t = e.__data__;
  return Qo(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
function ea(e) {
  var r = Ke(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function ra(e) {
  return Ke(this, e).get(e);
}
function ta(e) {
  return Ke(this, e).has(e);
}
function na(e, r) {
  var t = Ke(this, e), o = t.size;
  return t.set(e, r), this.size += t.size == o ? 0 : 1, this;
}
function q(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
q.prototype.clear = Zo;
q.prototype.delete = ea;
q.prototype.get = ra;
q.prototype.has = ta;
q.prototype.set = na;
var oa = 200;
function aa(e, r) {
  var t = this.__data__;
  if (t instanceof H) {
    var o = t.__data__;
    if (!Oe || o.length < oa - 1)
      return o.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new q(o);
  }
  return t.set(e, r), this.size = t.size, this;
}
function ge(e) {
  var r = this.__data__ = new H(e);
  this.size = r.size;
}
ge.prototype.clear = mo;
ge.prototype.delete = bo;
ge.prototype.get = _o;
ge.prototype.has = To;
ge.prototype.set = aa;
function ia(e, r) {
  for (var t = -1, o = e == null ? 0 : e.length; ++t < o && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var sa = function() {
  try {
    var e = te(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Xr = sa;
function Ft(e, r, t) {
  r == "__proto__" && Xr ? Xr(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var ua = Object.prototype, ca = ua.hasOwnProperty;
function It(e, r, t) {
  var o = e[r];
  (!(ca.call(e, r) && Pt(o, t)) || t === void 0 && !(r in e)) && Ft(e, r, t);
}
function qe(e, r, t, o) {
  var a = !t;
  t || (t = {});
  for (var i = -1, s = r.length; ++i < s; ) {
    var c = r[i], l = o ? o(t[c], e[c], c, t, e) : void 0;
    l === void 0 && (l = e[c]), a ? Ft(t, c, l) : It(t, c, l);
  }
  return t;
}
function fa(e, r) {
  for (var t = -1, o = Array(e); ++t < e; )
    o[t] = r(t);
  return o;
}
var la = "[object Arguments]";
function Jr(e) {
  return pe(e) && de(e) == la;
}
var Mt = Object.prototype, da = Mt.hasOwnProperty, pa = Mt.propertyIsEnumerable, ga = Jr(function() {
  return arguments;
}()) ? Jr : function(e) {
  return pe(e) && da.call(e, "callee") && !pa.call(e, "callee");
};
const ha = ga;
var va = Array.isArray;
const Ie = va;
function ya() {
  return !1;
}
var Dt = typeof exports == "object" && exports && !exports.nodeType && exports, Zr = Dt && typeof module == "object" && module && !module.nodeType && module, ma = Zr && Zr.exports === Dt, Qr = ma ? W.Buffer : void 0, ba = Qr ? Qr.isBuffer : void 0, _a = ba || ya;
const kt = _a;
var Ta = 9007199254740991, Ea = /^(?:0|[1-9]\d*)$/;
function xa(e, r) {
  var t = typeof e;
  return r = r == null ? Ta : r, !!r && (t == "number" || t != "symbol" && Ea.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var $a = 9007199254740991;
function Nt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $a;
}
var Sa = "[object Arguments]", Ca = "[object Array]", wa = "[object Boolean]", Oa = "[object Date]", Ra = "[object Error]", ja = "[object Function]", Pa = "[object Map]", Aa = "[object Number]", Fa = "[object Object]", Ia = "[object RegExp]", Ma = "[object Set]", Da = "[object String]", ka = "[object WeakMap]", Na = "[object ArrayBuffer]", La = "[object DataView]", Ya = "[object Float32Array]", za = "[object Float64Array]", Ua = "[object Int8Array]", Va = "[object Int16Array]", Wa = "[object Int32Array]", Ba = "[object Uint8Array]", Ga = "[object Uint8ClampedArray]", Ha = "[object Uint16Array]", Ka = "[object Uint32Array]", C = {};
C[Ya] = C[za] = C[Ua] = C[Va] = C[Wa] = C[Ba] = C[Ga] = C[Ha] = C[Ka] = !0;
C[Sa] = C[Ca] = C[Na] = C[wa] = C[La] = C[Oa] = C[Ra] = C[ja] = C[Pa] = C[Aa] = C[Fa] = C[Ia] = C[Ma] = C[Da] = C[ka] = !1;
function qa(e) {
  return pe(e) && Nt(e.length) && !!C[de(e)];
}
function Tr(e) {
  return function(r) {
    return e(r);
  };
}
var Lt = typeof exports == "object" && exports && !exports.nodeType && exports, Se = Lt && typeof module == "object" && module && !module.nodeType && module, Xa = Se && Se.exports === Lt, fr = Xa && wt.process, Ja = function() {
  try {
    var e = Se && Se.require && Se.require("util").types;
    return e || fr && fr.binding && fr.binding("util");
  } catch {
  }
}();
const fe = Ja;
var et = fe && fe.isTypedArray, Za = et ? Tr(et) : qa;
const Qa = Za;
var ei = Object.prototype, ri = ei.hasOwnProperty;
function Yt(e, r) {
  var t = Ie(e), o = !t && ha(e), a = !t && !o && kt(e), i = !t && !o && !a && Qa(e), s = t || o || a || i, c = s ? fa(e.length, String) : [], l = c.length;
  for (var h in e)
    (r || ri.call(e, h)) && !(s && (h == "length" || a && (h == "offset" || h == "parent") || i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || xa(h, l))) && c.push(h);
  return c;
}
var ti = Object.prototype;
function Er(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || ti;
  return e === t;
}
var ni = Rt(Object.keys, Object);
const oi = ni;
var ai = Object.prototype, ii = ai.hasOwnProperty;
function si(e) {
  if (!Er(e))
    return oi(e);
  var r = [];
  for (var t in Object(e))
    ii.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
function zt(e) {
  return e != null && Nt(e.length) && !At(e);
}
function xr(e) {
  return zt(e) ? Yt(e) : si(e);
}
function ui(e, r) {
  return e && qe(r, xr(r), e);
}
function ci(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var fi = Object.prototype, li = fi.hasOwnProperty;
function di(e) {
  if (!Fe(e))
    return ci(e);
  var r = Er(e), t = [];
  for (var o in e)
    o == "constructor" && (r || !li.call(e, o)) || t.push(o);
  return t;
}
function $r(e) {
  return zt(e) ? Yt(e, !0) : di(e);
}
function pi(e, r) {
  return e && qe(r, $r(r), e);
}
var Ut = typeof exports == "object" && exports && !exports.nodeType && exports, rt = Ut && typeof module == "object" && module && !module.nodeType && module, gi = rt && rt.exports === Ut, tt = gi ? W.Buffer : void 0, nt = tt ? tt.allocUnsafe : void 0;
function hi(e, r) {
  if (r)
    return e.slice();
  var t = e.length, o = nt ? nt(t) : new e.constructor(t);
  return e.copy(o), o;
}
function Vt(e, r) {
  var t = -1, o = e.length;
  for (r || (r = Array(o)); ++t < o; )
    r[t] = e[t];
  return r;
}
function vi(e, r) {
  for (var t = -1, o = e == null ? 0 : e.length, a = 0, i = []; ++t < o; ) {
    var s = e[t];
    r(s, t, e) && (i[a++] = s);
  }
  return i;
}
function Wt() {
  return [];
}
var yi = Object.prototype, mi = yi.propertyIsEnumerable, ot = Object.getOwnPropertySymbols, bi = ot ? function(e) {
  return e == null ? [] : (e = Object(e), vi(ot(e), function(r) {
    return mi.call(e, r);
  }));
} : Wt;
const Sr = bi;
function _i(e, r) {
  return qe(e, Sr(e), r);
}
function Bt(e, r) {
  for (var t = -1, o = r.length, a = e.length; ++t < o; )
    e[a + t] = r[t];
  return e;
}
var Ti = Object.getOwnPropertySymbols, Ei = Ti ? function(e) {
  for (var r = []; e; )
    Bt(r, Sr(e)), e = jt(e);
  return r;
} : Wt;
const Gt = Ei;
function xi(e, r) {
  return qe(e, Gt(e), r);
}
function Ht(e, r, t) {
  var o = r(e);
  return Ie(e) ? o : Bt(o, t(e));
}
function $i(e) {
  return Ht(e, xr, Sr);
}
function Si(e) {
  return Ht(e, $r, Gt);
}
var Ci = te(W, "DataView");
const yr = Ci;
var wi = te(W, "Promise");
const mr = wi;
var Oi = te(W, "Set");
const br = Oi;
var Ri = te(W, "WeakMap");
const _r = Ri;
var at = "[object Map]", ji = "[object Object]", it = "[object Promise]", st = "[object Set]", ut = "[object WeakMap]", ct = "[object DataView]", Pi = re(yr), Ai = re(Oe), Fi = re(mr), Ii = re(br), Mi = re(_r), Q = de;
(yr && Q(new yr(new ArrayBuffer(1))) != ct || Oe && Q(new Oe()) != at || mr && Q(mr.resolve()) != it || br && Q(new br()) != st || _r && Q(new _r()) != ut) && (Q = function(e) {
  var r = de(e), t = r == ji ? e.constructor : void 0, o = t ? re(t) : "";
  if (o)
    switch (o) {
      case Pi:
        return ct;
      case Ai:
        return at;
      case Fi:
        return it;
      case Ii:
        return st;
      case Mi:
        return ut;
    }
  return r;
});
const Cr = Q;
var Di = Object.prototype, ki = Di.hasOwnProperty;
function Ni(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && ki.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Li = W.Uint8Array;
const ft = Li;
function wr(e) {
  var r = new e.constructor(e.byteLength);
  return new ft(r).set(new ft(e)), r;
}
function Yi(e, r) {
  var t = r ? wr(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var zi = /\w*$/;
function Ui(e) {
  var r = new e.constructor(e.source, zi.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var lt = K ? K.prototype : void 0, dt = lt ? lt.valueOf : void 0;
function Vi(e) {
  return dt ? Object(dt.call(e)) : {};
}
function Wi(e, r) {
  var t = r ? wr(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Bi = "[object Boolean]", Gi = "[object Date]", Hi = "[object Map]", Ki = "[object Number]", qi = "[object RegExp]", Xi = "[object Set]", Ji = "[object String]", Zi = "[object Symbol]", Qi = "[object ArrayBuffer]", es = "[object DataView]", rs = "[object Float32Array]", ts = "[object Float64Array]", ns = "[object Int8Array]", os = "[object Int16Array]", as = "[object Int32Array]", is = "[object Uint8Array]", ss = "[object Uint8ClampedArray]", us = "[object Uint16Array]", cs = "[object Uint32Array]";
function fs(e, r, t) {
  var o = e.constructor;
  switch (r) {
    case Qi:
      return wr(e);
    case Bi:
    case Gi:
      return new o(+e);
    case es:
      return Yi(e, t);
    case rs:
    case ts:
    case ns:
    case os:
    case as:
    case is:
    case ss:
    case us:
    case cs:
      return Wi(e, t);
    case Hi:
      return new o();
    case Ki:
    case Ji:
      return new o(e);
    case qi:
      return Ui(e);
    case Xi:
      return new o();
    case Zi:
      return Vi(e);
  }
}
var pt = Object.create, ls = function() {
  function e() {
  }
  return function(r) {
    if (!Fe(r))
      return {};
    if (pt)
      return pt(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const ds = ls;
function ps(e) {
  return typeof e.constructor == "function" && !Er(e) ? ds(jt(e)) : {};
}
var gs = "[object Map]";
function hs(e) {
  return pe(e) && Cr(e) == gs;
}
var gt = fe && fe.isMap, vs = gt ? Tr(gt) : hs;
const ys = vs;
var ms = "[object Set]";
function bs(e) {
  return pe(e) && Cr(e) == ms;
}
var ht = fe && fe.isSet, _s = ht ? Tr(ht) : bs;
const Ts = _s;
var Es = 1, xs = 2, $s = 4, Kt = "[object Arguments]", Ss = "[object Array]", Cs = "[object Boolean]", ws = "[object Date]", Os = "[object Error]", qt = "[object Function]", Rs = "[object GeneratorFunction]", js = "[object Map]", Ps = "[object Number]", Xt = "[object Object]", As = "[object RegExp]", Fs = "[object Set]", Is = "[object String]", Ms = "[object Symbol]", Ds = "[object WeakMap]", ks = "[object ArrayBuffer]", Ns = "[object DataView]", Ls = "[object Float32Array]", Ys = "[object Float64Array]", zs = "[object Int8Array]", Us = "[object Int16Array]", Vs = "[object Int32Array]", Ws = "[object Uint8Array]", Bs = "[object Uint8ClampedArray]", Gs = "[object Uint16Array]", Hs = "[object Uint32Array]", $ = {};
$[Kt] = $[Ss] = $[ks] = $[Ns] = $[Cs] = $[ws] = $[Ls] = $[Ys] = $[zs] = $[Us] = $[Vs] = $[js] = $[Ps] = $[Xt] = $[As] = $[Fs] = $[Is] = $[Ms] = $[Ws] = $[Bs] = $[Gs] = $[Hs] = !0;
$[Os] = $[qt] = $[Ds] = !1;
function Ce(e, r, t, o, a, i) {
  var s, c = r & Es, l = r & xs, h = r & $s;
  if (t && (s = a ? t(e, o, a, i) : t(e)), s !== void 0)
    return s;
  if (!Fe(e))
    return e;
  var p = Ie(e);
  if (p) {
    if (s = Ni(e), !c)
      return Vt(e, s);
  } else {
    var y = Cr(e), S = y == qt || y == Rs;
    if (kt(e))
      return hi(e, c);
    if (y == Xt || y == Kt || S && !a) {
      if (s = l || S ? {} : ps(e), !c)
        return l ? xi(e, pi(s, e)) : _i(e, ui(s, e));
    } else {
      if (!$[y])
        return a ? e : {};
      s = fs(e, y, c);
    }
  }
  i || (i = new ge());
  var w = i.get(e);
  if (w)
    return w;
  i.set(e, s), Ts(e) ? e.forEach(function(F) {
    s.add(Ce(F, r, t, F, e, i));
  }) : ys(e) && e.forEach(function(F, I) {
    s.set(I, Ce(F, r, t, I, e, i));
  });
  var A = h ? l ? Si : $i : l ? $r : xr, k = p ? void 0 : A(e);
  return ia(k || e, function(F, I) {
    k && (I = F, F = e[I]), It(s, I, Ce(F, r, t, I, e, i));
  }), s;
}
var Ks = 4;
function vt(e) {
  return Ce(e, Ks);
}
function Jt(e, r) {
  for (var t = -1, o = e == null ? 0 : e.length, a = Array(o); ++t < o; )
    a[t] = r(e[t], t, e);
  return a;
}
var qs = "[object Symbol]";
function Or(e) {
  return typeof e == "symbol" || pe(e) && de(e) == qs;
}
var Xs = "Expected a function";
function Rr(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Xs);
  var t = function() {
    var o = arguments, a = r ? r.apply(this, o) : o[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var s = e.apply(this, o);
    return t.cache = i.set(a, s) || i, s;
  };
  return t.cache = new (Rr.Cache || q)(), t;
}
Rr.Cache = q;
var Js = 500;
function Zs(e) {
  var r = Rr(e, function(o) {
    return t.size === Js && t.clear(), o;
  }), t = r.cache;
  return r;
}
var Qs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, eu = /\\(\\)?/g, ru = Zs(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Qs, function(t, o, a, i) {
    r.push(a ? i.replace(eu, "$1") : o || t);
  }), r;
});
const tu = ru;
var nu = 1 / 0;
function ou(e) {
  if (typeof e == "string" || Or(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -nu ? "-0" : r;
}
var au = 1 / 0, yt = K ? K.prototype : void 0, mt = yt ? yt.toString : void 0;
function Zt(e) {
  if (typeof e == "string")
    return e;
  if (Ie(e))
    return Jt(e, Zt) + "";
  if (Or(e))
    return mt ? mt.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -au ? "-0" : r;
}
function iu(e) {
  return e == null ? "" : Zt(e);
}
function Qt(e) {
  return Ie(e) ? Jt(e, ou) : Or(e) ? [e] : Vt(tu(iu(e)));
}
var su = process.env.NODE_ENV === "production";
function ce(e, r) {
  if (!su) {
    if (e)
      return;
    var t = "Warning: " + r;
    typeof console < "u" && console.warn(t);
    try {
      throw Error(t);
    } catch {
    }
  }
}
var en = { exports: {} }, T = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function uu() {
  if (bt)
    return T;
  bt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, F = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function D(d) {
    if (typeof d == "object" && d !== null) {
      var X = d.$$typeof;
      switch (X) {
        case r:
          switch (d = d.type, d) {
            case l:
            case h:
            case o:
            case i:
            case a:
            case y:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case p:
                case A:
                case w:
                case s:
                  return d;
                default:
                  return X;
              }
          }
        case t:
          return X;
      }
    }
  }
  function M(d) {
    return D(d) === h;
  }
  return T.AsyncMode = l, T.ConcurrentMode = h, T.ContextConsumer = c, T.ContextProvider = s, T.Element = r, T.ForwardRef = p, T.Fragment = o, T.Lazy = A, T.Memo = w, T.Portal = t, T.Profiler = i, T.StrictMode = a, T.Suspense = y, T.isAsyncMode = function(d) {
    return M(d) || D(d) === l;
  }, T.isConcurrentMode = M, T.isContextConsumer = function(d) {
    return D(d) === c;
  }, T.isContextProvider = function(d) {
    return D(d) === s;
  }, T.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, T.isForwardRef = function(d) {
    return D(d) === p;
  }, T.isFragment = function(d) {
    return D(d) === o;
  }, T.isLazy = function(d) {
    return D(d) === A;
  }, T.isMemo = function(d) {
    return D(d) === w;
  }, T.isPortal = function(d) {
    return D(d) === t;
  }, T.isProfiler = function(d) {
    return D(d) === i;
  }, T.isStrictMode = function(d) {
    return D(d) === a;
  }, T.isSuspense = function(d) {
    return D(d) === y;
  }, T.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === o || d === h || d === i || d === a || d === y || d === S || typeof d == "object" && d !== null && (d.$$typeof === A || d.$$typeof === w || d.$$typeof === s || d.$$typeof === c || d.$$typeof === p || d.$$typeof === F || d.$$typeof === I || d.$$typeof === P || d.$$typeof === k);
  }, T.typeOf = D, T;
}
var E = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function cu() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, F = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function D(g) {
      return typeof g == "string" || typeof g == "function" || g === o || g === h || g === i || g === a || g === y || g === S || typeof g == "object" && g !== null && (g.$$typeof === A || g.$$typeof === w || g.$$typeof === s || g.$$typeof === c || g.$$typeof === p || g.$$typeof === F || g.$$typeof === I || g.$$typeof === P || g.$$typeof === k);
    }
    function M(g) {
      if (typeof g == "object" && g !== null) {
        var _e = g.$$typeof;
        switch (_e) {
          case r:
            var ae = g.type;
            switch (ae) {
              case l:
              case h:
              case o:
              case i:
              case a:
              case y:
                return ae;
              default:
                var Z = ae && ae.$$typeof;
                switch (Z) {
                  case c:
                  case p:
                  case A:
                  case w:
                  case s:
                    return Z;
                  default:
                    return _e;
                }
            }
          case t:
            return _e;
        }
      }
    }
    var d = l, X = h, Je = c, Ze = s, Me = r, Qe = p, er = o, De = A, Y = w, B = t, J = i, ke = a, Ne = y, he = !1;
    function Le(g) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ve(g) || M(g) === l;
    }
    function ve(g) {
      return M(g) === h;
    }
    function Ye(g) {
      return M(g) === c;
    }
    function ze(g) {
      return M(g) === s;
    }
    function Ue(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function rr(g) {
      return M(g) === p;
    }
    function tr(g) {
      return M(g) === o;
    }
    function ye(g) {
      return M(g) === A;
    }
    function me(g) {
      return M(g) === w;
    }
    function ne(g) {
      return M(g) === t;
    }
    function be(g) {
      return M(g) === i;
    }
    function oe(g) {
      return M(g) === a;
    }
    function nr(g) {
      return M(g) === y;
    }
    E.AsyncMode = d, E.ConcurrentMode = X, E.ContextConsumer = Je, E.ContextProvider = Ze, E.Element = Me, E.ForwardRef = Qe, E.Fragment = er, E.Lazy = De, E.Memo = Y, E.Portal = B, E.Profiler = J, E.StrictMode = ke, E.Suspense = Ne, E.isAsyncMode = Le, E.isConcurrentMode = ve, E.isContextConsumer = Ye, E.isContextProvider = ze, E.isElement = Ue, E.isForwardRef = rr, E.isFragment = tr, E.isLazy = ye, E.isMemo = me, E.isPortal = ne, E.isProfiler = be, E.isStrictMode = oe, E.isSuspense = nr, E.isValidElementType = D, E.typeOf = M;
  }()), E;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = uu() : e.exports = cu();
})(en);
var rn = en.exports, fu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, lu = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, tn = {};
tn[rn.ForwardRef] = fu;
tn[rn.Memo] = lu;
var du = 1, pu = 4;
function gu(e) {
  return Ce(e, du | pu);
}
function je() {
  return je = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, je.apply(this, arguments);
}
function hu(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
}
function nn(e, r) {
  if (e == null)
    return {};
  var t = {}, o = Object.keys(e), a, i;
  for (i = 0; i < o.length; i++)
    a = o[i], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function Tt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
var Et = function(r) {
  return Array.isArray(r) && r.length === 0;
}, vu = function(r) {
  return typeof r == "function";
}, on = function(r) {
  return r !== null && typeof r == "object";
}, yu = function(r) {
  return String(Math.floor(Number(r))) === r;
}, mu = function(r) {
  return St.count(r) === 0;
};
function ue(e, r, t, o) {
  o === void 0 && (o = 0);
  for (var a = Qt(r); e && o < a.length; )
    e = e[a[o++]];
  return e === void 0 ? t : e;
}
function lr(e, r, t) {
  for (var o = vt(e), a = o, i = 0, s = Qt(r); i < s.length - 1; i++) {
    var c = s[i], l = ue(e, s.slice(0, i + 1));
    if (l && (on(l) || Array.isArray(l)))
      a = a[c] = vt(l);
    else {
      var h = s[i + 1];
      a = a[c] = yu(h) && Number(h) >= 0 ? [] : {};
    }
  }
  return (i === 0 ? e : a)[s[i]] === t ? e : (t === void 0 ? delete a[s[i]] : a[s[i]] = t, i === 0 && t === void 0 && delete o[s[i]], o);
}
var Xe = /* @__PURE__ */ An(void 0);
Xe.displayName = "FormikContext";
Xe.Provider;
Xe.Consumer;
function an() {
  var e = In(Xe);
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : ce(!1)), e;
}
function sn(e) {
  var r = an(), t = r.getFieldProps, o = r.getFieldMeta, a = r.getFieldHelpers, i = r.registerField, s = r.unregisterField, c = on(e), l = c ? e : {
    name: e
  }, h = l.name, p = l.validate;
  return gr(function() {
    return h && i(h, {
      validate: p
    }), function() {
      h && s(h);
    };
  }, [i, s, h, p]), process.env.NODE_ENV !== "production" && (r || (process.env.NODE_ENV !== "production" ? ce(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : ce(!1))), h || (process.env.NODE_ENV !== "production" ? ce(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : ce(!1)), [t(l), o(h), a(h)];
}
var bu = /* @__PURE__ */ Fn(function(e, r) {
  var t = e.action, o = nn(e, ["action"]), a = t != null ? t : "#", i = an(), s = i.handleReset, c = i.handleSubmit;
  return $t("form", Object.assign({
    onSubmit: c,
    ref: r,
    onReset: s,
    action: a
  }, o));
});
bu.displayName = "Form";
var _u = function(r, t, o) {
  var a = le(r), i = a[t];
  return a.splice(t, 1), a.splice(o, 0, i), a;
}, Tu = function(r, t, o) {
  var a = le(r), i = a[t];
  return a[t] = a[o], a[o] = i, a;
}, dr = function(r, t, o) {
  var a = le(r);
  return a.splice(t, 0, o), a;
}, Eu = function(r, t, o) {
  var a = le(r);
  return a[t] = o, a;
}, le = function(r) {
  if (r) {
    if (Array.isArray(r))
      return [].concat(r);
    var t = Object.keys(r).map(function(o) {
      return parseInt(o);
    }).reduce(function(o, a) {
      return a > o ? a : o;
    }, 0);
    return Array.from(je({}, r, {
      length: t + 1
    }));
  } else
    return [];
}, xu = /* @__PURE__ */ function(e) {
  hu(r, e);
  function r(o) {
    var a;
    return a = e.call(this, o) || this, a.updateArrayField = function(i, s, c) {
      var l = a.props, h = l.name, p = l.formik.setFormikState;
      p(function(y) {
        var S = typeof c == "function" ? c : i, w = typeof s == "function" ? s : i, A = lr(y.values, h, i(ue(y.values, h))), k = c ? S(ue(y.errors, h)) : void 0, F = s ? w(ue(y.touched, h)) : void 0;
        return Et(k) && (k = void 0), Et(F) && (F = void 0), je({}, y, {
          values: A,
          errors: c ? lr(y.errors, h, k) : y.errors,
          touched: s ? lr(y.touched, h, F) : y.touched
        });
      });
    }, a.push = function(i) {
      return a.updateArrayField(function(s) {
        return [].concat(le(s), [gu(i)]);
      }, !1, !1);
    }, a.handlePush = function(i) {
      return function() {
        return a.push(i);
      };
    }, a.swap = function(i, s) {
      return a.updateArrayField(function(c) {
        return Tu(c, i, s);
      }, !0, !0);
    }, a.handleSwap = function(i, s) {
      return function() {
        return a.swap(i, s);
      };
    }, a.move = function(i, s) {
      return a.updateArrayField(function(c) {
        return _u(c, i, s);
      }, !0, !0);
    }, a.handleMove = function(i, s) {
      return function() {
        return a.move(i, s);
      };
    }, a.insert = function(i, s) {
      return a.updateArrayField(function(c) {
        return dr(c, i, s);
      }, function(c) {
        return dr(c, i, null);
      }, function(c) {
        return dr(c, i, null);
      });
    }, a.handleInsert = function(i, s) {
      return function() {
        return a.insert(i, s);
      };
    }, a.replace = function(i, s) {
      return a.updateArrayField(function(c) {
        return Eu(c, i, s);
      }, !1, !1);
    }, a.handleReplace = function(i, s) {
      return function() {
        return a.replace(i, s);
      };
    }, a.unshift = function(i) {
      var s = -1;
      return a.updateArrayField(function(c) {
        var l = c ? [i].concat(c) : [i];
        return s < 0 && (s = l.length), l;
      }, function(c) {
        var l = c ? [null].concat(c) : [null];
        return s < 0 && (s = l.length), l;
      }, function(c) {
        var l = c ? [null].concat(c) : [null];
        return s < 0 && (s = l.length), l;
      }), s;
    }, a.handleUnshift = function(i) {
      return function() {
        return a.unshift(i);
      };
    }, a.handleRemove = function(i) {
      return function() {
        return a.remove(i);
      };
    }, a.handlePop = function() {
      return function() {
        return a.pop();
      };
    }, a.remove = a.remove.bind(Tt(a)), a.pop = a.pop.bind(Tt(a)), a;
  }
  var t = r.prototype;
  return t.componentDidUpdate = function(a) {
    this.props.validateOnChange && this.props.formik.validateOnChange && !Xn(ue(a.formik.values, a.name), ue(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
  }, t.remove = function(a) {
    var i;
    return this.updateArrayField(
      function(s) {
        var c = s ? le(s) : [];
        return i || (i = c[a]), vu(c.splice) && c.splice(a, 1), c;
      },
      !0,
      !0
    ), i;
  }, t.pop = function() {
    var a;
    return this.updateArrayField(
      function(i) {
        var s = i;
        return a || (a = s && s.pop && s.pop()), s;
      },
      !0,
      !0
    ), a;
  }, t.render = function() {
    var a = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    }, i = this.props, s = i.component, c = i.render, l = i.children, h = i.name, p = i.formik, y = nn(p, ["validate", "validationSchema"]), S = je({}, a, {
      form: y,
      name: h
    });
    return s ? $t(s, S) : c ? c(S) : l ? typeof l == "function" ? l(S) : mu(l) ? null : St.only(l) : null;
  }, r;
}(Mn);
xu.defaultProps = {
  validateOnChange: !0
};
const un = {
  Box: V("input", {
    margin: "0px",
    width: "6rem",
    height: "6rem",
    appearance: "none",
    boxShadow: "inset 0px 0px 0px 1rem $grey3",
    borderRadius: "2rem",
    "&:checked": {
      boxShadow: "inset 0px 0px 0px 1rem $purple",
      display: "grid",
      placeItems: "center",
      "&::after": {
        width: "2rem",
        height: "2rem",
        backgroundColor: "$purple",
        display: "block",
        content: "",
        borderRadius: "0.5rem"
      }
    }
  })
};
un.Box.defaultProps = {
  type: "checkbox"
};
const Lu = ({
  children: e,
  ...r
}) => /* @__PURE__ */ R("label", {
  children: /* @__PURE__ */ z(U.exports.Hexile, {
    gap: 3,
    y: "center",
    children: [/* @__PURE__ */ R(un.Box, {
      ...r
    }), e]
  })
}), Yu = (e) => /* @__PURE__ */ z(U.exports.Vexile, {
  gap: 3,
  children: [/* @__PURE__ */ z(U.exports.Vexile, {
    gap: 1,
    children: [/* @__PURE__ */ z(Ln, {
      children: [e.name, " ", e.required && "*"]
    }), e.info && /* @__PURE__ */ R(we, {
      grey5: !0,
      children: e.info
    })]
  }), e.children]
}), pr = {
  Wrapper: V(U.exports.Hexile, {
    backgroundColor: "$grey1",
    borderRadius: "3rem",
    animated: !0,
    "&:focus-within": {
      backgroundColor: "white",
      lightBorder: !0
    },
    "&:focus-within div": {
      color: "$purple"
    }
  }),
  IconWrapper: V("div", {
    padding: "3rem",
    paddingRight: "0rem",
    display: "grid",
    color: "$grey5"
  }),
  LogicalInput: V("input", {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    padding: "3rem",
    paddingLeft: "2rem",
    flex: 1
  })
}, $u = ({
  icon: e,
  ...r
}) => /* @__PURE__ */ R("label", {
  children: /* @__PURE__ */ z(U.exports.Vexile, {
    gap: 2,
    children: [/* @__PURE__ */ z(pr.Wrapper, {
      children: [/* @__PURE__ */ R(pr.IconWrapper, {
        children: /* @__PURE__ */ R(e, {
          flexShrink: 0,
          width: "6rem"
        })
      }), /* @__PURE__ */ R(pr.LogicalInput, {
        ...r
      })]
    }), r.errorMessage && /* @__PURE__ */ R(we, {
      blue: !0,
      children: r.errorMessage
    })]
  })
}), zu = (e) => {
  const [r, t] = sn(e.name);
  return /* @__PURE__ */ R($u, {
    ...e,
    ...r,
    errorMessage: t.error
  });
}, Be = {
  Background: V(U.exports.Hexile, {
    backgroundColor: "$grey1",
    borderRadius: "3rem"
  }),
  Item: V(U.exports.Hexile, {
    color: "$grey5",
    zIndex: 1,
    variants: {
      active: {
        true: {
          color: "black"
        }
      }
    }
  }),
  IndicatorWrapper: V("div", {
    position: "absolute",
    height: "100%",
    top: "0px",
    left: "0px",
    padding: "1rem",
    boxSizing: "border-box",
    animated: !0
  }),
  Indicator: V("div", {
    backgroundColor: "white",
    height: "100%",
    borderRadius: "2rem",
    elevated: !0,
    lightBorder: !0
  })
}, Su = (e) => /* @__PURE__ */ z(U.exports.Vexile, {
  gap: 2,
  style: {
    flex: 1
  },
  children: [/* @__PURE__ */ z(Be.Background, {
    padding: 1,
    gap: 3,
    relative: !0,
    children: [e.items.map((r) => /* @__PURE__ */ R(Be.Item, {
      padding: 3,
      fillx: !0,
      x: "center",
      active: e.selectedKey === r.key,
      onClick: e.onClick && (() => {
        var t;
        return (t = e.onClick) == null ? void 0 : t.call(e, r.key);
      }),
      children: /* @__PURE__ */ R(we, {
        children: r.name || r.key
      })
    }, r.key)), /* @__PURE__ */ R(Be.IndicatorWrapper, {
      style: {
        width: `calc(100% / ${e.items.length})`,
        left: `calc(100% / ${e.items.length} * ${e.items.findIndex((r) => r.key == e.selectedKey)})`
      },
      children: /* @__PURE__ */ R(Be.Indicator, {})
    })]
  }), e.errorMessage && /* @__PURE__ */ R(we, {
    blue: !0,
    children: e.errorMessage
  })]
}), Cu = (e) => {
  var s;
  const [r, t] = Vr(e.selectedKey || ((s = e.items[0]) == null ? void 0 : s.key)), [o, a] = Vr(), i = Dn((c) => {
    t(c);
  }, []);
  return [r, t, a, e.items.length === 0 ? /* @__PURE__ */ R(Ct, {}) : /* @__PURE__ */ R(Su, {
    ...e,
    selectedKey: r,
    errorMessage: o,
    onClick: i
  })];
}, Uu = (e) => {
  const [r, t, o] = sn(e.name), [a, i, s, c] = Cu({
    ...e,
    selectedKey: t.initialValue
  });
  return gr(() => {
    o.setValue(a);
  }, [a]), gr(() => {
    s(t.error);
  }, [t.error]), c;
};
export {
  ku as Button,
  Nu as Callout,
  Lu as Checkbox,
  zu as FInput,
  Uu as FSwitch,
  Yu as FormField,
  Du as Header1,
  kn as Header2,
  Nn as Header3,
  $u as Input,
  Ln as Text1,
  we as Text2,
  V as styled,
  Cu as useSwitch
};
