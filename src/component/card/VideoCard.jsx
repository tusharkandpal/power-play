import { Link, useLocation } from "react-router-dom";
import { getViews } from "../../utils/utils";
import { MdLabel } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiVideoAddFill } from "react-icons/ri";
import { CgPlayListRemove } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import {
  postLikedVideos,
  deleteLikedVideos,
  deleteVideoFromPlaylist,
} from "../../features/features";

export const VideoCard = (video) => {
  const {
    _id,
    title,
    releaseYear,
    singers,
    thumbnail,
    categoryName,
    duration,
    language,
    views,
    playlistId
  } = video;
  const { likes } = useSelector((store) => store.likeTimeline);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isLiked = likes.some((like) => like._id === _id);

  return (
    <article className="md:w-[18rem] lg:w-[20.5rem] hover:shadow-md hover:shadow-violet-700/50">
      <Link to={`/video/${_id}`} className="relative">
        <img
          src={thumbnail}
          loading="lazy"
          className="rounded-t-md"
          alt={title}
        />
        <small className="absolute top-3 p-2 bg-violet-800">
          {getViews(views)}
        </small>
        <small className="absolute right-0 bottom-3 p-2 bg-violet-800">
          {duration}
        </small>
      </Link>
      <div className="flex justify-between bg-neutral-800 p-2 rounded-b-md">
        <div>
          <h3>{title}</h3>
          <h4 className="text-slate-300 flex items-center py-1">
            <GiMicrophone className="mr-1" /> {singers.join(", ")}
          </h4>
          <small className="text-slate-300 flex items-center pt-1">
            <MdLabel className="mr-1" /> {categoryName} • {language} •{" "}
            {releaseYear}
          </small>
        </div>
        <div className="self-end flex gap-2">
          {isLiked ? (
            <AiFillHeart
              size={25}
              className="cursor-pointer mb-2"
              title="Remove from Liked"
              onClick={() => dispatch(deleteLikedVideos(_id))}
            />
          ) : (
            <AiOutlineHeart
              size={25}
              className="cursor-pointer mb-2"
              title="Add to Liked"
              onClick={() => dispatch(postLikedVideos(video))}
            />
          )}
          {pathname === "/playlist" ? (
            <CgPlayListRemove
              size={25}
              className="cursor-pointer mb-2"
              title="Remove from Playlist"
              onClick={() =>
                dispatch(
                  deleteVideoFromPlaylist({
                    playlistId,
                    videoId: _id,
                  })
                )
              }
            />
          ) : (
            <RiVideoAddFill
              size={25}
              className="cursor-pointer mb-2"
              title="Add to Watch Later"
            />
          )}
        </div>
      </div>
    </article>
  );
};
