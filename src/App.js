import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;