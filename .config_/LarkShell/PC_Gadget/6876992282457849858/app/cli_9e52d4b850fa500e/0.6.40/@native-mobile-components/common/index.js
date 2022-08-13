define("@native-mobile-components/common/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print,indexedDB){
 'use strict';

var _commonjsHelpers = require('./_commonjsHelpers.js');
var _typeof = require('./typeof.js');

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

/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof._typeof(_commonjsHelpers.commonjsGlobal) == 'object' && _commonjsHelpers.commonjsGlobal && _commonjsHelpers.commonjsGlobal.Object === Object && _commonjsHelpers.commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof._typeof(self)) == 'object' && self && self.Object === Object && self;
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
  return value != null && _typeof._typeof(value) == 'object';
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
  return _typeof._typeof(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
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

  var type = _typeof._typeof(value);

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
  var type = _typeof._typeof(value);

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
  var type = _typeof._typeof(value);

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

var dayjs_min = _commonjsHelpers.createCommonjsModule(function (module, exports) {
  !function (t, e) {
     module.exports = e() ;
  }(_commonjsHelpers.commonjsGlobal, function () {

    var t = "millisecond",
        e = "second",
        n = "minute",
        r = "hour",
        i = "day",
        s = "week",
        u = "month",
        a = "quarter",
        o = "year",
        f = "date",
        h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        d = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    },
        $ = function $(t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
        l = {
      s: $,
      z: function z(t) {
        var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            i = n % 60;
        return (e <= 0 ? "+" : "-") + $(r, 2, "0") + ":" + $(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            i = e.clone().add(r, u),
            s = n - i < 0,
            a = e.clone().add(r + (s ? -1 : 1), u);
        return +(-(r + (n - i) / (s ? i - a : a - i)) || 0);
      },
      a: function a(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function p(h) {
        return {
          M: u,
          y: o,
          w: s,
          d: i,
          D: f,
          h: r,
          m: n,
          s: e,
          ms: t,
          Q: a
        }[h] || String(h || "").toLowerCase().replace(/s$/, "");
      },
      u: function u(t) {
        return void 0 === t;
      }
    },
        y = "en",
        M = {};

    M[y] = d;

    var m = function m(t) {
      return t instanceof S;
    },
        D = function D(t, e, n) {
      var r;
      if (!t) return y;
      if ("string" == typeof t) M[t] && (r = t), e && (M[t] = e, r = t);else {
        var i = t.name;
        M[i] = t, r = i;
      }
      return !n && r && (y = r), r || !n && y;
    },
        v = function v(t, e) {
      if (m(t)) return t.clone();
      var n = "object" == _typeof._typeof(e) ? e : {};
      return n.date = t, n.args = arguments, new S(n);
    },
        g = l;

    g.l = D, g.i = m, g.w = function (t, e) {
      return v(t, {
        locale: e.$L,
        utc: e.$u,
        x: e.$x,
        $offset: e.$offset
      });
    };

    var S = function () {
      function d(t) {
        this.$L = D(t.locale, null, !0), this.parse(t);
      }

      var $ = d.prototype;
      return $.parse = function (t) {
        this.$d = function (t) {
          var e = t.date,
              n = t.utc;
          if (null === e) return new Date(NaN);
          if (g.u(e)) return new Date();
          if (e instanceof Date) return new Date(e);

          if ("string" == typeof e && !/Z$/i.test(e)) {
            var r = e.match(h);

            if (r) {
              var i = r[2] - 1 || 0,
                  s = (r[7] || "0").substring(0, 3);
              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
            }
          }

          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, $.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, $.$utils = function () {
        return g;
      }, $.isValid = function () {
        return !("Invalid Date" === this.$d.toString());
      }, $.isSame = function (t, e) {
        var n = v(t);
        return this.startOf(e) <= n && n <= this.endOf(e);
      }, $.isAfter = function (t, e) {
        return v(t) < this.startOf(e);
      }, $.isBefore = function (t, e) {
        return this.endOf(e) < v(t);
      }, $.$g = function (t, e, n) {
        return g.u(t) ? this[e] : this.set(n, t);
      }, $.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function () {
        return this.$d.getTime();
      }, $.startOf = function (t, a) {
        var h = this,
            c = !!g.u(a) || a,
            d = g.p(t),
            $ = function $(t, e) {
          var n = g.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
          return c ? n : n.endOf(i);
        },
            l = function l(t, e) {
          return g.w(h.toDate()[t].apply(h.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);
        },
            y = this.$W,
            M = this.$M,
            m = this.$D,
            D = "set" + (this.$u ? "UTC" : "");

        switch (d) {
          case o:
            return c ? $(1, 0) : $(31, 11);

          case u:
            return c ? $(1, M) : $(0, M + 1);

          case s:
            var v = this.$locale().weekStart || 0,
                S = (y < v ? y + 7 : y) - v;
            return $(c ? m - S : m + (6 - S), M);

          case i:
          case f:
            return l(D + "Hours", 0);

          case r:
            return l(D + "Minutes", 1);

          case n:
            return l(D + "Seconds", 2);

          case e:
            return l(D + "Milliseconds", 3);

          default:
            return this.clone();
        }
      }, $.endOf = function (t) {
        return this.startOf(t, !1);
      }, $.$set = function (s, a) {
        var h,
            c = g.p(s),
            d = "set" + (this.$u ? "UTC" : ""),
            $ = (h = {}, h[i] = d + "Date", h[f] = d + "Date", h[u] = d + "Month", h[o] = d + "FullYear", h[r] = d + "Hours", h[n] = d + "Minutes", h[e] = d + "Seconds", h[t] = d + "Milliseconds", h)[c],
            l = c === i ? this.$D + (a - this.$W) : a;

        if (c === u || c === o) {
          var y = this.clone().set(f, 1);
          y.$d[$](l), y.init(), this.$d = y.set(f, Math.min(this.$D, y.daysInMonth())).$d;
        } else $ && this.$d[$](l);

        return this.init(), this;
      }, $.set = function (t, e) {
        return this.clone().$set(t, e);
      }, $.get = function (t) {
        return this[g.p(t)]();
      }, $.add = function (t, a) {
        var f,
            h = this;
        t = Number(t);

        var c = g.p(a),
            d = function d(e) {
          var n = v(h);
          return g.w(n.date(n.date() + Math.round(e * t)), h);
        };

        if (c === u) return this.set(u, this.$M + t);
        if (c === o) return this.set(o, this.$y + t);
        if (c === i) return d(1);
        if (c === s) return d(7);
        var $ = (f = {}, f[n] = 6e4, f[r] = 36e5, f[e] = 1e3, f)[c] || 1,
            l = this.$d.getTime() + t * $;
        return g.w(l, this);
      }, $.subtract = function (t, e) {
        return this.add(-1 * t, e);
      }, $.format = function (t) {
        var e = this;
        if (!this.isValid()) return "Invalid Date";

        var n = t || "YYYY-MM-DDTHH:mm:ssZ",
            r = g.z(this),
            i = this.$locale(),
            s = this.$H,
            u = this.$m,
            a = this.$M,
            o = i.weekdays,
            f = i.months,
            h = function h(t, r, i, s) {
          return t && (t[r] || t(e, n)) || i[r].substr(0, s);
        },
            d = function d(t) {
          return g.s(s % 12 || 12, t, "0");
        },
            $ = i.meridiem || function (t, e, n) {
          var r = t < 12 ? "AM" : "PM";
          return n ? r.toLowerCase() : r;
        },
            l = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: a + 1,
          MM: g.s(a + 1, 2, "0"),
          MMM: h(i.monthsShort, a, f, 3),
          MMMM: h(f, a),
          D: this.$D,
          DD: g.s(this.$D, 2, "0"),
          d: String(this.$W),
          dd: h(i.weekdaysMin, this.$W, o, 2),
          ddd: h(i.weekdaysShort, this.$W, o, 3),
          dddd: o[this.$W],
          H: String(s),
          HH: g.s(s, 2, "0"),
          h: d(1),
          hh: d(2),
          a: $(s, u, !0),
          A: $(s, u, !1),
          m: String(u),
          mm: g.s(u, 2, "0"),
          s: String(this.$s),
          ss: g.s(this.$s, 2, "0"),
          SSS: g.s(this.$ms, 3, "0"),
          Z: r
        };

        return n.replace(c, function (t, e) {
          return e || l[t] || r.replace(":", "");
        });
      }, $.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function (t, f, h) {
        var c,
            d = g.p(f),
            $ = v(t),
            l = 6e4 * ($.utcOffset() - this.utcOffset()),
            y = this - $,
            M = g.m(this, $);
        return M = (c = {}, c[o] = M / 12, c[u] = M, c[a] = M / 3, c[s] = (y - l) / 6048e5, c[i] = (y - l) / 864e5, c[r] = y / 36e5, c[n] = y / 6e4, c[e] = y / 1e3, c)[d] || y, h ? M : g.a(M);
      }, $.daysInMonth = function () {
        return this.endOf(u).$D;
      }, $.$locale = function () {
        return M[this.$L];
      }, $.locale = function (t, e) {
        if (!t) return this.$L;
        var n = this.clone(),
            r = D(t, e, !0);
        return r && (n.$L = r), n;
      }, $.clone = function () {
        return g.w(this.$d, this);
      }, $.toDate = function () {
        return new Date(this.valueOf());
      }, $.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function () {
        return this.$d.toISOString();
      }, $.toString = function () {
        return this.$d.toUTCString();
      }, d;
    }(),
        p = S.prototype;

    return v.prototype = p, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", u], ["$y", o], ["$D", f]].forEach(function (t) {
      p[t[1]] = function (e) {
        return this.$g(e, t[0], t[1]);
      };
    }), v.extend = function (t, e) {
      return t.$i || (t(e, S, v), t.$i = !0), v;
    }, v.locale = D, v.isDayjs = m, v.unix = function (t) {
      return v(1e3 * t);
    }, v.en = M[y], v.Ls = M, v.p = {}, v;
  });
});

var i18n = _commonjsHelpers.createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.t = void 0;

  var _get = _interopRequireDefault(get_1);

  var _dayjs = _interopRequireDefault(dayjs_min);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

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
  }

  var locales = {}; // 组件库默认使用中文语言包

  var patt = /\$\{(.*?)\}/g; // 模板转换正则：${xxx}

  /**
   * 转换函数，用于获取 key 对应的文案
   * @param {string} key 文案对应的key
   * @param {obj} obj 用于模板替换
   */

  var t = function t(key) {
    var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var value = (0, _get.default)(locales, key); // 获取文案

    if (!value) {
      throw new Error("Invilad locale key: `".concat(key, "`. ") + "Make true you have registered it in `i18n/locale/".concat(locales.locale, "`."));
    }

    return value.replace(patt, function (match) {
      var innerKey = match.slice(2, match.length - 1).trim();
      var varValue = obj[innerKey];

      if (!varValue) {
        throw new Error("Variable `".concat(innerKey, "` in template `").concat(key, "` should be provided."));
      }

      return varValue;
    });
  };
  /**
   * 指定语言包
   * @param {object} 要设置的文案包
   */


  exports.t = t;

  t.use = function () {
    var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    locales = _objectSpread(_objectSpread({}, locales), l); // 注册 dayjs i18n

    var dl = (0, _get.default)(l, 'dayjsLocale') || '';

    if (dl && !_dayjs.default.Ls[dl.name]) {
      _dayjs.default.locale(dl, null, true);
    }
  };
  /**
   * 初始化语言包
   * @param {object} 设置要初始化的文案包
   */


  t.init = function () {
    var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    locales = _objectSpread(_objectSpread({}, l), locales); // 注册 dayjs i18n

    var dl = (0, _get.default)(l, 'dayjsLocale') || '';

    if (dl && !_dayjs.default.Ls[dl.name]) {
      // 判断 dayjs 是否已注册相关文案
      _dayjs.default.locale(dl, null, true);
    }
  }; // 挂载 dayjs


  t.dayjs = _dayjs.default;
  var _default = t;
  exports.default = _default;
});
var t = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(i18n);

exports.dayjs_min = dayjs_min;
exports.get_1 = get_1;
exports.i18n = i18n;
exports.t = t;

});