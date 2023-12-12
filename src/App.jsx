import Course from "./Course";
import User from "./User";
import Image from "./assets/images/w.jpg";
import EditButton from "./Components/EditButton";
import DeleteButton from "./Components/DeleteButton";

let usersStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function App() {
  return (
    <div>
      {/* Course Section */}
      <h1 className="text-red-500 text-3xl mb-8 ">Courses</h1>
      <Course title="react" />;
      <Course title="express" />;
      <Course title="node" />
      {/* User Section */}
      <h2 style={{ textAlign: "center" }}>User</h2>
      <div style={usersStyle}>
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>

        <tr>
          <td>ram</td>
          <td>ram@ram.com</td>
          <td>
            <EditButton />
            <DeleteButton />
          </td>
        </tr>
        <tr>
          <td>ram</td>
          <td>ram@ram.com</td>
          <td></td>
        </tr>
        <tr>
          <td>ram</td>
          <td>ram@ram.com</td>
          <td></td>
        </tr>
      </table>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
      <img src={Image} />
      <img src="/vite.svg" alt="" />
    </div>
  );
}

export default App;
