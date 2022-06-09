import axios from "axios";
import { addToast } from "../../features/features";

export const addVideoToPlaylist = async (
  { playlistId, video },
  rejectWithValue,
  dispatch
) => {
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video,
      },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: `Added <strong>${video.title}</strong> to Playlist.`,
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error adding video to Playlist.",
      })
    );
    return rejectWithValue("Error adding video to Playlist.");
  }
};
