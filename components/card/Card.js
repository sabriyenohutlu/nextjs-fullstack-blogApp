import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={""} alt="" fill  className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          repellat soluta cupiditate incidunt veritatis! Adipisci laborum
          eveniet, eaque consequatur, amet quasi possimus praesentium sed
          commodi, provident minima maiores iste sequi. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Expedita deserunt accusantium
          facilis quasi sit voluptas ullam quaerat quos. Nobis voluptate omnis
          rem quaerat. Quisquam culpa repellat ut veniam corrupti eos.
        </p>
        <Link className={styles.link} href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
