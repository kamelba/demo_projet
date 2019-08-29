import axios from "axios";

export const getUser = () => dispatch => {
  axios.get("/users/all").then(res =>
    dispatch({
      type: "GET_USER",
      payload: res.data
    })
  );
};

export const addUser= user => dispatch => {

  axios.post("/users/register", user).then(res => dispatch(getUser()));


};


export const loginUser= user => dispatch => {

  axios.post("/users/login", user).then(res => dispatch(getUser()));
};


export const deleteUser = id => dispatch => {
  axios.delete(`/users/${id}`).then(res => dispatch(getUser()));
};

export const updateUser = (id, user) => dispatch => {
  axios
    .put(`/users/${id}`, user)
    .then(res => dispatch(getUser()));
};



