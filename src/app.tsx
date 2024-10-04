import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="delivery-theme">
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
      </QueryClientProvider>
    </ThemeProvider>
  );
}
