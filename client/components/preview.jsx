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
    sidePreviewStyle = styles.previewRight;
    sideStyle = styles.right;
  }

  // {update.pubDate}

  if (side === 'Left') {
    dateHeader = (
      <div className={styles.previewHeader}>
        <div className={styles.date}>{update.pubDate}</div>
        <div className={styles.spacerContainer}>
          <div className={styles.spacerLine} />
        </div>
      </div>
    );
  } else {
    dateHeader = (
      <div className={styles.previewHeader}>
        <div className={styles.spacerContainer}>
          <div className={styles.spacerLine} />
        </div>
        <div className={styles.date}>{update.pubDate}</div>
      </div>
    );
  }

  return (
    <div className={`${styles.previewContainer} ${sideStyle}`}>
      <div className={`${styles.entry} ${sidePreviewStyle}`}>
        {dateHeader}
        <div className={styles.previewMain}>
          <div className={styles.previewTitle}>{update.title}</div>
          <div className={styles.previewBody}>{update.body}</div>
          <div className={styles.previewFooter}>{`Comments Hard Likes ${update.likes}`}</div>
        </div>
      </div>
    </div>
  );
}

Preview.defaultProps = {
  side: 'left'
};

Preview.propTypes = {
  side: PropTypes.string,
  update: PropTypes.object
};

module.exports = Preview;
