import React, { useState, useEffect } from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const EditExercise = (props) => {
  const [maxLength, setMaxLength] = useState(0);
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: "",
    date: new Date(),
    users: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/" + props.match.params.id)
      .then((res) => {
        setExercise({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),
        });
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.length > 0) {
        setExercise({
          users: res.data.map((user) => user.username),
          username: res.data[0].username,
        });
      }
    });
  }, []);

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

  let handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        "http://localhost:5000/exercises/update/" + props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log("Exercise updated!");
    window.location = "/";
  };

  return (
    <div>
      <h2>Edit Exercise</h2>
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
          {exercise.users && exercise.users.map((user) => {
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
          label={exercise.description}
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
          type="text"
          name="duration"
          id="duration"
          label={exercise.duration}
          variant="outlined"
          value={exercise.duration}
          onChange={(e) => onChange(e)}
        ></TextField>

        <div className="form-group">
          <label>Date</label>
          <div>
            <DatePicker
              selected={exercise.date}
              value={exercise.date}
              onChange={(e) => onChangeDate(e)}
            />
          </div>
        </div>

        <div>
          <Button className="mt-4" type="submit">
            Edit Exercise
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
