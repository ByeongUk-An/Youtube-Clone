import React from 'react'
import styles from './videoitem.module.css'

function VideoItem({video:{snippet}}) {
    return (
        <li className={styles.container}>
            <div className={styles.video}>
            <img src={snippet.thumbnails.medium.url} alt="video thumbnails" className={styles.thumbnails}/>
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
            </div>
        </li>
    )
}

export default VideoItem
