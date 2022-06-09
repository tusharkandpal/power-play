import axios from "axios";
import { addToast } from "../../features/features";

export const addToLikedVideos = async (video, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/likes",
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
        desc: "Added to Liked Videos.",
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
          desc: "Error adding to Liked Videos.",
        })
      );
    return rejectWithValue("Error adding to Liked Videos.");
  }
};
