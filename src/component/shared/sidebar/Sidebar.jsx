import { Link } from "react-router-dom";
import { AiFillHome, AiFillFire, AiFillLike, AiOutlineHistory } from "react-icons/ai";
import { RiMovieFill } from "react-icons/ri";
import { MdPlaylistPlay } from "react-icons/md";

export const Sidebar = () => {
  return (
    <ul className="flex flex-col items-center basis-full md:basis-44 text-center bg-neutral-800">
      <Link to="/">
        <li className="w-30 p-2 m-2 border border-neutral-800 hover:border-violet-700 rounded-md">
          <AiFillHome className="align-middle inline-block" /> Home
        </li>
      </Link>
      <Link to="/">
        <li className="w-30 p-2 m-2 border border-neutral-800 hover:border-violet-700 rounded-md">
          <AiFillFire className="align-middle inline-block" /> Trending
        </li>
      </Link>
      <Link to="/">
        <li className="w-30 p-2 m-2 border border-neutral-800 hover:border-violet-700 rounded-md">
          <AiFillLike className="align-middle inline-block" /> Liked
        </li>
      </Link>
      <Link to="/">
        <li className="w-30 p-2 m-2 border border-neutral-800 hover:border-violet-700 rounded-md">
         <RiMovieFill className="align-middle inline-block" /> Watch Later
        </li>
      </Link>
      <Link to="/">
        <li className="w-30 p-2 m-2 border border-neutral-800 hover:border-violet-700 rounded-md">
          <MdPlaylistPlay className="align-middle inline-block" /> Playlists
        </li>
      </Link>
      <Link to="/">
        <li className="w-30 p-2 m-2 border border-neutral-800 hover:border-violet-700 rounded-md">
          < AiOutlineHistory className="align-middle inline-block" /> History
        </li>
      </Link>
    </ul>
  );
};
