define("custom-wrapper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 (tt["webpackJsonp"]=tt["webpackJsonp"]||[]).push([[6],[],[[680,0,1,2]]]);
});;define("@native-mobile-components/button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var _commonjsHelpers = require('../common/_commonjsHelpers.js');

var button = _commonjsHelpers.createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sizeList = exports.shapeList = exports.typeList = void 0;
  var typeList = ['primary', 'secondary', 'secondary-primary', 'text', 'icon', 'icon-secondary', 'link'];
  exports.typeList = typeList;
  var shapeList = ['round'];
  exports.shapeList = shapeList;
  var sizeList = ['small', 'middle', 'large'];
  exports.sizeList = sizeList;
});

Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    type: {
      type: String,
      value: 'secondary',
      observer: function observer(v) {
        if (!button.typeList.includes(v)) {
          throw new Error("Prop \"type\" receive invalid value \"".concat(v, "\""));
        }

        return v;
      }
    },
    block: {
      type: Boolean,
      value: false
    },
    warn: {
      type: Boolean,
      value: false
    },
    ghost: {
      type: Boolean,
      value: false
    },
    shape: {
      type: String,
      value: '',
      observer: function observer(v) {
        if (!button.shapeList.includes(v) && v !== '') {
          throw new Error("Prop \"shape\" receive invalid value \"".concat(v, "\""));
        }

        return v;
      }
    },
    icon: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: 'middle',
      observer: function observer(v) {
        if (!button.sizeList.includes(v)) {
          throw new Error("Prop \"size\" receive invalid value \"".concat(v, "\""));
        }

        return v;
      }
    },
    loading: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    selected: {
      type: Boolean,
      value: false
    },
    boarding: {
      type: Boolean,
      value: false
    },
    customStyle: {
      type: String,
      value: ''
    },
    // 原生属性透传
    formType: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: ''
    },
    hoverClass: {
      type: String,
      value: 'button-hover'
    },
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    onClick: function onClick(e) {
      var _this$properties = this.properties,
          disabled = _this$properties.disabled,
          loading = _this$properties.loading;
      if (disabled || loading) return;
      this.triggerEvent('click', e);
    }
  }
});

});;define("@native-mobile-components/common/_commonjsHelpers.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

exports.commonjsGlobal = commonjsGlobal;
exports.createCommonjsModule = createCommonjsModule;
exports.getAugmentedNamespace = getAugmentedNamespace;
exports.getDefaultExportFromCjs = getDefaultExportFromCjs;

});;define("@native-mobile-components/icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

require('../common/_commonjsHelpers.js');
var index = require('../common/index2.js');

var validTypeReg = /_(outlined|filled|colorful)$/;
var validUrlReg = /\//;
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    name: {
      type: String,
      value: '',
      observer: function observer(v) {
        if (!validTypeReg.test(v) && !validUrlReg.test(v)) {
          throw new Error("Prop \"name\" receive invalid value \"".concat(v, "\""));
        }

        this.computeStyles();
      }
    },
    color: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    },
    size: {
      type: [String, Number],
      value: null,
      observer: function observer() {
        this.computeStyles();
      }
    }
  },
  data: {
    computedStyles: '',
    isDarkTheme: index.utils.getSystemInfo().isDarkMode
  },
  attached: function attached() {
    this.computeStyles();
  },
  methods: {
    onClick: function onClick() {
      this.triggerEvent('click');
    },
    computeStyles: function computeStyles() {
      var _this$properties = this.properties,
          size = _this$properties.size,
          name = _this$properties.name;
      var calcSize = index.utils.calcUnit(size);
      var styles = "font-size: ".concat(calcSize, ";");

      if (validUrlReg.test(name)) {
        styles += "background-image: url(".concat(name, ");");
      }

      this.setData({
        computedStyles: styles
      });
    }
  }
});

});;define("@native-mobile-components/common/index2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
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

});;define("@native-pc-components/dialog/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var vendor = require('../common/vendor.js');

var dialog = vendor.createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var localeValues = {
    locale: 'zh_CN',
    Dialog: {
      cancelText: '取消',
      confirmText: '确认'
    }
  };
  var _default = localeValues;
  exports["default"] = _default;
});
var DialogLocale = /*@__PURE__*/vendor.getDefaultExportFromCjs(dialog);

var i18n = vendor.createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = exports.t = void 0;

  var _get = _interopRequireDefault(vendor.get_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var locales = {}; // 组件库默认使用中文语言包

  var patt = /\$\{(.*?)\}/g; // 模板转换正则：${xxx}

  /**
   * 转换函数，用于获取 key 对应的文案
   * @param {string} key 文案对应的key
   * @param {obj} obj 用于模板替换
   */

  var t = function t(key) {
    var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = (0, _get["default"])(locales, key); // 获取文案

    if (!value) {
      throw new Error("Invilad locale key: `".concat(key, "`. ") + "Make true you have registered it in `i18n/locale/".concat(locales.locale, "`."));
    }

    return value.replace(patt, function (match) {
      var innerKey = match.slice(2, match.length - 1).trim();
      var varValue = obj[innerKey];

      if (!varValue) {
        throw new Error("Variable `".concat(innerKey, "` in template `").concat(key, "` should be provided."));
      }

      return varValue;
    });
  };
  /**
   * 指定语言包
   * @param {object} 要设置的文案包
   */


  exports.t = t;

  t.use = function () {
    var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    locales = _objectSpread(_objectSpread({}, locales), l);
  };
  /**
   * 初始化语言包
   * @param {object} 设置要初始化的文案包
   */


  t.init = function () {
    var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    locales = _objectSpread(_objectSpread({}, l), locales);
  };

  var _default = t;
  exports["default"] = _default;
});
var t = /*@__PURE__*/vendor.getDefaultExportFromCjs(i18n);

t.init(DialogLocale);

Component({
  externalClasses: ['custom-class'],
  properties: {
    visible: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: '',
    },
    titleAlign: {
      type: String,
      value: 'center',
    },
    description: {
      type: String,
      value: '',
    },
    icon: {
      type: String,
      value: '',
    },
    iconColor: {
      type: String,
      value: '',
    },
    content: {
      type: String,
      value: '',
    },
    okBtnConfig: {
      type: Object,
      value: {
        customStyle: '',
        type: 'primary',
        warn: false,
      },
    },
    okText: {
      type: String,
      value: t('Dialog.confirmText'),
    },
    confirmLoading: {
      type: Boolean,
      value: false,
    },
    cancelBtnConfig: {
      type: Object,
      value: {
        customStyle: '',
        type: 'secondary',
        warn: false,
      },
    },
    cancelText: {
      type: String,
      value: t('Dialog.cancelText'),
    },
    showButtons: {
      type: Boolean,
      value: true,
    },
    overlay: {
      type: Boolean,
      value: true,
    },
    overlayClosable: {
      type: Boolean,
      value: false,
    },
    type: {
      type: String,
      value: 'normal',
      observer(v) {
        if (!['normal', 'confirm'].includes(v) && v !== '') {
          throw new Error(`Prop "type" receive invalid value "${v}"`)
        }
        return v
      },
    },
    closable: {
      type: Boolean,
      value: false,
    },
    width: {
      type: Number,
      value: 420,
    },
  },
  methods: {
    onAfterClose: function onAfterClose() {
      this.triggerEvent('afterclose');
    },
    onClose() {
      this.triggerEvent('close');
    },
    onCancel() {
      this.triggerEvent('cancel');
      this.onClose();
    },
    onOk() {
      this.triggerEvent('ok');
    },
  },
});

});;define("@native-pc-components/common/vendor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var card = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shadowList = exports.radiusList = exports.bgColorList = void 0;
  var bgColorList = ['white', 'grey'];
  exports.bgColorList = bgColorList;
  var radiusList = ['small', 'large', 'none'];
  exports.radiusList = radiusList;
  var shadowList = ['small', 'middle', 'large', 'none'];
  exports.shadowList = shadowList;
});

var checkbox = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useCheckbox = useCheckbox;
  exports.useCheckboxGroup = useCheckboxGroup;

  function useCheckbox(host) {
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled',
      groupValue: 'groupValue',
      groupDisabled: 'groupDisabled',
      checkboxDisabled: 'checkboxDisabled',
      checkboxChecked: 'checkboxChecked',
      indeterminate: 'indeterminate'
    };
    var parent = null;

    function emitChange(instance, value) {
      instance.emit('input', value);
      instance.emit('change', value);
    } // 无CheckboxGroup或传入indeterminate时，该checkbox不与CheckboxGroup交互


    function isUnderGroupControl() {
      var indeterminate = host.get(DATA_KEY.indeterminate);
      return parent && typeof indeterminate !== 'boolean';
    }

    function onChange() {
      if (host.get(DATA_KEY.checkboxDisabled)) {
        return;
      }

      var value = host.get(DATA_KEY.value);

      if (!isUnderGroupControl()) {
        emitChange(host, !value);
        return;
      }

      var groupValue = host.get(DATA_KEY.groupValue) || [];
      var selected = groupValue.slice();
      var index = selected.indexOf(value);

      if (index === -1) {
        selected.push(value);
      } else {
        selected.splice(index, 1);
      }

      emitChange(parent, selected);
    }

    function computeCheckboxChecked() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          groupValue = _ref.groupValue;

      groupValue = groupValue || host.get(DATA_KEY.groupValue);
      var value = host.get(DATA_KEY.value);

      if (!isUnderGroupControl()) {
        return value;
      }

      var valueInGroup = groupValue && groupValue.indexOf(value) !== -1;
      return valueInGroup;
    }

    function computeCheckboxDisabled() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          groupDisabled = _ref2.groupDisabled;

      groupDisabled = groupDisabled || host.get(DATA_KEY.groupDisabled);
      return groupDisabled || host.get(DATA_KEY.disabled);
    }

    function init(parentInstance) {
      parent = parentInstance;

      if (parent) {
        parent.link(host);
      }
    }

    host.init = init;
    host.onChange = onChange;
    host.computeCheckboxChecked = computeCheckboxChecked;
    host.computeCheckboxDisabled = computeCheckboxDisabled;
  }

  function useCheckboxGroup(host) {
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled',
      groupValue: 'groupValue',
      groupDisabled: 'groupDisabled'
    };
    var children = [];

    function updateChild(child) {
      child.setGroupValue(host.get(DATA_KEY.value));
      child.setGroupDisabled(host.get(DATA_KEY.disabled));
    }

    function updateChildren() {
      children.forEach(updateChild);
    }

    function link(child) {
      children.push(child);
      updateChild(child);
    }

    function unlink(child) {
      children = children.filter(function (item) {
        return item !== child;
      });
      child.init(null);
    }

    host.link = link;
    host.unlink = unlink;
    host.updateChildren = updateChildren;
  }
});

var event = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _default = Behavior({
    methods: {
      emit: function emit(event, params) {
        this.triggerEvent(event, params);
      },
      getParamsFromEvent: function getParamsFromEvent(e) {
        return e.detail;
      }
    }
  });

  exports["default"] = _default;
});
var eventBehavior = /*@__PURE__*/getDefaultExportFromCjs(event);

var data = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  } // eslint-disable-next-line no-undef


  var _default = Behavior({
    methods: {
      get: function get(key, isProps) {
        if (isProps) {
          return this.properties[key];
        }

        return this.data[key];
      },
      set: function set(key, value) {
        this.setData(_defineProperty({}, key, value));
      },
      setAll: function setAll(data) {
        var _this = this;

        return new Promise(function (res) {
          _this.setData(data, res);
        });
      }
    }
  });

  exports["default"] = _default;
});
var dataBehavior = /*@__PURE__*/getDefaultExportFromCjs(data);

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var isArray_1 = isArray;

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
});

