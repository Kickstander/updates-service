const React = require('react');
const ReactDom = require('react-dom');
const dummyData = require('./dummyData.json');
const css = require('./app.css');
const Preview = require('./components/preview.jsx');

function App(props) {
  return (
    <div>
      <div className="wrapper">
        <div>Left Margin</div>
        <div className="previews-container">
          <Preview side="left" />
          <Preview side="right" />
          <Preview side="left" />
          <Preview side="left" />
          <Preview side="right" />
        </div>
        <div>Right Margin</div>
      </div>
    </div>
    // <div>
    //   <div className='title'>REACT SAYS HI!</div>
    //   <div>{props.data[0].title}</div>
    //   <div>{props.data[0].body}</div>
    // </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(dummyData);
  ReactDom.render(<App data={dummyData} />, document.getElementById('root'));
});
