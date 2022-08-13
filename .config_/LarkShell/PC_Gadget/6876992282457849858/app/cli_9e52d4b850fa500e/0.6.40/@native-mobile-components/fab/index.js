define("@native-mobile-components/fab/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
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

});