import React, { useEffect, useState } from "react";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import VideoList from "./components/VideoList/VideoList";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/VideoDetail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedvideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube //
      .search(query)
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedvideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedvideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedvideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
