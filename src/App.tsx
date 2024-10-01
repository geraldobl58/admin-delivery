import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="delivery-theme">
      <Toaster richColors />
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}
