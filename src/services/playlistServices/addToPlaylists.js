import axios from "axios";
import { addToast } from "../../features/features";

export const addToPlaylists = async (playlist, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      {
        playlist,
      },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: `Created <strong>${playlist.title}</strong> Playlist.`,
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error adding Playlist.",
      })
    );
    return rejectWithValue("Error adding Playlist.");
  }
};
