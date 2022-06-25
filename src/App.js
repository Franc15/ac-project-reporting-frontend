import Floors from "./comps/Floors";
import Login from "./comps/Login";
import MainItems from "./comps/MainItems";
import Rooms from "./comps/Rooms";
import Signup from "./comps/Signup";
import Sites from "./comps/Sites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/protected_routes";
import Navbar from "./comps/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/sites" element={<Sites />} />
          <Route path="/floors" element={<Floors />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/items" element={<MainItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
