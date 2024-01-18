import SsrListItem from "./SsrListItem";
import { fetchData } from "@/lib/action";
import "./ssrComp.css";
//server comp.
const SsrList = async () => {
  const dataList = await fetchData();

  return (
    <div className="ssrList">
      <h1>server side rendering</h1>
      {dataList.map((item, idx) => (
        <SsrListItem item={item} />
      ))}
    </div>
  );
};

export default SsrList;
