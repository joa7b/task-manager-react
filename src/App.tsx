import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/main/navbar";
import { Dashboard } from "./pages/Dashboard";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
