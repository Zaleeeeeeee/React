import { ChangeButton, ViewButton, DeleteButton } from "./Components/Buttons";

function Course(props) {
  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>Price: 1000</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
        molestiae?
      </p>

      <ChangeButton />
      <DeleteButton />
    </div>
  );
}

export default Course;
