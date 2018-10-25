const React = require('react');
const ReactDom = require('react-dom');

function App() {
  return <div>Hello React</div>;
}

document.addEventListener('DOMContentLoaded', e => {
  ReactDom.render(<App />, document.getElementById('root'));
});
