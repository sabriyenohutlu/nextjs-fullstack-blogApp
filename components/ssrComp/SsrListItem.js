"use client"
import "./ssrComp.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const SsrListItem = ({ item }) => {
  const { theme } = useContext(ThemeContext);

  const { title, desc } = item;

  return (
    <div
      className={`ssrListItem ${theme}`}

    >
      <span>client side rendering</span>
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  );
};

export default SsrListItem;
