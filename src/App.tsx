import { Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { routes } from "./routes";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  );
};

export default App;
