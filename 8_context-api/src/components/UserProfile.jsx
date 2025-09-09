import { useContext } from "react";
import { MyContext } from "./MyContext";

const UserProfile = () => {
  const { user, setUser } = useContext(MyContext);
  return (
    <div>
      <h2>User: {user}</h2>
      <button onClick={() => setUser("Alex")}>Change User</button>
    </div>
  );
};

export default UserProfile;