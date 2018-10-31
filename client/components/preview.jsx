const moment = require('moment');
const PropTypes = require('prop-types');
const React = require('react');
const styles = require('./preview.css');

function Preview({ side, update }) {
  let sidePreviewStyle;

  const dateAndSpacer = [
    <div className={styles.date} key="1">
      {moment(update.pubDate).format('LL')}
    </div>,
    <div className={styles.spacerContainer} key="2">
      <div className={styles.spacerLine} />
    </div>
  ];

  const styleSide = side === 'left' ? styles.left : styles.right;
  const previewSide = side === 'left' ? styles.previewMainLeft : styles.previewMainRight;

  return (
    <div className={styleSide}>
      <div className={styles.header}>
        {side === 'left' ? dateAndSpacer : dateAndSpacer.reverse()}
      </div>
      <div className={previewSide}>
        <div className={styles.title} onHover={}>
          {update.title}
        </div>
        <div className={styles.body}>{update.body.split('</p>')[0]}</div>
        <div className={side === 'left' ? styles.footerLeft : styles.footerRight}>
          <div className={`${styles.footerElement} ${styles.comments}`}>12 Comments</div>
          <div className={styles.footerElement}>{`${update.likes} Likes`}</div>
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
