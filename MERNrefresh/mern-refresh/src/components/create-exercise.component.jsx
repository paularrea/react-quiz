import React, { useState, useEffect } from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateExercises = () => {
  const [maxLength, setMaxLength] = useState(0);
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: "",
    date: new Date(),
    users: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        setExercise({
          users: res.data.map((user) => user.username),
          username: res.data[0].username,
        });
      }
    });
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log("Exercise Added!");
    window.location = "/";
  };

  let onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setExercise({
      ...exercise,
      [name]: value,
    });
    setMaxLength({
      description: value.length,
    });
  };

  let onChangeDate = (date) => {
    setExercise({
      ...exercise,
      date: date,
    });
  };

  return (
    <div>
      <form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="username"
          name="username"
          select
          value={exercise.username}
          variant="outlined"
          helperText="Please select a user"
          label="Username"
          onChange={(e) => onChange(e)}
        >
          {exercise.users.map((user) => {
            return (
              <MenuItem key={user} value={user}>
                {user}
              </MenuItem>
            );
          })}
        </TextField>

        <TextField
          inputProps={{ maxLength: 170 }}
          type="text"
          name="description"
          id="description"
          variant="outlined"
          label="Description"
          value={exercise.description}
          multiline
          onChange={(e) => onChange(e)}
          helperText={
            maxLength.description === 170 && (
              <p style={{ color: "#931F1D" }}>
                You have reached the maximum number of characters.
              </p>
            )
          }
        ></TextField>

        <TextField
          type="number"
          name="duration"
          id="duration"
          label="Duration (min)"
          variant="outlined"
          value={exercise.duration}
          onChange={(e) => onChange(e)}
        ></TextField>

        <div className="form-group">
          <label>Date</label>
          <div>
            <DatePicker
              selected={exercise.date}
              onChange={(e) => onChangeDate(e)}
            />
          </div>
        </div>

        <div>
          <Button className="mt-4" type="submit">
            Add Exercise
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateExercises;
