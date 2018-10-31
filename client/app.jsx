/* eslint-env browser */
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './app.css';

const React = require('react');
const ReactDom = require('react-dom');
const Preview = require('./components/preview.jsx');

const projectId = 2;

// var random_boolean = Math.random() >= 0.5;

const randomSide = () => {
  return Math.random() >= 0.5 ? 'Left' : 'Right';
};

function App({ updates }) {
  const updateList = updates.map(update => (
    <Preview update={update} side={randomSide()} id={update.id} />
  ));

  return (
    <div>
      <div className={styles.verticalMargin} />
      <div className={styles.wrapper}>
        <div className={styles.horizontalMargin} />
        <div className={styles.leftColumn}></div>
        <div className={styles.rightColumn}></div>
        <div className={styles.horizontalMargin} />
      </div>
      <div className={styles.verticalMargin} />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  // console.log(dummyData);
  axios.get(`http://localhost:3000/${projectId}/updates`).then(response => {
    ReactDom.render(<App updates={response.data} />, document.getElementById('root'));
  });
});

App.defaultProps = {
  updates: {}
};

App.propTypes = {
  updates: PropTypes.array
};
