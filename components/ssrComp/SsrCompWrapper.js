import SsrList from "./SsrList";
import "./ssrComp.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
const SsrCompWrapper = () => {

  return (
    <div
      className="ssrCompWrapper"
    >
      <h1>server side rendering</h1>
      <SsrList />
    </div>
  );
};

export default SsrCompWrapper;
