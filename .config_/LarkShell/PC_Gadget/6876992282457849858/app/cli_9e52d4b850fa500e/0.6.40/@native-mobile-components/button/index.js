define("@native-mobile-components/button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
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

});