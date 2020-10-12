import React from 'react'
import VideoItem from '../../VideoItem/VideoItem'

function VideoList(props) {
    return (
       <ul>
           {props.videos.map(video => <VideoItem video={video} key={video.id}/>)}
       </ul>
    )
}

export default VideoList
