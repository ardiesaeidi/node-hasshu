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
--------------------
Creates a new hash with all elements that pass the test in callback.

merge(hash: [Hasshu instance or object])
----------------------------------------
Merges hash or object with current hash.


License
=======
(The MIT License)

Copyright (c) 2012 Ardie Saeidi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
