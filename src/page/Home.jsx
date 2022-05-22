import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="grow bg-[url('/public/banner.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-4xl my-4 text-center">Unlimited entertaining music videos.</h1>
      <Link to="/trending">
        <button
          type="button"
          className="bg-violet-700 my-2 px-4 py-3 rounded-full w-64 sm:w-80"
        >
          Play Here ►
        </button>
      </Link>
    </main>
  );
};
