import axios from "axios";

export const addToHistory = async (video, rejectWithValue) => {
  try {
    const { data } = await axios.post(
      "/api/user/history",
      {
        video,
      },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    return data;
  } catch (error) {
    return rejectWithValue("Error adding to History.");
  }
};
