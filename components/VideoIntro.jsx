import React from "react";
import PropTypes from "prop-types";

const VideoIntro = ({ videoSrc }) => (
  <div className="video-responsive">
    <iframe
      src={`${videoSrc}`}
      loading="lazy" 
      style={{border: 'none', width: '100%'}}
      allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;" 
      allowFullScreen={true}
      title="Intro PKB Kulit"
    />
  </div>
);

VideoIntro.propTypes = {
    videoSrc: PropTypes.string.isRequired
};

export default VideoIntro;