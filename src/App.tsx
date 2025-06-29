import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FooterProvider } from "./context/FooterContext";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import PropertySetupPage from "./pages/PropertySetupPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

function App() {
  return (
    <FooterProvider>
      <Router>
        <div className="min-h-screen w-full bg-gray-50">
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Home Page */}
              <Route index element={<HomePage />} />
              {/* Other Pages */}
              <Route path="property-setup" element={<PropertySetupPage />} />
              <Route
                path="property-details"
                element={<PropertyDetailsPage />}
              />
              <Route path="pricing" element={<PricingPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </FooterProvider>
  );
}

export default App;
