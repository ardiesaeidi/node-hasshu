Hasshu
=======

Hasshu (hash in japanese) is a simple node.js library to manipulate hash data structures.


Usage
-----
    var Hasshu = require('hasshu');

    var people = new Hasshu({'Joe': { age: 25 }, 'Jane': { age: 23 } });
    
    // get by key
    var joe = people.get('Joe');
    
    // iterate over hash
    people.forEach(function(key, val) {
      console.log(key);
    });
    
    // filter hash
    var janes = people.filter(function(key, val) {
      return /^jane/i.test(key);
    });
    
    // add or update a new item
    people.set('Jimmy', { age: 32 });




Installation
============

    npm install hasshu




Constructor
===========

Pass in hash like object. (Optional)

    Hasshu();
    Hasshu({ a: 'some val' });




Methods
=======

set(key: string, val: object)
-----------------------------
Will add or update an item in hash.

get(key: string)
----------------
Returns value in hash for key.

remove(key: string)
-------------------
Remove item from hash by key.

hasKey(key: string)
-------------------
Returns true if key exists in hash.

forEach(cb: function)
----------------------
Iterate through hash passing key and val into callback.

keys
-----
Returns array of keys.

length
-------
Returns the number of items in hash.

values
-------
Returns an array of values.

filter(cb: function)
------
Creates a new hash with all elements that pass the test in callback.
