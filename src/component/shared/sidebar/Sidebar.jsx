import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../../features/features";
import {
  AiFillHome,
  AiFillFire,
  AiFillLike,
  AiOutlineHistory,
} from "react-icons/ai";
import { RiMovieFill } from "react-icons/ri";
import { MdPlaylistPlay } from "react-icons/md";

export const Sidebar = () => {
  const { sidebarToggle } = useSelector((store) => store.displayTimeline);
  const dispatch = useDispatch();

  const isActiveNavLink = (isActive) =>
    isActive
      ? "border-violet-700"
      : "hover:border-b-violet-700 border-neutral-800";

  return (
    <aside
      className={`${
        sidebarToggle ? "flex" : "hidden"
      } md:flex flex-col items-center basis-full md:basis-44 shrink-0 text-center bg-neutral-800`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <AiFillHome className="align-middle inline-block" /> Home
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md
            ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <AiFillFire className="align-middle inline-block" /> Trending
      </NavLink>
      <NavLink
        to="/likes"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <AiFillLike className="align-middle inline-block" /> Liked
      </NavLink>
      <NavLink
        to="/watch-later"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <RiMovieFill className="align-middle inline-block" /> Watch Later
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <MdPlaylistPlay className="align-middle inline-block" /> Playlists
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <AiOutlineHistory className="align-middle inline-block" /> History
      </NavLink>
    </aside>
  );
};
