import { Fragment } from "react";

/* api reuest */

let todos = ["html", "css", "js", "react", "express", "node"];

const Todos = () => {
  return (
    <>
      <h1>Todos ({todos.length}) </h1>
      <ul>
        {todos.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </>
  );
};

export default Todos;
