import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path = "/register" element = {<Register />} />
    </Routes>
  );
};

export default App;
