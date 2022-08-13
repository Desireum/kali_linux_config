define("@native-pc-components/dialog/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
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

});