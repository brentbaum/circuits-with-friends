;(function(){
function e(a) {
  return function() {
    return this[a]
  }
}
function g(a) {
  return function() {
    return a
  }
}
var n, p = this;
function r(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function aa(a) {
  var b = r(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ba(a) {
  return"string" == typeof a
}
function ca(a) {
  var b = typeof a;
  return"object" == b && null != a || "function" == b
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ga(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function ha(a, b, c) {
  ha = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
  return ha.apply(null, arguments)
}
var ia = Date.now || function() {
  return+new Date
};
function ja(a, b) {
  var c = a.split("."), d = p;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    c.length || void 0 === b ? d = d[f] ? d[f] : d[f] = {} : d[f] = b
  }
}
function ka(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Kc = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ma(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function na(a) {
  if(!oa.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(pa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(qa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(ra, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(sa, "\x26quot;"));
  return a
}
var pa = /&/g, qa = /</g, ra = />/g, sa = /\"/g, oa = /[&<>\"]/;
function ta(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, ta) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
ka(ta, Error);
ta.prototype.name = "CustomError";
function ua(a, b) {
  b.unshift(a);
  ta.call(this, ma.apply(null, b));
  b.shift();
  this.Fc = a
}
ka(ua, ta);
ua.prototype.name = "AssertionError";
function va(a, b) {
  throw new ua("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var wa = Array.prototype, xa = wa.indexOf ? function(a, b, c) {
  return wa.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, za = wa.forEach ? function(a, b, c) {
  wa.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = ba(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && b.call(c, f[h], h, a)
  }
}, Aa = wa.filter ? function(a, b, c) {
  return wa.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], h = 0, k = ba(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in k) {
      var m = k[l];
      b.call(c, m, l, a) && (f[h++] = m)
    }
  }
  return f
};
function Ba(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function Ca(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
;function Da(a, b) {
  null != a && this.append.apply(this, arguments)
}
Da.prototype.ma = "";
Da.prototype.append = function(a, b, c) {
  this.ma += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.ma += arguments[d]
    }
  }
  return this
};
Da.prototype.toString = e("ma");
var Ea;
function Fa() {
  return t([new v(null, "flush-on-newline", "flush-on-newline", 4338025857), !0, new v(null, "readably", "readably", 4441712502), !0, new v(null, "meta", "meta", 1017252215), !1, new v(null, "dup", "dup", 1014004081), !1])
}
function w(a) {
  return null != a && !1 !== a
}
function Ga(a) {
  return null == a
}
function Ha(a) {
  return w(a) ? !1 : !0
}
function x(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : new v(null, "else", "else", 1017020587) ? !1 : null
}
function Ia(a) {
  return null == a ? null : a.constructor
}
function y(a, b) {
  var c = Ia.call(null, b), c = w(w(c) ? c.bb : c) ? c.ab : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Ka(a) {
  var b = a.ab;
  return w(b) ? b : "" + z(a)
}
function La(a) {
  return Array.prototype.slice.call(arguments)
}
var Ma = {}, Na = {};
function Oa(a) {
  if(a ? a.D : a) {
    return a.D(a)
  }
  var b;
  b = Oa[r(null == a ? null : a)];
  if(!b && (b = Oa._, !b)) {
    throw y.call(null, "ICounted.-count", a);
  }
  return b.call(null, a)
}
function Pa(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  b = Pa[r(null == a ? null : a)];
  if(!b && (b = Pa._, !b)) {
    throw y.call(null, "IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var Qa = {};
function Ra(a, b) {
  if(a ? a.w : a) {
    return a.w(a, b)
  }
  var c;
  c = Ra[r(null == a ? null : a)];
  if(!c && (c = Ra._, !c)) {
    throw y.call(null, "ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var Sa = {}, A = function() {
  function a(a, b, c) {
    if(a ? a.U : a) {
      return a.U(a, b, c)
    }
    var k;
    k = A[r(null == a ? null : a)];
    if(!k && (k = A._, !k)) {
      throw y.call(null, "IIndexed.-nth", a);
    }
    return k.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.T : a) {
      return a.T(a, b)
    }
    var c;
    c = A[r(null == a ? null : a)];
    if(!c && (c = A._, !c)) {
      throw y.call(null, "IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(d, c, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.l = a;
  return c
}(), Ta = {};
function B(a) {
  if(a ? a.M : a) {
    return a.M(a)
  }
  var b;
  b = B[r(null == a ? null : a)];
  if(!b && (b = B._, !b)) {
    throw y.call(null, "ISeq.-first", a);
  }
  return b.call(null, a)
}
function C(a) {
  if(a ? a.N : a) {
    return a.N(a)
  }
  var b;
  b = C[r(null == a ? null : a)];
  if(!b && (b = C._, !b)) {
    throw y.call(null, "ISeq.-rest", a);
  }
  return b.call(null, a)
}
var Ua = {};
function Va(a) {
  if(a ? a.V : a) {
    return a.V(a)
  }
  var b;
  b = Va[r(null == a ? null : a)];
  if(!b && (b = Va._, !b)) {
    throw y.call(null, "INext.-next", a);
  }
  return b.call(null, a)
}
var Wa = {}, Xa = function() {
  function a(a, b, c) {
    if(a ? a.L : a) {
      return a.L(a, b, c)
    }
    var k;
    k = Xa[r(null == a ? null : a)];
    if(!k && (k = Xa._, !k)) {
      throw y.call(null, "ILookup.-lookup", a);
    }
    return k.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.K : a) {
      return a.K(a, b)
    }
    var c;
    c = Xa[r(null == a ? null : a)];
    if(!c && (c = Xa._, !c)) {
      throw y.call(null, "ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.l = a;
  return c
}();
function Ya(a, b, c) {
  if(a ? a.na : a) {
    return a.na(a, b, c)
  }
  var d;
  d = Ya[r(null == a ? null : a)];
  if(!d && (d = Ya._, !d)) {
    throw y.call(null, "IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var Za = {};
function $a(a, b) {
  if(a ? a.Ja : a) {
    return a.Ja(a, b)
  }
  var c;
  c = $a[r(null == a ? null : a)];
  if(!c && (c = $a._, !c)) {
    throw y.call(null, "IMap.-dissoc", a);
  }
  return c.call(null, a, b)
}
var ab = {};
function bb(a) {
  if(a ? a.Ta : a) {
    return a.Ta()
  }
  var b;
  b = bb[r(null == a ? null : a)];
  if(!b && (b = bb._, !b)) {
    throw y.call(null, "IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function cb(a) {
  if(a ? a.Ua : a) {
    return a.Ua()
  }
  var b;
  b = cb[r(null == a ? null : a)];
  if(!b && (b = cb._, !b)) {
    throw y.call(null, "IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var db = {};
function fb(a, b, c) {
  if(a ? a.La : a) {
    return a.La(a, b, c)
  }
  var d;
  d = fb[r(null == a ? null : a)];
  if(!d && (d = fb._, !d)) {
    throw y.call(null, "IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function gb(a) {
  if(a ? a.nb : a) {
    return a.state
  }
  var b;
  b = gb[r(null == a ? null : a)];
  if(!b && (b = gb._, !b)) {
    throw y.call(null, "IDeref.-deref", a);
  }
  return b.call(null, a)
}
var hb = {};
function ib(a) {
  if(a ? a.u : a) {
    return a.u(a)
  }
  var b;
  b = ib[r(null == a ? null : a)];
  if(!b && (b = ib._, !b)) {
    throw y.call(null, "IMeta.-meta", a);
  }
  return b.call(null, a)
}
var jb = {};
function kb(a, b) {
  if(a ? a.v : a) {
    return a.v(a, b)
  }
  var c;
  c = kb[r(null == a ? null : a)];
  if(!c && (c = kb._, !c)) {
    throw y.call(null, "IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var lb = {}, mb = function() {
  function a(a, b, c) {
    if(a ? a.H : a) {
      return a.H(a, b, c)
    }
    var k;
    k = mb[r(null == a ? null : a)];
    if(!k && (k = mb._, !k)) {
      throw y.call(null, "IReduce.-reduce", a);
    }
    return k.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.G : a) {
      return a.G(a, b)
    }
    var c;
    c = mb[r(null == a ? null : a)];
    if(!c && (c = mb._, !c)) {
      throw y.call(null, "IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.l = a;
  return c
}();
function nb(a, b) {
  if(a ? a.q : a) {
    return a.q(a, b)
  }
  var c;
  c = nb[r(null == a ? null : a)];
  if(!c && (c = nb._, !c)) {
    throw y.call(null, "IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function ob(a) {
  if(a ? a.r : a) {
    return a.r(a)
  }
  var b;
  b = ob[r(null == a ? null : a)];
  if(!b && (b = ob._, !b)) {
    throw y.call(null, "IHash.-hash", a);
  }
  return b.call(null, a)
}
var pb = {};
function qb(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  b = qb[r(null == a ? null : a)];
  if(!b && (b = qb._, !b)) {
    throw y.call(null, "ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var rb = {}, sb = {};
function tb(a) {
  if(a ? a.Ka : a) {
    return a.Ka(a)
  }
  var b;
  b = tb[r(null == a ? null : a)];
  if(!b && (b = tb._, !b)) {
    throw y.call(null, "IReversible.-rseq", a);
  }
  return b.call(null, a)
}
function D(a, b) {
  if(a ? a.$a : a) {
    return a.$a(0, b)
  }
  var c;
  c = D[r(null == a ? null : a)];
  if(!c && (c = D._, !c)) {
    throw y.call(null, "IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function ub(a) {
  if(a ? a.Jb : a) {
    return null
  }
  var b;
  b = ub[r(null == a ? null : a)];
  if(!b && (b = ub._, !b)) {
    throw y.call(null, "IWriter.-flush", a);
  }
  return b.call(null, a)
}
var vb = {};
function wb(a, b, c) {
  if(a ? a.s : a) {
    return a.s(a, b, c)
  }
  var d;
  d = wb[r(null == a ? null : a)];
  if(!d && (d = wb._, !d)) {
    throw y.call(null, "IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function xb(a, b, c) {
  if(a ? a.Za : a) {
    return a.Za(0, b, c)
  }
  var d;
  d = xb[r(null == a ? null : a)];
  if(!d && (d = xb._, !d)) {
    throw y.call(null, "IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function yb(a) {
  if(a ? a.ua : a) {
    return a.ua(a)
  }
  var b;
  b = yb[r(null == a ? null : a)];
  if(!b && (b = yb._, !b)) {
    throw y.call(null, "IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function zb(a, b) {
  if(a ? a.wa : a) {
    return a.wa(a, b)
  }
  var c;
  c = zb[r(null == a ? null : a)];
  if(!c && (c = zb._, !c)) {
    throw y.call(null, "ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Ab(a) {
  if(a ? a.xa : a) {
    return a.xa(a)
  }
  var b;
  b = Ab[r(null == a ? null : a)];
  if(!b && (b = Ab._, !b)) {
    throw y.call(null, "ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Bb(a, b, c) {
  if(a ? a.va : a) {
    return a.va(a, b, c)
  }
  var d;
  d = Bb[r(null == a ? null : a)];
  if(!d && (d = Bb._, !d)) {
    throw y.call(null, "ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Cb(a, b, c) {
  if(a ? a.Ya : a) {
    return a.Ya(0, b, c)
  }
  var d;
  d = Cb[r(null == a ? null : a)];
  if(!d && (d = Cb._, !d)) {
    throw y.call(null, "ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function Db(a, b) {
  if(a ? a.Ha : a) {
    return a.Ha(a, b)
  }
  var c;
  c = Db[r(null == a ? null : a)];
  if(!c && (c = Db._, !c)) {
    throw y.call(null, "IComparable.-compare", a);
  }
  return c.call(null, a, b)
}
function Eb(a) {
  if(a ? a.Oa : a) {
    return a.Oa()
  }
  var b;
  b = Eb[r(null == a ? null : a)];
  if(!b && (b = Eb._, !b)) {
    throw y.call(null, "IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Fb(a) {
  if(a ? a.Fa : a) {
    return a.Fa(a)
  }
  var b;
  b = Fb[r(null == a ? null : a)];
  if(!b && (b = Fb._, !b)) {
    throw y.call(null, "IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function Gb(a) {
  if(a ? a.Ga : a) {
    return a.Ga(a)
  }
  var b;
  b = Gb[r(null == a ? null : a)];
  if(!b && (b = Gb._, !b)) {
    throw y.call(null, "IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Hb(a) {
  if(a ? a.Ea : a) {
    return a.Ea(a)
  }
  var b;
  b = Hb[r(null == a ? null : a)];
  if(!b && (b = Hb._, !b)) {
    throw y.call(null, "IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function Ib(a) {
  if(a ? a.Va : a) {
    return a.name
  }
  var b;
  b = Ib[r(null == a ? null : a)];
  if(!b && (b = Ib._, !b)) {
    throw y.call(null, "INamed.-name", a);
  }
  return b.call(null, a)
}
function Jb(a) {
  if(a ? a.Wa : a) {
    return a.ha
  }
  var b;
  b = Jb[r(null == a ? null : a)];
  if(!b && (b = Jb._, !b)) {
    throw y.call(null, "INamed.-namespace", a);
  }
  return b.call(null, a)
}
function Kb(a) {
  this.Rb = a;
  this.m = 0;
  this.d = 1073741824
}
Kb.prototype.$a = function(a, b) {
  return this.Rb.append(b)
};
Kb.prototype.Jb = g(null);
function Lb(a) {
  var b = new Da, c = new Kb(b);
  wb.call(null, a, c, Fa.call(null));
  ub.call(null, c);
  return"" + z(b)
}
function Mb(a) {
  return Nb.call(null, E.call(null, a.ha), E.call(null, a.name))
}
function Ob(a, b, c, d, f) {
  this.ha = a;
  this.name = b;
  this.ea = c;
  this.fa = d;
  this.P = f;
  this.d = 2154168321;
  this.m = 4096
}
n = Ob.prototype;
n.s = function(a, b) {
  return D.call(null, b, this.ea)
};
n.Va = e("name");
n.Wa = e("ha");
n.r = function() {
  var a = this.fa;
  return null != a ? a : this.fa = a = Mb.call(null, this)
};
n.v = function(a, b) {
  return new Ob(this.ha, this.name, this.ea, this.fa, b)
};
n.u = e("P");
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Xa.call(null, c, this, null);
      case 3:
        return Xa.call(null, c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.a = function(a) {
  return Xa.call(null, a, this, null)
};
n.h = function(a, b) {
  return Xa.call(null, a, this, b)
};
n.q = function(a, b) {
  return b instanceof Ob ? this.ea === b.ea : !1
};
n.toString = e("ea");
function F(a) {
  if(null == a) {
    return null
  }
  if(a && (a.d & 8388608 || a.xc)) {
    return qb.call(null, a)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Pb(a, 0)
  }
  if(x.call(null, pb, a)) {
    return qb.call(null, a)
  }
  if(new v(null, "else", "else", 1017020587)) {
    throw Error([z(a), z("is not ISeqable")].join(""));
  }
  return null
}
function G(a) {
  if(null == a) {
    return null
  }
  if(a && (a.d & 64 || a.pa)) {
    return B.call(null, a)
  }
  a = F.call(null, a);
  return null == a ? null : B.call(null, a)
}
function I(a) {
  return null != a ? a && (a.d & 64 || a.pa) ? C.call(null, a) : (a = F.call(null, a)) ? C.call(null, a) : L : L
}
function M(a) {
  return null == a ? null : a && (a.d & 128 || a.Xa) ? Va.call(null, a) : F.call(null, I.call(null, a))
}
var O = function() {
  function a(a, b) {
    return a === b || nb.call(null, a, b)
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, f) {
      for(;;) {
        if(b.call(null, a, d)) {
          if(M.call(null, f)) {
            a = d, d = G.call(null, f), f = M.call(null, f)
          }else {
            return b.call(null, d, G.call(null, f))
          }
        }else {
          return!1
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = I(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.a = g(!0);
  b.h = a;
  b.e = c.e;
  return b
}();
ob["null"] = g(0);
Ua["null"] = !0;
Va["null"] = g(null);
Na["null"] = !0;
Oa["null"] = g(0);
nb["null"] = function(a, b) {
  return null == b
};
jb["null"] = !0;
kb["null"] = g(null);
hb["null"] = !0;
ib["null"] = g(null);
Pa["null"] = g(null);
Za["null"] = !0;
$a["null"] = g(null);
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
nb.number = function(a, b) {
  return a === b
};
hb["function"] = !0;
ib["function"] = g(null);
Ma["function"] = !0;
ob._ = function(a) {
  return a[da] || (a[da] = ++ea)
};
function Qb() {
  return!1
}
var Sb = function() {
  function a(a, b, c, d) {
    for(var m = Oa.call(null, a);;) {
      if(d < m) {
        c = b.call(null, c, A.call(null, a, d));
        if(Qb.call(null)) {
          return Rb.call(null, c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = Oa.call(null, a), m = 0;;) {
      if(m < d) {
        c = b.call(null, c, A.call(null, a, m));
        if(Qb.call(null)) {
          return Rb.call(null, c)
        }
        m += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = Oa.call(null, a);
    if(0 === c) {
      return b.call(null)
    }
    for(var d = A.call(null, a, 0), m = 1;;) {
      if(m < c) {
        d = b.call(null, d, A.call(null, a, m));
        if(Qb.call(null)) {
          return Rb.call(null, d)
        }
        m += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, h, k, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.l = b;
  d.F = a;
  return d
}(), Tb = function() {
  function a(a, b, c, d) {
    for(var m = a.length;;) {
      if(d < m) {
        c = b.call(null, c, a[d]);
        if(Qb.call(null)) {
          return Rb.call(null, c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, m = 0;;) {
      if(m < d) {
        c = b.call(null, c, a[m]);
        if(Qb.call(null)) {
          return Rb.call(null, c)
        }
        m += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.call(null)
    }
    for(var d = a[0], m = 1;;) {
      if(m < c) {
        d = b.call(null, d, a[m]);
        if(Qb.call(null)) {
          return Rb.call(null, d)
        }
        m += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, h, k, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.l = b;
  d.F = a;
  return d
}();
function Ub(a) {
  return a ? a.d & 2 || a.mb ? !0 : a.d ? !1 : x.call(null, Na, a) : x.call(null, Na, a)
}
function Vb(a) {
  return a ? a.d & 16 || a.Sa ? !0 : a.d ? !1 : x.call(null, Sa, a) : x.call(null, Sa, a)
}
function Pb(a, b) {
  this.b = a;
  this.i = b;
  this.m = 0;
  this.d = 166199550
}
n = Pb.prototype;
n.r = function() {
  return Wb.call(null, this)
};
n.V = function() {
  return this.i + 1 < this.b.length ? new Pb(this.b, this.i + 1) : null
};
n.w = function(a, b) {
  return P.call(null, b, this)
};
n.Ka = function() {
  var a = Oa.call(null, this);
  return 0 < a ? new Xb(this, a - 1, null) : null
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Tb.call(null, this.b, b, this.b[this.i], this.i + 1)
};
n.H = function(a, b, c) {
  return Tb.call(null, this.b, b, c, this.i)
};
n.C = function() {
  return this
};
n.D = function() {
  return this.b.length - this.i
};
n.M = function() {
  return this.b[this.i]
};
n.N = function() {
  return this.i + 1 < this.b.length ? new Pb(this.b, this.i + 1) : L
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.T = function(a, b) {
  var c = b + this.i;
  return c < this.b.length ? this.b[c] : null
};
n.U = function(a, b, c) {
  a = b + this.i;
  return a < this.b.length ? this.b[a] : c
};
n.A = function() {
  return L
};
var ac = function() {
  function a(a, b) {
    return b < a.length ? new Pb(a, b) : null
  }
  function b(a) {
    return c.call(null, a, 0)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.h = a;
  return c
}(), N = function() {
  function a(a, b) {
    return ac.call(null, a, b)
  }
  function b(a) {
    return ac.call(null, a, 0)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.h = a;
  return c
}();
function Xb(a, b, c) {
  this.Da = a;
  this.i = b;
  this.g = c;
  this.m = 0;
  this.d = 32374862
}
n = Xb.prototype;
n.r = function() {
  return Wb.call(null, this)
};
n.w = function(a, b) {
  return P.call(null, b, this)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Q.call(null, b, this)
};
n.H = function(a, b, c) {
  return Q.call(null, b, c, this)
};
n.C = function() {
  return this
};
n.D = function() {
  return this.i + 1
};
n.M = function() {
  return A.call(null, this.Da, this.i)
};
n.N = function() {
  return 0 < this.i ? new Xb(this.Da, this.i - 1, null) : null
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new Xb(this.Da, this.i, b)
};
n.u = e("g");
n.A = function() {
  return bc.call(null, L, this.g)
};
function cc(a) {
  return G.call(null, M.call(null, a))
}
function dc(a) {
  return M.call(null, M.call(null, a))
}
nb._ = function(a, b) {
  return a === b
};
var ec = function() {
  function a(a, b) {
    return null != a ? Ra.call(null, a, b) : Ra.call(null, L, b)
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, f) {
      for(;;) {
        if(w(f)) {
          a = b.call(null, a, d), d = G.call(null, f), f = M.call(null, f)
        }else {
          return b.call(null, a, d)
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = I(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.h = a;
  b.e = c.e;
  return b
}();
function fc(a) {
  return Pa.call(null, a)
}
function gc(a) {
  a = F.call(null, a);
  for(var b = 0;;) {
    if(Ub.call(null, a)) {
      return b + Oa.call(null, a)
    }
    a = M.call(null, a);
    b += 1
  }
}
function R(a) {
  return null != a ? a && (a.d & 2 || a.mb) ? Oa.call(null, a) : a instanceof Array ? a.length : "string" === typeof a ? a.length : x.call(null, Na, a) ? Oa.call(null, a) : new v(null, "else", "else", 1017020587) ? gc.call(null, a) : null : 0
}
var hc = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return F.call(null, a) ? G.call(null, a) : c
      }
      if(Vb.call(null, a)) {
        return A.call(null, a, b, c)
      }
      if(F.call(null, a)) {
        a = M.call(null, a), b -= 1
      }else {
        return new v(null, "else", "else", 1017020587) ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(F.call(null, a)) {
          return G.call(null, a)
        }
        throw Error("Index out of bounds");
      }
      if(Vb.call(null, a)) {
        return A.call(null, a, b)
      }
      if(F.call(null, a)) {
        var c = M.call(null, a), k = b - 1;
        a = c;
        b = k
      }else {
        if(new v(null, "else", "else", 1017020587)) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.l = a;
  return c
}(), ic = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.d & 16 || a.Sa)) {
        return A.call(null, a, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(x.call(null, Sa, a)) {
        return A.call(null, a, b)
      }
      if(new v(null, "else", "else", 1017020587)) {
        if(a ? a.d & 64 || a.pa || (a.d ? 0 : x.call(null, Ta, a)) : x.call(null, Ta, a)) {
          return hc.call(null, a, b, c)
        }
        throw Error([z("nth not supported on this type "), z(Ka.call(null, Ia.call(null, a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.d & 16 || a.Sa)) {
      return A.call(null, a, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(x.call(null, Sa, a)) {
      return A.call(null, a, b)
    }
    if(new v(null, "else", "else", 1017020587)) {
      if(a ? a.d & 64 || a.pa || (a.d ? 0 : x.call(null, Ta, a)) : x.call(null, Ta, a)) {
        return hc.call(null, a, b)
      }
      throw Error([z("nth not supported on this type "), z(Ka.call(null, Ia.call(null, a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.l = a;
  return c
}(), jc = function() {
  function a(a, b, c) {
    return null != a ? a && (a.d & 256 || a.Eb) ? Xa.call(null, a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x.call(null, Wa, a) ? Xa.call(null, a, b, c) : new v(null, "else", "else", 1017020587) ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.d & 256 || a.Eb) ? Xa.call(null, a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x.call(null, Wa, a) ? Xa.call(null, a, b) : null
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.l = a;
  return c
}(), S = function() {
  function a(a, b, c) {
    return null != a ? Ya.call(null, a, b, c) : kc.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, l, m) {
      var q = null;
      3 < arguments.length && (q = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, l, q)
    }
    function c(a, d, f, m) {
      for(;;) {
        if(a = b.call(null, a, d, f), w(m)) {
          d = G.call(null, m), f = cc.call(null, m), m = dc.call(null, m)
        }else {
          return a
        }
      }
    }
    a.k = 3;
    a.f = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var m = G(a);
      a = I(a);
      return c(b, d, m, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h, k) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, f, h);
      default:
        return c.e(b, f, h, N(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.f = c.f;
  b.l = a;
  b.e = c.e;
  return b
}(), lc = function() {
  function a(a, b) {
    return $a.call(null, a, b)
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, f) {
      for(;;) {
        if(a = b.call(null, a, d), w(f)) {
          d = G.call(null, f), f = M.call(null, f)
        }else {
          return a
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = I(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.a = function(a) {
    return a
  };
  b.h = a;
  b.e = c.e;
  return b
}();
function mc(a) {
  var b = "function" == r(a);
  return b ? b : a ? w(w(null) ? null : a.lb) ? !0 : a.Ma ? !1 : x.call(null, Ma, a) : x.call(null, Ma, a)
}
var bc = function nc(b, c) {
  return mc.call(null, b) && !(b ? b.d & 262144 || b.Ac || (b.d ? 0 : x.call(null, jb, b)) : x.call(null, jb, b)) ? nc.call(null, function() {
    "undefined" === typeof Ea && (Ea = function(b, c, h, k) {
      this.g = b;
      this.Na = c;
      this.Vb = h;
      this.Ob = k;
      this.m = 0;
      this.d = 393217
    }, Ea.bb = !0, Ea.ab = "cljs.core/t5240", Ea.Kb = function(b) {
      return D.call(null, b, "cljs.core/t5240")
    }, Ea.prototype.call = function() {
      function b(d, k) {
        d = this;
        var l = null;
        1 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, l)
      }
      function c(b, d) {
        return oc.call(null, b.Na, d)
      }
      b.k = 1;
      b.f = function(b) {
        var d = G(b);
        b = I(b);
        return c(d, b)
      };
      b.e = c;
      return b
    }(), Ea.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, Ea.prototype.h = function() {
      function b(d) {
        var k = null;
        0 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, k)
      }
      function c(b) {
        return oc.call(null, self__.Na, b)
      }
      b.k = 0;
      b.f = function(b) {
        b = F(b);
        return c(b)
      };
      b.e = c;
      return b
    }(), Ea.prototype.lb = !0, Ea.prototype.u = e("Ob"), Ea.prototype.v = function(b, c) {
      return new Ea(this.g, this.Na, this.Vb, c)
    });
    return new Ea(c, b, nc, null)
  }(), c) : kb.call(null, b, c)
};
function pc(a) {
  return(a ? a.d & 131072 || a.Gb || (a.d ? 0 : x.call(null, hb, a)) : x.call(null, hb, a)) ? ib.call(null, a) : null
}
var qc = {}, rc = 0;
function sc(a) {
  for(var b, c = b = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  qc[a] = b;
  rc += 1;
  return b
}
function tc(a) {
  255 < rc && (qc = {}, rc = 0);
  var b = qc[a];
  return"number" === typeof b ? b : sc.call(null, a)
}
function E(a) {
  return a && (a.d & 4194304 || a.uc) ? ob.call(null, a) : "number" === typeof a ? Math.floor(a) % 2147483647 : !0 === a ? 1 : !1 === a ? 0 : "string" === typeof a ? tc.call(null, a) : new v(null, "else", "else", 1017020587) ? ob.call(null, a) : null
}
function uc(a) {
  return null == a || Ha.call(null, F.call(null, a))
}
function vc(a) {
  return null == a ? !1 : a ? a.d & 8 || a.rc ? !0 : a.d ? !1 : x.call(null, Qa, a) : x.call(null, Qa, a)
}
function wc(a) {
  return a ? a.d & 16777216 || a.yc ? !0 : a.d ? !1 : x.call(null, rb, a) : x.call(null, rb, a)
}
function xc(a) {
  return null == a ? !1 : a ? a.d & 1024 || a.vc ? !0 : a.d ? !1 : x.call(null, Za, a) : x.call(null, Za, a)
}
function yc(a) {
  return a ? a.d & 16384 || a.zc ? !0 : a.d ? !1 : x.call(null, db, a) : x.call(null, db, a)
}
function zc(a) {
  return a ? a.m & 512 || a.qc ? !0 : !1 : !1
}
function Ac(a) {
  var b = [];
  Ca(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function Bc(a, b, c, d, f) {
  for(;;) {
    if(0 === f) {
      return c
    }
    c[d] = a[b];
    d += 1;
    f -= 1;
    b += 1
  }
}
function Cc(a, b, c, d, f) {
  b += f - 1;
  for(d += f - 1;;) {
    if(0 === f) {
      return c
    }
    c[d] = a[b];
    d -= 1;
    f -= 1;
    b -= 1
  }
}
function Dc(a) {
  return!0 === a
}
function Ec(a) {
  return null == a ? !1 : a ? a.d & 64 || a.pa ? !0 : a.d ? !1 : x.call(null, Ta, a) : x.call(null, Ta, a)
}
function Fc(a) {
  return w(a) ? !0 : !1
}
function Gc(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(Ia.call(null, a) === Ia.call(null, b)) {
    return a && (a.m & 2048 || a.Pa) ? Db.call(null, a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(new v(null, "else", "else", 1017020587)) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Hc = function() {
  function a(a, b, c, k) {
    for(;;) {
      var l = Gc.call(null, ic.call(null, a, k), ic.call(null, b, k));
      if(0 === l && k + 1 < c) {
        k += 1
      }else {
        return l
      }
    }
  }
  function b(a, b) {
    var h = R.call(null, a), k = R.call(null, b);
    return h < k ? -1 : h > k ? 1 : new v(null, "else", "else", 1017020587) ? c.call(null, a, b, h, 0) : null
  }
  var c = null, c = function(c, f, h, k) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 4:
        return a.call(this, c, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.F = a;
  return c
}(), Q = function() {
  function a(a, b, c) {
    for(c = F.call(null, c);;) {
      if(c) {
        b = a.call(null, b, G.call(null, c));
        if(Qb.call(null)) {
          return Rb.call(null, b)
        }
        c = M.call(null, c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = F.call(null, b);
    return c ? Ic.call(null, a, G.call(null, c), M.call(null, c)) : a.call(null)
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.l = a;
  return c
}(), Ic = function() {
  function a(a, b, c) {
    return c && (c.d & 524288 || c.Ib) ? mb.call(null, c, a, b) : c instanceof Array ? Tb.call(null, c, a, b) : "string" === typeof c ? Tb.call(null, c, a, b) : x.call(null, lb, c) ? mb.call(null, c, a, b) : new v(null, "else", "else", 1017020587) ? Q.call(null, a, b, c) : null
  }
  function b(a, b) {
    return b && (b.d & 524288 || b.Ib) ? mb.call(null, b, a) : b instanceof Array ? Tb.call(null, b, a) : "string" === typeof b ? Tb.call(null, b, a) : x.call(null, lb, b) ? mb.call(null, b, a) : new v(null, "else", "else", 1017020587) ? Q.call(null, a, b) : null
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.l = a;
  return c
}(), Jc = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      return Ic.call(null, a, b + c, d)
    }
    b.k = 2;
    b.f = function(a) {
      var b = G(a);
      a = M(a);
      var c = G(a);
      a = I(a);
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.e(a, d, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = b.f;
  a.Qa = g(0);
  a.a = function(a) {
    return a
  };
  a.h = function(a, b) {
    return a + b
  };
  a.e = b.e;
  return a
}();
function Kc(a) {
  return 0 <= a ? Math.floor.call(null, a) : Math.ceil.call(null, a)
}
function Lc(a, b) {
  return Kc.call(null, (a - a % b) / b)
}
function Mc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function Nc(a, b) {
  for(var c = b, d = F.call(null, a);;) {
    if(d && 0 < c) {
      c -= 1, d = M.call(null, d)
    }else {
      return d
    }
  }
}
var z = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var l = null;
      1 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, l)
    }
    function c(a, d) {
      for(var f = new Da(b.call(null, a)), m = d;;) {
        if(w(m)) {
          f = f.append(b.call(null, G.call(null, m))), m = M.call(null, m)
        }else {
          return f.toString()
        }
      }
    }
    a.k = 1;
    a.f = function(a) {
      var b = G(a);
      a = I(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.f = c.f;
  b.Qa = g("");
  b.a = a;
  b.e = c.e;
  return b
}();
function $b(a, b) {
  return Fc.call(null, wc.call(null, b) ? function() {
    for(var c = F.call(null, a), d = F.call(null, b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(O.call(null, G.call(null, c), G.call(null, d))) {
        c = M.call(null, c), d = M.call(null, d)
      }else {
        return new v(null, "else", "else", 1017020587) ? !1 : null
      }
    }
  }() : null)
}
function Nb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Wb(a) {
  if(F.call(null, a)) {
    var b = E.call(null, G.call(null, a));
    for(a = M.call(null, a);;) {
      if(null == a) {
        return b
      }
      b = Nb.call(null, b, E.call(null, G.call(null, a)));
      a = M.call(null, a)
    }
  }else {
    return 0
  }
}
function Oc(a) {
  var b = 0;
  for(a = F.call(null, a);;) {
    if(a) {
      var c = G.call(null, a), b = (b + (E.call(null, Pc.call(null, c)) ^ E.call(null, Qc.call(null, c)))) % 4503599627370496;
      a = M.call(null, a)
    }else {
      return b
    }
  }
}
function Rc(a, b, c, d, f) {
  this.g = a;
  this.qa = b;
  this.aa = c;
  this.count = d;
  this.j = f;
  this.m = 0;
  this.d = 65937646
}
n = Rc.prototype;
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Wb.call(null, this)
};
n.V = function() {
  return 1 === this.count ? null : this.aa
};
n.w = function(a, b) {
  return new Rc(this.g, b, this, this.count + 1, null)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Q.call(null, b, this)
};
n.H = function(a, b, c) {
  return Q.call(null, b, c, this)
};
n.C = function() {
  return this
};
n.D = e("count");
n.M = e("qa");
n.N = function() {
  return 1 === this.count ? L : this.aa
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new Rc(b, this.qa, this.aa, this.count, this.j)
};
n.u = e("g");
n.A = function() {
  return L
};
function Sc(a) {
  this.g = a;
  this.m = 0;
  this.d = 65937614
}
n = Sc.prototype;
n.r = g(0);
n.V = g(null);
n.w = function(a, b) {
  return new Rc(this.g, b, null, 1, null)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Q.call(null, b, this)
};
n.H = function(a, b, c) {
  return Q.call(null, b, c, this)
};
n.C = g(null);
n.D = g(0);
n.M = g(null);
n.N = function() {
  return L
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new Sc(b)
};
n.u = e("g");
n.A = function() {
  return this
};
var L = new Sc(null);
function Tc(a) {
  return a ? a.d & 134217728 || a.wc ? !0 : a.d ? !1 : x.call(null, sb, a) : x.call(null, sb, a)
}
function Uc(a) {
  return tb.call(null, a)
}
function Vc(a) {
  return Tc.call(null, a) ? Uc.call(null, a) : Ic.call(null, ec, L, a)
}
var Wc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof Pb) {
      b = a.b
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(B.call(null, a)), a = Va.call(null, a)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var f = L;;) {
      if(0 < a) {
        var h = a - 1, f = Ra.call(null, f, b[a - 1]);
        a = h
      }else {
        return f
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = F(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Xc(a, b, c, d) {
  this.g = a;
  this.qa = b;
  this.aa = c;
  this.j = d;
  this.m = 0;
  this.d = 65929452
}
n = Xc.prototype;
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Wb.call(null, this)
};
n.V = function() {
  return null == this.aa ? null : F.call(null, this.aa)
};
n.w = function(a, b) {
  return new Xc(null, b, this, this.j)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Q.call(null, b, this)
};
n.H = function(a, b, c) {
  return Q.call(null, b, c, this)
};
n.C = function() {
  return this
};
n.M = e("qa");
n.N = function() {
  return null == this.aa ? L : this.aa
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new Xc(b, this.qa, this.aa, this.j)
};
n.u = e("g");
n.A = function() {
  return bc.call(null, L, this.g)
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.d & 64 || b.pa)) ? new Xc(null, a, b, null) : new Xc(null, a, F.call(null, b), null)
}
function v(a, b, c, d) {
  this.ha = a;
  this.name = b;
  this.ba = c;
  this.fa = d;
  this.d = 2153775105;
  this.m = 4096
}
n = v.prototype;
n.s = function(a, b) {
  return D.call(null, b, [z(":"), z(this.ba)].join(""))
};
n.Va = e("name");
n.Wa = e("ha");
n.r = function() {
  null == this.fa && (this.fa = Nb.call(null, E.call(null, this.ha), E.call(null, this.name)) + 2654435769);
  return this.fa
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return jc.call(null, c, this);
      case 3:
        return jc.call(null, c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.a = function(a) {
  return jc.call(null, a, this)
};
n.h = function(a, b) {
  return jc.call(null, a, this, b)
};
n.q = function(a, b) {
  return b instanceof v ? this.ba === b.ba : !1
};
n.toString = function() {
  return[z(":"), z(this.ba)].join("")
};
function Yc(a, b) {
  return a === b ? !0 : a instanceof v && b instanceof v ? a.ba === b.ba : !1
}
function Zc(a) {
  if(a && (a.m & 4096 || a.Hb)) {
    return Jb.call(null, a)
  }
  throw Error([z("Doesn't support namespace: "), z(a)].join(""));
}
var ad = function() {
  function a(a, b) {
    return new v(a, b, [z(w(a) ? [z(a), z("/")].join("") : null), z(b)].join(""), null)
  }
  function b(a) {
    if(a instanceof v) {
      return a
    }
    if(a instanceof Ob) {
      return new v(Zc.call(null, a), $c.call(null, a), a.ea, null)
    }
    if("string" === typeof a) {
      var b = a.split("/");
      return 2 === b.length ? new v(b[0], b[1], a, null) : new v(null, b[0], a, null)
    }
    return null
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.h = a;
  return c
}();
function T(a, b, c, d) {
  this.g = a;
  this.ya = b;
  this.p = c;
  this.j = d;
  this.m = 0;
  this.d = 32374988
}
n = T.prototype;
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Wb.call(null, this)
};
n.V = function() {
  qb.call(null, this);
  return null == this.p ? null : M.call(null, this.p)
};
n.w = function(a, b) {
  return P.call(null, b, this)
};
n.toString = function() {
  return Lb.call(null, this)
};
function bd(a) {
  null != a.ya && (a.p = a.ya.call(null), a.ya = null);
  return a.p
}
n.G = function(a, b) {
  return Q.call(null, b, this)
};
n.H = function(a, b, c) {
  return Q.call(null, b, c, this)
};
n.C = function() {
  bd(this);
  if(null == this.p) {
    return null
  }
  for(var a = this.p;;) {
    if(a instanceof T) {
      a = bd(a)
    }else {
      return this.p = a, F.call(null, this.p)
    }
  }
};
n.M = function() {
  qb.call(null, this);
  return null == this.p ? null : G.call(null, this.p)
};
n.N = function() {
  qb.call(null, this);
  return null != this.p ? I.call(null, this.p) : L
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new T(b, this.ya, this.p, this.j)
};
n.u = e("g");
n.A = function() {
  return bc.call(null, L, this.g)
};
function cd(a, b) {
  this.Aa = a;
  this.end = b;
  this.m = 0;
  this.d = 2
}
cd.prototype.D = e("end");
cd.prototype.add = function(a) {
  this.Aa[this.end] = a;
  return this.end += 1
};
cd.prototype.Y = function() {
  var a = new dd(this.Aa, 0, this.end);
  this.Aa = null;
  return a
};
function ed(a) {
  return new cd(Array(a), 0)
}
function dd(a, b, c) {
  this.b = a;
  this.t = b;
  this.end = c;
  this.m = 0;
  this.d = 524306
}
n = dd.prototype;
n.G = function(a, b) {
  return Tb.call(null, this.b, b, this.b[this.t], this.t + 1)
};
n.H = function(a, b, c) {
  return Tb.call(null, this.b, b, c, this.t)
};
n.Oa = function() {
  if(this.t === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new dd(this.b, this.t + 1, this.end)
};
n.T = function(a, b) {
  return this.b[this.t + b]
};
n.U = function(a, b, c) {
  return 0 <= b && b < this.end - this.t ? this.b[this.t + b] : c
};
n.D = function() {
  return this.end - this.t
};
var fd = function() {
  function a(a, b, c) {
    return new dd(a, b, c)
  }
  function b(a, b) {
    return new dd(a, b, a.length)
  }
  function c(a) {
    return new dd(a, 0, a.length)
  }
  var d = null, d = function(d, h, k) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.h = b;
  d.l = a;
  return d
}();
function gd(a, b, c, d) {
  this.Y = a;
  this.W = b;
  this.g = c;
  this.j = d;
  this.d = 31850732;
  this.m = 1536
}
n = gd.prototype;
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Wb.call(null, this)
};
n.V = function() {
  if(1 < Oa.call(null, this.Y)) {
    return new gd(Eb.call(null, this.Y), this.W, this.g, null)
  }
  var a = qb.call(null, this.W);
  return null == a ? null : a
};
n.w = function(a, b) {
  return P.call(null, b, this)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.C = function() {
  return this
};
n.M = function() {
  return A.call(null, this.Y, 0)
};
n.N = function() {
  return 1 < Oa.call(null, this.Y) ? new gd(Eb.call(null, this.Y), this.W, this.g, null) : null == this.W ? L : this.W
};
n.Ea = function() {
  return null == this.W ? null : this.W
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new gd(this.Y, this.W, b, this.j)
};
n.u = e("g");
n.A = function() {
  return bc.call(null, L, this.g)
};
n.Fa = e("Y");
n.Ga = function() {
  return null == this.W ? L : this.W
};
function hd(a, b) {
  return 0 === Oa.call(null, a) ? b : new gd(a, b, null, null)
}
function id(a, b) {
  return a.add(b)
}
function jd(a) {
  return a.Y()
}
function kd(a) {
  return Fb.call(null, a)
}
function ld(a) {
  return Gb.call(null, a)
}
function md(a) {
  for(var b = [];;) {
    if(F.call(null, a)) {
      b.push(G.call(null, a)), a = M.call(null, a)
    }else {
      return b
    }
  }
}
function nd(a, b) {
  if(Ub.call(null, a)) {
    return R.call(null, a)
  }
  for(var c = a, d = b, f = 0;;) {
    if(0 < d && F.call(null, c)) {
      c = M.call(null, c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var pd = function od(b) {
  return null == b ? null : null == M.call(null, b) ? F.call(null, G.call(null, b)) : new v(null, "else", "else", 1017020587) ? P.call(null, G.call(null, b), od.call(null, M.call(null, b))) : null
}, qd = function() {
  function a(a, b) {
    return new T(null, function() {
      var c = F.call(null, a);
      return c ? zc.call(null, c) ? hd.call(null, kd.call(null, c), d.call(null, ld.call(null, c), b)) : P.call(null, G.call(null, c), d.call(null, I.call(null, c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new T(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new T(null, g(null), null, null)
  }
  var d = null, f = function() {
    function a(c, d, f) {
      var h = null;
      2 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, h)
    }
    function b(a, c, f) {
      return function u(a, b) {
        return new T(null, function() {
          var c = F.call(null, a);
          return c ? zc.call(null, c) ? hd.call(null, kd.call(null, c), u.call(null, ld.call(null, c), b)) : P.call(null, G.call(null, c), u.call(null, I.call(null, c), b)) : w(b) ? u.call(null, G.call(null, b), M.call(null, b)) : null
        }, null, null)
      }.call(null, d.call(null, a, c), f)
    }
    a.k = 2;
    a.f = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = I(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), d = function(d, k, l) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, k);
      default:
        return f.e(d, k, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 2;
  d.f = f.f;
  d.Qa = c;
  d.a = b;
  d.h = a;
  d.e = f.e;
  return d
}(), rd = function() {
  function a(a, b, c, d) {
    return P.call(null, a, P.call(null, b, P.call(null, c, d)))
  }
  function b(a, b, c) {
    return P.call(null, a, P.call(null, b, c))
  }
  function c(a, b) {
    return P.call(null, a, b)
  }
  function d(a) {
    return F.call(null, a)
  }
  var f = null, h = function() {
    function a(c, d, f, h, k) {
      var K = null;
      4 < arguments.length && (K = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, h, K)
    }
    function b(a, c, d, f, h) {
      return P.call(null, a, P.call(null, c, P.call(null, d, P.call(null, f, pd.call(null, h)))))
    }
    a.k = 4;
    a.f = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var f = G(a);
      a = M(a);
      var h = G(a);
      a = I(a);
      return b(c, d, f, h, a)
    };
    a.e = b;
    return a
  }(), f = function(f, l, m, q, s) {
    switch(arguments.length) {
      case 1:
        return d.call(this, f);
      case 2:
        return c.call(this, f, l);
      case 3:
        return b.call(this, f, l, m);
      case 4:
        return a.call(this, f, l, m, q);
      default:
        return h.e(f, l, m, q, N(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.k = 4;
  f.f = h.f;
  f.a = d;
  f.h = c;
  f.l = b;
  f.F = a;
  f.e = h.e;
  return f
}();
function sd(a) {
  return yb.call(null, a)
}
function td(a) {
  return Ab.call(null, a)
}
function ud(a, b) {
  return zb.call(null, a, b)
}
function vd(a, b, c) {
  return Bb.call(null, a, b, c)
}
function wd(a, b, c) {
  var d = F.call(null, c);
  if(0 === b) {
    return a.call(null)
  }
  c = B.call(null, d);
  var f = C.call(null, d);
  if(1 === b) {
    return a.a ? a.a(c) : a.call(null, c)
  }
  var d = B.call(null, f), h = C.call(null, f);
  if(2 === b) {
    return a.h ? a.h(c, d) : a.call(null, c, d)
  }
  var f = B.call(null, h), k = C.call(null, h);
  if(3 === b) {
    return a.l ? a.l(c, d, f) : a.call(null, c, d, f)
  }
  var h = B.call(null, k), l = C.call(null, k);
  if(4 === b) {
    return a.F ? a.F(c, d, f, h) : a.call(null, c, d, f, h)
  }
  k = B.call(null, l);
  l = C.call(null, l);
  if(5 === b) {
    return a.oa ? a.oa(c, d, f, h, k) : a.call(null, c, d, f, h, k)
  }
  a = B.call(null, l);
  var m = C.call(null, l);
  if(6 === b) {
    return a.Ia ? a.Ia(c, d, f, h, k, a) : a.call(null, c, d, f, h, k, a)
  }
  var l = B.call(null, m), q = C.call(null, m);
  if(7 === b) {
    return a.Ra ? a.Ra(c, d, f, h, k, a, l) : a.call(null, c, d, f, h, k, a, l)
  }
  var m = B.call(null, q), s = C.call(null, q);
  if(8 === b) {
    return a.Cb ? a.Cb(c, d, f, h, k, a, l, m) : a.call(null, c, d, f, h, k, a, l, m)
  }
  var q = B.call(null, s), u = C.call(null, s);
  if(9 === b) {
    return a.Db ? a.Db(c, d, f, h, k, a, l, m, q) : a.call(null, c, d, f, h, k, a, l, m, q)
  }
  var s = B.call(null, u), J = C.call(null, u);
  if(10 === b) {
    return a.rb ? a.rb(c, d, f, h, k, a, l, m, q, s) : a.call(null, c, d, f, h, k, a, l, m, q, s)
  }
  var u = B.call(null, J), K = C.call(null, J);
  if(11 === b) {
    return a.sb ? a.sb(c, d, f, h, k, a, l, m, q, s, u) : a.call(null, c, d, f, h, k, a, l, m, q, s, u)
  }
  var J = B.call(null, K), H = C.call(null, K);
  if(12 === b) {
    return a.tb ? a.tb(c, d, f, h, k, a, l, m, q, s, u, J) : a.call(null, c, d, f, h, k, a, l, m, q, s, u, J)
  }
  var K = B.call(null, H), $ = C.call(null, H);
  if(13 === b) {
    return a.ub ? a.ub(c, d, f, h, k, a, l, m, q, s, u, J, K) : a.call(null, c, d, f, h, k, a, l, m, q, s, u, J, K)
  }
  var H = B.call(null, $), la = C.call(null, $);
  if(14 === b) {
    return a.vb ? a.vb(c, d, f, h, k, a, l, m, q, s, u, J, K, H) : a.call(null, c, d, f, h, k, a, l, m, q, s, u, J, K, H)
  }
  var $ = B.call(null, la), ya = C.call(null, la);
  if(15 === b) {
    return a.wb ? a.wb(c, d, f, h, k, a, l, m, q, s, u, J, K, H, $) : a.call(null, c, d, f, h, k, a, l, m, q, s, u, J, K, H, $)
  }
  var la = B.call(null, ya), Ja = C.call(null, ya);
  if(16 === b) {
    return a.xb ? a.xb(c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la) : a.call(null, c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la)
  }
  var ya = B.call(null, Ja), eb = C.call(null, Ja);
  if(17 === b) {
    return a.yb ? a.yb(c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la, ya) : a.call(null, c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la, ya)
  }
  var Ja = B.call(null, eb), Yb = C.call(null, eb);
  if(18 === b) {
    return a.zb ? a.zb(c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la, ya, Ja) : a.call(null, c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la, ya, Ja)
  }
  eb = B.call(null, Yb);
  Yb = C.call(null, Yb);
  if(19 === b) {
    return a.Ab ? a.Ab(c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la, ya, Ja, eb) : a.call(null, c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la, ya, Ja, eb)
  }
  var Zb = B.call(null, Yb);
  C.call(null, Yb);
  if(20 === b) {
    return a.Bb ? a.Bb(c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la, ya, Ja, eb, Zb) : a.call(null, c, d, f, h, k, a, l, m, q, s, u, J, K, H, $, la, ya, Ja, eb, Zb)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var oc = function() {
  function a(a, b, c, d, f) {
    b = rd.call(null, b, c, d, f);
    c = a.k;
    return a.f ? (d = nd.call(null, b, c + 1), d <= c ? wd.call(null, a, d, b) : a.f(b)) : a.apply(a, md.call(null, b))
  }
  function b(a, b, c, d) {
    b = rd.call(null, b, c, d);
    c = a.k;
    return a.f ? (d = nd.call(null, b, c + 1), d <= c ? wd.call(null, a, d, b) : a.f(b)) : a.apply(a, md.call(null, b))
  }
  function c(a, b, c) {
    b = rd.call(null, b, c);
    c = a.k;
    if(a.f) {
      var d = nd.call(null, b, c + 1);
      return d <= c ? wd.call(null, a, d, b) : a.f(b)
    }
    return a.apply(a, md.call(null, b))
  }
  function d(a, b) {
    var c = a.k;
    if(a.f) {
      var d = nd.call(null, b, c + 1);
      return d <= c ? wd.call(null, a, d, b) : a.f(b)
    }
    return a.apply(a, md.call(null, b))
  }
  var f = null, h = function() {
    function a(c, d, f, h, k, K) {
      var H = null;
      5 < arguments.length && (H = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, k, H)
    }
    function b(a, c, d, f, h, k) {
      c = P.call(null, c, P.call(null, d, P.call(null, f, P.call(null, h, pd.call(null, k)))));
      d = a.k;
      return a.f ? (f = nd.call(null, c, d + 1), f <= d ? wd.call(null, a, f, c) : a.f(c)) : a.apply(a, md.call(null, c))
    }
    a.k = 5;
    a.f = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var f = G(a);
      a = M(a);
      var h = G(a);
      a = M(a);
      var k = G(a);
      a = I(a);
      return b(c, d, f, h, k, a)
    };
    a.e = b;
    return a
  }(), f = function(f, l, m, q, s, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, l);
      case 3:
        return c.call(this, f, l, m);
      case 4:
        return b.call(this, f, l, m, q);
      case 5:
        return a.call(this, f, l, m, q, s);
      default:
        return h.e(f, l, m, q, s, N(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.k = 5;
  f.f = h.f;
  f.h = d;
  f.l = c;
  f.F = b;
  f.oa = a;
  f.e = h.e;
  return f
}();
function xd(a, b) {
  for(;;) {
    if(null == F.call(null, b)) {
      return!0
    }
    if(w(a.call(null, G.call(null, b)))) {
      var c = a, d = M.call(null, b);
      a = c;
      b = d
    }else {
      return new v(null, "else", "else", 1017020587) ? !1 : null
    }
  }
}
function yd(a, b) {
  for(;;) {
    if(F.call(null, b)) {
      var c = a.call(null, G.call(null, b));
      if(w(c)) {
        return c
      }
      var c = a, d = M.call(null, b);
      a = c;
      b = d
    }else {
      return null
    }
  }
}
function zd(a) {
  return a
}
function Ad(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, l) {
        var m = null;
        2 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, m)
      }
      function c(b, d, f) {
        return Ha.call(null, oc.call(null, a, b, d, f))
      }
      b.k = 2;
      b.f = function(a) {
        var b = G(a);
        a = M(a);
        var d = G(a);
        a = I(a);
        return c(b, d, a)
      };
      b.e = c;
      return b
    }(), b = function(b, f, h) {
      switch(arguments.length) {
        case 0:
          return Ha.call(null, a.call(null));
        case 1:
          return Ha.call(null, a.call(null, b));
        case 2:
          return Ha.call(null, a.call(null, b, f));
        default:
          return c.e(b, f, N(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.k = 2;
    b.f = c.f;
    return b
  }()
}
function Bd(a, b) {
  return function d(b, h) {
    return new T(null, function() {
      var k = F.call(null, h);
      if(k) {
        if(zc.call(null, k)) {
          for(var l = kd.call(null, k), m = R.call(null, l), q = ed.call(null, m), s = 0;;) {
            if(s < m) {
              id.call(null, q, a.call(null, b + s, A.call(null, l, s))), s += 1
            }else {
              break
            }
          }
          return hd.call(null, jd.call(null, q), d.call(null, b + m, ld.call(null, k)))
        }
        return P.call(null, a.call(null, b, G.call(null, k)), d.call(null, b + 1, I.call(null, k)))
      }
      return null
    }, null, null)
  }.call(null, 0, b)
}
var U = function() {
  function a(a, b, c, f) {
    return new T(null, function() {
      var q = F.call(null, b), s = F.call(null, c), u = F.call(null, f);
      return q && s && u ? P.call(null, a.call(null, G.call(null, q), G.call(null, s), G.call(null, u)), d.call(null, a, I.call(null, q), I.call(null, s), I.call(null, u))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new T(null, function() {
      var f = F.call(null, b), q = F.call(null, c);
      return f && q ? P.call(null, a.call(null, G.call(null, f), G.call(null, q)), d.call(null, a, I.call(null, f), I.call(null, q))) : null
    }, null, null)
  }
  function c(a, b) {
    return new T(null, function() {
      var c = F.call(null, b);
      if(c) {
        if(zc.call(null, c)) {
          for(var f = kd.call(null, c), q = R.call(null, f), s = ed.call(null, q), u = 0;;) {
            if(u < q) {
              id.call(null, s, a.call(null, A.call(null, f, u))), u += 1
            }else {
              break
            }
          }
          return hd.call(null, jd.call(null, s), d.call(null, a, ld.call(null, c)))
        }
        return P.call(null, a.call(null, G.call(null, c)), d.call(null, a, I.call(null, c)))
      }
      return null
    }, null, null)
  }
  var d = null, f = function() {
    function a(c, d, f, h, u) {
      var J = null;
      4 < arguments.length && (J = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, h, J)
    }
    function b(a, c, f, h, k) {
      return d.call(null, function(b) {
        return oc.call(null, a, b)
      }, function K(a) {
        return new T(null, function() {
          var b = d.call(null, F, a);
          return xd.call(null, zd, b) ? P.call(null, d.call(null, G, b), K.call(null, d.call(null, I, b))) : null
        }, null, null)
      }.call(null, ec.call(null, k, h, f, c)))
    }
    a.k = 4;
    a.f = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var f = G(a);
      a = M(a);
      var h = G(a);
      a = I(a);
      return b(c, d, f, h, a)
    };
    a.e = b;
    return a
  }(), d = function(d, k, l, m, q) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, k);
      case 3:
        return b.call(this, d, k, l);
      case 4:
        return a.call(this, d, k, l, m);
      default:
        return f.e(d, k, l, m, N(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.f = f.f;
  d.h = c;
  d.l = b;
  d.F = a;
  d.e = f.e;
  return d
}(), Dd = function Cd(b, c) {
  return new T(null, function() {
    if(0 < b) {
      var d = F.call(null, c);
      return d ? P.call(null, G.call(null, d), Cd.call(null, b - 1, I.call(null, d))) : null
    }
    return null
  }, null, null)
};
function Ed(a, b) {
  function c(a, b) {
    for(;;) {
      var c = F.call(null, b);
      if(0 < a && c) {
        var k = a - 1, c = I.call(null, c);
        a = k;
        b = c
      }else {
        return c
      }
    }
  }
  return new T(null, function() {
    return c.call(null, a, b)
  }, null, null)
}
var Fd = function() {
  function a(a, b) {
    return Dd.call(null, a, c.call(null, b))
  }
  function b(a) {
    return new T(null, function() {
      return P.call(null, a, c.call(null, a))
    }, null, null)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.h = a;
  return c
}();
function Gd(a) {
  return function c(a, f) {
    return new T(null, function() {
      var h = F.call(null, a);
      return h ? P.call(null, G.call(null, h), c.call(null, I.call(null, h), f)) : F.call(null, f) ? c.call(null, G.call(null, f), I.call(null, f)) : null
    }, null, null)
  }.call(null, null, a)
}
var Hd = function() {
  function a(a, b) {
    return Gd.call(null, U.call(null, a, b))
  }
  var b = null, c = function() {
    function a(c, d, l) {
      var m = null;
      2 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, m)
    }
    function b(a, c, d) {
      return Gd.call(null, oc.call(null, U, a, c, d))
    }
    a.k = 2;
    a.f = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = I(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.h = a;
  b.e = c.e;
  return b
}(), Jd = function Id(b, c) {
  return new T(null, function() {
    var d = F.call(null, c);
    if(d) {
      if(zc.call(null, d)) {
        for(var f = kd.call(null, d), h = R.call(null, f), k = ed.call(null, h), l = 0;;) {
          if(l < h) {
            w(b.call(null, A.call(null, f, l))) && id.call(null, k, A.call(null, f, l)), l += 1
          }else {
            break
          }
        }
        return hd.call(null, jd.call(null, k), Id.call(null, b, ld.call(null, d)))
      }
      f = G.call(null, d);
      d = I.call(null, d);
      return w(b.call(null, f)) ? P.call(null, f, Id.call(null, b, d)) : Id.call(null, b, d)
    }
    return null
  }, null, null)
};
function Kd(a, b) {
  return Jd.call(null, Ad.call(null, a), b)
}
function Ld(a, b, c) {
  return function f(c) {
    return new T(null, function() {
      return P.call(null, c, w(a.call(null, c)) ? Hd.call(null, f, b.call(null, c)) : null)
    }, null, null)
  }.call(null, c)
}
function Md(a) {
  return Jd.call(null, function(a) {
    return!wc.call(null, a)
  }, I.call(null, Ld.call(null, wc, F, a)))
}
function Nd(a, b) {
  return null != a ? a && (a.m & 4 || a.sc) ? td.call(null, Ic.call(null, zb, sd.call(null, a), b)) : Ic.call(null, Ra, a, b) : Ic.call(null, ec, L, b)
}
var Od = function() {
  function a(a, b, c, l) {
    return new T(null, function() {
      var m = F.call(null, l);
      if(m) {
        var q = Dd.call(null, a, m);
        return a === R.call(null, q) ? P.call(null, q, d.call(null, a, b, c, Ed.call(null, b, m))) : Ra.call(null, L, Dd.call(null, a, qd.call(null, q, c)))
      }
      return null
    }, null, null)
  }
  function b(a, b, c) {
    return new T(null, function() {
      var l = F.call(null, c);
      if(l) {
        var m = Dd.call(null, a, l);
        return a === R.call(null, m) ? P.call(null, m, d.call(null, a, b, Ed.call(null, b, l))) : null
      }
      return null
    }, null, null)
  }
  function c(a, b) {
    return d.call(null, a, a, b)
  }
  var d = null, d = function(d, h, k, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.l = b;
  d.F = a;
  return d
}(), Qd = function Pd(b, c, d) {
  var f = ic.call(null, c, 0, null);
  c = Nc.call(null, c, 1);
  return w(c) ? S.call(null, b, f, Pd.call(null, jc.call(null, b, f), c, d)) : S.call(null, b, f, d)
};
function Rd(a, b) {
  this.n = a;
  this.b = b
}
function Sd(a) {
  return new Rd(a, Array(32))
}
function Td(a, b) {
  return a.b[b]
}
function Ud(a, b, c) {
  return a.b[b] = c
}
function Vd(a) {
  return new Rd(a.n, a.b.slice())
}
function Wd(a) {
  a = a.c;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Xd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = Sd.call(null, a);
    Ud.call(null, d, 0, c);
    c = d;
    b -= 5
  }
}
var Zd = function Yd(b, c, d, f) {
  var h = Vd.call(null, d), k = b.c - 1 >>> c & 31;
  5 === c ? Ud.call(null, h, k, f) : (d = Td.call(null, d, k), b = null != d ? Yd.call(null, b, c - 5, d, f) : Xd.call(null, null, c - 5, f), Ud.call(null, h, k, b));
  return h
};
function $d(a, b) {
  throw Error([z("No item "), z(a), z(" in vector of length "), z(b)].join(""));
}
function ae(a, b) {
  if(0 <= b && b < a.c) {
    if(b >= Wd.call(null, a)) {
      return a.J
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = Td.call(null, c, b >>> d & 31), d = f
      }else {
        return c.b
      }
    }
  }else {
    return $d.call(null, b, a.c)
  }
}
var ce = function be(b, c, d, f, h) {
  var k = Vd.call(null, d);
  if(0 === c) {
    Ud.call(null, k, f & 31, h)
  }else {
    var l = f >>> c & 31;
    Ud.call(null, k, l, be.call(null, b, c - 5, Td.call(null, d, l), f, h))
  }
  return k
};
function de(a, b, c, d, f, h) {
  this.g = a;
  this.c = b;
  this.shift = c;
  this.root = d;
  this.J = f;
  this.j = h;
  this.m = 4;
  this.d = 167668511
}
n = de.prototype;
n.ua = function() {
  return new ee(this.c, this.shift, fe.call(null, this.root), ge.call(null, this.J))
};
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Wb.call(null, this)
};
n.K = function(a, b) {
  return A.call(null, this, b, null)
};
n.L = function(a, b, c) {
  return A.call(null, this, b, c)
};
n.na = function(a, b, c) {
  if(0 <= b && b < this.c) {
    return Wd.call(null, this) <= b ? (a = this.J.slice(), a[b & 31] = c, new de(this.g, this.c, this.shift, this.root, a, null)) : new de(this.g, this.c, this.shift, ce.call(null, this, this.shift, this.root, b, c), this.J, null)
  }
  if(b === this.c) {
    return Ra.call(null, this, c)
  }
  if(new v(null, "else", "else", 1017020587)) {
    throw Error([z("Index "), z(b), z(" out of bounds  [0,"), z(this.c), z("]")].join(""));
  }
  return null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.T(null, c);
      case 3:
        return this.U(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.a = function(a) {
  return this.T(null, a)
};
n.h = function(a, b) {
  return this.U(null, a, b)
};
n.w = function(a, b) {
  if(32 > this.c - Wd.call(null, this)) {
    var c = this.J.slice();
    c.push(b);
    return new de(this.g, this.c + 1, this.shift, this.root, c, null)
  }
  var d = this.c >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  d ? (d = Sd.call(null, null), Ud.call(null, d, 0, this.root), Ud.call(null, d, 1, Xd.call(null, null, this.shift, new Rd(null, this.J)))) : d = Zd.call(null, this, this.shift, this.root, new Rd(null, this.J));
  return new de(this.g, this.c + 1, c, d, [b], null)
};
n.Ka = function() {
  return 0 < this.c ? new Xb(this, this.c - 1, null) : null
};
n.Ta = function() {
  return A.call(null, this, 0)
};
n.Ua = function() {
  return A.call(null, this, 1)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Sb.call(null, this, b)
};
n.H = function(a, b, c) {
  return Sb.call(null, this, b, c)
};
n.C = function() {
  return 0 === this.c ? null : 32 > this.c ? N.call(null, this.J) : new v(null, "else", "else", 1017020587) ? he.call(null, this, 0, 0) : null
};
n.D = e("c");
n.La = function(a, b, c) {
  return Ya.call(null, this, b, c)
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new de(b, this.c, this.shift, this.root, this.J, this.j)
};
n.u = e("g");
n.T = function(a, b) {
  return ae.call(null, this, b)[b & 31]
};
n.U = function(a, b, c) {
  return 0 <= b && b < this.c ? A.call(null, this, b) : c
};
n.A = function() {
  return bc.call(null, ie, this.g)
};
var je = new Rd(null, Array(32)), ie = new de(null, 0, 5, je, [], 0);
function V(a, b) {
  var c = a.length, d = b ? a : a.slice();
  if(32 > c) {
    return new de(null, c, 5, je, d, null)
  }
  for(var f = d.slice(0, 32), h = 32, k = yb.call(null, new de(null, 32, 5, je, f, null));;) {
    if(h < c) {
      f = h + 1, k = ud.call(null, k, d[h]), h = f
    }else {
      return td.call(null, k)
    }
  }
}
function ke(a) {
  return Ab.call(null, Ic.call(null, zb, yb.call(null, ie), a))
}
var le = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return a instanceof Pb ? V.call(null, a.b, !0) : ke.call(null, a)
  }
  a.k = 0;
  a.f = function(a) {
    a = F(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function me(a, b, c, d, f, h) {
  this.S = a;
  this.$ = b;
  this.i = c;
  this.t = d;
  this.g = f;
  this.j = h;
  this.d = 32243948;
  this.m = 1536
}
n = me.prototype;
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Wb.call(null, this)
};
n.V = function() {
  if(this.t + 1 < this.$.length) {
    var a = he.call(null, this.S, this.$, this.i, this.t + 1);
    return null == a ? null : a
  }
  return Hb.call(null, this)
};
n.w = function(a, b) {
  return P.call(null, b, this)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Sb.call(null, ne.call(null, this.S, this.i + this.t, R.call(null, this.S)), b)
};
n.H = function(a, b, c) {
  return Sb.call(null, ne.call(null, this.S, this.i + this.t, R.call(null, this.S)), b, c)
};
n.C = function() {
  return this
};
n.M = function() {
  return this.$[this.t]
};
n.N = function() {
  if(this.t + 1 < this.$.length) {
    var a = he.call(null, this.S, this.$, this.i, this.t + 1);
    return null == a ? L : a
  }
  return Gb.call(null, this)
};
n.Ea = function() {
  var a = this.$.length, a = this.i + a < Oa.call(null, this.S) ? he.call(null, this.S, this.i + a, 0) : null;
  return null == a ? null : a
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return he.call(null, this.S, this.$, this.i, this.t, b)
};
n.A = function() {
  return bc.call(null, ie, this.g)
};
n.Fa = function() {
  return fd.call(null, this.$, this.t)
};
n.Ga = function() {
  var a = this.$.length, a = this.i + a < Oa.call(null, this.S) ? he.call(null, this.S, this.i + a, 0) : null;
  return null == a ? L : a
};
var he = function() {
  function a(a, b, c, d, m) {
    return new me(a, b, c, d, m, null)
  }
  function b(a, b, c, d) {
    return new me(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new me(a, ae.call(null, a, b), b, c, null, null)
  }
  var d = null, d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, k);
      case 4:
        return b.call(this, d, h, k, l);
      case 5:
        return a.call(this, d, h, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = c;
  d.F = b;
  d.oa = a;
  return d
}();
function oe(a, b, c, d, f) {
  this.g = a;
  this.ia = b;
  this.start = c;
  this.end = d;
  this.j = f;
  this.m = 0;
  this.d = 32400159
}
n = oe.prototype;
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Wb.call(null, this)
};
n.K = function(a, b) {
  return A.call(null, this, b, null)
};
n.L = function(a, b, c) {
  return A.call(null, this, b, c)
};
n.na = function(a, b, c) {
  var d = this, f = d.start + b;
  return pe.call(null, d.g, S.call(null, d.ia, f, c), d.start, function() {
    var a = d.end, b = f + 1;
    return a > b ? a : b
  }(), null)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.T(null, c);
      case 3:
        return this.U(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.a = function(a) {
  return this.T(null, a)
};
n.h = function(a, b) {
  return this.U(null, a, b)
};
n.w = function(a, b) {
  return pe.call(null, this.g, fb.call(null, this.ia, this.end, b), this.start, this.end + 1, null)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Sb.call(null, this, b)
};
n.H = function(a, b, c) {
  return Sb.call(null, this, b, c)
};
n.C = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : P.call(null, A.call(null, a.ia, d), new T(null, function() {
      return c.call(null, d + 1)
    }, null, null))
  }.call(null, a.start)
};
n.D = function() {
  return this.end - this.start
};
n.La = function(a, b, c) {
  return Ya.call(null, this, b, c)
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return pe.call(null, b, this.ia, this.start, this.end, this.j)
};
n.u = e("g");
n.T = function(a, b) {
  return 0 > b || this.end <= this.start + b ? $d.call(null, b, this.end - this.start) : A.call(null, this.ia, this.start + b)
};
n.U = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.call(null, this.ia, this.start + b, c)
};
n.A = function() {
  return bc.call(null, ie, this.g)
};
function pe(a, b, c, d, f) {
  for(;;) {
    if(b instanceof oe) {
      c = b.start + c, d = b.start + d, b = b.ia
    }else {
      var h = R.call(null, b);
      if(0 > c || 0 > d || c > h || d > h) {
        throw Error("Index out of bounds");
      }
      return new oe(a, b, c, d, f)
    }
  }
}
var ne = function() {
  function a(a, b, c) {
    return pe.call(null, null, a, b, c, null)
  }
  function b(a, b) {
    return c.call(null, a, b, R.call(null, a))
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.l = a;
  return c
}();
function qe(a, b) {
  return a === b.n ? b : new Rd(a, b.b.slice())
}
function fe(a) {
  return new Rd({}, a.b.slice())
}
function ge(a) {
  var b = Array(32);
  Bc.call(null, a, 0, b, 0, a.length);
  return b
}
var se = function re(b, c, d, f) {
  var h = qe.call(null, b.root.n, d), k = b.c - 1 >>> c & 31;
  Ud.call(null, h, k, 5 === c ? f : function() {
    var d = Td.call(null, h, k);
    return null != d ? re.call(null, b, c - 5, d, f) : Xd.call(null, b.root.n, c - 5, f)
  }());
  return h
};
function ee(a, b, c, d) {
  this.c = a;
  this.shift = b;
  this.root = c;
  this.J = d;
  this.d = 275;
  this.m = 88
}
n = ee.prototype;
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.a = function(a) {
  return this.K(null, a)
};
n.h = function(a, b) {
  return this.L(null, a, b)
};
n.K = function(a, b) {
  return A.call(null, this, b, null)
};
n.L = function(a, b, c) {
  return A.call(null, this, b, c)
};
n.T = function(a, b) {
  if(this.root.n) {
    return ae.call(null, this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
n.U = function(a, b, c) {
  return 0 <= b && b < this.c ? A.call(null, this, b) : c
};
n.D = function() {
  if(this.root.n) {
    return this.c
  }
  throw Error("count after persistent!");
};
n.Ya = function(a, b, c) {
  var d = this;
  if(d.root.n) {
    if(0 <= b && b < d.c) {
      return Wd.call(null, this) <= b ? d.J[b & 31] = c : (a = function h(a, l) {
        var m = qe.call(null, d.root.n, l);
        if(0 === a) {
          Ud.call(null, m, b & 31, c)
        }else {
          var q = b >>> a & 31;
          Ud.call(null, m, q, h.call(null, a - 5, Td.call(null, m, q)))
        }
        return m
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.c) {
      return zb.call(null, this, c)
    }
    if(new v(null, "else", "else", 1017020587)) {
      throw Error([z("Index "), z(b), z(" out of bounds for TransientVector of length"), z(d.c)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
n.va = function(a, b, c) {
  return Cb.call(null, this, b, c)
};
n.wa = function(a, b) {
  if(this.root.n) {
    if(32 > this.c - Wd.call(null, this)) {
      this.J[this.c & 31] = b
    }else {
      var c = new Rd(this.root.n, this.J), d = Array(32);
      d[0] = b;
      this.J = d;
      if(this.c >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Xd.call(null, this.root.n, this.shift, c);
        this.root = new Rd(this.root.n, d);
        this.shift = f
      }else {
        this.root = se.call(null, this, this.shift, this.root, c)
      }
    }
    this.c += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
n.xa = function() {
  if(this.root.n) {
    this.root.n = null;
    var a = this.c - Wd.call(null, this), b = Array(a);
    Bc.call(null, this.J, 0, b, 0, a);
    return new de(null, this.c, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function te() {
  this.m = 0;
  this.d = 2097152
}
te.prototype.q = g(!1);
var ue = new te;
function ve(a, b) {
  return Fc.call(null, xc.call(null, b) ? R.call(null, a) === R.call(null, b) ? xd.call(null, zd, U.call(null, function(a) {
    return O.call(null, jc.call(null, b, G.call(null, a), ue), cc.call(null, a))
  }, a)) : null : null)
}
function we(a) {
  for(var b = a.length, c = 0;;) {
    if(b <= c) {
      return-1
    }
    if(null == a[c]) {
      return c
    }
    if(new v(null, "else", "else", 1017020587)) {
      c += 2
    }else {
      return null
    }
  }
}
function xe(a, b, c) {
  b = a.length;
  c = c.ba;
  for(var d = 0;;) {
    if(b <= d) {
      return-1
    }
    var f = a[d];
    if(f instanceof v && c === f.ba) {
      return d
    }
    if(new v(null, "else", "else", 1017020587)) {
      d += 2
    }else {
      return null
    }
  }
}
function ye(a, b, c) {
  b = a.length;
  c = c.ea;
  for(var d = 0;;) {
    if(b <= d) {
      return-1
    }
    var f = a[d];
    if(f instanceof Ob && c === f.ea) {
      return d
    }
    if(new v(null, "else", "else", 1017020587)) {
      d += 2
    }else {
      return null
    }
  }
}
function ze(a, b, c) {
  b = a.length;
  for(var d = 0;;) {
    if(b <= d) {
      return-1
    }
    if(c === a[d]) {
      return d
    }
    if(new v(null, "else", "else", 1017020587)) {
      d += 2
    }else {
      return null
    }
  }
}
function Ae(a, b, c) {
  b = a.length;
  for(var d = 0;;) {
    if(b <= d) {
      return-1
    }
    if(O.call(null, c, a[d])) {
      return d
    }
    if(new v(null, "else", "else", 1017020587)) {
      d += 2
    }else {
      return null
    }
  }
}
function Be(a, b) {
  var c = a.b;
  return b instanceof v ? xe.call(null, c, 0, b) : ba(b) || "number" === typeof b ? ze.call(null, c, 0, b) : b instanceof Ob ? ye.call(null, c, 0, b) : null == b ? we.call(null, c) : new v(null, "else", "else", 1017020587) ? Ae.call(null, c, 0, b) : null
}
function Ce(a, b, c) {
  a = a.b;
  for(var d = a.length, f = Array(d + 2), h = 0;;) {
    if(h < d) {
      f[h] = a[h], h += 1
    }else {
      break
    }
  }
  f[d] = b;
  f[d + 1] = c;
  return f
}
function De(a, b, c) {
  this.b = a;
  this.i = b;
  this.P = c;
  this.m = 0;
  this.d = 32374990
}
n = De.prototype;
n.r = function() {
  return Wb.call(null, this)
};
n.V = function() {
  return this.i < this.b.length - 2 ? new De(this.b, this.i + 2, this.P) : null
};
n.w = function(a, b) {
  return P.call(null, b, this)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Q.call(null, b, this)
};
n.H = function(a, b, c) {
  return Q.call(null, b, c, this)
};
n.C = function() {
  return this
};
n.D = function() {
  return(this.b.length - this.i) / 2
};
n.M = function() {
  return V([this.b[this.i], this.b[this.i + 1]], !0)
};
n.N = function() {
  return this.i < this.b.length - 2 ? new De(this.b, this.i + 2, this.P) : L
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new De(this.b, this.i, b)
};
n.u = e("P");
n.A = function() {
  return bc.call(null, L, this.P)
};
function Ee(a, b, c) {
  return b <= a.length - 2 ? new De(a, b, c) : null
}
function Fe(a, b, c, d) {
  this.g = a;
  this.c = b;
  this.b = c;
  this.j = d;
  this.m = 4;
  this.d = 16123663
}
n = Fe.prototype;
n.ua = function() {
  return new Ge({}, this.b.length, this.b.slice())
};
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Oc.call(null, this)
};
n.K = function(a, b) {
  return Xa.call(null, this, b, null)
};
n.L = function(a, b, c) {
  a = Be.call(null, this, b);
  return-1 === a ? c : this.b[a + 1]
};
n.na = function(a, b, c) {
  a = Be.call(null, this, b);
  return-1 === a ? this.c < He ? (c = Ce.call(null, this, b, c), new Fe(this.g, this.c + 1, c, null)) : kb.call(null, Ya.call(null, Nd.call(null, Ie, this), b, c), this.g) : c === this.b[a + 1] ? this : new v(null, "else", "else", 1017020587) ? (b = this.b.slice(), b[a + 1] = c, new Fe(this.g, this.c, b, null)) : null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.a = function(a) {
  return this.K(null, a)
};
n.h = function(a, b) {
  return this.L(null, a, b)
};
n.w = function(a, b) {
  return yc.call(null, b) ? Ya.call(null, this, A.call(null, b, 0), A.call(null, b, 1)) : Ic.call(null, Ra, this, b)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.C = function() {
  return Ee.call(null, this.b, 0, null)
};
n.D = e("c");
n.q = function(a, b) {
  return ve.call(null, this, b)
};
n.v = function(a, b) {
  return new Fe(b, this.c, this.b, this.j)
};
n.u = e("g");
n.A = function() {
  return kb.call(null, W, this.g)
};
n.Ja = function(a, b) {
  if(0 <= Be.call(null, this, b)) {
    var c = this.b.length, d = c - 2;
    if(0 === d) {
      return Pa.call(null, this)
    }
    for(var d = Array(d), f = 0, h = 0;;) {
      if(f >= c) {
        return new Fe(this.g, this.c - 1, d, null)
      }
      if(O.call(null, b, this.b[f])) {
        f += 2
      }else {
        if(new v(null, "else", "else", 1017020587)) {
          d[h] = this.b[f], d[h + 1] = this.b[f + 1], h += 2, f += 2
        }else {
          return null
        }
      }
    }
  }else {
    return this
  }
};
var W = new Fe(null, 0, [], null), He = 8;
function t(a) {
  return new Fe(null, a.length / 2, a, null)
}
function Ge(a, b, c) {
  this.ja = a;
  this.la = b;
  this.b = c;
  this.m = 56;
  this.d = 258
}
n = Ge.prototype;
n.va = function(a, b, c) {
  if(w(this.ja)) {
    a = Be.call(null, this, b);
    if(-1 === a) {
      return this.la + 2 <= 2 * He ? (this.la += 2, this.b.push(b), this.b.push(c), this) : vd.call(null, Je.call(null, this.la, this.b), b, c)
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
n.wa = function(a, b) {
  if(w(this.ja)) {
    if(b ? b.d & 2048 || b.Fb || (b.d ? 0 : x.call(null, ab, b)) : x.call(null, ab, b)) {
      return Bb.call(null, this, Pc.call(null, b), Qc.call(null, b))
    }
    for(var c = F.call(null, b), d = this;;) {
      var f = G.call(null, c);
      if(w(f)) {
        c = M.call(null, c), d = Bb.call(null, d, Pc.call(null, f), Qc.call(null, f))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
n.xa = function() {
  if(w(this.ja)) {
    return this.ja = !1, new Fe(null, Lc.call(null, this.la, 2), this.b, null)
  }
  throw Error("persistent! called twice");
};
n.K = function(a, b) {
  return Xa.call(null, this, b, null)
};
n.L = function(a, b, c) {
  if(w(this.ja)) {
    return a = Be.call(null, this, b), -1 === a ? c : this.b[a + 1]
  }
  throw Error("lookup after persistent!");
};
n.D = function() {
  if(w(this.ja)) {
    return Lc.call(null, this.la, 2)
  }
  throw Error("count after persistent!");
};
function Je(a, b) {
  for(var c = sd.call(null, Ie), d = 0;;) {
    if(d < a) {
      c = vd.call(null, c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Ke() {
  this.X = !1
}
function Le(a, b) {
  return a === b ? !0 : Yc.call(null, a, b) ? !0 : new v(null, "else", "else", 1017020587) ? O.call(null, a, b) : null
}
var Me = function() {
  function a(a, b, c, k, l) {
    a = a.slice();
    a[b] = c;
    a[k] = l;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = null, c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, h);
      case 5:
        return a.call(this, c, f, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.oa = a;
  return c
}();
function Ne(a, b) {
  var c = Array(a.length - 2);
  Bc.call(null, a, 0, c, 0, 2 * b);
  Bc.call(null, a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
function Oe(a, b) {
  return Mc.call(null, a & b - 1)
}
var Pe = function() {
  function a(a, b, c, k, l, m) {
    a = a.ka(b);
    a.b[c] = k;
    a.b[l] = m;
    return a
  }
  function b(a, b, c, k) {
    a = a.ka(b);
    a.b[c] = k;
    return a
  }
  var c = null, c = function(c, f, h, k, l, m) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, f, h, k);
      case 6:
        return a.call(this, c, f, h, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.F = b;
  c.Ia = a;
  return c
}();
function Qe(a, b, c) {
  this.n = a;
  this.o = b;
  this.b = c
}
n = Qe.prototype;
n.R = function(a, b, c, d, f, h) {
  var k = 1 << (c >>> b & 31), l = Oe.call(null, this.o, k);
  if(0 === (this.o & k)) {
    var m = Mc.call(null, this.o);
    if(2 * m < this.b.length) {
      return a = this.ka(a), b = a.b, h.X = !0, Cc.call(null, b, 2 * l, b, 2 * (l + 1), 2 * (m - l)), b[2 * l] = d, b[2 * l + 1] = f, a.o |= k, a
    }
    if(16 <= m) {
      l = Array(32);
      l[c >>> b & 31] = Re.R(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.o >>> d & 1) && (l[d] = null != this.b[f] ? Re.R(a, b + 5, E.call(null, this.b[f]), this.b[f], this.b[f + 1], h) : this.b[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Se(a, m + 1, l)
    }
    return new v(null, "else", "else", 1017020587) ? (b = Array(2 * (m + 4)), Bc.call(null, this.b, 0, b, 0, 2 * l), b[2 * l] = d, b[2 * l + 1] = f, Bc.call(null, this.b, 2 * l, b, 2 * (l + 1), 2 * (m - l)), h.X = !0, a = this.ka(a), a.b = b, a.o |= k, a) : null
  }
  m = this.b[2 * l];
  k = this.b[2 * l + 1];
  return null == m ? (m = k.R(a, b + 5, c, d, f, h), m === k ? this : Pe.call(null, this, a, 2 * l + 1, m)) : Le.call(null, d, m) ? f === k ? this : Pe.call(null, this, a, 2 * l + 1, f) : new v(null, "else", "else", 1017020587) ? (h.X = !0, Pe.call(null, this, a, 2 * l, null, 2 * l + 1, Te.call(null, a, b + 5, m, k, c, d, f))) : null
};
n.ra = function() {
  return Ue.call(null, this.b)
};
n.ka = function(a) {
  if(a === this.n) {
    return this
  }
  var b = Mc.call(null, this.o), c = Array(0 > b ? 4 : 2 * (b + 1));
  Bc.call(null, this.b, 0, c, 0, 2 * b);
  return new Qe(a, this.o, c)
};
n.sa = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.o & d)) {
    return this
  }
  var f = Oe.call(null, this.o, d), h = this.b[2 * f], k = this.b[2 * f + 1];
  return null == h ? (a = k.sa(a + 5, b, c), a === k ? this : null != a ? new Qe(null, this.o, Me.call(null, this.b, 2 * f + 1, a)) : this.o === d ? null : new v(null, "else", "else", 1017020587) ? new Qe(null, this.o ^ d, Ne.call(null, this.b, f)) : null) : Le.call(null, c, h) ? new Qe(null, this.o ^ d, Ne.call(null, this.b, f)) : new v(null, "else", "else", 1017020587) ? this : null
};
n.Q = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), k = Oe.call(null, this.o, h);
  if(0 === (this.o & h)) {
    var l = Mc.call(null, this.o);
    if(16 <= l) {
      k = Array(32);
      k[b >>> a & 31] = Re.Q(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.o >>> c & 1) && (k[c] = null != this.b[d] ? Re.Q(a + 5, E.call(null, this.b[d]), this.b[d], this.b[d + 1], f) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Se(null, l + 1, k)
    }
    a = Array(2 * (l + 1));
    Bc.call(null, this.b, 0, a, 0, 2 * k);
    a[2 * k] = c;
    a[2 * k + 1] = d;
    Bc.call(null, this.b, 2 * k, a, 2 * (k + 1), 2 * (l - k));
    f.X = !0;
    return new Qe(null, this.o | h, a)
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.Q(a + 5, b, c, d, f), l === h ? this : new Qe(null, this.o, Me.call(null, this.b, 2 * k + 1, l))) : Le.call(null, c, l) ? d === h ? this : new Qe(null, this.o, Me.call(null, this.b, 2 * k + 1, d)) : new v(null, "else", "else", 1017020587) ? (f.X = !0, new Qe(null, this.o, Me.call(null, this.b, 2 * k, null, 2 * k + 1, Te.call(null, a + 5, l, h, b, c, d)))) : null
};
n.ga = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.o & f)) {
    return d
  }
  var h = Oe.call(null, this.o, f), f = this.b[2 * h], h = this.b[2 * h + 1];
  return null == f ? h.ga(a + 5, b, c, d) : Le.call(null, c, f) ? h : new v(null, "else", "else", 1017020587) ? d : null
};
var Re = new Qe(null, 0, []);
function Ve(a, b, c) {
  var d = a.b;
  a = 2 * (a.c - 1);
  for(var f = Array(a), h = 0, k = 1, l = 0;;) {
    if(h < a) {
      h !== c && null != d[h] && (f[k] = d[h], k += 2, l |= 1 << h), h += 1
    }else {
      return new Qe(b, l, f)
    }
  }
}
function Se(a, b, c) {
  this.n = a;
  this.c = b;
  this.b = c
}
n = Se.prototype;
n.R = function(a, b, c, d, f, h) {
  var k = c >>> b & 31, l = this.b[k];
  if(null == l) {
    return a = Pe.call(null, this, a, k, Re.R(a, b + 5, c, d, f, h)), a.c += 1, a
  }
  b = l.R(a, b + 5, c, d, f, h);
  return b === l ? this : Pe.call(null, this, a, k, b)
};
n.ra = function() {
  return We.call(null, this.b)
};
n.ka = function(a) {
  return a === this.n ? this : new Se(a, this.c, this.b.slice())
};
n.sa = function(a, b, c) {
  var d = b >>> a & 31, f = this.b[d];
  return null != f ? (a = f.sa(a + 5, b, c), a === f ? this : null == a ? 8 >= this.c ? Ve.call(null, this, null, d) : new Se(null, this.c - 1, Me.call(null, this.b, d, a)) : new v(null, "else", "else", 1017020587) ? new Se(null, this.c, Me.call(null, this.b, d, a)) : null) : this
};
n.Q = function(a, b, c, d, f) {
  var h = b >>> a & 31, k = this.b[h];
  if(null == k) {
    return new Se(null, this.c + 1, Me.call(null, this.b, h, Re.Q(a + 5, b, c, d, f)))
  }
  a = k.Q(a + 5, b, c, d, f);
  return a === k ? this : new Se(null, this.c, Me.call(null, this.b, h, a))
};
n.ga = function(a, b, c, d) {
  var f = this.b[b >>> a & 31];
  return null != f ? f.ga(a + 5, b, c, d) : d
};
function Xe(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Le.call(null, c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Ye(a, b, c, d) {
  this.n = a;
  this.Z = b;
  this.c = c;
  this.b = d
}
n = Ye.prototype;
n.R = function(a, b, c, d, f, h) {
  if(c === this.Z) {
    b = Xe.call(null, this.b, this.c, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.c) {
        return a = Pe.call(null, this, a, 2 * this.c, d, 2 * this.c + 1, f), h.X = !0, a.c += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      Bc.call(null, this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.X = !0;
      h = this.c + 1;
      a === this.n ? (this.b = b, this.c = h, a = this) : a = new Ye(this.n, this.Z, h, b);
      return a
    }
    return this.b[b + 1] === f ? this : Pe.call(null, this, a, b + 1, f)
  }
  return(new Qe(a, 1 << (this.Z >>> b & 31), [null, this, null, null])).R(a, b, c, d, f, h)
};
n.ra = function() {
  return Ue.call(null, this.b)
};
n.ka = function(a) {
  if(a === this.n) {
    return this
  }
  var b = Array(2 * (this.c + 1));
  Bc.call(null, this.b, 0, b, 0, 2 * this.c);
  return new Ye(a, this.Z, this.c, b)
};
n.sa = function(a, b, c) {
  a = Xe.call(null, this.b, this.c, c);
  return-1 === a ? this : 1 === this.c ? null : new v(null, "else", "else", 1017020587) ? new Ye(null, this.Z, this.c - 1, Ne.call(null, this.b, Lc.call(null, a, 2))) : null
};
n.Q = function(a, b, c, d, f) {
  return b === this.Z ? (a = Xe.call(null, this.b, this.c, c), -1 === a ? (a = 2 * this.c, b = Array(a + 2), Bc.call(null, this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.X = !0, new Ye(null, this.Z, this.c + 1, b)) : O.call(null, this.b[a], d) ? this : new Ye(null, this.Z, this.c, Me.call(null, this.b, a + 1, d))) : (new Qe(null, 1 << (this.Z >>> a & 31), [null, this])).Q(a, b, c, d, f)
};
n.ga = function(a, b, c, d) {
  a = Xe.call(null, this.b, this.c, c);
  return 0 > a ? d : Le.call(null, c, this.b[a]) ? this.b[a + 1] : new v(null, "else", "else", 1017020587) ? d : null
};
var Te = function() {
  function a(a, b, c, k, l, m, q) {
    var s = E.call(null, c);
    if(s === l) {
      return new Ye(null, s, 2, [c, k, m, q])
    }
    var u = new Ke;
    return Re.R(a, b, s, c, k, u).R(a, b, l, m, q, u)
  }
  function b(a, b, c, k, l, m) {
    var q = E.call(null, b);
    if(q === k) {
      return new Ye(null, q, 2, [b, c, l, m])
    }
    var s = new Ke;
    return Re.Q(a, q, b, c, s).Q(a, k, l, m, s)
  }
  var c = null, c = function(c, f, h, k, l, m, q) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, f, h, k, l, m);
      case 7:
        return a.call(this, c, f, h, k, l, m, q)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.Ia = b;
  c.Ra = a;
  return c
}();
function Ze(a, b, c, d, f) {
  this.g = a;
  this.da = b;
  this.i = c;
  this.p = d;
  this.j = f;
  this.m = 0;
  this.d = 32374860
}
n = Ze.prototype;
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Wb.call(null, this)
};
n.w = function(a, b) {
  return P.call(null, b, this)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Q.call(null, b, this)
};
n.H = function(a, b, c) {
  return Q.call(null, b, c, this)
};
n.C = function() {
  return this
};
n.M = function() {
  return null == this.p ? V([this.da[this.i], this.da[this.i + 1]], !0) : G.call(null, this.p)
};
n.N = function() {
  return null == this.p ? Ue.call(null, this.da, this.i + 2, null) : Ue.call(null, this.da, this.i, M.call(null, this.p))
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new Ze(b, this.da, this.i, this.p, this.j)
};
n.u = e("g");
n.A = function() {
  return bc.call(null, L, this.g)
};
var Ue = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new Ze(null, a, b, null, null)
          }
          var k = a[b + 1];
          if(w(k) && (k = k.ra(), w(k))) {
            return new Ze(null, a, b + 2, k, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new Ze(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.call(null, a, 0, null)
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c
}();
function $e(a, b, c, d, f) {
  this.g = a;
  this.da = b;
  this.i = c;
  this.p = d;
  this.j = f;
  this.m = 0;
  this.d = 32374860
}
n = $e.prototype;
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Wb.call(null, this)
};
n.w = function(a, b) {
  return P.call(null, b, this)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Q.call(null, b, this)
};
n.H = function(a, b, c) {
  return Q.call(null, b, c, this)
};
n.C = function() {
  return this
};
n.M = function() {
  return G.call(null, this.p)
};
n.N = function() {
  return We.call(null, null, this.da, this.i, M.call(null, this.p))
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new $e(b, this.da, this.i, this.p, this.j)
};
n.u = e("g");
n.A = function() {
  return bc.call(null, L, this.g)
};
var We = function() {
  function a(a, b, c, k) {
    if(null == k) {
      for(k = b.length;;) {
        if(c < k) {
          var l = b[c];
          if(w(l) && (l = l.ra(), w(l))) {
            return new $e(a, b, c + 1, l, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new $e(a, b, c, k, null)
    }
  }
  function b(a) {
    return c.call(null, null, a, 0, null)
  }
  var c = null, c = function(c, f, h, k) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.F = a;
  return c
}();
function af(a, b, c, d, f, h) {
  this.g = a;
  this.c = b;
  this.root = c;
  this.I = d;
  this.O = f;
  this.j = h;
  this.m = 4;
  this.d = 16123663
}
n = af.prototype;
n.ua = function() {
  return new bf({}, this.root, this.c, this.I, this.O)
};
n.r = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Oc.call(null, this)
};
n.K = function(a, b) {
  return Xa.call(null, this, b, null)
};
n.L = function(a, b, c) {
  return null == b ? this.I ? this.O : c : null == this.root ? c : new v(null, "else", "else", 1017020587) ? this.root.ga(0, E.call(null, b), b, c) : null
};
n.na = function(a, b, c) {
  if(null == b) {
    return this.I && c === this.O ? this : new af(this.g, this.I ? this.c : this.c + 1, this.root, !0, c, null)
  }
  a = new Ke;
  b = (null == this.root ? Re : this.root).Q(0, E.call(null, b), b, c, a);
  return b === this.root ? this : new af(this.g, a.X ? this.c + 1 : this.c, b, this.I, this.O, null)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.a = function(a) {
  return this.K(null, a)
};
n.h = function(a, b) {
  return this.L(null, a, b)
};
n.w = function(a, b) {
  return yc.call(null, b) ? Ya.call(null, this, A.call(null, b, 0), A.call(null, b, 1)) : Ic.call(null, Ra, this, b)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.C = function() {
  if(0 < this.c) {
    var a = null != this.root ? this.root.ra() : null;
    return this.I ? P.call(null, V([null, this.O], !0), a) : a
  }
  return null
};
n.D = e("c");
n.q = function(a, b) {
  return ve.call(null, this, b)
};
n.v = function(a, b) {
  return new af(b, this.c, this.root, this.I, this.O, this.j)
};
n.u = e("g");
n.A = function() {
  return kb.call(null, Ie, this.g)
};
n.Ja = function(a, b) {
  if(null == b) {
    return this.I ? new af(this.g, this.c - 1, this.root, !1, null, null) : this
  }
  if(null == this.root) {
    return this
  }
  if(new v(null, "else", "else", 1017020587)) {
    var c = this.root.sa(0, E.call(null, b), b);
    return c === this.root ? this : new af(this.g, this.c - 1, c, this.I, this.O, null)
  }
  return null
};
var Ie = new af(null, 0, null, !1, null, 0);
function kc(a, b) {
  for(var c = a.length, d = 0, f = sd.call(null, Ie);;) {
    if(d < c) {
      var h = d + 1, f = Bb.call(null, f, a[d], b[d]), d = h
    }else {
      return td.call(null, f)
    }
  }
}
function bf(a, b, c, d, f) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.I = d;
  this.O = f;
  this.m = 56;
  this.d = 258
}
n = bf.prototype;
n.va = function(a, b, c) {
  return cf(this, b, c)
};
n.wa = function(a, b) {
  var c;
  a: {
    if(this.n) {
      if(b ? b.d & 2048 || b.Fb || (b.d ? 0 : x.call(null, ab, b)) : x.call(null, ab, b)) {
        c = cf(this, Pc.call(null, b), Qc.call(null, b));
        break a
      }
      c = F.call(null, b);
      for(var d = this;;) {
        var f = G.call(null, c);
        if(w(f)) {
          c = M.call(null, c), d = cf(d, Pc.call(null, f), Qc.call(null, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    c = void 0
  }
  return c
};
n.xa = function() {
  var a;
  if(this.n) {
    this.n = null, a = new af(null, this.count, this.root, this.I, this.O, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
n.K = function(a, b) {
  return null == b ? this.I ? this.O : null : null == this.root ? null : this.root.ga(0, E.call(null, b), b)
};
n.L = function(a, b, c) {
  return null == b ? this.I ? this.O : c : null == this.root ? c : this.root.ga(0, E.call(null, b), b, c)
};
n.D = function() {
  if(this.n) {
    return this.count
  }
  throw Error("count after persistent!");
};
function cf(a, b, c) {
  if(a.n) {
    if(null == b) {
      a.O !== c && (a.O = c), a.I || (a.count += 1, a.I = !0)
    }else {
      var d = new Ke;
      b = (null == a.root ? Re : a.root).R(a.n, 0, E.call(null, b), b, c, d);
      b !== a.root && (a.root = b);
      d.X && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var df = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    a = F.call(null, a);
    for(var b = sd.call(null, Ie);;) {
      if(a) {
        var f = dc.call(null, a), b = vd.call(null, b, G.call(null, a), cc.call(null, a));
        a = f
      }else {
        return td.call(null, b)
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = F(a);
    return b(a)
  };
  a.e = b;
  return a
}(), ef = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new Fe(null, Lc.call(null, R.call(null, a), 2), oc.call(null, La, a), null)
  }
  a.k = 0;
  a.f = function(a) {
    a = F(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Pc(a) {
  return bb.call(null, a)
}
function ff(a, b) {
  this.ca = a;
  this.P = b;
  this.m = 0;
  this.d = 32374988
}
n = ff.prototype;
n.r = function() {
  return Wb.call(null, this)
};
n.V = function() {
  var a = this.ca, a = (a ? a.d & 128 || a.Xa || (a.d ? 0 : x.call(null, Ua, a)) : x.call(null, Ua, a)) ? Va.call(null, this.ca) : M.call(null, this.ca);
  return null == a ? null : new ff(a, this.P)
};
n.w = function(a, b) {
  return P.call(null, b, this)
};
n.toString = function() {
  return Lb.call(null, this)
};
n.G = function(a, b) {
  return Q.call(null, b, this)
};
n.H = function(a, b, c) {
  return Q.call(null, b, c, this)
};
n.C = function() {
  return this
};
n.M = function() {
  var a = B.call(null, this.ca);
  return cb.call(null, a)
};
n.N = function() {
  var a = this.ca, a = (a ? a.d & 128 || a.Xa || (a.d ? 0 : x.call(null, Ua, a)) : x.call(null, Ua, a)) ? Va.call(null, this.ca) : M.call(null, this.ca);
  return null != a ? new ff(a, this.P) : L
};
n.q = function(a, b) {
  return $b.call(null, this, b)
};
n.v = function(a, b) {
  return new ff(this.ca, b)
};
n.u = e("P");
n.A = function() {
  return bc.call(null, L, this.P)
};
function gf(a) {
  return(a = F.call(null, a)) ? new ff(a, null) : null
}
function Qc(a) {
  return cb.call(null, a)
}
var hf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return w(yd.call(null, zd, a)) ? Ic.call(null, function(a, b) {
      return ec.call(null, w(a) ? a : W, b)
    }, a) : null
  }
  a.k = 0;
  a.f = function(a) {
    a = F(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function $c(a) {
  if(a && (a.m & 4096 || a.Hb)) {
    return Ib.call(null, a)
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([z("Doesn't support name: "), z(a)].join(""));
}
var jf = function() {
  function a(a, b) {
    for(;;) {
      if(F.call(null, b) && 0 < a) {
        var c = a - 1, k = M.call(null, b);
        a = c;
        b = k
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(F.call(null, a)) {
        a = M.call(null, a)
      }else {
        return null
      }
    }
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.h = a;
  return c
}(), kf = function() {
  function a(a, b) {
    jf.call(null, a, b);
    return b
  }
  function b(a) {
    jf.call(null, a);
    return a
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.h = a;
  return c
}();
function lf(a) {
  return a instanceof RegExp
}
function X(a, b, c, d, f, h, k) {
  D.call(null, a, c);
  F.call(null, k) && b.call(null, G.call(null, k), a, h);
  c = F.call(null, M.call(null, k));
  k = null;
  for(var l = 0, m = 0;;) {
    if(m < l) {
      var q = A.call(null, k, m);
      D.call(null, a, d);
      b.call(null, q, a, h);
      m += 1
    }else {
      if(c = F.call(null, c)) {
        k = c, zc.call(null, k) ? (c = kd.call(null, k), m = ld.call(null, k), k = c, l = R.call(null, c), c = m) : (c = G.call(null, k), D.call(null, a, d), b.call(null, c, a, h), c = M.call(null, k), k = null, l = 0), m = 0
      }else {
        break
      }
    }
  }
  return D.call(null, a, f)
}
var mf = function() {
  function a(a, d) {
    var f = null;
    1 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, f)
  }
  function b(a, b) {
    for(var f = F.call(null, b), h = null, k = 0, l = 0;;) {
      if(l < k) {
        var m = A.call(null, h, l);
        D.call(null, a, m);
        l += 1
      }else {
        if(f = F.call(null, f)) {
          h = f, zc.call(null, h) ? (f = kd.call(null, h), k = ld.call(null, h), h = f, m = R.call(null, f), f = k, k = m) : (m = G.call(null, h), D.call(null, a, m), f = M.call(null, h), h = null, k = 0), l = 0
        }else {
          return null
        }
      }
    }
  }
  a.k = 1;
  a.f = function(a) {
    var d = G(a);
    a = I(a);
    return b(d, a)
  };
  a.e = b;
  return a
}(), nf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function of(a) {
  return[z('"'), z(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return nf[a]
  })), z('"')].join("")
}
var Y = function pf(b, c, d) {
  if(null == b) {
    return D.call(null, c, "nil")
  }
  if(void 0 === b) {
    return D.call(null, c, "#\x3cundefined\x3e")
  }
  if(new v(null, "else", "else", 1017020587)) {
    w(function() {
      var c = jc.call(null, d, new v(null, "meta", "meta", 1017252215));
      return w(c) ? (c = b ? b.d & 131072 || b.Gb ? !0 : b.d ? !1 : x.call(null, hb, b) : x.call(null, hb, b)) ? pc.call(null, b) : c : c
    }()) && (D.call(null, c, "^"), pf.call(null, pc.call(null, b), c, d), D.call(null, c, " "));
    if(null == b) {
      return D.call(null, c, "nil")
    }
    if(b.bb) {
      return b.Kb(c)
    }
    if(b && (b.d & 2147483648 || b.B)) {
      return wb.call(null, b, c, d)
    }
    if(Ia.call(null, b) === Boolean || "number" === typeof b) {
      return D.call(null, c, "" + z(b))
    }
    if(b instanceof Array) {
      return X.call(null, c, pf, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(ba(b)) {
      return w((new v(null, "readably", "readably", 4441712502)).a(d)) ? D.call(null, c, of.call(null, b)) : D.call(null, c, b)
    }
    if(mc.call(null, b)) {
      return mf.call(null, c, "#\x3c", "" + z(b), "\x3e")
    }
    if(b instanceof Date) {
      var f = function(b, c) {
        for(var d = "" + z(b);;) {
          if(R.call(null, d) < c) {
            d = [z("0"), z(d)].join("")
          }else {
            return d
          }
        }
      };
      return mf.call(null, c, '#inst "', "" + z(b.getUTCFullYear()), "-", f.call(null, b.getUTCMonth() + 1, 2), "-", f.call(null, b.getUTCDate(), 2), "T", f.call(null, b.getUTCHours(), 2), ":", f.call(null, b.getUTCMinutes(), 2), ":", f.call(null, b.getUTCSeconds(), 2), ".", f.call(null, b.getUTCMilliseconds(), 3), "-", '00:00"')
    }
    return w(lf.call(null, b)) ? mf.call(null, c, '#"', b.source, '"') : (b ? b.d & 2147483648 || b.B || (b.d ? 0 : x.call(null, vb, b)) : x.call(null, vb, b)) ? wb.call(null, b, c, d) : new v(null, "else", "else", 1017020587) ? mf.call(null, c, "#\x3c", "" + z(b), "\x3e") : null
  }
  return null
};
function qf(a, b, c) {
  Y.call(null, G.call(null, a), b, c);
  a = F.call(null, M.call(null, a));
  for(var d = null, f = 0, h = 0;;) {
    if(h < f) {
      var k = A.call(null, d, h);
      D.call(null, b, " ");
      Y.call(null, k, b, c);
      h += 1
    }else {
      if(a = F.call(null, a)) {
        d = a, zc.call(null, d) ? (a = kd.call(null, d), f = ld.call(null, d), d = a, k = R.call(null, a), a = f, f = k) : (k = G.call(null, d), D.call(null, b, " "), Y.call(null, k, b, c), a = M.call(null, d), d = null, f = 0), h = 0
      }else {
        return null
      }
    }
  }
}
function rf(a, b) {
  var c = new Da, d = new Kb(c);
  qf.call(null, a, d, b);
  ub.call(null, d);
  return c
}
function sf(a, b) {
  return uc.call(null, a) ? "" : "" + z(rf.call(null, a, b))
}
var tf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return sf.call(null, a, Fa.call(null))
  }
  a.k = 0;
  a.f = function(a) {
    a = F(a);
    return b(a)
  };
  a.e = b;
  return a
}();
Pb.prototype.B = !0;
Pb.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
oe.prototype.B = !0;
oe.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "[", " ", "]", c, this)
};
gd.prototype.B = !0;
gd.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
Fe.prototype.B = !0;
Fe.prototype.s = function(a, b, c) {
  return X.call(null, b, function(a) {
    return X.call(null, b, Y, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
T.prototype.B = !0;
T.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
Xb.prototype.B = !0;
Xb.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
Ze.prototype.B = !0;
Ze.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
me.prototype.B = !0;
me.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
af.prototype.B = !0;
af.prototype.s = function(a, b, c) {
  return X.call(null, b, function(a) {
    return X.call(null, b, Y, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
de.prototype.B = !0;
de.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "[", " ", "]", c, this)
};
Rc.prototype.B = !0;
Rc.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
De.prototype.B = !0;
De.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
Sc.prototype.B = !0;
Sc.prototype.s = function(a, b) {
  return D.call(null, b, "()")
};
Xc.prototype.B = !0;
Xc.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
$e.prototype.B = !0;
$e.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
ff.prototype.B = !0;
ff.prototype.s = function(a, b, c) {
  return X.call(null, b, Y, "(", " ", ")", c, this)
};
de.prototype.Pa = !0;
de.prototype.Ha = function(a, b) {
  return Hc.call(null, this, b)
};
oe.prototype.Pa = !0;
oe.prototype.Ha = function(a, b) {
  return Hc.call(null, this, b)
};
function uf(a, b, c, d) {
  this.state = a;
  this.g = b;
  this.Tb = c;
  this.Ub = d;
  this.d = 2153938944;
  this.m = 2
}
n = uf.prototype;
n.r = function() {
  return this[da] || (this[da] = ++ea)
};
n.Za = function(a, b, c) {
  a = F.call(null, this.Ub);
  for(var d = null, f = 0, h = 0;;) {
    if(h < f) {
      var k = A.call(null, d, h), l = ic.call(null, k, 0, null), k = ic.call(null, k, 1, null);
      k.call(null, l, this, b, c);
      h += 1
    }else {
      if(a = F.call(null, a)) {
        zc.call(null, a) ? (d = kd.call(null, a), a = ld.call(null, a), l = d, f = R.call(null, d), d = l) : (d = G.call(null, a), l = ic.call(null, d, 0, null), k = ic.call(null, d, 1, null), k.call(null, l, this, b, c), a = M.call(null, a), d = null, f = 0), h = 0
      }else {
        return null
      }
    }
  }
};
n.s = function(a, b, c) {
  D.call(null, b, "#\x3cAtom: ");
  Y.call(null, this.state, b, c);
  return D.call(null, b, "\x3e")
};
n.u = e("g");
n.nb = e("state");
n.q = function(a, b) {
  return this === b
};
var vf = function() {
  function a(a) {
    return new uf(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var l = null;
      1 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, l)
    }
    function b(a, c) {
      var d = Ec.call(null, c) ? oc.call(null, df, c) : c, f = jc.call(null, d, new v(null, "validator", "validator", 4199087812)), d = jc.call(null, d, new v(null, "meta", "meta", 1017252215));
      return new uf(a, d, f, null)
    }
    a.k = 1;
    a.f = function(a) {
      var c = G(a);
      a = I(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.f = c.f;
  b.a = a;
  b.e = c.e;
  return b
}();
function wf(a, b) {
  var c = a.Tb;
  if(w(c) && !w(c.call(null, b))) {
    throw Error([z("Assert failed: "), z("Validator rejected reference state"), z("\n"), z(tf.call(null, Wc(new Ob(null, "validate", "validate", 1233162959, null), new Ob(null, "new-value", "new-value", 972165309, null))))].join(""));
  }
  c = a.state;
  a.state = b;
  xb.call(null, a, c, b);
  return b
}
var xf = function() {
  function a(a, b, c, d, f) {
    return wf.call(null, a, b.call(null, a.state, c, d, f))
  }
  function b(a, b, c, d) {
    return wf.call(null, a, b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return wf.call(null, a, b.call(null, a.state, c))
  }
  function d(a, b) {
    return wf.call(null, a, b.call(null, a.state))
  }
  var f = null, h = function() {
    function a(c, d, f, h, k, K) {
      var H = null;
      5 < arguments.length && (H = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, k, H)
    }
    function b(a, c, d, f, h, k) {
      return wf.call(null, a, oc.call(null, c, a.state, d, f, h, k))
    }
    a.k = 5;
    a.f = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var f = G(a);
      a = M(a);
      var h = G(a);
      a = M(a);
      var k = G(a);
      a = I(a);
      return b(c, d, f, h, k, a)
    };
    a.e = b;
    return a
  }(), f = function(f, l, m, q, s, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, l);
      case 3:
        return c.call(this, f, l, m);
      case 4:
        return b.call(this, f, l, m, q);
      case 5:
        return a.call(this, f, l, m, q, s);
      default:
        return h.e(f, l, m, q, s, N(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.k = 5;
  f.f = h.f;
  f.h = d;
  f.l = c;
  f.F = b;
  f.oa = a;
  f.e = h.e;
  return f
}();
function Rb(a) {
  return gb.call(null, a)
}
var yf = {};
function zf(a) {
  if(a ? a.qb : a) {
    return a.qb(a)
  }
  var b;
  b = zf[r(null == a ? null : a)];
  if(!b && (b = zf._, !b)) {
    throw y.call(null, "IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a)
}
function Af(a) {
  return(a ? w(w(null) ? null : a.pb) || (a.Ma ? 0 : x.call(null, yf, a)) : x.call(null, yf, a)) ? zf.call(null, a) : "string" === typeof a || "number" === typeof a || a instanceof v || a instanceof Ob ? Bf.call(null, a) : tf.call(null, a)
}
var Bf = function Cf(b) {
  if(null == b) {
    return null
  }
  if(b ? w(w(null) ? null : b.pb) || (b.Ma ? 0 : x.call(null, yf, b)) : x.call(null, yf, b)) {
    return zf.call(null, b)
  }
  if(b instanceof v) {
    return $c.call(null, b)
  }
  if(b instanceof Ob) {
    return"" + z(b)
  }
  if(xc.call(null, b)) {
    var c = {};
    b = F.call(null, b);
    for(var d = null, f = 0, h = 0;;) {
      if(h < f) {
        var k = A.call(null, d, h), l = ic.call(null, k, 0, null), k = ic.call(null, k, 1, null);
        c[Af.call(null, l)] = Cf.call(null, k);
        h += 1
      }else {
        if(b = F.call(null, b)) {
          zc.call(null, b) ? (f = kd.call(null, b), b = ld.call(null, b), d = f, f = R.call(null, f)) : (f = G.call(null, b), d = ic.call(null, f, 0, null), f = ic.call(null, f, 1, null), c[Af.call(null, d)] = Cf.call(null, f), b = M.call(null, b), d = null, f = 0), h = 0
        }else {
          break
        }
      }
    }
    return c
  }
  return vc.call(null, b) ? oc.call(null, La, U.call(null, Cf, b)) : new v(null, "else", "else", 1017020587) ? b : null
}, Df = {};
function Ef(a, b) {
  if(a ? a.ob : a) {
    return a.ob(a, b)
  }
  var c;
  c = Ef[r(null == a ? null : a)];
  if(!c && (c = Ef._, !c)) {
    throw y.call(null, "IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var Ff = function() {
  function a(a) {
    return b.call(null, a, t([new v(null, "keywordize-keys", "keywordize-keys", 4191781672), !1]))
  }
  var b = null, c = function() {
    function a(c, d) {
      var l = null;
      1 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, l)
    }
    function b(a, c) {
      if(a ? w(w(null) ? null : a.tc) || (a.Ma ? 0 : x.call(null, Df, a)) : x.call(null, Df, a)) {
        return Ef.call(null, a, oc.call(null, ef, c))
      }
      if(F.call(null, c)) {
        var d = Ec.call(null, c) ? oc.call(null, df, c) : c, f = jc.call(null, d, new v(null, "keywordize-keys", "keywordize-keys", 4191781672));
        return function(a, b, c, d) {
          return function H(f) {
            return Ec.call(null, f) ? kf.call(null, U.call(null, H, f)) : vc.call(null, f) ? Nd.call(null, fc.call(null, f), U.call(null, H, f)) : f instanceof Array ? ke.call(null, U.call(null, H, f)) : Ia.call(null, f) === Object ? Nd.call(null, W, function() {
              return function(a, b, c, d) {
                return function Zb(h) {
                  return new T(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = F.call(null, h);
                        if(a) {
                          if(zc.call(null, a)) {
                            var b = kd.call(null, a), c = R.call(null, b), k = ed.call(null, c);
                            a: {
                              for(var l = 0;;) {
                                if(l < c) {
                                  var m = A.call(null, b, l);
                                  id.call(null, k, V([d.call(null, m), H.call(null, f[m])], !0));
                                  l += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? hd.call(null, jd.call(null, k), Zb.call(null, ld.call(null, a))) : hd.call(null, jd.call(null, k), null)
                          }
                          k = G.call(null, a);
                          return P.call(null, V([d.call(null, k), H.call(null, f[k])], !0), Zb.call(null, I.call(null, a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d).call(null, Ac.call(null, f))
            }()) : new v(null, "else", "else", 1017020587) ? f : null
          }
        }(c, d, f, w(f) ? ad : z).call(null, a)
      }
      return null
    }
    a.k = 1;
    a.f = function(a) {
      var c = G(a);
      a = I(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.f = c.f;
  b.a = a;
  b.e = c.e;
  return b
}();
var Z = new v(null, "data", "data"), Gf = new v(null, "display", "display"), Hf = new v(null, "state", "state"), If = new v(null, "control", "control"), Jf = new v(null, "field", "field"), Kf = new v(null, "keywordize-keys", "keywordize-keys"), Lf = new v(null, "q-bar", "q-bar"), Mf = new v(null, "source-id", "source-id"), Nf = new v(null, "species", "species"), Of = new v(null, "enable", "enable"), Pf = new v(null, "inputs", "inputs"), Qf = new v(null, "connections", "connections"), Rf = new v(null, 
"result", "result"), Sf = new v(null, "index", "index"), Tf = new v(null, "source-field", "source-field"), Uf = new v(null, "q", "q"), Vf = new v(null, "id", "id");
function Wf() {
  0 != Xf && (this.Bc = Error().stack, this[da] || (this[da] = ++ea))
}
var Xf = 0;
var Yf, Zf, $f, ag;
function bg() {
  return p.navigator ? p.navigator.userAgent : null
}
ag = $f = Zf = Yf = !1;
var cg;
if(cg = bg()) {
  var dg = p.navigator;
  Yf = 0 == cg.indexOf("Opera");
  Zf = !Yf && -1 != cg.indexOf("MSIE");
  $f = !Yf && -1 != cg.indexOf("WebKit");
  ag = !Yf && !$f && "Gecko" == dg.product
}
var eg = Yf, fg = Zf, gg = ag, hg = $f;
function ig() {
  var a = p.document;
  return a ? a.documentMode : void 0
}
var jg;
a: {
  var kg = "", lg;
  if(eg && p.opera) {
    var mg = p.opera.version, kg = "function" == typeof mg ? mg() : mg
  }else {
    if(gg ? lg = /rv\:([^\);]+)(\)|;)/ : fg ? lg = /MSIE\s+([^\);]+)(\)|;)/ : hg && (lg = /WebKit\/(\S+)/), lg) {
      var ng = lg.exec(bg()), kg = ng ? ng[1] : ""
    }
  }
  if(fg) {
    var og = ig();
    if(og > parseFloat(kg)) {
      jg = String(og);
      break a
    }
  }
  jg = kg
}
var pg = {};
function qg(a) {
  var b;
  if(!(b = pg[a])) {
    b = 0;
    for(var c = String(jg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), h = 0;0 == b && h < f;h++) {
      var k = c[h] || "", l = d[h] || "", m = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = m.exec(k) || ["", "", ""], u = q.exec(l) || ["", "", ""];
        if(0 == s[0].length && 0 == u[0].length) {
          break
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == u[2].length) ? -1 : (0 == s[2].length) > (0 == u[2].length) ? 1 : 0) || (s[2] < u[2] ? -1 : s[2] > u[2] ? 1 : 0)
      }while(0 == b)
    }
    b = pg[a] = 0 <= b
  }
  return b
}
var rg = p.document, sg = rg && fg ? ig() || ("CSS1Compat" == rg.compatMode ? parseInt(jg, 10) : 5) : void 0;
fg && qg("9");
!hg || qg("528");
gg && qg("1.9b") || fg && qg("8") || eg && qg("9.5") || hg && qg("528");
gg && !qg("8") || fg && qg("9");
function tg(a) {
  return ug(a || arguments.callee.caller, [])
}
function ug(a, b) {
  var c = [];
  if(0 <= xa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(vg(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var h;
        h = d[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = String(h);
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = vg(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        c.push(h)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(ug(a.caller, b))
      }catch(k) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function vg(a) {
  if(wg[a]) {
    return wg[a]
  }
  a = String(a);
  if(!wg[a]) {
    var b = /function ([^\(]+)/.exec(a);
    wg[a] = b ? b[1] : "[Anonymous]"
  }
  return wg[a]
}
var wg = {};
function xg(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
xg.prototype.Sb = 0;
xg.prototype.eb = null;
xg.prototype.cb = null;
var yg = 0;
xg.prototype.reset = function(a, b, c, d, f) {
  this.Sb = "number" == typeof f ? f : yg++;
  this.Lc = d || ia();
  this.ta = a;
  this.Pb = b;
  this.Ec = c;
  delete this.eb;
  delete this.cb
};
xg.prototype.hb = function(a) {
  this.ta = a
};
function zg(a) {
  this.Qb = a
}
zg.prototype.za = null;
zg.prototype.ta = null;
zg.prototype.Ca = null;
zg.prototype.gb = null;
function Ag(a, b) {
  this.name = a;
  this.value = b
}
Ag.prototype.toString = e("name");
var Bg = new Ag("INFO", 800), Cg = new Ag("CONFIG", 700);
n = zg.prototype;
n.getParent = e("za");
n.fb = function() {
  this.Ca || (this.Ca = {});
  return this.Ca
};
n.hb = function(a) {
  this.ta = a
};
function Dg(a) {
  if(a.ta) {
    return a.ta
  }
  if(a.za) {
    return Dg(a.za)
  }
  va("Root logger has no level set.");
  return null
}
n.log = function(a, b, c) {
  if(a.value >= Dg(this).value) {
    for(a = this.Nb(a, b, c), b = "log:" + a.Pb, p.console && (p.console.timeStamp ? p.console.timeStamp(b) : p.console.markTimeline && p.console.markTimeline(b)), p.msWriteProfilerMark && p.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if(c.gb) {
        for(var f = 0, h = void 0;h = c.gb[f];f++) {
          h(d)
        }
      }
      b = b.getParent()
    }
  }
};
n.Nb = function(a, b, c) {
  var d = new xg(a, String(b), this.Qb);
  if(c) {
    d.eb = c;
    var f;
    var h = arguments.callee.caller;
    try {
      var k;
      var l;
      c: {
        for(var m = ["window", "location", "href"], q = p, s;s = m.shift();) {
          if(null != q[s]) {
            q = q[s]
          }else {
            l = null;
            break c
          }
        }
        l = q
      }
      if(ba(c)) {
        k = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var u, J, m = !1;
        try {
          u = c.lineNumber || c.Dc || "Not available"
        }catch(K) {
          u = "Not available", m = !0
        }
        try {
          J = c.fileName || c.filename || c.sourceURL || p.$googDebugFname || l
        }catch(H) {
          J = "Not available", m = !0
        }
        k = !m && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:u, fileName:J, stack:c.stack || "Not available"}
      }
      f = "Message: " + na(k.message) + '\nUrl: \x3ca href\x3d"view-source:' + k.fileName + '" target\x3d"_new"\x3e' + k.fileName + "\x3c/a\x3e\nLine: " + k.lineNumber + "\n\nBrowser stack:\n" + na(k.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + na(tg(h) + "-\x3e ")
    }catch($) {
      f = "Exception trying to expose exception! You win, we lose. " + $
    }
    d.cb = f
  }
  return d
};
n.info = function(a, b) {
  this.log(Bg, a, b)
};
var Eg = {}, Fg = null;
function Gg(a) {
  Fg || (Fg = new zg(""), Eg[""] = Fg, Fg.hb(Cg));
  var b;
  if(!(b = Eg[a])) {
    b = new zg(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Gg(a.substr(0, c));
    c.fb()[d] = b;
    b.za = c;
    Eg[a] = b
  }
  return b
}
;Gg("goog.net.XhrIo");
function Hg(a, b) {
  var c = t([new v(null, "data", "data", 1016980252), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 2, new v(null, "connections", "connections", 2738507975), V([W, W], !0)])]), d = t([new v(null, "q", "q", 1013904355), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1])]);
  return t([new v(null, "id", "id", 1013907597), b, new v(null, "label", "label", 1116631654), b, new v(null, "species", "species", 3300406446), a, new v(null, "inputs", "inputs", 4125005147), c, new v(null, "outputs", "outputs", 4202756868), d, new v(null, "state", "state", 1123661827), W])
}
function Ig(a) {
  return Hg.call(null, "andgate", a)
}
function Jg(a) {
  return Hg.call(null, "nandgate", a)
}
function Kg(a) {
  return Hg.call(null, "orgate", a)
}
function Lg(a) {
  return Hg.call(null, "norgate", a)
}
function Mg(a) {
  return Hg.call(null, "xorgate", a)
}
function Ng(a) {
  return Hg.call(null, "xnorgate", a)
}
function Og(a) {
  var b = t([new v(null, "data", "data", 1016980252), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)])]), c = t([new v(null, "q", "q", 1013904355), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1])]);
  return t([new v(null, "id", "id", 1013907597), a, new v(null, "label", "label", 1116631654), a, new v(null, "species", "species", 3300406446), "notgate", new v(null, "inputs", "inputs", 4125005147), b, new v(null, "outputs", "outputs", 4202756868), c, new v(null, "state", "state", 1123661827), W])
}
function Pg(a) {
  var b = t([new v(null, "data", "data", 1016980252), t([new v(null, "word-length", "word-length", 4354454139), 2, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)]), new v(null, "enable", "enable", 4010023157), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)])]), c = t([new v(null, "q", "q", 1013904355), 
  t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 4])]);
  return t([new v(null, "id", "id", 1013907597), a, new v(null, "label", "label", 1116631654), a, new v(null, "species", "species", 3300406446), "decoder", new v(null, "inputs", "inputs", 4125005147), b, new v(null, "outputs", "outputs", 4202756868), c, new v(null, "state", "state", 1123661827), W])
}
function Qg(a) {
  var b = t([new v(null, "data", "data", 1016980252), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 4, new v(null, "connections", "connections", 2738507975), V([W, W, W, W], !0)]), new v(null, "control", "control", 1965447375), t([new v(null, "word-length", "word-length", 4354454139), 2, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)])]), c = t([new v(null, "q", "q", 
  1013904355), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1])]);
  return t([new v(null, "id", "id", 1013907597), a, new v(null, "label", "label", 1116631654), a, new v(null, "species", "species", 3300406446), "mux", new v(null, "inputs", "inputs", 4125005147), b, new v(null, "outputs", "outputs", 4202756868), c, new v(null, "state", "state", 1123661827), W])
}
function Rg(a) {
  var b = t([new v(null, "data", "data", 1016980252), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)]), new v(null, "enable", "enable", 4010023157), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)])]), c = t([new v(null, "q", "q", 1013904355), 
  t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1]), new v(null, "q-bar", "q-bar", 1119700009), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1])]);
  return t([new v(null, "id", "id", 1013907597), a, new v(null, "label", "label", 1116631654), a, new v(null, "species", "species", 3300406446), "dflipflop", new v(null, "inputs", "inputs", 4125005147), b, new v(null, "outputs", "outputs", 4202756868), c, new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!1], !0)])])
}
function Sg(a) {
  var b = t([new v(null, "data", "data", 1016980252), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)]), new v(null, "enable", "enable", 4010023157), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)])]), c = t([new v(null, "q", "q", 1013904355), 
  t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1]), new v(null, "q-bar", "q-bar", 1119700009), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1])]);
  return t([new v(null, "id", "id", 1013907597), a, new v(null, "label", "label", 1116631654), a, new v(null, "species", "species", 3300406446), "tflipflop", new v(null, "inputs", "inputs", 4125005147), b, new v(null, "outputs", "outputs", 4202756868), c, new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!1], !0)])])
}
function Tg(a) {
  var b = t([new v(null, "data", "data", 1016980252), t([new v(null, "word-length", "word-length", 4354454139), 8, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)]), new v(null, "enable", "enable", 4010023157), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)])]), c = t([new v(null, "q", "q", 1013904355), 
  t([new v(null, "word-length", "word-length", 4354454139), 8, new v(null, "num-pins", "num-pins", 3373805271), 1])]);
  return t([new v(null, "id", "id", 1013907597), a, new v(null, "label", "label", 1116631654), a, new v(null, "species", "species", 3300406446), "register", new v(null, "inputs", "inputs", 4125005147), b, new v(null, "outputs", "outputs", 4202756868), c, new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!1], !0)])])
}
function Ug(a) {
  var b = t([new v(null, "q", "q", 1013904355), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1])]);
  return t([new v(null, "id", "id", 1013907597), a, new v(null, "label", "label", 1116631654), a, new v(null, "species", "species", 3300406446), "inputpin", new v(null, "inputs", "inputs", 4125005147), W, new v(null, "outputs", "outputs", 4202756868), b, new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!1], !0)])])
}
function Vg(a) {
  var b = t([new v(null, "q", "q", 1013904355), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1])]);
  return t([new v(null, "id", "id", 1013907597), a, new v(null, "label", "label", 1116631654), a, new v(null, "species", "species", 3300406446), "outputpin", new v(null, "inputs", "inputs", 4125005147), t([new v(null, "data", "data", 1016980252), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([W], !0)])]), new v(null, "outputs", "outputs", 4202756868), b, new v(null, "state", 
  "state", 1123661827), W])
}
;var Wg = t([new v(null, "x", "x", 1013904362), 30, new v(null, "y", "y", 1013904363), 30, new v(null, "size", "size", 1017434995), 70]), Xg = t([new v(null, "id", "id", 1013907597), new v(null, "and0", "and0", 1016902827), new v(null, "label", "label", 1116631654), "PcPlus4", new v(null, "species", "species", 3300406446), "andgate", new v(null, "state", "state", 1123661827), W, new v(null, "inputs", "inputs", 4125005147), t([new v(null, "data", "data", 1016980252), t([new v(null, "numPins", "numPins", 
3307823510), 2, new v(null, "wordLength", "wordLength", 2280059394), 1, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip0", "ip0", 1014008667), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)]), t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip1", "ip1", 1014008668), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], 
!0)])]), new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "numPins", "numPins", 3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 1])]), new v(null, "display", "display", 2685668404), Wg]), Yg = t([new v(null, "id", "id", 1013907597), new v(null, "or0", "or0", 1014014495), new v(null, "label", "label", 1116631654), "PcPlus4", new v(null, "species", "species", 3300406446), "orgate", new v(null, "state", "state", 1123661827), W, 
new v(null, "inputs", "inputs", 4125005147), t([new v(null, "data", "data", 1016980252), t([new v(null, "numPins", "numPins", 3307823510), 2, new v(null, "wordLength", "wordLength", 2280059394), 1, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip0", "ip0", 1014008667), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)]), t([new v(null, "source-id", "source-id", 3610412927), new v(null, 
"ip1", "ip1", 1014008668), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], !0)])]), new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "numPins", "numPins", 3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 1])]), new v(null, "display", "display", 2685668404), Wg]), Zg = t([new v(null, "id", "id", 1013907597), new v(null, "mux0", "mux0", 1017267666), new v(null, "label", "label", 1116631654), 
"RegWrite", new v(null, "species", "species", 3300406446), "mux", new v(null, "state", "state", 1123661827), W, new v(null, "inputs", "inputs", 4125005147), t([new v(null, "data", "data", 1016980252), t([new v(null, "numPins", "numPins", 3307823510), 4, new v(null, "wordLength", "wordLength", 2280059394), 1, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip0", "ip0", 1014008667), new v(null, "source-field", "source-field", 
1240617018), new v(null, "q", "q", 1013904355)]), t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip1", "ip1", 1014008668), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)]), t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip2", "ip2", 1014008669), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)]), t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip3", "ip3", 
1014008670), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], !0)]), new v(null, "control", "control", 1965447375), t([new v(null, "numPins", "numPins", 3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 2, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip4", "ip4", 1014008671), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 
1013904355)])], !0)])]), new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "numPins", "numPins", 3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 1])])]), $g = t([new v(null, "id", "id", 1013907597), new v(null, "mux1", "mux1", 1017267667), new v(null, "label", "label", 1116631654), "RegWrite", new v(null, "species", "species", 3300406446), "mux", new v(null, "state", "state", 1123661827), W, new v(null, "inputs", "inputs", 4125005147), 
t([new v(null, "data", "data", 1016980252), t([new v(null, "numPins", "numPins", 3307823510), 4, new v(null, "wordLength", "wordLength", 2280059394), 8, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip5", "ip5", 1014008672), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)]), t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip6", "ip6", 1014008673), new v(null, 
"source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)]), t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip7", "ip7", 1014008674), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)]), t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip8", "ip8", 1014008675), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], !0)]), new v(null, "control", "control", 1965447375), 
t([new v(null, "numPins", "numPins", 3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 2, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip9", "ip9", 1014008676), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], !0)])]), new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "numPins", "numPins", 3307823510), 1, 
new v(null, "wordLength", "wordLength", 2280059394), 8])])]), ah = t([new v(null, "id", "id", 1013907597), new v(null, "ip0", "ip0", 1014008667), new v(null, "label", "label", 1116631654), "teh 1337 p1n", new v(null, "species", "species", 3300406446), "inputpin", new v(null, "display", "display", 2685668404), Wg, new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!0], !0)]), new v(null, "inputs", "inputs", 4125005147), W, new v(null, "outputs", "outputs", 4202756868), 
t([new v(null, "q", "q", 1013904355), t([new v(null, "numPins", "numPins", 3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 1])])]), bh = S.call(null, ah, new v(null, "id", "id", 1013907597), new v(null, "ip1", "ip1", 1014008668)), ch = S.call(null, ah, new v(null, "id", "id", 1013907597), new v(null, "ip2", "ip2", 1014008669), new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!1], !0)])), dh = S.call(null, ah, new v(null, "id", "id", 1013907597), 
new v(null, "ip3", "ip3", 1014008670)), eh = t([new v(null, "id", "id", 1013907597), new v(null, "ip4", "ip4", 1014008671), new v(null, "label", "label", 1116631654), "asdf", new v(null, "species", "species", 3300406446), "inputpin", new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!0, !1], !0)]), new v(null, "inputs", "inputs", 4125005147), W, new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "numPins", "numPins", 
3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 2])])]), fh = t([new v(null, "id", "id", 1013907597), new v(null, "ip5", "ip5", 1014008672), new v(null, "species", "species", 3300406446), "inputpin", new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!0, !1, !0, !1, !0, !1, !0, !1], !0)]), new v(null, "inputs", "inputs", 4125005147), W, new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "numPins", 
"numPins", 3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 8])])]), gh = S.call(null, fh, new v(null, "id", "id", 1013907597), new v(null, "ip6", "ip6", 1014008673), new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!1, !1, !1, !1, !1, !1, !1, !1], !0)])), hh = S.call(null, fh, new v(null, "ip", "ip", 1013907609), new v(null, "ip7", "ip7", 1014008674), new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), 
V([!1, !1, !1, !1, !1, !1, !1, !1], !0)])), ih = S.call(null, fh, new v(null, "ip", "ip", 1013907609), new v(null, "ip8", "ip8", 1014008675), new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), ke.call(null, Fd.call(null, 8, !0))])), jh = S.call(null, fh, new v(null, "ip", "ip", 1013907609), new v(null, "ip9", "ip9", 1014008676), new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!0, !0], !0)]), new v(null, "outputs", "outputs", 
4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "numPins", "numPins", 3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 2])])), kh = t([new v(null, "id", "id", 1013907597), new v(null, "reg0", "reg0", 1017400718), new v(null, "label", "label", 1116631654), "pc", new v(null, "species", "species", 3300406446), "register", new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!0, !0, !1, !1, !0, !0, !1, !1], !0)]), new v(null, 
"inputs", "inputs", 4125005147), t([new v(null, "enable", "enable", 4010023157), t([new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip42", "ip42", 1017141591), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], !0)]), new v(null, "data", "data", 1016980252), t([new v(null, 
"num-pins", "num-pins", 3373805271), 1, new v(null, "word-length", "word-length", 4354454139), 8, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip14", "ip14", 1017141500), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], !0)])]), new v(null, "outputs", "outputs", 4202756868), t([new v(null, "data", "data", 1016980252), t([new v(null, "num-pins", "num-pins", 3373805271), 1, 
new v(null, "word-length", "word-length", 4354454139), 8])])]), lh = S.call(null, ah, new v(null, "id", "id", 1013907597), new v(null, "ip14", "ip14", 1017141500), new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!1, !0, !1, !0, !1, !0, !1, !0], !0)]), new v(null, "inputs", "inputs", 4125005147), W, new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "word-length", 
"word-length", 4354454139), 8])])), mh = t([new v(null, "id", "id", 1013907597), new v(null, "ip42", "ip42", 1017141591), new v(null, "label", "label", 1116631654), "reg enable", new v(null, "species", "species", 3300406446), "inputpin", new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!0], !0)]), new v(null, "inputs", "inputs", 4125005147), W, new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "numPins", "numPins", 
3307823510), 1, new v(null, "wordLength", "wordLength", 2280059394), 1])])]), nh = t([new v(null, "id", "id", 1013907597), new v(null, "dff0", "dff0", 1016984574), new v(null, "label", "label", 1116631654), "Tick Tock goes the Flip-Flop", new v(null, "species", "species", 3300406446), "dflipflop", new v(null, "state", "state", 1123661827), t([new v(null, "data", "data", 1016980252), V([!1], !0)]), new v(null, "inputs", "inputs", 4125005147), t([new v(null, "data", "data", 1016980252), t([new v(null, 
"num-pins", "num-pins", 3373805271), 1, new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip0", "ip0", 1014008667), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], !0)]), new v(null, "enable", "enable", 4010023157), t([new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "word-length", "word-length", 4354454139), 
1, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip42", "ip42", 1017141591), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], !0)])]), new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "word-length", "word-length", 4354454139), 1]), new v(null, "q-bar", "q-bar", 1119700009), 
t([new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "word-length", "word-length", 4354454139), 1])])]), oh = S.call(null, nh, new v(null, "id", "id", 1013907597), new v(null, "tff0", "tff0", 1017461230), new v(null, "species", "species", 3300406446), "tflipflop"), ph = t([new v(null, "id", "id", 1013907597), new v(null, "not0", "not0", 1017291567), new v(null, "label", "label", 1116631654), "NO SOUP 4 U", new v(null, "species", "species", 3300406446), "notgate", new v(null, "state", 
"state", 1123661827), W, new v(null, "inputs", "inputs", 4125005147), t([new v(null, "data", "data", 1016980252), t([new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "ip0", "ip0", 1014008667), new v(null, "source-field", "source-field", 1240617018), new v(null, "q", "q", 1013904355)])], !0)])]), new v(null, "outputs", 
"outputs", 4202756868), t([new v(null, "data", "data", 1016980252), t([new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "word-length", "word-length", 4354454139), 1])])]);
kc([new v(null, "ip9", "ip9", 1014008676), new v(null, "dff0", "dff0", 1016984574), new v(null, "mux1", "mux1", 1017267667), new v(null, "ip14", "ip14", 1017141500), new v(null, "mux0", "mux0", 1017267666), new v(null, "not0", "not0", 1017291567), new v(null, "ip42", "ip42", 1017141591), new v(null, "ip3", "ip3", 1014008670), new v(null, "ip2", "ip2", 1014008669), new v(null, "ip4", "ip4", 1014008671), new v(null, "ip1", "ip1", 1014008668), new v(null, "ip5", "ip5", 1014008672), new v(null, "ip0", 
"ip0", 1014008667), new v(null, "ip6", "ip6", 1014008673), new v(null, "reg0", "reg0", 1017400718), new v(null, "and0", "and0", 1016902827), new v(null, "ip8", "ip8", 1014008675), new v(null, "tff0", "tff0", 1017461230), new v(null, "ip7", "ip7", 1014008674)], [jh, nh, $g, lh, Zg, ph, mh, dh, ch, eh, bh, fh, ah, gh, kh, Xg, ih, oh, hh]);
var qh = t([new v(null, "id", "id", 1013907597), 3, new v(null, "species", "species", 3300406446), "outputpin", new v(null, "inputs", "inputs", 4125005147), t([new v(null, "data", "data", 1016980252), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1, new v(null, "connections", "connections", 2738507975), V([t([new v(null, "source-id", "source-id", 3610412927), new v(null, "and0", "and0", 1016902827), new v(null, "source-field", "source-field", 
1240617018), new v(null, "q", "q", 1013904355)])], !0)])]), new v(null, "outputs", "outputs", 4202756868), t([new v(null, "q", "q", 1013904355), t([new v(null, "word-length", "word-length", 4354454139), 1, new v(null, "num-pins", "num-pins", 3373805271), 1])]), new v(null, "display", "display", 2685668404), Wg]);
t([new v(null, "ip0", "ip0", 1014008667), ah, new v(null, "ip1", "ip1", 1014008668), bh, new v(null, "and0", "and0", 1016902827), Xg, 3, qh]);
t([new v(null, "ip0", "ip0", 1014008667), ah, new v(null, "ip1", "ip1", 1014008668), bh, new v(null, "or0", "or0", 1014014495), Yg, 3, qh]);
var rh = {Yb:"cn", Xb:"at", lc:"rat", hc:"pu", ac:"ifrid", oc:"tp", cc:"lru", gc:"pru", ib:"lpu", jb:"ppu", fc:"ph", ec:"osh", mc:"role", dc:"nativeProtocolVersion"}, sh = Gg("goog.net.xpc");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function th(a, b) {
  for(var c = 1, d = b;;) {
    if(0 === d) {
      return c
    }
    d -= 1;
    c *= a
  }
}
function uh(a) {
  return Ic.call(null, Jc, Kd.call(null, Ga, Bd.call(null, function(a, c) {
    return!0 === c ? th.call(null, 2, a) : null
  }, Vc.call(null, a))))
}
function vh(a) {
  return oc.call(null, U, le, a)
}
function wh(a) {
  return O.call(null, R.call(null, a), 1)
}
function xh(a) {
  return xd.call(null, Dc, a)
}
function yh(a) {
  a = vh.call(null, a);
  var b = U.call(null, function() {
    return function(a) {
      return yd.call(null, Dc, a)
    }
  }(a), a);
  a = U.call(null, function() {
    return function(a) {
      return null == a ? !1 : a
    }
  }(a, b), b);
  return ke.call(null, a)
}
vh.call(null, V([V([1, 2, 3], !0), V([1, 2, 3], !0), V([1, 2, 3], !0)], !0));
function zh(a) {
  a = vh.call(null, a);
  a = U.call(null, function() {
    return function(a) {
      return Jd.call(null, Dc, a)
    }
  }(a), a);
  a = U.call(null, wh, a);
  return ke.call(null, a)
}
;var Ah, Bh = !gg && !fg || fg && fg && 9 <= sg || gg && qg("1.9.1");
fg && qg("9");
function Ch(a, b, c) {
  function d(c) {
    c && b.appendChild(ba(c) ? a.createTextNode(c) : c)
  }
  for(var f = 1;f < c.length;f++) {
    var h = c[f];
    !aa(h) || ca(h) && 0 < h.nodeType ? d(h) : za(Dh(h) ? Ba(h) : h, d)
  }
}
function Dh(a) {
  if(a && "number" == typeof a.length) {
    if(ca(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if("function" == r(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
}
function Eh(a) {
  this.Mb = a || p.document || document
}
Eh.prototype.createTextNode = function(a) {
  return this.Mb.createTextNode(String(a))
};
Eh.prototype.appendChild = function(a, b) {
  a.appendChild(b)
};
Eh.prototype.append = function(a, b) {
  Ch(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
};
Eh.prototype.fb = function(a) {
  return Bh && void 0 != a.children ? a.children : Aa(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
Gg("goog.messaging.AbstractChannel");
function Fh(a) {
  Wf.call(this);
  this.Cc = a || Ah || (Ah = new Eh)
}
ka(Fh, Wf);
function Gh(a, b) {
  Fh.call(this, b);
  this.Ba = a;
  this.Jc = this.Ba.kb[rh.jb];
  this.Hc = this.Ba.kb[rh.ib];
  this.Ic = []
}
var Hh;
ka(Gh, Fh);
var Ih = [], Jh = ha(function() {
  var a, b = !1;
  try {
    for(var c = 0;a = Ih[c];c++) {
      var d;
      if(!(d = b)) {
        var f = a, h = f.Gc.location.href;
        if(h != f.Lb) {
          f.Lb = h;
          var k = h.split("#")[1];
          k && (k = k.substr(1), f.pc(decodeURIComponent(k)));
          d = !0
        }else {
          d = !1
        }
      }
      b = d
    }
  }catch(l) {
    if(sh.info("receive_() failed: " + l), a = a.Mc.Ba, sh.info("Transport Error"), a.close(), !Ih.length) {
      return
    }
  }
  a = ia();
  b && (Hh = a);
  window.setTimeout(Jh, 1E3 > a - Hh ? 10 : 100)
}, Gh);
Nd(W, U.h(function(a) {
  var b = ic.l(a, 0, null);
  a = ic.l(a, 1, null);
  return V([ad.a(b.toLowerCase()), a], !0)
}, hf.e(N([Ff.a({Zb:"complete", nc:"success", $b:"error", Wb:"abort", jc:"ready", kc:"readystatechange", TIMEOUT:"timeout", bc:"incrementaldata", ic:"progress"})], 0))));
Nd(W, U.h(function(a) {
  var b = ic.l(a, 0, null);
  a = ic.l(a, 1, null);
  return V([ad.a(b.toLowerCase()), a], !0)
}, Ff.a(rh)));
vf.a(null);
vf.a(0);
var Kh = vf.a(W), Lh = vf.a(W), Mh = vf.a(W);
function Nh(a, b) {
  var c = Jd(function(b) {
    return O.h(b.a ? b.a(Nf) : b.call(null, Nf), a)
  }, gf(b)), c = R(c);
  return ad.a([z(a), z(c)].join(""))
}
function Oh(a) {
  var b = a.a ? a.a(Nf) : a.call(null, Nf), b = Ph.a ? Ph.a(b) : Ph.call(null, b);
  return b.a ? b.a(a) : b.call(null, a)
}
function Qh(a) {
  return Nd(W, Jd(function(a) {
    return O.h("outputpin", Qc(a).call(null, Nf))
  }, a))
}
function Rh(a) {
  var b = Rb(Kh).call(null, ad.a(a.a ? a.a(Mf) : a.call(null, Mf))), c = Ph.a ? Ph.a(b.a ? b.a(Nf) : b.call(null, Nf)) : Ph.call(null, b.a ? b.a(Nf) : b.call(null, Nf)), b = c.a ? c.a(b) : c.call(null, b);
  return b.a ? b.a(ad.a(a.a ? a.a(Tf) : a.call(null, Tf))) : b.call(null, ad.a(a.a ? a.a(Tf) : a.call(null, Tf)))
}
function Sh(a) {
  return t([Pc(a), kf.a(U.h(Rh, Qc(a).call(null, Qf)))])
}
function Th(a) {
  var b = Rb(Mh).call(null, ad.a(a.a ? a.a(Vf) : a.call(null, Vf)));
  return w(b) ? b : Uh.a ? Uh.a(a) : Uh.call(null, a)
}
function Uh(a) {
  var b = a.a ? a.a(Pf) : a.call(null, Pf), b = kf.a(U.h(Sh, b)), b = 1 < R(b) ? oc.h(ec, b) : G(b);
  xf.F(Mh, S, ad.a(a.a ? a.a(Vf) : a.call(null, Vf)), b);
  return b
}
function Vh(a) {
  a = Th(a);
  a = a.a ? a.a(Z) : a.call(null, Z);
  a = vh.call(null, a);
  a = U.call(null, xh, a);
  a = ke.call(null, a);
  return t([Uf, a])
}
function Wh(a) {
  a = Th(a);
  return t([Uf, yh(a.a ? a.a(Z) : a.call(null, Z))])
}
function Xh(a) {
  a = Th(a);
  return t([Uf, zh(a.a ? a.a(Z) : a.call(null, Z))])
}
var Ph = kc("andgate register decoder xnorgate xorgate tflipflop inputpin orgate mux outputpin nandgate dflipflop norgate notgate".split(" "), [Vh, function(a) {
  var b = a.a ? a.a(Hf) : a.call(null, Hf), c = b.a ? b.a(Z) : b.call(null, Z), d = Th(a), f = d.a ? d.a(Of) : d.call(null, Of);
  w(f) && (b = S.l(b, Z, G(d.a ? d.a(Z) : d.call(null, Z))), b = S.l(a, Hf, b), xf.F(Lh, S, a.a ? a.a(Vf) : a.call(null, Vf), b));
  return t([Uf, c])
}, function(a) {
  a = Th(a);
  a = a.a ? a.a(Z) : a.call(null, Z);
  a = ke.call(null, U.call(null, ke, Od.call(null, 1, a)));
  return t([Uf, a])
}, function(a) {
  a = Xh(a);
  return t([Uf, Ha(a)])
}, Xh, function(a) {
  var b = a.a ? a.a(Hf) : a.call(null, Hf), c = b.a ? b.a(Z) : b.call(null, Z), d = Th(a), d = d.a ? d.a(Of) : d.call(null, Of);
  w(d) && (b = S.l(b, Z, ke(U.h(Ha, c))), b = S.l(a, Hf, b), xf.F(Lh, S, a.a ? a.a(Vf) : a.call(null, Vf), b));
  return t([Uf, c, Lf, ke(U.h(Ha, c))])
}, function(a) {
  a = a.a ? a.a(Hf) : a.call(null, Hf);
  a = a.a ? a.a(Z) : a.call(null, Z);
  return t([Uf, a])
}, Wh, function(a) {
  var b = Th(a);
  a = b.a ? b.a(Z) : b.call(null, Z);
  b = Md(b.a ? b.a(If) : b.call(null, If));
  a = ic.call(null, a, uh.call(null, b));
  return t([Uf, a])
}, function(a) {
  return Uh(a)
}, function(a) {
  a = Vh(a);
  return t([Uf, Ha(a)])
}, function(a) {
  console.log("DFF Eval called");
  var b = a.a ? a.a(Hf) : a.call(null, Hf), c = b.a ? b.a(Z) : b.call(null, Z), d = Th(a), f = d.a ? d.a(Of) : d.call(null, Of);
  w(f) && (b = S.l(b, Z, ke(G(d.a ? d.a(Z) : d.call(null, Z)))), b = S.l(a, Hf, b), a = S.l(Rb(Lh), ad.a(a.a ? a.a(Vf) : a.call(null, Vf)), b), wf(Lh, a));
  return t([Uf, c, Lf, ke(U.h(Ha, c))])
}, function(a) {
  a = Wh(a);
  return t([Uf, Ha(a)])
}, function(a) {
  a = Th(a);
  a = Z.a(a);
  a = G(a);
  return t([Uf, ke(U.h(Ha, a))])
}]);
function Yh(a) {
  return Ff.e(a, N([Kf, !0], 0))
}
ja("circuits.js.add_component", function(a, b, c) {
  b = Yh(b);
  var d = Yh(c);
  c = Bf;
  var f = Nh(a, b);
  a = (O.call(null, a, "andgate") ? Ig : O.call(null, a, "nandgate") ? Jg : O.call(null, a, "orgate") ? Kg : O.call(null, a, "norgate") ? Lg : O.call(null, a, "xorgate") ? Mg : O.call(null, a, "xnorgate") ? Ng : O.call(null, a, "mux") ? Qg : O.call(null, a, "decoder") ? Pg : O.call(null, a, "notgate") ? Og : O.call(null, a, "dflipflop") ? Rg : O.call(null, a, "tflipflop") ? Sg : O.call(null, a, "register") ? Tg : O.call(null, a, "inputpin") ? Ug : O.call(null, a, "outputpin") ? Vg : null).call(null, 
  f);
  a = S.l(a, Gf, d);
  b = S.l(b, f, a);
  return c(b)
});
ja("circuits.js.add_connection", function(a, b, c) {
  var d = Yh(a), f = Yh(b);
  b = Yh(c);
  c = Bf;
  a = ad.a(f.a ? f.a(Vf) : f.call(null, Vf));
  var h = ad.a(f.a ? f.a(Jf) : f.call(null, Jf)), k = ad.a(d.a ? d.a(Vf) : d.call(null, Vf)), d = ad.a(d.a ? d.a(Jf) : d.call(null, Jf)), l = b.a ? b.a(a) : b.call(null, a), l = l.a ? l.a(Pf) : l.call(null, Pf), l = l.a ? l.a(h) : l.call(null, h), l = l.a ? l.a(Qf) : l.call(null, Qf), f = f.a ? f.a(Sf) : f.call(null, Sf), k = t([Mf, k, Tf, d]), f = S.l(l, f, k);
  b = Qd(b, V([a, Pf, h, Qf], !0), f);
  return c(b)
});
ja("circuits.js.remove_connection", g(null));
ja("circuits.js.evaluate", function(a) {
  var b = Bf;
  a = Yh(a);
  if(w(!0)) {
    a = wf(Kh, a);
    wf(Mh, W);
    a = Qh(a);
    a = kf.a(U.h(Oh, gf(a)));
    var c = Nd(Rb(Kh), Rb(Lh));
    a = t([Rf, a, Hf, c])
  }else {
    a = null
  }
  return b(a)
});
ja("circuits.js.remove_component", function(a, b) {
  var c = Bf, d;
  d = Yh(b);
  d = lc.h(d, ad.a(a));
  return c(d)
});

})();
