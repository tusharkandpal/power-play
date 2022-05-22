import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VideoCard } from "../component/component";
import { loadVideos, loadCategories } from "../features/videoSlice";

export const Trending = () => {
  const { videos, categories, status, error } = useSelector(
    (store) => store.timeline
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadVideos());
      dispatch(loadCategories());
    }
  }, [dispatch, status]);

  return (
    <div className="grow h-[39.35rem] overflow-y-auto p-3 bg-neutral-700">
      {status === "fulfilled" && (
        <>
          <div className="flex items-start flex-wrap gap-4 p-2 pb-6">
            <span className="rounded-md py-2 px-3 outline outline-violet-700 cursor-pointer">
              All
            </span>
            {categories.map((category) => (
              <span
                className="rounded-md py-2 px-3 bg-neutral-600 cursor-pointer"
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
      {status === "loading" && <span>Loading...Please wait</span>}
    </div>
  );
};
