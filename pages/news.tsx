import Layout from "@components/Layoutttt/Layout";
import VideoPlayer from "@components/VideoPlayer";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { getAllNews, KindNews, News } from "@lib/news";

import styles from "@styles/news.module.scss";
import ImageNews from "@components/ImageNews/ImageNews";
import { MotionContainer } from "@components/MotionContainer";

const NewsPage: React.FC = (): any => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    setAllNews(() => getAllNews());
  }, []);

  return (
    <Layout>
      <>
        <Head>
          <title>Synthadry News</title>
        </Head>
        <div className={styles.news}>
          <h1 className={styles.news__title}>Новости</h1>
          {allNews.map((news: News) =>
            news.kind === KindNews.video ? (
              <MotionContainer key={news.url}>
                <VideoPlayer title={news.title} url={news.url} />
              </MotionContainer>
            ) : (
              <MotionContainer key={news.paths[0]}>
                <ImageNews title={news.title} paths={news.paths} />
              </MotionContainer>
            ),
          )}
        </div>
      </>
    </Layout>
  );
};

export default NewsPage;
