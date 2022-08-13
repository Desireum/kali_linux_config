define("@native-mobile-components/common/transition.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var _commonjsHelpers = require('./_commonjsHelpers.js');

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var transition = _commonjsHelpers.createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getClassNames = getClassNames;
  exports.nextTick = nextTick;
  exports.genAsyncControls = genAsyncControls;

  function getClassNames(name) {
    var base = "ud-transition-".concat(name);
    var enter = "".concat(base, "-enter");
    var enterActive = "".concat(enter, "-active");
    var enterTo = "".concat(enter, "-to");
    var leave = "".concat(base, "-leave");
    var leaveActive = "".concat(leave, "-active");
    var leaveTo = "".concat(leave, "-to");
    return {
      enter: enter,
      enterActive: enterActive,
      enterTo: enterTo,
      leave: leave,
      leaveActive: leaveActive,
      leaveTo: leaveTo
    };
  }

  function nextTick() {
    return new Promise(function (resolve) {
      return setTimeout(resolve, 1000 / 30);
    });
  }

  function genAsyncControls() {
    var resolve;
    var reject;
    var promise = new Promise(function () {
      for (var _len = arguments.length, controls = new Array(_len), _key = 0; _key < _len; _key++) {
        controls[_key] = arguments[_key];
      }

      resolve = controls[0];
      reject = controls[1];
    });
    return {
      promise: promise,
      resolve: resolve,
      reject: reject
    };
  }
});

function transition$1() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$inPropName = params.inPropName,
      _params$namePropName = params.namePropName,
      namePropName = _params$namePropName === void 0 ? 'name' : _params$namePropName;
  return Behavior({
    data: {
      mounted: false,
      display: false,
      classNames: []
    },
    methods: {
      emitTransitionEvent: function emitTransitionEvent() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var eventName = args[0],
            rest = args.slice(1);
        var customEventName = params[eventName];
        var cbName = "on".concat(eventName.slice(0, 1).toUpperCase()).concat(eventName.slice(1));
        var cb = params[cbName];

        if (cb) {
          cb.call.apply(cb, [this].concat(args));
        }

        if (customEventName) {
          this.triggerEvent.apply(this, [customEventName].concat(_toConsumableArray(rest)));
        } else {
          this.triggerEvent.apply(this, args);
        }
      },
      enter: function enter() {
        var _this = this;

        var classNames = transition.getClassNames(this.data[namePropName]);
        this.emitTransitionEvent('beforeenter');
        transition.nextTick().then(function () {
          _this.setData({
            mounted: true,
            display: true,
            classNames: "".concat(classNames.enter, " enter-class")
          });
        }).then(transition.nextTick).then(function () {
          _this.transitionControls = transition.genAsyncControls();

          _this.setData({
            mounted: true,
            display: true,
            classNames: "".concat(classNames.enterActive, " enter-active-class ").concat(classNames.enterTo, " enter-to-class")
          });

          _this.emitTransitionEvent('enter');
        }).then(function () {
          return _this.transitionControls.promise;
        }).then(function () {
          _this.setData({
            classNames: ''
          });

          _this.emitTransitionEvent('afterenter');
        });
      },
      leave: function leave() {
        var _this2 = this;

        var classNames = transition.getClassNames(this.data[namePropName]);
        this.emitTransitionEvent('beforeleave');
        transition.nextTick().then(function () {
          _this2.setData({
            classNames: "".concat(classNames.leave, " leave-class")
          });
        }).then(transition.nextTick).then(function () {
          _this2.transitionControls = transition.genAsyncControls();

          _this2.setData({
            classNames: "".concat(classNames.leaveTo, " leave-to-class ").concat(classNames.leaveActive, " leave-active-class")
          });

          _this2.emitTransitionEvent('leave');
        }).then(function () {
          return _this2.transitionControls.promise;
        }).then(function () {
          _this2.setData({
            classNames: '',
            mounted: false,
            display: false
          });

          _this2.emitTransitionEvent('afterleave');
        });
      },
      onTransitionEnd: function onTransitionEnd() {
        if (this.transitionControls) {
          this.transitionControls.resolve();
        }
      }
    }
  });
}

exports.transition = transition$1;

});