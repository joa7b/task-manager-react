import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/main/navbar";
import { Dashboard } from "./pages/Dashboard";
import { CreateTask } from "./pages/CreateTask";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </Router>
  );
};
