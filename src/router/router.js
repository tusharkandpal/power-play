import { Routes, Route } from "react-router-dom";
import {
  Home,
  Trending,
  Auth,
  Likes,
  WatchLater,
  Playlist,
  History,
} from "../page/page";
import { RequiresAuth } from "../component/RequiresAuth";

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/trending" element={<Trending />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route
        path="/likes"
        element={
          <RequiresAuth>
            <Likes />
          </RequiresAuth>
        }
      />
      <Route
        path="/watch-later"
        element={
          <RequiresAuth>
            <WatchLater />
          </RequiresAuth>
        }
      />
      <Route
        path="/playlist"
        element={
          <RequiresAuth>
            <Playlist />
          </RequiresAuth>
        }
      />
      <Route
        path="/history"
        element={
          <RequiresAuth>
            <History />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};
