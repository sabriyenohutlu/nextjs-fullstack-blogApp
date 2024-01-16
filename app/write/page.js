"use client";
import { useState } from "react";
import styles from "./write.module.css";
// import Image from "next/image";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";

const WritePage = () => {

  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState("");

  // const { data, status } = useSession;

  // const router = useRouter();

  // if(status === "loading") {
  //  return <div className={styles.loading}>Loading...</div>
  // }

  // if(status === "authenticated") {
  //   router.push("/")
  // }

  return (
    <div className={styles.container}>
      <h1>Write</h1>
      {/* <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <Image src={""} alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src={""} alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src={""} alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src={""} alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story."
        />
      </div> */}
    </div>
  );
};

export default WritePage;
