import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
//Contexts
import AuthContextProvider from "./Context/AuthContextProvider";
//Components
import Chats from "./components/Chats";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
