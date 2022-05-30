import { useSelector } from "react-redux";
import { VideoCard } from "../card/VideoCard";

export const MustWatch = ({ videoId }) => {
  const { videos } = useSelector((store) => store.videoTimeline);

  return (
    <div className="min-w-fit overflow-y-auto no-scrollbar mt-4">
      <h2 className="text-4xl mb-2">Must Watch</h2>
      <div className="flex flex-col gap-3">{videos.map(
        (video) =>
          video._id !== videoId && <VideoCard key={video._id} {...video} />
      )}</div>
    </div>
  );
};
