import { createContext } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [user, setUser] = useState("Rishav");

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
