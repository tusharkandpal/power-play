import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useSelector((store) => store.authTimeline);
  const { pathname } = useLocation();

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
