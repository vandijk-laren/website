import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* pages */
import HomePage from "./pages/HomePage"
import DogPage from "./pages/DogPage"

import WorkInProgress from './components/workInProgress/WorkInProgress';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/honden" element={<DogPage />} />
        <Route path="/katten" element={<WorkInProgress />} />
        <Route path="/meer" element={<WorkInProgress />} />
        <Route path="/contact" element={<WorkInProgress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
