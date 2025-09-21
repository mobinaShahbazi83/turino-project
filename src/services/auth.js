import api from "src/configs/api";

const SendOtp = async (mobile) => {
  try {
    const response = await api.post("/auth/send-otp", { mobile: mobile });
    return { response };
  } catch (error) {
    return { error };
  }
};

export {SendOtp}
