import axios from "axios";

export const logInService = async (email, password) => {
  try {
    const { data } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
};
