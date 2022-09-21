import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/not-found/NotFound";
import { ProtectedRoute } from "./components/Protectet-eout/Protectet-eout";
import Main from "./components/Main/Main";
import Bar from "./components/Bar/Bar";
import GreeterUser from "./pages/GreeterUser/GreeterUser";

export const AppRoutes = ({user}) => {
  return (
    <Routes>
      <Route path="/" element={<GreeterUser/>} />
      
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/content" element={<div><Main/><Bar/></div>} />

      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};