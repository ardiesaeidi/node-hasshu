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