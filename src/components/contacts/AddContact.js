import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
// import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    // id: "",
    name: "",
    email: "",

    phone: "",
    gender: "Male",
    status: "Married",
    job: false,
  });

  const { name, email, phone, gender, status, job } = state;
  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox"
        ? evt.target.checked
        : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
      // id: shortid.generate(),
    });
  }

  const craeteContact = (e) => {
    e.preventDefault();
    const new_contact = state;

    dispatch(addContact(new_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
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
          <div>
            <button className="btn btn-primary" type="submit">
              Create Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