/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof_1(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof_1(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

/** Built-in value references. */

var _Symbol2 = _root.Symbol;
var _Symbol = _Symbol2;

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof_1(value) == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof_1(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }

  var type = _typeof_1(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof_1(value);

  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */

var coreJsData = _root['__core-js_shared__'];
var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }

  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */

var nativeCreate = _getNative(Object, 'create');
var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */

var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */

var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */

var Map = _getNative(_root, 'Map');
var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map || _ListCache)(),
    'string': new _Hash()
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof_1(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
var _MapCache = MapCache;

/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = _MapCache;
var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */

var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize_1(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = _memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }

  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */

var INFINITY$1 = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var fab = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.typeList = void 0; // eslint-disable-next-line import/prefer-default-export

  var typeList = ['primary', 'secondary'];
  exports.typeList = typeList;
});

var utils = createCommonjsModule(function (module, exports) {

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
      tt.createSelectorQuery()["in"](context)[selectFunc](selector).boundingClientRect(function (data) {
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

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {// No operation performed.
}

var noop_1 = noop;

var loading = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = useDelayedLoading;

  var _noop = _interopRequireDefault(noop_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function useDelayedLoading(_ref) {
    var loading = _ref.loading,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        _ref$onUpdate = _ref.onUpdate,
        onUpdate = _ref$onUpdate === void 0 ? _noop["default"] : _ref$onUpdate;
    var state = {
      delay: delay,
      delayedLoading: delay === 0 ? loading : false
    };
    var pendingTimer;

    var updateLoading = function updateLoading(newLoading, newDelay) {
      if (newDelay !== undefined) {
        state.delay = newDelay;
      }

      if (newLoading) {
        if (state.delay === 0) {
          state.delayedLoading = true;
        } else {
          pendingTimer = setTimeout(function () {
            state.delayedLoading = true;
            onUpdate(state.delayedLoading);
          }, state.delay);
        }
      } else {
        clearTimeout(pendingTimer);
        state.delayedLoading = false;
      }

      onUpdate(state.delayedLoading);
    };

    return {
      delayedLoading: state.delayedLoading,
      updateLoading: updateLoading
    };
  }
});
var useDelayedLoading = /*@__PURE__*/getDefaultExportFromCjs(loading);

var transition = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getClassNames = getClassNames;
  exports.nextTick = nextTick;
  exports.genAsyncControls = genAsyncControls;

  function getClassNames(name) {
    var base = "ud-transition-".concat(name);
    var enter = "".concat(base, "-enter");
    var enterActive = "".concat(enter, "-active");
    var enterTo = "".concat(enter, "-to");
    var leave = "".concat(base, "-leave");
    var leaveActive = "".concat(leave, "-active");
    var leaveTo = "".concat(leave, "-to");
    return {
      enter: enter,
      enterActive: enterActive,
      enterTo: enterTo,
      leave: leave,
      leaveActive: leaveActive,
      leaveTo: leaveTo
    };
  }

  function nextTick() {
    return new Promise(function (resolve) {
      return setTimeout(resolve, 1000 / 30);
    });
  }

  function genAsyncControls() {
    var resolve;
    var reject;
    var promise = new Promise(function () {
      for (var _len = arguments.length, controls = new Array(_len), _key = 0; _key < _len; _key++) {
        controls[_key] = arguments[_key];
      }

      resolve = controls[0];
      reject = controls[1];
    });
    return {
      promise: promise,
      resolve: resolve,
      reject: reject
    };
  }
});

var radio = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useRadio = useRadio;
  exports.useRadioGroup = useRadioGroup;

  function useRadio(host) {
    var parent;
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled',
      radioChecked: 'radioChecked',
      radioDisabled: 'radioDisabled',
      groupValue: 'groupValue',
      groupDisabled: 'groupDisabled'
    };

    function connectParent(parentNode) {
      parent = parentNode;
    }

    function emitChange(value) {
      var instance = parent || host;
      instance.emit('input', value);
      instance.emit('change', value);
    }

    function onChange(value) {
      if (!host.get(DATA_KEY.radioChecked) && !host.get(DATA_KEY.radioDisabled)) {
        emitChange(parent ? value : true);
      }
    }

    function computeRadioChecked() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          groupValue = _ref.groupValue;

      groupValue = groupValue || host.get(DATA_KEY.groupValue);

      if (!parent) {
        return host.get(DATA_KEY.value);
      }

      var valueEqualToGroup = groupValue && groupValue === host.get(DATA_KEY.value);
      return valueEqualToGroup;
    }

    function computeRadioDisabled() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          groupDisabled = _ref2.groupDisabled;

      groupDisabled = groupDisabled || host.get(DATA_KEY.groupDisabled);
      return groupDisabled || host.get(DATA_KEY.disabled);
    }

    host.connectParent = connectParent;
    host.onChange = onChange;
    host.computeRadioChecked = computeRadioChecked;
    host.computeRadioDisabled = computeRadioDisabled;
  }

  function useRadioGroup(host) {
    var children = [];
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled'
    };

    function updateChild(child) {
      child.setGroupValue(host.get(DATA_KEY.value));
      child.setGroupDisabled(host.get(DATA_KEY.disabled));
    }

    function updateChildren() {
      children.forEach(updateChild);
    }

    function link(child) {
      children.push(child);
      updateChild(child);
    }

    function unlink(child) {
      children = children.filter(function (item) {
        return item !== child;
      });
    }

    host.link = link;
    host.unlink = unlink;
    host.updateChildren = updateChildren;
  }
});

var _switch = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = useSwitch;

  function useSwitch(host) {
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled',
      isAndroid: 'isAndroid',
      isIos: 'isIos',
      loading: 'loading'
    };

    function emitChange(value) {
      host.emit('input', value);
      host.emit('change', value);
    }

    function handleTapSwitch() {
      if (host.get(DATA_KEY.disabled, true) || host.get(DATA_KEY.loading, true)) {
        return;
      }

      emitChange(!host.get(DATA_KEY.value, true));
    }

    host.emitChange = emitChange;
    host.handleTapSwitch = handleTapSwitch;
  }
});

var useSwitch = /*@__PURE__*/getDefaultExportFromCjs(_switch);

var tag = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.colors = exports.sizes = exports.types = void 0;
  var types = ['default', 'options', 'avatar'];
  exports.types = types;
  var sizes = ['default', 'large'];
  exports.sizes = sizes;
  var colors = ['neutral', 'neutral_option', 'light_neutral', 'neutral_ghost', 'blue', 'blue_option', 'blue_ghost', 'carmine', 'carmine_ghost', 'indigo', 'indigo_option', 'wathet', 'wathet_option', 'red', 'red_option', 'red_ghost', 'green', 'green_option', 'orange', 'orange_option', 'violet', 'violet_option', 'purple', 'turquoise', 'turquoise_option', 'lime', 'lime_option', 'yellow', 'yellow_option'];
  exports.colors = colors;
});

