import { fetchData } from "@/lib/action";
import PostItem from "./PostItem";
import "./postComponents.scss";
const PostComponents = async () => {
  const dataList = await fetchData();

  return <div className="posts">
    {dataList.map((item,idx) => 
      <PostItem key={idx} item={item}/>
    )}
  </div>;
};

export default PostComponents;
