import axios from "axios";
import { addToast } from "../../features/features";

export const getHistory = async (_, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.get("/api/user/history", {
      headers: { authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error getting History.",
      })
    );
    return rejectWithValue("Error getting History.");
  }
};
