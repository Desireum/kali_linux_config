define("@native-mobile-components/modal/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

require('../common/_commonjsHelpers.js');
var transition = require('../common/transition.js');

Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  behaviors: [transition.transition({
    inPropName: 'visible',
    namePropName: 'transitionName',
    afterleave: 'afterclose'
  })],
  properties: {
    customStyle: {
      type: String,
      value: ''
    },
    visible: {
      type: Boolean,
      value: false,
      observer: function observer(newVal) {
        if (newVal) {
          this.enter();
        } else {
          this.leave();
        }
      }
    },
    position: {
      type: String,
      value: 'center'
    },
    transitionName: {
      type: String,
      value: 'fade'
    },
    duration: {
      type: String,
      value: 'normal'
    },
    timingFunc: {
      type: String,
      value: 'linear'
    },
    overlay: {
      type: Boolean,
      value: true
    },
    overlayClosable: {
      type: Boolean,
      value: true
    },
    overlayDuration: {
      type: String,
      value: 'normal'
    },
    overlayTimingFunc: {
      type: String,
      value: 'linear'
    },
    keepAlive: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    onOverlayClick: function onOverlayClick() {
      if (this.data.overlayClosable) {
        this.triggerEvent('close');
      }
    }
  }
});

});