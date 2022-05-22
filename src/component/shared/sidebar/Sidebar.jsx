import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiFillFire,
  AiFillLike,
  AiOutlineHistory,
} from "react-icons/ai";
import { RiMovieFill } from "react-icons/ri";
import { MdPlaylistPlay } from "react-icons/md";

export const Sidebar = () => {
  return (
    <aside className="hidden flex flex-col items-center basis-full md:basis-44 shrink-0 text-center bg-neutral-800">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${
            isActive
              ? "border-violet-700"
              : "hover:border-b-violet-700 border-neutral-800"
          }`
        }
      >
        <AiFillHome className="align-middle inline-block" /> Home
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${
            isActive
              ? "border-violet-700"
              : "hover:border-b-violet-700 border-neutral-800"
          }`
        }
      >
        <AiFillFire className="align-middle inline-block" /> Trending
      </NavLink>
      <NavLink
        to="/likes"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${
            isActive
              ? "border-violet-700"
              : "hover:border-b-violet-700 border-neutral-800"
          }`
        }
      >
        <AiFillLike className="align-middle inline-block" /> Liked
      </NavLink>
      <NavLink
        to="/watch-later"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${
            isActive
              ? "border-violet-700"
              : "hover:border-b-violet-700 border-neutral-800"
          }`
        }
      >
        <RiMovieFill className="align-middle inline-block" /> Watch Later
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${
            isActive
              ? "border-violet-700"
              : "hover:border-b-violet-700 border-neutral-800"
          }`
        }
      >
        <MdPlaylistPlay className="align-middle inline-block" /> Playlists
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${
            isActive
              ? "border-violet-700"
              : "hover:border-b-violet-700 border-neutral-800"
          }`
        }
      >
        <AiOutlineHistory className="align-middle inline-block" /> History
      </NavLink>
    </aside>
  );
};
