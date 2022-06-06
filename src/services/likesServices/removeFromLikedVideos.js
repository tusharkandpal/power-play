import axios from "axios";

export const removeFromLikedVideos = async (videoId, rejectWithValue) => {
  try {
    const { data } = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    return rejectWithValue(`Error removing from Liked Videos.`);
  }
};
