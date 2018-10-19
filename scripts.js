let languages = ['javascript', 'python', 'php', 'java', 'react.js', 'node.js', 'sass'];

console.log('There are ' + languages.length + ' programing languages in this list');
console.log(languages[0] + ' is the first element from the array.');
console.log(languages[6] + ' is the last element from the array.');
languages.unshift('cow');
languages.push('chicken');
console.log(languages.join(', '));
let x = languages.pop();
console.log(x);
