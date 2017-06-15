var p =  Promise.resolve('Hello World');
var warning = Promise.reject('Tornado Detected!');

greeting.then(null,console.log);

warning.catch(console.log);