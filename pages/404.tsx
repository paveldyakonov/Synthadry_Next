import Layout from "@components/Layoutttt/Layout";
import Head from "next/head";

import styles from "@styles/errorPage.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const ErrorPage: React.FC = (): any => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds !== 0) {
      setTimeout(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      router.push("/");
    }
  }, [seconds]);

  return (
    <Layout>
      <>
        <Head>
          <title>404 Error</title>
        </Head>
        <div className={styles.page}>
          <h1 className={styles.page__title}>Извините, такой страницы нет :(</h1>
          <div className={styles.page__to_main}>
            Вернуться <Link href={"/"}>на Главную</Link> через {seconds}...
          </div>
        </div>
      </>
    </Layout>
  );
};

export default ErrorPage;
