import Floors from "./comps/Floors";
import Login from "./comps/Login";
import MainItems from "./comps/MainItems";
import Rooms from "./comps/Rooms";
import Signup from "./comps/Signup";
import Sites from "./comps/Sites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/floors" element={<Floors />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/items" element={<MainItems />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
