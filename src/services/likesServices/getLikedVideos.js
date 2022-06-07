import axios from "axios";

export const getLikedVideos = async (_, rejectWithValue) => {
  try {
    const { data } = await axios.get("/api/user/likes", {
      headers: { authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    return rejectWithValue(`Error getting Liked Videos.`);
  }
};
