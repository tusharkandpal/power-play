import axios from "axios";

export const addToLikedVideos = async (video, rejectWithValue) => {
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
    return rejectWithValue(`Error adding to Liked Videos.`);
  }
};
