const PropTypes = require('prop-types');
const React = require('react');
const styles = require('./preview.css');

function Preview({ side, update }) {
  let sidePreviewStyle;

  const dateAndSpacer = [
    <div className={styles.date} key="1">
      {update.pubDate}
    </div>,
    <div className={styles.spacerContainer} key="2">
      <div className={styles.spacerLine} />
    </div>
  ];

  const styleSide = side === 'left' ? styles.left : styles.right;
  const previewSide = side === 'left' ? styles.previewMainleft : styles.previewMainRight;

  return (
    <div className={styleSide}>
      <div className={styles.header}>
        {side === 'left' ? dateAndSpacer : dateAndSpacer.reverse()}
      </div>
      <div className={previewSide}>
        <div className={styles.title}>{update.title}</div>
        <div className={styles.body}>{update.body.split('</p>')[0]}</div>
        <div className={styles.footer}>{`Comments 12 Likes ${update.likes}`}</div>
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
