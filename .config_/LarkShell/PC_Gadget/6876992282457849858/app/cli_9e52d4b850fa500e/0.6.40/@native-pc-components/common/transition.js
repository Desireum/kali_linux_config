define("@native-pc-components/common/transition.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var vendor = require('./vendor.js');

function transition(params = {}) {
  const { inPropName = 'in', namePropName = 'name' } = params;
  return Behavior({
    data: {
      mounted: false,
      display: false,
      classNames: [],
    },

    methods: {
      emitTransitionEvent(...args) {
        const [eventName, ...rest] = args;
        const customEventName = params[eventName];
        const cbName = `on${eventName
          .slice(0, 1)
          .toUpperCase()}${eventName.slice(1)}`;
        const cb = params[cbName];

        if (cb) {
          cb.call(this, ...args);
        }

        if (customEventName) {
          this.triggerEvent(...[customEventName, ...rest]);
        } else {
          this.triggerEvent(...args);
        }
      },
      enter() {
        const classNames = vendor.transition.getClassNames(this.data[namePropName]);
        this.emitTransitionEvent('beforeenter');

        vendor.transition.nextTick()
          .then(() => {
            this.setData({
              mounted: true,
              display: true,
              classNames: `${classNames.enter} enter-class`,
            });
          })
          .then(vendor.transition.nextTick)
          .then(() => {
            this.transitionControls = vendor.transition.genAsyncControls();
            this.setData({
              mounted: true,
              display: true,
              classNames: `${classNames.enterActive} enter-active-class ${classNames.enterTo} enter-to-class`,
            });
            this.emitTransitionEvent('enter');
          })
          .then(() => this.transitionControls.promise)
          .then(() => {
            this.setData({
              classNames: '',
            });
            this.emitTransitionEvent('afterenter');
          });
      },

      leave() {
        const classNames = vendor.transition.getClassNames(this.data[namePropName]);
        this.emitTransitionEvent('beforeleave');

        vendor.transition.nextTick()
          .then(() => {
            this.setData({
              classNames: `${classNames.leave} leave-class`,
            });
          })
          .then(vendor.transition.nextTick)
          .then(() => {
            this.transitionControls = vendor.transition.genAsyncControls();
            this.setData({
              classNames: `${classNames.leaveTo} leave-to-class ${classNames.leaveActive} leave-active-class`,
            });
            this.emitTransitionEvent('leave');
          })
          .then(() => this.transitionControls.promise)
          .then(() => {
            this.setData({
              classNames: '',
              mounted: false,
              display: false,
            });
            this.emitTransitionEvent('afterleave');
          });
      },

      onTransitionEnd() {
        if (this.transitionControls) {
          this.transitionControls.resolve();
        }
      },
    },
  })
}

exports.transition = transition;

});