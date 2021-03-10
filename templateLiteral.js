//Practice Template Literal
const nama = 'John';
const age = 20;
const job = 'Web Developer';
const city = 'Jakarta Barat';

let html;

//the old way (es5)

html = '<ul><li>Name: ' + nama + '</li><li>Age: ' + age +' </li><li>Job: ' + job +' </li><li>City: ' + city +' </li></ul>'

html =  '<ul>'  +
        '<li>Name: ' + nama + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>'
        '</ul>';

function hello(){
  return 'hello';
}
// With template literals (es6)

html = `
  <ul>
    <li>Name : ${nama}</li>
    <li>Age : ${age}</li>
    <li>Job : ${job}</li>
    <li>City : ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age >= 30 ? 'equals or over 30' : 'under 30'}</li>
  </ul>
`;
document.body.innerHTML = html;