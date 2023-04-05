import React from "react";

import { User } from "lib/users";
import Link from "next/link";

import styles from "./UserCard.module.scss";
import Image from "next/image";

const UserCard: React.FC<User> = ({ id, name, profession, image, mark, tasks }): any => {
  return (
    <Link className={styles.card_link} href={`/team/${id}`}>
      <div className={styles.card}>
        <div className={styles.card__img}>
          <Image
            src={image}
            alt={name}
            fill
            style={{
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className={styles.content}>
          <div>{name}</div>
          <div className={styles.content__profession}>{profession}</div>
          <div className={styles.content__mark}>Рейтинг: {mark}</div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(UserCard);
