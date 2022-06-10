import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  toggleSidebar,
  setSearchTerm,
  logOut,
  addToast,
  resetLikes,
  resetPlaylists,
  resetHistory,
  resetWatchLater,
  loadLikedVideos,
  loadPlaylists,
  loadWatchLater,
  loadHistory,
} from "../../../features/features";

export const Nav = () => {
  const { isLoggedIn } = useSelector((store) => store.authTimeline);
  const { searchTerm } = useSelector((store) => store.filterTimeline);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadLikedVideos());
      dispatch(loadPlaylists());
      dispatch(loadWatchLater());
      dispatch(loadHistory());
    }
  }, [isLoggedIn]);

  return (
    <nav className="flex justify-between items-center flex-wrap px-5 pb-3 bg-neutral-800">
      <GiHamburgerMenu
        className="md:hidden text-2xl cursor-pointer mr-5"
        onClick={() => dispatch(toggleSidebar())}
      />
      <Link to="/">
        <img src="/power-play-logo.png" alt="logo" width="80px" />
      </Link>
      <input
        type="text"
        className="rounded-lg outline-none order-1 md:order-none m-auto w-72 bg-neutral-800 outline-violet-700 px-3 py-1"
        placeholder="Search..."
        onChange={(e) => {
          dispatch(setSearchTerm(e.target.value));
          navigate("/trending");
        }}
        value={searchTerm}
      />
      {isLoggedIn ? (
        <Link to="/trending">
          <button
            type="button"
            className="rounded-full bg-neutral-800 my-3 mx-1 outline outline-violet-700 px-4 py-1"
            onClick={() => {
              dispatch(logOut());
              dispatch(
                addToast({
                  type: "SUCCESS",
                  desc: `Successfully Logged Out !`,
                })
              );
              dispatch(resetLikes());
              dispatch(resetPlaylists());
              dispatch(resetWatchLater());
              dispatch(resetHistory());
            }}
          >
            Logout
          </button>
        </Link>
      ) : (
        <Link to="/auth">
          <button
            type="button"
            className="rounded-full bg-neutral-800 my-3 mx-1 outline outline-violet-700 px-4 py-1"
          >
            Login
          </button>
        </Link>
      )}
    </nav>
  );
};
