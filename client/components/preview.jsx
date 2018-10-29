const React = require('react');

function Preview(props) {
  return (
    <div className={`preview-container ${props.side}`}>
      <div className={`preview preview-${props.side}`}>
        <div className="preview-header">
          <div className="spacer-container">spacers</div>
          <div>Date</div>
        </div>
        <div className="preview-title">Title of Update</div>
        <div className="preview-body">Some body text here</div>
        <div className="preview-footer">Comments Likes</div>
      </div>
    </div>
  );
}

module.exports = Preview;
