import React from "react";
import VideoItem from "../../VideoItem/VideoItem";
import styles from "./videolist.module.css";

function VideoList({ videos, onVideoClick, display }) {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          video={video}
          key={video.id}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
}

export default VideoList;
