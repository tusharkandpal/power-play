import axios from "axios";
import { addToast } from "../../features/features";

export const removeAllHistory = async (_, rejectWithValue, dispatch) => {
  try {
    const { data } = await axios.delete("/api/user/history/all", {
      headers: { authorization: localStorage.getItem("token") },
    });
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: "Removed All History.",
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error removing all History.",
      })
    );
    return rejectWithValue("Error removing all History.");
  }
};
