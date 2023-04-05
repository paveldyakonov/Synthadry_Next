import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./Carousel.module.scss";
import Image from "next/image";

export type CarouselProps = {
    carouselItems?: React.ReactNode[];
};

const CarouselComponent: React.FC<CarouselProps> = ({ carouselItems }): any => {
    return (
        <Carousel
            showThumbs={false}
            className={styles["carousel-item"]}
            width={"90vw"}
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={false}
        >
            <div className={styles.img}>
                <Image
                    src={"/images/main_char_face.jpg"}
                    alt={"main_head"}
                    fill
                />
            </div>
            <div className={styles.img}>
                <Image
                    src={"/images/main_char_full.jpg"}
                    alt={"main_body"}
                    fill
                />
            </div>
            {/* {carouselItems.map((item: React.ReactNode) => <div key={item?.toString()}>{item}</div>)} */}
        </Carousel>
    );
};

export default React.memo(CarouselComponent);
