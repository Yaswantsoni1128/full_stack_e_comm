export const base_url = process.env.REACT_APP_API_URL || "http://localhost:5000/api/";

const getTokenFromLocalStorage = () => {
  const user = localStorage.getItem("customer");
  return user ? JSON.parse(user).token : null;
};

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage() || ""}`,
    Accept: "application/json",
  },
};
