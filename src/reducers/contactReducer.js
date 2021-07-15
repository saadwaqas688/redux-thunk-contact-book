import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
} from "../constant/types";

const intialState = {
  contacts: [],
  contact: null,
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      // let arr = state.contacts.filter(
      //   (contact) => contact.id === action.payload
      // );
      // arr = arr.values();
      // for (let val of arr) {
      //   arr = val;
      // }
      return {
        ...state,
        // contact: arr,
        contact: action.payload,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id
            ? action.payload
            : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };

    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    default:
      return state;
  }
};
