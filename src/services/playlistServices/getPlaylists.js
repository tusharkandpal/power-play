import axios from "axios";
import { addToast } from "../../features/features";

export const getPlaylists = async (_, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.get("/api/user/playlists", {
      headers: { authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error getting Playlists.",
      })
    );
    return rejectWithValue("Error getting Playlists.");
  }
};
