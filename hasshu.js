module.exports = Hasshu;


/*
 * Hasshu (hash in japanese) is a simple hash library.
 * @param hash: Pass in hash object. (Optional)
 *   ex: 
 *    var hash = new Hasshu({ key1: 'some value' });
 *     var hash2 = new Hasshu({ 'key-with-hyphen': 'some other value'}); 
 */
function Hasshu(hash) {
  if (!(this instanceof Hasshu))
    return new Hasshu(hash);

  if (typeof(hash) === 'undefined')
    hash = {};

  /*
   * Will add or update an item in hash.
   * @param key: Key in hash.
   * @param val: Value to save.
   */
  this.set = function(key, val) {
    hash[key] = val;
  };


  /*
   * Gets item in hash by key.
   * @param key: Key in hash.
   */
  this.get = function(key) {
    return hash[key];
  };


  /*
   * Remove item from hash by key.
   * @param key: Key in hash to delete.
   */
  this.remove = function(key) {
    delete hash[key];
  };


  /*
   * Returns true if key exists in hash.
   * @param key: Key to check.
   */
  this.hasKey = function(key) {
    return hash.hasOwnProperty(key);
  };


  /*
   * Iterate through hash.
   * @param cb: Anon function with (key, val) passed in.
   */
  this.forEach = function(cb) {
    this.keys().forEach(function(key) {
      cb(key, hash[key]);
    });
  };


  /*
   * Returns array of keys in hash.
   */
  this.keys = function() {
    return Object.keys(hash);
  };


  /*
   * Returns the number of items in hash.
   */
  this.length = function() {
    return this.keys().length;
  };


  /*
   * Returns an array of values.
   */
  this.values = function() {
    var values = [];

    this.forEach(function(key, val) {
      values.push(val);
    });

    return values;
  };
}
