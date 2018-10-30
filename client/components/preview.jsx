const React = require('react');

function Preview(props) {
  let dateHeader;

  if (props.side === 'left') {
    dateHeader = (
      <div className="preview-header">
        <div className="date">Date</div>
        <div className="spacer-container">
          <div className="spacer-line" />
        </div>
      </div>
    );
  } else {
    dateHeader = (
      <div className="preview-header">
        <div className="spacer-container">
          <div className="spacer-line" />
        </div>
        <div className="date">Date</div>
      </div>
    );
  }

  return (
    <div className={`preview-container ${props.side}`}>
      <div className={`preview preview-${props.side}`}>
        {dateHeader}
        <div className="preview-main">
          <div className="preview-title">Title of Update</div>
          <div className="preview-body">Some body text here</div>
          <div className="preview-footer">Comments Likes</div>
        </div>
      </div>
    </div>
  );
}

module.exports = Preview;
