import axios from "axios";
import { addToast } from "../../features/features";

export const removeFromHistory = async (videoId, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: "Removed from History.",
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error removing from History.",
      })
    );
    return rejectWithValue("Error removing from History.");
  }
};
