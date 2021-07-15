import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getContact,
  updateContact,
} from "../../actions/contactAction";

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",

    phone: "",
    gender: "Male",
    status: "Married",
    job: false,
  });

  const { name, email, phone, gender, status, job } = state;
  function handleChange(evt) {
    // console.log(`type of input is ${evt.target.type}`);
    // console.log(evt.target.checked);
    // console.log(evt.target.value);

    const value =
      evt.target.type === "checkbox"
        ? evt.target.checked
        : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  useEffect(() => {
    loadPost();
  }, []);
  useEffect(() => {
    if (contact != null) {
      // setName(contact.name);
      // setPhone(contact.phone);
      // setEmail(contact.email);
      setState(contact);
    }
    // dispatch(getContact(id));
  }, [contact]);
  console.log(state);

  const loadPost = () => {
    dispatch(getContact(id));
  };

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
      gender: gender,
      status: status,
      job: job,
    });

    dispatch(updateContact(update_contact));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>Gender</div>
          <div className="form-group">
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={state.gender === "Female"}
                onChange={handleChange}
              />
            </label>
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={state.gender === "Male"}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="heading">Status</div>
              <select
                name="status"
                onChange={handleChange}
                value={state.status}
              >
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
              </select>
            </label>
          </div>
          <label>
            <div className="heading">Job</div>
            <input
              type="checkbox"
              name="job"
              checked={state.job}
              onChange={handleChange}
            />
          </label>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
