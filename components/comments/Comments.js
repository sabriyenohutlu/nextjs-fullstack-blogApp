import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/lib/action";

const Comments = async() => {

  const dataList = await fetchData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {/* {status === "authenticated" ? ( */}
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
           
          />
          <button className={styles.button} >
            Send
          </button>
        </div>
      {/* ) : ( */}
        <Link href="/login">Login to write a comment</Link>
      {/* )} */}
      <div className={styles.comments}>
              <div className={styles.comment} >
                <div className={styles.user}>
                  {/* {item?.user?.image && ( */}
                    <Image
                      src={dataList[2].image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                
                  <div className={styles.userInfo}>
                    <span className={styles.username}>Jhon Doe</span>
                    <span className={styles.date}>01.01.2023</span>
                  </div>
                </div>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  magnam voluptates consequuntur saepe, facere voluptate
                  corporis delectus vel similique ab vero. Expedita nesciunt
                  dolorem vero sit quos similique at quidem.
                </p>
              </div>
      </div>
    </div>
  );
};

export default Comments;
