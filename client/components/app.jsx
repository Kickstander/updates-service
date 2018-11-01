
import PropTypes from 'prop-types';
import styles from './app.css';

const ReactDom = require('react-dom');
const Preview = require('./preview.jsx');

let isLeft = true;

const alternateSide = () => {
  isLeft = !isLeft;
  return isLeft ? 'left' : 'right';
};

function App({ updates }) {
  const updateComponents = updates.reduce((acc, update) => {
    const side = alternateSide();
    const updateOrSpacer = [
      <Preview update={update} side={side} key={update.id} />,
      <div key={`${update.id}spacer`} />
    ];
    acc.push(side === 'left' ? updateOrSpacer.shift() : updateOrSpacer.pop());
    acc.push(updateOrSpacer[0]);
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
