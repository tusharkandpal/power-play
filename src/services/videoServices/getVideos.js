import axios from "axios";

export const getVideos = async () => {
  try {
    const { data } = await axios.get("/api/videos");
    return data;
  } catch (error) {
    return error;
  }
};
