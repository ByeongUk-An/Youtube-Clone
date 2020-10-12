import React,{useEffect, useState} from "react";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import VideoList from "./components/VideoList/VideoList";
import styles from './app.module.css'

function App() {
  const [videos,setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyC38sGVW8Api3CZ98y3MgimprlOaQT7gH0`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC38sGVW8Api3CZ98y3MgimprlOaQT7gH0", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[])
  return <div className={styles.app}>
  <SearchHeader onSearch={search}/>
  <VideoList videos={videos} />
  </div>
}

export default App;
