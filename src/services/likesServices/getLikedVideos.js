import axios from "axios";
import { addToast } from "../../features/features";

export const getLikedVideos = async (_, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.get("/api/user/likes", {
      headers: { authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error getting Liked Videos.",
      })
    );
    return rejectWithValue("Error getting Liked Videos.");
  }
};
