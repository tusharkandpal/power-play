import axios from "axios";
import { addToast } from "../../features/features";

export const removeFromWatchLater = async (
  videoId,
  rejectWithValue,
  dispatch
) => {
  try {
    const { data } = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: "Removed from Watch Later.",
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error removing from Watch Later.",
      })
    );
    return rejectWithValue("Error removing from Watch Later.");
  }
};
