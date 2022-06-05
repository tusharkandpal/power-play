import { useSelector, useDispatch } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  setDropdown,
  setSortByFilter,
  resetFilters,
  addToast,
} from "../../features/features";

export const SortBy = () => {
  const { dropdownDisplay } = useSelector((store) => store.displayTimeline);
  const { sortBy } = useSelector((store) => store.filterTimeline);
  const dispatch = useDispatch();

  return (
    <div
      className="relative"
      onMouseEnter={() => dispatch(setDropdown("block"))}
      onMouseLeave={() => dispatch(setDropdown("hidden"))}
    >
      <button className="bg-neutral-800 py-1 px-3 rounded-lg inline-flex items-center border-2 border-violet-700">
        <span className="mr-1">Sort By</span>
        <IoMdArrowDropdown />
      </button>
      <ul className={`${dropdownDisplay} absolute top-9 bg-neutral-800 z-10`}>
        <li
          className={`${
            sortBy === "MOST_VIEWED" ? "bg-violet-700" : "hover:bg-violet-700"
          } p-2 text-center cursor-pointer text-sm`}
          onClick={() => {
            dispatch(setSortByFilter("MOST_VIEWED"));
            dispatch(
              addToast({
                type: "INFO",
                desc: `Videos arranged in <strong>MOST VIEWED</strong> order.`,
              })
            );
          }}
        >
          Most Viewed
        </li>
        <li
          className={`${
            sortBy === "MOST_RECENT" ? "bg-violet-700" : "hover:bg-violet-700"
          } p-2 text-center cursor-pointer text-sm`}
          onClick={() => {
            dispatch(setSortByFilter("MOST_RECENT"));
            dispatch(
              addToast({
                type: "INFO",
                desc: `Videos arranged in <strong>MOST RECENT</strong> order.`,
              })
            );
          }}
        >
          Most Recent
        </li>
        <li
          className="hover:bg-violet-700
            p-2 text-center cursor-pointer text-sm"
          onClick={() => {
            dispatch(resetFilters());
            dispatch(
              addToast({
                type: "INFO",
                desc: `Cleared all the applied filters.`,
              })
            );
          }}
        >
          Clear All
        </li>
      </ul>
    </div>
  );
};
