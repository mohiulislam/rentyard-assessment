import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Page_1 from "./pages/Page_1";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-50">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Page_1 />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
