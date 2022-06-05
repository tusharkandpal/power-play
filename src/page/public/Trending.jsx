import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SortBy, VideoCard } from "../../component/component";
import { useFilteredVideos } from "../../hooks/useFilteredVideos";
import {
  loadVideos,
  loadCategories,
  setCategoryFilter,
  addToast,
} from "../../features/features";

export const Trending = () => {
  const { categories, status } = useSelector(
    (store) => store.videoTimeline
  );
  const { sidebarToggle } = useSelector((store) => store.displayTimeline);
  const { categoryName } = useSelector((store) => store.filterTimeline);
  const videos = useFilteredVideos();
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
        sidebarToggle && "hidden"
      } md:block grow p-3 overflow-y-auto bg-neutral-700`}
    >
      {status === "loading" ? (
        <span>Loading...Please wait</span>
      ) : (
        <>
          <div className="flex flex-wrap justify-between items-center pb-3">
            <div className="flex items-start overflow-x-auto gap-4 p-2 pb-4">
              <span
                className={`${
                  categoryName === "All" && "outline outline-violet-700"
                } rounded-md py-2 px-3 bg-neutral-600 cursor-pointer hover:bg-violet-700`}
                onClick={() => {
                  dispatch(setCategoryFilter("All"));
                  dispatch(
                    addToast({
                      type: "INFO",
                      desc: `Showing videos with <strong>All</strong> categories`,
                    })
                  );
                }}
              >
                All
              </span>
              {categories.map((category) => (
                <span
                  className={`${
                    categoryName === category.categoryName &&
                    "outline outline-violet-700"
                  } min-w-fit rounded-md py-2 px-3 bg-neutral-600 cursor-pointer hover:bg-violet-700`}
                  key={category._id}
                  onClick={() => {
                    dispatch(setCategoryFilter(category.categoryName));
                    dispatch(
                      addToast({
                        type: "INFO",
                        desc: `Showing videos with <strong>${category.categoryName}</strong> categories`,
                      })
                    );
                  }}
                >
                  {category.categoryName}
                </span>
              ))}
            </div>
            <SortBy />
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
