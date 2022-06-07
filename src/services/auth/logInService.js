import axios from "axios";
import { addToast } from "../../features/features";

export const logInService = async (
  { email, password },
  rejectWithValue,
  dispatch
) => {
  try {
    const { data } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: `Successfully Logged-In. Welcome <strong>${data.foundUser.firstName}</strong> 👋 !`,
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error Logging In. Please try again !",
      })
    );
    return rejectWithValue("Error Logging In.");
  }
};
