import axios from "axios";
import { addToast } from "../../features/features";

export const getWatchLater = async (_, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.get("/api/user/watchlater", {
      headers: { authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error getting Watch Later.",
      })
    );
    return rejectWithValue("Error getting Watch Later.");
  }
};
