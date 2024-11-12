import { Suspense } from "react";
import "./App.css";
import Homepage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
