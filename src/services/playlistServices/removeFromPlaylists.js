import axios from "axios";
import { addToast } from "../../features/features";

export const removeFromPlaylists = async (
  playlistId,
  rejectWithValue,
  dispatch
) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: "Removed Playlist.",
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error removing Playlist.",
      })
    );
    return rejectWithValue("Error removing Playlist.");
  }
};
