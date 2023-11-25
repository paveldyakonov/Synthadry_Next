import React from "react";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ImageNews.module.scss";

type Props = {
  title: string;
  paths: string[];
};

const ImageNews: React.FC<Props> = ({ title, paths }): any => {
  return (
    <div className={styles.images_block}>
      <div className={styles.title}>{title}</div>
      <div className={styles.images}>
        <Carousel
          showThumbs={false}
          width={"75vw"}
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={false}
        >
          {paths.map((path: string) => {
            return (
              <div key={path} className={styles.img}>
                <Image fill src={path} alt={title} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default React.memo(ImageNews);
