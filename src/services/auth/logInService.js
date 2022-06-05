import axios from "axios";

export const logInService = async ({ email, password }, rejectWithValue) => {
  try {
    const { data } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    return rejectWithValue(`Error Logging In. Please try again !`);
  }
};
