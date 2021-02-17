import axios from "axios";

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    console.log(res);

    if (res.data) return res.data;
  } catch (error) {
    return [];
  }
};

export const getUserDetails = async userId => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (res.data) return res.data;

    console.log(res);
  } catch (error) {
    return;
  }
};
