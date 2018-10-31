const moment = require('moment');
const PropTypes = require('prop-types');
const React = require('react');
const styles = require('./preview.css');

function getHighlightColor() {
  const colors = ['Sky', 'Teal', 'Apricot'];
  const randomIdx = Math.floor(Math.random() * colors.length);
  return colors[randomIdx];
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      highlight: false,
      color: getHighlightColor()
    };
  }

  handleMouseEnter() {
    this.setState({ highlight: true });
  }

  handleMouseLeave() {
    this.setState({ highlight: false });
  }

  render() {
    const dateAndSpacer = [
      <div className={styles.date} key="1">
        {moment(this.props.update.pubDate).format('LL')}
      </div>,
      <div className={styles.spacerContainer} key="2">
        <div className={styles.spacerLine} />
      </div>
    ];

    const styleSide = this.props.side === 'left' ? styles.left : styles.right;
    const previewSide = this.props.side === 'left' ? styles.previewMainLeft : styles.previewMainRight;

    return (
      <div className={styleSide}>
        <div className={styles.header}>
          {this.props.side === 'left' ? dateAndSpacer : dateAndSpacer.reverse()}
        </div>
        <div className={previewSide}>
          <div
            className={
              this.state.highlight
                ? `${styles.title} ${styles[`highlight${this.state.color}`]}`
                : styles.title
            }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            {this.props.update.title}
          </div>
          <div className={styles.body}>{this.props.update.body.split('</p>')[0]}</div>
          <div className={this.props.side === 'left' ? styles.footerLeft : styles.footerRight}>
            <div className={`${styles.footerElement} ${styles.comments}`}>12 Comments</div>
            <div className={styles.footerElement}>{`${this.props.update.likes} Likes`}</div>
          </div>
        </div>
      </div>
    );
  }
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
