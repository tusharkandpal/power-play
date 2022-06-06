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
    return data;
  } catch (error) {
    if (error.response.status === 500)
      dispatch(
        addToast({
          type: "INFO",
          desc: `Please Log-In !`,
        })
      );
    return rejectWithValue(`Error adding to Liked Videos.`);
  }
};
