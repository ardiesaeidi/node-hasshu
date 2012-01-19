var vows = require('vows'),
  assert = require('assert'),
  Hasshu = require('./hasshu');



vows.describe('Hasshu').addBatch({

  'A hash with items' : {

    topic: new Hasshu({ 'Joe': { age: 28 }, 'Jane': { age: 23 }, 'John': { age: 32 }}),
    'has keys': function(hash) {
      assert.equal(hash.keys().length > 0, true);
    },
    'has values': function(hash) {
      assert.equal(hash.values().length > 0, true);
    },
    'can get a value by key': function(hash) {
      var joe = hash.get('Joe');
      assert.isObject(joe);
    },
    'can set a value by key': function(hash) {
      var key = 'Joe', 
        joe = hash.get(key);

      console.log('%s was', key, joe);
      
      joe.age = 56;
      hash.set(key, joe);

      console.log('%s is now', key,  joe);
      assert.equal(joe.age, hash.get(key).age);
    },
    'can test for key': function(hash) {
      assert.isTrue(hash.hasKey('Joe'));
    },
    'can remove an item': function(hash) {
      var key = 'Jim';
      hash.set(key, { age: 45 });
      assert.isTrue(hash.hasKey(key));

      hash.remove(key);
      assert.isFalse(hash.hasKey(key));
      assert.isUndefined(hash.get(key));
    },
    "can't find item with bogus key": function(hash) {
      assert.isUndefined(hash.get('BOGUSKEY'));
    },
    'can filter items': function(hash) {
      var janes = hash.filter(function(key, val) {
        return /^ja/i.test(key);
      });

      assert.equal(janes.length(), 1);
    }
  }

}).run();
