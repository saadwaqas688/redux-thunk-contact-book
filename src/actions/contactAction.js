import {
  CREATE_CONTACT,
  GET_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../constant/types";
import axios from "axios";

export const addContact = (contact) => async (dispatch) => {
  const result = await axios.post(
    "http://localhost:8000/api/users",
    contact
  );
  console.log(result);
  dispatch({
    type: CREATE_CONTACT,
    payload: result.data,
  });
};

// get all contact

export const getContacts = () => async (dispatch) => {
  const result = await axios.get("http://localhost:8000/api/users");
  dispatch({
    type: GET_CONTACTS,
    payload: result.data,
  });
};

// get a contact
// export const getContact = (id) => ({
//   type: GET_CONTACT,
//   payload: id,
// });

export const getContact = (_id) => async (dispatch) => {
  const result = await axios.get(
    `http://localhost:8000/api/users?id=${_id}`
  );
  console.log(result);
  dispatch({
    type: GET_CONTACT,
    payload: result.data,
  });
};

// update a contact
// export const updateContact = (contact) => ({
//   type: UPDATE_CONTACT,
//   payload: contact,
// });

// update a contact
export const updateContact = (contact) => async (dispatch) => {
  const result = await axios.put(
    `http://localhost:8000/api/users/${contact._id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: result.data,
  });
};
// delete a contact
// export const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

// delete a post
export const deleteContact = (_id) => async (dispatch) => {
  const result = await axios.delete(
    `http://localhost:8000/api/users/${_id}`
  );
  console.log(result);
  dispatch({
    type: DELETE_CONTACT,
    payload: _id,
  });
};
