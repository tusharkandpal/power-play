import axios from "axios";
import { addToast } from "../../features/features";

export const removeVideoFromPlaylist = async (
  { playlistId, videoId },
  rejectWithValue,
  dispatch
) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: "Removed video from Playlist.",
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error removing video from Playlist.",
      })
    );
    return rejectWithValue("Error removing video from Playlist.");
  }
};
