"use client";
import { useContext } from "react";
import styles from "./themeToggle.module.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <FaMoon width={14} height={14}/>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#0f172a" }
        }
      ></div>
      <FaSun width={14} height={14}/>
    </div>
  );
};

export default ThemeToggle;
