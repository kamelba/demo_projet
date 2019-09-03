import axios from "axios";

export const getAnnonce = () => dispatch => {
  axios.get("/annonce").then(res =>
    dispatch({
      type: "GET_ANNONCE",
      payload: res.data
    })
  );
};

export const addAnnonce = annonce => dispatch => {
  axios.post("/annonce", annonce).then(res => dispatch(getAnnonce()));
};

export const deleteAnnonce = id => dispatch => {
  axios.delete(`/annonce/${id}`).then(res => dispatch(getAnnonce()));
};

export const updateAnnonce = (id, contact) => dispatch => {
  axios
    .put(`/annonce/${id}`, contact)
    .then(res => dispatch(getAnnonce()));
};
