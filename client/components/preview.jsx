const PropTypes = require('prop-types');
const React = require('react');
const styles = require('./preview.css');

function Preview({ side, update }) {
  let dateHeader;
  let sidePreviewStyle;
  let sideStyle;

  if (side === 'Left') {
    sidePreviewStyle = styles.previewLeft;
    sideStyle = styles.left;
  } else {
    sidePreviewStyle = '';
    sideStyle = styles.right;
  }

  if (side === 'Left') {
    dateHeader = (
      <div className={styles.header}>
        <div className={styles.date}>{update.pubDate}</div>
        <div className={styles.spacerContainer}>
          <div className={styles.spacerLine} />
        </div>
      </div>
    );
  } else {
    dateHeader = (
      <div className={styles.header}>
        <div className={styles.spacerContainer}>
          <div className={styles.spacerLine} />
        </div>
        <div className={styles.date}>{update.pubDate}</div>
      </div>
    );
  }

  return (
    <div className={sideStyle}>
      <div className={`${styles.entry} ${sidePreviewStyle}`}>
        {dateHeader}
        <div className={styles.previewMain}>
          <div className={styles.title}>{update.title}</div>
          <div className={styles.body}>{update.body.split('</p>')[0]}</div>
          <div className={styles.footer}>{`Comments 12 ${update.likes}`}</div>
        </div>
      </div>
    </div>
  );
}

Preview.defaultProps = {
  side: 'left',
  update: {}
};

Preview.propTypes = {
  side: PropTypes.string,
  update: PropTypes.object
};

module.exports = Preview;
