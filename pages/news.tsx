import Layout from "@components/Layoutttt/Layout";
import VideoPlayer from "@components/VideoPlayer";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { getAllVideos, Video } from "@lib/videos";

import styles from "@styles/news.module.scss";

const NewsPage: React.FC = (): any => {
  const [allVideos, setAllVideos] = useState([]);
  useEffect(() => {
    setAllVideos(() => getAllVideos());
  }, []);

  return (
    <Layout>
      <>
        <Head>
          <title>Synthadry News</title>
        </Head>
        <div className={styles.news}>
          <h1 className={styles.news__title}>Новости</h1>
          {allVideos.map((video: Video) => (
            <VideoPlayer key={video.url} title={video.title} url={video.url} />
          ))}
        </div>
      </>
    </Layout>
  );
};

export default NewsPage;
