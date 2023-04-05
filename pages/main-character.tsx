import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "@styles/main-character.module.scss";
import Layout from "@components/Layoutttt/Layout";

export const MainCharacterPage: React.FC = (): any => {
  return (
    <Layout>
      <>
        <Head>
          <title>Synthadry Main-Hero</title>
        </Head>
        <div className={styles.page}>
          <div className={styles.first_row}>
            <div className={styles.img}>
              <Image src={"/images/main_char_face.jpg"} alt={"hero-head"} fill />
            </div>
            <div>ЗНАКОМЬТЕСЬ, ЭТО НАШ ГЛАВНЫЙ ПЕРСОНАЖ</div>
          </div>
          <div className={styles.second_row}>
            <div className={styles.img}>
              <Image src={"/images/main_char_full.jpg"} alt={"hero-body"} fill />
            </div>
            <div>
              ВЫРАЖАЕМ БОЛЬШУЮ БЛАГОДАРНОСТЬ <span className={styles.author}>GreyNotSoFair</span>,
              КОТОРЫЙ ПОМОГ НАМ СДЕЛАТЬ ДАННУЮ МОДЕЛЬ
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default MainCharacterPage;
