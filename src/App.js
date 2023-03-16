import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* pages */
import HomePage from "./pages/HomePage"
import DogPage from "./pages/DogPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/honden" element={<DogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
