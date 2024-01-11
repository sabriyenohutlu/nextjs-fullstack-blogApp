import Image from "next/image";
import styles from "./featured.module.css";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.bold}>Hey, lama dev here!</span>Discover my
        stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            voluptates accusamus saepe reprehenderit exercitationem aspernatur
            doloremque placeat quo animi esse. Ullam eveniet modi, error tempore
            quia odio minima harum! Qui.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
