import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                <Image src="" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.userTextContainer}>
                    <span>Jhon Doe</span>
                    <span>01.01.2024</span>
                </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src="" alt="" fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}></div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
