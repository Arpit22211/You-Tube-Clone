import React from 'react';

const VideoDetail=({selectedVideo})=>{

if (!selectedVideo){
  return <div>Loading....</div>
}
const videoSrc=`https:/www.youtube.com/embed/${selectedVideo.id.videoId} `;

  return(
    <div>
     <div clssName="ui embed">
      <iframe title="video player" src={videoSrc} width="100%" height="550px"/>
    </div>
     <div clssName="ui segment">
     <h4 className="ui header">{selectedVideo.snippet.title}</h4>
     <p>{selectedVideo.snippet.description}</p>
     </div>
    </div>
  );
}
export default VideoDetail;
