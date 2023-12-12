import { Fragment } from "react";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export const ChangeButton = () => {
  return (
    <>
      <button
        style={{
          backgroundColor: "skyblue",
          color: "white",
          borderRadius: "0.5rem",
          padding: "0.2rem",
        }}
      >
        {" "}
        <MdEdit />
        Edit
      </button>
    </>
  );
};

export const ViewButton = () => {
  return (
    <>
      <button
        style={{
          backgroundColor: "skyblue",
          color: "white",
          borderRadius: "0.5rem",
          padding: "0.2rem",
        }}
      >
        {" "}
        <FaEye />
        View
      </button>
    </>
  );
};

export const DeleteButton = () => {
  return (
    <>
      <button
        style={{
          backgroundColor: "#EF4040",
          color: "white",
          borderRadius: "0.5rem",
          padding: "0.2rem",
        }}
      >
        {" "}
        <MdDeleteOutline />
        Delete
      </button>
    </>
  );
};
