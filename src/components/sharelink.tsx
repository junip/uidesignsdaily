import React from 'react';

const shareLink = () => (
  <div className="share-link">
    <div className="container">
      <div className="data-div">
        <div className="modal-header">Share something awesome</div>
        <div className="modal-description">
          New and awesome design content will be added to our website,
          and may even end up in our weekly newsletter.
        </div>
        <div className="input-box">
          <input className="link-input" placeholder=" Eg. https://" />
          <button className="share-button" type="button">
            Share
          </button>
        </div>
        <div className="content">
          <div className="content-header">
            Sharing guidelines
          </div>
          <div className="content-description">
            We accept quality design/visual projects, animations, 3D, UI/UX
            prototypes, or any other visual design project. Read more
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default shareLink;
