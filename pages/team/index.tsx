import Layout from "@components/Layoutttt/Layout";
import Head from "next/head";
import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { getAllUsers } from "@lib/users";
import { User } from "@lib/users";
import UserCard from "@components/UserCard";
import styles from "@styles/team.module.scss";

type Props = {
  allUsers: User[];
};

const Team: React.FC<Props> = ({ allUsers }): any => {
  return (
    <Layout>
      <>
        <Head>
          <title>{"Synthadry Team"}</title>
        </Head>
        <div className={styles.users}>
          {allUsers
            .sort((a, b) => parseInt(b.mark) - parseInt(a.mark))
            .map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                profession={user.profession}
                image={user.image}
                mark={user.mark}
                tasks={[]}
              />
            ))}
        </div>
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allUsers: User[] = getAllUsers();
  return {
    props: {
      allUsers,
    },
  };
};

export default Team;
