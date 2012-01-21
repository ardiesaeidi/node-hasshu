var Hasshu = require('./hasshu');

var people = new Hasshu({'Joe': { age: 25 }, 'Jane': { age: 23 } });

// enumerate over hash
people.forEach(function(key, val) {
  console.log('Value for key: %s is ', key, val);
});

// adding a new person
people.set('John', { age: 32 });
console.log('Just added John: ', people.get('John'));

// getting all the keys
console.log('Keys in hash: ', people.keys());

// getting all the values 
console.log('Values in hash: ', people.values());

// filter people with names that begin with 'jo'
var jos = people.filter(function(key, val) {
    return /^jo/i.test(key);
  });

console.log('People with name that begins with "Jo"',jos.keys());

// merging with another hash
var newPeople = new Hasshu({ 'Jorge': { age: 43 }});
people.merge(newPeople);

console.log('Merged with newPeople hash', people.keys());

// merging with plain obj
var moreNewPeople = { 'Jimmy': { age: 29 } };
people.merge(moreNewPeople);

console.log('Merged with moreNewPeople object', people.keys());
