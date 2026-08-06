import React from "react";

const YoutubeEmbed = ({embedId}) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube-nocookie.com/embed/${embedId}`}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="OpenBLD.net video presentation"
        />
    </div>
);

export default YoutubeEmbed;
