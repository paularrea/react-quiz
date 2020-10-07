import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateUser = () => {
  const [user, setUser] = useState({
    username: "",
  });

  useEffect(() => {}, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log("User created!");
    setUser("");
    window.location = "/";
  };

  let onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Create a User</h2>
      <form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="username"
          name="username"
          value={user.username}
          variant="outlined"
          label="Username"
          onChange={(e) => onChange(e)}
        ></TextField>
        <div>
          <Button className="mt-4" type="submit">
            Create User
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
