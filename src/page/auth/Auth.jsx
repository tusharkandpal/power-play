import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logIn, signUp, toggleAuth } from "../../features/features";

export const Auth = () => {
  const { sidebarToggle, authToggle } = useSelector((store) => store.displayTimeline);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;

    authToggle === "LOGIN"
      ? dispatch(
          logIn({
            email: email.value,
            password: password.value,
          })
        ).then(() => {
          navigate(location?.state?.from ?? "/");
        })
      : dispatch(
          signUp({
            email: email.value,
            password: password.value,
          })
        ).then(() => {
          navigate(location?.state?.from ?? "/");
        });
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();

    dispatch(
      logIn({
        email: "tusharkandpal@gmail.com",
        password: "tushar@123",
      })
    ).then(() => {
      navigate(location?.state?.from ?? "/");
    });
  };

  return (
    <div
      className={`flex ${
        sidebarToggle ? "hidden" : ""
      } sm:flex grow p-3 bg-neutral-700 items-center justify-center`}
    >
      <form
        className="bg-neutral-800 p-4 rounded-md flex flex-col w-full max-w-md"
        onSubmit={submitHandler}
      >
        <div className="flex justify-around m-2">
          <span
            className={`p-1 mx-3 mb-3 border-b-2 ${
              authToggle === "LOGIN" ? "" : "border-neutral-800 hover:"
            }border-violet-700 cursor-pointer`}
            onClick={() => dispatch(toggleAuth("LOGIN"))}
          >
            Log In
          </span>
          <span
            className={`p-1 mx-3 mb-3 border-b-2 ${
              authToggle === "SIGNUP" ? "" : "border-neutral-800 hover:"
            }border-violet-700 cursor-pointer`}
            onClick={() => dispatch(toggleAuth("SIGNUP"))}
          >
            Sign Up
          </span>
        </div>
        <div className="mb-3 flex flex-col">
          <label className="mx-2 mb-1 block">Email: </label>
          <input
            type="email"
            placeholder="user@gmail.com"
            className="outline text-neutral-800 focus:outline-violet-700 m-2 py-1 px-2 rounded-md"
            required
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label className="mx-2 mb-1 block">Password: </label>
          <input
            type="password"
            placeholder="***********"
            className="outline text-neutral-800 focus:outline-violet-700 m-2 py-1 px-2 rounded-md"
            required
          />
        </div>
        {authToggle === "LOGIN" ? (
          <>
            <button
              className="m-1 bg-violet-700 px-3 py-1 rounded-md"
              type="submit"
            >
              Login
            </button>
            <button
              className="mx-2 my-3 outline outline-violet-700 px-3 py-1 rounded-md"
              onClick={guestLoginHandler}
            >
              Guest Login
            </button>
          </>
        ) : (
          <button
            className="m-1 bg-violet-700 px-3 py-1 rounded-md"
            type="submit"
          >
            Signup
          </button>
        )}
      </form>
    </div>
  );
};
