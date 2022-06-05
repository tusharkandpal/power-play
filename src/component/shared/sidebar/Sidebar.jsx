import { NavLink, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  const isActiveNavLink = (isActive) =>
    isActive
      ? "border-violet-700"
      : "hover:border-b-violet-700 border-neutral-800";

  const isNotVideoPage = pathname.includes("/video/") ? false : true

  return (
    <aside
      className={`${
        sidebarToggle ? "flex" : "hidden"
      } md:flex flex-col items-center basis-full md:max-w-fit text-center bg-neutral-800`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <AiFillHome className="inline-block" title="Home" />{isNotVideoPage && " Home"} 
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md
            ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <AiFillFire className="inline-block" title="Trending" />{isNotVideoPage && " Trending"}
      </NavLink>
      <NavLink
        to="/likes"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <AiFillLike className="inline-block" title="Liked" />{isNotVideoPage && " Liked"}
      </NavLink>
      <NavLink
        to="/watch-later"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <RiMovieFill className="inline-block" title="Watch Later" />{isNotVideoPage && " Watch Later"}
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <MdPlaylistPlay className="inline-block" title="Playlists" />{isNotVideoPage && " Playlists"}
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          `w-30 p-2 m-2 border rounded-md ${isActiveNavLink(isActive)}`
        }
        onClick={() => dispatch(toggleSidebar())}
      >
        <AiOutlineHistory className="inline-block" title="History" />{isNotVideoPage && " History"}
      </NavLink>
    </aside>
  );
};
