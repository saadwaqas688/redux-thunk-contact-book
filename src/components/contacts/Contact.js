import React from "react";

import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const { name, phone, email, _id, gender, status, job } = contact;
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{status}</td>
      <td>{job ? "Employed" : "Unemployed"}</td>
      <td>
        <Link to={`/contacts/edit/${_id}`}>
          <span>Edit</span>
        </Link>
        <span onClick={() => dispatch(deleteContact(_id))}>
          Delete
        </span>
      </td>
    </tr>
  );
};

export default Contact;
