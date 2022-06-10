import { useEffect } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { loadHistory, deleteAllHistory } from "../../features/features";
import { VideoCard } from "../../component/component";

export const History = () => {
  const { sidebarToggle } = useSelector((store) => store.displayTimeline);
  const { history, status } = useSelector((store) => store.historyTimeline);
  const dispatch = useDispatch();

  useEffect(() => {
    if (history.length === 0 && status === "idle") {
      dispatch(loadHistory());
    }
  }, [dispatch, status]);

  return (
    <div
      className={`${
        sidebarToggle && "hidden"
      } md:block grow p-3 overflow-y-auto bg-neutral-700`}
    >
      <div className="flex justify-between items-center">
        <p className="text-3xl mb-4 pl-2">History</p>
        <AiOutlineClear
          size={40}
          className="text-red-700 bg-neutral-800 p-2 rounded-md cursor-pointer"
          title="Clear History"
          onClick={() => history.length !== 0 && dispatch(deleteAllHistory())}
        />
      </div>
      <div className="flex flex-wrap items-start justify-center md:justify-start gap-3">
        {status === "loading" ? (
          <span>Loading...Please wait</span>
        ) : history.length === 0 ? (
          <p className="text-lg pl-2">No history to show ! 🥺</p>
        ) : (
          history.map((video) => <VideoCard key={video._id} {...video} />)
        )}
      </div>
    </div>
  );
};
