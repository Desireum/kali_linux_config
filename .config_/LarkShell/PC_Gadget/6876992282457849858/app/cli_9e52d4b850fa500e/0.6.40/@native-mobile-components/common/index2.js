define("@native-mobile-components/common/index2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var _commonjsHelpers = require('./_commonjsHelpers.js');

var utils = _commonjsHelpers.createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSystemInfo = getSystemInfo;
  exports.calcUnit = calcUnit;
  exports.getHalfScreenHeightTop = getHalfScreenHeightTop;
  exports.getRect = getRect;
  exports.uniqueId = uniqueId;
  exports.wait = wait;
  exports.range = range;
  exports.isObj = isObj;
  exports.langMap = exports.numberReg = exports.macReg = exports.windowsReg = exports.androidReg = exports.iPhoneXReg = exports.iPhoneReg = void 0;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var iPhoneReg = /iPhone/ig;
  exports.iPhoneReg = iPhoneReg;
  var iPhoneXReg = /iPhone ?(X|1\d+)/ig;
  exports.iPhoneXReg = iPhoneXReg;
  var androidReg = /android/ig;
  exports.androidReg = androidReg;
  var windowsReg = /windows/i;
  exports.windowsReg = windowsReg;
  var macReg = /mac/i;
  exports.macReg = macReg;
  var numberReg = /^\d+(\.\d+)?$/;
  exports.numberReg = numberReg;
  var langMap = {
    de_DE: 'de-DE',
    en_US: 'en-US',
    es_ES: 'es-ES',
    fr_FR: 'fr-FR',
    hi_IN: 'hi-IN',
    id_ID: 'id-ID',
    it_IT: 'it-IT',
    ja_JP: 'ja-JP',
    ko_KR: 'ko-KR',
    pt_BR: 'pt-BR',
    ru_RU: 'ru-RU',
    th_TH: 'th-TH',
    vi_VN: 'vi-VN',
    zh_CN: 'zh-CN',
    zh_HK: 'zh-HK',
    zh_TW: 'zh-TW'
  }; // 设备信息

  exports.langMap = langMap;
  var systemInfo = null;

  function getSystemInfo() {
    if (systemInfo) return systemInfo;
    systemInfo = tt.getSystemInfoSync();
    var _systemInfo = systemInfo,
        _systemInfo$brand = _systemInfo.brand,
        brand = _systemInfo$brand === void 0 ? '' : _systemInfo$brand,
        platform = _systemInfo.platform,
        model = _systemInfo.model,
        system = _systemInfo.system;
    systemInfo.isDevtools = platform === 'devtools';
    systemInfo.isIphone = iPhoneReg.test(model);
    systemInfo.isIphoneX = iPhoneXReg.test(model);
    systemInfo.isAndroid = androidReg.test(system);
    systemInfo.isLarkPc = brand.toLowerCase() === 'pc';
    systemInfo.isLarkWindows = brand.toLowerCase() === 'pc' && windowsReg.test(platform);
    systemInfo.isLarkMac = brand.toLowerCase() === 'pc' && macReg.test(platform);
    systemInfo.normalizedLang = langMap[systemInfo.language] || langMap.en_US;
    systemInfo.isDarkMode = systemInfo.theme === 'dark';
    var normalizedPlatform = 'ios';

    if (systemInfo.isAndroid) {
      normalizedPlatform = 'android';
    } else if (systemInfo.isLarkMac) {
      normalizedPlatform = 'mac';
    } else if (systemInfo.isLarkWindows) {
      normalizedPlatform = 'windows';
    }

    systemInfo.normalizedPlatform = normalizedPlatform;
    return systemInfo;
  }

  function calcUnit(value) {
    if (value === null) return undefined;
    return numberReg.test(String(value)) ? "".concat(value, "px") : value;
  }

  function getHalfScreenHeightTop() {
    var screenHeight;
    var windowHeight; // 兼容 H5

    try {
      screenHeight = window.innerHeight;
      windowHeight = document.body.clientHeight;
    } catch (e) {//
    }
    /* #ifndef H5 */


    var _getSystemInfo = getSystemInfo(),
        sh = _getSystemInfo.screenHeight,
        wh = _getSystemInfo.windowHeight;

    screenHeight = sh;
    windowHeight = wh;
    /* #endif */

    var h = screenHeight / 2 - (screenHeight - windowHeight);
    return Math.round(h);
  }

  function getRect(context, selector, all) {
    var selectFunc = all ? 'selectAll' : 'select';
    return new Promise(function (resolve) {
      tt.createSelectorQuery().in(context)[selectFunc](selector).boundingClientRect(function (data) {
        resolve(data);
      }).exec();
    });
  }

  var idCounter = 0;

  function uniqueId(prefix) {
    // eslint-disable-next-line no-plusplus
    var id = ++idCounter;
    return "".concat(prefix).concat(id);
  }

  function wait(timeout) {
    return new Promise(function (r) {
      return setTimeout(r, timeout);
    });
  }

  function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  function isObj(x) {
    var type = _typeof(x);

    return x !== null && (type === 'object' || type === 'function');
  }
});

exports.utils = utils;

});