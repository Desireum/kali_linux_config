define("@native-pc-components/tag/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
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

});