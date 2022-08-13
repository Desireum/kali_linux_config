define("@native-pc-components/icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
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

});