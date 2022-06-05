import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToast } from "../features/features";

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn, status } = useSelector((store) => store.authTimeline);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn && status === "idle")
      dispatch(
        addToast({
          type: "INFO",
          desc: `Please Log-In !`,
        })
      );
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <Navigate to="/auth" replace state={{ from: pathname }} />
      )}
    </>
  );
};
