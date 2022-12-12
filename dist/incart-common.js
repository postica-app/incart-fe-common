import On, { createStitches as Rn } from "@stitches/react";
import Et, { useMemo as jn, createContext as Pn, forwardRef as An, createElement as xt, useContext as Fn, useEffect as pr, Children as $t, Component as In, useState as Ur, useCallback as Mn } from "react";
const gr = {
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
  styled: L,
  css: Ou,
  globalCss: Ru,
  keyframes: ju,
  getCssText: Pu,
  theme: Au,
  createTheme: Fu,
  config: Iu
} = Rn({
  theme: {
    colors: gr,
    shadows: gr
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
  },
  media: {
    phone: "(max-width: 480px)",
    tablet: "(max-width: 800px)"
  }
}), Pe = {
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
    ...Object.fromEntries(Object.entries(gr).map(([e, r]) => [e, {
      true: {
        color: r
      }
    }]))
  }
}, Mu = L("h1", {
  fontSize: "6rem",
  ...Pe
}), Dn = L("h2", {
  fontSize: "5rem",
  ...Pe
}), kn = L("h3", {
  fontSize: "4rem",
  ...Pe
}), Nn = L("p", {
  fontSize: "5rem",
  ...Pe
}), we = L("p", {
  fontSize: "4rem",
  ...Pe
}), Ln = {
  Wrapper: L("button", {
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
var Yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zn(e) {
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
var Be = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Un() {
  if (Vr)
    return Ee;
  Vr = 1;
  var e = Et, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var Wr;
function Vn() {
  return Wr || (Wr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Et, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), A = Symbol.iterator, k = "@@iterator";
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
    var M = !1, d = !1, X = !1, Xe = !1, Je = !1, Ie;
    Ie = Symbol.for("react.module.reference");
    function Ze(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || Je || n === a || n === h || n === p || Xe || n === w || M || d || X || typeof n == "object" && n !== null && (n.$$typeof === S || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || n.$$typeof === Ie || n.getModuleId !== void 0));
    }
    function Qe(n, u, f) {
      var v = n.displayName;
      if (v)
        return v;
      var _ = u.displayName || u.name || "";
      return _ !== "" ? f + "(" + _ + ")" : f;
    }
    function Me(n) {
      return n.displayName || "Context";
    }
    function z(n) {
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
            return Me(u) + ".Consumer";
          case s:
            var f = n;
            return Me(f._context) + ".Provider";
          case l:
            return Qe(n, n.render, "ForwardRef");
          case y:
            var v = n.displayName || null;
            return v !== null ? v : z(n.type) || "Memo";
          case S: {
            var _ = n, x = _._payload, b = _._init;
            try {
              return z(b(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, J = 0, De, ke, he, Ne, ve, Le, Ye;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function er() {
      {
        if (J === 0) {
          De = console.log, ke = console.info, he = console.warn, Ne = console.error, ve = console.group, Le = console.groupCollapsed, Ye = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ze,
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
    function rr() {
      {
        if (J--, J === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, n, {
              value: De
            }),
            info: B({}, n, {
              value: ke
            }),
            warn: B({}, n, {
              value: he
            }),
            error: B({}, n, {
              value: Ne
            }),
            group: B({}, n, {
              value: ve
            }),
            groupCollapsed: B({}, n, {
              value: Le
            }),
            groupEnd: B({}, n, {
              value: Ye
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
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new tr();
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
      x = ye.current, ye.current = null, er();
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
                    var Y = `
` + m[O].replace(" at new ", " at ");
                    return n.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", n.displayName)), typeof n == "function" && oe.set(n, Y), Y;
                  }
                while (O >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        be = !1, ye.current = x, rr(), Error.prepareStackTrace = _;
      }
      var se = n ? n.displayName || n.name : "", zr = se ? ne(se) : "";
      return typeof n == "function" && oe.set(n, zr), zr;
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
    var Ue = Object.prototype.hasOwnProperty, Rr = {}, jr = I.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        jr.setExtraStackFrame(f);
      } else
        jr.setExtraStackFrame(null);
    }
    function un(n, u, f, v, _) {
      {
        var x = Function.call.bind(Ue);
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
            m && !(m instanceof Error) && (Ve(_), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", f, b, typeof m), Ve(null)), m instanceof Error && !(m.message in Rr) && (Rr[m.message] = !0, Ve(_), P("Failed %s type: %s", f, m.message), Ve(null));
          }
      }
    }
    var cn = Array.isArray;
    function nr(n) {
      return cn(n);
    }
    function fn(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, f = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return f;
      }
    }
    function ln(n) {
      try {
        return Pr(n), !1;
      } catch {
        return !0;
      }
    }
    function Pr(n) {
      return "" + n;
    }
    function Ar(n) {
      if (ln(n))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fn(n)), Pr(n);
    }
    var Te = I.ReactCurrentOwner, dn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fr, Ir, or;
    or = {};
    function pn(n) {
      if (Ue.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function gn(n) {
      if (Ue.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function hn(n, u) {
      if (typeof n.ref == "string" && Te.current && u && Te.current.stateNode !== u) {
        var f = z(Te.current.type);
        or[f] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Te.current.type), n.ref), or[f] = !0);
      }
    }
    function vn(n, u) {
      {
        var f = function() {
          Fr || (Fr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function yn(n, u) {
      {
        var f = function() {
          Ir || (Ir = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var mn = function(n, u, f, v, _, x, b) {
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
    function bn(n, u, f, v, _) {
      {
        var x, b = {}, m = null, N = null;
        f !== void 0 && (Ar(f), m = "" + f), gn(u) && (Ar(u.key), m = "" + u.key), pn(u) && (N = u.ref, hn(u, _));
        for (x in u)
          Ue.call(u, x) && !dn.hasOwnProperty(x) && (b[x] = u[x]);
        if (n && n.defaultProps) {
          var O = n.defaultProps;
          for (x in O)
            b[x] === void 0 && (b[x] = O[x]);
        }
        if (m || N) {
          var j = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          m && vn(b, j), N && yn(b, j);
        }
        return mn(n, m, N, _, v, Te.current, b);
      }
    }
    var ar = I.ReactCurrentOwner, Mr = I.ReactDebugCurrentFrame;
    function ie(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Mr.setExtraStackFrame(f);
      } else
        Mr.setExtraStackFrame(null);
    }
    var ir;
    ir = !1;
    function sr(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function Dr() {
      {
        if (ar.current) {
          var n = z(ar.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function _n(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), f = n.lineNumber;
          return `

Check your code at ` + u + ":" + f + ".";
        }
        return "";
      }
    }
    var kr = {};
    function Tn(n) {
      {
        var u = Dr();
        if (!u) {
          var f = typeof n == "string" ? n : n.displayName || n.name;
          f && (u = `

Check the top-level render call using <` + f + ">.");
        }
        return u;
      }
    }
    function Nr(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var f = Tn(u);
        if (kr[f])
          return;
        kr[f] = !0;
        var v = "";
        n && n._owner && n._owner !== ar.current && (v = " It was passed a child from " + z(n._owner.type) + "."), ie(n), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, v), ie(null);
      }
    }
    function Lr(n, u) {
      {
        if (typeof n != "object")
          return;
        if (nr(n))
          for (var f = 0; f < n.length; f++) {
            var v = n[f];
            sr(v) && Nr(v, u);
          }
        else if (sr(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var _ = F(n);
          if (typeof _ == "function" && _ !== n.entries)
            for (var x = _.call(n), b; !(b = x.next()).done; )
              sr(b.value) && Nr(b.value, u);
        }
      }
    }
    function En(n) {
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
          var v = z(u);
          un(f, n.props, "prop", v, n);
        } else if (u.PropTypes !== void 0 && !ir) {
          ir = !0;
          var _ = z(u);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xn(n) {
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
    function Yr(n, u, f, v, _, x) {
      {
        var b = Ze(n);
        if (!b) {
          var m = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = _n(_);
          N ? m += N : m += Dr();
          var O;
          n === null ? O = "null" : nr(n) ? O = "array" : n !== void 0 && n.$$typeof === r ? (O = "<" + (z(n.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : O = typeof n, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, m);
        }
        var j = bn(n, u, f, _, x);
        if (j == null)
          return j;
        if (b) {
          var Y = u.children;
          if (Y !== void 0)
            if (v)
              if (nr(Y)) {
                for (var se = 0; se < Y.length; se++)
                  Lr(Y[se], n);
                Object.freeze && Object.freeze(Y);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lr(Y, n);
        }
        return n === o ? xn(j) : En(j), j;
      }
    }
    function $n(n, u, f) {
      return Yr(n, u, f, !0);
    }
    function Sn(n, u, f) {
      return Yr(n, u, f, !1);
    }
    var Cn = Sn, wn = $n;
    xe.Fragment = o, xe.jsx = Cn, xe.jsxs = wn;
  }()), xe;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Un() : e.exports = Vn();
})(Be);
const St = Be.exports.Fragment, R = Be.exports.jsx, U = Be.exports.jsxs, Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Fragment: St,
  jsx: R,
  jsxs: U
}, Symbol.toStringTag, { value: "Module" })), Du = ({
  children: e,
  icon: r,
  ...t
}) => {
  const {
    TextComponent: o,
    iconWidth: a
  } = jn(() => t.size === "small" ? {
    TextComponent: kn,
    iconWidth: "4rem"
  } : {
    TextComponent: Dn,
    iconWidth: "5rem"
  }, [t.size]);
  return /* @__PURE__ */ U(Ln.Wrapper, {
    ...t,
    children: [r && /* @__PURE__ */ R(r, {
      width: a
    }), /* @__PURE__ */ R(o, {
      children: e
    })]
  });
};
var V = { exports: {} };
const Bn = /* @__PURE__ */ zn(Wn);
(function(e, r) {
  (function(t, o) {
    o(r, Bn, On);
  })(Yn, function(t, o, a) {
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
})(V, V.exports);
const Gn = {
  Container: L(V.exports.Hexile, {
    backgroundColor: "$grey1",
    borderRadius: "3rem"
  })
}, ku = ({
  children: e,
  icon: r
}) => /* @__PURE__ */ U(Gn.Container, {
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
var Br = Array.isArray, Gr = Object.keys, Hn = Object.prototype.hasOwnProperty, Kn = typeof Element < "u";
function hr(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    var t = Br(e), o = Br(r), a, i, s;
    if (t && o) {
      if (i = e.length, i != r.length)
        return !1;
      for (a = i; a-- !== 0; )
        if (!hr(e[a], r[a]))
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
    var y = Gr(e);
    if (i = y.length, i !== Gr(r).length)
      return !1;
    for (a = i; a-- !== 0; )
      if (!Hn.call(r, y[a]))
        return !1;
    if (Kn && e instanceof Element && r instanceof Element)
      return e === r;
    for (a = i; a-- !== 0; )
      if (s = y[a], !(s === "_owner" && e.$$typeof) && !hr(e[s], r[s]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var qn = function(r, t) {
  try {
    return hr(r, t);
  } catch (o) {
    if (o.message && o.message.match(/stack|recursion/i) || o.number === -2146828260)
      return console.warn("Warning: react-fast-compare does not handle circular references.", o.name, o.message), !1;
    throw o;
  }
}, Xn = typeof global == "object" && global && global.Object === Object && global;
const Ct = Xn;
var Jn = typeof self == "object" && self && self.Object === Object && self, Zn = Ct || Jn || Function("return this")();
const W = Zn;
var Qn = W.Symbol;
const K = Qn;
var wt = Object.prototype, eo = wt.hasOwnProperty, ro = wt.toString, $e = K ? K.toStringTag : void 0;
function to(e) {
  var r = eo.call(e, $e), t = e[$e];
  try {
    e[$e] = void 0;
    var o = !0;
  } catch {
  }
  var a = ro.call(e);
  return o && (r ? e[$e] = t : delete e[$e]), a;
}
var no = Object.prototype, oo = no.toString;
function ao(e) {
  return oo.call(e);
}
var io = "[object Null]", so = "[object Undefined]", Hr = K ? K.toStringTag : void 0;
function de(e) {
  return e == null ? e === void 0 ? so : io : Hr && Hr in Object(e) ? to(e) : ao(e);
}
function Ot(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var uo = Ot(Object.getPrototypeOf, Object);
const Rt = uo;
function pe(e) {
  return e != null && typeof e == "object";
}
function co() {
  this.__data__ = [], this.size = 0;
}
function jt(e, r) {
  return e === r || e !== e && r !== r;
}
function Ge(e, r) {
  for (var t = e.length; t--; )
    if (jt(e[t][0], r))
      return t;
  return -1;
}
var fo = Array.prototype, lo = fo.splice;
function po(e) {
  var r = this.__data__, t = Ge(r, e);
  if (t < 0)
    return !1;
  var o = r.length - 1;
  return t == o ? r.pop() : lo.call(r, t, 1), --this.size, !0;
}
function go(e) {
  var r = this.__data__, t = Ge(r, e);
  return t < 0 ? void 0 : r[t][1];
}
function ho(e) {
  return Ge(this.__data__, e) > -1;
}
function vo(e, r) {
  var t = this.__data__, o = Ge(t, e);
  return o < 0 ? (++this.size, t.push([e, r])) : t[o][1] = r, this;
}
function H(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
H.prototype.clear = co;
H.prototype.delete = po;
H.prototype.get = go;
H.prototype.has = ho;
H.prototype.set = vo;
function yo() {
  this.__data__ = new H(), this.size = 0;
}
function mo(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
function bo(e) {
  return this.__data__.get(e);
}
function _o(e) {
  return this.__data__.has(e);
}
function Ae(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var To = "[object AsyncFunction]", Eo = "[object Function]", xo = "[object GeneratorFunction]", $o = "[object Proxy]";
function Pt(e) {
  if (!Ae(e))
    return !1;
  var r = de(e);
  return r == Eo || r == xo || r == To || r == $o;
}
var So = W["__core-js_shared__"];
const ur = So;
var Kr = function() {
  var e = /[^.]+$/.exec(ur && ur.keys && ur.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Co(e) {
  return !!Kr && Kr in e;
}
var wo = Function.prototype, Oo = wo.toString;
function re(e) {
  if (e != null) {
    try {
      return Oo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ro = /[\\^$.*+?()[\]{}|]/g, jo = /^\[object .+?Constructor\]$/, Po = Function.prototype, Ao = Object.prototype, Fo = Po.toString, Io = Ao.hasOwnProperty, Mo = RegExp(
  "^" + Fo.call(Io).replace(Ro, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Do(e) {
  if (!Ae(e) || Co(e))
    return !1;
  var r = Pt(e) ? Mo : jo;
  return r.test(re(e));
}
function ko(e, r) {
  return e == null ? void 0 : e[r];
}
function te(e, r) {
  var t = ko(e, r);
  return Do(t) ? t : void 0;
}
var No = te(W, "Map");
const Oe = No;
var Lo = te(Object, "create");
const Re = Lo;
function Yo() {
  this.__data__ = Re ? Re(null) : {}, this.size = 0;
}
function zo(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Uo = "__lodash_hash_undefined__", Vo = Object.prototype, Wo = Vo.hasOwnProperty;
function Bo(e) {
  var r = this.__data__;
  if (Re) {
    var t = r[e];
    return t === Uo ? void 0 : t;
  }
  return Wo.call(r, e) ? r[e] : void 0;
}
var Go = Object.prototype, Ho = Go.hasOwnProperty;
function Ko(e) {
  var r = this.__data__;
  return Re ? r[e] !== void 0 : Ho.call(r, e);
}
var qo = "__lodash_hash_undefined__";
function Xo(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Re && r === void 0 ? qo : r, this;
}
function ee(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
ee.prototype.clear = Yo;
ee.prototype.delete = zo;
ee.prototype.get = Bo;
ee.prototype.has = Ko;
ee.prototype.set = Xo;
function Jo() {
  this.size = 0, this.__data__ = {
    hash: new ee(),
    map: new (Oe || H)(),
    string: new ee()
  };
}
function Zo(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function He(e, r) {
  var t = e.__data__;
  return Zo(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
function Qo(e) {
  var r = He(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function ea(e) {
  return He(this, e).get(e);
}
function ra(e) {
  return He(this, e).has(e);
}
function ta(e, r) {
  var t = He(this, e), o = t.size;
  return t.set(e, r), this.size += t.size == o ? 0 : 1, this;
}
function q(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
q.prototype.clear = Jo;
q.prototype.delete = Qo;
q.prototype.get = ea;
q.prototype.has = ra;
q.prototype.set = ta;
var na = 200;
function oa(e, r) {
  var t = this.__data__;
  if (t instanceof H) {
    var o = t.__data__;
    if (!Oe || o.length < na - 1)
      return o.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new q(o);
  }
  return t.set(e, r), this.size = t.size, this;
}
function ge(e) {
  var r = this.__data__ = new H(e);
  this.size = r.size;
}
ge.prototype.clear = yo;
ge.prototype.delete = mo;
ge.prototype.get = bo;
ge.prototype.has = _o;
ge.prototype.set = oa;
function aa(e, r) {
  for (var t = -1, o = e == null ? 0 : e.length; ++t < o && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var ia = function() {
  try {
    var e = te(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const qr = ia;
function At(e, r, t) {
  r == "__proto__" && qr ? qr(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var sa = Object.prototype, ua = sa.hasOwnProperty;
function Ft(e, r, t) {
  var o = e[r];
  (!(ua.call(e, r) && jt(o, t)) || t === void 0 && !(r in e)) && At(e, r, t);
}
function Ke(e, r, t, o) {
  var a = !t;
  t || (t = {});
  for (var i = -1, s = r.length; ++i < s; ) {
    var c = r[i], l = o ? o(t[c], e[c], c, t, e) : void 0;
    l === void 0 && (l = e[c]), a ? At(t, c, l) : Ft(t, c, l);
  }
  return t;
}
function ca(e, r) {
  for (var t = -1, o = Array(e); ++t < e; )
    o[t] = r(t);
  return o;
}
var fa = "[object Arguments]";
function Xr(e) {
  return pe(e) && de(e) == fa;
}
var It = Object.prototype, la = It.hasOwnProperty, da = It.propertyIsEnumerable, pa = Xr(function() {
  return arguments;
}()) ? Xr : function(e) {
  return pe(e) && la.call(e, "callee") && !da.call(e, "callee");
};
const ga = pa;
var ha = Array.isArray;
const Fe = ha;
function va() {
  return !1;
}
var Mt = typeof exports == "object" && exports && !exports.nodeType && exports, Jr = Mt && typeof module == "object" && module && !module.nodeType && module, ya = Jr && Jr.exports === Mt, Zr = ya ? W.Buffer : void 0, ma = Zr ? Zr.isBuffer : void 0, ba = ma || va;
const Dt = ba;
var _a = 9007199254740991, Ta = /^(?:0|[1-9]\d*)$/;
function Ea(e, r) {
  var t = typeof e;
  return r = r == null ? _a : r, !!r && (t == "number" || t != "symbol" && Ta.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var xa = 9007199254740991;
function kt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xa;
}
var $a = "[object Arguments]", Sa = "[object Array]", Ca = "[object Boolean]", wa = "[object Date]", Oa = "[object Error]", Ra = "[object Function]", ja = "[object Map]", Pa = "[object Number]", Aa = "[object Object]", Fa = "[object RegExp]", Ia = "[object Set]", Ma = "[object String]", Da = "[object WeakMap]", ka = "[object ArrayBuffer]", Na = "[object DataView]", La = "[object Float32Array]", Ya = "[object Float64Array]", za = "[object Int8Array]", Ua = "[object Int16Array]", Va = "[object Int32Array]", Wa = "[object Uint8Array]", Ba = "[object Uint8ClampedArray]", Ga = "[object Uint16Array]", Ha = "[object Uint32Array]", C = {};
C[La] = C[Ya] = C[za] = C[Ua] = C[Va] = C[Wa] = C[Ba] = C[Ga] = C[Ha] = !0;
C[$a] = C[Sa] = C[ka] = C[Ca] = C[Na] = C[wa] = C[Oa] = C[Ra] = C[ja] = C[Pa] = C[Aa] = C[Fa] = C[Ia] = C[Ma] = C[Da] = !1;
function Ka(e) {
  return pe(e) && kt(e.length) && !!C[de(e)];
}
function _r(e) {
  return function(r) {
    return e(r);
  };
}
var Nt = typeof exports == "object" && exports && !exports.nodeType && exports, Se = Nt && typeof module == "object" && module && !module.nodeType && module, qa = Se && Se.exports === Nt, cr = qa && Ct.process, Xa = function() {
  try {
    var e = Se && Se.require && Se.require("util").types;
    return e || cr && cr.binding && cr.binding("util");
  } catch {
  }
}();
const fe = Xa;
var Qr = fe && fe.isTypedArray, Ja = Qr ? _r(Qr) : Ka;
const Za = Ja;
var Qa = Object.prototype, ei = Qa.hasOwnProperty;
function Lt(e, r) {
  var t = Fe(e), o = !t && ga(e), a = !t && !o && Dt(e), i = !t && !o && !a && Za(e), s = t || o || a || i, c = s ? ca(e.length, String) : [], l = c.length;
  for (var h in e)
    (r || ei.call(e, h)) && !(s && (h == "length" || a && (h == "offset" || h == "parent") || i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || Ea(h, l))) && c.push(h);
  return c;
}
var ri = Object.prototype;
function Tr(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || ri;
  return e === t;
}
var ti = Ot(Object.keys, Object);
const ni = ti;
var oi = Object.prototype, ai = oi.hasOwnProperty;
function ii(e) {
  if (!Tr(e))
    return ni(e);
  var r = [];
  for (var t in Object(e))
    ai.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
function Yt(e) {
  return e != null && kt(e.length) && !Pt(e);
}
function Er(e) {
  return Yt(e) ? Lt(e) : ii(e);
}
function si(e, r) {
  return e && Ke(r, Er(r), e);
}
function ui(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var ci = Object.prototype, fi = ci.hasOwnProperty;
function li(e) {
  if (!Ae(e))
    return ui(e);
  var r = Tr(e), t = [];
  for (var o in e)
    o == "constructor" && (r || !fi.call(e, o)) || t.push(o);
  return t;
}
function xr(e) {
  return Yt(e) ? Lt(e, !0) : li(e);
}
function di(e, r) {
  return e && Ke(r, xr(r), e);
}
var zt = typeof exports == "object" && exports && !exports.nodeType && exports, et = zt && typeof module == "object" && module && !module.nodeType && module, pi = et && et.exports === zt, rt = pi ? W.Buffer : void 0, tt = rt ? rt.allocUnsafe : void 0;
function gi(e, r) {
  if (r)
    return e.slice();
  var t = e.length, o = tt ? tt(t) : new e.constructor(t);
  return e.copy(o), o;
}
function Ut(e, r) {
  var t = -1, o = e.length;
  for (r || (r = Array(o)); ++t < o; )
    r[t] = e[t];
  return r;
}
function hi(e, r) {
  for (var t = -1, o = e == null ? 0 : e.length, a = 0, i = []; ++t < o; ) {
    var s = e[t];
    r(s, t, e) && (i[a++] = s);
  }
  return i;
}
function Vt() {
  return [];
}
var vi = Object.prototype, yi = vi.propertyIsEnumerable, nt = Object.getOwnPropertySymbols, mi = nt ? function(e) {
  return e == null ? [] : (e = Object(e), hi(nt(e), function(r) {
    return yi.call(e, r);
  }));
} : Vt;
const $r = mi;
function bi(e, r) {
  return Ke(e, $r(e), r);
}
function Wt(e, r) {
  for (var t = -1, o = r.length, a = e.length; ++t < o; )
    e[a + t] = r[t];
  return e;
}
var _i = Object.getOwnPropertySymbols, Ti = _i ? function(e) {
  for (var r = []; e; )
    Wt(r, $r(e)), e = Rt(e);
  return r;
} : Vt;
const Bt = Ti;
function Ei(e, r) {
  return Ke(e, Bt(e), r);
}
function Gt(e, r, t) {
  var o = r(e);
  return Fe(e) ? o : Wt(o, t(e));
}
function xi(e) {
  return Gt(e, Er, $r);
}
function $i(e) {
  return Gt(e, xr, Bt);
}
var Si = te(W, "DataView");
const vr = Si;
var Ci = te(W, "Promise");
const yr = Ci;
var wi = te(W, "Set");
const mr = wi;
var Oi = te(W, "WeakMap");
const br = Oi;
var ot = "[object Map]", Ri = "[object Object]", at = "[object Promise]", it = "[object Set]", st = "[object WeakMap]", ut = "[object DataView]", ji = re(vr), Pi = re(Oe), Ai = re(yr), Fi = re(mr), Ii = re(br), Q = de;
(vr && Q(new vr(new ArrayBuffer(1))) != ut || Oe && Q(new Oe()) != ot || yr && Q(yr.resolve()) != at || mr && Q(new mr()) != it || br && Q(new br()) != st) && (Q = function(e) {
  var r = de(e), t = r == Ri ? e.constructor : void 0, o = t ? re(t) : "";
  if (o)
    switch (o) {
      case ji:
        return ut;
      case Pi:
        return ot;
      case Ai:
        return at;
      case Fi:
        return it;
      case Ii:
        return st;
    }
  return r;
});
const Sr = Q;
var Mi = Object.prototype, Di = Mi.hasOwnProperty;
function ki(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && Di.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Ni = W.Uint8Array;
const ct = Ni;
function Cr(e) {
  var r = new e.constructor(e.byteLength);
  return new ct(r).set(new ct(e)), r;
}
function Li(e, r) {
  var t = r ? Cr(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Yi = /\w*$/;
function zi(e) {
  var r = new e.constructor(e.source, Yi.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var ft = K ? K.prototype : void 0, lt = ft ? ft.valueOf : void 0;
function Ui(e) {
  return lt ? Object(lt.call(e)) : {};
}
function Vi(e, r) {
  var t = r ? Cr(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Wi = "[object Boolean]", Bi = "[object Date]", Gi = "[object Map]", Hi = "[object Number]", Ki = "[object RegExp]", qi = "[object Set]", Xi = "[object String]", Ji = "[object Symbol]", Zi = "[object ArrayBuffer]", Qi = "[object DataView]", es = "[object Float32Array]", rs = "[object Float64Array]", ts = "[object Int8Array]", ns = "[object Int16Array]", os = "[object Int32Array]", as = "[object Uint8Array]", is = "[object Uint8ClampedArray]", ss = "[object Uint16Array]", us = "[object Uint32Array]";
function cs(e, r, t) {
  var o = e.constructor;
  switch (r) {
    case Zi:
      return Cr(e);
    case Wi:
    case Bi:
      return new o(+e);
    case Qi:
      return Li(e, t);
    case es:
    case rs:
    case ts:
    case ns:
    case os:
    case as:
    case is:
    case ss:
    case us:
      return Vi(e, t);
    case Gi:
      return new o();
    case Hi:
    case Xi:
      return new o(e);
    case Ki:
      return zi(e);
    case qi:
      return new o();
    case Ji:
      return Ui(e);
  }
}
var dt = Object.create, fs = function() {
  function e() {
  }
  return function(r) {
    if (!Ae(r))
      return {};
    if (dt)
      return dt(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const ls = fs;
function ds(e) {
  return typeof e.constructor == "function" && !Tr(e) ? ls(Rt(e)) : {};
}
var ps = "[object Map]";
function gs(e) {
  return pe(e) && Sr(e) == ps;
}
var pt = fe && fe.isMap, hs = pt ? _r(pt) : gs;
const vs = hs;
var ys = "[object Set]";
function ms(e) {
  return pe(e) && Sr(e) == ys;
}
var gt = fe && fe.isSet, bs = gt ? _r(gt) : ms;
const _s = bs;
var Ts = 1, Es = 2, xs = 4, Ht = "[object Arguments]", $s = "[object Array]", Ss = "[object Boolean]", Cs = "[object Date]", ws = "[object Error]", Kt = "[object Function]", Os = "[object GeneratorFunction]", Rs = "[object Map]", js = "[object Number]", qt = "[object Object]", Ps = "[object RegExp]", As = "[object Set]", Fs = "[object String]", Is = "[object Symbol]", Ms = "[object WeakMap]", Ds = "[object ArrayBuffer]", ks = "[object DataView]", Ns = "[object Float32Array]", Ls = "[object Float64Array]", Ys = "[object Int8Array]", zs = "[object Int16Array]", Us = "[object Int32Array]", Vs = "[object Uint8Array]", Ws = "[object Uint8ClampedArray]", Bs = "[object Uint16Array]", Gs = "[object Uint32Array]", $ = {};
$[Ht] = $[$s] = $[Ds] = $[ks] = $[Ss] = $[Cs] = $[Ns] = $[Ls] = $[Ys] = $[zs] = $[Us] = $[Rs] = $[js] = $[qt] = $[Ps] = $[As] = $[Fs] = $[Is] = $[Vs] = $[Ws] = $[Bs] = $[Gs] = !0;
$[ws] = $[Kt] = $[Ms] = !1;
function Ce(e, r, t, o, a, i) {
  var s, c = r & Ts, l = r & Es, h = r & xs;
  if (t && (s = a ? t(e, o, a, i) : t(e)), s !== void 0)
    return s;
  if (!Ae(e))
    return e;
  var p = Fe(e);
  if (p) {
    if (s = ki(e), !c)
      return Ut(e, s);
  } else {
    var y = Sr(e), S = y == Kt || y == Os;
    if (Dt(e))
      return gi(e, c);
    if (y == qt || y == Ht || S && !a) {
      if (s = l || S ? {} : ds(e), !c)
        return l ? Ei(e, di(s, e)) : bi(e, si(s, e));
    } else {
      if (!$[y])
        return a ? e : {};
      s = cs(e, y, c);
    }
  }
  i || (i = new ge());
  var w = i.get(e);
  if (w)
    return w;
  i.set(e, s), _s(e) ? e.forEach(function(F) {
    s.add(Ce(F, r, t, F, e, i));
  }) : vs(e) && e.forEach(function(F, I) {
    s.set(I, Ce(F, r, t, I, e, i));
  });
  var A = h ? l ? $i : xi : l ? xr : Er, k = p ? void 0 : A(e);
  return aa(k || e, function(F, I) {
    k && (I = F, F = e[I]), Ft(s, I, Ce(F, r, t, I, e, i));
  }), s;
}
var Hs = 4;
function ht(e) {
  return Ce(e, Hs);
}
function Xt(e, r) {
  for (var t = -1, o = e == null ? 0 : e.length, a = Array(o); ++t < o; )
    a[t] = r(e[t], t, e);
  return a;
}
var Ks = "[object Symbol]";
function wr(e) {
  return typeof e == "symbol" || pe(e) && de(e) == Ks;
}
var qs = "Expected a function";
function Or(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(qs);
  var t = function() {
    var o = arguments, a = r ? r.apply(this, o) : o[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var s = e.apply(this, o);
    return t.cache = i.set(a, s) || i, s;
  };
  return t.cache = new (Or.Cache || q)(), t;
}
Or.Cache = q;
var Xs = 500;
function Js(e) {
  var r = Or(e, function(o) {
    return t.size === Xs && t.clear(), o;
  }), t = r.cache;
  return r;
}
var Zs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qs = /\\(\\)?/g, eu = Js(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Zs, function(t, o, a, i) {
    r.push(a ? i.replace(Qs, "$1") : o || t);
  }), r;
});
const ru = eu;
var tu = 1 / 0;
function nu(e) {
  if (typeof e == "string" || wr(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -tu ? "-0" : r;
}
var ou = 1 / 0, vt = K ? K.prototype : void 0, yt = vt ? vt.toString : void 0;
function Jt(e) {
  if (typeof e == "string")
    return e;
  if (Fe(e))
    return Xt(e, Jt) + "";
  if (wr(e))
    return yt ? yt.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -ou ? "-0" : r;
}
function au(e) {
  return e == null ? "" : Jt(e);
}
function Zt(e) {
  return Fe(e) ? Xt(e, nu) : wr(e) ? [e] : Ut(ru(au(e)));
}
var iu = process.env.NODE_ENV === "production";
function ce(e, r) {
  if (!iu) {
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
var Qt = { exports: {} }, T = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function su() {
  if (mt)
    return T;
  mt = 1;
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
var bt;
function uu() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
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
    var d = l, X = h, Xe = c, Je = s, Ie = r, Ze = p, Qe = o, Me = A, z = w, B = t, J = i, De = a, ke = y, he = !1;
    function Ne(g) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ve(g) || M(g) === l;
    }
    function ve(g) {
      return M(g) === h;
    }
    function Le(g) {
      return M(g) === c;
    }
    function Ye(g) {
      return M(g) === s;
    }
    function ze(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function er(g) {
      return M(g) === p;
    }
    function rr(g) {
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
    function tr(g) {
      return M(g) === y;
    }
    E.AsyncMode = d, E.ConcurrentMode = X, E.ContextConsumer = Xe, E.ContextProvider = Je, E.Element = Ie, E.ForwardRef = Ze, E.Fragment = Qe, E.Lazy = Me, E.Memo = z, E.Portal = B, E.Profiler = J, E.StrictMode = De, E.Suspense = ke, E.isAsyncMode = Ne, E.isConcurrentMode = ve, E.isContextConsumer = Le, E.isContextProvider = Ye, E.isElement = ze, E.isForwardRef = er, E.isFragment = rr, E.isLazy = ye, E.isMemo = me, E.isPortal = ne, E.isProfiler = be, E.isStrictMode = oe, E.isSuspense = tr, E.isValidElementType = D, E.typeOf = M;
  }()), E;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = su() : e.exports = uu();
})(Qt);
var en = Qt.exports, cu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, fu = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rn = {};
rn[en.ForwardRef] = cu;
rn[en.Memo] = fu;
var lu = 1, du = 4;
function pu(e) {
  return Ce(e, lu | du);
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
function gu(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
}
function tn(e, r) {
  if (e == null)
    return {};
  var t = {}, o = Object.keys(e), a, i;
  for (i = 0; i < o.length; i++)
    a = o[i], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function _t(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
var Tt = function(r) {
  return Array.isArray(r) && r.length === 0;
}, hu = function(r) {
  return typeof r == "function";
}, nn = function(r) {
  return r !== null && typeof r == "object";
}, vu = function(r) {
  return String(Math.floor(Number(r))) === r;
}, yu = function(r) {
  return $t.count(r) === 0;
};
function ue(e, r, t, o) {
  o === void 0 && (o = 0);
  for (var a = Zt(r); e && o < a.length; )
    e = e[a[o++]];
  return e === void 0 ? t : e;
}
function fr(e, r, t) {
  for (var o = ht(e), a = o, i = 0, s = Zt(r); i < s.length - 1; i++) {
    var c = s[i], l = ue(e, s.slice(0, i + 1));
    if (l && (nn(l) || Array.isArray(l)))
      a = a[c] = ht(l);
    else {
      var h = s[i + 1];
      a = a[c] = vu(h) && Number(h) >= 0 ? [] : {};
    }
  }
  return (i === 0 ? e : a)[s[i]] === t ? e : (t === void 0 ? delete a[s[i]] : a[s[i]] = t, i === 0 && t === void 0 && delete o[s[i]], o);
}
var qe = /* @__PURE__ */ Pn(void 0);
qe.displayName = "FormikContext";
qe.Provider;
qe.Consumer;
function on() {
  var e = Fn(qe);
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : ce(!1)), e;
}
function an(e) {
  var r = on(), t = r.getFieldProps, o = r.getFieldMeta, a = r.getFieldHelpers, i = r.registerField, s = r.unregisterField, c = nn(e), l = c ? e : {
    name: e
  }, h = l.name, p = l.validate;
  return pr(function() {
    return h && i(h, {
      validate: p
    }), function() {
      h && s(h);
    };
  }, [i, s, h, p]), process.env.NODE_ENV !== "production" && (r || (process.env.NODE_ENV !== "production" ? ce(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : ce(!1))), h || (process.env.NODE_ENV !== "production" ? ce(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : ce(!1)), [t(l), o(h), a(h)];
}
var mu = /* @__PURE__ */ An(function(e, r) {
  var t = e.action, o = tn(e, ["action"]), a = t != null ? t : "#", i = on(), s = i.handleReset, c = i.handleSubmit;
  return xt("form", Object.assign({
    onSubmit: c,
    ref: r,
    onReset: s,
    action: a
  }, o));
});
mu.displayName = "Form";
var bu = function(r, t, o) {
  var a = le(r), i = a[t];
  return a.splice(t, 1), a.splice(o, 0, i), a;
}, _u = function(r, t, o) {
  var a = le(r), i = a[t];
  return a[t] = a[o], a[o] = i, a;
}, lr = function(r, t, o) {
  var a = le(r);
  return a.splice(t, 0, o), a;
}, Tu = function(r, t, o) {
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
}, Eu = /* @__PURE__ */ function(e) {
  gu(r, e);
  function r(o) {
    var a;
    return a = e.call(this, o) || this, a.updateArrayField = function(i, s, c) {
      var l = a.props, h = l.name, p = l.formik.setFormikState;
      p(function(y) {
        var S = typeof c == "function" ? c : i, w = typeof s == "function" ? s : i, A = fr(y.values, h, i(ue(y.values, h))), k = c ? S(ue(y.errors, h)) : void 0, F = s ? w(ue(y.touched, h)) : void 0;
        return Tt(k) && (k = void 0), Tt(F) && (F = void 0), je({}, y, {
          values: A,
          errors: c ? fr(y.errors, h, k) : y.errors,
          touched: s ? fr(y.touched, h, F) : y.touched
        });
      });
    }, a.push = function(i) {
      return a.updateArrayField(function(s) {
        return [].concat(le(s), [pu(i)]);
      }, !1, !1);
    }, a.handlePush = function(i) {
      return function() {
        return a.push(i);
      };
    }, a.swap = function(i, s) {
      return a.updateArrayField(function(c) {
        return _u(c, i, s);
      }, !0, !0);
    }, a.handleSwap = function(i, s) {
      return function() {
        return a.swap(i, s);
      };
    }, a.move = function(i, s) {
      return a.updateArrayField(function(c) {
        return bu(c, i, s);
      }, !0, !0);
    }, a.handleMove = function(i, s) {
      return function() {
        return a.move(i, s);
      };
    }, a.insert = function(i, s) {
      return a.updateArrayField(function(c) {
        return lr(c, i, s);
      }, function(c) {
        return lr(c, i, null);
      }, function(c) {
        return lr(c, i, null);
      });
    }, a.handleInsert = function(i, s) {
      return function() {
        return a.insert(i, s);
      };
    }, a.replace = function(i, s) {
      return a.updateArrayField(function(c) {
        return Tu(c, i, s);
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
    }, a.remove = a.remove.bind(_t(a)), a.pop = a.pop.bind(_t(a)), a;
  }
  var t = r.prototype;
  return t.componentDidUpdate = function(a) {
    this.props.validateOnChange && this.props.formik.validateOnChange && !qn(ue(a.formik.values, a.name), ue(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
  }, t.remove = function(a) {
    var i;
    return this.updateArrayField(
      function(s) {
        var c = s ? le(s) : [];
        return i || (i = c[a]), hu(c.splice) && c.splice(a, 1), c;
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
    }, i = this.props, s = i.component, c = i.render, l = i.children, h = i.name, p = i.formik, y = tn(p, ["validate", "validationSchema"]), S = je({}, a, {
      form: y,
      name: h
    });
    return s ? xt(s, S) : c ? c(S) : l ? typeof l == "function" ? l(S) : yu(l) ? null : $t.only(l) : null;
  }, r;
}(In);
Eu.defaultProps = {
  validateOnChange: !0
};
const sn = {
  Box: L("input", {
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
sn.Box.defaultProps = {
  type: "checkbox"
};
const Nu = ({
  children: e,
  ...r
}) => /* @__PURE__ */ R("label", {
  children: /* @__PURE__ */ U(V.exports.Hexile, {
    gap: 3,
    y: "center",
    children: [/* @__PURE__ */ R(sn.Box, {
      ...r
    }), e]
  })
}), Lu = (e) => /* @__PURE__ */ U(V.exports.Vexile, {
  gap: 3,
  children: [/* @__PURE__ */ U(V.exports.Vexile, {
    gap: 1,
    children: [/* @__PURE__ */ U(Nn, {
      children: [e.name, " ", e.required && "*"]
    }), e.info && /* @__PURE__ */ R(we, {
      grey5: !0,
      children: e.info
    })]
  }), e.children]
}), dr = {
  Wrapper: L(V.exports.Hexile, {
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
  IconWrapper: L("div", {
    padding: "3rem",
    paddingRight: "0rem",
    display: "grid",
    color: "$grey5"
  }),
  LogicalInput: L("input", {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    padding: "3rem",
    paddingLeft: "2rem",
    flex: 1
  })
}, xu = ({
  icon: e,
  ...r
}) => /* @__PURE__ */ R("label", {
  children: /* @__PURE__ */ U(V.exports.Vexile, {
    gap: 2,
    children: [/* @__PURE__ */ U(dr.Wrapper, {
      children: [/* @__PURE__ */ R(dr.IconWrapper, {
        children: /* @__PURE__ */ R(e, {
          flexShrink: 0,
          width: "6rem"
        })
      }), /* @__PURE__ */ R(dr.LogicalInput, {
        ...r
      })]
    }), r.errorMessage && /* @__PURE__ */ R(we, {
      blue: !0,
      children: r.errorMessage
    })]
  })
}), Yu = (e) => {
  const [r, t] = an(e.name);
  return /* @__PURE__ */ R(xu, {
    ...e,
    ...r,
    errorMessage: t.error
  });
}, We = {
  Background: L(V.exports.Hexile, {
    backgroundColor: "$grey1",
    borderRadius: "3rem"
  }),
  Item: L(V.exports.Hexile, {
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
  IndicatorWrapper: L("div", {
    position: "absolute",
    height: "100%",
    top: "0px",
    left: "0px",
    padding: "1rem",
    boxSizing: "border-box",
    animated: !0
  }),
  Indicator: L("div", {
    backgroundColor: "white",
    height: "100%",
    borderRadius: "2rem",
    elevated: !0,
    lightBorder: !0
  })
}, $u = (e) => /* @__PURE__ */ U(V.exports.Vexile, {
  gap: 2,
  style: {
    flex: 1
  },
  children: [/* @__PURE__ */ U(We.Background, {
    padding: 1,
    gap: 3,
    relative: !0,
    children: [e.items.map((r) => /* @__PURE__ */ R(We.Item, {
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
    }, r.key)), /* @__PURE__ */ R(We.IndicatorWrapper, {
      style: {
        width: `calc(100% / ${e.items.length})`,
        left: `calc(100% / ${e.items.length} * ${e.items.findIndex((r) => r.key == e.selectedKey)})`
      },
      children: /* @__PURE__ */ R(We.Indicator, {})
    })]
  }), e.errorMessage && /* @__PURE__ */ R(we, {
    blue: !0,
    children: e.errorMessage
  })]
}), Su = (e) => {
  var s;
  const [r, t] = Ur(e.selectedKey || ((s = e.items[0]) == null ? void 0 : s.key)), [o, a] = Ur(), i = Mn((c) => {
    t(c);
  }, []);
  return [r, t, a, e.items.length === 0 ? /* @__PURE__ */ R(St, {}) : /* @__PURE__ */ R($u, {
    ...e,
    selectedKey: r,
    errorMessage: o,
    onClick: i
  })];
}, zu = (e) => {
  const [r, t, o] = an(e.name), [a, i, s, c] = Su({
    ...e,
    selectedKey: t.initialValue
  });
  return pr(() => {
    o.setValue(a);
  }, [a]), pr(() => {
    s(t.error);
  }, [t.error]), c;
};
export {
  Du as Button,
  ku as Callout,
  Nu as Checkbox,
  Yu as FInput,
  zu as FSwitch,
  Lu as FormField,
  Mu as Header1,
  Dn as Header2,
  kn as Header3,
  xu as Input,
  Nn as Text1,
  we as Text2,
  ju as keyframes,
  L as styled,
  Su as useSwitch
};
