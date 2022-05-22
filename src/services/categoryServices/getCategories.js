import axios from "axios";

export const getCategories = async () => {
  try {
    const { data } = await axios.get("/api/categories");
    return data;
  } catch (error) {
    return error;
  }
};
