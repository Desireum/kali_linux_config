define("@native-pc-components/common/vendor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var card = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shadowList = exports.radiusList = exports.bgColorList = void 0;
  var bgColorList = ['white', 'grey'];
  exports.bgColorList = bgColorList;
  var radiusList = ['small', 'large', 'none'];
  exports.radiusList = radiusList;
  var shadowList = ['small', 'middle', 'large', 'none'];
  exports.shadowList = shadowList;
});

var checkbox = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useCheckbox = useCheckbox;
  exports.useCheckboxGroup = useCheckboxGroup;

  function useCheckbox(host) {
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled',
      groupValue: 'groupValue',
      groupDisabled: 'groupDisabled',
      checkboxDisabled: 'checkboxDisabled',
      checkboxChecked: 'checkboxChecked',
      indeterminate: 'indeterminate'
    };
    var parent = null;

    function emitChange(instance, value) {
      instance.emit('input', value);
      instance.emit('change', value);
    } // ???CheckboxGroup?????????indeterminate?????????checkbox??????CheckboxGroup??????


    function isUnderGroupControl() {
      var indeterminate = host.get(DATA_KEY.indeterminate);
      return parent && typeof indeterminate !== 'boolean';
    }

    function onChange() {
      if (host.get(DATA_KEY.checkboxDisabled)) {
        return;
      }

      var value = host.get(DATA_KEY.value);

      if (!isUnderGroupControl()) {
        emitChange(host, !value);
        return;
      }

      var groupValue = host.get(DATA_KEY.groupValue) || [];
      var selected = groupValue.slice();
      var index = selected.indexOf(value);

      if (index === -1) {
        selected.push(value);
      } else {
        selected.splice(index, 1);
      }

      emitChange(parent, selected);
    }

    function computeCheckboxChecked() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          groupValue = _ref.groupValue;

      groupValue = groupValue || host.get(DATA_KEY.groupValue);
      var value = host.get(DATA_KEY.value);

      if (!isUnderGroupControl()) {
        return value;
      }

      var valueInGroup = groupValue && groupValue.indexOf(value) !== -1;
      return valueInGroup;
    }

    function computeCheckboxDisabled() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          groupDisabled = _ref2.groupDisabled;

      groupDisabled = groupDisabled || host.get(DATA_KEY.groupDisabled);
      return groupDisabled || host.get(DATA_KEY.disabled);
    }

    function init(parentInstance) {
      parent = parentInstance;

      if (parent) {
        parent.link(host);
      }
    }

    host.init = init;
    host.onChange = onChange;
    host.computeCheckboxChecked = computeCheckboxChecked;
    host.computeCheckboxDisabled = computeCheckboxDisabled;
  }

  function useCheckboxGroup(host) {
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled',
      groupValue: 'groupValue',
      groupDisabled: 'groupDisabled'
    };
    var children = [];

    function updateChild(child) {
      child.setGroupValue(host.get(DATA_KEY.value));
      child.setGroupDisabled(host.get(DATA_KEY.disabled));
    }

    function updateChildren() {
      children.forEach(updateChild);
    }

    function link(child) {
      children.push(child);
      updateChild(child);
    }

    function unlink(child) {
      children = children.filter(function (item) {
        return item !== child;
      });
      child.init(null);
    }

    host.link = link;
    host.unlink = unlink;
    host.updateChildren = updateChildren;
  }
});

var event = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _default = Behavior({
    methods: {
      emit: function emit(event, params) {
        this.triggerEvent(event, params);
      },
      getParamsFromEvent: function getParamsFromEvent(e) {
        return e.detail;
      }
    }
  });

  exports["default"] = _default;
});
var eventBehavior = /*@__PURE__*/getDefaultExportFromCjs(event);

var data = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  } // eslint-disable-next-line no-undef


  var _default = Behavior({
    methods: {
      get: function get(key, isProps) {
        if (isProps) {
          return this.properties[key];
        }

        return this.data[key];
      },
      set: function set(key, value) {
        this.setData(_defineProperty({}, key, value));
      },
      setAll: function setAll(data) {
        var _this = this;

        return new Promise(function (res) {
          _this.setData(data, res);
        });
      }
    }
  });

  exports["default"] = _default;
});
var dataBehavior = /*@__PURE__*/getDefaultExportFromCjs(data);

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var isArray_1 = isArray;

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
});

/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof_1(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof_1(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

/** Built-in value references. */

var _Symbol2 = _root.Symbol;
var _Symbol = _Symbol2;

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof_1(value) == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof_1(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }

  var type = _typeof_1(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof_1(value);

  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */

var coreJsData = _root['__core-js_shared__'];
var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }

  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */

var nativeCreate = _getNative(Object, 'create');
var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */

var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */

var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */

var Map = _getNative(_root, 'Map');
var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map || _ListCache)(),
    'string': new _Hash()
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof_1(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
var _MapCache = MapCache;

/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = _MapCache;
var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */

var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize_1(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = _memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }

  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */

var INFINITY$1 = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var fab = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.typeList = void 0; // eslint-disable-next-line import/prefer-default-export

  var typeList = ['primary', 'secondary'];
  exports.typeList = typeList;
});

