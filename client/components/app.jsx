import React from 'react';
import PropTypes from 'prop-types';
import styles from './app.css';
import Preview from './preview';

let isLeft = true;

const alternateSide = () => {
  isLeft = !isLeft;
  return isLeft ? 'left' : 'right';
};

function App({ updates }) {
  const updateComponents = updates.reduce((acc, update) => {
    const side = alternateSide();
    const preview = <Preview update={update} side={side} key={update.id} />;
    const spacer = <div key={`${update.id}spacer`} />;

    if (side === 'left') {
      acc.push(preview);
      acc.push(spacer);
    } else {
      acc.push(spacer);
      acc.push(preview);
    }
    return acc;
  }, []);

  return (
    <div>
      <div className={styles.verticalMargin} />
      <div className={styles.wrapper}>
        <div className={styles.horizontalMargin} />
        <div className={styles.contentWrapper}>{updateComponents}</div>
        <div className={styles.horizontalMargin} />
      </div>
      <div className={styles.verticalMargin} />
    </div>
  );
}

App.defaultProps = {
  updates: {}
};

App.propTypes = {
  updates: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pubDate: PropTypes.string,
      likes: PropTypes.number
    })
  )
};

export default App;
