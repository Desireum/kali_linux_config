define("@native-mobile-components/dialog/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var _commonjsHelpers = require('../common/_commonjsHelpers.js');
var index = require('../common/index.js');
require('../common/typeof.js');

var dialog = _commonjsHelpers.createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var localeValues = {
    locale: 'en-US',
    Dialog: {
      cancelText: 'Cancel',
      confirmText: 'OK'
    }
  };
  var _default = localeValues;
  exports.default = _default;
});
var DialogLocale = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(dialog);

index.t.init(DialogLocale);
Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    titleAlign: {
      type: String,
      value: 'center'
    },
    content: {
      type: String,
      value: ''
    },
    contentAlign: {
      type: String,
      value: 'center'
    },
    okText: {
      type: String,
      value: index.t('Dialog.confirmText')
    },
    showButtons: {
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: index.t('Dialog.cancelText')
    },
    buttons: {
      type: Array,
      value: []
    },
    buttonDirection: {
      type: String,
      value: 'horizontal'
    },
    overlay: {
      type: Boolean,
      value: true
    },
    overlayClosable: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    onAfterClose: function onAfterClose() {
      this.triggerEvent('afterclose');
    },
    onClose: function onClose() {
      this.triggerEvent('close');
    },
    onCancel: function onCancel() {
      this.triggerEvent('cancel');
      this.onClose();
    },
    onOk: function onOk() {
      this.triggerEvent('ok');
    },
    onButtonClick: function onButtonClick(e) {
      var index = e.currentTarget.dataset.index;
      this.triggerEvent('buttonclick', {
        item: this.data.buttons[index],
        index: parseInt(index, 10)
      });
    }
  }
});

});