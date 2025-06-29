import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FooterProvider } from "./context/FooterContext";
import Layout from "./layouts/Layout";

// Import all three page components
import AddPropertyPage from "./pages/AddPropertyPage";
import AddPropertyInfoPage from "./pages/AddPropertyInfoPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <FooterProvider>
      <Router>
        <div className="min-h-screen w-full bg-gray-50">
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Step 1: The first page */}
              <Route index element={<AddPropertyPage />} />

              {/* Step 2: The detailed info page */}
              <Route
                path="/add-property-info"
                element={<AddPropertyInfoPage />}
              />

              {/* Step 3: The billing page */}
              <Route path="/pricing" element={<PricingPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </FooterProvider>
  );
}

export default App;
