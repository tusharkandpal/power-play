import axios from "axios";
import { addToast } from "../../features/features";

export const signUpService = async (
  { email, password },
  rejectWithValue,
  dispatch
) => {
  try {
    const { data } = await axios.post("/api/auth/signup", {
      email,
      password,
    });
    console.log(data)
    dispatch(
      addToast({
        type: "SUCCESS",
        desc: `Successfully Signed-In. Welcome <strong>New User</strong> 👋 !`,
      })
    );
    return data;
  } catch (error) {
    dispatch(
      addToast({
        type: "WARNING",
        desc: "Error Signing Up. Please try again !",
      })
    );
    return rejectWithValue(`Error Signing Up.`);
  }
};