exports.card = card;
exports.checkbox = checkbox;
exports.createCommonjsModule = createCommonjsModule;
exports.dataBehavior = dataBehavior;
exports.eventBehavior = eventBehavior;
exports.fab = fab;
exports.getDefaultExportFromCjs = getDefaultExportFromCjs;
exports.get_1 = get_1;
exports.radio = radio;
exports.tag = tag;
exports.transition = transition;
exports.useDelayedLoading = useDelayedLoading;
exports.useSwitch = useSwitch;
exports.utils = utils;

});;define("@native-pc-components/modal/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

require('../common/vendor.js');
var transition = require('../common/transition.js');

Component({
  options: { multipleSlots: true, addGlobalClass: true },
  externalClasses: ['custom-class'],
  behaviors: [
    transition.transition({
      inPropName: 'visible',
      namePropName: 'transitionName',
      afterleave: 'afterclose',
    }),
  ],
  properties: {
    customStyle: {
      type: String,
      value: '',
    },
    visible: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.enter();
        } else {
          this.leave();
        }
      },
    },
    position: {
      type: String,
      value: 'center',
    },
    transitionName: {
      type: String,
      value: 'fade',
    },
    duration: {
      type: String,
      value: 'normal',
    },
    timingFunc: {
      type: String,
      value: 'linear',
    },
    overlay: {
      type: Boolean,
      value: true,
    },
    overlayClosable: {
      type: Boolean,
      value: true,
    },
    overlayDuration: {
      type: String,
      value: 'normal',
    },
    overlayTimingFunc: {
      type: String,
      value: 'linear',
    },
    keepAlive: {
      type: Boolean,
      value: false,
    },
  },

  methods: {
    onOverlayClick() {
      if (this.data.overlayClosable) {
        this.triggerEvent('close');
      }
    },
  },
});

});;define("@native-pc-components/common/transition.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var vendor = require('./vendor.js');

function transition(params = {}) {
  const { inPropName = 'in', namePropName = 'name' } = params;
  return Behavior({
    data: {
      mounted: false,
      display: false,
      classNames: [],
    },

    methods: {
      emitTransitionEvent(...args) {
        const [eventName, ...rest] = args;
        const customEventName = params[eventName];
        const cbName = `on${eventName
          .slice(0, 1)
          .toUpperCase()}${eventName.slice(1)}`;
        const cb = params[cbName];

        if (cb) {
          cb.call(this, ...args);
        }

        if (customEventName) {
          this.triggerEvent(...[customEventName, ...rest]);
        } else {
          this.triggerEvent(...args);
        }
      },
      enter() {
        const classNames = vendor.transition.getClassNames(this.data[namePropName]);
        this.emitTransitionEvent('beforeenter');

        vendor.transition.nextTick()
          .then(() => {
            this.setData({
              mounted: true,
              display: true,
              classNames: `${classNames.enter} enter-class`,
            });
          })
          .then(vendor.transition.nextTick)
          .then(() => {
            this.transitionControls = vendor.transition.genAsyncControls();
            this.setData({
              mounted: true,
              display: true,
              classNames: `${classNames.enterActive} enter-active-class ${classNames.enterTo} enter-to-class`,
            });
            this.emitTransitionEvent('enter');
          })
          .then(() => this.transitionControls.promise)
          .then(() => {
            this.setData({
              classNames: '',
            });
            this.emitTransitionEvent('afterenter');
          });
      },

      leave() {
        const classNames = vendor.transition.getClassNames(this.data[namePropName]);
        this.emitTransitionEvent('beforeleave');

        vendor.transition.nextTick()
          .then(() => {
            this.setData({
              classNames: `${classNames.leave} leave-class`,
            });
          })
          .then(vendor.transition.nextTick)
          .then(() => {
            this.transitionControls = vendor.transition.genAsyncControls();
            this.setData({
              classNames: `${classNames.leaveTo} leave-to-class ${classNames.leaveActive} leave-active-class`,
            });
            this.emitTransitionEvent('leave');
          })
          .then(() => this.transitionControls.promise)
          .then(() => {
            this.setData({
              classNames: '',
              mounted: false,
              display: false,
            });
            this.emitTransitionEvent('afterleave');
          });
      },

      onTransitionEnd() {
        if (this.transitionControls) {
          this.transitionControls.resolve();
        }
      },
    },
  })
}

exports.transition = transition;

});;define("@native-pc-components/overlay/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

require('../common/vendor.js');
var transition = require('../common/transition.js');

Component({
  options: { multipleSlots: true, addGlobalClass: true },
  externalClasses: ['custom-class'],
  behaviors: [
    transition.transition({
      inPropName: 'visible',
      namePropName: 'transitionName',
    }),
  ],
  properties: {
    customStyle: {
      type: String,
      value: '',
    },
    visible: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.enter();
        } else {
          this.leave();
        }
      },
    },
    transitionName: {
      type: String,
      value: 'fade',
    },
    duration: {
      type: String,
      value: 'normal',
    },
    timingFunc: {
      type: String,
      value: 'linear',
    },
  },
  methods: {
    noop() {},
  },
});

});;define("@native-pc-components/button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

const typeList = [
  'primary',
  'secondary',
  'secondary-primary',
  'text',
  'icon',
  'icon-secondary',
  'link',
  'text-primary',
  'icon-primary',
];

const shapeList = ['round'];

const sizeList = ['extra-small', 'small', 'middle', 'large'];

Component({
  properties: {
    type: {
      type: String,
      value: 'secondary',
      observer(v) {
        if (!typeList.includes(v)) {
          throw new Error(`Prop "type" receive invalid value "${v}"`)
        }
        this.computeIsIcon(v);
        return v
      },
    },
    block: { type: Boolean, value: false },
    warn: { type: Boolean, value: false },
    ghost: { type: Boolean, value: false },
    shape: {
      type: String,
      value: '',
      observer(v) {
        if (!shapeList.includes(v) && v !== '') {
          throw new Error(`Prop "shape" receive invalid value "${v}"`)
        }
        return v
      },
    },
    icon: { type: String, value: '' },
    size: {
      type: String,
      value: 'middle',
      observer(v) {
        if (!sizeList.includes(v)) {
          throw new Error(`Prop "size" receive invalid value "${v}"`)
        }
        return v
      },
    },
    loading: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    selected: { type: Boolean, value: false },
    boarding: { type: Boolean, value: false },
    customStyle: { type: String, value: '' },
    // 原生属性透传
    formType: { type: String, value: '' },
    openType: { type: String, value: '' },
    hoverClass: { type: String, value: 'button-hover' },
    hoverStopPropagation: { type: Boolean, value: false },
  },

  data: {
    /* eslint-disable */
    isIcon: false,
  },

  methods: {
    onClick(e) {
      const { disabled, loading } = this.properties;
      if (disabled || loading) return
      this.triggerEvent('click', e);
    },

    computeIsIcon(type) {
      const isIcon = [
        'icon',
        'icon-primary',
        'icon-secondary',
        'icon-secondary-primay',
      ].includes(type);
      this.setData({
        isIcon,
      });
    },
  },
});

});;define("@native-pc-components/icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var vendor = require('../common/vendor.js');

const validTypeReg = /_(outlined|filled|colorful)$/;
const validUrlReg = /\//;
Component({
  options: { multipleSlots: true, addGlobalClass: true },
  externalClasses: ['custom-class'],
  properties: {
    name: {
      type: String,
      value: '',
      observer(v) {
        if (!validTypeReg.test(v) && !validUrlReg.test(v)) {
          throw new Error(`Prop "name" receive invalid value "${v}"`)
        }
        this.computeStyles();
      },
    },
    color: { type: String, value: '' },
    customStyle: { type: String, value: '' },
    size: {
      type: [String, Number],
      value: null,
      observer() {
        this.computeStyles();
      },
    },
  },

  data: {
    computedStyles: '',
    isDarkTheme: vendor.utils.getSystemInfo().isDarkMode,
  },

  attached() {
    this.computeStyles();
  },

  methods: {
    onClick() {
      this.triggerEvent('click');
    },
    computeStyles() {
      const { size, name } = this.properties;
      const calcSize = vendor.utils.calcUnit(size);
      let styles = `font-size: ${calcSize};`;
      if (validUrlReg.test(name)) {
        styles += `background-image: url(${name});`;
      }
      this.setData({
        computedStyles: styles,
      });
    },
  },
});

});;define("@native-mobile-components/fab/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var _commonjsHelpers = require('../common/_commonjsHelpers.js');

var fab = _commonjsHelpers.createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.typeList = void 0; // eslint-disable-next-line import/prefer-default-export

  var typeList = ['primary', 'secondary'];
  exports.typeList = typeList;
});

Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    type: {
      type: String,
      value: 'secondary',
      observer: function observer(v) {
        if (!fab.typeList.includes(v)) {
          throw new Error("Prop \"type\" receive invalid value \"".concat(v, "\""));
        }

        return v;
      }
    },
    disabled: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: ''
    },
    // 控制悬浮按钮的位置
    top: {
      type: [String, Number],
      value: ''
    },
    bottom: {
      type: [String, Number],
      value: '0'
    },
    left: {
      type: [String, Number],
      value: ''
    },
    right: {
      type: [String, Number],
      value: '0'
    },
    // 原生属性
    formType: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: ''
    },
    hoverClass: {
      type: String,
      value: 'button-hover'
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    onClick: function onClick(e) {
      if (this.properties.disabled) return;
      this.triggerEvent('click', e);
    }
  }
});

});;define("@native-pc-components/tag/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var vendor = require('../common/vendor.js');

Component({
  properties: {
    text: {
      type: String,
      value: '',
    },
    closable: {
      type: Boolean,
      value: false,
    },
    clickable: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    type: {
      value: vendor.tag.types[0],
      type: String,
      observer(type) {
        this.setData({ isNotDefaultType: type !== 'default' });
      },
    },
    color: {
      type: String,
      value: 'neutral',
      observer(value) {
        this.handleType(value);
      },
    },
    size: {
      type: String,
      value: vendor.tag.sizes[0],
    },
    icon: {
      type: String,
      value: '',
    },
  },

  data: {
    isNotDefaultType: false,
    curTagStyles: '',
    completeStyles: '',
    showClickClass: false,
  },

  attached() {},
  methods: {
    handleClick() {
      const { clickable, closable } = this.properties;
      if (clickable && !closable) {
        this.triggerEvent('click', {});
      }
    },
    handleTouchStart() {
      const { disabled } = this.properties;

      if (!disabled) {
        this.setData({
          showClickClass: true,
        });
      }
    },
    handleTouchEnd() {
      const { disabled } = this.properties;

      this.setData({
        showClickClass: false,
      });
      if (!disabled) {
        this.triggerEvent('close', {});
      }
    },
    handleType(color) {
      const styles = `color: #ffffff; background-color: ${color};`;
      if (!vendor.tag.colors.includes(color)) {
        this.setData({
          curTagStyles: styles,
          completeStyles: styles,
        });
      }
    },
  },
});

});;define("@native-pc-components/view/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 Component({
  externalClasses: ['customClass'],
  properties: {
    customStyle: {
      type: String,
      value: '',
    },
    hoverClass: {
      type: String,
      value: 'none',
    },
    hoverStartTime: {
      type: Number,
      value: 50,
    },
    hoverStayTime: {
      type: Number,
      value: 400,
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false,
    },
  },

  methods: {
    onMouseEnter(e) {
      this.triggerEvent('mouseenter', e)
    },

    onMouseLeave(e) {
      this.triggerEvent('mouseleave', e)
    },

    onTransitionEnd(e) {
      this.triggerEvent('transitionend', e)
    },

    onClick(e) {
      this.triggerEvent('click', e)
    },
  },
})

});;define("pages/account-detail/pc/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 (tt["webpackJsonp"]=tt["webpackJsonp"]||[]).push([[7],{643:function(e,n,t){e.exports={"submenu-container":"index__submenu-container___3newf","submenu-content":"index__submenu-content___BPAxy","submenu-item":"index__submenu-item___1IOZP"}},644:function(e,n,t){e.exports={"menu-container":"index__menu-container___3b_42","menu-item":"index__menu-item___1xUNL","menu-content":"index__menu-content___2yjXc",mask:"index__mask___1wW56",text:"index__text___1fX_J",submenu:"index__submenu___1uuk-","submenu-container":"index__submenu-container___2Qj_k","arrow-before":"index__arrow-before___1UQVw","arrow-after":"index__arrow-after___2JdYM"}},645:function(e,n,t){e.exports={"footer-container":"index__footer-container___13hpU",disabled:"index__disabled___127gk"}},646:function(e,n,t){e.exports={"header-container":"index__header-container___3bS4V","in-navbar":"index__in-navbar___35NL1","main-info":"index__main-info___pdmnW","main-icon":"index__main-icon___26BeP",message:"index__message___26Fcc",name:"index__name___3vCyd","name-text":"index__name-text___2fgJC","name-text-new":"index__name-text-new___X_iAn","sub-message":"index__sub-message___S1YXT",brief:"index__brief___KNT2W",operator:"index__operator___2E3m8","operator-text":"index__operator-text___1B014","main-info-official":"index__main-info-official___35pUV"}},647:function(e,n,t){e.exports={popover:"index__popover___12vcW","menu-container":"index__menu-container___28Jie","menu-item":"index__menu-item___1bSo6",menu:"index__menu___2SL-7",icon:"index__icon___1-dtz","menu-name":"index__menu-name___3ZsF3",active:"index__active___rcnp1"}},648:function(e,n,t){e.exports={"menu-container":"index__menu-container___1soC7",disabled:"index__disabled___1FS6_"}},649:function(e,n,t){e.exports={"header-filter":"index__header-filter___3t3e5",filter:"index__filter___3EsBP",line:"index__line___AO4hO","header-container":"index__header-container___292h1","in-navbar":"index__in-navbar___3JvZQ","main-info":"index__main-info___2q_tr","main-icon":"index__main-icon___15rQt",message:"index__message___3Hqe8",name:"index__name___3z8eS","name-text":"index__name-text___Drt4h",operator:"index__operator___3W2zH","operator-text":"index__operator-text___19Ycn",popover:"index__popover___2bOoh","sub-message":"index__sub-message___37ZRz",brief:"index__brief___1Vo_T"}},650:function(e,n,t){e.exports={"normal-card":"index__normal-card___3Ftz0",items:"index__items___3Ih-8","expand-btn":"index__expand-btn___15Uw1"}},651:function(e,n,t){e.exports={"image-collapsed":"index__image-collapsed___2LR8X","image-wrapper":"index__image-wrapper____sJnt","image-wrapper-collapsed":"index__image-wrapper-collapsed___2nGWz","image-collapsed-zh":"index__image-collapsed-zh___3-ZZi","image-collapsed-en":"index__image-collapsed-en___3je4d","image-collapsed-jp":"index__image-collapsed-jp___3aB2p","rich-text-wraper":"index__rich-text-wraper___3cQWJ",selectTdClass:"index__selectTdClass___3n5k4",noBorderTable:"index__noBorderTable___3pi0K",firstRow:"index__firstRow___3bAJu","ue-table-interlace-color-single":"index__ue-table-interlace-color-single___3Xp45","ue-table-interlace-color-double":"index__ue-table-interlace-color-double___2oFVi","list-paddingleft-1":"index__list-paddingleft-1___23Kzb","list-paddingleft-2":"index__list-paddingleft-2___2PGp6","list-paddingleft-3":"index__list-paddingleft-3___-1RE4",disabledSelected:"index__disabledSelected___l0JhE","render-short-text":"index__render-short-text___39Mhr","short-text-img-collapse":"index__short-text-img-collapse___1ZHd5","rich-text-zh":"index__rich-text-zh___2EhrQ","rich-text-en":"index__rich-text-en___2rJlN","rich-text-jp":"index__rich-text-jp___3YK0t"}},652:function(e,n,t){e.exports={"image-displayer":"index__image-displayer___1AeiB",horizontal:"index__horizontal___3Yr1_",vertical:"index__vertical___r6-Hv",img:"index__img___3bypa",tag:"index__tag___3HT8s"}},653:function(e,n,t){e.exports={"text-card":"index__text-card___2thNj","text-card-content":"index__text-card-content___E9QaO",topBorder:"index__topBorder___2QMVH",title:"index__title___JUU_z","rich-text-wraper":"index__rich-text-wraper___Mw4RI","img-wraper":"index__img-wraper___1v8Z9"}},654:function(e,n,t){e.exports={divider:"index__divider___1biKJ",desc:"index__desc___1ydr0",line:"index__line___4Fw0n","open-btn":"index__open-btn___3brAt",icon:"index__icon___37e_V"}},655:function(e,n,t){e.exports={"text-msg":"index__text-msg___14Ep5","account-name":"index__account-name___35WXJ",isAfterRecall:"index__isAfterRecall___1sE_r",isBeforeRecall:"index__isBeforeRecall___WXUVr"}},656:function(e,n,t){e.exports={"feed-item":"index__feed-item___3UfbI",line:"index__line___3ZScj"}},657:function(e,n,t){e.exports={"scroll-container":"index__scroll-container___3h4Vx","scroll-content":"index__scroll-content___oZwzQ","scroll-container-new":"index__scroll-container-new___2diQC",feed:"index__feed___2LBuf",mt:"index__mt____lZ04","recommend-header-new":"index__recommend-header-new___1qVrX",card:"index__card___3BHFt","recommend-header":"index__recommend-header___2nTuw","no-more":"index__no-more___1JmYF",loading:"index__loading___3d3h9","feed-list":"index__feed-list___3I8P-","folder-list":"index__folder-list___20-eK",time:"index__time___1BweJ",text:"index__text___iVqgC","load-history":"index__load-history___293di",icon:"index__icon___1ySdS",empty:"index__empty___1pETt",image:"index__image___1ml2y"}},658:function(e,n,t){e.exports={"scroll-container":"index__scroll-container___1ajjE",folder:"index__folder___3axyX","scroll-container-new":"index__scroll-container-new___yXGEY","scroll-content":"index__scroll-content___35hzl","scroll-content-new":"index__scroll-content-new___3-Jxy",mt:"index__mt___MrbE8",card:"index__card___2oO65",time:"index__time___1gayT",text:"index__text___1Fzjb","feed-item":"index__feed-item___tWorO","no-more":"index__no-more___1YA_s",loading:"index__loading___1DJ4M",empty:"index__empty___2QKq3",image:"index__image___104UQ"}},659:function(e,n,t){e.exports={"account-detail-page":"index__account-detail-page___84TEg",body:"index__body___2-m_j","hack-header-border":"index__hack-header-border___2nCGf",header:"index__header___19Vgu","in-feed":"index__in-feed___1-5kn","new-header":"index__new-header___3zspQ","canvas-wrapper":"index__canvas-wrapper___1mmt8"}},666:function(e,n,t){"use strict";t.r(n);var c=t(23),i=t(10),_=t(11),a=t.n(_),o=t(2),r=t(1),s=t(13),d=t.n(s),l=t(188),u=t(48),x=t(177),m=t(4),b=t(26),j=t(28),f=t(44),p=t(45),O=t(21),h=t.n(O),g=t(8),v=t(3),w=t(51),y=t(27),N=Object(o["createContext"])({accountId:"",userAccount:{},show:!1,hasMenu:!1,setShow:y["noop"]}),T=N,I=(t(643),t(0));var C=function(e){var n=e.menus,t=Object(o["useContext"])(T),c=t.accountId;return Object(I["jsx"])(r["n"],{className:"index__submenu-container___3newf",children:n.map((function(e){return Object(I["jsx"])(r["n"],{className:"index__submenu-item___1IOZP",onClick:function(){Object(w["a"])(e.contentType,{target:e.menuContent,accountId:c,SubMenuName:Object(v["b"])(e.name)}),Object(g["Q"])(g["b"],{id:e.id,superId:c,name:Object(v["b"])(e.name),type:"".concat(e.contentType)})},children:Object(I["jsx"])(r["n"],{className:"index__submenu-content___BPAxy",style:{cursor:"pointer"},children:Object(v["b"])(e.name)})},e.id)}))})},k=C,S=(t(644),{"./index.less":{"menu-container":"index__menu-container___3b_42","menu-item":"index__menu-item___1xUNL","menu-content":"index__menu-content___2yjXc",mask:"index__mask___1wW56",text:"index__text___1fX_J",submenu:"index__submenu___1uuk-","submenu-container":"index__submenu-container___2Qj_k","arrow-before":"index__arrow-before___1UQVw","arrow-after":"index__arrow-after___2JdYM","in-ipx":"index__in-ipx___1oFfl"}});var F="8px",M=function(e,n){return e?{left:"".concat(e-n,"px")}:{}},A=function(e){Object(f["a"])(t,e);var n=Object(p["a"])(t);function t(e){var c;return Object(b["a"])(this,t),c=n.call(this,e),c.state={showId:null,submenuOffset:[],arrowOffset:[],computeSubmenuOffset:!1},c}return Object(j["a"])(t,[{key:"onMenuItemClick",value:function(e){var n=this.context.setShow;n(!0),this.setState({showId:e.id})}},{key:"computeSubmenuOffset",value:function(){var e=this,n=h.a.createSelectorQuery(),t=null,c=[],i=[];n.select("#menu-container").boundingClientRect((function(e){t=e}));var _=this.props.menus;_.forEach((function(e,t){var _=e.subMenus&&e.subMenus.length>0;_&&(n.select(".submenu-container-".concat(t)).boundingClientRect((function(e){c[t]=e})),n.select(".menu-item-".concat(t)).boundingClientRect((function(e){i[t]=e})))})),n.exec((function(){if(t){var n=t.left,_=t.right,a=[],o=c.map((function(e,t){if(!e)return 0;var c=0;return e.left-5<n?c=5:+e.right+5>_&&(c=2*(_-e.right)-5),c&&(a[t]=i[t].width/2-c),c}));e.setState({submenuOffset:o,arrowOffset:a})}}))}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){var e=this,n=this.state.computeSubmenuOffset;n||(this.computeSubmenuOffset(),this.setState({computeSubmenuOffset:!0})),setTimeout((function(){var n=e.context.show,t=e.state.showId;!n&&t&&e.setState({showId:null})}))}},{key:"render",value:function(){var e=this,n=this.props,t=n.menus,c=n.isIphoneX,i=this.state,_=i.showId,o=i.submenuOffset,s=i.arrowOffset,d=this.context.accountId;return Object(I["jsx"])(r["n"],{id:"menu-container",className:a()("menu-container ".concat(c?"in-ipx":""),S),children:t.map((function(n,t){var c=n.subMenus&&n.subMenus.length>0,i={};return o[t]&&(i.left="".concat(o[t],"px")),n.id===_&&(i.bottom=F),Object(I["jsxs"])(r["n"],{className:"menu-item-".concat(t)+" index__menu-item___1xUNL",children:[c&&Object(I["jsx"])(r["n"],{className:"index__submenu___1uuk-",children:Object(I["jsxs"])(r["n"],{className:"submenu-container-".concat(t)+" index__submenu-container___2Qj_k",style:i,children:[Object(I["jsx"])(k,{menus:n.subMenus}),Object(I["jsx"])(r["n"],{className:"index__arrow-before___1UQVw",style:M(s[t],5)}),Object(I["jsx"])(r["n"],{className:"index__arrow-after___2JdYM",style:M(s[t],4)})]})}),Object(I["jsxs"])(r["n"],{className:"index__menu-content___2yjXc",onClick:function(t){c&&e.onMenuItemClick(n),c&&_!==n.id||e.setState({showId:null}),c||Object(w["a"])(n.contentType,{target:n.menuContent,accountId:d,ParentMenuName:Object(v["b"])(n.name)}),t.stopPropagation();var i={id:n.id,superId:d,name:Object(v["b"])(n.name),flag:+c};c||(i.type="".concat(n.contentType)),Object(g["Q"])(g["a"],i)},style:{cursor:"pointer"},children:[c&&Object(I["jsx"])(r["n"],{className:"iconfont icon-menu-more"}),Object(I["jsx"])(r["n"],{className:"index__text___1fX_J",children:Object(v["b"])(n.name)}),Object(I["jsx"])(r["n"],{className:"index__mask___1wW56"})]})]},n.id)}))})}}]),t}(o["Component"]);Object(m["a"])(A,"options",{addGlobalClass:!0}),Object(m["a"])(A,"defaultProps",{menus:[]}),Object(m["a"])(A,"contextType",T);var R,B=A,D=t(14),z=t(5),H=(t(645),{"./index.less":{"footer-container":"index__footer-container___13hpU",disabled:"index__disabled___127gk","in-ipx":"index__in-ipx___9-4sZ"}});var E,J,L=(R={},Object(m["a"])(R,z["u"].AccountDisable,Object(v["e"])("ArticleDetail_AccountShutdown")),Object(m["a"])(R,z["u"].AccountVisitorForbidden,Object(v["e"])("AccountDetail_Invisible")),R),Q=function(e){var n=e.menus,t=e.errorType,c=Object(D["f"])(),i=c.data.isIPhoneX;return t!==z["u"].None?Object(I["jsx"])(r["n"],{className:a()("footer-container ".concat(i?"in-ipx":""),H),children:Object(I["jsx"])(r["n"],{className:"index__disabled___127gk",children:L[t]})}):n.length>0?Object(I["jsx"])(r["n"],{className:a()("footer-container ".concat(i?"in-ipx":""),H),children:Object(I["jsx"])(B,{menus:n,isIphoneX:i})}):null},U=Q,P=t(65),W=t(214),V=t(215),X=t(94),q=t(53),Z=(t(646),{"./index.less":{"header-container":"index__header-container___3bS4V","in-navbar":"index__in-navbar___35NL1","main-info":"index__main-info___pdmnW","main-icon":"index__main-icon___26BeP",message:"index__message___26Fcc",name:"index__name___3vCyd","name-text":"index__name-text___2fgJC","name-text-new":"index__name-text-new___X_iAn","sub-message":"index__sub-message___S1YXT",brief:"index__brief___KNT2W",operator:"index__operator___2E3m8","operator-text":"index__operator-text___1B014","main-info-official":"index__main-info-official___35pUV"}});var Y=Object(v["d"])(),K=(E={},Object(m["a"])(E,z["j"].Forced,Object(v["e"])("AccountDetail_FollowForce")),Object(m["a"])(E,z["j"].Normal,Object(v["e"])("AccountList_Followed")),Object(m["a"])(E,z["j"].Recommend,Object(v["e"])("AccountDetail_FollowCancel")),Object(m["a"])(E,z["j"].None,Object(v["e"])("AccountDetail_Follow")),E),G=(J={},Object(m["a"])(J,z["j"].Forced,Object(v["e"])("Account_ForcefollowTooltip")),Object(m["a"])(J,z["j"].Recommend,Object(v["e"])("Account_RecommandedfollowTooltip")),J),$=function(e){var n=e.accountDetail,t=e.changeFollowType,c=e.inNavbar,_=Object(q["a"])(n,t,void 0,q["b"],"account_detail"),s=_.following,l=_.toggleFollowType,u=Object(o["useState"])(Object(v["e"])("AccountList_Followed")),x=Object(i["a"])(u,2),m=x[0],b=x[1],j=Object(v["b"])(n.desc,Y).replace(/\n/g," "),f=Object(D["b"])(),p=f.data.newHome,O=n.followType===z["j"].Normal||n.followType===z["j"].Recommend,h=n.followType===z["j"].Forced,g=G[n.followType],y=Object(I["jsx"])(W["a"],{onClick:l,loading:s,type:O||h?"secondary":"secondary-primary",disabled:h,icon:n.followType===z["j"].None?"add_outlined":"",size:"small",style:{minWidth:"72px"},children:O?m:K[n.followType]}),N=n.ownership.type;return Object(I["jsxs"])(r["n"],{className:a()(d()("header-container",{"in-navbar":c}),Z),children:[Object(I["jsxs"])(r["n"],{className:a()(d()("main-info",{"main-info-official":p}),Z),children:[Object(I["jsx"])(r["n"],{className:"index__main-icon___26BeP",onClick:function(){return Object(w["b"])(n)},children:Object(I["jsx"])(X["a"],{size:p?36:40,src:n.avatar,preview:!1})}),Object(I["jsxs"])(r["n"],{className:"index__message___26Fcc",children:[Object(I["jsxs"])(r["n"],{className:"index__name___3vCyd",children:[Object(I["jsx"])(r["k"],{selectable:!0,className:"index__name-text___2fgJC",onClick:function(){return Object(w["b"])(n)},children:Object(v["b"])(n.name,Y)}),!p&&Object(I["jsx"])(P["a"],{type:N})]}),j&&Object(I["jsxs"])(r["n"],{className:"index__sub-message___S1YXT",children:[Object(I["jsx"])(r["n"],{className:"index__brief___KNT2W",onClick:function(){return Object(w["b"])(n)},children:Object(I["jsx"])(r["k"],{selectable:!0,children:j})}),Object(I["jsx"])(r["n"],{className:"iconfont icon-arrow-right",onClick:function(){return Object(w["b"])(n)}})]})]})]}),!c&&Object(I["jsx"])(r["n"],{className:"index__operator___2E3m8",onMouseOver:function(){s||b(Object(v["e"])("AccountDetail_FollowCancel"))},onMouseOut:function(){b(Object(v["e"])("AccountList_Followed"))},children:g?Object(I["jsx"])(V["a"],{text:g,placement:"left",children:y}):y})]})},ee=$,ne=t(78),te=t(69),ce=t(6),ie=t(149),_e=t(25),ae=t(108),oe=t(18),re=t(133),se=(t(647),{"./index.less":{popover:"index__popover___12vcW","menu-container":"index__menu-container___28Jie","menu-item":"index__menu-item___1bSo6",menu:"index__menu___2SL-7",icon:"index__icon___1-dtz","menu-name":"index__menu-name___3ZsF3",active:"index__active___rcnp1"}});var de,le=function(e){var n=e.menus,t=e.isIphoneX,c=e.accountId,_=e.style,o=void 0===_?{}:_,s=Object(_e["d"])({}),l=Object(i["a"])(s,2),u=l[0],x=l[1],b=function(e){switch(e){case z["p"].RedirectContent:return"doc_outlined";case z["p"].RedirectUrl:return"link-copy_outlined";case z["p"].ServiceCenter:return"robot_outlined";default:return""}};return Object(I["jsx"])(r["n"],{style:o,className:a()("menu-container ".concat(t?"in-ipx":""),se),children:n.map((function(e){var n=e.subMenus&&e.subMenus.length>0,t=e.subMenus.map((function(n){return{text:Object(v["b"])(n.name),onClick:function(){Object(w["a"])(n.contentType,{target:n.menuContent,accountId:c,SubMenuName:Object(v["b"])(n.name)})},icon:b(e.contentType)}}));return Object(I["jsx"])(r["n"],{onMouseEnter:function(){return n&&x(Object(m["a"])({},e.id,!0))},onMouseLeave:function(){return n&&x(Object(m["a"])({},e.id,!1))},className:a()(d()("menu-item",{active:!n}),se),children:Object(I["jsx"])(ie["a"],{visible:u[e.id]||!1,content:Object(I["jsx"])(re["a"],{itemStyle:{padding:"4px 8px"},menus:t}),needArrow:!1,overlay:!1,offset:[0,-12],className:"index__popover___12vcW",children:Object(I["jsxs"])(r["n"],{className:"index__menu___2SL-7",onClick:function(){n||Object(w["a"])(e.contentType,{target:e.menuContent,accountId:c,ParentMenuName:Object(v["b"])(e.name)})},children:[Object(I["jsx"])(ae["a"],{name:n?"menu_outlined":b(e.contentType),size:14,style:{marginRight:"6px",verticalAlign:"text-bottom",color:Object(oe["a"])("icon-n2"),marginBlock:"1px"}}),Object(I["jsx"])(r["k"],{className:"index__menu-name___3ZsF3",children:Object(v["b"])(e.name)})]},e.id)})},e.id)}))})},ue=le,xe=(t(648),{"./index.less":{"menu-container":"index__menu-container___1soC7",disabled:"index__disabled___1FS6_","in-ipx":"index__in-ipx___2pT1p"}});var me,be,je=(de={},Object(m["a"])(de,z["u"].AccountDisable,Object(v["e"])("ArticleDetail_AccountShutdown")),Object(m["a"])(de,z["u"].AccountVisitorForbidden,Object(v["e"])("AccountDetail_Invisible")),de),fe=function(e){var n=e.menus,t=e.errorType,c=e.accountId,i=e.style,_=Object(D["f"])(),o=_.data.isIPhoneX;return t!==z["u"].None?Object(I["jsx"])(r["n"],{className:a()("menu-container ".concat(o?"in-ipx":""),xe),children:Object(I["jsx"])(r["n"],{className:"index__disabled___1FS6_",children:je[t]})}):n.length>0?Object(I["jsx"])(r["n"],{className:a()("menu-container ".concat(o?"in-ipx":""),xe),children:Object(I["jsx"])(ue,{menus:n,isIphoneX:o,accountId:c,style:i})}):null},pe=fe,Oe=t(173),he=(t(649),{"./index.less":{"header-filter":"index__header-filter___3t3e5",filter:"index__filter___3EsBP",line:"index__line___AO4hO","header-container":"index__header-container___292h1","in-navbar":"index__in-navbar___3JvZQ","main-info":"index__main-info___2q_tr","main-icon":"index__main-icon___15rQt",message:"index__message___3Hqe8",name:"index__name___3z8eS","name-text":"index__name-text___Drt4h",operator:"index__operator___3W2zH","operator-text":"index__operator-text___19Ycn",popover:"index__popover___2bOoh","sub-message":"index__sub-message___37ZRz",brief:"index__brief___1Vo_T"}});var ge=Object(v["d"])(),ve=(me={},Object(m["a"])(me,z["j"].Forced,Object(v["e"])("AccountDetail_FollowForce")),Object(m["a"])(me,z["j"].Normal,Object(v["e"])("AccountList_Followed")),Object(m["a"])(me,z["j"].Recommend,Object(v["e"])("AccountDetail_FollowCancel")),Object(m["a"])(me,z["j"].None,Object(v["e"])("AccountDetail_Follow")),me),we=(be={},Object(m["a"])(be,z["j"].Forced,Object(v["e"])("Account_ForcefollowTooltip")),Object(m["a"])(be,z["j"].Recommend,Object(v["e"])("Account_RecommandedfollowTooltip")),be),ye=function(e){var n=e.accountDetail,t=e.changeFollowType,c=e.inNavbar,_=e.menus,s=e.errorType,l=e.accountId,u=Object(q["a"])(n,t,void 0,q["b"],"account_detail"),x=u.following,m=u.toggleFollowType,b=Object(D["f"])(),j=b.data,f=j.isFeedMode,p=j.isWindow,O=Object(o["useMemo"])((function(){return Object(te["b"])(f?"feed":p?"window":"appCenter")}),[f,p]),h=Object(Oe["a"])(n),g=h.menus,y=Object(o["useState"])(Object(v["e"])("AccountList_Followed")),N=Object(i["a"])(y,2),T=N[0],C=(N[1],Object(o["useState"])(!1)),k=Object(i["a"])(C,2),S=k[0],F=k[1],M=Object(v["b"])(n.desc,ge).replace(/\n/g," "),A=n.followType===z["j"].Normal||n.followType===z["j"].Recommend,R=n.followType===z["j"].Forced,B=we[n.followType],H=Object(I["jsx"])(W["a"],{onClick:m,loading:x,type:A||R?"secondary":"primary",disabled:R,icon:n.followType===z["j"].None?"add_outlined":"",size:"middle",style:{minWidth:"82px",borderRadius:"6px",minHeight:"32px",padding:"0 5px"},children:A?T:ve[n.followType]}),E=Object(o["useMemo"])((function(){return{"--theme-bgimg":"url(".concat(n.avatar,")")}}),[n]);return Object(I["jsxs"])(r["n"],{children:[Object(I["jsx"])(r["n"],{className:"index__header-filter___3t3e5",style:E,children:Object(I["jsx"])(r["n"],{className:"index__filter___3EsBP",style:Object(ce["a"])({paddingTop:O},E),children:Object(I["jsxs"])(r["n"],{className:a()(d()("header-container",{"in-navbar":c}),he),children:[Object(I["jsxs"])(r["n"],{className:"index__main-info___2q_tr",children:[n.avatar&&Object(I["jsx"])(r["n"],{className:"index__main-icon___15rQt",onClick:function(){return Object(w["b"])(n)},children:Object(I["jsx"])(X["a"],{size:48,src:n.avatar,preview:!1})}),Object(I["jsx"])(r["n"],{className:"index__message___3Hqe8",children:Object(I["jsx"])(r["n"],{className:"index__name___3z8eS",children:Object(I["jsx"])(r["k"],{selectable:!0,className:"index__name-text___Drt4h",onClick:function(){return Object(w["b"])(n)},children:Object(v["b"])(n.name,ge)})})}),!c&&Object(I["jsx"])(r["n"],{children:Object(I["jsxs"])(r["n"],{className:"index__operator___3W2zH",children:[B?Object(I["jsx"])(V["a"],{text:B,placement:"left",children:H}):H,Object(I["jsx"])(r["n"],{onMouseEnter:function(){return F(!0)},onMouseLeave:function(){return F(!1)},children:Object(I["jsx"])(ie["a"],{visible:S,content:Object(I["jsx"])(re["a"],{menus:g}),needArrow:!1,overlay:!1,offset:[0,-12],className:"index__popover___2bOoh",children:Object(I["jsx"])(W["a"],{type:"secondary-primary",icon:"forward_outlined",size:"middle",style:{borderRadius:"6px",height:"32px",minHeight:"32px",minWidth:"82px",padding:"0 5px"},children:Object(v["e"])("AccountDetail_Share")})})})]})})]}),M&&Object(I["jsxs"])(r["n"],{className:"index__sub-message___37ZRz",children:[Object(I["jsx"])(r["n"],{className:"index__brief___1Vo_T",onClick:function(){return Object(w["b"])(n)},children:Object(I["jsx"])(r["k"],{selectable:!0,children:M})}),Object(I["jsx"])(r["n"],{className:"iconfont icon-arrow-right",onClick:function(){return Object(w["b"])(n)}})]}),!!_&&Object(I["jsx"])(pe,{menus:_,errorType:s,accountId:l})]})})}),Object(I["jsx"])(r["n"],{className:"index__line___AO4hO"})]})},Ne=ye,Te=t(7),Ie=t.n(Te),Ce=t(12),ke=t(123),Se=t(38),Fe=t(81),Me=t(29),Ae=t(32),Re=t(15),Be=t(9),De=t(95),ze=t(17),He=t(19),Ee=t(80),Je=t(43),Le=t(172),Qe=t(122);function Ue(e){var n=e.accountId,t=e.enable,c=e.hasMenu,_=e.trace,a=Object(D["f"])(),r=a.data,s=r.isIPhoneX,d=r.isPC,l=Object(_e["d"])({scrollTop:0,showScrollTop:!1,unreadNum:0,feeds:[],loading:!1,error:!1,inited:!1,hasMore:!1,loadingMode:z["l"].History,autoLoadFolders:!1}),u=Object(i["a"])(l,2),x=u[0],m=x.scrollTop,b=x.showScrollTop,j=x.feeds,f=x.loadingMode,p=x.loading,h=x.error,g=x.inited,v=x.unreadNum,w=x.hasMore,y=x.autoLoadFolders,N=u[1],T=function(){var e=Object(Ce["a"])(Ie.a.mark((function e(t){var c,i,a,o,r,s,d,l,u;return Ie.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=t.mode,i=Re["b"].getTrace(_),!p&&(c!==z["l"].History||w)){e.next=4;break}return e.abrupt("return");case 4:if(N({loading:!0,error:!1,loadingMode:c}),a=function(){var e=Object(Ce["a"])(Ie.a.mark((function e(){var t,i,_,a;return Ie.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,He["a"].getAccountFeeds({accountId:n,mode:c,num:20,newestMessageTime:c==z["l"].New?null===(t=j[0])||void 0===t?void 0:t.messageTime:0,oldestMessageTime:c==z["l"].History?null===(i=j[j.length-1])||void 0===i?void 0:i.messageTime:0});case 2:return _=e.sent,a=_.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(e,t){if(c==z["l"].History)N({feeds:[].concat(Object(ze["a"])(j),Object(ze["a"])(e.feeds)),hasMore:e.hasMore,autoLoadFolders:!e.hasMore});else if(c===z["l"].New){var i=[].concat(Object(ze["a"])(e.feeds),Object(ze["a"])(j)),_=e.feeds.length>0?Math.max(v-e.feeds.length,0):0;N({feeds:i,unreadNum:_>0?_:0}),Object(Le["a"])(Object(Je["g"])(n),i)}else c===z["l"].Refresh&&N({feeds:e.feeds,hasMore:e.hasMore,autoLoadFolders:!t&&!e.hasMore})},e.prev=7,c!==z["l"].Refresh){e.next=20;break}return r=new Ee["a"]({key:Object(Je["g"])(n),dataType:"object",enableRefreshCache:!0,refreshDelay:0,doMain:Je["c"],fetchData:a}),Object(Re["c"])("officialGetFeedsStart",{},i),e.next=13,r.getData({},(function(e){o(e,l)}));case 13:s=e.sent,d=s.data,l=s.isCache,l?Object(Re["c"])("officialGetCacheFeedsSuccess",{},i):Object(Re["c"])("officialGetFeedsSuccess",{},i),o(d),e.next=24;break;case 20:return e.next=22,a();case 22:u=e.sent,o(u);case 24:e.next=29;break;case 26:e.prev=26,e.t0=e["catch"](7),N({error:!0});case 29:N({loading:!1});case 30:case"end":return e.stop()}}),e,null,[[7,26]])})));return function(n){return e.apply(this,arguments)}}(),I=Object(_e["a"])((function(){He["a"].getAccountLatestIndex({accountId:n}).then((function(e){var n,t=e.data,c=(null===(n=j[0])||void 0===n?void 0:n.incrementIndex)||0;t.latestIndex>c&&N({unreadNum:+t.latestIndex-+c})}))})),C=Object(Qe["a"])(I,1e4),k=Object(i["a"])(C,2),S=k[0],F=k[1];Object(O["useDidShow"])((function(){g&&t&&S()})),Object(O["useDidHide"])((function(){F()}));var M=function(){T({mode:z["l"].Refresh}).then((function(){N({inited:!0}),setTimeout((function(){S()}),1e4)}))};Object(o["useEffect"])((function(){if(t)return M(),function(){F()}}),[]);var A=Object(o["useMemo"])((function(){if(d){var e=30;return c&&(e+=40),e}var n=24;return c&&(n+=50),s&&(n+=34),n}),[d,s,c]),R=function(){return T({mode:z["l"].History})};return{feeds:j,loading:p,error:h,hasMore:w,unreadNum:v,loadingMode:f,accountId:n,toTopBottom:A,scrollTop:m,showScrollTop:b,initLoading:p&&f===z["l"].Refresh,initError:h&&f===z["l"].Refresh,autoLoadFolders:y,setState:N,loadMore:R,loadNew:function(){return T({mode:z["l"].New})},startPoll:S,endPoll:F,retry:M}}function Pe(e){var n=e.autoLoadFolders,t=Object(o["useState"])(!1),c=Object(i["a"])(t,2),_=c[0],a=c[1],r=Object(o["useState"])(!1),s=Object(i["a"])(r,2),d=s[0],l=s[1],u=Object(o["useState"])([]),x=Object(i["a"])(u,2),m=x[0],b=x[1],j=function(){return a(!0),He["a"].getAccountFolders(Object(ce["a"])(Object(ce["a"])({},e),{},{size:50})).then((function(e){b(e.data.folders)})).finally((function(){a(!1),l(!0)}))};return Object(o["useEffect"])((function(){n&&j()}),[n]),[{folders:m,loading:_,loaded:d},{load:j}]}var We=t(24),Ve="DETAIL_CANVAS",Xe=function(){var e=Object(O["useRouter"])(),n=e.params,t=n.id,c=void 0===t?"":t,_=n.appEnv,a=n.from,r=void 0===a?"":a,s=Object(o["useState"])(!1),d=Object(i["a"])(s,2),l=d[0],u=d[1],x=Number(_),b=Object(D["b"])(),j=b.data.newHome,f=x===Me["a"].official,p=Object(o["useMemo"])((function(){return{trace:Re["b"].getTrace(Re["a"])}}),[]),h=Object(o["useRef"])(!1),w=Object(D["f"])(),y=w.data,N=y.isFeedMode,T=y.isWindow,I=Object(o["useMemo"])((function(){return Object(te["b"])(N?"feed":T?"window":"appCenter")}),[N,T]);Object(o["useEffect"])((function(){if(f){var e;Object(Re["c"])("officialInitStart",{},p.trace),Object(g["Q"])("subscription_mp_mainpage_view",(e={},Object(m["a"])(e,"time_stay",0),Object(m["a"])(e,"subscription_account_id",c),Object(m["a"])(e,"main_account_type",2),Object(m["a"])(e,"is_new_home",String(j)),e));var n=setTimeout((function(){var e;Object(g["Q"])("subscription_mp_mainpage_view",(e={},Object(m["a"])(e,"time_stay",1),Object(m["a"])(e,"subscription_account_id",c),Object(m["a"])(e,"main_account_type",2),Object(m["a"])(e,"is_new_home",String(j)),e))}),1e3),t=setTimeout((function(){var e;Object(g["Q"])("subscription_mp_mainpage_view",(e={},Object(m["a"])(e,"time_stay",3),Object(m["a"])(e,"subscription_account_id",c),Object(m["a"])(e,"main_account_type",2),Object(m["a"])(e,"is_new_home",String(j)),e))}),3e3);return function(){n&&clearTimeout(n),t&&clearTimeout(t)}}Object(Re["c"])("accountDetailInitStart",{},p.trace);var i=Object(Se["b"])();Fe["a"].enterFromCard(i&&i.mode||"")}),[]);var C=Object(De["b"])({isOfficial:f,trace:p.trace}),k=C.userAccount,S=C.accountDisabledText,F=C.loading,M=C.error,A=C.accountStatus,R=C.errorType,B=C.retry,H=C.changeFollowType;Object(o["useEffect"])((function(){var e;k&&!h.current&&(h.current=!0,f?(Object(Re["c"])("officialInitSuccess",{},p.trace),Re["b"].reportTTI()):(Object(g["Q"])("subscription_mp_account_mainpage_view",(e={from:r||"other"},Object(m["a"])(e,"subscription_account_id",k.accountBaseInfo.id),Object(m["a"])(e,"main_account_type",Object(Ae["b"])(k.accountBaseInfo.accountType)),Object(m["a"])(e,"is_new_home",j),e)),Object(Re["c"])("accountDetailInitSuccess",{},p.trace)))}),[k,f]);var E=Ue({enable:f,accountId:c,hasMenu:!(null===k||void 0===k||!k.menus.length),trace:p.trace}),J=E.initError,L=E.initLoading,Q=E.retry,U=function(e){u(e.detail.scrollTop>I/2.3)},P=function(){u(!1)},W=Object(ke["a"])({account:k?k.accountBaseInfo:null,canvasId:Ve,appEnv:x}),V=W.disabled,X=W.share,q=function(){var e=Object(Ce["a"])(Ie.a.mark((function e(){var n;return Ie.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(k){e.next=2;break}return e.abrupt("return");case 2:return Object(g["Q"])("subscription_mp_mainpage_top_click",(n={click:"click_share_account",target:"none"},Object(m["a"])(n,"main_account_type",x),Object(m["a"])(n,"is_new_home",String(j)),n)),Object(We["a"])({click:"click_cpoy_account_link",subscriptionAccountId:c}),e.next=6,Be["a"].setClipboardData({data:k.accountBaseInfo.link||""});case 6:Be["a"].showToast({title:Object(v["e"])("ArticleDetail_CopySuccess")});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z={udIcon:"forward_outlined",hoverText:Object(v["e"])("AccountDetail_Share"),position:"right",onClick:X,disabled:V},Y={udIcon:"link-copy_outlined",hoverText:Object(v["e"])("AccountDetail_CopyLink"),position:"right",onClick:q,disabled:V},K=Object(o["useRef"])(null),G=function(){var e;return null===(e=K.current)||void 0===e?void 0:e.retry()},$=Object(o["useMemo"])((function(){return!S&&!(!S&&R!==z["u"].None)}),[S,R]),ee=function(){return $&&f?[Z]:$&&!j?[Y,Z]:l&&$&&!f&&j?[Z]:[]};return{ref:K,accountId:c,userAccount:k,loading:F||L,error:M||J,shareIcon:Z,linkIcon:Y,accountDisabledText:S,isInOfficialEnv:f,feedsContext:E,accountStatus:A,errorType:R,showCustomIcons:$,changeFollowType:H,rightIcon:ee,newHome:j,showNavbar:l,onFolderScroll:U,onFolderScrollToUpper:P,showNavbarHeight:I/2.3,retry:function(){B(),f?Q():G()}}},qe=Xe,Ze=t(37),Ye=t(178),Ke=t(89),Ge=t(98),$e=t(191);t(650);var en=function(e){var n=Object(Ye["a"])(e),t=n.topArticle,c=n.singleArticle,i=n.restArticles,_=n.showExpandBtn,a=n.articles,o=n.expandNum,s=n.onExpandClick,d=n.firstTeaParams;return Object(I["jsxs"])(r["n"],{className:"index__normal-card___3Ftz0",children:[t&&Object(I["jsx"])($e["a"],{params:d,articleItem:t,singleArticle:1===a.length,onClick:function(){Object(Ke["a"])(t,0,e),d["click"]="content",Object(We["c"])(d)}}),!c&&Object(I["jsxs"])(r["n"],{className:"index__items___3Ih-8",children:[i.map((function(n,t){var c=Object(ce["a"])({},d);return c["click"]="content",c["index"]=(t+1).toString(),c["article"]=n,c["content_sub_type"]=Object(Ae["a"])(n.articleType),Object(I["jsx"])(Ge["a"],{articleItem:n,params:c,onClick:function(){Object(Ke["a"])(n,t+1,e),Object(We["c"])(c)}},t)})),_&&Object(I["jsxs"])(r["n"],{className:"index__expand-btn___15Uw1",onClick:s,children:[Object(I["jsx"])(r["k"],{children:Object(v["e"])("Common_RestMore",{num:a.length-(o||0)})}),Object(I["jsx"])(r["n"],{className:"iconfont icon-arrow-expand"})]})]})]})},nn=en,tn=t(180),cn=t(100),_n=t(73),an=t(181),on=(t(651),{"./index.less":{"rich-text-wraper":"index__rich-text-wraper___3cQWJ",disabledSelected:"index__disabledSelected___l0JhE","render-short-text":"index__render-short-text___39Mhr","short-text-img-collapse":"index__short-text-img-collapse___1ZHd5","rich-text-zh":"index__rich-text-zh___2EhrQ","rich-text-en":"index__rich-text-en___2rJlN","rich-text-jp":"index__rich-text-jp___3YK0t"}});function rn(e){var n,t=e.nodes,c=e.previewImg,i=void 0===c||c,_=e.clickReport,s=e.articleId,l=e.onClick,u=void 0===l?function(e,n){return Object(cn["a"])(e,{previewImg:i,imgList:n,clickReport:_,articleId:s})}:l,x=e.style,b=e.disabledSelected,j=void 0!==b&&b,f=e.needProcessTag,p=void 0!==f&&f,O=e.needProcessAtTag,h=void 0!==O&&O,g=e.forShortText,w=void 0!==g&&g,y=e.shortTextImgCollapse,N=void 0!==y&&y,T=Object(o["useMemo"])((function(){return an["a"][Object(v["d"])()]}),[]),C=Object(tn["a"])(t);return Object(I["jsx"])(r["n"],{className:a()(d()("rich-text-wraper",T,(n={disabledSelected:j},Object(m["a"])(n,"render-short-text",w),Object(m["a"])(n,"short-text-img-collapse",N),n)),on),children:Object(I["jsx"])(r["h"],{nodes:p?Object(_n["b"])(t):h?Object(_n["a"])(t):t,enhanced:!0,style:x,onRichTextClick:function(e){u(e,C)}})})}var sn=rn,dn=t(101),ln=t(182),un=(t(652),{"./index.less":{"image-displayer":"index__image-displayer___1AeiB",horizontal:"index__horizontal___3Yr1_",vertical:"index__vertical___r6-Hv",img:"index__img___3bypa",tag:"index__tag___3HT8s"}});function xn(e){var n=Object(ln["a"])(e),t=n.imgInfo,c=t.displayHeight,i=t.displayWidth,_=t.isHorizontal,o=n.url,s=n.onImageClick,l=n.tag;return Object(I["jsxs"])(r["n"],{className:a()(d()("image-displayer",{horizontal:_,vertical:!_}),un),children:[Object(I["jsx"])(r["d"],{className:"index__img___3bypa",src:o,lazyLoad:!0,onClick:s,style:{width:"".concat(2*i,"rpx"),height:"".concat(2*c,"rpx")}}),!!l&&Object(I["jsx"])(r["n"],{className:"index__tag___3HT8s",children:l})]})}var mn=xn,bn=t(183),jn=(t(653),{"./index.less":{"text-card":"index__text-card___2thNj","text-card-content":"index__text-card-content___E9QaO",topBorder:"index__topBorder___2QMVH",title:"index__title___JUU_z","rich-text-wraper":"index__rich-text-wraper___Mw4RI","img-wraper":"index__img-wraper___1v8Z9"}});var fn=300;function pn(e){var n=e.needTopBorder,t=void 0!==n&&n,c=Object(bn["a"])(e),i=c.articleId,_=c.onGetDomRect,o=c.onExpandClick,s=c.isOfficial,l=c.instanceId,u=c.onClick,x=c.onRichTextClick,m=c.title,b=c.nodes,j=c.images;return Object(I["jsxs"])(r["n"],{className:"index__text-card___2thNj",children:[Object(I["jsx"])(r["n"],{className:a()(d()("",{topBorder:t}),jn)}),Object(I["jsx"])(dn["a"],{maxHeight:fn,initOpen:!e.isRead,contentId:l,disabled:s,addActiveStyle:!0,onGetContentDomRect:_,onExpand:o,onClick:u,children:Object(I["jsxs"])(r["n"],{id:l,className:"index__text-card-content___E9QaO",children:[Object(I["jsx"])(r["n"],{className:"index__title___JUU_z",children:m}),Object(I["jsx"])(r["n"],{className:"index__rich-text-wraper___Mw4RI",onClick:function(e){return e.stopPropagation()},children:Object(I["jsx"])(sn,{articleId:i,nodes:b,onClick:x,disabledSelected:!0,style:{fontSize:"16px",lineHeight:"24px"},needProcessAtTag:!0,forShortText:!0,shortTextImgCollapse:!0})}),(null===j||void 0===j?void 0:j.length)>0?Object(I["jsx"])(r["n"],{className:"index__img-wraper___1v8Z9",children:j.map((function(e){return Object(I["jsx"])(mn,Object(ce["a"])({},e))}))}):null]})})]})}var On=pn,hn=function(e){var n=e.articles,t=n&&n[0];return t.articleType===Ze["a"].Text?Object(I["jsx"])(On,Object(ce["a"])({},e)):Object(I["jsx"])(nn,Object(ce["a"])({},e))},gn=hn,vn=t(129),wn=t(75),yn=t(125),Nn=t(126),Tn=t(20);t(654);var In=function(e){var n=e.openRecommend,t=e.loadRecommend;return Object(I["jsx"])(r["n"],{children:n?Object(I["jsxs"])(r["n"],{className:"index__divider___1biKJ",children:[Object(I["jsx"])(r["n"],{className:"index__desc___1ydr0",children:Object(v["e"])("Home_HistoryDesc")}),Object(I["jsx"])(r["n"],{className:"index__line___4Fw0n"})]}):Object(I["jsxs"])(r["n"],{className:"index__open-btn___3brAt",onClick:t,children:[Object(I["jsx"])(r["n"],{className:"index__desc___1ydr0",children:Object(v["e"])("Home_OpenHistory")}),Object(I["jsx"])(r["n"],{className:"iconfont icon-down index__icon___37e_V"})]})})},Cn=(t(655),{"./index.less":{"text-msg":"index__text-msg___14Ep5","account-name":"index__account-name___35WXJ",isAfterRecall:"index__isAfterRecall___1sE_r",isBeforeRecall:"index__isBeforeRecall___WXUVr"}});var kn=function(e){var n=e.accountName,t=e.isAfterRecall,c=e.isBeforeRecall;return Object(I["jsxs"])(r["n"],{className:a()(d()("text-msg",{isAfterRecall:t,isBeforeRecall:c}),Cn),children:[Object(I["jsx"])(r["k"],{className:"index__account-name___35WXJ",children:Object(v["b"])(n)}),Object(v["e"])("Feed_Recall",{accountName:"",num:1})]})},Sn=t(185),Fn=t(86),Mn=t(190),An=t(36),Rn=(t(656),{"./index.less":{"feed-item":"index__feed-item___3UfbI",line:"index__line___3ZScj"}});var Bn=function(e){var n,t=e.folder,c=e.accountInfo,i=e.sequenceNum,_=e.showBorder;return Object(I["jsxs"])(r["n"],{children:[Object(I["jsx"])(r["n"],{className:a()(d()({"feed-item":t.articles.length>1}),Rn),children:null===t||void 0===t||null===(n=t.articles)||void 0===n?void 0:n.map((function(e,n){var _,a=e.id,o=e.title,r=e.digest,s=e.relatedLikeUsers,d=e.likeUserCount,l=e.readUserCount,u=e.readTime,x=e.articleType,m=e.cover,b=m.articleCover,j=m.folderCover,f=c.accountBaseInfo.id,p={accountId:f,folderId:t.id,accountType:c.accountBaseInfo.accountType,from:"account",contentMainType:"article",cardMainType:"article_send",sequenceNum:i,referSequenceNum:n},O=(null===(_=t.articles)||void 0===_?void 0:_.length)>1?{margin:"12px 0px"}:{margin:"20px 0px"};return Object(I["jsx"])(Fn["a"],{id:a,customeStyle:Object(ce["a"])({},O),article:e,accountId:f,title:Object(v["b"])(o),digest:Object(v["b"])(r),relatedLikeUsers:s,likeUserCount:d,readUserCount:l,readTime:u,cover:j||b,mode:"aspectFit",messageTime:t.firstReleaseTime,sequenceNum:i,referSequenceNum:n,from:"account",contentMainType:"article",articleType:x,cardMainType:"article_send",onClick:function(){Object(We["a"])({click:"click_article",subscriptionAccountId:f,articleId:e.id}),Object(An["c"])(e,n+1,p)}},a)}))}),_&&Object(I["jsx"])(r["n"],{className:"index__line___3ZScj"})]})},Dn=function(e){var n=e.FirstArticle,t=e.folder,c=e.accountInfo,i=e.sequenceNum,_=e.showBorder,a=void 0===_||_,o=function(){var e={folderId:t.id,article:n,sequenceNum:i,firstReleaseTime:t.firstReleaseTime};return(null===n||void 0===n?void 0:n.articleType)===Ze["a"].Text?Object(I["jsxs"])(r["n"],{style:{boxSizing:"border-box"},children:[Object(I["jsx"])(Mn["a"],Object(ce["a"])(Object(ce["a"])({},e),{},{customeStyle:{margin:"28px 8px"},needTopDescription:!0})),a&&Object(I["jsx"])(r["n"],{className:"index__line___3ZScj"})]}):Object(I["jsx"])(Bn,{folder:t,showBorder:a,sequenceNum:i,accountInfo:c})};return Object(I["jsx"])(r["n"],{children:o()})},zn=t(187),Hn=(t(657),{"./index.less":{"scroll-container":"index__scroll-container___3h4Vx","scroll-content":"index__scroll-content___oZwzQ","scroll-container-new":"index__scroll-container-new___2diQC",feed:"index__feed___2LBuf",mt:"index__mt____lZ04","recommend-header-new":"index__recommend-header-new___1qVrX",card:"index__card___3BHFt","recommend-header":"index__recommend-header___2nTuw","no-more":"index__no-more___1JmYF",loading:"index__loading___3d3h9","folder-list":"index__folder-list___20-eK","feed-list":"index__feed-list___3I8P-",time:"index__time___1BweJ",text:"index__text___iVqgC","load-history":"index__load-history___293di",icon:"index__icon___1ySdS",empty:"index__empty___1pETt",image:"index__image___1ml2y"}});var En=function(e){var n=e.feed,t=e.previousFeed,c=e.nextFeed,i=e.FirstArticle,_=e.sequenceNum,a=e.showBorder,s=void 0===a||a,d=Object(D["f"])(),l=d.data.isPC,u=Object(D["b"])(),x=u.data.newHome,m=x&&l,b=Object(o["useContext"])(T),j=b.userAccount,f=l?vn["a"]:gn,p=function(){switch(n.feedType){case z["i"].Normal:case z["i"].Preview:return Object(I["jsx"])(r["n"],{className:"index__feed___2LBuf",children:m?Object(I["jsx"])(Dn,{FirstArticle:i,folder:n.folderDTO,accountInfo:j,sequenceNum:_,showBorder:s}):Object(I["jsxs"])(r["n"],{children:[Object(I["jsx"])(r["n"],{className:"index__time___1BweJ",children:Object(I["jsx"])(r["k"],{children:Object(Tn["h"])(+n.messageTime)})}),Object(I["jsx"])(r["n"],{className:"index__card___3BHFt",children:Object(I["jsx"])(f,{articles:n.folderDTO.articles,folderId:n.folderDTO.id,accountId:j.accountBaseInfo.id,expandNum:0,from:"feed",accountType:j.accountBaseInfo.accountType,feedType:n.feedType,sequenceNum:_})})]})},n.messageTime);case z["i"].Welcome:return Object(I["jsxs"])(r["n"],{className:"index__feed___2LBuf",children:[Object(I["jsx"])(r["n"],{className:"index__time___1BweJ",children:Object(I["jsx"])(r["k"],{children:Object(Tn["h"])(+n.messageTime)})}),Object(I["jsx"])(r["n"],{className:"index__card___3BHFt",children:Object(I["jsx"])(r["n"],{className:"index__text___iVqgC",children:Object(v["b"])(n.message.content)})})]},n.messageTime);case z["i"].Recall:return Object(I["jsx"])(kn,{accountName:j.accountBaseInfo.name,isAfterRecall:(null===t||void 0===t?void 0:t.feedType)===z["i"].Recall,isBeforeRecall:(null===c||void 0===c?void 0:c.feedType)===z["i"].Recall})}};return Object(I["jsx"])(o["Fragment"],{children:Je["h"].includes(n.feedType)?p():null})},Jn=function(e){var n=e.feedsContext,t=n.accountId,c=n.feeds,_=n.loading,s=n.loadingMode,l=n.hasMore,u=n.unreadNum,x=n.toTopBottom,b=n.scrollTop,j=n.showScrollTop,f=n.autoLoadFolders,p=n.loadMore,O=n.loadNew,h=n.setState,g=Object(o["useMemo"])((function(){return Object(ze["a"])(c).reverse().find((function(e){return e.feedType===z["i"].Normal}))}),[c]),w=Object(D["f"])(),y=w.data.isPC,N=Object(D["b"])(),T=N.data.newHome,C=T&&y,k=Pe({accountId:t,earliestSendTime:(null===g||void 0===g?void 0:g.folderDTO.firstReleaseTime)||0,autoLoadFolders:f}),S=Object(i["a"])(k,2),F=S[0],M=F.loading,A=F.folders,R=S[1].load,B=!_&&(!c||0===c.length),H=Object(I["jsxs"])(r["n"],{className:"index__empty___1pETt",children:[Object(I["jsx"])(r["d"],{className:"index__image___1ml2y",src:Object(oe["b"])("noContent"),mode:"aspectFill"}),Object(I["jsx"])(r["n"],{className:"index__text___iVqgC",children:Object(I["jsx"])(r["k"],{children:Object(v["e"])("AccountDetail_NoContent")})})]}),E=T?zn["a"]:Sn["a"];return B?H:Object(I["jsxs"])(o["Fragment"],{children:[!!u&&Object(I["jsx"])(yn["a"],{loading:s===z["l"].New&&_,text:Object(v["e"])("Home_NewFolderInfo",{count:u}),onClick:O,top:100}),Object(I["jsx"])(Nn["a"],{visible:j,bottom:x,onClick:function(){h({showScrollTop:!1,scrollTop:Math.random()})}}),Object(I["jsx"])(r["i"],{className:"index__scroll-container___3h4Vx",scrollY:!0,onScrollToLower:p,scrollTop:b,lowerThreshold:500,scrollWithAnimation:!0,onScroll:function(e){h({showScrollTop:e.detail.scrollTop>800})},children:Object(I["jsxs"])(r["n"],{className:a()(d()("scroll-content",Object(m["a"])({},"scroll-container-new",C)),Hn),children:[Object(I["jsx"])(r["n"],{className:"index__feed-list___3I8P-",children:null===c||void 0===c?void 0:c.map((function(e,n){var t=e.folderDTO,i=e.id,_=!!t&&(null===t||void 0===t?void 0:t.articles)&&t.articles[0]||{};return Object(I["jsx"])(En,{showBorder:c.length!==n+1,feed:e,FirstArticle:_,previousFeed:c[n-1],nextFeed:c[n+1],sequenceNum:n},i)}))}),!!A.length&&Object(I["jsxs"])(o["Fragment"],{children:[Object(I["jsx"])(r["n"],{className:a()(d()("recommend-header",{"recommend-header-new":C}),Hn),children:y?Object(I["jsx"])(E,{openRecommend:!0,customStyle:{margin:"12px 8px"},loadRecommend:Object(Ce["a"])(Ie.a.mark((function e(){return Ie.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(M){e.next=2;break}return e.abrupt("return",R());case 2:case"end":return e.stop()}}),e)})))}):Object(I["jsx"])(In,{openRecommend:!0,loadRecommend:Object(Ce["a"])(Ie.a.mark((function e(){return Ie.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(M){e.next=2;break}return e.abrupt("return",R());case 2:case"end":return e.stop()}}),e)})))})}),Object(I["jsx"])(r["n"],{className:"index__folder-list___20-eK",children:null===A||void 0===A?void 0:A.map((function(e,n){var t=e&&e[0]||{};return Object(I["jsx"])(En,{showBorder:n+1!==A.length,FirstArticle:t,feed:{folderDTO:e,feedType:z["i"].Normal,messageTime:e.firstReleaseTime},sequenceNum:c.length+n},e.id)}))})]}),(M||s===z["l"].History&&_)&&Object(I["jsx"])(r["n"],{className:"index__loading___3d3h9",children:Object(I["jsx"])(wn["a"],{})}),!l&&Object(I["jsx"])(r["n"],{className:"index__no-more___1JmYF",children:Object(v["e"])("Common_NoMoreContent")})]})})]})},Ln=t(52),Qn=function(e){var n=Object(o["useContext"])(T),t=n.accountId,c=Object(_e["d"])({loading:!0,error:!1,folders:[],hasMore:!0,earliestTime:0}),_=Object(i["a"])(c,2),a=_[0],r=_[1],s=function(){var e=a.hasMore,n=a.folders,c=a.earliestTime;e&&t&&(r({loading:!0,error:!1}),He["a"].getAccountFolders({accountId:t,size:20,earliestSendTime:c}).then((function(e){var t=e.data,c=t.folders.length;r({loading:!1,folders:n.concat(t.folders),hasMore:t.hasMore||!1,earliestTime:t.folders[c-1].firstReleaseTime})})).catch((function(){r({loading:!1,error:!0})})))},d=function(){a.error&&s()};return Object(o["useEffect"])((function(){t&&s()}),[t]),Object(o["useImperativeHandle"])(e,(function(){return{loading:!1,error:!1,retry:d}})),{accountId:t,folders:a.folders,loading:a.loading,hasMore:a.hasMore,fetchMoreFolders:s,retry:d}},Un=Qn,Pn=(t(658),{"./index.less":{"scroll-container":"index__scroll-container___1ajjE",folder:"index__folder___3axyX","scroll-container-new":"index__scroll-container-new___yXGEY","scroll-content":"index__scroll-content___35hzl","scroll-content-new":"index__scroll-content-new___3-Jxy",mt:"index__mt___MrbE8",card:"index__card___2oO65",time:"index__time___1gayT",text:"index__text___1Fzjb","feed-item":"index__feed-item___tWorO","no-more":"index__no-more___1YA_s",loading:"index__loading___1DJ4M",empty:"index__empty___2QKq3",image:"index__image___104UQ"}});var Wn=Object(o["forwardRef"])((function(e,n){var t=e.children,c=e.onScroll,i=e.onScrollToUpper,_=e.showNavbarHeight,s=Object(D["f"])(),l=s.data.isPC,u=Object(D["b"])(),x=u.data.newHome,b=l?vn["a"]:gn,j=x&&l,f=Un(n),p=f.folders,O=f.loading,h=f.hasMore,g=f.fetchMoreFolders,w=Object(o["useContext"])(T),y=w.userAccount,N=!O&&(!p||0===p.length),C=Object(I["jsxs"])(r["n"],{className:"index__empty___2QKq3",children:[Object(I["jsx"])(r["d"],{className:"index__image___104UQ",src:Object(oe["b"])("noContent"),mode:"aspectFill"}),Object(I["jsx"])(r["n"],{className:"index__text___1Fzjb",children:Object(I["jsx"])(r["k"],{children:Object(v["e"])("AccountDetail_NoContent")})})]});return Object(I["jsxs"])(r["i"],{scrollY:!0,onScroll:c,onScrollToLower:g,onScrollToUpper:i,upperThreshold:_,className:a()(d()("scroll-container",Object(m["a"])({},"scroll-container-new",j)),Pn),children:[t,Object(I["jsxs"])(r["n"],{className:a()(d()("scroll-content",Object(m["a"])({},"scroll-content-new",j)),Pn),children:[N?C:null===p||void 0===p?void 0:p.map((function(e,n){var t=e.articles&&e.articles[0];return e.articles.length>0?Object(I["jsxs"])(r["n"],{className:a()(d()("folder"),Pn),children:[!j&&Object(I["jsx"])(r["n"],{className:"index__time___1gayT",children:Object(I["jsx"])(r["k"],{children:Object(Tn["h"])(+e.firstReleaseTime)})}),Object(I["jsxs"])(Ln["a"],{customeStyle:j?{border:"none",width:"100%",backgroundColor:"transparent",boxSizing:"border-box",borderRadius:0}:{},children:[!j&&Object(I["jsx"])(b,{articles:e.articles,folderId:e.id,accountId:y.accountBaseInfo.id,isRead:!0,from:"account",accountType:y.accountBaseInfo.accountType,sequenceNum:n}),j&&Object(I["jsx"])(Dn,{FirstArticle:t,folder:e,sequenceNum:n,accountInfo:y})]})]},e.firstReleaseTime):void 0})),O?Object(I["jsx"])(r["n"],{className:"index__loading___1DJ4M",children:Object(I["jsx"])(wn["a"],{})}):h?null:Object(I["jsx"])(r["n"],{className:"index__no-more___1YA_s",children:Object(v["e"])("Common_NoMoreContent")})]})]})}));t(659);var Vn={"./index.less":{"account-detail-page":"index__account-detail-page___84TEg",body:"index__body___2-m_j","hack-header-border":"index__hack-header-border___2nCGf",header:"index__header___19Vgu","in-feed":"index__in-feed___1-5kn","new-header":"index__new-header___3zspQ","canvas-wrapper":"index__canvas-wrapper___1mmt8"}};var Xn=function(){var e=Object(o["useState"])(!1),n=Object(i["a"])(e,2),t=n[0],c=n[1],_=qe(),s=_.ref,x=_.accountId,m=_.isInOfficialEnv,b=_.userAccount,j=_.loading,f=_.error,p=_.accountDisabledText,O=_.feedsContext,h=_.errorType,g=_.retry,v=_.rightIcon,w=_.changeFollowType,y=_.newHome,N=_.showNavbar,C=_.onFolderScroll,k=_.onFolderScrollToUpper,S=_.showNavbarHeight,F=Object(D["f"])(),M=F.data,A=M.isFeedMode,R=M.isAppCenter,B=M.isWindow,z=b?b.accountBaseInfo.id:x,H=Object(o["useMemo"])((function(){return!R&&m}),[R,m]),E=Object(o["useMemo"])((function(){return!b||y&&!m?b&&y&&!m?Object(I["jsx"])(Ne,{accountDetail:b.accountBaseInfo,menus:b.menus,changeFollowType:w,inNavbar:H,errorType:h,accountId:z}):Object(I["jsx"])(o["Fragment"],{}):Object(I["jsx"])(ee,{accountDetail:b.accountBaseInfo,changeFollowType:w,inNavbar:H})}),[w,H,b,y]),J=Object(o["useMemo"])((function(){return y?te["a"].NewHomeAppCenter:te["a"].AppCenter}),[A,R,B,y]);return Object(I["jsx"])(u["b"],{limitWidth:!A,noBorder:A,showLoading:j,showError:f&&!p,customIcons:v(),retry:function(){g()},showNavbar:N,showTab:H,tabbar:E,forceShowBottomBorder:H,accountDetail:null===b||void 0===b?void 0:b.accountBaseInfo,changeFollowType:w,title:b&&!H?Object(ne["a"])(b.accountBaseInfo.name):"",children:p?Object(I["jsx"])(l["a"],{text:p}):b?Object(I["jsx"])(T.Provider,{value:{userAccount:b,accountId:z,show:t,hasMenu:!(null===b||void 0===b||!b.menus.length),setShow:c},children:Object(I["jsxs"])(r["n"],{onClick:function(e){c(!1),e.stopPropagation()},className:a()(d()("account-detail-page"),Vn),children:[Object(I["jsxs"])(r["n"],{className:"index__body___2-m_j",children:[A&&!m&&N&&Object(I["jsx"])(r["n"],{className:"index__hack-header-border___2nCGf"}),m?Object(I["jsx"])(Jn,{feedsContext:O}):Object(I["jsx"])(Wn,{ref:s,onScroll:C,onScrollToUpper:k,showNavbarHeight:S,children:!H&&Object(I["jsx"])(r["n"],{style:{maxWidth:J},className:a()(d()("header",{"new-header":y,"in-feed":A}),Vn),children:E})})]}),Object(I["jsx"])(r["n"],{children:!!b&&(m||!y)&&Object(I["jsx"])(U,{menus:b.menus,errorType:h})}),Object(I["jsx"])(r["n"],{className:"index__canvas-wrapper___1mmt8",children:Object(I["jsx"])(r["b"],{canvasId:De["a"]})})]})}):Object(I["jsx"])(o["Fragment"],{})})},qn=function(){return Object(I["jsx"])(x["a"],{children:Object(I["jsx"])(Xn,{})})},Zn={usingComponents:{"native-button":"../../../@native-mobile-components/button/index","native-dialog":"../../../@native-pc-components/dialog/index","native-fab":"../../../@native-mobile-components/fab/index","native-icon":"../../../@native-pc-components/icon/index","native-modal":"../../../@native-pc-components/modal/index","native-tag":"../../../@native-pc-components/tag/index","native-view":"../../../@native-pc-components/view/index"}};Page(Object(c["createPageConfig"])(qn,"pages/account-detail/pc/index",{root:{cn:[]}},Zn||{}))}},[[666,0,1,2,3]]]);
});;