module.exports = Hasshu;


/*
 * Hasshu (hash in japanese) is a simple hash library.
 * @param hash: Pass in hash object. (Optional)
 *   ex: 
 *   var hash = new Hasshu({ key1: 'some value' });
 *   var hash2 = new Hasshu({ 'key-with-hyphen': 'some other value'}); 
 */
function Hasshu(hash) {
  if (!(this instanceof Hasshu))
    return new Hasshu(hash);

  Object.defineProperty(this, 'hash', {
    value: hash || Object.create(null)
  });
}


Hasshu.prototype = {

  /*
   * Will add or update an item in hash.
   * @param key: Key in hash.
   * @param val: Value to save.
   */
  set: function(key, val) {
    this.hash[key] = val;
  },


  /*
   * Returns value in hash for key.
   * @param key: Key in hash.
   */
  get: function(key) {
    return this.hash[key];
  },


  /*
   * Remove item from hash by key.
   * @param key: Key in hash to delete.
   */
  remove: function(key) {
    delete this.hash[key];
  },


  /*
   * Returns true if key exists in hash.
   * @param key: Key to check.
   */
  hasKey: function(key) {
    return this.keys().indexOf(key) > -1;
  },


  /*
   * Iterate through hash.
   * @param cb: Anon function with (key, val) passed in.
   */
  forEach: function(cb) {
    if (typeof(cb) !== 'function')
      throw new TypeError('cb must be a function');

    var self = this;
    this.keys().forEach(function(key) {
      cb(key, self.hash[key]);
    });
  },


  /*
   * Returns array of keys.
   */
  keys: function() {
    return Object.keys(this.hash);
  },


  /*
   * Returns the number of items in hash.
   */
  length: function() {
    return this.keys().length;
  },


  /*
   * Returns an array of values.
   */
  values: function() {
    var values = [];

    this.forEach(function(key, val) {
      values.push(val);
    });

    return values;
  },

  
  /*
   * Creates a new hash with all elements that pass the test in callback.
   * @param cb: Function that returns true with (key, val) passed in.
   */
  filter: function(cb) {
    if (typeof(cb) !== 'function')
      throw new TypeError('cb must be a function');

    var result = new Hasshu();
    this.forEach(function(key, val) {
      if (cb(key, val))
        result.set(key, val);
    });

    return result;
  },


  /*
   * Merges an existing Hasshu instance or hash like obj with this hash.
   * @param obj: Hasshu instance or hash like obj.
   */
  merge: function(obj) {
    var self = this;

    if (obj instanceof Hasshu) {
      obj.forEach(function(key, val) {
        self.set(key, val);
      });
    } else {
      Object.keys(obj).forEach(function(key) {
        self.set(key, obj[key]);
      });
    }
  }
}
