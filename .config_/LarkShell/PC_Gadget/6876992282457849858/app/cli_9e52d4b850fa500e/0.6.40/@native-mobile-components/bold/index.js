define("@native-mobile-components/bold/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var _commonjsHelpers = require('../common/_commonjsHelpers.js');
var index = require('../common/index2.js');

var fontWeight = _commonjsHelpers.createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fontWeightTypes = void 0; // eslint-disable-next-line import/prefer-default-export

  var fontWeightTypes = ['regular', 'medium', 'semibold'];
  exports.fontWeightTypes = fontWeightTypes;
});

Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    text: {
      type: String,
      value: ''
    },
    fontWeight: {
      // regular medium semibold
      type: String,
      value: 'medium',
      observer: function observer(v) {
        if (!fontWeight.fontWeightTypes.includes(v)) {
          throw new Error("Prop \"fontWeight\" receive invalid value \"".concat(v, "\""));
        }

        return v;
      }
    },
    selectable: {
      type: Boolean,
      value: false
    },
    space: {
      type: String,
      value: ''
    },
    decode: {
      type: Boolean,
      value: false
    },
    customStyle: {
      type: String,
      value: ''
    }
  },
  data: {
    platform: index.utils.getSystemInfo().normalizedPlatform
  },
  methods: {}
});

});