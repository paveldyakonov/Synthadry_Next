import React from "react";

import styles from "./VideoPlayer.module.scss";
import ReactPlayer from "react-player";

type Props = {
  title: string;
  url: string;
};

const VideoPlayer: React.FC<Props> = ({ title, url }): any => {
  return (
    <div className={styles.video_block}>
      <div className={styles.title}>{title}</div>
      <ReactPlayer
        width={"75vw"}
        height={"37vw"}
        url={url}
        muted
        controls
        style={{
          minWidth: "300px",
          minHeight: "150px",
        }}
      />
    </div>
  );
};

export default VideoPlayer;
