import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/not-found";
import Content from "./pages/Content/Content";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />


      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};