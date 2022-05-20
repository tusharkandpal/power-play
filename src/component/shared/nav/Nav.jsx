import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center flex-wrap px-5 pb-3 bg-neutral-800">
      <GiHamburgerMenu className="text-2xl cursor-pointer mr-5 "/>
      <Link to="/" className="brand-logo">
        <img src="/power-play-logo.png" alt="logo" width="80px" />
      </Link>
      <input
        type="text"
        className="rounded-lg outline-none order-1 md:order-none m-auto w-72 bg-neutral-800 outline-violet-700 px-3 py-1"
        placeholder="Search..."
      />
      <Link to="/" className="nav-btn">
        <button
          type="button"
          className="rounded-full bg-neutral-800 my-3 mx-1 outline outline-violet-700 px-4 py-1"
        >
          Login
        </button>
      </Link>
    </nav>
  );
};
