import Layout from "@components/Layoutttt/Layout";
import Head from "next/head";
import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import { getAllUsers } from "@lib/users";
import { User } from "@lib/users";
import UserCard from "@components/UserCard";
import styles from "@styles/team.module.scss";
import { toast } from "react-toastify";
import { showToast } from "@utils/showToast";
import { MotionContainer } from "@components/MotionContainer";

type Props = {
  allUsers: User[];
};

const Team: React.FC<Props> = ({ allUsers }): any => {
  useEffect(() => {
    showToast("У нас новая команда!");
  }, []);

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
              <MotionContainer key={user.id}>
                <UserCard
                  id={user.id}
                  name={user.name}
                  profession={user.profession}
                  image={user.image}
                  mark={user.mark}
                  tasks={[]}
                  new={user.new}
                />
              </MotionContainer>
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
