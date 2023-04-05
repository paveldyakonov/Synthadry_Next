import React from "react";

import { BiTask } from "react-icons/bi";
import styles from "./TaskCard.module.scss";

type Props = {
  task: string;
};

const TaskCard: React.FC<Props> = ({ task }): any => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon_block}>
        <BiTask className={styles.icon_block__icon} />
      </div>
      <div className={styles.card__task}>{task}</div>
    </div>
  );
};

export default React.memo(TaskCard);