var utils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSystemInfo = getSystemInfo;
  exports.calcUnit = calcUnit;
  exports.getHalfScreenHeightTop = getHalfScreenHeightTop;
  exports.getRect = getRect;
  exports.uniqueId = uniqueId;
  exports.wait = wait;
  exports.range = range;
  exports.isObj = isObj;
  exports.langMap = exports.numberReg = exports.macReg = exports.windowsReg = exports.androidReg = exports.iPhoneXReg = exports.iPhoneReg = void 0;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var iPhoneReg = /iPhone/ig;
  exports.iPhoneReg = iPhoneReg;
  var iPhoneXReg = /iPhone ?(X|1\d+)/ig;
  exports.iPhoneXReg = iPhoneXReg;
  var androidReg = /android/ig;
  exports.androidReg = androidReg;
  var windowsReg = /windows/i;
  exports.windowsReg = windowsReg;
  var macReg = /mac/i;
  exports.macReg = macReg;
  var numberReg = /^\d+(\.\d+)?$/;
  exports.numberReg = numberReg;
  var langMap = {
    de_DE: 'de-DE',
    en_US: 'en-US',
    es_ES: 'es-ES',
    fr_FR: 'fr-FR',
    hi_IN: 'hi-IN',
    id_ID: 'id-ID',
    it_IT: 'it-IT',
    ja_JP: 'ja-JP',
    ko_KR: 'ko-KR',
    pt_BR: 'pt-BR',
    ru_RU: 'ru-RU',
    th_TH: 'th-TH',
    vi_VN: 'vi-VN',
    zh_CN: 'zh-CN',
    zh_HK: 'zh-HK',
    zh_TW: 'zh-TW'
  }; // ????????????

  exports.langMap = langMap;
  var systemInfo = null;

  function getSystemInfo() {
    if (systemInfo) return systemInfo;
    systemInfo = tt.getSystemInfoSync();
    var _systemInfo = systemInfo,
        _systemInfo$brand = _systemInfo.brand,
        brand = _systemInfo$brand === void 0 ? '' : _systemInfo$brand,
        platform = _systemInfo.platform,
        model = _systemInfo.model,
        system = _systemInfo.system;
    systemInfo.isDevtools = platform === 'devtools';
    systemInfo.isIphone = iPhoneReg.test(model);
    systemInfo.isIphoneX = iPhoneXReg.test(model);
    systemInfo.isAndroid = androidReg.test(system);
    systemInfo.isLarkPc = brand.toLowerCase() === 'pc';
    systemInfo.isLarkWindows = brand.toLowerCase() === 'pc' && windowsReg.test(platform);
    systemInfo.isLarkMac = brand.toLowerCase() === 'pc' && macReg.test(platform);
    systemInfo.normalizedLang = langMap[systemInfo.language] || langMap.en_US;
    systemInfo.isDarkMode = systemInfo.theme === 'dark';
    var normalizedPlatform = 'ios';

    if (systemInfo.isAndroid) {
      normalizedPlatform = 'android';
    } else if (systemInfo.isLarkMac) {
      normalizedPlatform = 'mac';
    } else if (systemInfo.isLarkWindows) {
      normalizedPlatform = 'windows';
    }

    systemInfo.normalizedPlatform = normalizedPlatform;
    return systemInfo;
  }

  function calcUnit(value) {
    if (value === null) return undefined;
    return numberReg.test(String(value)) ? "".concat(value, "px") : value;
  }

  function getHalfScreenHeightTop() {
    var screenHeight;
    var windowHeight; // ?????? H5

    try {
      screenHeight = window.innerHeight;
      windowHeight = document.body.clientHeight;
    } catch (e) {//
    }
    /* #ifndef H5 */


    var _getSystemInfo = getSystemInfo(),
        sh = _getSystemInfo.screenHeight,
        wh = _getSystemInfo.windowHeight;

    screenHeight = sh;
    windowHeight = wh;
    /* #endif */

    var h = screenHeight / 2 - (screenHeight - windowHeight);
    return Math.round(h);
  }

  function getRect(context, selector, all) {
    var selectFunc = all ? 'selectAll' : 'select';
    return new Promise(function (resolve) {
      tt.createSelectorQuery()["in"](context)[selectFunc](selector).boundingClientRect(function (data) {
        resolve(data);
      }).exec();
    });
  }

  var idCounter = 0;

  function uniqueId(prefix) {
    // eslint-disable-next-line no-plusplus
    var id = ++idCounter;
    return "".concat(prefix).concat(id);
  }

  function wait(timeout) {
    return new Promise(function (r) {
      return setTimeout(r, timeout);
    });
  }

  function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  function isObj(x) {
    var type = _typeof(x);

    return x !== null && (type === 'object' || type === 'function');
  }
});

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {// No operation performed.
}

var noop_1 = noop;

