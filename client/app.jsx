/* eslint-env browser */
import styles from './app.css';

const React = require('react');
const ReactDom = require('react-dom');
const dummyData = require('./dummyData.json');
const Preview = require('./components/preview.jsx');

function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div>Left Margin</div>
        <div className={styles['previews-container']}>
          <Preview side="Left" />
          <Preview side="Right" />
          <Preview side="Left" />
          <Preview side="Left" />
          <Preview side="Right" />
        </div>
        <div>Right Margin</div>
      </div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(dummyData);
  ReactDom.render(<App data={dummyData} />, document.getElementById('root'));
});
