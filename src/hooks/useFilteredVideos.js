import { useSelector } from "react-redux";
import {
  filterByCategory,
  filterBySearch,
  sortByFilter,
  compose,
} from "../utils/utils";

export const useFilteredVideos = () => {
  const { videos } = useSelector((store) => store.videoTimeline);
  const filters = useSelector((store) => store.filterTimeline);

  return compose(
    videos,
    filterBySearch,
    filterByCategory,
    sortByFilter
  )(filters);
};
