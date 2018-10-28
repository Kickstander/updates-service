const React = require('react');
const ReactDom = require('react-dom');
const dummyData = require('./dummyData.json');

function App(props) {
  return (
    <div>
      <div>REACT SAYS HI!</div>
      <div>{props.data[0].title}</div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(dummyData);
  ReactDom.render(<App data={dummyData} />, document.getElementById('root'));
});
