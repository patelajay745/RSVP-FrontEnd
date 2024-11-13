import { Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Suspense>
  );
};

export default App;
