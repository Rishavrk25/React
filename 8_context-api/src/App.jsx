import MyProvider from "./components/MyContext";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <MyProvider>
      <h1>Context API Demo</h1>
      <UserProfile />
    </MyProvider>
  );
}

export default App;
