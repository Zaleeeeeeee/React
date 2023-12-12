import { Fragment } from "react";

import { ChangeButton, ViewButton, DeleteButton } from "./Components/Buttons";

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
        <ChangeButton />
        <ViewButton />
        <DeleteButton />
      </div>
    </>
  );
}

export default User;
