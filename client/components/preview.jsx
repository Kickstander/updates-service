const PropTypes = require('prop-types');
const React = require('react');
const styles = require('./preview.css');

function Preview({ side }) {
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

  if (side === 'Left') {
    dateHeader = (
      <div className={styles.previewHeader}>
        <div className={styles.date}>Date</div>
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
        <div className={styles.date}>Date</div>
      </div>
    );
  }

  return (
    <div className={`${styles.previewContainer} ${sideStyle}`}>
      <div className={`${styles.entry} ${sidePreviewStyle}`}>
        {dateHeader}
        <div className={styles.previewMain}>
          <div className={styles.previewTitle}>Title of Update</div>
          <div className={styles.previewBody}>Some body text here</div>
          <div className={styles.previewFooter}>Comments Likes</div>
        </div>
      </div>
    </div>
  );
}

Preview.defaultProps = {
  side: 'left'
};

Preview.propTypes = {
  side: PropTypes.string
};

module.exports = Preview;
