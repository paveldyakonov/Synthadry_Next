import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "./Layout.module.scss";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const name = "[Your Name]";
export const siteTitle = "Synthadry Game";

type Props = {
  children: JSX.Element;
  home?: any;
};

export const Layout: React.FC<Props> = ({ children, home }): any => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/dragon-icon.ico" />
        <meta name="description" content="Synthadry" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.navbar__title}>SYNTHADRY</div>
          <Link
            className={
              router.pathname === "/"
                ? `${styles.navbar__nav} ${styles.active}`
                : styles.navbar__nav
            }
            href={"/"}
          >
            О продукте
          </Link>
          <Link
            className={
              router.pathname === "/team"
                ? `${styles.navbar__nav} ${styles.active}`
                : styles.navbar__nav
            }
            href={"/team"}
          >
            Команда
          </Link>
          <Link
            className={
              router.pathname === "/main-character"
                ? `${styles.navbar__nav} ${styles.active}`
                : styles.navbar__nav
            }
            href={"/main-character"}
          >
            Персонажи
          </Link>
          <Link
            className={
              router.pathname === "/news"
                ? `${styles.navbar__nav} ${styles.active}`
                : styles.navbar__nav
            }
            href={"/news"}
          >
            Новости
          </Link>
          <Link className={styles.navbar__nav} href={"https://www.youtube.com/@synthadry3022"}>
            YouTube
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footer__icons}>
          <Link href={"https://www.youtube.com/@synthadry3022"}>
            <Image src={"/images/youtube.svg"} alt={"youtube"} width={65} height={50} />
          </Link>
          <Image src={"/images/telegram.png"} alt={"youtube"} width={45} height={45} />
          <Image src={"/images/vk.webp"} alt={"youtube"} width={40} height={40} />
        </div>
        <div className={styles.copyright}>© Copyright Synthadry 2022 - 2022</div>
      </footer>
    </div>
  );
};

export default Layout;
