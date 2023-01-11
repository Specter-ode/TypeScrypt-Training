import React, { useState } from "react";
import { ITodo } from "../../types/todo";

interface IProps {
  onAddTodo: (todo: ITodo) => void;
}

const AddTodo: React.FC<IProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState<ITodo>({ title: "", salary: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setTodo((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  }
  const clearFields = (): void => {
    setTodo({ title: "", salary: "" });
  };

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("todo", todo);
    if (!todo.title || !todo.salary) return;
    onAddTodo(todo as ITodo);
    clearFields();
  };

  const { title, salary } = todo;
  return (
    <form onSubmit={submitHandler}>
      <label>
        Add Title
        <input
          type="text"
          name="title"
          value={title}
          id="add-title"
          onChange={handleChange}
        />
      </label>

      <label>
        Add Salary
        <input
          type="number"
          name="salary"
          value={salary}
          id="add-salary"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add TODO</button>
    </form>
  );
};

export default AddTodo;
