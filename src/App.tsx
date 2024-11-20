import { Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { routes } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import { LayoutProvider } from "./context/LayoutContext";

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <LayoutProvider>
            <RouterProvider router={router} />
          </LayoutProvider>
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  );
};

export default App;
