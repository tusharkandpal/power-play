import axios from "axios";

export const signUpService = async ({ email, password }, rejectWithValue) => {
  try {
    const { data } = await axios.post("/api/auth/signup", {
      email,
      password,
    });
    return data;
  } catch (error) {
    return rejectWithValue(`Error Signing Up. Please try again !`);;
  }
};
