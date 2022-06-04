import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VideoCard } from "../../component/component";
import { loadVideos, loadCategories } from "../../features/features";

export const Trending = () => {
  const { videos, categories, status, error } = useSelector(
    (store) => store.videoTimeline
  );
  const { sidebarToggle } = useSelector((store) => store.displayTimeline);
  const dispatch = useDispatch();

  useEffect(() => {
    if (videos.length === 0 && status === "idle") {
      dispatch(loadVideos());
      dispatch(loadCategories());
    }
  }, [dispatch, status]);

  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : ""
      } md:block h-[39.35rem] overflow-y-auto p-3 bg-neutral-700`}
    >
      {status === "loading" ? (
        <span>Loading...Please wait</span>
      ) : (
        <>
          <div className="flex items-start overflow-x-auto gap-4 p-2 pb-6 mb-2">
            <span className="rounded-md py-2 px-3 outline outline-violet-700 cursor-pointer">
              All
            </span>
            {categories.map((category) => (
              <span
                className="min-w-fit rounded-md py-2 px-3 bg-neutral-600 cursor-pointer"
                key={category._id}
              >
                {category.categoryName}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-start justify-center md:justify-start gap-3">
            {videos.map((video) => (
              <VideoCard key={video._id} {...video} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
