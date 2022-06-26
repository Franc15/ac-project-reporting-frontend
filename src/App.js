import Floors from "./comps/Floors";
import Login from "./comps/Login";
import MainItems from "./comps/MainItems";
import Rooms from "./comps/Rooms";
import Signup from "./comps/Signup";
import Sites from "./comps/Sites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/protected_routes";
import Navbar from "./comps/Navbar";
import auth from "./auth";

export default function App() {
  return (
    <BrowserRouter>
      {auth.loggedIn() ? <Navbar /> : null}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/sites" element={<Sites />} />
          <Route path="/floors/:siteid" element={<Floors />} />
          <Route path="/rooms/:siteid/:floorid" element={<Rooms />} />
          <Route path="/items" element={<MainItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
