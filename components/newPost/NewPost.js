import Image from "next/image";
import { fetchData } from "@/lib/action";
import Comments from "../comments/Comments";
import styles from "./newPost.module.css";
const NewPost = async () => {
  const dataList = await fetchData();

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={dataList[0].image} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={dataList[0].image} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <div className={styles.comment}>
              <Comments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
