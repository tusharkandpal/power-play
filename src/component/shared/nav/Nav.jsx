import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { toggleSidebar, logOut } from "../../../features/features";

export const Nav = () => {
  const { isLoggedIn } = useSelector((store) => store.authTimeline);
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center flex-wrap px-5 pb-3 bg-neutral-800">
      <GiHamburgerMenu
        className="md:hidden text-2xl cursor-pointer mr-5"
        onClick={() => dispatch(toggleSidebar())}
      />
      <Link to="/" className="brand-logo">
        <img src="/power-play-logo.png" alt="logo" width="80px" />
      </Link>
      <input
        type="text"
        className="rounded-lg outline-none order-1 md:order-none m-auto w-72 bg-neutral-800 outline-violet-700 px-3 py-1"
        placeholder="Search..."
      />
      {isLoggedIn ? (
        <Link to="/" className="nav-btn">
          <button
            type="button"
            className="rounded-full bg-neutral-800 my-3 mx-1 outline outline-violet-700 px-4 py-1"
            onClick={() => dispatch(logOut())}
          >
            Logout
          </button>
        </Link>
      ) : (
        <Link to="/auth" className="nav-btn">
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
