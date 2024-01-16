import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";
import { fetchData } from "@/lib/action";

const CategoryList = async () => {

  const dataList = await fetchData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={dataList[1].image}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
              src={dataList[1].image}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
              src={dataList[1].image}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
