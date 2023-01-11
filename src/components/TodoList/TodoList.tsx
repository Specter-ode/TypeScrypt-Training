import React from "react";
import Todo from "../Todo/Todo";
import { ITodo } from "../../types/todo";

export interface IItem extends ITodo {
  id: string;
}

interface IProps {
  todos: IItem[];
  onRemoveTodo: (id: string) => void;
}
const TodoList: React.FC<IProps> = ({ todos, onRemoveTodo }) => {
  console.log("TODOLIST todos: ", todos);
  const elements = todos.map((item) => (
    <Todo key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
  ));
  return <ul>{elements}</ul>;
};

export default TodoList;
