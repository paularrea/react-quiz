import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |
      <button
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

const ExercisesList = () => {
  const [allExercises, setAllExercises] = useState();

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:5000/exercises")
        .then((res) => {
          setAllExercises(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/"+id)
      .then((res) => console.log(res.data));
    setAllExercises(allExercises.filter((exercise) => exercise._id !== id));
  };

  const exerciseList = allExercises && allExercises.map((currentExercise) => {
      return (
        <Exercise
          key={currentExercise._id}
          exercise={currentExercise}
          deleteExercise={deleteExercise}
        ></Exercise>
      );
    });


  return (
    <div>
      <h3>Exercises</h3>
      <table className="table">
        <thead className="thread-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList}</tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
