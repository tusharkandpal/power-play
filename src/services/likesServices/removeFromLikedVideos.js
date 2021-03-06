import axios from "axios";
import { addToast } from "../../features/features";

export const removeFromLikedVideos = async (videoId, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: "Removed from Liked Videos.",
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error removing from Liked Videos.",
      })
    );
    return rejectWithValue("Error removing from Liked Videos.");
  }
};
