import React from 'react'
import VideoItem from '../../VideoItem/VideoItem'
import styles from './videolist.module.css'

function VideoList(props) {
    return (
       <ul className={styles.videos}>
           {props.videos.map(video => <VideoItem video={video} key={video.id}/>)}
       </ul>
    )
}

export default VideoList
