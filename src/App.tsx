import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import AddPropertyInfo from "./pages/AddPropertyPage";
import AddPropertyInfoPage from "./pages/AddPropertyInfoPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-50">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<AddPropertyInfo />} />
            <Route path="/condo-info" element={<AddPropertyInfoPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
