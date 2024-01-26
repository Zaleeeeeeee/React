import { Fragment } from "react";

/* api request */

let todosString = ["html", "css", "js", "react", "express", "node"];

let todos = [
  { title: "html", status: false },
  { title: "react", status: true },
  { title: "js", status: true },
  { title: "css", status: false },
  { title: "express", status: true },
];

const Todos = () => {
  return (
    <>
      <h1>Todos ({todosString.length}) </h1>
      <ul>
        {todosString.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>

      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>status</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((el) => {
            /* let statusText = "pending";
            if (el.status) {
              statusText = "completed";
            }

            statusText = el.status ? "completed" : "pending";
 */
            return (
              <tr key={el.title}>
                <td>{el.title}</td>
                <td
                  /* style={{
                    background: el.status ? "green" : "red",
                    color: "white",
                  }} */
                  className={`capitalize ${el.status ? "bg-green" : "bg-red"}`}
                >
                  {el.status ? "completed" : "pending"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Todos;
