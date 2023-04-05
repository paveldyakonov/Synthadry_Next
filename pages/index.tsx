import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import Head from "next/head";
import Layout, { siteTitle } from "@components/Layoutttt/Layout";
import utilStyles from "../styles/utils.module.css";
import styles from "@styles/index.module.scss";
import Link from "next/link";
import React from "react";
import CarouselComponent from "@components/Carousel";

type Props = {
  allPostsData: any;
};

export const Home: React.FC<Props> = ({ allPostsData }): any => {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={styles["about-section"]}>
          <div className={styles["about-section__title"]}>О ПРОДУКТЕ</div>
          <div className={styles["about-section__description"]}>
            МЫ - МОЛОДАЯ КОМАНДА РАЗРАБОТЧИКОВ, КОТОРОЙ ПОРУЧЕНО СОЗДАТЬ СОБСТВЕННУЮ КОМПЬЮТЕРНУЮ
            ИГРУ
          </div>

          <div className={styles["about-section__description"]}>
            "ЛОУ ПОЛИ ИГРА В СЕТТИНГЕ СИНТ ВЕЙВ/КИБЕРПАНК. ЖАНР РОГАЛИК. ЧУВАК БЕГАЕТ СРЕДИ
            НЕБОСКРЕБОВ. БОЕВКА В СТИЛЕ J RPG"
          </div>

          <div className={styles["about-section__description"]}>
            НА ДАННОМ САЙТЕ ВЫ СМОЖЕТЕ НАБЛЮДАТЬ ЗА НАШИМИ УСПЕХАМИ В РАЗДЕЛЕ НОВОСТИ или следить за
            процессом разработки в разделе Команда
          </div>
        </section>
        <div className={styles.main_character}>
          <CarouselComponent />
        </div>
      </>
    </Layout>
  );
};

export default Home;