var loading = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = useDelayedLoading;

  var _noop = _interopRequireDefault(noop_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function useDelayedLoading(_ref) {
    var loading = _ref.loading,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        _ref$onUpdate = _ref.onUpdate,
        onUpdate = _ref$onUpdate === void 0 ? _noop["default"] : _ref$onUpdate;
    var state = {
      delay: delay,
      delayedLoading: delay === 0 ? loading : false
    };
    var pendingTimer;

    var updateLoading = function updateLoading(newLoading, newDelay) {
      if (newDelay !== undefined) {
        state.delay = newDelay;
      }

      if (newLoading) {
        if (state.delay === 0) {
          state.delayedLoading = true;
        } else {
          pendingTimer = setTimeout(function () {
            state.delayedLoading = true;
            onUpdate(state.delayedLoading);
          }, state.delay);
        }
      } else {
        clearTimeout(pendingTimer);
        state.delayedLoading = false;
      }

      onUpdate(state.delayedLoading);
    };

    return {
      delayedLoading: state.delayedLoading,
      updateLoading: updateLoading
    };
  }
});
var useDelayedLoading = /*@__PURE__*/getDefaultExportFromCjs(loading);

var transition = createCommonjsModule(function (module, exports) {

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

var radio = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useRadio = useRadio;
  exports.useRadioGroup = useRadioGroup;

  function useRadio(host) {
    var parent;
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled',
      radioChecked: 'radioChecked',
      radioDisabled: 'radioDisabled',
      groupValue: 'groupValue',
      groupDisabled: 'groupDisabled'
    };

    function connectParent(parentNode) {
      parent = parentNode;
    }

    function emitChange(value) {
      var instance = parent || host;
      instance.emit('input', value);
      instance.emit('change', value);
    }

    function onChange(value) {
      if (!host.get(DATA_KEY.radioChecked) && !host.get(DATA_KEY.radioDisabled)) {
        emitChange(parent ? value : true);
      }
    }

    function computeRadioChecked() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          groupValue = _ref.groupValue;

      groupValue = groupValue || host.get(DATA_KEY.groupValue);

      if (!parent) {
        return host.get(DATA_KEY.value);
      }

      var valueEqualToGroup = groupValue && groupValue === host.get(DATA_KEY.value);
      return valueEqualToGroup;
    }

    function computeRadioDisabled() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          groupDisabled = _ref2.groupDisabled;

      groupDisabled = groupDisabled || host.get(DATA_KEY.groupDisabled);
      return groupDisabled || host.get(DATA_KEY.disabled);
    }

    host.connectParent = connectParent;
    host.onChange = onChange;
    host.computeRadioChecked = computeRadioChecked;
    host.computeRadioDisabled = computeRadioDisabled;
  }

  function useRadioGroup(host) {
    var children = [];
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled'
    };

    function updateChild(child) {
      child.setGroupValue(host.get(DATA_KEY.value));
      child.setGroupDisabled(host.get(DATA_KEY.disabled));
    }

    function updateChildren() {
      children.forEach(updateChild);
    }

    function link(child) {
      children.push(child);
      updateChild(child);
    }

    function unlink(child) {
      children = children.filter(function (item) {
        return item !== child;
      });
    }

    host.link = link;
    host.unlink = unlink;
    host.updateChildren = updateChildren;
  }
});

var _switch = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = useSwitch;

  function useSwitch(host) {
    var DATA_KEY = {
      value: 'value',
      disabled: 'disabled',
      isAndroid: 'isAndroid',
      isIos: 'isIos',
      loading: 'loading'
    };

    function emitChange(value) {
      host.emit('input', value);
      host.emit('change', value);
    }

    function handleTapSwitch() {
      if (host.get(DATA_KEY.disabled, true) || host.get(DATA_KEY.loading, true)) {
        return;
      }

      emitChange(!host.get(DATA_KEY.value, true));
    }

    host.emitChange = emitChange;
    host.handleTapSwitch = handleTapSwitch;
  }
});

var useSwitch = /*@__PURE__*/getDefaultExportFromCjs(_switch);

var tag = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.colors = exports.sizes = exports.types = void 0;
  var types = ['default', 'options', 'avatar'];
  exports.types = types;
  var sizes = ['default', 'large'];
  exports.sizes = sizes;
  var colors = ['neutral', 'neutral_option', 'light_neutral', 'neutral_ghost', 'blue', 'blue_option', 'blue_ghost', 'carmine', 'carmine_ghost', 'indigo', 'indigo_option', 'wathet', 'wathet_option', 'red', 'red_option', 'red_ghost', 'green', 'green_option', 'orange', 'orange_option', 'violet', 'violet_option', 'purple', 'turquoise', 'turquoise_option', 'lime', 'lime_option', 'yellow', 'yellow_option'];
  exports.colors = colors;
});

exports.card = card;
exports.checkbox = checkbox;
exports.createCommonjsModule = createCommonjsModule;
exports.dataBehavior = dataBehavior;
exports.eventBehavior = eventBehavior;
exports.fab = fab;
exports.getDefaultExportFromCjs = getDefaultExportFromCjs;
exports.get_1 = get_1;
exports.radio = radio;
exports.tag = tag;
exports.transition = transition;
exports.useDelayedLoading = useDelayedLoading;
exports.useSwitch = useSwitch;
exports.utils = utils;

});