define("@native-pc-components/overlay/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
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

});