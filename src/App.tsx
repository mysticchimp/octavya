import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import Compare from "./pages/Compare";
import SignIn from "./pages/SignIn";
import Negotiation from "./pages/Negotiation";
import CareerPath from "./pages/CareerPath"; // Added import for CareerPath
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-white">
        <Navigation />
        <main className="flex-1 p-6 transition-all duration-300" style={{ marginLeft: "64px" }}>
          <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Index />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/negotiation" element={<Negotiation />} />
        <Route path="/career-path" element={<CareerPath />} /> {/* Added route for CareerPath */}
      </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;