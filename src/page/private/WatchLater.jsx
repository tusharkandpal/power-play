import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadWatchLater } from "../../features/features";
import { VideoCard } from "../../component/component";

export const WatchLater = () => {
  const { sidebarToggle } = useSelector((store) => store.displayTimeline);
  const { watchLater, status } = useSelector(
    (store) => store.watchLaterTimeline
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (watchLater.length === 0 && status === "idle") {
      dispatch(loadWatchLater());
    }
  }, [dispatch, status]);

  return (
    <div
      className={`${
        sidebarToggle && "hidden"
      } md:block grow p-3 overflow-y-auto bg-neutral-700`}
    >
      <>
        <p className="text-3xl pb-4">Watch Later</p>
        <div className="flex flex-col flex-wrap items-start justify-center md:justify-start gap-2">
          {status === "loading" ? (
            <span>Loading...Please wait</span>
          ) : watchLater.length === 0 ? (
            <p className="text-lg pl-2">No videos in Watch Later ! 🥺</p>
          ) : (
            <div className="flex items-start flex-wrap gap-3 mb-3">
              {watchLater.map((watchLaterVideo) => (
                <VideoCard key={watchLaterVideo._id} {...watchLaterVideo} />
              ))}
            </div>
          )}
        </div>
      </>
    </div>
  );
};
