import Layout from "@components/Layoutttt";
import Head from "next/head";
import { User, getAllUsersIds, getUser } from "@lib/users";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import React from "react";

import styles from "@styles/personId.module.scss";
import Image from "next/image";
import TaskCard from "@components/TaskCard";

type Props = {
  userData: User;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllUsersIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const userData: User = getUser(params.personId);
  return {
    props: {
      userData,
    },
  };
};

export const Person: React.FC<Props> = ({ userData }): any => {
  return (
    <Layout>
      <>
        <Head>
          <title>{`Synthadry ${userData.name}`}</title>
        </Head>
        <div className={styles.card_page}>
          <div className={styles.card}>
            <div className={styles.card__img}>
              <Image
                src={userData.image}
                alt={userData.name}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className={styles.card__name}>{userData.name}</div>
            <div className={styles.card__profession}>{userData.profession}</div>
            <div className={styles.card__mark}>Количество баллов: {userData.mark}</div>
          </div>
          <div className={styles.tasks_block}>
            <h1 className={styles.task_title}>Задачи на неделю</h1>
            <div className={styles.task_list}>
              {userData.tasks.length > 0 &&
                userData.tasks.map((task) => (
                  <TaskCard key={`${userData.id}${task}`} task={task} />
                ))}
              {userData.tasks.length === 0 && (
                <h3 className={styles.null_tasks}>На этой неделе задач нет</h3>
              )}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default React.memo(Person);
