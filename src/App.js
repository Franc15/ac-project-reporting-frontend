import Floors from "./comps/Floors";
import Login from "./comps/Login";
import MainItems from "./comps/MainItems";
import Rooms from "./comps/Rooms";
import Signup from "./comps/Signup";
import Sites from "./comps/Sites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/protected_routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <ProtectedRoute path="/sites" element={<Sites />} />
        <ProtectedRoute path="/floors" element={<Floors />} />
        <ProtectedRoute path="/rooms" element={<Rooms />} />
        <ProtectedRoute path="/items" element={<MainItems />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
