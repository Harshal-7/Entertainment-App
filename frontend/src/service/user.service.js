import axios from "axios";
import { userActionUrl } from "../utils/constant.utils";
import { setCookie } from "../utils/cookieAction.utils";
import { errorToast, successToast } from "../utils/customToast";

export const registerUser = async (userData, navigate) => {
  try {
    const { data } = await axios.post(
      `${userActionUrl}/register`,
      {
        email: userData.email,
        password: userData.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: document.cookie,
        },
      }
    );
    successToast(data.message);
    setTimeout(() => {
      navigate("/login");
      document.location.reload();
    }, 2000);
  } catch (error) {
    errorToast(error.response.data.message);
  }
};

export const loginUser = async (userData, navigate) => {
  try {
    const { data } = await axios.post(
      `${userActionUrl}/login`,
      {
        email: userData.email,
        password: userData.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setCookie("UserAuth", data.loginToken, 7);
    successToast(data.message);
    setTimeout(() => {
      navigate("/");
      document.location.reload();
    }, 2000);
  } catch (error) {
    errorToast(error.response.data.message);
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await axios.get(`${userActionUrl}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: document.cookie,
      },
    });
    setCookie("UserAuth", document.cookie.split("=")[1], 0);
    successToast(data.message);
  } catch (error) {
    errorToast(error.response.data.message);
  }
};
