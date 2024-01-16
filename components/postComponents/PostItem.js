import Image from "next/image";
import "./postItem.scss";
const PostItem = ({ item }) => {
  const { id, title, speaker, image, publishedDate } = item;

  return (
    <div className="podcastCard">
      <Image
        width={100}
        className="podcastCard-img"
        height={400}
        alt={title}
        src={image}
        loading="lazy"
      />
      {/* <img src={image} className="podcastCard-img" alt={title}/> */}
      <div className="podcastCard-info">
        <div className="podcastCard-info__title">{title}</div>
        <div className="podcastCard-info__speaker">{speaker}</div>
        {/*<div className="podcastCard-info__summary">{summary}</div>*/}
        {/*<div className="podcastCard-info__mp3">{mp3}</div>*/}
        <div className="podcastCard-info__publishedDate">{publishedDate}</div>
      </div>
    </div>
  );
};

export default PostItem;
