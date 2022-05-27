import axios from "axios";

export const signUpService = async (email, password) => {
  try {
    const { data } = await axios.post("/api/auth/signup", {
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
};
