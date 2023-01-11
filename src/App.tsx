import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import s from "./App.module.css";
import { IItem } from "./types/todo";

const data = [
  {
    id: "1",
    title: "Junior",
    salary: 500,
  },
  {
    id: "2",
    title: "Middle",
    salary: 1500,
  },
  {
    id: "3",
    title: "Senior",
    salary: 3500,
  },
];

interface ITodo {
  title: string
  salary: number | ""
}


const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>(data);
  console.log('APP todos: ', todos);
  
  const addTodoHandler = (todo: ITodo) => {
    setTodos((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random().toString(),
          title: todo.title,
          salary: todo.salary,
        },
      ];
    });
  };
  const onRemoveTodo = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter(item => item.id !==id)
    });
  };
  return (
    <div className={s.App}>
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo} />
      <AddTodo onAddTodo={addTodoHandler}/>
    </div>
  );
};

export default App;
