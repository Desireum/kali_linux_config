define("@native-mobile-components/icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
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

});