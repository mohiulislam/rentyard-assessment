import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import AddPropertyPage from "./pages/AddPropertyPage";
import CondoInfoPage from "./pages/CondoInfoPage";


function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-50">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<AddPropertyPage />} />
            <Route path="/condo-info" element={<CondoInfoPage/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
