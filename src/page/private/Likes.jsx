import { useEffect } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { loadLikedVideos } from "../../features/features";
import { VideoCard } from "../../component/component";

export const Likes = () => {
  const { sidebarToggle } = useSelector((store) => store.displayTimeline);
  const { likes, status } = useSelector((store) => store.likeTimeline);
  const dispatch = useDispatch();

  useEffect(() => {
    if (likes.length === 0 && status === "idle") {
      dispatch(loadLikedVideos());
    }
  }, [dispatch, status]);

  return (
    <div
      className={`${
        sidebarToggle && "hidden"
      } md:block grow p-3 overflow-y-auto bg-neutral-700`}
    >
      <>
        <p className="text-3xl mb-4 pl-2">Liked Videos</p>
        <div className="flex flex-wrap items-start justify-center md:justify-start gap-3">
          {status === "loading" ? (
            <span>Loading...Please wait</span>
          ) : likes.length === 0 ? (
            <p className="text-lg pl-2">
              No liked videos 🥺
              <FaHeartBroken className="inline-block" />
            </p>
          ) : (
            likes.map((video) => <VideoCard key={video._id} {...video} />)
          )}
        </div>
      </>
    </div>
  );
};
