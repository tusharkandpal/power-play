import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { MustWatch } from "../../component/component";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiVideoAddFill } from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";
import { postLikedVideos, deleteLikedVideos, addToast } from "../../features/features";

export const Video = () => {
  const { sidebarToggle } = useSelector((store) => store.displayTimeline);
  const { videos } = useSelector((store) => store.videoTimeline);
  const { videoId } = useParams();
  const video = videos?.find((video) => video._id === videoId);
  const {
    title,
    duration,
    language,
    releaseYear,
    singers,
    categoryName,
    views,
  } = video;
  const { likes } = useSelector((store) => store.likeTimeline);
  const dispatch = useDispatch();

  const isLiked = likes.some((like) => like._id === videoId);

  return (
    <div
      className={`${
        sidebarToggle && "hidden"
      } md:grid grid-cols-[1fr_0.1fr] grow overflow-y-auto py-2 px-3 bg-neutral-700`}
    >
      <div className="flex flex-col w-full md:w-[90%]">
        <h1 className="text-3xl">{title}</h1>
        <h4 className="text-md">by {singers.join(", ")}</h4>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&start=0`}
          title="Power Play Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="my-2"
        ></iframe>
        <div className="flex justify-between px-2">
          <div>
            <p>
              {views} views | {duration}
            </p>
            <p>
              {categoryName} • {language} • {releaseYear}
            </p>
          </div>
          <div className="flex gap-5">
            {isLiked ? (
              <AiFillHeart
                size={30}
                className="cursor-pointer mb-2"
                onClick={() => {
                  dispatch(deleteLikedVideos(videoId));
                  dispatch(
                    addToast({
                      type: "SUCCESS",
                      desc: `Removed from liked videos.`,
                    })
                  );
                }}
              />
            ) : (
              <AiOutlineHeart
                size={30}
                className="cursor-pointer mb-2"
                onClick={() => {
                  dispatch(postLikedVideos(video));
                  dispatch(
                    addToast({
                      type: "SUCCESS",
                      desc: `Added to liked videos.`,
                    })
                  );
                }}
              />
            )}
            <RiVideoAddFill
              size={30}
              className="cursor-pointer"
              title="Add to watch later"
            />
            <MdVideoLibrary
              size={30}
              className="cursor-pointer"
              title="Create a playlist"
            />
          </div>
        </div>
      </div>
      <MustWatch videoId={videoId} />
    </div>
  );
};
