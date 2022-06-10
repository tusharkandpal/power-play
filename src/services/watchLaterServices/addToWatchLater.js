import axios from "axios";
import { addToast } from "../../features/features";

export const addToWatchLater = async (video, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/watchlater",
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
        desc: `Added <strong>${video.title}</strong> to Watch Later.`,
      })
    );
    return data;
  } catch (error) {
    if (error.response.status === 500) {
      dispatch(
        addToast({
          type: "INFO",
          desc: "Please Log-In !",
        })
      );
    } else
      dispatch(
        addToast({
          type: "WARNING",
          desc: "Error adding to Watch Later.",
        })
      );
    return rejectWithValue("Error adding to Watch Later.");
  }
};
