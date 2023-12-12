import { Fragment } from "react";
import EditButton from "./Components/EditButton";
import DeleteButton from "./Components/DeleteButton";

function User() {
  return (
    <>
      <div
        style={{
          border: "3px solid black",
          padding: "1rem",
          borderRadius: "1rem",
          backgroundColor: "#F3F8FF",
        }}
      >
        <img src="https://picsum.photos/200/200" alt="" />
        <p style={{ textAlign: "center" }}>Ram</p>
        <EditButton />
        <DeleteButton />
      </div>
    </>
  );
}

export default User;
